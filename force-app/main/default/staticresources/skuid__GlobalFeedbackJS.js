"use strict";!function(a){function b(b){function f(){var a={doAppend:!0,editModeForNewItems:!0};V.createRow(a),W.createRow(a),k.createRow(a)}function g(){k.emptyData(),V.emptyData(),W.emptyData(),X.emptyData()}function h(){var b,c,d=a.platform.getEntityFieldNames("page");return L&&L._pageRecord?(b=L._pageRecord[d.id],c=L._pageRecord[d.updated_at]):(b=a.page.id,c=a.page.modstamp),{Id:b,modstamp:c}}function i(){return a.platform.getDefaultDataSourceName()}function j(b,d){var e=a.dataSource.get("Ui-Only"),f=c.extend({},d.fieldsMap.skuid__Type__c,{id:G}),g={id:H,displaytype:a.constants.DISPLAY_TYPES.TEXTAREA,accessible:!0,editable:!0};return new p.Model({id:b,dataSource:e,preventUnloadIfUnsavedChanges:!1,createRowIfNoneFound:!1,doQuery:!1,fields:[f,g]}).initialize().register()}var k,l,m,n=a.component,o=a.events,p=a.model,q=a.snippet,r=a.utils,s=r.generateUniqueId,t=r.makeXMLDoc,u="Attachment",v="skuid__Feedback__c",w="skuid__Feedback_Response__c",x="Name",y="skuid__Type__c",z="skuid__Page__c",A="skuid__Page_Last_Modified_Date__c",B="skuid__Skuid_Version__c",C="skuid__Question_Type__c",D="skuid__Question_Text__c",E="skuid__Answer_Text__c",F="Name",G="Type__ui",H="Answer_Text__ui",I="skuid.globalFeedback.close",J=this,K=J.component=c("<div />").addClass("sk-feedback").addClass("sk-pos-"+(b.position||"right")).attr("aria-hidden","true"),L=J.pageComponent=b.pageComponent,M=h().Id,N=b.element||e,O=function(){return{cancelButton:d("cancel"),attachButton:d("global_feedback_attach_button_text"),closeButton:d("global_feedback_close_button_text"),submitButton:d("global_feedback_submit_button_text"),tabText:d("global_feedback_tab_text"),tabIcon:d("global_feedback_tab_icon"),breadcrumbStep1:"1. "+d("global_feedback_breadcrumb_step_1"),breadcrumbStep2:"2. "+d("global_feedback_breadcrumb_step_2"),typeText:d("global_feedback_type_text"),fileText:d("global_feedback_file_button_text"),dragFilesText:d("global_feedback_drag_files_text"),fileHelpText:d("global_feedback_file_help_text"),questionText:d("global_feedback_question_text"),successEmphasizedText:d("global_feedback_success_emphasized_message"),successSecondaryText:d("global_feedback_success_secondary_message")}}(),P='<span class="sk-fb-bc-content active">'+O.breadcrumbStep1+'</span><span class="sk-fb-bc-slash">/</span><span class="sk-fb-bc-screenshot">'+O.breadcrumbStep2+"</span>",Q='<span class="sk-fb-bc-content">'+O.breadcrumbStep1+'</span><span class="sk-fb-bc-slash">/</span><span class="sk-fb-bc-screenshot active">'+O.breadcrumbStep2+"</span>",R=s({prefix:"feedback"}),S=s({prefix:"feedback"}),T=s({prefix:"feedback"}),U=s({prefix:"feedback"}),V=function(a){return new p.Model({id:a,dataSourceName:i(),preventUnloadIfUnsavedChanges:!1,objectName:v,createRowIfNoneFound:!1,doQuery:!1,recordsLimit:1,fields:[{id:x},{id:y},{id:z},{id:A},{id:B}]}).initialize().register()}(R),W=function(a,b){return new p.Model({id:a,dataSourceName:i(),preventUnloadIfUnsavedChanges:!1,objectName:w,createRowIfNoneFound:!1,doQuery:!1,recordsLimit:1,fields:[{id:v},{id:E},{id:D},{id:C}],conditions:[new p.Condition({type:"modelmerge",model:b,field:v,mergeField:"Id",novaluebehavior:"noquery"})]}).initialize().register()}(S,R),X=function(a,b){return new p.Model({id:a,dataSourceName:i(),preventUnloadIfUnsavedChanges:!1,objectName:u,createRowIfNoneFound:!1,doQuery:!1,recordsLimit:10,fields:[{id:F}],conditions:[new p.Condition({type:"modelmerge",field:"ParentId",operator:"=",model:b,mergefield:"Id",novaluebehavior:"noquery"})]}).initialize().register()}(T,R),Y=[],Z=s({prefix:"snippet"}),$=s({prefix:"snippet"}),_=s({prefix:"snippet"});p.load([V,W,X]).then(function(){k=j(U,V),l=n.factory({definition:t('<wrapper cssclass="sk-fb-step1-wrapper"/>').append(t("<components/>").append(t('<template multiple="false" cssclass="sk-fb-breadcrumbs" allowhtml="true"/>').append(t("<contents/>").text(P)),t('<basicfieldeditor cssclass="sk-fb-tab-fields" model="'+U+'" showsavecancel="false" mode="edit" layout="above"/>').append(t("<columns/>").append(t('<column width="100%"/>').append(t("<sections/>").append(t('<section showheader="false"/>').append(t("<fields/>").append(t('<field id="'+G+'" required="true"/>').append(t("<label/>").text(O.typeText)),t('<field id="'+H+'" required="true" displayrows="6"/>').append(t("<label/>").text(O.questionText)))))))),t('<buttonset cssclass="sk-fb-tab-buttons" model="'+U+'"/>').append(t("<buttons/>").append(t('<button cssclass="sk-fb-save-button" type="multi" label="'+r.encodeHTML(O.submitButton)+'" window="self" rollbackonanyerror="true"/>').append(t("<actions/>").append(t('<action type="custom" snippet="'+_+'"/>'))),t('<button type="multi" label="'+r.encodeHTML(O.cancelButton)+'" secondary="true"/>').append(t("<actions/>").append(t('<action type="publish" event="'+I+'"/>'),t('<action type="custom" snippet="'+$+'"/>')))))),t('<renderconditions logictype="and"/>').append(t('<rendercondition type="blank" operator="=" fieldmodel="'+R+'" sourcetype="fieldvalue" nosourcerowbehavior="skipandnorender" field="'+x+'" fieldtargetobjects="'+v+'" value="null" enclosevalueinquotes="false"/>')))}),m=n.factory({definition:t('<wrapper cssclass="sk-fb-step2-wrapper"/>').append(t("<components/>").append(t('<template multiple="false" cssclass="sk-fb-breadcrumbs" allowhtml="true"/>').append(t("<contents/>").text(Q)),t('<wrapper cssclass="sk-fb-uploader-wrapper"/>').append(t("<components/>").append(t('<pagetitle model="'+R+'" cssclass="sk-fb-uploader-title"/>').append(t("<maintitle/>").text(O.fileHelpText),t("<actions/>")),t('<file cssclass="sk-fb-uploader" storeas="record" displayas="filename" datasource="salesforce" filename="" snippetname="" model="'+R+'" label="'+r.encodeHTML(O.fileText)+'"/>').append(t("<uploadsuccessactions/>"),t("<uploadfailureactions/>"))),t("<styles/>").append(t('<styleitem type="background" bgtype="none"/>'),t('<styleitem type="border"/>'),t('<styleitem type="size"/>'))),t('<template cssclass="sk-fb-files" multiple="false" model="'+T+'"/>').append(t("<contents/>").text('<span class="sk-fb-filename">{{Name}}</span>')),t('<buttonset cssclass="sk-fb-tab-buttons" model="'+U+'"/>').append(t("<buttons/>").append(t('<button type="multi" label="'+r.encodeHTML(O.attachButton)+'" window="self" rollbackonanyerror="true"/>').append(t("<actions/>").append(t('<action type="custom" snippet="'+Z+'"/>')),c('<enableconditions logictype="and" />').append(c('<condition type="fieldvalue" enclosevalueinquotes="true" fieldmodel="'+T+'" sourcetype="modelproperty" sourceproperty="hasRows"/>'))),t('<button type="multi" label="'+r.encodeHTML(O.closeButton)+'" secondary="true"/>').append(t("<actions/>").append(t('<action type="publish" event="'+I+'"/>'),t('<action type="custom" snippet="'+$+'"/>')))))),t('<renderconditions logictype="and"/>').append(t('<rendercondition type="blank" operator="!=" fieldmodel="'+R+'" sourcetype="fieldvalue" nosourcerowbehavior="skipandnorender" field="'+x+'" fieldtargetobjects="'+v+'" value="null" enclosevalueinquotes="false"/>')))}),N.append(K.append(c('<div class="sk-fb-tab">').append(c('<div class="sk-fb-tab-button">').append(c("<span>").attr("class",O.tabIcon),c("<span>").text(O.tabText))).click(function(){o.publish("skuid.globalFeedback.toggle",[{pageId:M}])}),c('<div class="sk-fb-form">').append(l.element,m.element))),o.publish("skuid.globalFeedback.rendered")}),Y.push(o.subscribe(I,function(){K.attr("aria-hidden","true")}),o.subscribe("skuid.globalFeedback.toggle",function(a){a.pageId===M&&K.attr("aria-hidden",function(a,b){return"false"===b?"true":(V.data.length||f(),"false")})})),q.register(Z,function(){c(".sk-fb-step2-wrapper").html(c('<p class="sk-fb-success">').append(c("<strong>").text(O.successEmphasizedText),c("<span> </span>"),c("<span>").text(O.successSecondaryText))),setTimeout(function(){o.publish(I),q.get($)()},1e3)}),q.register($,function(){setTimeout(function(){g()},500)}),q.register(_,function(b){var c=b.model,d={},e={},f=V.getFirstRow(),g=W.getFirstRow(),i=c.getFieldValue(c.getFirstRow(),H,!0),j={rollbackOnAnyError:!0},k=h(),l=k.Id,m=k.modstamp;i&&i.length&&(d[y]=c.getFieldValue(c.getFirstRow(),G),d[z]=l,d[A]=a.time.getSFDateTime(new Date(m)),d[B]=a.version.number,e[D]=O.questionText,e[E]=i,V.updateRow(f,d),W.updateRow(g,e),p.save([V,W],j))}),this.unregister=function(){c.each(Y,function(){o.unsubscribe(this)}),k&&(l.unregister(),m.unregister(),k.unregister(),V.unregister(),W.unregister(),X.unregister(),q.unregister(Z),q.unregister($),q.unregister(_)),this.component.remove()},this.getModels=function(){return{Feedback:V,FeedbackResponse:W,FeedbackAttachments:X,UIModel:k}},this.getModel=function(a){return this.getModels()[a]}}var c=a.$,d=a.$L,e=c(document.body);a.globalFeedback={GlobalFeedback:b}}(skuid);