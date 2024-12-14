/*
 * Amppa Clinic
 * ===================
 * 
 * 
 * 
 * 
 * 
 * 
 */
"use strict";!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){if(!e.document)throw new Error("HC Off-canvas Nav requires a browser to run.");module.exports=t(e)}else"function"==typeof define&&define.amd?define("hcOffcanvasNav",[],t(e)):t(e)}("undefined"!=typeof window?window:this,function(re){var ie=re.document,se=ie.getElementsByTagName("html")[0],oe=0,le="nav-open",i=function(e,t){if(t=t||{},"string"==typeof e&&(e="#"===e.charAt(0)&&-1===e.indexOf(" ")?ie.querySelector(e):ie.querySelectorAll(e)),!e)return!1;var ee=i.Helpers;void 0!==t.maxWidth&&(ee.deprecated("maxWidth","disableAt","option"),t.disableAt=t.maxWidth);var te=Object.assign({},{width:280,height:"auto",disableAt:!1,pushContent:null,swipeGestures:!0,expanded:!1,position:"left",levelOpen:"overlap",levelSpacing:40,levelTitles:!0,closeOpenLevels:!0,closeActiveLevel:!1,navTitle:null,navClass:"",disableBody:!0,closeOnClick:!0,customToggle:null,bodyInsert:"prepend",keepClasses:!0,removeOriginalNav:!1,rtl:!1,insertClose:!0,insertBack:!0,levelTitleAsBack:!0,labelClose:"",labelBack:"Back"},t);te.ariaLabels=Object.assign({},{open:"Open Menu",close:"Close Menu",submenu:"Submenu"},t.ariaLabels);var ne=[],ae=function(e){if(!ne.length)return!1;var t=!1;"string"==typeof e&&(e=[e]);for(var n=e.length,a=0;a<n;a++)-1!==ne.indexOf(e[a])&&(t=!0);return t},n=function(e){if(e.querySelector("ul")||"UL"===e.tagName){var E="hc-nav-"+ ++oe,l=ee.printStyle("hc-offcanvas-"+oe+"-style"),s="keydown.hcOffcanvasNav",L=ee.createElement("nav",{id:E}),c=ee.createElement("div",{class:"nav-container"});L.addEventListener("click",ee.stopPropagation),L.appendChild(c);var n,v,a,u=null,d=null,f=null,t={},p=!1,h=!1,m=null,b=0,g=0,y=0,A=null,x={},C=[],O=!1,k=[],o=null,N=null,T=!1,w=!1;te.customToggle?u=ee.getElements(te.customToggle):(u=[ee.createElement("a",{href:"#"},ee.createElement("span"))],e.insertAdjacentElement("afterend",u[0])),u&&u.length&&u.forEach(function(e){e.addEventListener("click",J(e)),e.classList.add("hc-nav-trigger",E),e.setAttribute("role","button"),e.setAttribute("aria-label",(te.ariaLabels||{}).open),e.setAttribute("aria-controls",E),e.setAttribute("aria-expanded",!1),e.addEventListener("keydown",function(e){"Enter"!==e.key&&13!==e.keyCode||setTimeout(function(){S(0,0)},0)})});var S=function(e,t,n){if("number"==typeof t&&("number"==typeof e||k.length)){var a=Array.prototype.filter.call(c.querySelectorAll(".nav-wrapper"),function(e){return e.getAttribute("data-level")==t&&("number"!=typeof n||"number"==typeof n&&e.getAttribute("data-index")==n)})[0];if(a=ee.children(a,".nav-content")[0],a=ee.children(a,"ul"),a=ee.children(a,"li"),a=ee.children(a,":not(.nav-wrapper)"),a=Array.prototype.map.call(a,function(e){return Array.prototype.slice.call(e.querySelectorAll('[tabindex="0"], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'))}).flat(),a=Array.prototype.filter.call(a,function(e){return"-1"!==e.getAttribute("tabindex")})){L.classList.add("user-is-tabbing");var r=a[0],i=a[a.length-1];"number"==typeof e?a[e].focus():(k[k.length-1].focus(),k.pop()),ie.removeEventListener(s),ie.addEventListener(s,function(e){"Tab"!==e.key&&9!==e.keyCode||(e.shiftKey?ie.activeElement===r&&(e.preventDefault(),i.focus()):ie.activeElement===i&&(e.preventDefault(),r.focus()))})}}},M=function(){ie.removeEventListener(s),d&&setTimeout(function(){d.focus()},v)},j=function(){c.style.transition="none",L.style.display="block";var e=ee.formatSizeVal(g=c.offsetWidth),t=ee.formatSizeVal(y=c.offsetHeight);l.add(".hc-offcanvas-nav."+E+".nav-position-left .nav-container","transform: translate3d(-"+e+", 0, 0)"),l.add(".hc-offcanvas-nav."+E+".nav-position-right .nav-container","transform: translate3d("+e+", 0, 0)"),l.add(".hc-offcanvas-nav."+E+".nav-position-top .nav-container","transform: translate3d(0, -"+t+", 0)"),l.add(".hc-offcanvas-nav."+E+".nav-position-bottom .nav-container","transform: translate3d(0, "+t+", 0)"),l.insert(),L.style.display="",c.style.transition="",n=re.getComputedStyle(c).transitionProperty,v=ee.toMs(re.getComputedStyle(c).transitionDuration),a=re.getComputedStyle(c).transitionTimingFunction,te.pushContent&&f&&n&&l.add(ee.getElementCssTag(f),"transition: "+n+" "+v+"ms "+a),l.insert()},r=function(e){var t=!!u&&re.getComputedStyle(u[0]).display,n=!!te.disableAt&&"max-width: "+(te.disableAt-1)+"px",a=ee.formatSizeVal(te.width),r=ee.formatSizeVal(te.height),i=ee.formatSizeVal(te.levelSpacing);(ee.isNumeric(a)||-1!==a.indexOf("px"))&&(g=parseInt(a)),(ee.isNumeric(r)||-1!==r.indexOf("px"))&&(y=parseInt(r)),ae(["disableAt","position"])&&l.reset(),l.add(".hc-offcanvas-nav."+E,"display: block",n),l.add(".hc-nav-original."+E,"display: none",n),t&&l.add(".hc-nav-trigger."+E,"display: "+(t&&"none"!==t?t:"block"),n),-1!==["left","right"].indexOf(te.position)?l.add(".hc-offcanvas-nav."+E+" .nav-container","width: "+a):l.add(".hc-offcanvas-nav."+E+" .nav-container","height: "+r),l.add(".hc-offcanvas-nav."+E+".nav-position-left .nav-container","transform: translate3d(-"+a+", 0, 0);"),l.add(".hc-offcanvas-nav."+E+".nav-position-right .nav-container","transform: translate3d("+a+", 0, 0);"),l.add(".hc-offcanvas-nav."+E+".nav-position-top .nav-container","transform: translate3d(0, -"+r+", 0);"),l.add(".hc-offcanvas-nav."+E+".nav-position-bottom .nav-container","transform: translate3d(0, "+r+", 0);"),l.add(".hc-offcanvas-nav."+E+".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper","transform: translate3d(-"+i+", 0, 0)",n),l.add(".hc-offcanvas-nav."+E+".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper","transform: translate3d("+i+", 0, 0)",n),l.add(".hc-offcanvas-nav."+E+".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper","transform: translate3d(0, -"+i+", 0)",n),l.add(".hc-offcanvas-nav."+E+".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper","transform: translate3d(0, "+i+", 0)",n),l.insert(),(!e||e&&ae("pushContent"))&&(f=te.pushContent?ee.getElements(te.pushContent)[0]:null),c.style.transition="none";var s=L.classList.contains(le),o=["hc-offcanvas-nav",te.navClass||"",E,"nav-levels-"+(te.levelOpen||"none"),"nav-position-"+te.position,te.disableBody?"disable-body":"",ee.isIos?"is-ios":"",ee.isTouchDevice?"touch-device":"",s?le:"",te.rtl?"rtl":"",!0!==te.insertClose||te.labelClose?"":"nav-close-button-empty"].join(" ").trim().replace(/  +/g," ");L.removeEventListener("click"),L.className=o,L.setAttribute("aria-hidden",!0),ie.documentElement.style.setProperty("--nav-level-spacing",te.levelSpacing+"px"),te.disableBody&&L.addEventListener("click",$),e?j():setTimeout(j,0)},i=function(){t=function c(e,t){var n=[];Array.prototype.forEach.call(e,function(e){if("UL"===e.tagName||e instanceof HTMLHeadingElement){var l={tagName:e.tagName,id:t,htmlClass:e.getAttribute("class")||null,items:[]};e instanceof HTMLHeadingElement?l.content=ee.clone(e,!1,!0):(null!==e.getAttribute("data-nav-active")&&(m=t,e.removeAttribute("data-nav-active")),Array.prototype.forEach.call(e.children,function(e){var t=null!==e.getAttribute("data-nav-custom-content"),n=t?e.children:Array.prototype.filter.call(e.children,function(e){return"UL"!==e.tagName&&!e.querySelector("ul")}).concat(e.children.length?[]:[e.firstChild]),a=t?[]:Array.prototype.slice.call(e.querySelectorAll("ul")),r=a.length?[].concat(Array.prototype.filter.call(a[0].parentNode.children,function(e){return"UL"===e.tagName||e instanceof HTMLHeadingElement})):[],i=null;if(!n.length){for(var s="",o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===Node.TEXT_NODE&&(s+=e.childNodes[o].textContent.trim());n=[ie.createTextNode(s)]}r.length&&(ee.data(e,"hc-uniqid")?i=ee.data(e,"hc-uniqid"):(i=Math.random().toString(36).substr(2),ee.data(e,"hc-uniqid",i))),null!==e.getAttribute("data-nav-active")&&(m=i,e.removeAttribute("data-nav-active")),l.items.push({id:i,htmlClass:e.getAttribute("class")||"",content:n,custom:t,subnav:r.length?c(r,i):[],highlight:null!==e.getAttribute("data-nav-highlight")})})),n.push(l)}});return n}("UL"===e.tagName?[e]:Array.prototype.filter.call(e.children,function(e){return"UL"===e.tagName||e instanceof HTMLHeadingElement}),null)},P=function(e){if(e){for(;c.firstChild;)c.removeChild(c.firstChild);x={}}!function h(n,e,m,b,t,a){var g=ee.createElement("div",{class:"nav-wrapper nav-wrapper-"+m,"data-level":m,"data-index":t||0});var r=ee.createElement("div",{class:"nav-content"});g.addEventListener("click",ee.stopPropagation);g.appendChild(r);e.appendChild(g);if(b&&(0===m||0<m&&"overlap"===te.levelOpen)){var i="string"==typeof b?b:ee.clone(re.jQuery&&b instanceof re.jQuery&&b.length?b[0]:b,!0,!0);r.insertBefore(ee.createElement("h2",{id:0===m?E+"-nav-title":null,class:0===m?"nav-title":"level-title"},i),r.firstChild),0===m&&"string"==typeof b&&L.setAttribute("aria-labelledby",E+"-nav-title")}var s=-1;n.forEach(function(e,t){if("UL"===e.tagName){s++;var p=ee.createElement("ul",{id:e.id?1<n.length?"menu-"+e.id+"-"+s:"menu-"+e.id:null,role:"menu","aria-level":m+1});r.appendChild(p),te.keepClasses&&e.htmlClass&&p.classList.add.apply(p.classList,e.htmlClass.split(" ")),e.items.forEach(function(t,e){var n=t.content;if(t.custom){var a=ee.createElement("li",{class:"nav-item nav-item-custom"},ee.createElement("div",{class:"nav-custom-content"},Array.prototype.map.call(n,function(e){return ee.clone(e,!0,!0)})));return te.keepClasses&&t.htmlClass&&a.classList.add.apply(a.classList,t.htmlClass.split(" ")),void p.appendChild(a)}var r,i=Array.prototype.filter.call(n,function(e){return"A"===e.tagName||e.nodeType!==Node.TEXT_NODE&&e.querySelector("a")})[0];i?(r=ee.clone(i,!1,!0)).classList.add("nav-item-link"):r=ee.createElement(t.subnav.length?"a":"span",{class:"nav-item-link"},Array.prototype.map.call(n,function(e){return ee.clone(e,!0,!0)})),"A"===r.tagName&&(r.setAttribute("tabindex","0"),r.setAttribute("role","menuitem"),r.getAttribute("href")||r.setAttribute("href","#")),i&&r.addEventListener("click",function(e){e.stopPropagation(),ee.hasListener(i,"click")&&i.click()}),"#"===r.getAttribute("href")&&r.addEventListener("click",ee.preventDefault),te.closeOnClick&&(W()?"A"!==r.tagName||"false"===r.dataset.navClose||null!==r.getAttribute("disabled")&&"false"!==r.getAttribute("disabled")||t.subnav.length&&(!r.getAttribute("href")||"#"===r.getAttribute("href").charAt(0))||r.addEventListener("click",$):"A"!==r.tagName||"false"===r.dataset.navClose||null!==r.getAttribute("disabled")&&"false"!==r.getAttribute("disabled")||r.addEventListener("click",$));var s=ee.createElement("li",{class:"nav-item"});if(s.appendChild(r),p.appendChild(s),te.keepClasses&&t.htmlClass&&s.classList.add.apply(s.classList,t.htmlClass.split(" ")),t.highlight&&s.classList.add("nav-highlight"),ee.wrap(r,ee.createElement("div",{class:"nav-item-wrapper"})),t.subnav.length){var o=m+1,l=t.id,c="";if(x[o]||(x[o]=0),s.classList.add("nav-parent"),W()){var v=x[o],u=ee.createElement("input",{type:"checkbox",id:E+"-"+o+"-"+v,class:"hc-chk",tabindex:-1,"data-level":o,"data-index":v,value:l});u.addEventListener("click",ee.stopPropagation),u.addEventListener("change",Q),s.insertBefore(u,s.firstChild);var d=function(e){e.addEventListener("click",function(e){if(e.stopPropagation(),u.setAttribute("checked","true"!==u.getAttribute("checked")),"createEvent"in ie){var t=ie.createEvent("HTMLEvents");t.initEvent("change",!1,!0),u.dispatchEvent(t)}}),e.addEventListener("keydown",function(e){"Enter"!==e.key&&13!==e.keyCode||(O=!0,k.push(this))}),e.setAttribute("aria-controls",1<t.subnav.length?t.subnav.filter(function(e){return"UL"===e.tagName}).map(function(e,t){return"menu-"+e.id+"-"+t}).join(" "):"menu-"+l),e.setAttribute("aria-haspopup","overlap"===te.levelOpen),e.setAttribute("aria-expanded",!1)};if(-1!==C.indexOf(l)&&(g.classList.add("sub-level-open"),g.addEventListener("click",function(){return Z(o,v)}),s.classList.add("level-open"),u.setAttribute("checked",!0)),c=!0===te.levelTitles?n[0].textContent.trim():"",r.getAttribute("href")&&"#"!==r.getAttribute("href")){var f=ee.createElement("a",{href:"#",class:"nav-next","aria-label":(te.ariaLabels||{}).submenu+": "+c,role:"menuitem",tabindex:0},ee.createElement("span"));f.addEventListener("click",ee.preventClick()),d(f),te.rtl?r.parentNode.appendChild(f):r.parentNode.insertBefore(f,r.nextSibling)}else r.appendChild(ee.createElement("span",{class:"nav-next"},ee.createElement("span"))),d(r)}else r.setAttribute("aria-expanded",!0);x[o]++,h(t.subnav,s,o,c,x[o]-1,"string"==typeof b?b:"")}})}else r.appendChild(e.content)});if(m&&void 0!==t&&!1!==te.insertBack&&"overlap"===te.levelOpen){var o=ee.children(r,"ul"),l=te.levelTitleAsBack&&a||te.labelBack||"",c=ee.createElement("a",{href:"#",class:"nav-back-button",role:"menuitem",tabindex:0},[l,ee.createElement("span")]);if(!0===te.insertBack||0===te.insertBack){var v=ee.createElement("div",{class:"nav-back"},c);r.insertBefore(v,ee.children(r,":not(.level-title)")[0])}else{var u=ee.createElement("li",{class:"nav-item nav-back"},c);ee.insertAt(u,!0===te.insertBack?0:te.insertBack,o)}var d=function(){return Z(m,t)};ee.wrap(c,ee.createElement("div",{class:"nav-item-wrapper"})),c.addEventListener("click",ee.preventClick(d)),c.addEventListener("keydown",function(e){"Enter"!==e.key&&13!==e.keyCode||(O=!0)})}if(0===m&&!1!==te.insertClose){var f=ee.createElement("a",{href:"#",class:"nav-close-button"+(te.labelClose?" has-label":""),role:"menuitem",tabindex:0,"aria-label":te.labelClose?"":(te.ariaLabels||{}).close},[te.labelClose||"",ee.createElement("span")]);if(f.addEventListener("click",ee.preventClick($)),f.addEventListener("keydown",function(e){"Enter"!==e.key&&13!==e.keyCode||M()}),b&&!0===te.insertClose)r.insertBefore(ee.createElement("div",{class:"nav-close"},f),r.children[1]);else if(!0===te.insertClose)r.insertBefore(ee.createElement("div",{class:"nav-close"},f),r.firstChild);else{var p=ee.children(r,"ul"),y=ee.createElement("li",{class:"nav-item nav-close"},f);ee.wrap(f,ee.createElement("div",{class:"nav-item-wrapper"})),ee.insertAt(y,te.insertClose,p)}}}(t,c,0,te.navTitle)},_=function(t){return function(e){"left"!==te.position&&"right"!==te.position||(o=e.touches[0].clientX,N=e.touches[0].clientY,"doc"===t?w||(ie.addEventListener("touchmove",H,ee.supportsPassive),ie.addEventListener("touchend",D,ee.supportsPassive)):(w=!0,c.addEventListener("touchmove",U,ee.supportsPassive),c.addEventListener("touchend",z,ee.supportsPassive)))}},B=function(e,t){re.addEventListener("touchmove",ee.preventDefault,ee.supportsPassive),L.style.visibility="visible",c.style[ee.browserPrefix("transition")]="none",ee.setTransform(c,e,te.position),f&&(f.style[ee.browserPrefix("transition")]="none",ee.setTransform(f,t,te.position))},q=function(e,t,n,a){void 0===t&&(t=!0),void 0===n&&(n=!1),void 0===a&&(a=!1),re.removeEventListener("touchmove",ee.preventDefault,ee.supportsPassive),c.style[ee.browserPrefix("transition")]="",ee.setTransform(c,n,te.position),f&&(f.style[ee.browserPrefix("transition")]="",ee.setTransform(f,a,te.position)),"open"===e?K():($(),t?setTimeout(function(){L.style.visibility=""},v):L.style.visibility="")},H=function(e){var t=0-(o-e.touches[0].clientX),n="overlap"===te.levelOpen?Y()*te.levelSpacing:0,a=g+n;t="left"===te.position?Math.min(Math.max(t,0),a):Math.abs(Math.min(Math.max(t,-a),0)),("left"===te.position&&o<50||"right"===te.position&&o>ie.clientWidth-50)&&(T=!0,B(0-(g-t),Math.abs(t)))},D=function e(t){if(ie.removeEventListener("touchmove",H),ie.removeEventListener("touchend",e),T){var n=t.changedTouches[t.changedTouches.length-1],a=0-(o-n.clientX),r="overlap"===te.levelOpen?Y()*te.levelSpacing:0,i=g+r;(a="left"===te.position?Math.min(Math.max(a,0),i):Math.abs(Math.min(Math.max(a,-i),0)))?q(70<a?"open":"close"):q("close",!1),N=o=null,T=!1}},U=function(e){var t=0-(o-e.touches[0].clientX),n=0-(N-e.touches[0].clientY);if(!(Math.abs(t)<Math.abs(n))){var a="overlap"===te.levelOpen?Y()*te.levelSpacing:0,r=g+a;t="left"===te.position?Math.min(Math.max(t,-r),0):Math.min(Math.max(t,0),r),("left"===te.position&&t<0||"right"===te.position&&0<t)&&(T=!0,B(-Math.abs(t)+a,r-Math.abs(t)))}},z=function e(t){if(c.removeEventListener("touchmove",U),c.removeEventListener("touchend",e),w=!1,T){var n=t.changedTouches[t.changedTouches.length-1],a=0-(o-n.clientX),r="overlap"===te.levelOpen?Y()*te.levelSpacing:0,i=g+r;(a="left"===te.position?Math.abs(Math.min(Math.max(a,-i),0)):Math.abs(Math.min(Math.max(a,0),i)))===i?q("close",!1):50<a?q("close"):q("open",!0,r,i),N=o=null,T=!1}};r(),i(),P(),!0===te.removeOriginalNav?e.parentNode.removeChild(e):e.classList.add("hc-nav-original",E),"prepend"===te.bodyInsert?ie.body.insertBefore(L,ie.body.firstChild):"append"===te.bodyInsert&&ie.body.appendChild(L),!0===te.expanded&&(h=!0,K()),te.swipeGestures&&(c.addEventListener("touchstart",_("nav"),ee.supportsPassive),ie.addEventListener("touchstart",_("doc"),ee.supportsPassive)),ie.addEventListener("keydown",function(e){if(F()&&("Escape"===e.key||27===e.keyCode)){var t=Y();0===t?($(),M()):(Z(t,G()),S(null,t-1))}});var I=ee.debounce(j,500);re.addEventListener("resize",I,ee.supportsPassive);var X=function(e,t,n){var a=ie.querySelector("#"+E+"-"+e+"-"+t);if(a){var r=a.value,i=a.parentNode,s=i.closest(".nav-wrapper");if(a.setAttribute("checked",!1),s.classList.remove("sub-level-open"),i.classList.remove("level-open"),i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded",!1),-1!==C.indexOf(r)&&C.splice(C.indexOf(r),1),n&&"overlap"===te.levelOpen&&(s.removeEventListener("click"),s.addEventListener("click",ee.stopPropagation),ee.setTransform(c,(e-1)*te.levelSpacing,te.position),f)){var o="x"===ee.getAxis(te.position)?g:y;ee.setTransform(f,o+(e-1)*te.levelSpacing,te.position)}}};return L.on=function(e,t){L.addEventListener(e,t)},L.off=function(e,t){L.removeEventListener(e,t)},L.getSettings=function(){return Object.assign({},te)},L.isOpen=F,L.open=K,L.close=$,L.toggle=J(null),L.update=function(e,t){if(ne=[],"object"==typeof e){for(var n in e)te[n]!==e[n]&&ne.push(n);te=Object.assign({},te,e)}if(!0===e||!0===t){if(te.removeOriginalNav)return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.","color: #fa253b","color: default");r(!0),i(),P(!0)}else r(!0),P(!0)},L}function Q(){var e=Number(this.dataset.level),t=Number(this.dataset.index);"true"===this.getAttribute("checked")?R(e,t):Z(e,t)}function V(e){e.classList.remove("toggle-open"),e.setAttribute("aria-expanded",!1)}function W(){return!1!==te.levelOpen&&"none"!==te.levelOpen}function F(){return p}function Y(){return C.length?Number(Array.prototype.filter.call(c.querySelectorAll(".hc-chk"),function(e){return e.value==C[C.length-1]})[0].dataset.level):0}function G(){return C.length?Number(Array.prototype.filter.call(c.querySelectorAll(".hc-chk"),function(e){return e.value==C[C.length-1]})[0].dataset.index):0}function K(e,t){if((!F()||void 0!==t)&&(function(){if(F())return;p=!0,L.style.visibility="visible",L.setAttribute("aria-hidden",!1),L.classList.add(le),u&&(u.forEach(V),d&&(d.classList.add("toggle-open"),d.setAttribute("aria-expanded",!0)));"expand"===te.levelOpen&&A&&clearTimeout(A);te.disableBody&&(b=re.pageYOffset||se.scrollTop||ie.documentElement.scrollTop||ie.body.scrollTop,ie.documentElement.scrollHeight>ie.documentElement.clientHeight&&se.classList.add("hc-nav-yscroll"),ie.body.classList.add("hc-nav-open"),b&&(ie.body.style.top=-b+"px"));if(f){var e="x"===ee.getAxis(te.position)?g:y;ee.setTransform(f,e,te.position)}if(h)return h=!1;L._eventListeners.toggle&&L._eventListeners.toggle.forEach(function(e){e.fn(ee.customEventObject("toggle",L,L,{action:"open"}),Object.assign({},te))});setTimeout(function(){L._eventListeners.open&&L._eventListeners.open.forEach(function(e){e.fn(ee.customEventObject("open",L,L),Object.assign({},te))})},v)}(),W())){var n;if("number"!=typeof e&&!ee.isNumeric(e)||"number"!=typeof t&&!ee.isNumeric(t))m?(n=Array.prototype.filter.call(c.querySelectorAll(".hc-chk"),function(e){return e.value==m})[0],!te.closeActiveLevel&&te.closeOpenLevels||(m=null)):!1===te.closeOpenLevels&&(n=(n=Array.prototype.filter.call(c.querySelectorAll(".hc-chk"),function(e){return"true"===e.getAttribute("checked")}))[n.length-1]);else if(!(n=ie.querySelector("#"+E+"-"+e+"-"+t)))return void console.warn("HC Offcanvas Nav: level "+e+" doesn't have index "+t);if(n){var a=[];if(e=Number(n.dataset.level),t=Number(n.dataset.index),1<e){for(var r=[];n&&n!==ie;n=n.parentNode)n.matches(".nav-wrapper")&&r.push(n);for(var i=0;i<r.length;i++){var s=r[i],o=Number(s.dataset.level);0<o&&a.push({level:o,index:Number(s.dataset.index)})}a=a.reverse()}a.push({level:e,index:t});for(var l=0;l<a.length;l++)R(a[l].level,a[l].index,!1)}}}function $(){if(F()){if(p=!1,f&&ee.setTransform(f,!1),L.classList.remove(le),L.classList.remove("user-is-tabbing"),L.setAttribute("aria-hidden",!0),c.removeAttribute("style"),u&&u.forEach(V),"expand"===te.levelOpen&&-1!==["top","bottom"].indexOf(te.position)?Z(0):W()&&(A=setTimeout(function(){Z(0)},"expand"===te.levelOpen?v:0)),te.disableBody&&(ie.body.classList.remove("hc-nav-open"),se.classList.remove("hc-nav-yscroll"),b)){if(ie.body.style.top="",ie.body.scrollTop=b,se.scrollTop=b,"bottom"===te.position){var e=b;setTimeout(function(){ie.body.scrollTop=e,se.scrollTop=e},0)}b=0}L._eventListeners.toggle&&L._eventListeners.toggle.forEach(function(e){e.fn(ee.customEventObject("toggle",L,L,{action:"close"}),Object.assign({},te))}),setTimeout(function(){L.style.visibility="",L._eventListeners.close&&L._eventListeners.close.forEach(function(e){e.fn(ee.customEventObject("close",L,L),Object.assign({},te))}),L._eventListeners["close.once"]&&L._eventListeners["close.once"].forEach(function(e){e.fn(ee.customEventObject("close.once",L,L),Object.assign({},te))}),L.removeEventListener("close.once")},v)}}function J(t){return function(e){e&&(e.preventDefault(),e.stopPropagation()),t&&(d=t),p?$():K()}}function R(t,n,e){void 0===e&&(e=!0);var a=ie.querySelector("#"+E+"-"+t+"-"+n),r=a.value,i=a.parentNode,s=i.closest(".nav-wrapper"),o=ee.children(i,".nav-wrapper")[0];if(!1===e&&(o.style.transition="none"),a.setAttribute("checked",!0),s.classList.add("sub-level-open"),i.classList.add("level-open"),i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded",!0),!1===e&&setTimeout(function(){o.style.transition=""},v),-1===C.indexOf(r)&&C.push(r),"overlap"===te.levelOpen&&(s.addEventListener("click",function(){return Z(t,n)}),ee.setTransform(c,t*te.levelSpacing,te.position),f)){var l="x"===ee.getAxis(te.position)?g:y;ee.setTransform(f,l+t*te.levelSpacing,te.position)}L._eventListeners["open.level"]&&L._eventListeners["open.level"].forEach(function(e){e.fn(ee.customEventObject("open.level",L,o,{currentLevel:t,currentIndex:n}),Object.assign({},te))}),O&&(S(0,t,n),O=!1)}function Z(t,e){for(var n=t;n<=Object.keys(x).length;n++)if(n===t&&void 0!==e)X(t,e,!0);else if(0!==t||te.closeOpenLevels)for(var a=0;a<x[n];a++)X(n,a,n===t);else;if(0<t&&L._eventListeners["close.level"]){var r=ie.querySelector("#"+E+"-"+t+"-"+e).closest(".nav-wrapper");L._eventListeners["close.level"].forEach(function(e){e.fn(ee.customEventObject("close.level",L,r,{currentLevel:t-1,currentIndex:G()}),Object.assign({},te))})}O&&(S(null,t-1),O=!1)}console.error("%c! HC Offcanvas Nav:%c Navigation must contain <ul> element.","color: #fa253b","color: default")};if(Array.isArray(e)||e instanceof NodeList){for(var a=[],r=0;r<e.length;r++)a.push(n(e[r]));return 1<a.length?a:a[0]}return n(e)};if(void 0!==re.jQuery){var n=re.jQuery,a="hcOffcanvasNav";n.fn.extend({hcOffcanvasNav:function(t){return this.length?this.each(function(){var e=n.data(this,a);e?e.update(t):(e=new i(this,t),n.data(this,a,e))}):this}})}return re.hcOffcanvasNav=re.hcOffcanvasNav||i,i}),function(n){var e=n.hcOffcanvasNav,o=n.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),a=1;a<arguments.length;a++){var r=arguments[a];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},writable:!0,configurable:!0}),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function n(){var a=isNaN(arguments[0])?1:Number(arguments[0]);return a?Array.prototype.reduce.call(this,function(e,t){return Array.isArray(t)?e.push.apply(e,n.call(t,a-1)):e.push(t),e},[]):Array.prototype.slice.call(this)},writable:!0}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector);var t=!1;try{var a=Object.defineProperty({},"passive",{get:function(){t={passive:!1}}});n.addEventListener("testPassive",null,a),n.removeEventListener("testPassive",null,a)}catch(e){}var r=(/iPad|iPhone|iPod/.test(navigator.userAgent)||!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))&&!n.MSStream,i="ontouchstart"in n||navigator.maxTouchPoints||n.DocumentTouch&&o instanceof DocumentTouch,s=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},l=function(e){return"auto"===e?"100%":s(e)&&0!==e?e+"px":e},c=function(e){var t=["Webkit","Moz","Ms","O"],n=(o.body||o.documentElement).style,a=e.charAt(0).toUpperCase()+e.slice(1);if(void 0!==n[e])return e;for(var r=0;r<t.length;r++)if(void 0!==n[t[r]+a])return t[r]+a;return!1},v=function(e,t){if(e instanceof Element)return t?Array.prototype.filter.call(e.children,function(e){return e.matches(t)}):e.children;var n=[];return Array.prototype.forEach.call(e,function(e){n=t?n.concat(Array.prototype.filter.call(e.children,function(e){return e.matches(t)})):n.concat(Array.prototype.slice.call(e.children))}),n},u=function(o){var l=Node.prototype[o+"EventListener"];return function(e,t,n){if(this){var a=e.split(".")[0];if(this._eventListeners=this._eventListeners||{},"add"===o){this._eventListeners[e]=this._eventListeners[e]||[];var r={fn:t};n&&(r.options=n),this._eventListeners[e].push(r),l.call(this,a,t,n)}else if("function"==typeof t)for(var i in l.call(this,a,t,n),this._eventListeners)this._eventListeners[i]=this._eventListeners[i].filter(function(e){return e.fn!==t}),this._eventListeners[i].length||delete this._eventListeners[i];else if(this._eventListeners[e]){for(var s=this._eventListeners[e].length;s--;)l.call(this,a,this._eventListeners[e][s].fn,this._eventListeners[e][s].options),this._eventListeners[e].splice(s,1);this._eventListeners[e].length||delete this._eventListeners[e]}}}};Node.prototype.addEventListener=u("add"),Node.prototype.removeEventListener=u("remove");var d=function(e,t,n){void 0===t&&(t={});var a=o.createElement(e);for(var r in t)"class"!==r?(t[r]||0===t[r])&&a.setAttribute(r,t[r]):a.className=t[r];if(n){Array.isArray(n)||(n=[n]);for(var i=0;i<n.length;i++)if("object"==typeof n[i]&&n[i].length&&!n[i].nodeType)for(var s=0;s<n[i].length;s++)a.appendChild(n[i][s]);else a.appendChild("string"==typeof n[i]?o.createTextNode(n[i]):n[i])}return a},f=function(e){return-1!==["left","right"].indexOf(e)?"x":"y"},p=function(){c("transform");return function(e,t,n){if(!1===t||""===t)e.style.transform="";else if("x"===f(n)){var a="left"===n?t:"-"+t;e.style.transform="translate3d("+l(a)+",0,0)"}else{var r="top"===n?t:"-"+t;e.style.transform="translate3d(0,"+l(r)+",0)"}}}(),h=function(e,t,n){console.warn("%cHC Off-canvas Nav:%c "+n+"%c '"+e+"'%c is now deprecated and will be removed in the future. Use%c '"+t+"'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.","color: #fa253b","color: default","color: #5595c6","color: default","color: #5595c6","color: default")};e.Helpers={supportsPassive:t,isIos:r,isTouchDevice:i,isNumeric:s,formatSizeVal:l,toMs:function(e){return parseFloat(e)*(/\ds$/.test(e)?1e3:1)},stopPropagation:function(e){return e.stopPropagation()},preventDefault:function(e){return e.preventDefault()},preventClick:function(t){return function(e){e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t()}},browserPrefix:c,children:v,wrap:function(e,t){e.parentNode.insertBefore(t,e),t.appendChild(e)},data:function(e,t,n){if(e.hcOffcanvasNav=e.hcOffcanvasNav||{},void 0===n)return e.hcOffcanvasNav[t];e.hcOffcanvasNav[t]=n},clone:function(e,t,n){var a=e.cloneNode(n||!1),r=e instanceof Element?[e].concat(Array.prototype.slice.call(e.getElementsByTagName("*"))):[],i=a instanceof Element?[a].concat(Array.prototype.slice.call(a.getElementsByTagName("*"))):[];return t||(r.shift(),i.shift()),n&&function(e,t){for(var n=0;n<e.length;n++)if(e[n]._eventListeners)for(var a in e[n]._eventListeners)for(var r=0;r<e[n]._eventListeners[a].length;r++)t[r].addEventListener(a,e[n]._eventListeners[a][r].fn,e[n]._eventListeners[a][r].options)}(r,i),a},customEventObject:function(e,n,a,r){return new function(e){for(var t in this.bubbles=!1,this.cancelable=!1,this.composed=!1,this.currentTarget=a,this.data=r?{}:null,this.defaultPrevented=!1,this.eventPhase=0,this.isTrusted=!1,this.target=n,this.timeStamp=Date.now(),this.type=e,r)this.data[t]=r[t]}(e)},hasListener:function(e,t){return(t?(e._eventListeners||{})[t]:e._eventListeners)||!1},debounce:function(a,r,i){var s;return function(){var e=this,t=arguments,n=i&&!s;clearTimeout(s),s=setTimeout(function(){s=null,i||a.apply(e,t)},r),n&&a.apply(e,t)}},createElement:d,getElements:function(e){var t=null;return"string"==typeof e?t=o.querySelectorAll(e):n.jQuery&&e instanceof n.jQuery&&e.length?t=e.toArray():e instanceof Element&&(t=[e]),t},getElementCssTag:function e(t){return"string"==typeof t?t:t.getAttribute("id")?"#"+t.getAttribute("id"):t.getAttribute("class")?t.tagName.toLowerCase()+"."+t.getAttribute("class").replace(/\s+/g,"."):e(t.parentNode)+" > "+t.tagName.toLowerCase()},printStyle:function(e){var r=d("style",{id:e}),i={},s={};o.head.appendChild(r);var a=function(e){return";"!==e.substr(-1)&&(e+=";"!==e.substr(-1)?";":""),e};return{reset:function(){i={},s={}},add:function(e,t,n){e=e.trim(),t=t.trim(),n?(n=n.trim(),s[n]=s[n]||{},s[n][e]=a(t)):i[e]=a(t)},remove:function(e,t){e=e.trim(),t?(t=t.trim(),void 0!==s[t][e]&&delete s[t][e]):void 0!==i[e]&&delete i[e]},insert:function(){var e="";for(var t in s){for(var n in e+="@media screen and ("+t+") {\n",s[t])e+="  "+n+" { "+s[t][n]+" }\n";e+="}\n"}for(var a in i)e+=a+" { "+i[a]+" }\n";r.innerHTML=e}}},insertAt:function(e,t,n){var a=v(n),r=a.length,i=-1<(t="last"===(t="first"===t?0:t)?r:t)?Math.max(0,Math.min(t,r)):Math.max(0,Math.min(r+t,r));0===i?n[0].insertBefore(e,n[0].firstChild):a[i-1].insertAdjacentElement("afterend",e)},getAxis:f,setTransform:p,deprecated:h}}(window);