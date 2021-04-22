(()=>{"use strict";var n,e,t,r={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'.title-txt {\n  font-size: 50px;\n  font-family: "Original Surfer", cursive;\n  font-weight: 800;\n  transition: letter-spacing 1s;\n}\n\n.title-txt:hover {\n  letter-spacing: 4px;\n}\n\n.bold-text {\n  font-weight: bold;\n}\n\n.bg-gray {\n  background-color: #ebebeb;\n}\n\n.col-white {\n  color: white;\n}\n\n.h-100-vh {\n  height: 89.5vh;\n}\n\n.add-btn {\n  border: none;\n  padding: 5px 9px;\n  background-color: inherit;\n}\n\n.add-btn:hover {\n  background-color: rgb(175, 173, 173);\n  border-radius: 3px;\n  transition: background-color 1s;\n}\n',""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=i(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:h(f,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,p=0;function h(n,e){var t,r,o;if(e.singleton){var a=p++;t=v||(v=s(e)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(n,e),d=0;d<t.length;d++){var l=i(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=s}}}}},o={};function a(n){var e=o[n];if(void 0!==e)return e.exports;var t=o[n]={id:n,exports:{}};return r[n](t,t.exports,a),t.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=a(379),e=a.n(n),t=a(426),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,document.getElementById("content").innerHTML='\n    <nav class="navbar navbar-dark bg-dark">\n      <span class="navbar-brand mb-0 h1 title-txt"><i class="far fa-calendar-check mr-3"></i> ToDos</span>\n    </nav>\n  ',(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.className="container-fluid",e.innerHTML="\n    <div class=\"row\">\n      <div id = 'left-container' class='col-3 bg-gray h-100-vh'>\n        <h2 class = 'bold-text d-flex justify-content-center mt-3'>Projects</h2>\n        <button id = 'add-project' class = 'add-btn w-100 my-2 text-left'><i class='fas fa-plus mr-2'></i> Add Project</button>\n      </div>\n      <div id = 'right-container' class=\"col-9\">\n        2 of 2 (wider)\n      </div>\n    </div>\n  ",n.appendChild(e)})(),document.getElementById("add-project").addEventListener("click",(()=>{}))})();