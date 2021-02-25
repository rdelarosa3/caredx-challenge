skuid.runtime.registerApi("v2","dataSourceTypes/amazonLambda",function(e){var t=function(e){var t={};function n(r){if(t[r]){return t[r].exports}var o=t[r]={i:r,l:false,exports:{}};e[r].call(o.exports,o,o.exports,n);o.l=true;return o.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=706)}({706:function(t,n){(function(){let t=e.$,n=t.each,r=e.dataSource,o=r.utils,a=e.utils,i=a.getInvokable,u=o.compose,l=o.deferrable,s=o.makeAWSRequest,p=[{id:"payload",type:"snippet",label:"Payload Snippet",helptext:"The return value of this snippet will be sent to the Lambda function as the body payload."},{id:"handler",type:"snippet",label:"Response handler Snippet (optional)",helptext:"This snippet is passed the result of invoking the Lambda, and can be synchronous or asynchronous."}];function c(t,n,r,o){let a=i(t,"attr"),p=a("actionname"),c=u(e.snippet.get,a),f=c("payload"),d=a("handler")&&c("handler");if(!f)throw Error("Must have valid payload snippet");return l(f(r)).then(function(e){let t;try{t=JSON.stringify(e)}catch(e){throw Error("Payload snippet must result in valid JSON")}return s(o.name,"invoke",{FunctionName:p,Payload:t})}).then(function(e){return d?d(e):e})}new r.DataSourceType({name:"AmazonLambda",getActions:function e(t){return s(t.name,"listFunctions",{MaxItems:100}).then(function(e){let t={};n(e.Functions,function(e,n){t[n.FunctionName]={runtimeExecution:c,builderProps:p,label:n.FunctionName}});return t})},modelable:false})})()}});return t});