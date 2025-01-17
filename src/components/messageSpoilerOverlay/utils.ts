import {animate} from '../../helpers/animation';
import deferredPromise from '../../helpers/cancellablePromise';
import themeController from '../../helpers/themeController';
import {logger} from '../../lib/logger';
import BezierEasing from '../../vendor/bezierEasing';

export const UnwrapEasing = BezierEasing(0.45, 0.37, 0.29, 1);

const MAX_SPACE_BETWEEN_SPOILER_LINES = 2;
const RESIZE_PAINT_CHECK_ATTEMPTS = 100;
const RESIZE_PAINT_COMPARISON_ERROR = 0.1;

export type CustomDOMRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  color?: string;
};

type RGBA = Record<'a' | 'r' | 'g' | 'b', number>;


export function getInnerCustomRect(parentRect: DOMRect, rect: CustomDOMRect): CustomDOMRect {
  return {
    left: rect.left - parentRect.left,
    top: rect.top - parentRect.top,
    width: rect.width,
    height: rect.height
  };
}

export function getActualRectForCustomRect(parentRect: DOMRect, rect: CustomDOMRect): CustomDOMRect {
  return {
    left: parentRect.left + rect.left,
    top: parentRect.top + rect.top,
    width: rect.width,
    height: rect.height
  };
}

export function computeMaxDistToMargin(e: MouseEvent, rect: DOMRect) {
  return Math.max(
    Math.hypot(e.clientX - rect.left, e.clientY - rect.top),
    Math.hypot(e.clientX - rect.left, e.clientY - rect.bottom),
    Math.hypot(e.clientX - rect.right, e.clientY - rect.top),
    Math.hypot(e.clientX - rect.right, e.clientY - rect.bottom)
  );
}

export function getTimeForDist(dist: number) {
  // per 160px move time = 400ms
  return Math.min(600, (dist / 160) * 400);
}

export function toDOMRectArray(list: DOMRectList) {
  const result: DOMRect[] = [];
  for(let i = 0; i < list.length; i++) {
    result.push(list.item(i));
  }
  return result;
}

export function isMouseCloseToAnySpoilerElement(e: MouseEvent, parentElement: HTMLElement, spanRects: CustomDOMRect[]) {
  const overlayRect = parentElement.getBoundingClientRect();

  for(const rect of spanRects) {
    const actualRect = getActualRectForCustomRect(overlayRect, rect);

    if(
      actualRect.left <= e.clientX &&
      e.clientX <= actualRect.left + actualRect.width &&
      actualRect.top <= e.clientY &&
      e.clientY <= actualRect.top + actualRect.height
    )
      return true;
  }

  return false;
}

export function getParticleColor() {
  return themeController.isNight() ? 'white' : '#101010';
}

const resizeLog = logger('resize-paint');

// The element is not immediately the size we need after the resize callback was triggered, so we need to wait until the changes are applied in the DOM
export async function waitResizeToBePainted(resizeEntry: ResizeObserverEntry) {
  const deferred = deferredPromise<void>();

  let attempts = 0;

  const entryRect = resizeEntry.contentRect;

  animate(() => {
    const targetRect = resizeEntry.target.getBoundingClientRect();
    if(
      Math.abs(targetRect.width - entryRect.width) < RESIZE_PAINT_COMPARISON_ERROR &&
      Math.abs(targetRect.height - entryRect.height) < RESIZE_PAINT_COMPARISON_ERROR
    ) {
      deferred.resolve();
      resizeLog('Resize was painted after attempts :>> ', attempts);
      return;
    }

    return attempts++ < RESIZE_PAINT_CHECK_ATTEMPTS || deferred.reject();
  });

  return deferred;
}


function parseRgba(rgba: string): RGBA {
  const match = rgba.match(/rgba?\((\d+), (\d+), (\d+),?\s?(\d?.?\d+)?\)/);
  if(!match) return {
    r: 0, g: 0, b: 0, a: 0
  };
  return {
    r: parseInt(match[1], 10),
    g: parseInt(match[2], 10),
    b: parseInt(match[3], 10),
    a: parseFloat(match[4] ?? '1')
  };
}

function blendColors(base: RGBA, overlay: RGBA): RGBA {
  const blendedAlpha = overlay.a + base.a * (1 - overlay.a);
  const r = Math.round(
    (overlay.a * overlay.r + base.a * base.r * (1 - overlay.a)) / blendedAlpha
  );
  const g = Math.round(
    (overlay.a * overlay.g + base.a * base.g * (1 - overlay.a)) / blendedAlpha
  );
  const b = Math.round(
    (overlay.a * overlay.b + base.a * base.b * (1 - overlay.a)) / blendedAlpha
  );
  return {
    r,
    g,
    b,
    a: blendedAlpha
  };
}

export function computeFinalBackgroundColor(element: HTMLElement) {
  let color = {r: 0, g: 0, b: 0, a: 0};

  while(element && color.a < 1) {
    const bgColor = window.getComputedStyle(element).backgroundColor;
    if(bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
      const rgba = parseRgba(bgColor);
      color = blendColors(rgba, color);
    }
    element = element.parentElement;
  }

  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export function getCustomDOMRectsForSpoilerSpan(el: HTMLElement, parentRect: DOMRect): CustomDOMRect[] {
  const color = computeFinalBackgroundColor(el);

  const originalRects = toDOMRectArray(el.getClientRects());

  const normalizedRects = originalRects
  .map((spoilerRect) => getInnerCustomRect(parentRect, spoilerRect))
  .map((rect) => ({...rect, color}));

  let blockquote;

  if(blockquote = el.closest('blockquote')) {
    const bqRect = blockquote.getBoundingClientRect();

    return normalizedRects
    // Blockquote collapsed case
    .filter((rect) => rect.top + parentRect.top + rect.height < bqRect.bottom);
  }

  return normalizedRects;
}

export function adjustSpaceBetweenCloseRects(rects: CustomDOMRect[]): CustomDOMRect[] {
  rects = [...rects];

  for(let idx = 0; idx < rects.length - 1; idx++) {
    const rect = rects[idx];
    const nextRect = rects[idx + 1];

    const dist = nextRect.top - (rect.top + rect.height);
    if(dist > 0 && dist <= MAX_SPACE_BETWEEN_SPOILER_LINES) {
      const flooredHalfDist = (dist / 2); //  try to make whole pixels
      const restHalfDist = dist - flooredHalfDist;

      rects[idx + 1] = {...nextRect, top: nextRect.top - flooredHalfDist, height: nextRect.height + flooredHalfDist};
      rects[idx] = {...rect, height: rect.height + restHalfDist};
    }
  }

  return rects;
}
