(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{33:function(t,e,n){"use strict";function i(t,e){if("string"==typeof e)return void(t.innerHTML=e);const n=t.firstChild;n?t.lastChild===n?n.replaceWith(e):(t.textContent="",t.append(e)):t.append(e)}n.d(e,"a",(function(){return i}))},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n(66),s=n(45),o=n(67),a=n(14),r=n(28);let l=()=>{document.addEventListener("paste",t=>{if(!Object(i.a)(t.target,'contenteditable="true"'))return;t.preventDefault();let e=(t.originalEvent||t).clipboardData.getData("text/plain"),n=r.b.parseEntities(e);n=n.filter(t=>"messageEntityEmoji"===t._||"messageEntityLinebreak"===t._),e=r.b.wrapRichText(e,{entities:n,noLinks:!0,wrappingDraft:!0}),window.document.execCommand("insertHTML",!1,e)}),l=null};var c;!function(t){t[t.Neutral=0]="Neutral",t[t.Valid=1]="Valid",t[t.Error=2]="Error"}(c||(c={}));e.b=class{constructor(t={}){this.options=t,this.container=document.createElement("div"),this.container.classList.add("input-field"),t.maxLength&&(t.showLengthOn=Math.min(40,Math.round(t.maxLength/3)));const{placeholder:e,maxLength:n,showLengthOn:i,name:r,plainText:c}=t;let h,u,d=t.label||t.labelText;if(c)this.container.innerHTML=`\n      <input type="text" ${r?`name="${r}"`:""} autocomplete="off" ${d?'required=""':""} class="input-field-input">\n      `,h=this.container.firstElementChild;else{l&&l(),this.container.innerHTML='\n      <div contenteditable="true" class="input-field-input"></div>\n      ',h=this.container.firstElementChild;const e=new MutationObserver(()=>{u&&u()});h.addEventListener("input",()=>{Object(o.a)(h)&&(h.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=h.innerHTML,this.onFakeInput())}),e.observe(h,{characterData:!0,childList:!0,subtree:!0}),t.animate&&(h.classList.add("scrollable","scrollable-y"),this.wasInputFakeClientHeight=0,this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=h.className+" input-field-input-fake")}if(h.setAttribute("dir","auto"),e&&(Object(a._i18n)(h,e,void 0,"placeholder"),this.inputFake&&Object(a._i18n)(this.inputFake,e,void 0,"placeholder")),d||e){const t=document.createElement("div");t.classList.add("input-field-border"),this.container.append(t)}if(d&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),n){const t=this.container.lastElementChild;let e=!1;u=()=>{const o=h.classList.contains("error"),a=c?h.value.length:[...Object(s.a)(h,!1).value].length,r=n-a,l=r<0;h.classList.toggle("error",l),l||r<=i?(this.setLabel(),t.append(` (${n-a})`),e||(e=!0)):(o&&!l||e)&&(this.setLabel(),e=!1)},h.addEventListener("input",u)}this.input=h}select(){this.input.value&&this.input.select()}setLabel(){this.label.textContent="",this.options.labelText?this.label.innerHTML=this.options.labelText:this.label.append(Object(a.i18n)(this.options.label,this.options.labelOptions))}onFakeInput(){const{scrollHeight:t,clientHeight:e}=this.inputFake;this.wasInputFakeClientHeight=e,this.input.style.height=t?t+"px":""}get value(){return this.options.plainText?this.input.value:Object(s.a)(this.input,!1).value}set value(t){this.setValueSilently(t,!1);const e=new Event("input",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(e)}setValueSilently(t,e=!0){this.options.plainText?this.input.value=t:(this.input.innerHTML=t,this.inputFake&&(this.inputFake.innerHTML=t,e&&this.onFakeInput()))}isValid(){return!this.input.classList.contains("error")&&this.value!==this.originalValue}setOriginalValue(t="",e=!1){this.originalValue=t,this.options.plainText||(t=r.b.wrapDraftText(t)),e?this.setValueSilently(t,!1):this.value=t}setState(t,e){e&&(this.label.textContent="",this.label.append(Object(a.i18n)(e,this.options.labelOptions))),this.input.classList.toggle("error",!!(t&c.Error)),this.input.classList.toggle("valid",!!(t&c.Valid))}setError(t){this.setState(c.Error,t)}}},42:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return h}));var i=n(1),s=n(41),o=n(75),a=n(76),r=n(3);class l{constructor(t,e="",n=document.createElement("div")){this.el=t,this.container=n,this.onScrollMeasure=0,this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation=!1,this.container.classList.add("scrollable"),this.log=Object(s.b)("SCROLL"+(e?"-"+e:""),s.a.Error),t&&(Array.from(t.children).forEach(t=>this.container.append(t)),t.append(this.container))}setListeners(){window.addEventListener("resize",this.onScroll,{passive:!0}),this.container.addEventListener("scroll",this.onScroll,{passive:!0,capture:!0}),Object(a.a)(()=>{this.isHeavyAnimationInProgress=!0,this.onScrollMeasure&&(this.needCheckAfterAnimation=!0,window.cancelAnimationFrame(this.onScrollMeasure))},()=>{this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation&&(this.onScroll(),this.needCheckAfterAnimation=!1)})}append(t){this.container.append(t)}scrollIntoViewNew(t,e,n,i,s,a,r){return Object(o.b)(this.container,t,e,n,i,s,a,r)}}class c extends l{constructor(t,e="",n=300,i){super(t,e),this.onScrollOffset=n,this.onAdditionalScroll=null,this.onScrolledTop=null,this.onScrolledBottom=null,this.lastScrollTop=0,this.lastScrollDirection=0,this.loadedAll={top:!0,bottom:!1},this.onScroll=()=>{if(this.isHeavyAnimationInProgress)return this.onScrollMeasure&&window.cancelAnimationFrame(this.onScrollMeasure),void(this.needCheckAfterAnimation=!0);(this.onScrolledTop||this.onScrolledBottom||this.splitUp||this.onAdditionalScroll)&&(this.onScrollMeasure&&window.cancelAnimationFrame(this.onScrollMeasure),this.onScrollMeasure=window.requestAnimationFrame(()=>{this.onScrollMeasure=0;const t=this.container.scrollTop;this.lastScrollDirection=this.lastScrollTop===t?0:this.lastScrollTop<t?1:-1,this.lastScrollTop=t,this.onAdditionalScroll&&0!==this.lastScrollDirection&&this.onAdditionalScroll(),this.checkForTriggers&&this.checkForTriggers()}))},this.checkForTriggers=()=>{if(!this.onScrolledTop&&!this.onScrolledBottom)return;if(this.isHeavyAnimationInProgress)return void this.onScroll();const t=this.container.scrollHeight;if(!t)return;const e=t-this.container.clientHeight,n=this.lastScrollTop;this.onScrolledTop&&n<=this.onScrollOffset&&this.lastScrollDirection<=0&&this.onScrolledTop(),this.onScrolledBottom&&e-n<=this.onScrollOffset&&this.lastScrollDirection>=0&&this.onScrolledBottom()},this.container.classList.add("scrollable-y"),this.setListeners()}setVirtualContainer(t){this.splitUp=t,this.log("setVirtualContainer:",t,this)}prepend(...t){(this.splitUp||this.padding||this.container).prepend(...t)}append(...t){(this.splitUp||this.padding||this.container).append(...t)}getDistanceToEnd(){return this.scrollHeight-Math.round(this.scrollTop+this.container.offsetHeight)}get isScrolledDown(){return this.getDistanceToEnd()<=1}set scrollTop(t){this.container.scrollTop=t}get scrollTop(){return this.container.scrollTop}get scrollHeight(){return this.container.scrollHeight}}class h extends l{constructor(t,e="",n=300,s=15,o=document.createElement("div")){if(super(t,e,o),this.onScrollOffset=n,this.splitCount=s,this.container=o,this.container.classList.add("scrollable-x"),!i.isTouchSupported){const t=t=>{!t.deltaX&&this.container.scrollWidth>this.container.clientWidth&&(this.container.scrollLeft+=t.deltaY/4,Object(r.a)(t))};this.container.addEventListener("wheel",t,{passive:!1})}}}},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(27),s=n(28),o=n(64);function a(t,e=!0){const n=[],i=[],a=e?[]:void 0;Object(o.a)(t,n,i,void 0,void 0,a),i.length&&n.push(i.join(""));let r=n.join("\n");return r=r.replace(/\u00A0/g," "),a&&s.b.combineSameEntities(a),{value:r,entities:a}}i.a.getRichValue=a},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(16),s=n(31),o=n(17),a=n(14);class r{constructor(t={}){const e=this.label=document.createElement("label");e.classList.add("checkbox-field"),t.restriction&&e.classList.add("checkbox-field-restriction"),t.round&&e.classList.add("checkbox-field-round"),t.disabled&&this.toggleDisability(!0);const n=this.input=document.createElement("input");let r;if(n.type="checkbox",t.name&&(n.id="input-"+t.name),t.checked&&(n.checked=!0),t.stateKey&&i.default.getState().then(e=>{const o=Object(s.d)(e,t.stateKey);let a;a=t.stateValues?1===t.stateValues.indexOf(o):o,this.setValueSilently(a),n.addEventListener("change",()=>{let e;e=t.stateValues?t.stateValues[n.checked?1:0]:n.checked,i.default.setByKey(t.stateKey,e)})}),t.text?(r=this.span=document.createElement("span"),r.classList.add("checkbox-caption"),Object(a._i18n)(r,t.text,t.textArgs)):e.classList.add("checkbox-without-caption"),e.append(n),t.toggle){e.classList.add("checkbox-field-toggle");const t=document.createElement("div");t.classList.add("checkbox-toggle"),e.append(t)}else{const t=document.createElement("div");t.classList.add("checkbox-box");const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("checkbox-box-check"),n.setAttributeNS(null,"viewBox","0 0 24 24");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS(null,"href","#check"),i.setAttributeNS(null,"x","-1"),n.append(i);const s=document.createElement("div");s.classList.add("checkbox-box-background");const o=document.createElement("div");o.classList.add("checkbox-box-border"),t.append(o,s,n),e.append(t)}r&&e.append(r),t.withRipple?(e.classList.add("checkbox-ripple","hover-effect"),Object(o.ripple)(e,void 0,void 0,!0)):t.withHover&&e.classList.add("hover-effect")}get checked(){return this.input.checked}set checked(t){this.setValueSilently(t);const e=new Event("change",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(e)}setValueSilently(t){this.input.checked=t}toggleDisability(t){return this.label.classList.toggle("checkbox-disabled",t),()=>this.toggleDisability(!t)}}},49:function(t,e,n){"use strict";function i(t,e){return e?t.forEach(t=>t.setAttribute("disabled","true")):t.forEach(t=>t.removeAttribute("disabled")),()=>i(t,!e)}n.d(e,"a",(function(){return i}))},55:function(t,e,n){"use strict";function i(t,e){return t.closest(e)}n.d(e,"a",(function(){return i}))},64:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));const i={bold:{match:'[style*="font-weight"], b',entityName:"messageEntityBold"},underline:{match:'[style*="underline"], u',entityName:"messageEntityUnderline"},italic:{match:'[style*="italic"], i',entityName:"messageEntityItalic"},monospace:{match:'[style*="monospace"], [face="monospace"]',entityName:"messageEntityPre"},strikethrough:{match:'[style*="line-through"], strike',entityName:"messageEntityStrike"},link:{match:"A:not(.follow)",entityName:"messageEntityTextUrl"},mentionName:{match:"A.follow",entityName:"messageEntityMentionName"}};function s(t,e,n,o,a,r,l={offset:0}){if(3===t.nodeType){const e=t.nodeValue;if(o===t?n.push(e.substr(0,a)+""+e.substr(a)):n.push(e),r&&e.trim()&&t.parentNode){const n=t.parentElement;for(const t in i){const s=i[t],o=n.closest(s.match+", [contenteditable]");o&&null===o.getAttribute("contenteditable")&&("messageEntityTextUrl"===s.entityName?r.push({_:s.entityName,url:n.href,offset:l.offset,length:e.length}):"messageEntityMentionName"===s.entityName?r.push({_:s.entityName,offset:l.offset,length:e.length,user_id:+n.dataset.follow}):r.push({_:s.entityName,offset:l.offset,length:e.length}))}}return void(l.offset+=e.length)}if(1!==t.nodeType)return;const c=o===t,h="DIV"===t.tagName||"P"===t.tagName;if(h&&n.length||"BR"===t.tagName)e.push(n.join("")),n.splice(0,n.length);else if("IMG"===t.tagName){const e=t.alt;e&&(n.push(e),l.offset+=e.length)}c&&!a&&n.push("");let u=t.firstChild;for(;u;)s(u,e,n,o,a,r,l),u=u.nextSibling;c&&a&&n.push(""),h&&n.length&&(e.push(n.join("")),n.splice(0,n.length))}},66:function(t,e,n){"use strict";function i(t,e){return t.closest(`[${e}]`)}n.d(e,"a",(function(){return i}))},67:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(45);function s(t){return t.hasAttribute("contenteditable")||"INPUT"!==t.tagName?!Object(i.a)(t,!1).value.trim():!t.value.trim()}},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(54),s=n(62),o=function(t,e,n,i){return new(n||(n=Promise))((function(s,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function r(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};var a=new class{constructor(){this.blobSupported=!0;try{Object(s.a)([],"")}catch(t){this.blobSupported=!1}}isAvailable(){return this.blobSupported}write(t,e){return e instanceof Blob?Object(s.d)(e).then(e=>t.write(e)):t.write(e)}getFakeFileWriter(t,e){const n=[];return{write:t=>o(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;n.push(t)})),truncate:()=>{n.length=0},finalize:(i=!0)=>{const o=Object(s.a)(n,t);return i&&e&&e(o),o}}}},r=function(t,e,n,i){return new(n||(n=Promise))((function(s,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function r(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};class l{constructor(t){this.dbName=t,this.useStorage=!0,i.a.test&&(this.dbName+="_test"),l.STORAGES.length&&(this.useStorage=l.STORAGES[0].useStorage),this.openDatabase(),l.STORAGES.push(this)}openDatabase(){var t;return null!==(t=this.openDbPromise)&&void 0!==t?t:this.openDbPromise=caches.open(this.dbName)}delete(t){return this.timeoutOperation(e=>e.delete("/"+t))}deleteAll(){return caches.delete(this.dbName)}get(t){return this.timeoutOperation(e=>e.match("/"+t))}save(t,e){return this.timeoutOperation(n=>n.put("/"+t,e))}getFile(t,e="blob"){return this.get(t).then(t=>{if(!t)throw"NO_ENTRY_FOUND";return t[e]()})}saveFile(t,e){e instanceof Blob||(e=Object(s.a)(e));const n=new Response(e,{headers:{"Content-Length":""+e.size}});return this.save(t,n).then(()=>e)}timeoutOperation(t){return this.useStorage?new Promise((e,n)=>r(this,void 0,void 0,(function*(){let i=!1;const s=setTimeout(()=>{n(),i=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const s=yield t(n);if(i)return;e(s)}catch(t){n(t)}clearTimeout(s)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(t,e){const n=a.getFakeFileWriter(e,e=>this.saveFile(t,e).catch(()=>e));return Promise.resolve(n)}static toggleStorage(t){return Promise.all(this.STORAGES.map(e=>{if(e.useStorage=t,!t)return e.deleteAll()}))}}l.STORAGES=[]},86:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(1);function s(t,e=!1){if(!i.isTouchSupported||e&&document.activeElement===t)if(t.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var n=document.createRange();n.selectNodeContents(t),n.collapse(!1);var s=window.getSelection();s.removeAllRanges(),s.addRange(n)}else if(void 0!==document.body.createTextRange){var o=document.body.createTextRange();o.moveToElementText(t),o.collapse(!1),o.select()}}}}]);
//# sourceMappingURL=7.a3a111d565d465145ab1.chunk.js.map