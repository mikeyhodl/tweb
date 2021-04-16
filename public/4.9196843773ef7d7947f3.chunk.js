(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{36:function(t,e,i){"use strict";i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return l}));var n=i(9),s=i(7),a=i(18),o=i(39),r=i(42),c=i(8),d=i(0);class h{constructor(t,e,i={}){if(this.element=document.createElement("div"),this.container=document.createElement("div"),this.header=document.createElement("div"),this.title=document.createElement("div"),this.onEscape=()=>!0,this.hide=()=>{r.a.back("popup")},this.destroy=()=>{this.onClose&&this.onClose(),this.element.classList.add("hiding"),this.element.classList.remove("active"),this.btnClose&&this.btnClose.removeEventListener("click",this.hide),n.default.overlayIsActive=!1,r.a.removeItem(this.navigationItem),this.navigationItem=void 0,setTimeout(()=>{this.element.remove(),this.onCloseAfterTimeout&&this.onCloseAfterTimeout(),o.a.checkAnimations(!1)},150)},this.element.classList.add("popup"),this.element.className="popup"+(t?" "+t:""),this.container.classList.add("popup-container","z-depth-1"),this.header.classList.add("popup-header"),this.title.classList.add("popup-title"),this.header.append(this.title),i.closable&&(this.btnClose=document.createElement("span"),this.btnClose.classList.add("btn-icon","popup-close","tgico-close"),this.header.prepend(this.btnClose),this.btnClose.addEventListener("click",this.hide,{once:!0})),i.overlayClosable){const t=e=>{Object(d.a)(e.target,"popup-container")||(this.hide(),this.element.removeEventListener("click",t))};this.element.addEventListener("click",t)}if(i.withConfirm&&(this.btnConfirm=document.createElement("button"),this.btnConfirm.classList.add("btn-primary","btn-color-primary"),!0!==i.withConfirm&&this.btnConfirm.append(Object(c.i18n)(i.withConfirm)),this.header.append(this.btnConfirm),Object(a.ripple)(this.btnConfirm)),this.container.append(this.header),i.body&&(this.body=document.createElement("div"),this.body.classList.add("popup-body"),this.container.append(this.body)),e&&e.length){const t=document.createElement("div");t.classList.add("popup-buttons"),2===e.length&&t.classList.add("popup-buttons-row");const i=e.map(t=>{const e=document.createElement("button");return e.className="btn"+(t.isDanger?" danger":" primary"),Object(a.ripple)(e),t.text?e.innerHTML=t.text:e.append(Object(c.i18n)(t.langKey,t.langArgs)),t.callback?e.addEventListener("click",()=>{t.callback(),this.destroy()},{once:!0}):t.isCancel&&e.addEventListener("click",()=>{this.destroy()},{once:!0}),e});t.append(...i),this.container.append(t)}this.element.append(this.container)}show(){this.navigationItem={type:"popup",onPop:this.destroy,onEscape:this.onEscape},r.a.pushItem(this.navigationItem),Object(s.c)(),document.body.append(this.element),this.element.offsetWidth,this.element.classList.add("active"),n.default.overlayIsActive=!0,o.a.checkAnimations(!0)}}const l=t=>(t.find(t=>t.isCancel)||t.push({langKey:"Cancel",isCancel:!0}),t)},44:function(t,e,i){"use strict";var n=i(10),s=i(16),a=i(13);const o=new class{getState(){return a.a.invokeApi("account.getPassword").then(t=>t)}updateSettings(t={}){return this.getState().then(e=>{let i,n;const s={password:null,new_settings:{_:"account.passwordInputSettings",hint:t.hint,email:t.email}};i=t.currentPassword?a.a.computeSRP(t.currentPassword,e):Promise.resolve({_:"inputCheckPasswordEmpty"});const o=e.new_algo,r=new Uint8Array(o.salt1.length+32);return r.randomize(),r.set(o.salt1,0),o.salt1=r,n=t.newPassword?a.a.computeSRP(t.newPassword,e,!0):Promise.resolve(new Uint8Array),Promise.all([i,n]).then(t=>(s.password=t[0],s.new_settings.new_algo=o,s.new_settings.new_password_hash=t[1],a.a.invokeApi("account.updatePasswordSettings",s)))})}check(t,e,i={}){return a.a.computeSRP(t,e).then(t=>a.a.invokeApi("auth.checkPassword",{password:t},i).then(t=>("auth.authorization"===t._&&(s.a.saveApiUser(t.user),a.a.setUserAuth(t.user.id)),t)))}confirmPasswordEmail(t){return a.a.invokeApi("account.confirmPasswordEmail",{code:t})}resendPasswordEmail(){return a.a.invokeApi("account.resendPasswordEmail")}cancelPasswordEmail(){return a.a.invokeApi("account.cancelPasswordEmail")}};n.a.passwordManager=o,e.a=o},55:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(7),s=i(17);class a extends s.b{constructor(t={}){super(Object.assign({plainText:!0},t)),this.passwordVisible=!1,this.onVisibilityClick=t=>{Object(n.f)(t),this.passwordVisible=!this.passwordVisible,this.toggleVisible.classList.toggle("eye-hidden",this.passwordVisible),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional&&this.onVisibilityClickAdditional()};const e=this.input;e.type="password",e.setAttribute("required",""),e.autocomplete="off";const i=document.createElement("input");i.classList.add("stealthy"),i.tabIndex=-1,i.type="password",e.parentElement.prepend(i),e.parentElement.insertBefore(i.cloneNode(),e.nextSibling);const s=this.toggleVisible=document.createElement("span");s.classList.add("toggle-visible","tgico"),this.container.classList.add("input-field-password"),this.container.append(s),s.addEventListener("click",this.onVisibilityClick),s.addEventListener("touchend",this.onVisibilityClick)}}},58:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(32);class s{constructor(t,e){this.passwordInputField=t,this.size=e,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=n.b.loadAnimationFromURL({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"assets/img/TwoFactorSetupMonkeyPeek.tgs").then(t=>(this.animation=t,this.animation.addEventListener("enterFrame",t=>{(1===this.animation.direction&&t>=this.needFrame||-1===this.animation.direction&&t<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())}),this.passwordInputField.onVisibilityClickAdditional=()=>{this.passwordInputField.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},n.b.waitForFirstFrame(t)))}remove(){this.animation&&this.animation.remove()}}},67:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i(52);var s=function(t,e){let i,n,s,a={},o=0,r=0,c=0,d=0,h=0;function l(){t.classList.add("crop-blur"),t.draggable=!1,s=new Image,s.src=t.src,s.draggable=!1,s.classList.add("crop-overlay-image"),e||(e=document.createElement("canvas")),i=document.createElement("div"),i.classList.add("crop-component"),n=document.createElement("div"),n.classList.add("crop-overlay");const a=document.createElement("div");a.classList.add("crop-overlay-color"),i.appendChild(n);t.parentNode.appendChild(i),i.appendChild(s),i.appendChild(t),i.appendChild(a),n.appendChild(s),s.style.maxWidth=t.width+"px",h=t.naturalWidth/t.offsetWidth;const o=t.offsetWidth/2-100,r=t.offsetHeight/2-100;p(200,200),m(o,r),u(o,r),n.addEventListener("mousedown",g,!1),n.addEventListener("touchstart",g,!1),n.addEventListener("wheel",b,!1),document.addEventListener("keypress",f,!1)}function p(t,e){c=t*h,d=e*h,n.style.width=t+"px",n.style.height=e+"px"}function m(t,e){r=e*h,o=t*h,s.style.top=-e+"px",s.style.left=-t+"px"}function u(t,e){n.style.top=e+"px",n.style.left=t+"px"}function v(t){t=t*Math.PI*2;let e,i,a,o,r=Math.floor(n.clientWidth+t),c=Math.floor(n.clientHeight+t),d=s.clientWidth,h=s.clientHeight;r<50||r>d||(e=n.offsetLeft-t/2,i=n.offsetTop-t/2,a=e+r,o=i+c,e<0&&(e=0),i<0&&(i=0),a>d||o>h||(p(r,r),m(e,i),u(e,i)))}function f(t){switch(t.preventDefault(),String.fromCharCode(t.charCode)){case"+":v(4);break;case"-":v(-4)}}function b(t){t.preventDefault(),v(t.deltaY>0?1:-1)}function g(t){t.preventDefault(),t.stopPropagation(),function(t){a.container_width=n.offsetWidth,a.container_height=n.offsetHeight,a.container_left=n.offsetLeft,a.container_top=n.offsetTop,a.mouse_x=(t.clientX||t.pageX||t.touches&&t.touches[0].clientX)+window.scrollX,a.mouse_y=(t.clientY||t.pageY||t.touches&&t.touches[0].clientY)+window.scrollY}(t),document.addEventListener("mousemove",y),document.addEventListener("touchmove",y),document.addEventListener("mouseup",w),document.addEventListener("touchend",w)}function w(t){t.preventDefault(),document.removeEventListener("mouseup",w),document.removeEventListener("touchend",w),document.removeEventListener("mousemove",y),document.removeEventListener("touchmove",y)}function y(t){let e,i,o,r,c={x:0,y:0};t.preventDefault(),t.stopPropagation(),c.x=t.pageX||t.touches&&t.touches[0].pageX,c.y=t.pageY||t.touches&&t.touches[0].pageY,e=c.x-(a.mouse_x-a.container_left),i=c.y-(a.mouse_y-a.container_top),o=n.offsetWidth,r=n.offsetHeight,e<0?e=0:e>s.offsetWidth-o&&(e=s.offsetWidth-o),i<0?i=0:i>s.offsetHeight-r&&(i=s.offsetHeight-r),m(e,i),u(e,i)}return t.complete?l():t.onload=l,{crop:function(){e.width=c,e.height=d,e.getContext("2d").drawImage(t,o,r,c,d,0,0,c,d)},removeHandlers:function(){n.removeEventListener("mousedown",g),n.removeEventListener("touchstart",g),n.removeEventListener("wheel",b),document.removeEventListener("mouseup",w),document.removeEventListener("touchend",w),document.removeEventListener("mousemove",y),document.removeEventListener("touchmove",y),document.removeEventListener("keypress",f),i.remove(),n.remove(),s.remove()}}},a=i(36),o=i(18),r=i(8);class c extends a.b{constructor(){super("popup-avatar",null,{closable:!0}),this.image=new Image,this.cropper={crop:()=>{},removeHandlers:()=>{}},this.h6=document.createElement("h6"),Object(r._i18n)(this.h6,"Popup.Avatar.Title"),this.btnClose.classList.remove("btn-icon"),this.header.append(this.h6),this.cropContainer=document.createElement("div"),this.cropContainer.classList.add("crop"),this.cropContainer.append(this.image),this.input=document.createElement("input"),this.input.type="file",this.input.style.display="none",this.input.addEventListener("change",t=>{const e=t.target.files[0];if(!e)return;const i=new FileReader;i.onload=t=>{const e=t.target.result;this.image=new Image,this.cropContainer.append(this.image),this.image.src=e,this.image.onload=()=>{this.show(),this.cropper=s(this.image,this.canvas),this.input.value=""}},i.readAsDataURL(e)},!1),this.btnSubmit=document.createElement("button"),this.btnSubmit.className="btn-primary btn-color-primary btn-circle btn-crop btn-icon tgico-check z-depth-1",Object(o.ripple)(this.btnSubmit),this.btnSubmit.addEventListener("click",()=>{this.cropper.crop(),this.btnClose.click(),this.canvas.toBlob(t=>{this.blob=t,this.darkenCanvas(),this.resolve()},"image/jpeg",1)}),this.container.append(this.cropContainer,this.btnSubmit,this.input),this.onCloseAfterTimeout=()=>{this.cropper.removeHandlers(),this.image&&this.image.remove()}}resolve(){this.onCrop(()=>n.a.upload(this.blob))}open(t,e){this.canvas=t,this.onCrop=e,this.input.click()}darkenCanvas(){let t=this.canvas.getContext("2d");t.fillStyle="rgba(0, 0, 0, 0.3)",t.fillRect(0,0,this.canvas.width,this.canvas.height)}}},77:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(32);class s{constructor(t,e){this.inputField=t,this.size=e,this.max=45,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper");const i=t.input;i.addEventListener("blur",()=>{this.playAnimation(0)}),i.addEventListener("input",e=>{this.playAnimation(t.value.length)})}playAnimation(t){if(!this.animation)return;let e;(t=Math.min(t,30))?(e=Math.round(Math.min(this.max,t)*(165/this.max)+11.33),this.idleAnimation&&(this.idleAnimation.stop(!0),this.idleAnimation.canvas.style.display="none"),this.animation.canvas.style.display=""):e=0;const i=this.needFrame>e?-1:1;this.animation.setDirection(i),0!==this.needFrame&&0===e&&this.animation.setSpeed(7),this.needFrame=e,this.animation.play()}load(){return this.loadPromise?this.loadPromise:this.loadPromise=Promise.all([n.b.loadAnimationFromURL({container:this.container,loop:!0,autoplay:!0,width:this.size,height:this.size},"assets/img/TwoFactorSetupMonkeyIdle.tgs").then(t=>(this.idleAnimation=t,this.inputField.value.length||t.play(),n.b.waitForFirstFrame(t))),n.b.loadAnimationFromURL({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size},"assets/img/TwoFactorSetupMonkeyTracking.tgs").then(t=>(this.animation=t,this.inputField.value.length||(this.animation.canvas.style.display="none"),this.animation.addEventListener("enterFrame",t=>{(1===this.animation.direction&&t>=this.needFrame||-1===this.animation.direction&&t<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause()),0===t&&0===this.needFrame&&this.idleAnimation&&(this.idleAnimation.canvas.style.display="",this.idleAnimation.play(),this.animation.canvas.style.display="none")}),n.b.waitForFirstFrame(t)))])}remove(){this.animation&&this.animation.remove(),this.idleAnimation&&this.idleAnimation.remove()}}},78:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(17);class s extends n.b{constructor(t){super(Object.assign({plainText:!0},t));const e=this.input;e.type="tel",e.setAttribute("required",""),e.autocomplete="off";let i=0;this.input.addEventListener("input",e=>{this.input.classList.remove("error"),this.setLabel();const n=this.value.replace(/\D/g,"").slice(0,t.length);this.setValueSilently(n);const s=this.value.length;if(s===t.length)t.onFill(+this.value);else if(s===i)return;i=s})}}}}]);