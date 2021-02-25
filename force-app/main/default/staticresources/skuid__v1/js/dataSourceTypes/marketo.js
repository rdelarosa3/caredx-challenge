!function(a){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=362)}({362:function(e,t,a){"use strict";var u,c,s,p,r,i,l,n,d,o,y,m,b,f,T,g,v,h,P,I,S,C,E,k,A,M,j,q,L,D,x,F,N,O,w,R,V,_,B,H,U,G;u=skuid,c=u.$,s=u.utils,p=s.parseAsJSONIfString,r=u.constants,i=r.DISPLAY_TYPES,l=i.DATETIME,n=i.BOOLEAN,d=i.ID,o=i.STRING,y="Lead",m="Person",b="Campaign",f="Program",T="Folder",g="StaticList",v="Channel",h="ActivityType",P="Activity",I={},S=u.dataSource,C=S.utils,E=s.grab,k=C.REST,A="Marketo",M=r.MIME_TYPES.JSON,j=i.NUMBER,q={Person:1,Campaign:2,Program:3,Folder:4,StaticList:5,Channel:6,ActivityType:7,Activity:8,Tag:9},L="List",D="ProgramId",x="Id",F="filterValues",N="filterType",O="query",w=function(e,t){var a={sourcetype:"param",state:"filterablerequired",type:"fieldvalue",required:!0,value:"",name:e};if(a.name=e,a.label=e===L?"List Id":e===D?"Program Id":e===x?"Marketo GUID":e,t){var r={};c.each(t.fields,function(e,t){r[t.id]=t});var i=[],l={};c.each(t.searchableFields,function(e,t){c.each(t,function(e,t){l[t]||(l[t]=!0,i.push({value:t,label:r[t].label}))})}),a.picklistEntries=i}return a.sourceparam=a.name,a},R=function(e){e=e.toUpperCase();var t={SCORE:j,FLOAT:j};return t[e]?t[e]:e},V=function(t,r,a,i){return!1!==i&&I[r]?C.deferrable(I[r]):t.authenticate().then(function(){var e={url:r=-1===r.indexOf("rest")?s.combineUrls(s.combineUrls(t.serviceUrl||"","/rest/v1/"),r):s.combineUrls(t.serviceUrl||"",r)};return a?(i=!1,e.method="POST",e.data=a,e.body=a,e.contentType=M):e.method="GET",t.makeRequest(t.createHTTPRequest(e))}).then(function(e){if(!(e=p(e))||!e.body)throw"Failed to connect to Marketo";var t,a=p(e.body);if(!a.success)throw"Bad request made to Marketo";if(a.result?t=a.result:a.nextPageToken&&(t=a.nextPageToken),!t)throw"No result in response";return!1!==i&&(I[r]=t),t})},_=function(e){return{Custom:"customobjects.json",Person:"leads/describe.json",Lead:"leads/describe.json"}[e]||"customobjects/"+e+"/describe.json"},B=function(e){var a=e.idField;return{fields:c.map(e.fields,function(e){var t={displaytype:R(e.dataType),label:e.displayName,id:e.name,editable:!1!==e.updateable,createable:!1!==e.createable};return e.name===a&&(t.editable=!1,t.createable=!1,t.omittable=!1),t}),idFields:[a],searchableFields:e.searchableFields}},H=function(e){var t=e.type,a=e.request,r=e.model,i=e.row,l=a.data,n={},d=C.getModelMergeConditions(r,e),o=a.url,s=d[L],u=d[D],p=d.Id;if(t===O)if(u)o+="leads/programs/"+u+".json";else if(s)o+="list/"+s+"/leads.json";else{if(!p)throw"Must query persons using a non-empty condition value";o+="leads.json?filterType=id&filterValues="+decodeURIComponent(p)}else"delete"===t?(o+="leads/delete.json",n={input:[{id:i.id}]}):(o+="leads.json",n={input:[c.extend({},l)]},"update"===t?(n.input[0].id=i.id,n.lookupField="id",n.action="updateOnly"):n.action="createOrUpdate");n&&(a.data=n),a.url=o},U=function(e){e.model.dbType="Asset",e.request.url="/rest/asset/v1/"},G=function(e){e.model.dbType="Lead",e.request.url="/rest/v1/"},S.getDataSourceType(A)||new S.core.RESTDataSourceTypeBase({name:A,coerceRequest:function(e){var t=e.model,a=t.fields,r=e.type,i=e.request,l=this.getEntityMetadataCacheKey(t);switch(l){case y:case m:G(e),H(e);break;case b:G(e),function(e){var t=e.model,a=e.request,r=a.url,i=e.type,l=C.getModelMergeConditions(t,e);i===O&&(0===l.campaignId.length?a.url=r+"campaigns.json":(r+=e.method.url,a.url=r))}(e);break;case g:G(e),function(e){var t=e.request,a=t.url;e.type===O&&(a+=e.method.url),t.url=a}(e);break;case h:G(e),function(e){var t=e.request,a=t.url;e.type===O&&(a+=e.method.url),t.url=a}(e);break;case P:G(e),function(e){var t=e.model,a=e.request,r=a.url,i=e.type,l=C.getModelMergeConditions(t,e),n=l.personIds,d=l.activityTypeIds,o=t.tokenVal;r=i===O&&t.paginationToken?r.concat(e.method.url):r.concat(e.method.url,"leadIds=",n,"&activityTypeIds=",d,"&nextPageToken=",o),a.url=r}(e);break;case f:U(e),function(e){var t=e.model,a=e.request,r=a.url,i=e.type,l=C.getModelMergeConditions(t,e);if(i===O)if(0===l.tagType.length&&0===l.tagValue.length)a.url=r+"programs.json";else{if(0===l.tagType.length||0===l.tagValue.length)throw"Model "+t.label+' had an error: both tagType and tagValue conditions must be present to query Program by Tag. Without either, query will default to "all" Programs';r+=e.method.url,a.url=r}if("insert"===i){r+=e.method.url,a.url=r;var n=a.data.value,d=a.data.channel,o=a.data.description,s=a.data.folderType,u=a.data.name,p=a.data.type,c={id:n,type:s};a.data="name="+u+"&folder="+JSON.stringify(c)+"&type="+p+"&channel="+d,o&&(a.data=a.data.concat("&description="+o)),a.contentType="application/x-www-form-urlencoded"}"update"===i&&(r+=e.method.url,a.url=r)}(e);break;case T:U(e),function(e){var t=e.model,a=e.request,r=a.url,i=e.type,l=C.getModelMergeConditions(t,e);i===O&&(l.maxDepth?r+=e.method.url:r+="folders.json",a.url=r)}(e);break;case v:U(e),function(e){var t=e.model,a=e.request,r=a.url,i=e.type,l=C.getModelMergeConditions(t,e);i===O&&(l.channelName?r+=e.method.url:r+="channels.json",a.url=r)}(e);break;case"Tag":U(e),function(e){var t=e.request,a=t.url;e.type===O&&(a+=e.method.url),t.url=a}(e);break;default:!function(e,t){var a=e.type,r=e.request,i=e.model,l=C.getModelMergeConditions(i,e),n=r.url,d=l[N],o=l[F];if(n+="customobjects/"+t+".json",a===O){if(!d||!o)throw"Must have a valid filterType and filterValue condition set";o=p(o),c.isArray(o)&&(o=o.join(",")),n+="?"+N+"="+d+"&"+F+"="+o}r.url=n}(e,l)}r===O&&(-1===i.url.indexOf("?")?i.url+="?":i.url+="&",i.url+="fields="+c.map(a,function(e){if(e.id&&!e.uiOnly)return e.id}).join(","),t.recordsLimit||(t.recordsLimit=150),"Lead"===e.model.dbType?t.recordsLimit&&(0|t.recordsLimit)+""==t.recordsLimit+""&&("Activity"===e.model.objectName?i.url+="&batchSize="+(0|t.recordsLimit):i.url+="&batchSize="+(1+(0|t.recordsLimit))):"Asset"===e.model.dbType&&t.recordsLimit&&(0|t.recordsLimit)+""==t.recordsLimit+""&&(i.url+="&maxReturn="+(1+(0|t.recordsLimit))))},createActions:function(){return{"add-lead-to-static-list":{label:"Add a Person to a Static List",builderProps:[{label:"Person ID",id:"personId",type:"string"},{label:"List ID",id:"listId",type:"string"}],runtimeExecution:function(e,t,a,r){var i=s.mergeAsTextInContext(e.attr("personId"),a),l=s.mergeAsTextInContext(e.attr("listId"),a),n=r.serviceUrl+"rest/v1/lists/"+l+"/leads.json",d={input:[{id:i}]},o=r.createHTTPRequest({url:n,method:"POST",headers:{"Content-Type":"application/json"},body:d});return r.makeRequest(o)}},"remove-lead-from-static-list":{label:"Remove a Person from Static List",builderProps:[{label:"Person ID",id:"personId",type:"string"},{label:"List ID",id:"listId",type:"string"}],runtimeExecution:function(e,t,a,r){var i=s.mergeAsTextInContext(e.attr("personId"),a),l=s.mergeAsTextInContext(e.attr("listId"),a),n=r.serviceUrl+"rest/v1/lists/"+l+"/leads.json",d={input:[{id:i}]},o=r.createHTTPRequest({url:n,method:"DELETE",headers:{"Content-Type":"application/json"},body:d});return r.makeRequest(o)}}}},applyPaginationToken:function(e,t){"Lead"===t.dbType?e.url+="&nextPageToken="+t.value:"Asset"===t.dbType&&(e.url+="&offset="+t.value)},postSaveHook:function(e,t){var a,r,i=t.model,l=C.getModelMergeConditions(i,t)[L],n=this.getEntityMetadataCacheKey(i),d="insert"===t.type,o=p(e.body).id;if(n===m&&l&&d&&o||n===y&&l&&d&&o)return a=o,r="lists/"+l+"/leads.json",V(i.dataSource,r,{input:[{id:a}]},!1)},getPaginationToken:function(e,t,a,r){var i=p(e&&e.body),l={};if("Lead"===r.dbType&&"Activity"!=a.objectName){if(i&&i.success&&i.nextPageToken&&i.result&&i.result.length===1+(0|r.recordsLimit))return l={dbType:r.dbType,value:i.nextPageToken},i.result.pop(),l}else if("Asset"===r.dbType&&i.result&&i.result.length===1+(0|r.recordsLimit))return l={dbType:r.dbType,value:r.offset-1},i.result.pop(),l},parseSuccessfulLoadResponse:function(e,t,a,r){var i=p(e.body),l=t.pathToContent,n=l?s.getObjectProperty(i,l):i;if(n=p(n),"Asset"===r.dbType&&n&&(r.offset?r.offset+=n.length:r.offset=n.length),i&&i.errors&&i.errors.length)throw"Model "+r.label+' had an error: "'+i.errors[0].message+'"';return C.safeEach(n,function(e,t){C.applySynonym(t,a)}),n},parseSuccessfulSaveResponse:function(e,t){if(e.body.errors&&e.body.errors[0])throw"Model "+t.model.label+' had an error: "'+e.body.errors[0].message+'"';var a=p(e.body);if(a.success){var r=a.result[0];if("skipped"!==r.status)return{id:a.result[0].id};var i=r.reasons[0];throw"code: "+i.code+", "+i.message}},getEntityList:function(e){var t=e.dataSource,a=c.map(q,function(e,t){return{value:t,label:t}});return V(t,_("Custom")).then(function(e){return a=a.concat(c.map(e,function(e){return{value:e.name,label:e.name}}))})},preLoadHook:function(e){var t,a,r,i,l=e.model,n=this.getEntityMetadataCacheKey(l);if(n===m||n===y){if(a=(t=C.getModelMergeConditions(l,e))[L],r=t[D],!(i=a||r))return;if((0|i)+""==i+"")return;var d=a?L:D,o=(a?"lists.json?name=":"/rest/asset/v1/program/byName.json?name=")+i;return V(l.dataSource,o).then(function(a){if(!a.length)throw"Bad list condition passed for model: "+l.id;c.each(l.conditions,function(e,t){if(t.sourceParam===d)return t.value=a[0].id+"",!1})})}if(n===P&&!l.paginationToken){i=C.getModelMergeConditions(l,e);var s="activities/pagingtoken.json?sinceDatetime="+function(t,e){try{var a=u.time.resolveDateKeyword(decodeURIComponent(e.dateTime))[0].toISOString()}catch(e){throw"Date must be of the format: LAST_N_WEEKS:10, for the model: "+t.id+" - Please reference the DataSource's documentation for more info on valid options."}return a}(l,i);return V(l.dataSource,s).then(function(e){if(!(l.tokenVal=e).length)throw"Bad list condition passed for model: "+l.id})}},getExtendedModelProperties:function(e,t,a){var r=u.builder.core,i={basic:[],advanced:[],customTabs:[]};return e!==m&&e!==y||i.basic.push({id:"fetchby",type:"picklist",label:"Fetch Persons By",picklistEntries:[{label:"Static List",value:L},{label:"Program",value:D},{label:"Id",value:x}],defaultValue:L,helptext:"Persons can be fetched by Id, Static List, or Program",onChange:function(e){k.replaceConditions([w(e)],t),a.save().refresh().rebuildProps()}},r.getModelLimitProperty()),i},queryEntityMetadata:function(e,t){var i=this.getEntityMetadataCacheKey(e);if(!i)return c.Deferred().reject("No Entity was selected for this Model.").promise();var a=function(e){var t={};switch(e){case b:t.idFields=["id"],t.label=e,t.labelPlural="Campaigns",t.fields=[{id:"id",label:"Campaign ID",displaytype:x},{id:"name"},{id:"type"},{id:"programName"},{id:"programId",displaytype:x},{id:"workspaceName"},{id:"createdAt",displaytype:l},{id:"updatedAt",displaytype:l},{id:"active",displaytype:n}],t.methods={query:{url:"campaigns/{{campaignId}}.json",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"}},t.defaultConditions=[{sourcetype:"param",sourceparam:"campaignId",name:"campaignId",label:"Campaign ID",state:"filterableon",type:"fieldvalue",required:!0,value:""}];break;case f:t.idFields=["id"],t.label=e,t.labelPlural="Programs",t.fields=[{id:"id",label:"Program ID",displaytype:x},{id:"name",createable:!0,editable:!0},{id:"description",createable:!0,editable:!0},{id:"createdAt",displaytype:l},{id:"updatedAt",displaytype:l},{id:"url"},{id:"type",createable:!0},{id:"channel",createable:!0},{id:"sfdcId",label:"SFDC ID",displaytype:x},{id:"sfdcName",label:"SFDC Name"},{id:"status"},{id:"workspace"},{id:"folderType",synonym:"folder.type",label:"Folder Type",createable:!0},{id:"value",synonym:"folder.value",label:"Folder Id",createable:!0,displaytype:x},{id:"folderName",synonym:"folder.folderName",label:"Folder Name",createable:!0}],t.methods={query:{url:"program/byTag.json?tagType={{tagType}}&tagValue={{tagValue}}",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"},update:{url:"program/{{id}}.json",verb:r.HTTP_VERBS.POST,contentType:"application/x-www-form-urlencoded"},insert:{url:"programs.json",verb:r.HTTP_VERBS.POST,contentType:M}},t.defaultConditions=[{sourcetype:"param",sourceparam:"tagType",name:"tagType",label:"Tag Type",state:"filterableon",type:"fieldvalue",required:!0,value:""},{sourcetype:"param",sourceparam:"tagValue",name:"tagValue",label:"Tag Value",state:"filterableon",type:"fieldvalue",required:!0,value:""},{sourcetype:"param",sourceparam:"id",name:"id",label:"Program Id",state:"filterableon",type:"fieldvalue",required:!0,value:""}];break;case T:t.idFields=["id"],t.label=e,t.labelPlural="Folders",t.fields=[{id:"accessZoneId",displaytype:x},{id:"createdAt",displaytype:l},{id:"description"},{id:"metaFolderId",label:"Folder Id (Meta)",synonym:"folderId.id",displaytype:x},{id:"metaFolderType",label:"Folder Type (Meta)",synonym:"folderId.type"},{id:"folderType"},{id:"id",label:"Folder Id",displaytype:x},{id:"isArchive",displaytype:n},{id:"isSystem",displaytype:n},{id:"name"},{id:"parentId",synonym:"parent.id",label:"Parent Id",displaytype:x},{id:"parentType",synonym:"parent.type",label:"Parent Type"},{id:"updatedAt",displaytype:l},{id:"url"},{id:"workspace"}],t.methods={query:{url:"folders.json?maxDepth={{maxDepth}}",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"}},t.defaultConditions=[{sourcetype:"param",sourceparam:"maxDepth",name:"maxDepth",label:"Max Folder Depth",state:"filterableon",type:"fieldvalue",required:!1}];break;case g:t.idFields=["id"],t.label=e,t.labelPlural="Lists",t.fields=[{id:"id",label:"List ID",displaytype:x},{id:"name"},{id:"description"},{id:"programName"},{id:"workspaceName"},{id:"createdAt",displaytype:l},{id:"updatedAt",displaytype:l}],t.methods={query:{url:"lists.json",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"}},t.defaultConditions=null;break;case v:t.idFields=["id"],t.label=e,t.labelPlural="Channels",t.fields=[{id:"applicableProgramType"},{id:"createdAt",displaytype:l},{id:"id",label:"Channel ID"},{id:"name"},{id:"updatedAt",displaytype:l}],t.methods={query:{url:"channel/byName.json?Name={{channelName}}",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"}},t.defaultConditions=[{sourcetype:"param",sourceparam:"channelName",name:"channelName",label:"Channel Name",state:"filterableon",type:"fieldvalue",required:!1}];break;case h:t.idFields=["id"],t.label=e,t.labelPlural="Activity Types",t.fields=[{id:"id",label:"Activity Type ID"},{id:"name"},{id:"apiName"},{id:"description"},{id:"primaryAttributeName",synonym:"primaryAttribute.name"},{id:"primaryAttributeDatatype",synonym:"primaryAttribute.dataType"}],t.methods={query:{url:"activities/types.json",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"}},t.defaultConditions=null;break;case P:t.idFields=["id"],t.label=e,t.labelPlural="Activities",t.fields=[{id:"id",label:"Activity ID",displaytype:x},{id:"activityDate",displaytype:l},{id:"activityTypeId",displaytype:x},{id:"campaignId",displaytype:x},{id:"leadId",label:"personId",displaytype:x},{id:"marketoGUID",displaytype:x},{id:"primaryAttributeValueId",displaytype:x},{id:"primaryAttributeValue"}],t.methods={query:{url:"activities.json?",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"}},t.defaultConditions=[{sourcetype:"param",sourceparam:"personIds",name:"personIds",label:"Person ID",state:"filterableon",type:"fieldvalue",required:!0,value:""},{sourcetype:"param",sourceparam:"activityTypeIds",name:"activityTypeIds",label:"Activity Type ID",state:"filterableon",type:"fieldvalue",required:!0,value:""},{sourcetype:"param",sourceparam:"dateTime",name:"dateTime",label:"Date Time",state:"filterableon",type:"fieldvalue",required:!0,value:"LAST_N_WEEKS:10"}];break;case"Tag":t.idFields=["id"],t.label=e,t.labelPlural="Tags",t.fields=[{id:"applicableProgramTypes"},{id:"required",displaytype:n},{id:"tagType"}],t.methods={query:{url:"tagTypes.json",verb:r.HTTP_VERBS.GET,contentType:M,pathToContent:"result"}},t.defaultConditions=null;break;default:return t=null}return t.fields.forEach(function(e){e.label||(e.label=C.makeLabelFromId(e.id)),e.displaytype||(e.displaytype=o),e.editable||(e.editable=!1),e.creatable||(e.creatable=!1),e.accessible||(e.accessible=!0)}),t}(i);return a?C.deferrable(a):V(t.dataSource,_(i)).then(function(e){var t;if(i===m||i===y)t=function(e){return{fields:c.map(e,function(e){if(e.rest){var t={displaytype:R(e.dataType),label:e.displayName,id:e.rest.name,editable:!1===e.rest.readOnly,createable:!1===e.rest.readOnly,accessible:!0};return"id"===e.rest.name&&(t.omittable=!1,t.editable=!1,t.createable=!1,t.displaytype=d),t}}),idFields:["id"]}}(e);else if(q[i])t=B(e);else{if(!e.length)throw"Marketo did not recognize the entity: "+i;t=B(e[0])}var a={query:{url:"",verb:"GET",contentType:M,pathToContent:"result"}};i!==m&&i!==y||(a.insert={url:"",verb:"POST",contentType:M},a.update={url:"",verb:"POST",contentType:M},a.delete={url:"",verb:"POST",successIf:"requestsucceeds"});var r=c.extend({label:i,labelPlural:i,methods:a},t);return i===m||i===y?r.defaultConditions=[w(L)]:E(t,"searchableFields","length")&&(r.defaultConditions=[w(F),w(N,t)]),r})},getActions:C.getActionsStatic,extendedProperties:{composer:{unomittableFields:!0,hasEntityOptions:!0,rebuildPropsOnSelectEntity:!0}}})}});