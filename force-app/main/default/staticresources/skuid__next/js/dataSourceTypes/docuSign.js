skuid.runtime.registerApi("v2","dataSourceTypes/docuSign",function(e){var t=function(e){var t={};function a(n){if(t[n]){return t[n].exports}var i=t[n]={i:n,l:false,exports:{}};e[n].call(i.exports,i,i.exports,a);i.l=true;return i.exports}a.m=e;a.c=t;a.d=function(e,t,n){if(!a.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};a.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};a.t=function(e,t){if(t&1)e=a(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);a.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n};a.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};a.d(t,"a",t);return t};a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};a.p="";return a(a.s=715)}({715:function(t,a){(function(e){let t=e.utils,a=e.dataSource,n=a.utils,i=e.constants,r=i.DISPLAY_TYPES,o=i.HTTP_VERBS,l=t.getObjectProperty,d="DocuSign",u=r.STRING,s=r.EMAIL,c=r.BOOLEAN,p=r.DATETIME,m=r.ID,y=r.TEXTAREA,b=r.INTEGER,f=i.MIME_TYPES.JSON,I=o.GET,v=o.POST,g=function e(t){let a=0,n,i;if(t.length===0)return a;for(n=0;n<t.length;n++){i=t.charCodeAt(n);a=(a<<5)-a+i;a|=0}return Math.abs(a)},T=function e(t){if(!t||t.indexOf(".")<0)return;t=t.split(".");t.pop();t=t.join("");return t},S=function e(t){let a=t.model,n=l(a,"extensions.rest.entityName");if(n==="Signer"){t.request.data.recipientId=g(t.request.data.email.toString());t.request.data={signers:[t.request.data]}}};if(a.getDataSourceType(d))return;new a.core.RESTDataSourceTypeBase({name:d,coerceRequest:function e(t){let a=t.model,i=t.type,r=a.getDataSource(),o=r.authentication.responseBody||"";n.applyAccessTokenAsParam(t,o,"token");if(i==="insert")S(t,o)},createActions:function e(){return{"download-item":{label:"Download Envelope/Document Row",runtimeExecution:function e(a,i,r){let o=r.model,l=o.dataSource.authentication.responseBody.access_token,d=n.extrapolateRowFromContext(r),u=o.dataSource,s=d&&T(d.name),c=u.serviceUrl,p=n.getModelMergeConditions(o,r),m=p.accountId,y=d&&d.uri||d.documentsUri+"/combined",b=c+"/v2/accounts/"+m+y,f=u.createHTTPRequest({url:b,method:"GET",headers:{Authorization:"Bearer "+l,"Content-Type":"application/pdf","Content-Transfer-Encoding":"base64"}});if(!d)return n.rejectable("Need a row in context");return u.makeRequest(f).then(function(e){t.downloadBase64StringAsFile(e.body,(s||"preview")+".pdf")})}},"add-recipient-custom-email":{label:"Add Signer to Envelope with Custom Email",builderProps:[{label:"Subject Line",id:"subjectline",type:"string"},{label:"Email Body",id:"emailbody",type:"string"}],runtimeExecution:function e(a,i,r){let o=r.model,l=o.dataSource,d=o.dataSource.authentication.responseBody.access_token,u=n.extrapolateRowFromContext(r),s=n.getModelMergeConditions(o,r),c=s.envelopeId,p=s.accountId,m=t.mergeAsTextInContext(a.attr("subjectline"),r),y=t.mergeAsTextInContext(a.attr("emailbody"),r),b=l.serviceUrl,f=b+"/v2/accounts/"+p+"/envelopes/"+c+"/recipients",I=u&&{signers:[{name:u.name,email:u.email,recipientId:g(u.email),emailNotification:{emailSubject:m,emailBody:y}}]},v=l.createHTTPRequest({url:f,method:"POST",headers:{Authorization:"Bearer "+d,"Content-Type":"application/json"},body:I});if(!u)return n.rejectable("Need row in context");return l.makeRequest(v)}}}},getEntityList:n.getEntityListStatic,getActions:n.getActionsStatic,queryEntityMetadata:n.queryEntityMetadataStatic,extendedProperties:{composer:{unomittableFields:true},hasDefaultSearch:true,canServerSearch:true,hasGlobalSearchEntities:true,"x-metadata":{__skuid_fieldDefaults:{"*":{displaytype:u,editable:false,createable:false,accessible:true}},LoginAccounts:{idFields:["accountId"],nameField:"name",label:"Login Accounts Information",labelPlural:"Login Accounts",fields:[{id:"name",label:"Unformatted Name"},{id:"accountId",label:"Account ID"},{id:"created",label:"Account Created On",displaytype:p},{id:"baseUrl",label:"Base URL"},{id:"isDefault",displaytype:c},{id:"userName",label:"User Name"},{id:"userId",label:"User ID"},{id:"email",displaytype:s},{id:"siteDescription"}],methods:{query:{url:"/v2/login_information",verb:I,contentType:f,pathToContent:"loginAccounts"}}},Envelope:{idFields:["envelopeId"],nameField:"name",label:"Envelope",labelPlural:"Envelopes",fields:[{id:"status",label:"Envelope Status"},{id:"documentsUri"},{id:"recipientsUri"},{id:"attachmentsUri"},{id:"envelopeUri"},{id:"envelopeId",displaytype:m},{id:"customFieldsUri"},{id:"notificationUri"},{id:"statusChangedDateTime",label:"Status Changed On",displaytype:p},{id:"documentsCombinedUri"},{id:"certificateUri"},{id:"templatesUri"}],methods:{query:{url:"/v2/accounts/{{accountId}}/envelopes/status?from_date=1950-01-01",verb:I,contentType:f,pathToContent:"envelopes"}},defaultConditions:[{sourcetype:"param",sourceparam:"accountId",name:"accountId",label:"Account ID",state:"filterableon",type:"fieldvalue",required:true,value:""}]},FolderItem:{idFields:["envelopeId"],nameField:"subject",label:"Folder Item",labelPlural:"Folder Items",fields:[{id:"ownerName"},{id:"envelopeId",label:"Envelope ID"},{id:"envelopeUri"},{id:"status"},{id:"senderName"},{id:"senderEmail",displaytype:s},{id:"createdDateTime",displaytype:p},{id:"sendDateTime",displaytype:p},{id:"subject",label:"Subject"},{id:"is21CFRPart11",label:"Is21CFRPart11"},{id:"isSignatureProviderEnvelope",displaytype:c}],methods:{query:{url:"/v2/accounts/{{accountId}}/folders/{{folderId}}",verb:I,contentType:f,pathToContent:"folderItems"}},defaultConditions:[{sourcetype:"param",sourceparam:"accountId",name:"accountId",label:"Account ID",state:"filterableon",type:"fieldvalue",required:true,value:""},{sourcetype:"param",sourceparam:"folderId",name:"folderId",label:"Folder ID",state:"filterableon",type:"fieldvalue",required:true,value:""}]},Document:{idFields:["documentId"],nameField:"name",label:"Document",labelPlural:"Documents",fields:[{id:"documentId",label:"Document ID",displaytype:m},{id:"name"},{id:"type"},{id:"uri"},{id:"order"},{id:"pages"},{id:"display"},{id:"includeInDownload",displaytype:c},{id:"signerMustAwknowledge",displaytype:c}],methods:{query:{url:"/v2/accounts/{{accountId}}/envelopes/{{envelopeId}}/documents",verb:I,contentType:f,pathToContent:"envelopeDocuments"}},defaultConditions:[{sourcetype:"param",sourceparam:"accountId",name:"accountId",label:"Account ID",state:"filterableon",type:"fieldvalue",required:true,value:""},{sourcetype:"param",sourceparam:"envelopeId",name:"envelopeId",label:"Envelope ID",state:"filterableon",type:"fieldvalue",required:true,value:""}]},Folder:{idFields:["folderID"],nameField:"name",label:"Folder",labelPlural:"Folders",fields:[{id:"ownerUserName",label:"Folder Owner's User name"},{id:"ownerEmail",displaytype:s},{id:"ownerUserId",label:"Owner User ID",displaytype:m},{id:"type"},{id:"name"},{id:"uri"},{id:"folderId",label:"Folder ID",displaytype:m}],methods:{query:{url:"/v2/accounts/{{accountId}}/folders",verb:I,contentType:f,pathToContent:"folders"}},defaultConditions:[{sourcetype:"param",sourceparam:"accountId",name:"accountId",label:"Account ID",state:"filterableon",type:"fieldvalue",required:true,value:""}]},Signer:{idFields:["userId"],nameField:"name",label:"Signer",labelPlural:"Signers",fields:[{id:"creationReason"},{id:"isBulkRecipient",displaytype:c},{id:"recipientSuppliesTab"},{id:"name",createable:true},{id:"email",displaytype:s,createable:true},{id:"recipientId",label:"Recipient ID",displaytype:m},{id:"recipientIdGuid",label:"GUID",displaytype:m},{id:"requiredIdLookup",label:"Required Lookedup"},{id:"userId",label:"User ID",displaytype:m},{id:"routingOrder",displaytype:b,createable:true},{id:"note",displaytype:y,createable:true},{id:"status"},{id:"declinedReason"},{id:"deliveryMethod"}],methods:{query:{url:"/v2/accounts/{{accountId}}/envelopes/{{envelopeId}}/recipients",verb:I,contentType:f,pathToContent:"signers"},insert:{url:"/v2/accounts/{{accountId}}/envelopes/{{envelopeId}}/recipients",verb:v,contentType:"application/json",pathToContent:"signers"}},defaultConditions:[{sourcetype:"param",sourceparam:"envelopeId",name:"envelopeId",label:"Envelope ID",state:"filterableon",type:"fieldvalue",required:true,value:""},{sourcetype:"param",sourceparam:"accountId",name:"accountId",label:"Account ID",state:"filterableon",type:"fieldvalue",required:true,value:""}]}}}})})(e)}});return t});