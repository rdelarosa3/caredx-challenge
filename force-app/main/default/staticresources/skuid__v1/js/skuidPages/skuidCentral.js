!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=340)}({340:function(e,t,r){"use strict";var n,o,i,u,a;n=skuid,o=n.snippet.register,i=n.constants,u=n.utils.inPlatform([i.LIGHTNING,i.VISUALFORCE]),a=n.utils,o("seedDataForDemo",function(e){return u?n.remote.promisify(n.DemoDataSource,"seedStartUpData").then(function(e){return e?n.skuidPageUtils.checkForRemoteSiteSetting(e,"Demo_DataSource",{showMessages:!1,showPrompt:!1}):void 0}).catch(function(e){if(!a.isString(e)||!a.contains(e,"already exists"))throw e}):function(e){return n.ajax.direct({url:"/api/v1/app-templates/"+e+"/install/preview",type:"POST"})}(a.grab(e,"$Input","id"))})}});