!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=349)}({349:function(e,t,n){"use strict";!function(){var t=skuid.$.each,e=skuid.dataSource,n=e.utils,s=skuid.utils.getInvokable,c=n.compose,p=n.deferrable,d=n.makeAWSRequest,r=[{id:"payload",type:"snippet",label:"Payload Snippet",helptext:"The return value of this snippet will be sent to the Lambda function as the body payload."},{id:"handler",type:"snippet",label:"Response handler Snippet (optional)",helptext:"This snippet is passed the result of invoking the Lambda, and can be synchronous or asynchronous."}];function o(e,t,n,r){var o=s(e,"attr"),a=o("actionname"),i=c(skuid.snippet.get,o),u=i("payload"),l=o("handler")&&i("handler");if(!u)throw"Must have valid payload snippet";return p(u(n)).then(function(e){try{var t=JSON.stringify(e)}catch(e){throw"Payload snippet must result in valid JSON"}return d(r.name,"invoke",{FunctionName:a,Payload:t})}).then(function(e){return l?l(e):e})}new e.DataSourceType({name:"AmazonLambda",getActions:function(e){return d(e.name,"listFunctions",{MaxItems:100}).then(function(e){var n={};return t(e.Functions,function(e,t){n[t.FunctionName]={runtimeExecution:o,builderProps:r,label:t.FunctionName}}),n})},modelable:!1})}()}});