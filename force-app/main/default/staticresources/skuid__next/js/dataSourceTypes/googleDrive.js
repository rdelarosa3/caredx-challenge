skuid.runtime.registerApi("v2","dataSourceTypes/googleDrive",function(e){var t=function(e){var t={};function i(n){if(t[n]){return t[n].exports}var l=t[n]={i:n,l:false,exports:{}};e[n].call(l.exports,l,l.exports,i);l.l=true;return l.exports}i.m=e;i.c=t;i.d=function(e,t,n){if(!i.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(e,t){if(t&1)e=i(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);i.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";return i(i.s=717)}({717:function(t,i){(function(e){const t=e.$,i=t.each,n=e.utils,l=n.Deferred,a=e.dataSource.utils,o=n.mergeAsTextInContext,r=e.dataSource,s=e.constants,d=s.DATASOURCE,p=s.DISPLAY_TYPES,u=s.HTTP_VERBS,f="GoogleDrive",c=p.ARRAY,h=p.BOOLEAN,m=p.DATETIME,y=p.NUMBER,b=p.STRING,T=u.GET,g=u.POST,v=u.DELETE,x="Parent Folder",w="Title",H="Mimetype",D=d.SEARCH_CONDITION,S="search";if(r.getDataSourceType(f))return;new r.core.RESTDataSourceTypeBase({name:f,coerceRequest:function e(t){let i=t.model,n="/files",l,o,r,s=a.getModelMergeConditions(i,t,{urlEncode:false}),d,p,u="?q=trashed+%3D+false";if(t.type!=="query"&&t.type!=="search")return;l=s[x];o=s[w];r=s[H];d=s[D];p=s[S];if(l){u+=encodeURIComponent(" and '"+l+"' in parents")}if(o){u+=encodeURIComponent(" and title contains '"+o+"'")}if(r){if(r.indexOf("/")!==-1){u+=encodeURIComponent(" and mimeType = '"+r+"'")}else{u+=encodeURIComponent(" and mimeType contains '"+r+"'")}}if(t.type==="search"){u+=encodeURIComponent(" and title contains '"+p+"'")}if(d){u+=encodeURIComponent(" and fullText contains '"+d+"'")}t.request.url=n+u.replace(/%20/g,"+")},parseSuccessfulLoadResponse:function e(t,i,n){let l=a.parseSuccessfulLoadResponseWithSynonyms(t,i,n);a.safeEach(l,function(e,t){t.downloadlink=t["webContentLink"]||t["embedLink"]});return l},getUploadMethods:function t(){function l(t,l,a,r,s){let d=a.model,p=n.renameFileWhileKeepingExtension(t.name,o(a.filename,a)),u=l.options.xmlDef,f=d?d.getDataSource():e.dataSource.get(u.attr("datasource")),c="-------314159265358979323846",h="\r\n--"+c+"\r\n",m="\r\n--"+c+"--";let y=new FileReader;y.readAsBinaryString(t);y.onload=function(){let e=t.type||"application/octet-stream",n={title:p,mimeType:e},l;if(d){i(d.conditions,function(e,t){if(t.sourceParam===x&&t.value){l=o(t.value,{model:d});return-1}})}else{l=o(u.attr("folder"),a)}if(l){n.parents=[{id:l}]}let b=btoa(y.result),T=h+"Content-Type: application/json\r\n\r\n"+JSON.stringify(n)+h+"Content-Type: "+e+"\r\n"+"Content-Transfer-Encoding: base64\r\n"+"\r\n"+b+m,v={path:"/upload/drive/v2/files",method:g,params:{uploadType:"multipart"},headers:{"Content-Type":'multipart/mixed; boundary="'+c+'"'},body:T},w=new XMLHttpRequest,H=false;w.open("POST","https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart",true);r({fileName:t.name});w.onreadystatechange=function(){if(!H&&this.response&&this.status===200){H=true;s()}else if(this.status>=400){s({message:"Had an Error!"})}};w.setRequestHeader("Authorization","Bearer "+f.authentication.responseBody.access_token);w.setRequestHeader("Content-Type",v.headers["Content-Type"]);w.send(v.body)}}return{"Direct Upload":{label:"Direct Upload",canRunPostUploadSnippet:true,upload:l,needsModelInContext:true,hasDescription:false,builderProps:function e(t,i){let n=[];if(!i.attr("model")){n.push({id:"folder",type:"template",label:"Parent Folder ID",helptext:"The ID of the folder you want this file to be placed within",location:"attribute",displayAs:"input"})}return n}}}},getConditionSourceProperties:function t(i,n){let l=e.builder.core,a=i.get("xmlState");return[{label:"Query Parameter",deleteable:false,linkedComponent:i,summaryFunction:function e(t){return l.conditionDescriptionRenderers.parameter(t)},propsFunction:function e(t){return[{id:"sourceparam",label:"Query Parameter Name",onChange:function e(l,o){if(a.attr("sourcetype")!=="param"){a.attr("sourcetype","param");a.attr("sourceparam",o);i.save()}i.refresh();if(n.handleChange)n.handleChange(t)()},type:"picklist",picklistEntries:[{value:w,label:w},{value:x,label:x},{value:H,label:H}]}]}}]},createActions:function t(a){function o(t,a,o,r,s){let d=new XMLHttpRequest,p=e.$M(n.mergeAsDataInContext(t.attr("model"))),u="root",f,c=n.mergeAsTextInContext(t.attr("foldername"),o),h=l();i(p.conditions,function(e,t){if(t.sourceParam===x){u=n.mergeAsTextInContext(t.value,o)||u}});f={parents:[{id:u}],title:c,mimeType:s};d.open("POST","https://www.googleapis.com/drive/v2/files",true);d.setRequestHeader("Authorization","Bearer "+r.authentication.responseBody.access_token);d.setRequestHeader("Content-Type","application/json");d.send(JSON.stringify(f));d.onreadystatechange=function(){if(this.response&&this.status===200){h.resolve(this.response)}else if(this.status>=400){h.reject(this.response)}};return h.promise()}return{"create-file":{label:"Create New",builderProps:[{label:"Model with Parent Folder Condition",id:"model",type:"model",helptext:"Will take the value in this model's parent folder condition, and use it as the parent folder for the new folder",entryFilter:n.filterByDataSourceAndEntity(a.name,"File")},{label:"Name",id:"foldername",type:"string"},{label:"Type",id:"mimetype",type:"picklist",picklistEntries:[{value:"-",label:"New Folder",disabled:true},{label:"Folder",value:"application/vnd.google-apps.folder",defaultValue:true},{value:"-",label:"",disabled:true},{value:"-",label:"Standard Files",disabled:true},{label:"Document",value:"application/vnd.google-apps.document",defaultValue:true},{label:"Spreadsheet",value:"application/vnd.google-apps.spreadsheet",defaultValue:false},{label:"Slides",value:"application/vnd.google-apps.presentation",defaultValue:false},{value:"-",label:"",disabled:true},{value:"-",label:"Extra",disabled:true},{label:"Form",value:"application/vnd.google-apps.form",defaultValue:false},{label:"Drawing",value:"application/vnd.google-apps.drawing",defaultValue:false}]}],runtimeExecution:function e(t,i,n,l){return o(t,i,n,l,t.attr("mimetype"))}}}},queryEntityMetadata:a.queryEntityMetadataStatic,getEntityList:a.getEntityListStatic,getActions:a.getActionsStatic,extendedProperties:{composer:{unomittableFields:true,hasEntityOptions:true},hasDefaultSearch:true,canServerSearch:true,hasGlobalSearchEntities:true,"x-metadata":{__skuid_fieldDefaults:{File:{displaytype:b,writeable:false,filterable:false}},File:{idFields:["id"],nameField:"title",label:"File",labelPlural:"Files",fields:[{id:"id",inlineHelpText:"The ID of the file.","x-alwaysinclude":true},{id:"etag",inlineHelpText:"ETag of the file."},{id:"title",inlineHelpText:"The title of the file. Used to identify file or folder name."},{id:"mimeType",inlineHelpText:"The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type."},{id:"downloadlink",label:"Download/Preview Link",inlineHelpText:"For google native file types, will link to the file in google drive, otherwise the link will be a download link."},{id:"description",inlineHelpText:"A short description of the file."},{id:"createdDate",displaytype:m,inlineHelpText:"Create time for this file (formatted RFC 3339 timestamp)."},{id:"modifiedDate",displaytype:m,inlineHelpText:"Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set."},{id:"modifiedByMeDate",displaytype:m,inlineHelpText:"Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date."},{id:"fileExtension",inlineHelpText:"The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files."},{id:"md5Checksum",inlineHelpText:"An MD5 checksum for the content of this file. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files."},{id:"fileSize",displaytype:y,inlineHelpText:"The size of the file in bytes. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files."},{id:"sharedWithMeDate",label:"Shared With Me Date",displaytype:m,inlineHelpText:"Time at which this file was shared with the user (formatted RFC 3339 timestamp)."},{id:"originalFilename",inlineHelpText:"The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Drive."},{id:"ownerNames",displaytype:c,inlineHelpText:"Name(s) of the owner(s) of this file."},{id:"lastModifyingUserName",synonym:"lastModifyingUser.displayName",inlineHelpText:"Name of the last user to modify this file."},{id:"editable",displaytype:h,inlineHelpText:"Whether the file can be edited by the current user."},{id:"writersCanShare",displaytype:h,inlineHelpText:"Whether writers can share the document with other users."},{id:"thumbnailLink",inlineHelpText:"A short-lived link to the file's thumbnail. Typically lasts on the order of hours."},{id:"lastViewedByMeDate",displaytype:m,inlineHelpText:"Last time this file was viewed by the user (formatted RFC 3339 timestamp)."},{id:"webViewLink",inlineHelpText:"A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting."},{id:"iconLink",inlineHelpText:"A link to the file's icon."},{id:"shared",displaytype:h,inlineHelpText:"Whether the file has been shared."},{id:"lastModifyingUserName",inlineHelpText:"A plain text displayable name for this user."},{id:"lastModifyingUserPicture",synonym:"lastModifyingUser.picture.url",inlineHelpText:"A URL that points to a profile picture of this user."},{id:"copyable",displaytype:h,inlineHelpText:"Whether the file can be copied by the current user."},{id:"properties",displaytype:c,inlineHelpText:"The list of properties."},{id:"lastModifyingUserEmail",synonym:"lastModifyingUser.email",inlineHelpText:"The email address of the user. This field is returned only if the last modifying user is an owner of the file, the requesting user is an owner or can modify the file, or if the last modifying user's email address is visible."},{id:"markedViewedByMeDate",displaytype:m,inlineHelpText:"Deprecated."},{id:"version",displaytype:y,inlineHelpText:"A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user."},{id:"folderColorRgb",inlineHelpText:"Folder color as an RGB hex string if the file is a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette."},{id:"fullFileExtension",inlineHelpText:'The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.'},{id:"starred",synonym:"labels.starred",inlineHelpText:"Whether or not the file has been starred."},{id:"haveViewed",synonym:"labels.viewed",inlineHelpText:"Whether or not the current user has viewed the file."},{id:"userPermissionRole",synonym:"userPermission.role",inlineHelpText:"The current user's permission role for the file."},{id:"ownedByMe",displaytype:h,inlineHelpText:"Whether the file is owned by the current user."},{id:"canComment",displaytype:h,inlineHelpText:"Whether the current user can comment on the file."},{id:"shareable",displaytype:h,inlineHelpText:"Whether the file's sharing settings can be modified by the current user."},{id:"spaces",displaytype:c,inlineHelpText:"The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'."},{id:"canReadRevisions",displaytype:h,inlineHelpText:"Whether the current user has read access to the Revisions resource of the file."}],methods:{query:{pathToContent:"items",url:"/files",verb:T,contentType:"application/json"},delete:{url:"/files/{{id}}",verb:v,successIf:"requestsucceeds"},search:{url:"/files",verb:T,contentType:"application/json",pathToContent:"items"}},defaultConditions:[{sourcetype:"param",sourceparam:x,name:x,label:x,state:"filterableon",value:"root"},{sourcetype:"param",sourceparam:w,name:"title",label:w,state:"filterableon",value:""},{sourcetype:"param",sourceparam:H,name:"mimetype",label:H,state:"filterableon",value:""}]}}}})})(e)}});return t});