skuid.runtime.registerApi("v2","skuidPages/skuidPageUtils",function(e){var t=function(e){var t={};function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}};e[n].call(o.exports,o,o.exports,r);o.l=true;return o.exports}r.m=e;r.c=t;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(e,t){if(t&1)e=r(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s=703)}({703:function(t,r){(function(e){let t=e.constants,r=e.platform,n=e.utils,o=n.inPlatform([t.LIGHTNING,t.VISUALFORCE]);function i(e){let t=e.split("/");return t[0]+"//"+t[2]}function u(t,u,a){a=a||{};if(!o)return n.resolve();let s=i(t),l=a.showMessages!==false,c=a.showPrompt!==false,f=!c||window.confirm("In order for "+u+" to be accessible by Skuid, "+"you will need to create a Remote Site Setting corresponding to this URL:\n\n"+" - "+t+" \n\nWould you like Skuid to try to see if a Remote Site Setting "+"corresponding to this URL already exists, and if not, create one for you?"),d=e.component.getByType("skuid__page")[0];if(f){let n="For Skuid to access data from "+u;if(l){d._getCPI().blockUI({message:'Attempting to create a Remote Site Setting for URL: "'+t+'"',styleSettingsVariant:"dark"})}let o=r.getDefaultDataSourceName(),i=e.dataSource.getDataSource(o),a=i.getDataSourceType(),c=a.addRemoteSiteSetting({dataSource:i,description:n,url:s});if(l){c.then(function(){d._getCPI().blockUI({message:"A Remote Site Setting has successfully been created!",styleSettingsVariant:"dark",timeout:2e3})}).catch(function(e){d._getCPI().blockUI({message:"There was a problem creating the Remote Site Setting: "+e,styleSettingsVariant:"dark",timeout:3e3})})}return c}else{d._getCPI().unblockUI();return n.resolve()}}e.skuidPageUtils={checkForRemoteSiteSetting:u,getOriginFromUrl:i}})(e)}});return t});