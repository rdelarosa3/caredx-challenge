!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=101)}({100:function(e,t,i){"use strict";!function(e){var t=e.mobile,i=e.$,n=e.utils,a=e.ui,r=n.makeXMLDoc,o=e.componentType.register,s=e.component,d=s.factory,l=s.Component.prototype;o("skuidmobile",function(n,a,o){n.addClass("sm-mainwrapper sm-mainwrapper-hide"),t.mainarea=n;var s=a.children("mobilenavs").first();s||(s=r("<mobilenavs/>"));var l=s.children('mobilenav[type!="footer"]'),c=s.children('mobilenav[type="footer"]'),p=a.children("mobilepanels").first().children();o.createChildComponents(l,t.headernavarea),o.createChildComponents(c,t.footernavarea),o.createChildComponents(p).push(t.registerPanel(d({definition:'<mobilesetupmenu uniqueid="skuidmobilesetupmenu"/>'}))),t.popupwrapper.addClass("sm-popupwrapper-hidden");var u=i("<div>").addClass("sm-popupmodal"),m=i("<div>").addClass("sm-popupcontent-header"),f=i("<div>").addClass("sm-popupclose fa fa-times").on("tap",function(){e.mobile.hidePopupPanel()});m.append(f,t.popuptitle),t.popupcontentwrapper.append(m,t.popupcontent),t.popupwrapper.append(u,t.popupcontentwrapper),i(document.body).append(t.popupwrapper),n.append(t.panelarea,t.headernavwrapper,t.footernavarea),t.mainarea.hammer({swipe_velocity:.2,behavior:!1}),t.popupwrapper.hammer({swipe_velocity:.2,behavior:!1})}),o("mobilepanel",function(e,i,n){e.addClass("sm-panel sm-panel-hidden"),t.panelMap[n.id()]||t.registerPanel(n);var a=i.children("components").first().children();n.createChildComponents(a,e,n.context),t.processInteractionsNode(i.children("interactions").first(),n)}),o("mobilenav",function(e,i,n){var a=i.children("components").first().children();n.createChildComponents(a,e),t.processInteractionsNode(i.children("interactions").first(),n)}),o("mobiledeck",function(r,o,s){var d=s;if(d.model=e.$M(o.attr("model")),d.model){var c="false"!==o.attr("createrecords")&&d.model.createable,p=d.model.updateable,u=d.model.deleteable,m="false"!==o.attr("showsavecancel"),f="false"!==o.attr("showloadmore"),h="true"===o.attr("searchbox"),v=o.attr("searchmethod")||"server",g="true"===o.attr("tokenizesearch"),b=o.attr("searchconditionname"),C=o.children("searchfields").first(),w=C.children(),x=o.children("aftersaveactions"),y=o.children("filters"),F=o.children("cardinteractions").first();d.mode=o.attr("mode")||"read",d.header=i("<div>").addClass("sm-deck-header");var k,M,I=n.merge("model",o.children("title").first().text(),{createFields:!0,registerFields:!0},d.model),S=o.children("cardtitle").first().text(),P=i("<div>").addClass("sm-deck-title").html(I),R=[];if(h){k=i("<div>").addClass("sm-deck-searchwrapper sm-titlebutton-wrapper").hide(),M=i("<div>").css("display","inline-block");var B=i("<div>").addClass("fa fa-fw fa-reply sm-deck-titlebutton").css("display","inline-block").on("tap",function(){k.toggle(),E.toggle()});k.append(B,M);var T=i("<div>").addClass("fa fa-fw fa-search sm-deck-titlebutton").on("tap",function(){if(!T.hasClass("disabled")&&(k.toggle(),E.toggle(),!k.is(":hidden")&&!a.isTouchDevice())){var e=k.find("input");if(d.model){var t=d.model.getConditionByName("__default_searchbox");t&&e&&e.length&&(e[0].value=t.value)}e.focus()}});R.push(T)}if(c){var _=i("<div>").addClass("fa fa-fw fa-plus sm-deck-titlebutton").on("tap",function(){if(!_.hasClass("disabled")){var e=d.list.newItem(d.model.createRow({initiatorId:d.list.id(),additionalConditions:d.list.options.conditions}),{editModeForNewItems:!0});d.list.render({resetPagination:!0,refreshFields:!1});var i=e.element.find(":input:not(.nx-skootable-rowselect)").first();i&&i.focus(),t.processResponsiveArea(r)}});R.push(_)}var D=m&&(!0===p||!0===c||!0===u)&&("read"===d.mode||"edit"===d.mode);if(D){var N=i("<div>").addClass("sm-deck-titlebutton sm-deck-savebutton").on("tap",function(){L.addClass("fa-refresh fa-spin"),L.removeClass("fa-check"),d.editor.save()}),L=i("<div>").addClass("fa fa-fw fa-check").appendTo(N);R.push(N);var z=i("<div>").addClass("fa fa-fw fa-times sm-deck-titlebutton sm-deck-cancelbutton").on("tap",function(){d.editor.cancel()});R.push(z)}var E=i("<div>").addClass("sm-deck-actionswrapper sm-titlebutton-wrapper");E.append(R),d.header.append(P,k,E),(h||D||c||i.trim(P.text()).length)&&d.header.css("min-height","30px"),d.body=i("<div>").addClass("sm-deck-body"),r.addClass("sm-deck"),d.editor=new a.Editor(d.body,{showHeader:!1}),d.conditions=d.createConditionsFromXml(),s&&(s.unregister=function(){l.unregister.call(s),d.editor.unregister()},s.context&&s.context.mode&&(d.mode=s.context.mode)),d.editor.handleChange=function(){if(N&&N.addClass("active"),z&&z.addClass("active"),T){var e=d.editor.lists;e.length&&i.each(e,function(e,t){"server"===t.searchMethod&&T.addClass("disabled")})}},d.editor.handleSave=function(e){var n=!1,a={},r=d.editor;i.each(r.models,function(e,t){t.hasChanged&&(n=!0,a[t.id]=!0)}),r.messages&&r.messages.empty(),r.lists.length&&i.each(r.lists,function(e,t){!t.model||t.model.id in a||"server"===t.searchMethod&&T&&T.removeClass("disabled")}),L&&(L.removeClass("fa-refresh fa-spin"),L.addClass("fa-check")),e&&!n&&(N&&N.removeClass("active"),z&&z.removeClass("active")),!e&&n&&(N&&N.addClass("active"),z&&z.addClass("active")),e&&x.length&&t.runActionsNode(x,d,{model:d.model,list:d.list,initiatorId:d.editor.id()})},d.editor.handleCancel=function(){var e=d.editor,t=!1,n={};if(i.each(e.models,function(e,i){i.hasChanged&&(t=!0,n[i.id]=!0)}),!1===t&&(e.messages&&e.messages.empty(),N&&N.removeClass("active fa-refresh fa-spin"),L&&(L.removeClass("fa-refresh fa-spin"),L.addClass("fa-check")),z&&z.removeClass("active")),T){var a=e.lists;a.length&&i.each(a,function(e,t){!t.model||t.model.id in n||"server"===t.searchMethod&&T.removeClass("disabled")})}},d.body.on("tap",".sm-card-header",function(){var e=i(this).children(".sm-card-action-wrapper");e.toggleClass("active"),e.toggle()}),d.body.on("tap",".sm-card-titlebutton",function(e){var t=i(this),n=t.closest(".sm-card").data("carditem");t.is(".fa-pencil")?n.toggleEdit():t.is(".fa-minus-circle")&&n.toggleDelete(!0),e.gesture.preventDefault(),e.stopPropagation()}),t.processInteractionsNode(F,s,{selector:".sm-card"});var A=d.childComponentsByRow={},O={},U=o.attr("minwidth"),G=o.attr("precision");O.render=function(t){var n=t.row,a=t.element,r=i("<div>").addClass("sm-card-inner"),l=i("<div>").addClass("sm-card-body"),c=i("<div>").addClass("sm-card-header");if(a.addClass("sm-card sm-grid-division"),a.data({carditem:t,component:t}),e.responsive.prepareDivision(a,{relativeSize:1,minWidth:U}),S){c.text(e.utils.mergeAsText("row",S,{createFields:!0,registerFields:!1},t.list.model,n));var m=i("<div>").addClass("sm-titlebutton-wrapper"),f=i("<div>").addClass("sm-card-actionbutton fa fa-fw fa-ellipsis-v");m.append(f),c.append(m);var h=i("<div>").addClass("sm-card-action-wrapper sm-titlebutton-wrapper").css("right","30px").hide();if(p){var v=i("<div>").addClass("sm-card-titlebutton fa fa-fw fa-pencil");h.append(v)}if(u){var g=i("<div>").addClass("sm-card-titlebutton fa fa-fw fa-minus-circle");h.append(g)}c.append(h),r.append(c)}r.append(l),a.append(r);var b={row:n,model:d.model,editor:d.editor,item:t,list:t.list},C=A[n.Id];C?C.length&&(i.each(C,function(){this.unregister&&this.unregister()}),C.length=0):C=A[n.Id]=[],i.each(s.createChildComponents(o.children("components").first().children(),l,b),function(){C.push(this)})},O.renderComplete=function(){t.processResponsiveArea(r)},d.views={standard:O},d.list=new a.List(d.editor,d.model,{views:d.views,createRecords:c,listFilters:y,conditions:d.conditions,context:d.context,delayFilterExecution:!1,showSearchBox:h,showLoadMore:f,searchConditionName:b,searchPlaceholderText:o.attr("searchplaceholdertext"),useSOSLSearch:"true"===C.attr("usesosl"),SOSLFields:C.attr("soslfields"),searchMethod:v,tokenizeSearch:g,mode:d.mode,personalizationService:s.getPersonalizationService()}),w.length?w.each(function(){var e=i(this);d.list.addSearchField(d.model.getField(e.attr("field")),e.attr("operator"))}):i.each(d.model.fields,function(e,t){d.list.addSearchField(t)}),d.model.registerList(d.list),d.list.render(),d.list.attach(),h&&(d.list.searchBox||(d.list.searchBox=d.list.makeSearchBox()),d.list.searchBox.appendTo(M)),d.list.contents.addClass("sm-grid"),d.list.contents.data("precision",G),e.responsive.prepareGrid(d.list.contents,{precision:G,layoutMode:"rigid",minWidth:U}),r.append(d.header,d.body),s.unregister=function(){return l.unregister.call(s),s.editor.unregister(),s},s.unregisterChildComponents=function(){return i.each(s.childComponentsByRow,function(e,t){t.length&&(i.each(t,function(){this.unregister&&this.unregister()}),t.length=0)}),s}}else s.addProblem("Invalid Model '"+o.attr("model")+"' on Deck component. This Model's Id may have been changed, or the Model may have been deleted.")}),o("mobilegrid",function(t,n,a){t.addClass("sm-grid"),t.data("precision",n.attr("precision")),e.responsive.prepareGrid(t,{precision:n.attr("precision")});var r=n.children("divisions").first().children(),o=a.createChildComponents(r,t,a.context);o&&o.length&&i.each(o,function(){var e=this.element;e.hasClass("sm-grid-division")||e.addClass("sm-grid-division"),e.data("rendered")||e.addClass("inactive")})}),o("division",function(i,n,a){i.hasClass("sm-grid-division")||i.addClass("sm-grid-division"),i.hasClass("inactive")&&i.removeClass("inactive");var r=n.attr("size"),o=n.parent().parent().attr("minwidth");i.data("size",r),e.responsive.prepareDivision(i,{behavior:n.attr("type"),width:r,relativeSize:r,parentMinWidth:o});var s=n.children("components").first().children();a.createChildComponents(s,i,a.context),t.processInteractionsNode(n.children("interactions").first(),a),a.unrender=function(){l.unrender.call(a),i.addClass("inactive")}}),o("mobilebutton",function(i,a,o){i.addClass("sm-button"),o.button=new t.ui.Button({element:i,icon:a.attr("icon"),label:n.mergeAsTextInContext(a.attr("label"),o.context),style:a.attr("style"),tooltip:a.attr("tooltip"),buttonset:a.attr("buttonset")});var s,d=o.id(),c=a.children("interactions").first(),p=a.children("hotkeys").first(),u=a.children("enableconditions");c.length||(s=a.children("actions").first().clone()).length&&(c=r("<interactions/>").append(r('<interaction type="tap"/>').append(s))),t.processInteractionsNode(c,o),p.length&&s.length&&e.hotkeys.bind(p,d,function(){i.trigger("tap")},i),u.length&&u.children().length&&n.conditionallyDo(function(){o.button.enable()},function(){o.button.disable({message:u.attr("message")})},u,i,n.getContextToUse(o)),o.unregister=function(){return d&&e.hotkeys.unbind(d),l.unregister.call(o),o},o.unrender=function(){return i.removeClass(),l.unrender.call(o),o}}),o("mobileimage",e.componentType.get("image")),o("mobilewrapper",function(e,i,a){e.addClass("sm-wrapper");var r=i.children("components").first().children();a.createChildComponents(r,e,a.context),n.processStylesNode(i.children("styles").first(),a),t.processInteractionsNode(i.children("interactions").first(),a)}),o("mobiletitle",function(e,t,i){e.addClass("sm-title");var n=d({definition:t,element:e,type:"template",context:i.context});i.unregister=function(){l.unregister.call(i),n.unregister()}}),o("mobileinfo",function(e,t,i){e.addClass("sm-info");var n=d({definition:t,element:e,type:"template",context:i.context});i.unregister=function(){l.unregister.call(i),n.unregister()}}),o("mobilefield",function(t,r,o){var s,d,c=e.$M(r.attr("model")),p=o.context,u=p?p.list:null,m=p?p.item:null;if(o.changeMode=function(){var e=o.field,t=e.element.closest(".nx-item").find(".nx-field");i.each(t,function(){var e=i(this).data("object");e&&"edit"===e.mode&&(e.mode="read",e.render())}),n.registerBlurHandler(e.element,function(){e&&!0!==e.disableBlur&&(e.mode="read",e.render())}),e.mode="edit",e.render();var a=e.element.find(":input").first();a&&a.focus()},!c&&p&&p.model&&(c=p.model),s=p&&p.editor?p.editor:new a.Editor,p&&p.row?d=p.row:c&&(d=c.getFirstRow()),!c)return!0;var f,h=r.attr("id"),v=r.attr("name"),g=r.attr("type"),b=r.attr("mode")||m&&m.mode||p&&p.mode||"read",C=e.ui.getFieldOptionsFromXML(r,{model:c,item:m,mode:b}),w=c.getField(v||h);if(!w)return!0;f=w.displaytype;var x="CHILDREL"===g,y="ARRAY"===f,F=r.children("label"),k=C.label=F.length?F.text():w&&w.label||"",M=c.mergeRow(m.row,k),I=i("<div>").addClass("sm-field-label").append(M);C.labelText=M.text(),(w&&w.required||"true"===r.attr("required"))&&(u&&u.addRequiredField(w),I.addClass("required"));var S=w&&w.inlineHelpText;S&&(C.inlineHelpText=S),("COMBO"===g||x||y)&&(C.template=r.children("template").first().text(),(s=new a.Editor(i("<div>"))).registerModel(c),s.handleChange=function(){o.field.render()},(x||y)&&(C.delimiter=r.attr("delimiter"))),r.attr("valuehalign")&&t.addClass("halignright"),t.addClass("sm-field"),o.field=new a.Field(d,c,s,C),m&&(o.field.item=m),o.field.wrapperElement=t,o.field.labelElement=I,o.field.render(),m&&m.registerField(o.field),t.append(I,o.field.element),m&&"edit"===m.defaultMode||!C.editable||t.on("doubletap",function(){o.changeMode("edit")}),o.unregister=function(){l.unregister.call(o),o.field.unregister(),s&&s!==p.editor&&s.unregister()},o.unrender=function(){l.unrender.call(o);var e,t=r.children("renderconditions").first(),a=!!t.length&&t.attr("onhidedatabehavior")||"keep",s="COMBO"===g,p=o.field;if(h&&!w)return!0;p&&p.editable&&(s?"custompopup"===p.options.editModeBehavior?(e=[],p.options.editModePopupXML.find('mobiledeck[model="'+c.id+'"]').find("mobilefield").each(function(){var t=i(this),n=t.attr("id");t.attr("name")||"true"===t.attr("readonly")||e.push(n)})):e=n.extractFieldsFromTemplate(p.options.template,{ignoreGlobals:!0}):h&&(e=h),"cancel"===a&&e&&c.cancelRowChanges(d,e,{initiatorId:o.id()})),(w&&w.required||"true"===r.attr("required"))&&u&&u.removeRequiredField(w)}}),o("mobileaccordion",function(e,n,a){e.addClass("sm-accordion");var r=n.children("items").first().children(),o=n.attr("level")||"0";e.on("tap",".sm-accordion-label",function(e){var t=i(this),n=t.parent(),a=t.next();n.toggleClass("sm-accordion-item-closed"),a.slideToggle(),e.stopPropagation()}),r.each(function(){var n,r=i(this),s=i("<div>").addClass("sm-accordion-item sm-accordion-item-closed"),d=i("<div>").addClass("sm-accordion-label"),l=i("<div>").addClass("sm-accordion-content").hide();if(new t.ui.Button({element:d,icon:r.attr("icon"),label:r.attr("label")}),d.addClass("sm-level"+o),(n=r.children("itembuttons").first().children()).length){var c=i("<div>").addClass("sm-titlebutton-wrapper");n.each(function(){var e=i(this),n=i("<div>").addClass("sm-titlebutton sm-accordion-item-button fa fa-fw "+e.attr("icon"));n.on("tap",function(i){t.runActionsNode(e.children("actions").first(),a),i.stopPropagation()}),c.append(n)}),d.append(c)}a.createChildComponents(r.children("components").first().children(),l,a.context),s.append(d,l),e.append(s)})}),o("mobiletree",function(e){e.addClass("sm-tree")}),o("mobilesetupmenu",function(a){a.addClass("sm-setupmenu");var r=i("<div>").addClass("sm-grid");if("MobilePageBuilder"===e.page.name){var o=i("<div>").addClass("sm-grid-division"),s=new t.ui.Button({label:"Page Assignments",icon:"fa-random"});o.append(s.element.addClass("sm-button").on("tap",function(){n.redirect({url:"/apex/skuid__PageAssignments",title:"Skuid Page Assignments"})}));var d=i("<div>").addClass("sm-grid-division"),l=new t.ui.Button({label:"Pages List",icon:"fa-bars"});d.append(l.element.addClass("sm-button").on("tap",function(){n.redirect({url:(e.utils.inPlatform(e.constants.LIGHTNING)?"/skuid/UI.app?type=Mobile&":"/apex/skuid__UI?")+"page=MobilePageList",title:"Mobile Pages"})})),r.append(o,d),e.responsive.prepareDivision(o,{relativeSize:"1",minWidth:"150"}),e.responsive.prepareDivision(d,{relativeSize:"1",minWidth:"150"})}else{var c=i("<div>").addClass("sm-grid-division"),p=new t.ui.Button({label:"Edit Page",icon:"fa-wrench"});c.append(p.element.addClass("sm-button").on("tap",function(){n.redirect({url:(e.utils.inPlatform(e.constants.LIGHTNING)?"/skuid/MobilePageBuilder.app":"/apex/skuid__PageBuilder")+"?id="+e.page.id,title:"Editing Page: "+e.page.name})}));var u=i("<div>").addClass("sm-grid-division"),m=new t.ui.Button({label:"My Profile",icon:"fa-user"});u.append(m.element.addClass("sm-button").on("tap",function(){n.redirect({url:"/_ui/core/userprofile/UserProfilePage",title:"User Profile"})})),r.append(c,u),e.responsive.prepareDivision(c,{relativeSize:"1",minWidth:"150"}),e.responsive.prepareDivision(u,{relativeSize:"1",minWidth:"150"})}var f=i("<div>").addClass("sm-grid-division"),h=new t.ui.Button({label:"Setup",icon:"fa-gears"});f.append(h.element.addClass("sm-button").on("tap",function(){n.redirect({url:"/setup/forcecomHomepage.apexp?setupid=ForceCom",title:"Force.com Setup",window:"blank"})})),e.responsive.prepareDivision(f,{relativeSize:"1",minWidth:"150"});var v=i("<div>").addClass("sm-grid-division"),g=new t.ui.Button({label:"Log Out",icon:"fa-sign-out"});v.append(g.element.addClass("sm-button").on("tap",function(){n.redirect({url:"/secur/logout.jsp",title:"Logout",window:"blank"})})),e.responsive.prepareDivision(v,{relativeSize:"1",minWidth:"150"}),r.append(f,v),e.responsive.prepareGrid(r,{precision:"4"}),a.append(r)})}(skuid)},101:function(e,t,i){"use strict";i.r(t);i(4),i(11),i(12),i(13),i(100)},11:function(e,t,i){"use strict";!function(e){var t=e.utils,i=function(i,n,a){var r,o,s,d=a?a.context:null,l=e.$M(n.attr("model"));!l&&!n.attr("model")&&d&&d.model&&(l=d.model),o=(r=(r=n.children("contents").first()).length?r[0]:n[0]).textContent||r.text,s=a.createConditionsFromXml(n);var c=n.attr("multiple"),p=c&&"true"===c,u=new t.TemplateComponent(i,{allowHTML:"true"===n.attr("allowhtml"),component:a,context:d,conditions:s,isMultiRow:p,model:l,templateBody:o});a&&(a.unregister=function(){e.component.Component.prototype.unregister.call(a),u.unregister()})};e.componentType.register("template",i),t.registerPlugin("template",{init:function(e,t){return i(this,e,t),this.data("object",this),this}})}(skuid)},12:function(e,t,i){"use strict";skuid.componentType.register("custom",function(e,t,i){var n=t.attr("name");n&&(i.unregister({removeElement:!1}),i.setType(n),skuid.component.register(i),i.isBeingRendered=!1,i.render())})},13:function(e,t,i){"use strict";!function(e){var t=e.utils,i=e.componentType.register,n=function(i,n,a,r,o){var s,d,l,c=a?a.context:null,p=(s=new t.FileComponent(i,{component:a,context:c,model:e.$M(n.attr("model")),datasource:n.attr("datasource"),idField:n.attr("idfield"),field:n.attr("field"),saveTo:n.attr("saveto"),storeAs:o,displayAs:r,deletable:"false"!==n.attr("deleteable"),editable:"false"!==n.attr("editable"),fileName:n.attr("filename"),filename:n.attr("filename"),maxFileSize:n.attr("maxfilesize"),enforceMaxFileSize:"true"===n.attr("enforcemaxfilesize"),autoRefreshModelsOnUpload:"false"!==n.attr("autorefreshmodels"),onUploadSuccessActions:n.children("uploadsuccessactions"),onUploadFailureActions:n.children("uploadfailureactions"),label:n.attr("label"),feedtext:n.attr("feedtext"),description:n.attr("description"),defaultImage:n.attr("defaultimage"),snippetName:n.attr("snippetname"),xmlDef:n,saveToModel:n.attr("model"),cacheBuster:a.fileController&&a.fileController.cacheBuster,_GUID:a._GUID})).fileController,u=p.model,m=p.row,f=p.idField,h=p.uploadMethod;a.fileController=s.fileController,a.fc=s,!a._fileRowUpdateListener&&m&&f&&"field"==o&&(d=h.getFileIdField&&h.getFileIdField(f),l=h.getFileNameField&&h.getFileNameField(f),a._fileRowUpdateListener=e.events.subscribe("row.updated",function(i){var n,r=t.hasObjectProperty,o=a.fileController;i.rowId===u.getRowId(m)&&i.modelId===u.id&&i.initiatorId!==a.id()&&(r(i.updates,f)||d&&r(i.updates,d)||l&&r(i.updates,l))&&((n=e.$C(i.initiatorId))&&n.fileController&&(o.cacheBuster=n.fileController.cacheBuster),a.unrender().conditionallyRender())})),!a._fileModelChangeListener&&u&&(a._fileModelChangeListener=e.events.subscribe(["models.loaded","models.saved","models.cancelled"],function(t){var i,n=a.fileController;u.id in t.models&&t.initiatorId!==a.id()&&((i=e.$C(t.initiatorId))&&i.fileController&&(n.cacheBuster=i.fileController.cacheBuster),a.unrender().conditionallyRender())})),a&&(a.unregister=function(){var t=a.fc;e.component.Component.prototype.unregister.call(a),t.unregister()})};i("file",function(e,t,i){return n(e,t,i,t.attr("displayas"),t.attr("storeas"))}),i("attachmentimage",function(e,t,i){return n(e,t,i,"image","field")})}(skuid)},4:function(e,t,i){"use strict";!function(e){var t=e.$,i=e.utils,n=i.hasObjectProperty;e.componentType.register("image",{render:function(n,a,r){n.addClass((e.mobile?"sm":"sk")+"-image-wrapper");var o,s,d,l,c,p,u,m,f,h=r.context,v=r._getCPI(),g=a.attr("source"),b=a.attr("datasource")||a.attr("dataSource")||e.platform.getDefaultDataSourceName(),C=e.dataSource.get(b),w=C&&C.getImageSource(g),x=w&&(w.needsRecordContext||w.optionalRecordContext),y=function(){return null},F=r.get("imageElement"),k=!1;F&&n.empty(),h&&(m=h.model,f=h.row),x&&(o=a.attr("model"),d=e.$M(o),u=r.createConditionsFromXml(a,h),w.needsFieldContext&&(s=a.attr("field"))),!d&&h&&(d=h.model),d?y=m?m===d?function(){return f}:function(){return d.getRows(u,h)[0]}:function(){return d.getFirstRow()}:m&&(d=m,y=function(){return f||d.getFirstRow()}),p=a.children("interactions"),l=a.attr("behavior"),F=t("<img>").addClass("sm-image").attr("alt",a.attr("alt")?a.attr("alt"):""),"link"===l?(k=!0,c=t('<a href="#">').append(F),n.click(function(e){e.preventDefault()})):"button"===l?(k=!0,c=t("<button>").append(F)):c=F,k&&p.length&&!n.parent().hasClass("nx-pagebuilder-component-body")&&(e.interactions.disableInteractions(n),e.interactions.enableInteractions(n,{interactionsDef:p,component:r})),F.css("visibility","hidden"),n.append(c),r.set({behavior:l,contextModel:m,contextRow:f,field:s,getRow:y,imageElement:F,imageSource:w,model:d}),v.draw(),x&&v.subscribeToEvents(),i.processStylesNode(a.children("styles").first(),F)},cpi:{draw:function(){var e=this,t=this.get("getRow")(),i=this.get("field"),n=this.get("imageSource"),a=this.get("imageElement"),r={},o=this.get("model");o&&(r.model=o),t&&(r.row=t),n&&n.getSrc&&n.getSrc({context:r,mergeSettings:{createFields:!1},dataSource:n.dataSource,fileField:i,xmlDef:e.xmlDefinition}).then(function(t){var i=e.get("cacheBuster");a.attr("src",t+(i?"?cacheBuster="+i:"")).css({display:"",visibility:"visible"}),e.publish("loaded")},function(){a.attr("src","").css({display:"none",visibility:"visible"}),e.publish("loaded")})},subscribeToEvents:function(){var e=this,t=e.get("model"),i=e.get("contextModel"),n=e.get("getRow"),a=n&&n(),r=[];function o(){var t;n&&(t=n()),t!==a&&e._getCPI().draw()}t&&r.push(t),i&&i!==t&&r.push(i),r.forEach(function(t){["cancelled","loaded","row.created","saved"].forEach(function(i){e.storeSubscription(t.subscribe(i,o))}),e.storeSubscription(t.subscribe("row.updated",function(t){e._getCPI().handleRowUpdates(t)}))})},handleRowUpdates:function(t){var i,a,r,o=this._getCPI().draw,s=this.get("getRow"),d=this.get("field");s&&t.row===s()&&(d?(a=(r=t.modelId&&e.$M(t.modelId))&&r.getField(d),r&&r.isRelationshipField(d)&&(i=r.getReferenceFieldNameFromRelationshipField(d)),(n(t.updates,d)||a.rel&&n(t.updates,a.rel)||i&&n(t.updates,i))&&o()):o())}}})}(skuid)}});