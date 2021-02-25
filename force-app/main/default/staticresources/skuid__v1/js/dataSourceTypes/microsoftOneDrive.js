!function(n){var a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=365)}({365:function(e,t,n){"use strict";var S,m,P,y,h,O,i,R,a,r,o,l,s,d,c,u,A,p,f,v,b,T,g,x,C,_,E,U;S=skuid,m=S.$,P=m.each,y=m.Deferred,h=m.ajax,O=S.utils,i=O.getObjectProperty,R=O.parseAsJSONIfString,a=S.dataSource,r=a.utils,o=S.constants,l=o.DATASOURCE,s=o.DISPLAY_TYPES,d=o.MIME_TYPES,c=o.HTTP_VERBS,u="MicrosoftOneDrive",A=d.JSON,p=s.DATETIME,f=s.NUMBER,v=s.OBJECT,b=s.STRING,T=s.IMAGE,g=c.GET,x=c.PATCH,C=c.DELETE,_="Parent Folder",E=l.SEARCH_CONDITION,U=function(e){var t,n,a=function(e,n){var a={};return P(e,function(e,t){t.inactive||(a[t.sourceParam||t.name]=encodeURI(O.mergeAsTextInContext(t.value,n)))}),a}(e.model.conditions,e),r=a[E],i=a[_],o=a.extension||"";i?-1===i.indexOf("/")?n="/_api/v2.0/drive/items/"+i+"/children":(t=(i=i.split(" ").join("%20")).split("/"),n="/_api/v2.0/drive/root:"+i,o||-1!==t[t.length-1].indexOf(".")||(n+=":/children")):n="/_api/v2.0/drive/root/children",r&&(n=i&&-1===i.indexOf("/")?"/_api/v2.0/drive/items/"+i+"/view.search?q="+r:"/_api/v2.0/drive/root/view.search?q="+r),e.request.url=n},a.getDataSourceType(u)||new a.core.RESTDataSourceTypeBase({name:u,coerceRequest:function(e){var t=e.type,n=e.request.data;if(!e.request.url)if("query"===t)U(e);else if(("update"===t||"delete"===t)&&(e.request.url="/_api/v2.0/drive/items/"+e.originalRecordId,"update"===t)){var a=n.parentDirectory||"";e.request.data.parentReference={path:"/drive/root:"+a},delete e.request.data.parentDirectory}e.request.headers={Accept:A}},parseSuccessfulLoadResponse:function(e,t,n,a){var o,r,i,l,s=this.parseResponseBodyAsJSON(e.body),d=t.pathToContent,c=a.conditions,u=[];if(m.each(c,function(e,t){"extension"===t.name?o=t.value:t.name===_&&(r=t.value)&&(i=r.split("/"))}),l=r&&-1!==i[i.length-1].indexOf(".")?s:d?O.getObjectProperty(s,d):s,m.isArray(l))m.each(l,function(e,t){var n;if(o){var a=t.name.split(".");n=a?a.slice(-1)[0]:""}if(o&&-1===n.indexOf(o))delete l[e];else{var r=t.parentReference.path,i=r?r.split(":")[1]:t.parentReference.id;t.createdByUserName=O.getObjectProperty(t,"createdBy.user.displayName"),t.lastModifiedByUserName=O.getObjectProperty(t,"lastModifiedBy.user.displayName"),t.parentDirectory=i,t.oneUp=i.substring(0,i.lastIndexOf("/")),t.downloadUrl=t["@content.downloadUrl"],u.push(t)}}),l=u;else{var p=l.parentReference.path,f=p?p.split(":")[1]:l.parentReference.id;l.createdByUserName=O.getObjectProperty(l,"createdBy.user.displayName"),l.lastModifiedByUserName=O.getObjectProperty(l,"lastModifiedBy.user.displayName"),l.parentDirectory=f,l.oneUp=f.substring(0,f.lastIndexOf("/")),l.downloadUrl=l["@content.downloadUrl"],l=[l]}return l},getUploadMethods:function(){return{"Direct Upload":{label:"Direct Upload",canRunPostUploadSnippet:!0,upload:function(e,t,n,a,s,r){var d,i,c,u,o=encodeURIComponent(O.renameFileWhileKeepingExtension(e.name,n.fileNameOverride?O.mergeAsTextInContext(n.fileNameOverride,n):"")),l=new FileReader,p=n.model,f=p.dataSource,m=p.conditions,y=f.serviceUrl,h=e.size,v=S.platform.getMaxProxyRequestPayload(),b=1;function T(e){if(e&&e.body){var t=e.body;if(t&&t.error&&t.error.message)return t.error.message}return"Had an error"}function g(e,t){return S.utils.inPlatform(S.constants.NATIVE)?e:"atob"===t?atob(e):"btoa"===t?btoa(e):void 0}function x(){var e=g(u[0],"atob").length-1;return r({loaded:b,total:c}),f.makeRequest(f.createHTTPRequest({url:d,headers:{"Content-Range":"bytes 0-"+e+"/"+h,"Content-Length":u[0].length,Accept:A},contentType:"application/octet-stream",method:"PUT",body:u[0]})).then(function(e){1===c?s():function o(l){r({loaded:++b,total:c}),f.authenticate(n).then(function(){if(b===c)a=R(l.body),r=a.nextExpectedRanges[0].split("-")[0],i=parseInt(r,10)+g(u[b-1],"atob").length-1,f.makeRequest(f.createHTTPRequest({url:d,headers:{"Content-Range":"bytes "+r+"-"+i+"/"+h,"Content-Length":u[b-1].length,Accept:A},contentType:"application/octet-stream",method:"PUT",body:u[b-1]})).then(function(e){202===e.statusCode?s({message:"Upload failed!"}):s()},function(e){s({message:T(e)})});else{var e=R(l.body),t=e.nextExpectedRanges[0].split("-")[0],n=parseInt(t,10)+g(u[b-1],"atob").length-1;f.makeRequest(f.createHTTPRequest({url:d,headers:{"Content-Range":"bytes "+t+"-"+n+"/"+h,"Content-Length":u[b-1].length,Accept:A},contentType:"application/octet-stream",method:"PUT",body:u[b-1]})).then(function(e){o(e)},function(e){s({message:T(e)})})}var a,r,i})}(e)},function(e){s({message:T(e)})})}P(m,function(e,t){i=t.value||""}),l.readAsBinaryString(e),l.onloadend=function(){u=l.result,c=Math.ceil(h/v),f.authenticate(n).then(function(){u=function(e,t){for(var n=e.length,a=[],r=Math.ceil(n/t),i=0;i<t;i++)a[i]=g(e.slice(r*i,r*(i+1)),"btoa");return a}(u,c),function(){var e;a({fileName:o}),e=i&&-1===i.indexOf("/")?y+"/_api/v2.0/drive/items/"+i+":/"+o+":/upload.createSession":i&&"/"!==i?y+"/_api/v2.0/drive/root:"+i+"/"+o+":/upload.createSession":y+"/_api/v2.0/drive/root:/"+o+":/createUploadSession";var t=f.createHTTPRequest({url:e,method:"POST",headers:{"Content-Length":0,Accept:A}});return f.makeRequest(t)}().then(function(e){var t=R(e.body);d=t.uploadUrl,x()},function(e){s({message:T(e)})})})}},needsModelInContext:!0,hasDescription:!1}}},parseAdditionalQueries:function(e,t,n,a){var r=i(R(e.body),a.method.pathToContent);m.isArray(r)&&(r=r[0]),t.fields.forEach(function(e){e.defer&&-1<m.inArray(e.id,a.method.fields)&&(n[e.id]=i(r,e.path))})},createActions:function(e){return{"create-folder":{label:"Create new folder",builderProps:[{label:"Model with Parent Folder Condition",id:"model",type:"model",helptext:"Will take the value in this model's parent folder condition, and use it as the parent folder for the new folder",entryFilter:O.filterByDataSourceAndEntity(e.name,"File")},{label:"Folder Name",id:"foldername",type:"string"}],runtimeExecution:function(e,t,n,a){var r,i=S.$M(O.mergeAsDataInContext(e.attr("model"))),o=i.dataSource.serviceUrl,l="",s=O.mergeAsTextInContext(e.attr("foldername"),n),d=y();return P(i.conditions,function(e,t){t.sourceParam===_&&(l=O.mergeAsTextInContext(t.value,n)||l)}),r={name:s,folder:{},"@name.conflictBehavior":"rename"},l&&-1===l.indexOf("/")?h({url:o+"/_api/v2.0/drive/items/"+l+"/children",headers:{Authorization:"Bearer "+a.authentication.responseBody.access_token,"Content-Type":"application/json"},method:"POST",dataType:"json",data:JSON.stringify(r),success:function(){d.resolve()},error:function(e){d.reject(e)}}):h({url:o+"/_api/v2.0/drive/root:"+l,headers:{Authorization:"Bearer "+a.authentication.responseBody.access_token},method:"GET",dataType:"json",success:function(e){h({url:o+"/_api/v2.0/drive/items/"+e.id+"/children",headers:{Authorization:"Bearer "+a.authentication.responseBody.access_token,"Content-Type":"application/json"},method:"POST",dataType:"json",data:JSON.stringify(r),success:function(){d.resolve()},error:function(e){d.reject(e)}})},error:function(e){d.reject(e)}}),d.promise()}},copy:{label:"Copy a File",builderProps:[{label:"Model with Parent Folder Condition",id:"model",type:"model",helptext:"Will take the value in this model's parent folder condition, and use it as the parent folder for the new folder",entryFilter:O.filterByDataSourceAndEntity(e.name,"File")},{label:"File Name",id:"filename",type:"string"}],runtimeExecution:function(e,t,n){var a,r,i=S.$M(O.mergeAsDataInContext(e.attr("model"))),o=n.row,l=o.parentReference.path,s=l?l.split(":")[1]:o.parentReference.id,d=i.dataSource,c=d.serviceUrl,u="",p=O.mergeAsTextInContext(e.attr("filename"),n),f=y();return P(i.conditions,function(e,t){t.sourceParam===_&&(u=O.mergeAsTextInContext(t.value,n)||u)}),r={parentReference:o.parentReference,name:p},a=u?u&&-1===u.indexOf("/")?c+"/_api/v2.0/drive/items/"+o.id+"/action.copy":c+"/_api/v2.0/drive/root:"+s+"/"+o.name+":/action.copy":c+"/_api/v2.0/drive/root:/"+o.name+":/action.copy",h({url:a,headers:{Authorization:"Bearer "+d.authentication.responseBody.access_token,"Content-Type":"application/json",Prefer:"response-async"},method:"POST",dataType:"json",data:JSON.stringify(r),success:function(){f.resolve()},error:function(e){f.reject(e)}}),f.promise()}}}},getEntityList:r.getEntityListStatic,queryEntityMetadata:r.queryEntityMetadataStatic,getActions:r.getActionsStatic,extendedProperties:{composer:{unomittableFields:!0,hasEntityOptions:!0},hasDefaultSearch:!0,canServerSearch:!0,hasGlobalSearchEntities:!0,"x-metadata":{__skuid_fieldDefaults:{File:{displaytype:b,editable:!1,createable:!1,accessible:!0}},File:{idFields:["id"],nameField:"name",label:"File",labelPlural:"Files",fields:[{id:"id",inlineHelpText:"Identifier of the drive.","x-alwaysinclude":!0},{id:"name",inlineHelpText:"Name of the drive.",editable:!0},{id:"createdByUserName"},{id:"createdDateTime",displaytype:p},{id:"lastModifiedByUserName"},{id:"lastModifiedDateTime",displaytype:p},{id:"webUrl"},{id:"parentReference",displaytype:v,accessible:!1},{id:"size",displaytype:f},{id:"parentDirectory",editable:!0},{id:"oneUp",label:"Directory Up"},{id:"downloadUrl",label:"Download Link"},{id:"smallThumbnail",label:"Thumbnail (Small)",displaytype:T,defer:!0,path:"small.url"},{id:"mediumThumbnail",label:"Thumbnail (Medium)",displaytype:T,defer:!0,path:"medium.url"},{id:"largeThumbnail",label:"Thumbnail (Large)",displaytype:T,defer:!0,path:"large.url"}],methods:{query:{url:"",verb:g,contentType:A,pathToContent:"value",additionalRequests:[{url:"/_api/v2.0/drive/items/{{id}}/thumbnails",verb:g,contentType:A,pathToContent:"value",fields:["smallThumbnail","mediumThumbnail","largeThumbnail"]}]},update:{url:"",verb:x,contentType:A,receiveDataAs:"recordinbody",successIf:"responsefieldispresent",successField:"name"},delete:{url:"",verb:C,contentType:A},search:{url:"/_api/v2.0/drive/root/view.search?q={{search}}",verb:g,contentType:A,pathToContent:"value"}},defaultConditions:[{sourcetype:"param",sourceparam:_,name:_,label:"Path to File/Folder",state:"filterableon",value:""},{sourcetype:"param",sourceparam:"extension",name:"extension",label:"File Extension",state:"filterableon",value:""}]}}}})}});