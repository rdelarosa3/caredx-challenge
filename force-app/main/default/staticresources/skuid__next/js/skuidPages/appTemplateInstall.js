skuid.runtime.registerApi("v2","skuidPages/appTemplateInstall",function(e){var t=function(e){var t={};function n(r){if(t[r]){return t[r].exports}var u=t[r]={i:r,l:false,exports:{}};e[r].call(u.exports,u,u.exports,n);u.l=true;return u.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=693)}({693:function(t,n){(function(e){let t=e.$;let n=e.snippet.register;let r="cloudformation template";function u(e){try{return JSON.parse(atob(e.trim()))}catch(e){return{}}}function o(){let n={};let o=e.model.getModel("Values").getRows();t.each(o,function(e,o){if(o.type==r){n=t.extend({},u(o.textareavalue),n)}else if(o.type=="other"){n[o.input_name]=o.textvalue}else{n[o.input_name]=o.textvalue}});return n}function i(){let t=e.model.getModel("App_Details").getFirstRow();let n=t.id;return e.ajax.direct({url:"/api/v1/app-templates/".concat(n,"/install"),type:"POST",contentType:"application/json",body:{userInputs:o()}})}n("installApp",i)})(e)}});return t});