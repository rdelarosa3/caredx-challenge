!function(n){var a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=353)}({353:function(e,t,n){"use strict";!function(h){var S=h.utils,e=h.dataSource,t=e.utils,g=t.splitAndTrimStringsToArray,j=t.validateEmailAddresses,v=t.partitionRecipients;function n(t,e,n,a){var i=function(e){return S.mergeAsDataInContext(t.attr(e),n)},r=i("to"),o=i("cc"),l=i("bcc"),u=i("sender"),c=i("prettySender"),s=i("subject"),p=i("body"),d=g(r),b=g(o),y=g(l);if(j(d,b,y)){var m=[];if(d.length||m.push("Email must have recipients"),s.length||m.push("Email subject cannot be empty"),u.length||m.push("Sender cannot be empty"),p.length||m.push("Email body cannot be empty"),m.length)return void h.component.getByType("skuidpage")[0].addProblem(m.join("\n"));var f={partitionedDestinations:v(d,b,y,50),sender:u,prettySender:c,subject:s,body:p};return h.ajax.direct({url:"/core/data/aws-ses/email",type:"POST",body:f,cache:!1,processData:!1,contentType:"application/json",headers:{"x-skuid-data-source-name":a.name}})}}new e.DataSourceType({name:"AmazonSES",getActions:t.getActionsStatic,createActions:function(){return{"compose-email":{builderProps:[{id:"to",label:"To",type:"template",displayAs:"input",location:"attribute"},{id:"cc",label:"Cc",type:"template",displayAs:"input",location:"attribute"},{id:"bcc",label:"Bcc",type:"template",displayAs:"input",location:"attribute"},{id:"sender",label:"Sender",type:"template",displayAs:"input",location:"attribute"},{id:"prettySender",label:"Email Display Name",helptext:"The name that will be displayed beside the email address of the sender. Typically the first and last name of the sender or the name of an organization.",type:"template",displayAs:"input",location:"attribute"},{id:"subject",label:"Subject",type:"template",location:"attribute"},{id:"body",label:"Body",type:"template",location:"attribute"}],runtimeExecution:n,label:"Send Email"}}},modelable:!1})}(skuid)}});