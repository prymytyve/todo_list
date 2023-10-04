(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([t.id,"body,\ndiv,\nul,\nli{\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px;\n}\n\n\n\nbody{\n    display:grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n\nnav{\n    background-color: red;\n    height:100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.todo{\n    display:grid;\n    grid-template-columns: 3fr 1fr;\n    width: 500px;\n    margin:5px;\n    border: 1px solid black;\n    padding: 5px 3px;\n}\n\n.task{\n    grid-column: 1/3;\n}\n\n.main{\n    grid-column: 1/3;\n    display: flex;\n    justify-content: space-evenly;\n    margin: 5px 0px;\n}\n\n.editBox{\n    grid-column: 3/4;\n    display: grid;\n}\n\n.sub{\n    grid-column: 1/-1;\n    /* display: grid;\n    justify-items: self-end; */\n}\n\np{\n    display: inline-block;\n    margin: 0px;\n    padding: 0px;\n}",""]);const u=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(o[s]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},o=[],u=0;u<t.length;u++){var s=t[u],d=r.base?s[0]+r.base:s[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var h=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var u=n(i[o]);e[u].references--}for(var s=r(t,a),d=0;d<i.length;d++){var c=n(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),i=n(569),o=n.n(i),u=n(565),s=n.n(u),d=n(216),c=n.n(d),l=n(589),h=n.n(l),m=n(426),f={};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function v(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===p(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function w(t){g(1,arguments);var e=v(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function b(t){g(1,arguments);var e=v(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=w(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=w(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}f.styleTagTransform=h(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var C={};function T(){return C}function D(t,e){var n,r,a,i,o,u,s,d;g(1,arguments);var c=T(),l=y(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=v(t),m=h.getUTCDay(),f=(m<l?7:0)+m-l;return h.setUTCDate(h.getUTCDate()-f),h.setUTCHours(0,0,0,0),h}function x(t,e){var n,r,a,i,o,u,s,d;g(1,arguments);var c=v(t),l=c.getUTCFullYear(),h=T(),m=y(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==r?r:null===(s=h.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(l+1,0,m),f.setUTCHours(0,0,0,0);var p=D(f,e),w=new Date(0);w.setUTCFullYear(l,0,m),w.setUTCHours(0,0,0,0);var b=D(w,e);return c.getTime()>=p.getTime()?l+1:c.getTime()>=b.getTime()?l:l-1}function M(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const k=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return M("yy"===e?r%100:r,e.length)},E=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):M(n+1,2)},S=function(t,e){return M(t.getUTCDate(),e.length)},U=function(t,e){return M(t.getUTCHours()%12||12,e.length)},L=function(t,e){return M(t.getUTCHours(),e.length)},P=function(t,e){return M(t.getUTCMinutes(),e.length)},W=function(t,e){return M(t.getUTCSeconds(),e.length)},Y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return M(Math.floor(r*Math.pow(10,n-3)),e.length)};var O={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return k(t,e)},Y:function(t,e,n,r){var a=x(t,r),i=a>0?a:1-a;return"YY"===e?M(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):M(i,e.length)},R:function(t,e){return M(b(t),e.length)},u:function(t,e){return M(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return E(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){g(1,arguments);var n=v(t),r=D(n,e).getTime()-function(t,e){var n,r,a,i,o,u,s,d;g(1,arguments);var c=T(),l=y(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),h=x(t,e),m=new Date(0);return m.setUTCFullYear(h,0,l),m.setUTCHours(0,0,0,0),D(m,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):M(a,e.length)},I:function(t,e,n){var r=function(t){g(1,arguments);var e=v(t),n=w(e).getTime()-function(t){g(1,arguments);var e=b(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),w(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):M(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):S(t,e)},D:function(t,e,n){var r=function(t){g(1,arguments);var e=v(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return M(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return M(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return M(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):L(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):M(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):M(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):P(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):W(t,e)},S:function(t,e){return Y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return N(a);case"XXXX":case"XX":return q(a);default:return q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return N(a);case"xxxx":case"xx":return q(a);default:return q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(a,":");default:return"GMT"+q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(a,":");default:return"GMT"+q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return M(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return M((r._originalDate||t).getTime(),e.length)}};function j(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+M(i,2)}function N(t,e){return t%60==0?(t>0?"-":"+")+M(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+M(Math.floor(a/60),2)+n+M(a%60,2)}const _=O;var A=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},F=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const H={p:F,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return A(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",A(a,e)).replace("{{time}}",F(i,e))}};var B=["D","DD"],z=["YY","YYYY"];function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var I={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Q(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const G={date:Q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function J(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const $={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:J({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:J({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:J({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:J({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:J({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function V(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return o=t.valueCallback?t.valueCallback(d):d,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(u.length)}}}var Z,K={ordinalNumber:(Z={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Z.matchPattern);if(!n)return null;var r=n[0],a=t.match(Z.parsePattern);if(!a)return null;var i=Z.valueCallback?Z.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const tt={code:"en-US",formatDistance:function(t,e,n){var r,a=I[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:G,formatRelative:function(t,e,n,r){return X[t]},localize:$,match:K,options:{weekStartsOn:0,firstWeekContainsDate:1}};var et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,at=/''/g,it=/[a-zA-Z]/;function ot(t,e,n){var r,a,i,o,u,s,d,c,l,h,m,f,w,b,C,D,x,M;g(2,arguments);var k=String(e),E=T(),S=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:E.locale)&&void 0!==r?r:tt,U=y(null!==(i=null!==(o=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==u?u:E.firstWeekContainsDate)&&void 0!==o?o:null===(l=E.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var L=y(null!==(m=null!==(f=null!==(w=null!==(b=null==n?void 0:n.weekStartsOn)&&void 0!==b?b:null==n||null===(C=n.locale)||void 0===C||null===(D=C.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==w?w:E.weekStartsOn)&&void 0!==f?f:null===(x=E.locale)||void 0===x||null===(M=x.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==m?m:0);if(!(L>=0&&L<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var P=v(t);if(!function(t){if(g(1,arguments),!function(t){return g(1,arguments),t instanceof Date||"object"===p(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=v(t);return!isNaN(Number(e))}(P))throw new RangeError("Invalid time value");var W=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(P),Y=function(t,e){return g(2,arguments),function(t,e){g(2,arguments);var n=v(t).getTime(),r=y(e);return new Date(n+r)}(t,-y(e))}(P,W),O={firstWeekContainsDate:U,weekStartsOn:L,locale:S,_originalDate:P};return k.match(nt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,S.formatLong):t})).join("").match(et).map((function(r){if("''"===r)return"'";var a,i,o=r[0];if("'"===o)return(i=(a=r).match(rt))?i[1].replace(at,"'"):a;var u,s=_[o];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===z.indexOf(u))||R(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==B.indexOf(t)}(r)||R(r,e,String(t)),s(Y,r,S.localize,O);if(o.match(it))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("")}const ut={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let st;const dt=new Uint8Array(16);function ct(){if(!st&&(st="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!st))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return st(dt)}const lt=[];for(let t=0;t<256;++t)lt.push((t+256).toString(16).slice(1));const ht=function(t,e,n){if(ut.randomUUID&&!e&&!t)return ut.randomUUID();const r=(t=t||{}).random||(t.rng||ct)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return function(t,e=0){return lt[t[e+0]]+lt[t[e+1]]+lt[t[e+2]]+lt[t[e+3]]+"-"+lt[t[e+4]]+lt[t[e+5]]+"-"+lt[t[e+6]]+lt[t[e+7]]+"-"+lt[t[e+8]]+lt[t[e+9]]+"-"+lt[t[e+10]]+lt[t[e+11]]+lt[t[e+12]]+lt[t[e+13]]+lt[t[e+14]]+lt[t[e+15]]}(r)},mt=(document.querySelector("#mainBody"),[]);class ft{constructor(){this.add()}add=()=>{mt.push(this)};_task="";_priority="";_dueDate="";_dateCreated=ot(new Date,"eeee', 'MMM dd', 'yyyy' at' hh:mm' 'aaa");_project="Default";_completed=!1;_subList=[];_id="id"+ht();get task(){return this._task}set task(t){this._task=t}get priority(){return this._priority}set priority(t){this._priority=t}get dueDate(){return this._dueDate}get project(){return this._project}set project(t){this._project=t}get unDueDate(){return this._unDueDate}set unDueDate(t){this._unDueDate=t}set dueDate(t){this._dueDate=t}get subList(){return this._subList}get id(){return this._id}delete=t=>{const e=mt.indexOf(this);mt.splice(e,1)}}class pt{constructor(t,e){this._subTask=t,this.add(e)}_type="note";_completed=!1;add=t=>{t.push(this)};delete=t=>{const e=t.indexOf(this);t.splice(e,1)};get task(){return this_task}set task(t){this._subTask=t}set type(t){this._type=!0===t?"task":"note"}}const gt=["Default"];ft.prototype.printMode=function(){const t=document.createElement("div");t.classList.add("todo");const e=document.createElement("ul");e.classList.add("main");const n=document.createElement("ul");n.classList.add("sub");const r=document.createElement("p");r.textContent=this.task,r.classList.add("task");const a=document.createElement("div");a.classList.add("priorityDiv");const i=document.createElement("span");i.textContent="Priority: ",i.classList.add("pSpan");const o=document.createElement("p");o.textContent=this.priority,o.classList.add("pText"),a.appendChild(i),a.appendChild(o),e.appendChild(a);const u=document.createElement("div");u.classList.add("dateDiv");const s=document.createElement("span");s.textContent="Due: ";const d=document.createElement("p");d.textContent=this.dueDate,d.classList.add("dText"),u.appendChild(s),u.appendChild(d),e.appendChild(u);const c=document.createElement("div");c.classList.add("editBox");const l=document.createElement("button");return l.classList.add("finBtn"),l.textContent="Edit",l.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(`.${this.id}`).replaceChildren(this.inputMode())})),c.appendChild(l),t.appendChild(r),t.appendChild(e),t.appendChild(c),t.appendChild(n),t},ft.prototype.inputMode=function(){const t=document.createElement("form");t.classList.add("todo");const e=document.createElement("ul");e.classList.add("main");const n=document.createElement("ul");n.classList.add("sub");const r=document.createElement("input");r.classList.add("task"),r.setAttribute("value",this.task),r.addEventListener("keyup",(()=>this.task=r.value));const a=document.createElement("div");a.classList.add("priorityDiv");const i=document.createElement("span");i.textContent="Priority: ",i.classList.add("pSpan");const o=document.createElement("select");o.setAttribute("value",this.priority),o.addEventListener("change",(()=>this.priority=o.value)),o.classList.add("pSelect"),a.appendChild(i),a.appendChild(o);const u=["","Low","Medium","High","Urgent"];for(let t=0;t<=u.length-1;t++){const e=document.createElement("option");e.setAttribute("value",`${u[t]}`),e.textContent=u[t],o.appendChild(e)}e.appendChild(a);const s=document.createElement("div");s.classList.add("dateDiv");const d=document.createElement("span");d.textContent="Due: ";const c=document.createElement("input");c.classList.add("dateInput"),c.setAttribute("type","datetime-local"),c.setAttribute("value",this.unDueDate),c.addEventListener("change",(()=>{this.unDueDate=c.value,this.dueDate=ot(new Date(c.value),"eeee', 'MMM dd', 'yyyy' at' hh:mm' 'aaa")})),s.appendChild(d),s.appendChild(c),e.appendChild(s);const l=document.createElement("div");l.classList.add("projectDiv");const h=document.createElement("span");h.textContent="Project: ",h.classList.add("projSpan");const m=document.createElement("select");m.addEventListener("change",(()=>this.project=m.value)),m.classList.add("projSelect"),l.appendChild(h),l.appendChild(m);for(let t=0;t<=gt.length-1;t++){const e=document.createElement("option");e.setAttribute("value",`${gt[t]}`),e.textContent=gt[t],m.appendChild(e)}t.appendChild(l);const f=document.createElement("div");f.classList.add("editBox");const p=document.createElement("button");p.classList.add("finBtn"),p.textContent="Done",p.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(`.${this.id}`).replaceChildren(this.printMode())})),f.appendChild(p);const g=document.createElement("button");g.classList.add("delBtn"),g.textContent="Delete",g.addEventListener("click",(t=>{t.preventDefault(),this.delete();const e=document.querySelector(`.${this.id}`);mainBody.removeChild(e)})),f.appendChild(g);const v=document.createElement("button");return v.textContent="Add task",v.addEventListener("click",(t=>{t.preventDefault(),function(t,e,n){const r=document.createElement("li");r.classList.add("subTask");const a=document.createElement("input"),i=new pt(a.value,t);a.addEventListener("keyup",(t=>i.task=a.value));const o=document.createElement("button");o.textContent="X",o.addEventListener("click",(n=>{e.removeChild(r),i.delete(t)})),r.appendChild(a),r.appendChild(o),e.insertBefore(r,n);const u=document.createElement("input");u.setAttribute("type","checkbox"),u.addEventListener("change",(t=>i.type=u.checked)),r.insertBefore(u,o)}(this.subList,n,v)})),n.appendChild(v),t.appendChild(r),t.appendChild(e),t.appendChild(f),t.appendChild(n),t};const vt=document.querySelector("#mainBody"),yt=document.querySelector(".addTodo");!function(){yt.addEventListener("click",(()=>{const t=new ft,e=document.createElement("div");e.classList.add(`${t.id}`,"todoDiv"),e.appendChild(t.inputMode()),vt.appendChild(e)}));const t=document.createElement("button");t.textContent="check",t.addEventListener("click",(()=>console.log(mt))),vt.append(t)}()})()})();