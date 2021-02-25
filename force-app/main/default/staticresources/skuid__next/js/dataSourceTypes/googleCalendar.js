skuid.runtime.registerApi("v2","dataSourceTypes/googleCalendar",function(e){var t=function(e){var t={};function i(a){if(t[a]){return t[a].exports}var n=t[a]={i:a,l:false,exports:{}};e[a].call(n.exports,n,n.exports,i);n.l=true;return n.exports}i.m=e;i.c=t;i.d=function(e,t,a){if(!i.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:a})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(e,t){if(t&1)e=i(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var a=Object.create(null);i.r(a);Object.defineProperty(a,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";return i(i.s=716)}({716:function(t,i){(function(e){let t=e.$,i=t.each,a=e.dataSource,n=a.utils,l=e.utils,r=e.constants,s=r.DISPLAY_TYPES,o=r.MIME_TYPES,d=r.HTTP_VERBS,c=r.DATASOURCE,u=l.grab,p="Event",f=l.getObjectProperty,m=l.setObjectProperty,h="GoogleCalendar",y="x-metadata",v=o.JSON,T=c.SEARCH_CONDITION,b=s.BOOLEAN,g=s.DATE,D=s.DATETIME,x=s.NUMBER,S=s.PICKLIST,E=s.STRING,I="timeMin",w="timeMax",A=d.GET,H=d.PATCH,C=d.POST,O=d.DELETE,F="send-invite",q=function e(t,a){let n={};i(t,function(e,t){let i=u(a,e,"synonym")||e;n[i]=t});return n},R=function e(t,a){let n=Z,l=n.getEntityMetadataCacheKey(a),r=n.prop(y)[l],s;if(!r)return t;i(r.fields,function(e,i){if(i.id===t){s=i;return false}});if(!s||!s.synonym)return t;return s.synonym},P=function e(t,a,n){let l=t.getEntityFieldsMap(n);let r=a.fieldsMap;if(!r)return"";if(n===p){r=q(r,l)}let s={};i(r,function(e,t){if(t&&t.uiOnly)return;if(f(s,e))return true;m(s,e,0)});let o=function e(t){let n=[];i(t,function(t,i){let l=R(t,a);if(i)n.push(l+"("+e(i)+")");else n.push(l)});return n.join(",")};return o(s)},z=function e(t){let i=new Date(t);i.setHours(23,59,59,999);return i.toISOString()},M=function e(t,i){if(t.startDateTime&&!t.startDate&&!i.startDateTime){i.startDateTime=t.startDateTime}else if(!i.startDateTime&&!i.startDate){i.startDate=t.startDate}if(t.endDateTime&&!t.endDate&&!i.endDateTime){i.endDateTime=t.endDateTime}else if(!i.endDateTime&&!i.endDate){i.endDate=t.endDate}},N=function t(i){let a=i.model;let n=e.model.getCustomPropertyValue(a,F);let l=i.parameters;if(n){l["sendNotifications"]=true}};if(a.getDataSourceType(h))return;let Z=new a.core.RESTDataSourceTypeBase({name:h,getExtendedModelProperties:function t(i,a,n){if(i!==p){return{basic:[]}}let l=e.builder.core.createDSTSpecificProp;return{basic:[l({id:F,label:"Send invite on event creation",type:"boolean",defaultValue:"true",helptext:"Determines if new events being created will send invitations to attendees"},Z,n)]}},coerceRequest:function i(a){let l=this,r=a.type,s=a.model,o=a.row,d=l.getEntityMetadataCacheKey(s),c=l.prop(y)[d],u=c.methods[r],f=u.pathToContent?u.pathToContent+"({0})":"{0}",m=a.request.data,h=a.parameters||(a.parameters={}),v=r==="insert",b=r==="update",g=r==="query",D=n.getModelMergeConditions(s,a,{urlEncode:false}),x,S;if(g){h.fields=f.replace("{0}",P(l,s,d));if(d===p){x=e.time.resolveDateKeyword(D[I]);if(t.isArray(x)&&x.length){x=x[0].toISOString()}else{x=D[I]}S=e.time.resolveDateKeyword(D[w]);if(t.isArray(S)&&S.length>1){S=S[1].toISOString()}else{S=D[w]}h.timeMin=x;h.timeMax=S;h.singleEvents="true";h.orderBy="startTime";if(D[T]){h.q=D[T]}}}else if((v||b)&&d===p){M(o,m);n.revertSynonym(m,s)}if(v&&d===p){N(a)}},parseSuccessfulLoadResponse:function e(t,a,l,r){let s=this.getEntityMetadataCacheKey(r);let o=n.parseSuccessfulLoadResponseWithSynonyms(t,a,l,r);if(s!==p)return o;i(o,function(e,t){if(t.startDate&&!t.startDateTime){let e;try{e=new Date(t.startDate).getTime()}catch(e){e}if(e){t.startDateTime=new Date(e).toISOString()}}if(t.endDate&&!t.endDateTime){let e;try{e=z(t.endDate)}catch(e){e}if(e){t.endDateTime=e}}});return o},queryEntityMetadata:n.queryEntityMetadataStatic,getEntityList:n.getEntityListStatic,processErrorObject:function e(t){return u(t,"error","message")},extendedProperties:{composer:{unomittableFields:true,hasEntityOptions:true},hasDefaultSearch:true,canServerSearch:true,hasGlobalSearchEntities:true,"x-metadata":{__skuid_fieldDefaults:{"*":{displaytype:E,editable:true,createable:true,filterable:false,accessible:true}},Calendar:{idFields:["id"],nameField:"summary",label:"Calendar",labelPlural:"Calendars",fields:[{id:"id",inlineHelpText:"Identifier of the calendar.",writable:false,omittable:false},{id:"summary",label:"Title",inlineHelpText:"Title of the calendar.",required:true,omittable:false},{id:"description",inlineHelpText:"Description of the calendar."},{id:"summaryOverride",inlineHelpText:"Your personal summary for the calendar (only visible to you)"},{id:"etag",inlineHelpText:"ETag of the resource.",writable:false},{id:"location",inlineHelpText:"Geographic location of the calendar as free-form text."},{id:"timeZone",inlineHelpText:'The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)'},{id:"backgroundColor",writable:false},{id:"foregroundColor",writable:false}],methods:{query:{url:"/users/me/calendarList",verb:A,contentType:v,pathToContent:"items"},insert:{url:"/calendars",verb:C,contentType:v,receiveDataAs:"recordinbody",successIf:"responsefieldispresent",successField:"id"},update:{url:"/calendars/{{id}}",verb:H,contentType:v,receiveDataAs:"recordinbody",successIf:"responsefieldispresent",successField:"id"},delete:{url:"/calendars/{{id}}",verb:O,successIf:"requestsucceeds"}}},Event:{idFields:["id"],nameField:"summary",label:"Event",labelPlural:"Events",fields:[{id:"id",inlineHelpText:"Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:  characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 the length of the ID must be between 5 and 1024 characters the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.  If you do not specify an ID, it will be automatically generated by the server.  Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.",omittable:false},{id:"summary",inlineHelpText:"Title of the event.",omittable:false},{id:"colorId",inlineHelpText:"The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional."},{id:"created",displaytype:D,inlineHelpText:"Creation time of the event (as a RFC3339 timestamp). Read-only.",writable:false},{id:"creatorDisplayName",synonym:"creator.displayName",inlineHelpText:"The creator's name, if available.",writable:false},{id:"creatorEmail",synonym:"creator.email",inlineHelpText:"The creator's email address, if available.",writable:false},{id:"creatorSelf",synonym:"creator.self",displaytype:b,inlineHelpText:"Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.",writable:false},{id:"description",inlineHelpText:"Description of the event. Optional."},{id:"endDate",synonym:"end.date",displaytype:g,inlineHelpText:'The date, in the format "yyyy-mm-dd", if this is an all-day event.'},{id:"endDateTime",synonym:"end.dateTime",displaytype:D,inlineHelpText:"The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone."},{id:"endTimeZone",synonym:"end.timeZone",inlineHelpText:'The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.'},{id:"endTimeUnspecified",displaytype:b,inlineHelpText:"Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.",writable:false},{id:"etag",inlineHelpText:"ETag of the resource.",writable:false},{id:"guestsCanInviteOthers",displaytype:b},{id:"status",displaytype:S,picklistEntries:[{label:"Confirmed",value:"confirmed"},{label:"Tentative",value:"tentative"},{label:"Cancelled",value:"cancelled"}],inlineHelpText:'Status of the event. Optional. Possible values are:  "confirmed" - The event is confirmed. This is the default status. "tentative" - The event is tentatively confirmed. "cancelled" - The event is cancelled. '},{id:"guestsCanSeeOtherGuests",displaytype:b},{id:"hangoutLink",inlineHelpText:"An absolute link to the Google+ hangout associated with this event. Read-only.",writable:false},{id:"htmlLink",inlineHelpText:"An absolute link to this event in the Google Calendar Web UI. Read-only.",writable:false},{id:"iCalUID",label:"iCal UID",inlineHelpText:"Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.  Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.",writable:false},{id:"location",inlineHelpText:"Geographic location of the event as free-form text. Optional."},{id:"locked",displaytype:b,inlineHelpText:'Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.',writable:false},{id:"organizerDisplayName",synonym:"organizer.displayName",inlineHelpText:"The organizer's name, if available."},{id:"organizerEmail",synonym:"organizer.email",inlineHelpText:"The organizer's email address, if available. It must be a valid email address as per RFC5322."},{id:"organizerSelf",synonym:"organizer.self",displaytype:b,inlineHelpText:"Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.",writable:false},{id:"originalStartTimeDate",synonym:"originalStartTime.date",displaytype:g,inlineHelpText:'The date, in the format "yyyy-mm-dd", if this is an all-day event.'},{id:"originalStartTimeDateTime",synonym:"originalStartTime.dateTime",displaytype:D,inlineHelpText:"The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone."},{id:"originalStartTimeTimeZone",synonym:"originalStartTime.timeZone",inlineHelpText:'The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.'},{id:"startDate",synonym:"start.date",displaytype:g,inlineHelpText:'The date, in the format "yyyy-mm-dd", if this is an all-day event.'},{id:"startDateTime",synonym:"start.dateTime",displaytype:D,inlineHelpText:"The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone."},{id:"startTimeZone",synonym:"start.timeZone",inlineHelpText:'The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.'},{id:"transparency",displaytype:S,inlineHelpText:'Whether the event blocks time on the calendar. Optional. Possible values are:  "opaque" - The event blocks time on the calendar. This is the default value. "transparent" - The event does not block time on the calendar. ',options:[{label:"Opaque",value:"opaque"},{label:"Transparent",value:"transparent"}]},{id:"updated",displaytype:D,inlineHelpText:"Last modification time of the event (as a RFC3339 timestamp). Read-only.",writable:false},{id:"attendees",label:"Attendees",makeFlatList:{delimiter:";",space:" \n",fieldPath:"email"},inlineHelpText:"Semicolon seperated list of emails of those invited"},{id:"attendeesDetails",label:"Attendees Details",synonym:"attendees",writable:false,rel:"attendeesDetails",ref:"Attendee",displaytype:"ARRAY",type:"array",referenceTo:[{objectName:"Attendee"}],relationshipName:"attendeesDetails",childSObject:"Attendee"},{id:"visibility",displaytype:S,inlineHelpText:'Visibility of the event. Optional. Possible values are:  "default" - Uses the default visibility for events on the calendar. This is the default value. "public" - The event is public and event details are visible to all readers of the calendar. "private" - The event is private and only event attendees may view event details. "confidential" - The event is private. This value is provided for compatibility reasons. ',options:[{label:"Default",value:"default"},{label:"Public",value:"public"},{label:"Private",value:"private"},{label:"Confidential",value:"confidential"}]}],methods:{query:{url:"/calendars/{{calendarId}}/events",verb:A,contentType:v,pathToContent:"items"},insert:{url:"/calendars/{{calendarId}}/events",verb:C,contentType:v,receiveDataAs:"recordinbody",successIf:"responsefieldispresent",successField:"id"},update:{url:"/calendars/{{calendarId}}/events/{{id}}",verb:H,contentType:v,receiveDataAs:"recordinbody",successIf:"responsefieldispresent",successField:"id"},delete:{url:"/calendars/{{calendarId}}/events/{{id}}",verb:O,successIf:"requestsucceeds"},search:{url:"/calendars/primary/events?q={{search}}",verb:A,contentType:v,pathToContent:"items"}},defaultConditions:[{sourcetype:"param",sourceparam:"calendarId",name:"calendarId",label:"Calendar ID",state:"filterablerequired",type:"fieldvalue",required:true,value:"primary"},{sourcetype:"param",sourceparam:I,name:I,label:"Date Range Start (timeMin)",state:"filterableon",type:"fieldvalue",required:true,value:"LAST_N_WEEKS:5"},{sourcetype:"param",sourceparam:w,name:w,label:"Date Range End (timeMax)",state:"filterableon",type:"fieldvalue",required:true,value:"NEXT_N_WEEKS:5"}]},Attendee:{queryable:false,label:"Attendee",idFields:["id"],nameField:"summary",labelPlural:"Attendees",fields:[{id:"additionalGuests",displaytype:x},{id:"comment"},{id:"displayName"},{id:"email"},{id:"id"},{id:"optional"},{id:"organizer"},{id:"resource"},{id:"responseStatus",displaytype:S,picklistEntries:[{value:"accepted",label:"Accepted"},{value:"declined",label:"Declined"},{value:"needsAction",label:"Needs Action"},{value:"tentative",label:"Tentative"}]},{id:"self"}]}}}})})(e)}});return t});