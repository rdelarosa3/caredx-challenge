!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=366)}({366:function(e,t,r){"use strict";!function(e){if(!e.dataSource.getType("OData")){var t=e.dataSource.core,r=e.dataSource.utils,a=e.$;new t.ODataDataSourceTypeBase({name:"OData",reverseFormattingOfKey:function(e,t,r){if(!e||!e.length)return e;if(1<r.major){if("Edm.Guid"===t.edmtype)return e.substring(5,e.length-1);if("Edm.DateTime"===t.edmtype)return e.substring(9,e.length-1);if("Edm.Binary"===t.edmtype)return e.substring(2,e.length-1)}return"'"===e[0]&&"'"===e[e.length-1]?e.substring(1,e.length-1):e},coerceSaveItemRequest:function(e,t){if("update"!==t.operationType)return e;var r,n=t.entityType.key,o=e.data,u=t.model,i=t.version;return a.isArray(n)&&(n=n[0]),n&&i.major<3&&1===n.propertyRef.length&&(o[r=n.propertyRef[0].name]=this.reverseFormattingOfKey(t.key,u.getField(r),i)),e},getActions:r.getActionsStatic})}}(skuid)}});