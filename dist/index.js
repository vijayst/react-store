parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"rAXi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),t=(0,e.createContext)();exports.default=t;
},{}],"MwYS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=o(require("react")),r=t(require("./StoreContext"));function t(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}function u(t){const o=t.rootReducer(t.initialValue,{type:"__INIT__"}),[u,n]=(0,e.useReducer)(t.rootReducer,o);return e.default.createElement(r.default.Provider,{value:[u,n]},t.children)}
},{"./StoreContext":"rAXi"}],"I99N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=require("react"),t=r(require("./StoreContext"));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return(0,e.useContext)(t.default)}
},{"./StoreContext":"rAXi"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Store")),r=t(require("./useStore"));function t(e){return e&&e.__esModule?e:{default:e}}var u={Store:e.default,useStore:r.default};exports.default=u;
},{"./Store":"MwYS","./useStore":"I99N"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map