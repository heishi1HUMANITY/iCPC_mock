(()=>{"use strict";var n={377:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(537),i=t.n(o),r=t(645),A=t.n(r)()(i());A.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n\tline-height: 1;\n}\nmenu, ol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n","",{version:3,sources:["webpack://./node_modules/reset-css/reset.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA,kDAAkD;AAClD;IACI,aAAa;AACjB;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n\tline-height: 1;\n}\nmenu, ol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],sourceRoot:""}]);const a=A},803:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(537),i=t.n(o),r=t(645),A=t.n(r)()(i());A.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);"]),A.push([n.id,"body {\n  display: flex;\n  justify-content: center;\n  background-color: #f3f1f1;\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');\n}\n\nbody #container {\n    background-color: #d9d9d9;\n    min-height: 100vh;\n    max-width: 500px;\n    width: 100vw;\n    padding: 2rem 1rem;\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\nbody #container #start {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      font-size: 2rem;\n      text-transform: uppercase;\n      background-color: #d9d9d9;\n      filter: drop-shadow(0px 0px 17.4px #626262);\n      width: 150px;\n      height: 150px;\n\n      border-radius: 50%;\n      transition: all ease 0.1s;\n      cursor: pointer;\n    }\n\nbody #container #start:hover {\n        opacity: 0.8;\n      }\n\nbody #countdownContainer {\n    position: relative;\n  }\n\nbody #countdownContainer p {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      transition: all ease 0.5s;\n      text-transform: uppercase;\n    }\n\nbody #countdownContainer .start {\n      font-size: 6rem;\n      visibility: hidden;\n    }\n\nbody #countdownContainer .end {\n      font-size: 2rem;\n    }\n\nbody #timerContainer {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.12rem;\n    margin-bottom: 1rem;\n  }\n\nbody #timerContainer .underTen {\n      color: red;\n    }\n\nbody #questionContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    width: 80%;\n    height: 30%;\n    margin-bottom: 4rem;\n  }\n\nbody #questionContainer p {\n      font-size: 1.12rem;\n      margin-bottom: 10px;\n    }\n\nbody #questionContainer img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n    }\n\nbody #choicesContainer {\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    margin-bottom: 4rem;\n  }\n\nbody #choicesContainer div {\n      width: 100%;\n      height: 150px;\n    }\n\nbody #choicesContainer div:hover {\n        opacity: 0.8;\n      }\n\nbody #choicesContainer img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n    }\n\nbody #choicesContainer input {\n      display: none;\n    }\n\nbody #choicesContainer input:checked ~ img {\n        opacity: 0.5;\n      }\n\nbody #submit {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 2rem 0;\n\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    cursor: pointer;\n    border-radius: 10px;\n    background: #d9d9d9;\n    filter: drop-shadow(0px 0px 17.4px #626262);\n  }\n\nbody #submit:hover {\n      opacity: 0.8;\n    }\n\nbody #userAnswer {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n  }\n\nbody #userAnswer div {\n      height: 100%;\n    }\n\nbody #userAnswer img {\n      height: 100%;\n      width: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      display: none;\n    }\n\nbody #userAnswer img.visible {\n        display: block;\n      }\n\nbody #arrow {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 0px;\n    transition: all ease 0.5s;\n    overflow: hidden;\n  }\n\nbody #arrow p {\n      transform: rotate(90deg);\n      font-size: 3rem;\n    }\n\nbody #score {\n    position: relative;\n\n    width: 80%;\n    height: 30%;\n  }\n\nbody #score > * {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n    }\n\nbody #score img {\n      -o-object-fit: cover;\n         object-fit: cover;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n\nbody #score #overlay {\n      background-color: black;\n      opacity: 0.5;\n      transform-origin: top left;\n      top: 0;\n      right: 0;\n      transition: all ease .5s;\n    }\n\nbody #score #textContainer {\n      overflow: hidden;\n      font-size: 1.5rem;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 0px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: all ease .5s;\n    }\n\nbody #score #textContainer p {\n        color: white;\n        white-space: nowrap;\n      }\n","",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,wFAAwF;AA2N1F;;AA1NE;IACE,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;;IAEtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EAsBrB;;AApBE;MACE,aAAa;MACb,uBAAuB;MACvB,mBAAmB;;MAEnB,eAAe;MACf,yBAAyB;MACzB,yBAAyB;MACzB,2CAA2C;MAC3C,YAAY;MACZ,aAAa;;MAEb,kBAAkB;MAClB,yBAAyB;MACzB,eAAe;IAKjB;;AAHE;QACE,YAAY;MACd;;AAIJ;IACE,kBAAkB;EAgBpB;;AAfE;MACE,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,gCAAgC;MAChC,yBAAyB;MACzB,yBAAyB;IAC3B;;AACA;MACE,eAAe;MACf,kBAAkB;IACpB;;AACA;MACE,eAAe;IACjB;;AAGF;IACE,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;EAIrB;;AAHE;MACE,UAAU;IACZ;;AAGF;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,UAAU;IACV,WAAW;IACX,mBAAmB;EAYrB;;AAVE;MACE,kBAAkB;MAClB,mBAAmB;IACrB;;AAEA;MACE,WAAW;MACX,YAAY;MACZ,oBAAiB;SAAjB,iBAAiB;IACnB;;AAGF;IACE,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,mBAAmB;EAsBrB;;AApBE;MACE,WAAW;MACX,aAAa;IAIf;;AAHE;QACE,YAAY;MACd;;AAGF;MACE,WAAW;MACX,YAAY;MACZ,oBAAiB;SAAjB,iBAAiB;IACnB;;AAEA;MACE,aAAa;IAIf;;AAHE;QACE,YAAY;MACd;;AAIJ;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,eAAe;;IAEf,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,2CAA2C;EAK7C;;AAHE;MACE,YAAY;IACd;;AAGF;IACE,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;EAeX;;AAbE;MACE,YAAY;IACd;;AAEA;MACE,YAAY;MACZ,WAAW;MACX,oBAAiB;SAAjB,iBAAiB;MACjB,aAAa;IAIf;;AAHE;QACE,cAAc;MAChB;;AAIJ;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,gBAAgB;EAMlB;;AAJE;MACE,wBAAwB;MACxB,eAAe;IACjB;;AAGF;IACE,kBAAkB;;IAElB,UAAU;IACV,WAAW;EAwCb;;AAtCE;MACE,WAAW;MACX,YAAY;MACZ,kBAAkB;IACpB;;AAEA;MACE,oBAAiB;SAAjB,iBAAiB;MACjB,QAAQ;MACR,SAAS;MACT,gCAAgC;IAClC;;AAEA;MACE,uBAAuB;MACvB,YAAY;MACZ,0BAA0B;MAC1B,MAAM;MACN,QAAQ;MACR,wBAAwB;IAC1B;;AAEA;MACE,gBAAgB;MAChB,iBAAiB;MACjB,QAAQ;MACR,SAAS;MACT,gCAAgC;MAChC,UAAU;MACV,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,wBAAwB;IAK1B;;AAJE;QACE,YAAY;QACZ,mBAAmB;MACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');\n\nbody {\n  display: flex;\n  justify-content: center;\n  background-color: #f3f1f1;\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');\n  #container {\n    background-color: #d9d9d9;\n    min-height: 100vh;\n    max-width: 500px;\n    width: 100vw;\n    padding: 2rem 1rem;\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    #start {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      font-size: 2rem;\n      text-transform: uppercase;\n      background-color: #d9d9d9;\n      filter: drop-shadow(0px 0px 17.4px #626262);\n      width: 150px;\n      height: 150px;\n\n      border-radius: 50%;\n      transition: all ease 0.1s;\n      cursor: pointer;\n\n      &:hover {\n        opacity: 0.8;\n      }\n    }\n  }\n\n  #countdownContainer {\n    position: relative;\n    p {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      transition: all ease 0.5s;\n      text-transform: uppercase;\n    }\n    .start {\n      font-size: 6rem;\n      visibility: hidden;\n    }\n    .end {\n      font-size: 2rem;\n    }\n  }\n\n  #timerContainer {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.12rem;\n    margin-bottom: 1rem;\n    .underTen {\n      color: red;\n    }\n  }\n\n  #questionContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    width: 80%;\n    height: 30%;\n    margin-bottom: 4rem;\n\n    p {\n      font-size: 1.12rem;\n      margin-bottom: 10px;\n    }\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  #choicesContainer {\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    margin-bottom: 4rem;\n\n    div {\n      width: 100%;\n      height: 150px;\n      &:hover {\n        opacity: 0.8;\n      }\n    }\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    input {\n      display: none;\n      &:checked ~ img {\n        opacity: 0.5;\n      }\n    }\n  }\n\n  #submit {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 2rem 0;\n\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    cursor: pointer;\n    border-radius: 10px;\n    background: #d9d9d9;\n    filter: drop-shadow(0px 0px 17.4px #626262);\n\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n\n  #userAnswer {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n\n    div {\n      height: 100%;\n    }\n\n    img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      display: none;\n      &.visible {\n        display: block;\n      }\n    }\n  }\n\n  #arrow {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 0px;\n    transition: all ease 0.5s;\n    overflow: hidden;\n\n    p {\n      transform: rotate(90deg);\n      font-size: 3rem;\n    }\n  }\n\n  #score {\n    position: relative;\n\n    width: 80%;\n    height: 30%;\n\n    & > * {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n    }\n    \n    img {\n      object-fit: cover;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n    #overlay {\n      background-color: black;\n      opacity: 0.5;\n      transform-origin: top left;\n      top: 0;\n      right: 0;\n      transition: all ease .5s;\n    }\n\n    #textContainer {\n      overflow: hidden;\n      font-size: 1.5rem;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 0px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: all ease .5s;\n      p {\n        color: white;\n        white-space: nowrap;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const a=A},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(A[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&A[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(i," */"),A=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(A).concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},A=[],a=0;a<n.length;a++){var s=n[a],c=o.base?s[0]+o.base:s[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=i(u,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:m,references:1})}A.push(l)}return A}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var A=0;A<r.length;A++){var a=t(r[A]);e[a].references--}for(var s=o(n,i),c=0;c<r.length;c++){var d=t(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(569),A=t.n(r),a=t(565),s=t.n(a),c=t(216),d=t.n(c),l=t(589),p=t.n(l),u=t(377),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=A().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var C=t(803),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=A().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(C.Z,f),C.Z&&C.Z.locals&&C.Z.locals;const h=document.querySelector("#container"),b=document.querySelector("#start");var B=function(n,e,t,o){return new(t||(t=Promise))((function(i,r){function A(n){try{s(o.next(n))}catch(n){r(n)}}function a(n){try{s(o.throw(n))}catch(n){r(n)}}function s(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(A,a)}s((o=o.apply(n,e||[])).next())}))};b.addEventListener("click",(()=>B(void 0,void 0,void 0,(function*(){b.remove(),yield(n=>new Promise((e=>{const t=document.createElement("div");t.setAttribute("id","countdownContainer"),n.appendChild(t);for(let n=0;n<=3;n++){const o=document.createElement("p");t.appendChild(o),o.textContent=0!==n?n.toString():"let's talk!!!",o.setAttribute("class","start"),setTimeout((()=>{o.setAttribute("class","end"),setTimeout((()=>{o.remove(),0===n&&(t.remove(),e())}),1e3)}),1e3*(3-n))}})))(h);const n=(()=>{const n=document.createElement("div");n.setAttribute("id","questionContainer");const e=document.createElement("p");e.textContent="Tom Yum Goong",n.appendChild(e);const t=document.createElement("img");return t.src="./img/Tom_Yum_Goong.webp",n.appendChild(t),n})(),e=(()=>{const n=document.createElement("div");return n.setAttribute("id","choicesContainer"),["shrimp","chicken stock","galangal","lemongrass","kaffir lime leave","mushroom","chilli pepper","lime juice","fish sauce"].forEach((e=>{const t=document.createElement("div");n.appendChild(t);const o=document.createElement("input");o.setAttribute("type","checkbox"),o.value=e,t.appendChild(o);const i=document.createElement("img");i.src="./img/Tom_Yum_Goong.webp",i.setAttribute("alt",e),t.appendChild(i),t.addEventListener("click",(()=>o.click()))})),n})(),t=(()=>{const n=document.createElement("div");n.setAttribute("id","submit");const e=document.createElement("p");return e.textContent="answer",n.appendChild(e),n})(),[o,i]=((n,e)=>{let t=60;const o=document.createElement("div");o.id="timerContainer";const i=document.createElement("p");return i.textContent="1:00",o.appendChild(i),[o,setInterval((()=>{0==--t&&e.click(),i.textContent=`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`,t<=10&&i.setAttribute("class","underTen")}),1e3)]})(0,t);h.appendChild(o),h.appendChild(n),h.appendChild(e),h.appendChild(t),t.addEventListener("click",(()=>B(void 0,void 0,void 0,(function*(){clearInterval(i);const n=(n=>{const e=[];return Array.from(n.children).forEach((n=>n.children[0].checked?e.push(n.children[0].value):0)),e})(e),r=(n=>{const e=["shrimp","chicken stock","galangal","lemongrass","kaffir lime leave","mushroom","chilli pepper","lime juice","fish sauce"];let t=0;return e.forEach((e=>n.includes(e)?t++:0)),Math.floor(t/e.length*10)})(n);e.remove(),t.remove(),o.remove(),yield((n,e)=>new Promise((t=>{0===e.length&&t();const o=document.createElement("div");o.setAttribute("id","userAnswer"),n.appendChild(o);for(let n=0;n<e.length;n++){const i=document.createElement("div");o.appendChild(i);const r=document.createElement("img");r.src="./img/Tom_Yum_Goong.webp",r.alt=e[n],i.appendChild(r),setTimeout((()=>{r.setAttribute("class","visible"),n===e.length-1&&t()}),500*n)}})))(h,n),yield(n=>new Promise((e=>{const t=document.createElement("div");t.setAttribute("id","arrow"),n.appendChild(t),setTimeout((()=>{t.setAttribute("style","height: 100px;");const n=document.createElement("p");n.textContent="=>",t.appendChild(n),setTimeout((()=>e()),500)}),500)})))(h),yield((n,e)=>new Promise((t=>{const o=document.createElement("div");o.setAttribute("id","score"),n.appendChild(o);const i=document.createElement("img");i.src="./img/Tom_Yum_Goong.webp",o.appendChild(i);const r=document.createElement("div");r.id="overlay",o.appendChild(r);const A=document.createElement("div");A.id="textContainer",o.appendChild(A);const a=document.createElement("p");a.textContent=`${e} POINTS!!!`,A.appendChild(a),setTimeout((()=>{r.setAttribute("style",`width: ${100-10*e}%;`),setTimeout((()=>{A.setAttribute("style","width: 100%;"),setTimeout((()=>t()),500)}),500)}),500)})))(h,r)}))))}))))})()})();
//# sourceMappingURL=bundle.js.map