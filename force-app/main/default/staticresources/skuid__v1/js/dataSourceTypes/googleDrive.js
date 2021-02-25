!function(i){var n={};function l(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=i,l.c=n,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=360)}({360:function(e,t,i){"use strict";var g,n,v,u,x,d,w,l,a,o,r,s,p,f,c,h,m,y,b,H,T,D,S,C,M;g=skuid,n=g.$,v=n.each,u=n.Deferred,x=g.utils,d=g.dataSource.utils,w=x.mergeAsTextInContext,l=g.dataSource,a=g.constants,o=a.DATASOURCE,r=a.DISPLAY_TYPES,s=a.HTTP_VERBS,p="GoogleDrive",f=r.ARRAY,c=r.BOOLEAN,h=r.DATETIME,m=r.NUMBER,y=r.STRING,b=s.GET,H=s.POST,T=s.DELETE,D="Parent Folder",S="Title",C="Mimetype",M=o.SEARCH_CONDITION,l.getDataSourceType(p)||new l.core.RESTDataSourceTypeBase({name:p,coerceRequest:function(e){var t,i,n,l,a,o=e.model,r=d.getModelMergeConditions(o,e,{urlEncode:!1}),s="?q=trashed+%3D+false";"query"!==e.type&&"search"!==e.type||(t=r[D],i=r[S],n=r[C],l=r[M],a=r.search,t&&(s+=encodeURIComponent(" and '"+t+"' in parents")),i&&(s+=encodeURIComponent(" and title contains '"+i+"'")),n&&(-1!==n.indexOf("/")?s+=encodeURIComponent(" and mimeType = '"+n+"'"):s+=encodeURIComponent(" and mimeType contains '"+n+"'")),"search"===e.type&&(s+=encodeURIComponent(" and title contains '"+a+"'")),l&&(s+=encodeURIComponent(" and fullText contains '"+l+"'")),e.request.url="/files"+s.replace(/%20/g,"+"))},parseSuccessfulLoadResponse:function(e,t,i){var n=d.parseSuccessfulLoadResponseWithSynonyms(e,t,i);return d.safeEach(n,function(e,t){t.downloadlink=t.webContentLink||t.embedLink}),n},getUploadMethods:function(){return{"Direct Upload":{label:"Direct Upload",canRunPostUploadSnippet:!0,upload:function(s,e,d,p,u){var f=d.model,c=x.renameFileWhileKeepingExtension(s.name,d.fileNameOverride?x.mergeAsTextInContext(d.fileNameOverride,d):""),h=e.options.xmlDef,m=f?f.getDataSource():g.dataSource.get(h.attr("datasource")),y="-------314159265358979323846",b="\r\n--"+y+"\r\n",T=new FileReader;T.readAsBinaryString(s),T.onload=function(){var i,e=s.type||"application/octet-stream",t={title:c,mimeType:e};f?v(f.conditions,function(e,t){if(t.sourceParam===D&&t.value)return i=w(t.value,{model:f}),-1}):i=w(h.attr("folder"),d),i&&(t.parents=[{id:i}]);var n=btoa(T.result),l=b+"Content-Type: application/json\r\n\r\n"+JSON.stringify(t)+b+"Content-Type: "+e+"\r\nContent-Transfer-Encoding: base64\r\n\r\n"+n+"\r\n---------314159265358979323846--",a={path:"/upload/drive/v2/files",method:H,params:{uploadType:"multipart"},headers:{"Content-Type":'multipart/mixed; boundary="'+y+'"'},body:l},o=new XMLHttpRequest,r=!1;p({fileName:c}),o.open("POST","https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart",!0),o.onreadystatechange=function(e){e&&(!r&&e.target.response&&200===e.target.status?(r=!0,u()):400<=e.target.status&&u({message:"Had an Error!"}))},o.setRequestHeader("Authorization","Bearer "+m.authentication.responseBody.access_token),o.setRequestHeader("Content-Type",a.headers["Content-Type"]),o.send(a.body)}},needsModelInContext:!0,hasDescription:!1,builderProps:function(e,t){var i=[];return t.attr("model")||i.push({id:"folder",type:"template",label:"Parent Folder ID",helptext:"The ID of the folder you want this file to be placed within",location:"attribute",displayAs:"input"}),i}}}},getConditionSourceProperties:function(n,l){var t=g.builder.core,a=n.state;return[{label:"Query Parameter",deleteable:!1,linkedComponent:n,summaryFunction:function(e){return t.conditionDescriptionRenderers.parameter(e)},propsFunction:function(i){return[{id:"sourceparam",label:"Query Parameter Name",onChange:function(e,t){"param"!==a.attr("sourcetype")&&(a.attr("sourcetype","param"),a.attr("sourceparam",t),n.save()),n.refresh(),l.handleChange&&l.handleChange(i)()},type:"picklist",picklistEntries:[{value:S,label:S},{value:D,label:D},{value:C,label:C}]}]}}]},createActions:function(e){return{"create-file":{label:"Create New",builderProps:[{label:"Model with Parent Folder Condition",id:"model",type:"model",helptext:"Will take the value in this model's parent folder condition, and use it as the parent folder for the new folder",entryFilter:x.filterByDataSourceAndEntity(e.name,"File")},{label:"Name",id:"foldername",type:"string"},{label:"Type",id:"mimetype",type:"picklist",picklistEntries:[{value:"-",label:"New Folder",disabled:!0},{label:"Folder",value:"application/vnd.google-apps.folder",defaultValue:!0},{value:"-",label:"",disabled:!0},{value:"-",label:"Standard Files",disabled:!0},{label:"Document",value:"application/vnd.google-apps.document",defaultValue:!0},{label:"Spreadsheet",value:"application/vnd.google-apps.spreadsheet",defaultValue:!1},{label:"Slides",value:"application/vnd.google-apps.presentation",defaultValue:!1},{value:"-",label:"",disabled:!0},{value:"-",label:"Extra",disabled:!0},{label:"Form",value:"application/vnd.google-apps.form",defaultValue:!1},{label:"Drawing",value:"application/vnd.google-apps.drawing",defaultValue:!1}]}],runtimeExecution:function(e,t,i,n){return function(e,t,i,n,l){var a,o=new XMLHttpRequest,r=g.$M(x.mergeAsDataInContext(e.attr("model"))),s="root",d=x.mergeAsTextInContext(e.attr("foldername"),i),p=u();return v(r.conditions,function(e,t){t.sourceParam===D&&(s=x.mergeAsTextInContext(t.value,i)||s)}),a={parents:[{id:s}],title:d,mimeType:l},o.open("POST","https://www.googleapis.com/drive/v2/files",!0),o.setRequestHeader("Authorization","Bearer "+n.authentication.responseBody.access_token),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(a)),o.onreadystatechange=function(e){e&&(e.target.response&&200===e.target.status?p.resolve(e):400<=e.target.status&&p.reject(e))},p.promise()}(e,0,i,n,e.attr("mimetype"))}}}},queryEntityMetadata:d.queryEntityMetadataStatic,getEntityList:d.getEntityListStatic,getActions:d.getActionsStatic,extendedProperties:{composer:{unomittableFields:!0,hasEntityOptions:!0},hasDefaultSearch:!0,canServerSearch:!0,hasGlobalSearchEntities:!0,"x-metadata":{__skuid_fieldDefaults:{File:{displaytype:y,writeable:!1,filterable:!1}},File:{idFields:["id"],nameField:"title",label:"File",labelPlural:"Files",fields:[{id:"id",inlineHelpText:"The ID of the file.","x-alwaysinclude":!0},{id:"etag",inlineHelpText:"ETag of the file."},{id:"title",inlineHelpText:"The title of the file. Used to identify file or folder name."},{id:"mimeType",inlineHelpText:"The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type."},{id:"downloadlink",label:"Download/Preview Link",inlineHelpText:"For google native file types, will link to the file in google drive, otherwise the link will be a download link."},{id:"description",inlineHelpText:"A short description of the file."},{id:"createdDate",displaytype:h,inlineHelpText:"Create time for this file (formatted RFC 3339 timestamp)."},{id:"modifiedDate",displaytype:h,inlineHelpText:"Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set."},{id:"modifiedByMeDate",displaytype:h,inlineHelpText:"Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date."},{id:"fileExtension",inlineHelpText:"The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files."},{id:"md5Checksum",inlineHelpText:"An MD5 checksum for the content of this file. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files."},{id:"fileSize",displaytype:m,inlineHelpText:"The size of the file in bytes. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files."},{id:"sharedWithMeDate",label:"Shared With Me Date",displaytype:h,inlineHelpText:"Time at which this file was shared with the user (formatted RFC 3339 timestamp)."},{id:"originalFilename",inlineHelpText:"The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Drive."},{id:"ownerNames",displaytype:f,inlineHelpText:"Name(s) of the owner(s) of this file."},{id:"lastModifyingUserName",synonym:"lastModifyingUser.displayName",inlineHelpText:"Name of the last user to modify this file."},{id:"editable",displaytype:c,inlineHelpText:"Whether the file can be edited by the current user."},{id:"writersCanShare",displaytype:c,inlineHelpText:"Whether writers can share the document with other users."},{id:"thumbnailLink",inlineHelpText:"A short-lived link to the file's thumbnail. Typically lasts on the order of hours."},{id:"lastViewedByMeDate",displaytype:h,inlineHelpText:"Last time this file was viewed by the user (formatted RFC 3339 timestamp)."},{id:"webViewLink",inlineHelpText:"A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting."},{id:"iconLink",inlineHelpText:"A link to the file's icon."},{id:"shared",displaytype:c,inlineHelpText:"Whether the file has been shared."},{id:"lastModifyingUserName",inlineHelpText:"A plain text displayable name for this user."},{id:"lastModifyingUserPicture",synonym:"lastModifyingUser.picture.url",inlineHelpText:"A URL that points to a profile picture of this user."},{id:"copyable",displaytype:c,inlineHelpText:"Whether the file can be copied by the current user."},{id:"properties",displaytype:f,inlineHelpText:"The list of properties."},{id:"lastModifyingUserEmail",synonym:"lastModifyingUser.email",inlineHelpText:"The email address of the user. This field is returned only if the last modifying user is an owner of the file, the requesting user is an owner or can modify the file, or if the last modifying user's email address is visible."},{id:"markedViewedByMeDate",displaytype:h,inlineHelpText:"Deprecated."},{id:"version",displaytype:m,inlineHelpText:"A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user."},{id:"folderColorRgb",inlineHelpText:"Folder color as an RGB hex string if the file is a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette."},{id:"fullFileExtension",inlineHelpText:'The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Drive; it is not populated for Google Docs or shortcut files.'},{id:"starred",synonym:"labels.starred",inlineHelpText:"Whether or not the file has been starred."},{id:"haveViewed",synonym:"labels.viewed",inlineHelpText:"Whether or not the current user has viewed the file."},{id:"userPermissionRole",synonym:"userPermission.role",inlineHelpText:"The current user's permission role for the file."},{id:"ownedByMe",displaytype:c,inlineHelpText:"Whether the file is owned by the current user."},{id:"canComment",displaytype:c,inlineHelpText:"Whether the current user can comment on the file."},{id:"shareable",displaytype:c,inlineHelpText:"Whether the file's sharing settings can be modified by the current user."},{id:"spaces",displaytype:f,inlineHelpText:"The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'."},{id:"canReadRevisions",displaytype:c,inlineHelpText:"Whether the current user has read access to the Revisions resource of the file."}],methods:{query:{pathToContent:"items",url:"/files",verb:b,contentType:"application/json"},delete:{url:"/files/{{id}}",verb:T,successIf:"requestsucceeds"},search:{url:"/files",verb:b,contentType:"application/json",pathToContent:"items"}},defaultConditions:[{sourcetype:"param",sourceparam:D,name:D,label:D,state:"filterableon",value:"root"},{sourcetype:"param",sourceparam:S,name:"title",label:S,state:"filterableon",value:""},{sourcetype:"param",sourceparam:C,name:"mimetype",label:C,state:"filterableon",value:""}]}}}})}});