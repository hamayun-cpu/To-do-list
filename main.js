(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,'.title-txt {\n  font-size: 50px;\n  font-family: "Original Surfer", cursive;\n  font-weight: 800;\n  transition: letter-spacing 1s;\n}\n\n.title-txt:hover {\n  letter-spacing: 4px;\n}\n\n.bold-text {\n  font-weight: bold;\n}\n\n.bg-gray {\n  background-color: #ebebeb;\n}\n\n.permanent-back-gray {\n  background-color: rgb(175, 173, 173) !important;\n  border-radius: 4px;\n}\n\n.col-white {\n  color: white;\n}\n\n.h-100-vh {\n  height: 89.5vh;\n}\n\n.add-btn {\n  border: none;\n  padding: 5px 9px;\n  background-color: inherit;\n}\n\n.add-btn:hover {\n  background-color: rgb(175, 173, 173);\n  border-radius: 3px;\n  transition: background-color 1s;\n}\n\n.dis-none {\n  display: none !important;\n}\n\n.cur-pointer {\n  cursor: pointer;\n}\n\n.w-48 {\n  width: 48%;\n}\n\n.cross {\n  border: none;\n  background-color: red;\n  border-radius: 5px;\n}\n',""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var s=e[o],c=n.base?s[0]+n.base:s[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=i(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:l,updater:v(m,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function v(e,n){var t,r,o;if(n.singleton){var a=f++;t=p||(p=c(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=c(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var c=s(e,n),d=0;d<t.length;d++){var l=i(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=c}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,document.getElementById("content").innerHTML='\n    <nav class="navbar navbar-dark bg-dark">\n      <span class="navbar-brand mb-0 h1 title-txt"><i class="far fa-calendar-check mr-3"></i> ToDos</span>\n    </nav>\n  ',(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.className="container-fluid",n.innerHTML="\n    <div class=\"row\">\n      <div id = 'left-container' class='col-3 bg-gray h-100-vh'>\n        <h2 class = 'bold-text d-flex justify-content-center mt-3'><i class=\"fas fa-project-diagram mr-2\"></i>Projects</h2>\n        <button id = 'add-project' class = 'add-btn cur-pointer w-100 my-2 text-left'><i class='fas fa-plus mr-2'></i> Add Project</button>\n      </div>\n      <div id = 'right-container' class=\"col-9\"></div>\n    </div>\n  ",e.appendChild(n)})(),(()=>{const e=document.getElementById("left-container"),n=document.createElement("div");n.id="project-form",n.classList="dis-none",n.innerHTML='\n    <form>\n      <input id = \'proj-name\' class = \'form-control\' type="text" id="pname" name="projectname" placeholder="Project name..">\n      <input id = \'ad-proj\' class = \'btn btn-primary my-1 w-48\' type="submit" value="Add">\n      <input class = \'btn btn-danger w-50\' type="submit" value="Cancel">\n    </form>\n  ',e.appendChild(n)})();let o=JSON.parse(localStorage.getItem("projectnames"));null!==o&&0!==o.length||(o=[],o.push("default"),localStorage.setItem("projectnames",JSON.stringify(o))),(()=>{const e=document.getElementById("left-container"),n=JSON.parse(localStorage.getItem("projectnames")),t=n.length;for(let r=0;r<t;r++){const t=document.createElement("div");t.id=`project-${r}`,t.className="add-btn cur-pointer bold-text d-flex justify-content-between",t.innerHTML=`<div><i class="fas fa-th-list"></i> ${n[r]}</div> <input id = 'del-project-${r}' class = 'cross dis-none' type="submit" value="x">`,e.appendChild(t)}})(),(e=>{for(let n=0;n<e.length;n++){const t=document.getElementById("right-container"),r=document.createElement("div");r.id=`name-${n}`,r.innerHTML=`<h1 class = 'bold-text ml-2 mt-3'>${e[n]}</h1>`,r.className="dis-none",t.appendChild(r)}})(o);const a=document.getElementById("add-project"),i=document.getElementById("project-form"),s=document.getElementById("ad-proj"),c=e=>{for(let n=0;n<o.length;n++){const t=document.getElementById(`name-${n}`),r=document.getElementById(`project-${n}`);n===e?(t.classList.remove("dis-none"),r.classList.contains("permanent-back-gray")||r.classList.add("permanent-back-gray")):(t.classList.contains("dis-none")||t.classList.add("dis-none"),r.classList.remove("permanent-back-gray"))}};a.addEventListener("click",(()=>{i.classList.remove("dis-none")})),s.addEventListener("click",(e=>{const n=document.getElementById("proj-name").value;""!==n?(i.classList.contains("dis-none")||i.classList.add("dis-none"),o.push(n),localStorage.setItem("projectnames",JSON.stringify(o))):e.preventDefault()}));for(let e=0;e<o.length;e++){const n=document.getElementById(`project-${e}`),t=document.getElementById(`del-project-${e}`);n.addEventListener("click",(()=>{c(e)})),n.addEventListener("mouseover",(e=>{t.classList.remove("dis-none")})),n.addEventListener("mouseout",(e=>{t.classList.contains("dis-none")||t.classList.add("dis-none")})),t.addEventListener("click",(()=>{var n;n=e,o.splice(n,1),localStorage.setItem("projectnames",JSON.stringify(o)),location.reload()}))}})()})();