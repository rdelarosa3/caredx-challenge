!function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=68)}({68:function(e,t,i){"use strict";!function(e){var t=e.$,i=e.dataSource,a=e.constants,n=a.DISPLAY_TYPES,d=a.MIME_TYPES,r=a.HTTP_VERBS,l=i.utils,o=e.utils,s=o.getObjectProperty,p=o.capitalizeFirst,f=d.JSON,c=n.STRING,u=n.INTEGER,y=n.DATETIME,h=r.GET,T=function(i,a,n,d,r){var l=new FormData,o=i.name,s=n.model,p=e.dataSource.utils.getModelMergeConditions(s,{model:s,row:n.row}).folderid;d({fileName:n.filename||o}),l.append("file",i),l.append("parent_id",p),t.ajax({url:"https://upload.box.com/api/2.0/files/content",headers:{Authorization:"Bearer "+function(e){return e.dataSource.authentication.responseBody.access_token}(s)},type:"POST",processData:!1,contentType:!1,data:l,success:function(){r()},error:function(e){r({message:e.responseText||"Had an Error!"})}})};i.getDataSourceType("Box")||new i.core.RESTDataSourceTypeBase({name:"Box",coerceRequest:function(e){"query"===e.type&&(e.row&&"Folder"===e.row.type&&(e.request.url="/folders/{{id}}"),function(e){var t=l.getModelMergeConditions(e.model,e),i=t.folderid,a=t.__default_searchbox,n=e.request.url;i&&(n=n.replace("{{folderid}}",i)),a&&(n="/search?query="+a),e.request.url=n}(e))},getEntityList:l.getEntityListStatic,queryEntityMetadata:function(e){var i=this.getEntityMetadataCacheKey(e),a=this.prop("x-metadata")[i];return t.Deferred().resolve(a)},parseSuccessfulLoadResponse:function(e,i,a,n){var d=this.parseResponseBodyAsJSON(e.body),r=i.pathToContent,l=r?s(d,r):d,o=this.getIdField(n);return t.isArray(l)&&t.each(l,function(e,t){t.Id=t[o],t.type=p(s(t,"type"))}),l},getUploadMethods:function(){return{"Direct Upload":{label:"Direct Upload",canRunPostUploadSnippet:!0,upload:T,needsModelInContext:!0,hasDescription:!1,hasName:!1}}},extendedProperties:{hasDefaultSearch:!0,canServerSearch:!0,"x-metadata":{File:{label:"File",labelPlural:"Files",fields:[{id:"id",label:"Id",inlineHelpText:"The ID of the file or folder",idField:!0,displaytype:c,"x-alwaysinclude":!0},{id:"type",label:"Type",inlineHelpText:"The type of the item",displaytype:c},{id:"name",label:"Name",inlineHelpText:"The name of the file or folder",displaytype:c},{id:"etag",label:"Etag",inlineHelpText:"A unique string identifying the version",displaytype:c},{id:"description",label:"Description",inlineHelpText:"The description of this item",displaytype:c,defer:!0,path:"description"},{id:"size",label:"Size (in bytes)",inlineHelpText:"Size of this file in bytes",displaytype:u,defer:!0,path:"size"},{id:"created_at",label:"Created At",inlineHelpText:"When this file was created",displaytype:y,defer:!0,path:"created_at"},{id:"modified_at",label:"Modified At",inlineHelpText:"When this file was last updated",displaytype:y,defer:!0,path:"modified_at"},{id:"content_created_at",label:"Content Created",inlineHelpText:"When the content of this file was created",displaytype:y,defer:!0,path:"content_created_at"},{id:"content_modified_at",label:"Content Modified",inlineHelpText:"When the content of this file was modified",displaytype:y,defer:!0,path:"content_modified_at"},{id:"created_by",label:"Created By",inlineHelpText:"The user who first created this file",displaytype:c,defer:!0,path:"created_by.name"},{id:"owned_by",label:"Owned By",inlineHelpText:"The user who owns this file",displaytype:c,defer:!0,path:"owned_by.name"},{id:"modified_by",label:"Modified By",inlineHelpText:"The user who last updated this file",displaytype:c,defer:!0,path:"modified_by.name"},{id:"shared_link",label:"Shared Link",inlineHelpText:"The shared link for this file",displaytype:c,defer:!0,path:"shared_link.url"},{id:"parent",label:"Parent",inlineHelpText:"The folder containing this file",displaytype:c,defer:!0,path:"parent.name"},{id:"item_status",label:"Status",inlineHelpText:"Whether this item is deleted or not",displaytype:c,defer:!0,path:"item_status"}],methods:{query:{url:"/folders/{{folderid}}/items",verb:h,contentType:f,pathToContent:"entries",additionalRequests:[{url:"/files/{{id}}",verb:h,contentType:f,fields:["description","size","created_at","modified_at","content_created_at","content_modified_at","created_by","modified_by","owned_by","shared_link","parent","item_status"]}]}},defaultConditions:[{sourcetype:"param",sourceparam:"folderid",name:"Folder",label:"Folder",state:"filterableon",value:"0"}]}}}})}(skuid)}});