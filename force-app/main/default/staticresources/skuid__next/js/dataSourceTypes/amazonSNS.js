skuid.runtime.registerApi("v2","dataSourceTypes/amazonSNS",function(e){var t=function(e){var t={};function i(a){if(t[a]){return t[a].exports}var o=t[a]={i:a,l:false,exports:{}};e[a].call(o.exports,o,o.exports,i);o.l=true;return o.exports}i.m=e;i.c=t;i.d=function(e,t,a){if(!i.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:a})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(e,t){if(t&1)e=i(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var a=Object.create(null);i.r(a);Object.defineProperty(a,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";return i(i.s=711)}({711:function(t,i){(function(e){const t=e.$,i=e.utils,a=i.Deferred,o=i.mergeAsTextInContext,n=e.dataSource,r=n.utils,l=r.safeEach,s=e.constants,u=s.HTTP_VERBS,c="AmazonSNS",p="TEXT",d=u.POST;if(n.getDataSourceType(c))return;function b(t,i){let a={url:"/core/data/aws",type:"POST",headers:{"x-skuid-data-source-name":t}};if(i){a.body=i;a.contentType="application/json"}return e.ajax.direct(a).then(function(e){return e.body},function(e){try{return JSON.parse(e.body).message}catch(t){return e.status}})}new n.core.RESTDataSourceTypeBase({name:c,coerceRequest:function e(i){let a=i.type,o=i.model,n=i.row,r=this.getEntityMetadataCacheKey(o),l=a==="query",s=a==="insert",u=a==="delete",c=i.request,p;if(l){if(r==="Topic"){c.data={method:"listTopics"}}else if(r==="Subscription"){c.data={};p=o?o.getConditionByName("topic"):null;if(p&&!p.inactive&&p.value){c.data.body={TopicArn:p.value};c.data.method="listSubscriptionsByTopic"}else{c.data.method="listSubscriptions"}}}else if(s){if(r==="Topic"){c.data={method:"createTopic",body:{Name:n.Name||"New Topic"}}}}else if(u){if(r==="Topic"){c.data={method:"deleteTopic",body:{TopicArn:n.TopicArn}}}}t.extend(c,{headers:{"x-skuid-data-source-name":o.getDataSource().name},method:"POST",url:"/core/data/aws"})},getPaginationToken:function e(t){return i.parseAsJSONIfString(t.body).NextToken},applyPaginationToken:function e(t,a){i.setObjectProperty(t,"data.body.NextToken",a)},parseSuccessfulLoadResponse:function e(t,a,o,n){let r=i.parseAsJSONIfString(t.body),s=a.pathToContent,u=s?i.getObjectProperty(r,s):r,c=i.getObjectProperty(o,"extensions.rest.entityName");if(r.NextToken){o.canRetrieveMoreRows=true;n.NextToken=r.NextToken}else{o.canRetrieveMoreRows=false;delete n.NextToken}function p(e){return e.split(":")}function d(e){let t=p(e);return t[t.length-1]}l(u,function(e,t){let i=t[c==="Topic"?"TopicArn":"SubscriptionArn"],a=i.split(":");t.Region=a[3];t.Id=i;if(c==="Topic"){t.Name=d(i)}else if(c==="Subscription"){t.TopicName=d(t.TopicArn)}});return u},createActions:function e(){let t=function e(t,i,n,r){let l=a(),s=o(t.attr("subject"),n),u=o(t.attr("topicarn"),n),c=o(t.attr("number"),n),p=o(t.attr("messagetype"),n),d={method:"publish",body:{Message:o(t.attr("message"),n)}};if(s)d.body.Subject=s;if(u)d.body.TopicArn=u;else if(c)d.body.PhoneNumber=c;else return l.reject("No Target specified");if(p){d.body.MessageAttributes={"AWS.SNS.SMS.SMSType":{DataType:"String",StringValue:p}}}if(!d.body.Message)return l.reject("No Message specified");return b(r.name,d)};return{"sns-subscribe":{builderProps:[{id:"protocol",type:"picklist",picklistEntries:[{value:"-",label:"Standard",disabled:true},{label:"Email",value:"email",defaultValue:true},{label:"SMS",value:"sms",defaultValue:false},{value:"-",label:"",disabled:true},{value:"-",label:"Advanced",disabled:true},{label:"HTTP",value:"http",defaultValue:false},{label:"HTTPS",value:"https",defaultValue:false},{label:"Email (JSON)",value:"email-json",defaultValue:false},{label:"Amazon SQS",value:"sqs",defaultValue:false},{label:"Application",value:"application",defaultValue:false},{label:"Amazon Lambda",value:"lambda",defaultValue:false}]},{label:"Endpoint",id:"endpoint",type:"template",location:"attribute",displayAs:"input",helptext:"The way in which one is subscribing to an SNS topic. For SMS, remember to include a country code number.",value:""},{label:"Topic ARN",id:"topicarn",type:"template",location:"attribute",displayAs:"input",helptext:"The ARN of the topic one is subscribing to."}],runtimeExecution:function e(t,i,n,r){let l={method:"subscribe",body:{}};let s=a();l.body={Protocol:t.attr("protocol"),Endpoint:o(t.attr("endpoint"),n),TopicArn:o(t.attr("topicarn"),n)};if(!l.body.Protocol)return s.reject("No protocol specified");if(!l.body.Endpoint)return s.reject("No Endpoint specified");if(!l.body.TopicArn)return s.reject("No Topic ARN specified");return b(r.name,l)},label:"Subscribe to Topic"},"sns-publish":{builderProps:[{id:"message",type:"template",location:"attribute",value:""},{id:"subject",type:"template",location:"attribute",value:""},{label:"Topic ARN",id:"topicarn",type:"template",location:"attribute",displayAs:"input",value:"{{ARN}}"},{label:"Message Type",id:"messagetype",type:"picklist",picklistEntries:[{label:"Transactional",value:"Transactional",defaultValue:true},{label:"Promotional",value:"Promotional",defaultValue:false}]}],runtimeExecution:t,label:"Publish to Topic"},"sns-unsubscribe":{builderProps:[{label:"Subscription ARN",id:"subscriptionarn",type:"template",location:"attribute",displayAs:"input",value:"{{ARN}}"}],runtimeExecution:function e(t,i,n,r){let l={method:"unsubscribe",body:{}};let s=t.attr("subscriptionarn");if(!s){return a().reject("No Subscription ARN specified.").promise()}else{l.body.SubscriptionArn=o(s,n)}return b(r.name,l)},label:"Unsubscribe from Topic"},"sns-sms":{builderProps:[{label:"Message",id:"message",type:"template",location:"attribute",value:""},{label:"Phone Number",id:"number",type:"template",location:"attribute",value:"",displayAs:"input",helptext:"IMPORTANT: This Phone Number must have previously been subscribed to at least one Topic in order for one-off SMS Messages to be sent to it."},{label:"Message Type",id:"messagetype",type:"picklist",picklistEntries:[{label:"Transactional",value:"Transactional",defaultValue:true},{label:"Promotional",value:"Promotional",defaultValue:false}]}],runtimeExecution:t,label:"Send Text to Number"}}},getActions:r.getActionsStatic,queryEntityMetadata:r.queryEntityMetadataStatic,getEntityList:r.getEntityListStatic,extendedProperties:{composer:{unomittableFields:true,hasEntityOptions:true},hasDefaultSearch:false,canServerSearch:false,"x-metadata":{__skuid_fieldDefaults:{"*":{displaytype:p,writeable:false,filterable:false}},Topic:{label:"Topic",labelPlural:"Topics",idFields:["TopicArn"],fields:[{id:"TopicArn"},{id:"Region",helptext:"The AWS Region in which the topic was created."},{id:"Name",createable:true,omittable:false}],methods:{query:{pathToContent:"Topics",url:"",verb:d,contentType:"application/json"},insert:{url:"",verb:d,contentType:"application/json",successIf:"requestsucceeds"},delete:{url:"",verb:d,contentType:"application/json"}}},Subscription:{label:"Subscription",labelPlural:"Subscriptions",idFields:["SubscriptionArn"],fields:[{id:"SubscriptionArn",helptext:"The Subscription's ARN."},{id:"TopicArn",helptext:"The ARN of the subscription's topic."},{id:"TopicName",helptext:"The ARN of the subscription's topic."},{id:"Endpoint",helptext:"The Subscription's endpoint (format depends on the protocol)."},{id:"Owner",helptext:"The Subscription's owner."},{id:"Protocol",helptext:"The Subscription's protocol."},{id:"Region",helptext:"The AWS Region in which the topic was created."}],methods:{query:{pathToContent:"Subscriptions",url:"",verb:d,contentType:"application/json"}},defaultConditions:[{sourcetype:"param",sourceparam:"topic",name:"topic",label:"Topic",state:"filterableoff",value:""}]}}}})})(e)}});return t});