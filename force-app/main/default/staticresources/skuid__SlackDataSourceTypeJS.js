!function(e){var t={};function a(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=51)}({51:function(e,t,a){"use strict";!function(e){var t=e.$,a=e.dataSource,l=a.utils,i=e.constants,s=i.DISPLAY_TYPES,n=i.MIME_TYPES,r=i.HTTP_VERBS,d=i.DATASOURCE,o=e.utils,p=o.getObjectProperty,u=e.ui.getRenderer,c=e.ui.getFieldRenderer,b=n.JSON,h=d.SEARCH_CONDITION,m=s.ARRAY,y=s.BOOLEAN,f=s.DATETIME,T=s.INTEGER,x=s.OBJECT,g=s.PICKLIST,v=s.STRING,H=s.TEXTAREA,I=s.IMAGE,_=r.POST,C=function(e){var a=[{id:"type",inlineHelpText:"What type of message is it.",createable:!1,editable:!1},{id:"ts",label:"Time Sent",displaytype:f,inlineHelpText:"When the message was sent.",createable:!1,editable:!1,omittable:!1},{id:"user",inlineHelpText:"The user ID of the user who sent the message.",idField:!0,createable:!1,editable:!1},{id:"username",inlineHelpText:"The username of the user who sent the message.",createable:!1,editable:!1,omittable:!0,defer:!0,path:"user.name"},{id:"userRealName",label:"User's Real Name",inlineHelpText:"The full name of the user who sent the message.",createable:!1,editable:!1,omittable:!0,defer:!0,path:"user.real_name"},{id:"text",label:"Text",displaytype:H,inlineHelpText:"The body of the message.",omittable:!1}];return e&&(a=t.merge(a,e)),a},M=function(e,t){return t.users.filter(function(t){return t.name===e||t.id===e})[0]},S=function(e,a){return t.merge(a.channels,a.groups,a.ims).filter(function(t){return t.name===e||t.id===e})[0]},k=function(e,t){e.options.url=e.row[e.id],c(I).read(e,t)},P=function(e,t){var a=e.row;t?t=new Date(1e3*t).toLocaleString():(t=(new Date).toLocaleString(),a.message&&a.message.ts&&(t=new Date(1e3*a.message.ts).toLocaleString())),c(f).readonly(e,t)},F=function(e,t){var a=e.options&&e.options.addfocusbox;e.options.formatLinks=!0,e.element.html('<div class="nx-fieldtext">'+A(e,t)+(a?'<div class="focusbox" tabindex="0"/>':"")+"</div>")},A=function(e,t){for(var a,l,i=/<([^>]+)>/g,s=e.model.context,n=s&&s.team.id,r=s&&s.team.domain,d=e.options.formatLinks;null!==(a=i.exec(t));){var p,u=a[1],c=a.input,b=l?l.indexOf(a[0]):a.index,h=l?l.replace(a[0],""):c.replace(a[0],""),m=u.split("|");if(1===m.length){if("@"===u.charAt(0))if(s){var y=M(u.replace("@",""),s),f="@"+y.name;p=d?'<a href="slack://user?team='+n+"&id="+y.id+'">'+f+"</a>":f,l=h.substr(0,b)+p+h.substr(b)}else l=h.substr(0,b)+u+h.substr(b);else if("http"===u.substring(0,4))p=d?'<a href="'+m[0]+'" target=_blank>'+m[0]+"</a>":a[0],l=h.substr(0,b)+p+h.substr(b);else if("#"===u.charAt(0))if(s){var T=S(u.replace("#",""),s),x="#"+T.name;p=d?'<a href="slack://channel?team='+n+"&id="+T.id+'">'+x+"</a>":x,l=h.substr(0,b)+p+h.substr(b)}else l=h.substr(0,b)+u+h.substr(b)}else if(2===m.length)if("@"===u.charAt(0))s?(p=d?'<a href="slack://user?team='+n+"&id="+m[0].replace("@","")+'">@'+m[1]+"</a>":"@"+m[1],l=h.substr(0,b)+p+h.substr(b)):l=h.substr(0,b)+"@"+m[1]+h.substr(b);else if("http"===u.substring(0,4)){var g=m[0],v=m[1];if(u.indexOf(r+".slack.com")>-1&&s){var H=g.slice(0,g.lastIndexOf("/")),I=g.slice(g.lastIndexOf("/")).replace("/",""),_=H.slice(H.lastIndexOf("/")).replace("/","");v="Untitled"===v?I:v,p=d?'<a href="slack://file?team='+n+"&id="+_+'">['+v+"]</a>":a[0]}else p=d?'<a href="'+g+'" target=_blank>'+v+"</a>":a[0];l=h.substr(0,b)+p+h.substr(b)}else"#"===u.charAt(0)&&(s?(p=d?'<a href="slack://channel?team='+n+"&id="+m[0].replace("#","")+'">#'+m[1]+"</a>":"#"+m[1],l=h.substr(0,b)+p+h.substr(b)):l=h.substr(0,b)+"#"+m[1]+h.substr(b))}return l=l||t,d?o.nl2br(U(R(D(w(l))))):l},w=function(e){for(var a=/[ .,!?|]/g,l=[],i=[],s=[],n=e.length,r=0,d=0,o=0;o<n;o++)"_"===e[o]&&l.push(o);return t.each(l,function(t,l){0===r&&(s=[]),0!==l&&l!==n-1&&null===e[l-1].match(a)&&null===e[l+1].match(a)||(s.push(l),r++),2===r&&(r=0,i.push(s))}),t.each(i,function(t,a){e=e.substr(0,a[0]+d)+"<i>"+e.substr(a[0]+d+1),d+=2,e=e.substr(0,a[1]+d)+"</i>"+e.substr(a[1]+d+1),d+=3}),e},D=function(e){for(var a=/[ .,!?]/g,l=[],i=[],s=[],n=e.length,r=0,d=0,o=0;o<n;o++)"*"===e[o]&&l.push(o);return t.each(l,function(t,l){0===r&&(s=[]),0!==l&&l!==n-1&&null===e[l-1].match(a)&&null===e[l+1].match(a)||(s.push(l),r++),2===r&&(r=0,i.push(s))}),t.each(i,function(t,a){e=e.substr(0,a[0]+d)+"<strong>"+e.substr(a[0]+d+1),d+=7,e=e.substr(0,a[1]+d)+"</strong>"+e.substr(a[1]+d+1),d+=8}),e},R=function(e){for(var a=/[ .,!?|]/g,l=[],i=[],s=[],n=e.length,r=0,d=0,o=0;o<n;o++)"`"===e[o]&&"`"!==e[o-1]&&"`"!==e[o+1]&&l.push(o);return t.each(l,function(t,l){0===r&&(s=[]),0!==l&&l!==n-1&&null===e[l-1].match(a)&&null===e[l+1].match(a)||(s.push(l),r++),2===r&&(r=0,i.push(s))}),t.each(i,function(t,a){e=e.substr(0,a[0]+d)+"<code>"+e.substr(a[0]+d+1),d+=5,e=e.substr(0,a[1]+d)+"</code>"+e.substr(a[1]+d+1),d+=6}),e},U=function(e){for(var a=/[ .,!?|]/g,l=[],i=[],s=[],n=e.length,r=0,d=0,o=0;o<n;o++)"~"===e[o]&&l.push(o);return t.each(l,function(t,l){0===r&&(s=[]),0!==l&&l!==n-1&&null===e[l-1].match(a)&&null===e[l+1].match(a)||(s.push(l),r++),2===r&&(r=0,i.push(s))}),t.each(i,function(t,a){e=e.substr(0,a[0]+d)+'<div style="text-decoration: line-through;">'+e.substr(a[0]+d+1),d+=43,e=e.substr(0,a[1]+d)+"</div>"+e.substr(a[1]+d+1),d+=5}),e};a.getDataSourceType("Slack")||new a.core.RESTDataSourceTypeBase({name:"Slack",coerceRequest:function(e){var i=e.model,s=e.type,n=p(i,"extensions.rest.entityName"),r=(i.dataSource?i.dataSource:a.getDataSource(i.dataSourceName)).authentication.responseBody||"";l.applyAccessTokenAsParam(e,r,"token"),"query"===s&&function(e,t){var a=e.model,i=l.getModelMergeConditions(a,e),s=p(a,"extensions.rest.entityName"),n=["ChannelMessage","GroupMessage","IMMessage"];"File"===s&&(e.request.url+="&channel="+i.channel+"&types="+i.types+"&user="+i.user),i[h]?n.indexOf(s)>-1&&(e.request.url="/search.messages?token="+t.access_token+"&query="+encodeURI(i[h])+"&count=500",e.method.pathToContent="messages.matches"):n.indexOf(s)>-1&&(e.method.pathToContent="messages")}(e,r),"insert"===s&&function(e){var t=e.model,a=l.getModelMergeConditions(t,e),i=p(t,"extensions.rest.entityName");["ChannelMessage","GroupMessage","IMMessage"].indexOf(i)>-1&&"true"===a.asBot&&(e.request.url=e.request.url.replace("meMessage","postMessage"))}(e),"insert"!==s&&"update"!==s||t.inArray(n,["ChannelMessage","GroupMessage","IMMessage"])>-1&&(e.row.text=encodeURIComponent(e.row.text.replace("#","%23")))},coerceSaveResultObject:function(e,t){var a=t.model.context;if(e.record.hasOwnProperty("text")){var l=decodeURIComponent(e.record.text);e.record.text=a?function(e,t){for(var a,l,i=/#([^ .,!?|]+)/g;null!==(a=i.exec(e));){var s=a[1],n=a.input,r=l?l.indexOf(a[0]):a.index,d=l?l.replace(a[0],""):n.replace(a[0],""),o=S(s,t),p="<#"+o.id+"|"+o.name+">";l=d.substr(0,r)+p+d.substr(r)}return l||e}(function(e,t){for(var a,l,i=/@([^ .,!?|]+)/g;null!==(a=i.exec(e));){var s=a[1],n=a.input,r=l?l.indexOf(a[0]):a.index,d=l?l.replace(a[0],""):n.replace(a[0],""),o=M(s,t),p="<@"+o.id+"|"+o.name+">";l=d.substr(0,r)+p+d.substr(r)}return l||e}(l,a),a):l}e.record.type="message"},onDataSourceChange:function(e){e.attr("deferfieldrendering",!0)},getUploadMethods:function(){return{"Direct Upload":{label:"Direct Upload",canRunPostUploadSnippet:!0,needsModelInContext:!0,builderProps:[{id:"title",type:"text",label:"File's Title",defaultValue:"",helptext:"You can give your files a title in Slack.  Just to clarify, this is different from the File Name"},{id:"initial_comment",type:"text",label:"Initial Comment",defaultValue:"",helptext:"A comment you would like to leave on the file."},{id:"additional_channels",type:"text",label:"Channels to Send",defaultValue:"",helptext:"A comma separated list of channel IDs that the file will be sent to."}],upload:function(e,a,i,s,n){var r=encodeURIComponent(o.renameFileWhileKeepingExtension(e.name,o.mergeAsTextInContext(i.filename,i))),d=i.model,p=d.dataSource,u=l.getModelMergeConditions(d).channel,c=new FormData,b=p.serviceUrl,h=i.xmlDef,m=b+"/files.upload?token="+p.authentication.responseBody.access_token+"&filename="+r;h.attr("additional_channels")&&(m+="&channels="+u+","+h.attr("additional_channels")),h.attr("initial_comment")&&(m+="&initial_comment="+h.attr("initial_comment")),h.attr("title")&&(m+="&title="+h.attr("title")),m=o.mergeAsTextInContext(m,i),c.append("file",e),s({fileName:i.fileName||e.name}),t.ajax({url:m,data:c,type:"POST",contentType:!1,processData:!1,success:function(){n()},error:function(e){n({message:function(e){if(e&&e.body){var t=e.body;if(t&&t.error&&t.error.message)return t.error.message}else if(o.isString(e))return e;return"Had an error"}(e)})}})}}}},fieldRenderers:function(){return{TEXTAREA:{read:F,readonly:F,edit:function(e,t){e.options.formatLinks=!1,e.element.append(u(H).edit({displayRows:e.options.displayRows,onChange:function(t){e.model.updateRow(e.row,e.id,t,e._getUpdateRowOptions())},value:A(e,t)}))}},DATETIME:{read:P,readonly:P,edit:function(e,t){c(f).edit(e,t)}},IMAGE:{read:k,readonly:k,edit:k}}},getEntityList:l.getEntityListStatic,queryEntityMetadata:l.queryEntityMetadataStatic,extendedProperties:{composer:{unomittableFields:!0},hasDefaultSearch:!0,canServerSearch:!0,hasGlobalSearchEntities:!0,"x-metadata":{__skuid_fieldDefaults:{"*":{displaytype:v,editable:!0,createable:!0,accessible:!0}},Channel:{idFields:["id"],nameField:"name",label:"Channel",labelPlural:"Channels",fields:[{id:"id",inlineHelpText:"Identifier of the channel.",createable:!1,editable:!1},{id:"name",inlineHelpText:"Name of the channel."},{id:"created",displaytype:f,inlineHelpText:"Date and time the channel was created.",createable:!1,editable:!1},{id:"creator",label:"CreatorId",displaytype:v,inlineHelpText:"Creator of the channel.",createable:!1,editable:!1,omittable:!0},{id:"creatorUserName",label:"Creator's Username",displaytype:v,inlineHelpText:"Creator of the channel.",createable:!1,editable:!1,omittable:!0,defer:!0,path:"user.name"},{id:"creatorName",label:"Creator's Real Name",displaytype:v,inlineHelpText:"The full name of the user who created the channel.",createable:!1,editable:!1,omittable:!0,defer:!0,path:"user.real_name"},{id:"is_archived",displaytype:y,inlineHelpText:"Whether the channel is archived.",createable:!1,editable:!1},{id:"is_general",displaytype:y,inlineHelpText:"Whether the channel is general.",editable:!1},{id:"is_member",displaytype:y,inlineHelpText:"Whether the current user is a member of the channel.",editable:!1},{id:"is_starred",displaytype:y,inlineHelpText:"Whether the channel is starred.",editable:!1},{id:"members",displaytype:m,inlineHelpText:"A list of all the members of the channel.",editable:!1},{id:"topic",label:"Topic",displaytype:v,inlineHelpText:"The topic of the channel.",editable:!1,synonym:"topic.value"},{id:"purpose",label:"Purpose",displaytype:v,inlineHelpText:"The purpose of the channel.",editable:!1,synonym:"purpose.value"},{id:"last_read",inlineHelpText:"Last message in the channel the user has read.",editable:!1},{id:"unread_count",displaytype:T,inlineHelpText:"Number of messages the user has not read, yet.",editable:!1},{id:"unread_count_display",displaytype:y,inlineHelpText:"Number of messages the user has not read, yet.",editable:!1}],methods:{query:{url:"/channels.list",verb:_,contentType:b,pathToContent:"channels",additionalRequests:[{url:"/users.info?user={{creator}}",verb:_,contentType:b,pathToContent:"user",fields:["creatorUserName","creatorName"]}]},insert:{url:"/channels.create?name={{name}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok"},update:{url:"/channels.rename?channel={{id}}&name={{name}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok"},delete:{url:"/channels.archive?channel={{id}}",verb:_,contentType:b,successIf:"responsefieldistrue",successField:"ok"}}},ChannelMessage:{label:"Channel Message",labelPlural:"Channel Messages",noIdField:!0,fields:C(),methods:{query:{url:"/channels.history?channel={{channel}}",verb:_,contentType:b,pathToContent:"messages",additionalRequests:[{url:"/users.info?user={{user}}",verb:_,contentType:b,pathToContent:"user",fields:["username","userRealName"]}]},insert:{url:"/chat.meMessage?channel={{channel}}&text={{text}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok",pathToContent:"message"},update:{url:"/chat.update?ts={{ts}}&channel={{channel}}&text={{text}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok",pathToContent:"message"},delete:{url:"/chat.delete?ts={{ts}}&channel={{channel}}",verb:_,contentType:b,successIf:"responsefieldistrue",successField:"ok"}},defaultConditions:[{sourcetype:"param",sourceparam:"channel",name:"channel",label:"Channel ID",state:"filterablerequired",type:"fieldvalue",required:!0,value:""},{sourcetype:"param",sourceparam:"asBot",name:"bot",label:"Send as Bot",state:"filterableon",type:"boolean",required:!0,value:!0}]},File:{label:"File",labelPlural:"Files",fields:[{id:"id",label:"ID",displaytype:v,inlineHelpText:"The File's ID",createable:!1,editable:!1},{id:"created",label:"Created Date",displaytype:f,inlineHelpText:"The date the file was created",createable:!1,editable:!1},{id:"timestamp",label:"Timestamp",displaytype:f,inlineHelpText:"The timestamp",createable:!1,editable:!1},{id:"name",label:"File Name",displaytype:v,inlineHelpText:"The name of the file.",createable:!1,editable:!1},{id:"title",label:"File Title",displaytype:v,inlineHelpText:"The title of the file.",createable:!1,editable:!1},{id:"mimetype",label:"Mime Type",displaytype:v,inlineHelpText:"The file's mime type.",createable:!1,editable:!1},{id:"filetype",label:"File Type",displaytype:v,inlineHelpText:"The file's file type.",createable:!1,editable:!1},{id:"pretty_type",label:"Pretty Type",displaytype:v,inlineHelpText:"The file's pretty type.",createable:!1,editable:!1},{id:"user",label:"User",displaytype:v,inlineHelpText:"The user who uploaded the file.",createable:!1,editable:!1},{id:"editable",label:"Editable",displaytype:y,inlineHelpText:"Whether the file is editable.",createable:!1,editable:!1},{id:"size",label:"Size",displaytype:T,inlineHelpText:"Size of the file.",createable:!1,editable:!1},{id:"mode",label:"Mode",displaytype:v,inlineHelpText:"The file's mode.",createable:!1,editable:!1},{id:"is_external",label:"Is External",displaytype:y,inlineHelpText:"Whether the file is from an external source.",createable:!1,editable:!1},{id:"external_type",label:"External Type",displaytype:v,inlineHelpText:"What type of external source.",createable:!1,editable:!1},{id:"is_public",label:"Is Public",displaytype:y,inlineHelpText:"Whether the file is public.",createable:!1,editable:!1},{id:"public_url_shared",label:"Public URL Shared",displaytype:y,inlineHelpText:"Whether the file's public URL is shared.",createable:!1,editable:!1},{id:"display_as_bot",label:"Display As Bot",displaytype:y,inlineHelpText:"Whether the file is displayed from a bot.",createable:!1,editable:!1},{id:"username",label:"Username",displaytype:v,inlineHelpText:"Username of the person who sent the file.",createable:!1,editable:!1},{id:"url_private",label:"URL Private",displaytype:v,inlineHelpText:"The private URL.",createable:!1,editable:!1},{id:"url_private_download",label:"URL Private Download",displaytype:v,inlineHelpText:"The download URL.",createable:!1,editable:!1},{id:"permalink",label:"Permalink",displaytype:v,inlineHelpText:"The permalink.",createable:!1,editable:!1},{id:"permalink_public",label:"Public Permalink",displaytype:v,inlineHelpText:"The public permalink.",createable:!1,editable:!1},{id:"preview",label:"Preview",displaytype:v,inlineHelpText:"The preview.",createable:!1,editable:!1},{id:"updated",label:"Updated",displaytype:f,inlineHelpText:"Last time it was updated.",createable:!1,editable:!1},{id:"state",label:"State",displaytype:v,inlineHelpText:"The state the file is in.",createable:!1,editable:!1},{id:"comments_count",label:"Comments Count",displaytype:T,inlineHelpText:"The number of comments on the file.",createable:!1,editable:!1},{id:"thumb_360",label:"Thumbnail",displaytype:I,inlineHelpText:"The thumbnail image (if applicable)",createable:!1,editable:!1},{id:"thumb_960",label:"Thumbnail (Large)",displaytype:I,inlineHelpText:"The thumbnail image (if applicable)",creatable:!1,editable:!1}],methods:{query:{url:"/files.list",verb:_,contentType:b,pathToContent:"files"},delete:{url:"/files.delete?file={{id}}",verb:_,contentType:b,successIf:"responsefieldistrue",successField:"ok"}},defaultConditions:[{sourcetype:"param",sourceparam:"channel",name:"channel",label:"Channel ID",state:"filterablerequired",type:"fieldvalue",value:""},{sourcetype:"param",sourceparam:"user",name:"user",label:"User ID",state:"filterablerequired",type:"fieldvalue",value:""},{sourcetype:"param",sourceparam:"types",name:"mimetype",label:"File Type",state:"filterablerequired",type:"fieldvalue",value:"all"}]},Group:{idFields:["id"],nameField:"name",label:"Group",labelPlural:"Groups",fields:[{id:"id",inlineHelpText:"Identifier of the group (private channel).",createable:!1,editable:!1,omittable:!1},{id:"name",inlineHelpText:"Name of the group (private channel)."},{id:"is_group",displaytype:y,inlineHelpText:"Whether or not the group is a group(?).",editable:!1},{id:"created",displaytype:T,inlineHelpText:"When the private channel was created.",createable:!1,editable:!1},{id:"creator",label:"CreatorId",displaytype:v,inlineHelpText:"Creator of the channel.",createable:!1,editable:!1,omittable:!0},{id:"creatorUserName",label:"Creator's Username",displaytype:v,inlineHelpText:"Creator of the channel.",createable:!1,editable:!1,omittable:!0,defer:!0,path:"user.name"},{id:"creatorName",label:"Creator's Real Name",displaytype:v,inlineHelpText:"The full name of the user who created the channel.",createable:!1,editable:!1,omittable:!0,defer:!0,path:"user.real_name"},{id:"is_archived",displaytype:y,inlineHelpText:"Whether or not the private channel is archived."},{id:"is_mpim",label:"Is Multi-Party IM",displaytype:y,inlineHelpText:"Whether or not the channel is a multi-party IM."},{id:"members",displaytype:g,inlineHelpText:"The users in the private channel.."},{id:"topic",label:"Topic",displaytype:v,inlineHelpText:"The topic of the channel.",synonym:"topic.value"},{id:"purpose",label:"Purpose",displaytype:v,inlineHelpText:"The purpose of the channel.",synonym:"purpose.value"}],methods:{query:{url:"/groups.list",verb:_,contentType:b,pathToContent:"groups",additionalRequests:[{url:"/users.info?user={{creator}}",verb:_,contentType:b,pathToContent:"user",fields:["creatorUserName","creatorName"]}]},insert:{url:"/groups.create?name={{name}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok"},update:{url:"/groups.rename?channel={{id}}&name={{name}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok"},delete:{url:"/groups.archive?channel={{id}}",verb:_,contentType:b,successIf:"responsefieldistrue",successField:"ok"}}},GroupMessage:{label:"Group Message",labelPlural:"Group Messages",noIdField:!0,fields:C(),methods:{query:{url:"/groups.history?channel={{group}}",verb:_,contentType:b,pathToContent:"messages",additionalRequests:[{id:"users",url:"/users.info?user={{user}}",verb:_,contentType:b,pathToContent:"user",fields:["username","userRealName"]}]},insert:{url:"/chat.meMessage?channel={{group}}&text={{text}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok",pathToContent:"message"},update:{url:"/chat.update?ts={{ts}}&channel={{group}}&text={{text}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok",pathToContent:"message"},delete:{url:"/chat.delete?ts={{ts}}&channel={{group}}",verb:_,contentType:b,successIf:"responsefieldistrue",successField:"ok"}},defaultConditions:[{sourcetype:"param",sourceparam:"group",name:"channel",label:"Group ID",state:"filterablerequired",type:"fieldvalue",required:!0,value:""},{sourcetype:"param",sourceparam:"asBot",name:"bot",label:"Send as Bot",state:"filterableon",type:"boolean",required:!0,value:!0}]},InstantMessage:{idFields:["id"],label:"IM",labelPlural:"IMs",fields:[{id:"id",inlineHelpText:"Identifier of the IM.",createable:!1,editable:!1},{id:"user",inlineHelpText:"The user in the IM.",editable:!1},{id:"created",displaytype:T,inlineHelpText:"When the IM was created.",createable:!1,editable:!1},{id:"is_im",label:"Is IM",displaytype:y,inlineHelpText:"Whether or not this is an IM.",editable:!1},{id:"is_org_shared",displaytype:y,inlineHelpText:"Is from a shared organization.",createable:!1,editable:!1},{id:"is_user_deleted",displaytype:y,inlineHelpText:"Whether or not the user in the IM is deleted.",createable:!1,editable:!1}],methods:{query:{url:"/im.list",verb:_,contentType:b,pathToContent:"ims"}}},IMMessage:{label:"IM Message",labelPlural:"IM Messages",noIdField:!0,fields:C(),methods:{query:{url:"/im.history?channel={{im}}",verb:_,contentType:b,pathToContent:"messages",additionalRequests:[{id:"users",url:"/users.info?user={{user}}",verb:_,contentType:b,pathToContent:"user",fields:["username","userRealName"]}]},insert:{url:"/chat.meMessage?channel={{im}}&text={{text}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok",pathToContent:"message"},update:{url:"/chat.update?ts={{ts}}&channel={{im}}&text={{text}}",verb:_,contentType:b,receiveDataAs:"recordinbody",successIf:"responsefieldistrue",successField:"ok",pathToContent:"message"},delete:{url:"/chat.delete?ts={{ts}}&channel={{im}}",verb:_,contentType:b,successIf:"responsefieldistrue",successField:"ok"}},defaultConditions:[{sourcetype:"param",sourceparam:"im",name:"channel",label:"IM ID",state:"filterablerequired",type:"fieldvalue",required:!0,value:""},{sourcetype:"param",sourceparam:"asBot",name:"bot",label:"Send as Bot",state:"filterableon",type:"boolean",required:!0,value:!0}]},User:{idFields:["id"],nameField:"name",label:"User",labelPlural:"Users",fields:[{id:"id",inlineHelpText:"Identifier of the user.",createable:!1,editable:!1},{id:"team_id",inlineHelpText:"Identifier of the team.",createable:!1,editable:!1},{id:"name",inlineHelpText:"Username of the user.",editable:!1},{id:"deleted",displaytype:y,inlineHelpText:"Whether or not the user is deleted.",createable:!1,editable:!1},{id:"status",inlineHelpText:"Status of the user.",createable:!1,editable:!1},{id:"color",inlineHelpText:"Color of the user (Hexkey without #).",editable:!1},{id:"real_name",inlineHelpText:"Name of the user.",editable:!1},{id:"tz",label:"Time Zone",inlineHelpText:"The time zone the user is in.",editable:!1},{id:"tz_label",label:"Time Zone Label",inlineHelpText:"Time Zone label.",editable:!1},{id:"tz_offset",label:"Time Zone Offset",displaytype:T,inlineHelpText:"Time Zone Offset.",createable:!1,editable:!1},{id:"profile",displaytype:x,inlineHelpText:"Profile information about the user.",editable:!1},{id:"is_admin",displaytype:y,inlineHelpText:"Whether or not the user is an admin.",editable:!1},{id:"is_owner",displaytype:y,inlineHelpText:"Whether or not the user is an owner.",editable:!1},{id:"is_primary_owner",displaytype:y,inlineHelpText:"Whether or not the user is a primary owner.",editable:!1},{id:"is_restricted",displaytype:y,inlineHelpText:"Whether or not the user is restricted.",editable:!1},{id:"is_ultra_restricted",displaytype:y,inlineHelpText:"Whether or not the user is ultra restricted.",editable:!1},{id:"is_bot",displaytype:y,inlineHelpText:"Whether or not the user is a bot.",editable:!1},{id:"first_name",label:"First Name",displaytype:v,inlineHelpText:"First name of the user.",createable:!1,editable:!1,synonym:"profile.first_name"},{id:"last_name",label:"Last Name",displaytype:v,inlineHelpText:"Last name of the user.",createable:!1,editable:!1,synonym:"profile.last_name"},{id:"small_avatar",label:"Profile Picture (Small)",displaytype:I,inlineHelpText:"User's Avatar",createable:!1,editable:!1,synonym:"profile.image_192"},{id:"medium_avatar",label:"Profile Picture (Medium)",displaytype:I,inlineHelpText:"User's Avatar",createable:!1,editable:!1,synonym:"profile.image_512"},{id:"large_avatar",label:"Profile Picture (Large)",displaytype:I,inlineHelpText:"User's Avatar",createable:!1,editable:!1,synonym:"profile.image_1024"},{id:"presence",label:"Presence",displaytype:v,inlineHelpText:"User's Current Presence",createable:!1,editable:!1},{id:"email",label:"Email Address",displaytype:v,inlineHelpText:"User's Email Address",createable:!1,editable:!1,synonym:"profile.email"}],methods:{query:{url:"/users.list?presence=true",verb:_,contentType:b,pathToContent:"members"}}},Message:{label:"Message",labelPlural:"Messages",hidden:!0,noIdField:!0,fields:C([{id:"team",inlineHelpText:"The team id.",createable:!1,editable:!1}]),methods:{query:{url:"/search.messages?query={{search}}",verb:_,contentType:b,pathToContent:"messages.matches"},search:{url:"/search.messages?query={{search}}",verb:_,contentType:b,pathToContent:"messages.matches"}}}}}})}(skuid)}});