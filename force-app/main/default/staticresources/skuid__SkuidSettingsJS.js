!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=75)}({75:function(e,t,o){"use strict";!function(e){var t=e.$,o=e.snippet.register,n=e.utils,a=e.ui.getFieldRenderer,r=n.decodeHTML,i=e.constants,s=i.SALESFORCE,u=e.platform.getEntityFieldNames,l=u("theme"),c=u("data_source"),d=u("auth_provider"),m=e.skuidPageUtils,p=e.ui.getRenderer,h=i.DISPLAY_TYPES,f=h.COMBOBOX,_=h.PICKLIST,g=h.MULTIPICKLIST,v=function(o){var s=o.field,u=r(o.value),l=o.filterFunction,c=o.isRequired,d=o.restrictToEntries,m=o.model,h=o.renderas,g=function(){var e=m.getRows();return l&&(e=e.filter(l)),e.map(function(e){var t=m.getRowName(e);return{label:t,value:n.inPlatform(i.NATIVE)?m.getRowId(e):t}})},v=function(e){s.model.updateRow(s.row,s.id,e,{initiatorId:s._GUID})};if("edit"===s.mode)if("COMBOBOX"===h){var k=t('<div style="position: relative;">');k.append(p(f).edit({appendDropdown:!1,entries:g,getErrorContainer:function(){var e=k.parent().find(".nx-property-error");return e.length||(e=t("<div>").addClass("nx-property-error").insertAfter(k)),e},restrictToEntries:d,showLabelInTextInput:!0,onChange:v,parentElem:k,value:u})),s.element.append(k)}else s.element.append(p(_).edit({entries:g,onChange:v,renderas:h,required:c,value:u}));else a(s)[s.mode](s,u);s._mspSubscriptions||(s._mspSubscriptions=e.events.subscribe(["models.saved","models.cancelled","models.loaded"],function(e){m.id in e.models&&s.render()}),s.unregister=function(){t.each(s._mspSubscriptions,function(){e.events.unsubscribe(this)}),s.constructor.prototype.unregister.call(this)})},k=function(e){var o=e.field,n=e.value,r=e.entries,i=e.onChange;"edit"===o.mode?o.element.html(p(_).edit({value:n,required:!0,onChange:function(t){o.model.updateRow(o.row,o.id,t,{initiatorId:o._GUID}),i&&e.onChange(t)},entries:r})):(t.each(r,function(){if(n===this.value)return n=this.label,!1}),a(o)[o.mode](o,n))},y=function(e,o,n){o=r(arguments[1]);var i={};t.extend(!0,i,e.metadata),e.metadata=i,i.picklistEntries=n,a(e,g)[e.mode](e,o)},S=function(e,o,n,i){o=r(o);var s=e.metadata;if("edit"==e.mode){s={},t.extend(!0,s,e.metadata),e.metadata=s;var u=[],l={};if(t.each(s.referenceTo,function(e,o){if(-1!=t.inArray(o.objectName,n)&&!l[o.objectName]&&(u.push(o),l[o.objectName]=1,u.length==n.length))return!1}),u.length){i&&(e.options.type="REFPICK"),s.referenceTo.length=0;var c=[];t.each(u,function(){c.push(this.objectName)}),s.ref=c.join(),s.referenceTo=u}}a(e)[e.mode](e,o),i&&(e.options.type="CUSTOM")},b=function(e){var t=e.field,o=e.value||"{}";if("edit"===t.mode){t.element.removeClass("nx-field"),t.element.css({height:e.height||"300px",width:"100%","white-space":"","font-family":""});var r=new JSONEditor(t.element.get(0),{change:function(){t.model.updateRow(t.row,t.id,JSON.parse(r.getText()),{initiatorId:t._GUID})}},n.parseAsJSONIfString(o))}else t.element.addClass("nx-field"),t.element.css({height:"",width:"","white-space":"pre","font-family":"monospace"}),o=o&&!n.isString(o)?JSON.stringify(o,null,"  "):o,a(t)[t.mode](t,o)},w=function(o){var n=o.field,r=o.value,i=o.themes,s=o.themeResources,u=o.dialogTitle||"Choose Theme";if("edit"===n.mode){var l=function(){var o=t("<div>"),a=t('<div class="themes-wrapper">');t.each(i,function(o,n){var i=t('<div data-theme="'+n.Name+'">').addClass("theme-card");n.Name===r&&i.addClass("selected");var u=t('<div class="theme-label">').text(n.Name),l=n.skuid__Resource_Namespace__c,c=n.skuid__Resource_Name__c,d=function(o,n,a){var r,i,s;return t.each(o,function(e,t){var o=t.Name===n,i=t.NamespacePrefix===a,s=!a&&!t.NamespacePrefix;if(o&&(i||s))return r=t,!1}),s=r?e.time.parseSFDateTime(r.SystemModstamp).getTime()+"/":"",r&&(i=r.NamespacePrefix),"/resource/"+s+(i?i+"__":"")+n+"/"}(s,c,l)+"screenshot.png",m=t('<div class="theme-screenshot">').append(t("<img>").attr({src:d,width:"350"}));i.append(m,u),a.append(i)}),a.on("click",".theme-card",function(){var e=t(this).data("theme");n.model.updateRow(n.row,n.id,e,{initiatorId:n._GUID}),o.dialog("close")}),o.append(a),o.dialog({width:"90%",height:600,modal:!0,title:u,close:function(){c||(n.mode="read"),n.render()}})},c=n.item.list.editor.element.is(".nx-skootable");c?n.element.append(t('<div class="nx-fieldtext">').text(r).append(t("<button>").css({cursor:"pointer","margin-left":"10px","vertical-align":"middle"}).append(t('<div class="sk-icon inline sk-icon-photoview">')).skootip("Click to change Theme").on("click",l))):l()}else a(n)[n.mode](n,r)};function R(t,o){t.row||t.model||(t.model=e.model.getModel("stng__ModelDataSources"),t.row=t.model&&t.model.getFirstRow());var n="datasource__",a=n+t.row[e.platform.getEntityFieldName("data_source","type")],r=a;e.region.get(r)||(r=t.model&&t.row&&t.model.getFieldValue(t.row,"IsSQLDataSource__ui")?n+"SQL":n+"DefaultDataSourceWizard");var i=e.snippet.get(a);i&&i({context:t}),e.region.setContentByIds(o,r)}o("AuthRequestBodyContentTypes",function(){var e=i.MIME_TYPES,t=e.JSON,o=e.FORM_URL_ENCODED;k({field:arguments[0],value:r(arguments[1]),entries:[{label:"Form Data ("+o+")",value:o},{label:"JSON ("+t+")",value:t}]})}),o("JSONEditor",function(){return b({field:arguments[0],value:r(arguments[1])})}),o("JSONEditor_Short",function(){return b({field:arguments[0],value:r(arguments[1]),height:"150px"})}),o("PasswordInput",function(e,t){a(e)[e.mode](e,r(t)),"edit"===e.mode&&e.element.find(":input").attr({type:"password",maxlength:"140"})}),o("DSNameInput",function(o,n){t=e.$,n=n||"",a(o.metadata.displaytype)[o.mode](o,r(n)),"edit"===o.mode&&o.element.find(":input").attr({maxlength:"140",autocomplete:"nope"}),t("<input>").attr({type:"text",id:"fake_username"+e.utils.generateGUID(),name:"fake_name",value:"no-autofill",style:"display:none"}).prependTo(o.element)}),o("DSPasswordInput",function(e,t){t=t||"",a(e.metadata.displaytype)[e.mode](e,r(t)),"edit"===e.mode&&e.element.find(":input").attr({type:"password",autocomplete:"new-password"})}),o("MaxLengthInput",function(e,t){a(e)[e.mode](e,r(t)),"edit"===e.mode&&e.element.find(":input").attr({maxlength:"140"})}),o("ThemePicker_Composer_Desktop",function(t,o){w({field:t,value:o,themes:e.$M("stng__Themes_Desktop").getRows([{field:l.name,operator:"in",values:["Composer Light","Composer Dark","Builder Light","Builder Dark"],type:"multiple"}]),themeResources:e.$M("stng__DesktopThemeResources").getRows(),dialogTitle:"Choose Desktop Composer Theme"})}),o("ThemePicker_Composer_Mobile",function(o,n){return v({field:o,value:n,isRequired:!0,model:e.$M("stng__Themes_Mobile"),filterFunction:function(e){return"Mobile"===e.skuid__Type__c&&-1!==t.inArray(e.Name,["MobileClassic"])}})}),o("ThemePicker_Desktop",function(t,o){w({field:t,value:o,themes:e.$M("stng__Themes_Desktop").getRows([{field:e.platform.getEntityFieldName("theme","name"),operator:"not in",values:["Composer Light","Composer Dark"],type:"multiple"},{field:e.platform.getEntityFieldName("theme","active"),value:!0}]),themeResources:e.$M("stng__DesktopThemeResources").getRows()})}),o("ThemePicker_Mobile",function(t,o){w({field:t,value:o,themes:e.$M("stng__Themes_Mobile").getRows([{field:e.platform.getEntityFieldName("theme","active"),value:!0}]),themeResources:e.$M("stng__MobileThemeResources").getRows()})}),o("ThemeTypePicklist",function(){var e=arguments[0],t=r(arguments[1]);"edit"===e.mode?e.element.html(p(_).edit({value:t,required:!0,onChange:function(t){e.model.updateRow(e.row,e.id,t)},entries:[{label:"Desktop",value:"Desktop"},{label:"Mobile",value:"Mobile"}]})):a(e)[e.mode](e,t)}),o("ModelDataSourcePrepareAdvSettingsRegion",function(e){R(e&&e.context?e.context:{},"region_datasource_advsettings")}),o("ModelDataSourcePrepareNewRegion",function(e){R(e,"region_datasource_new")}),o("ServiceAccessMethod",function(){var e=arguments[0],t=e.row,o=[{label:"Unrestricted (Anyone can use)",value:"any"}];e.model.getFieldValue(t,"skuid__Use_Apex_Proxy__c")&&o.push({label:"Require Named Permission",value:"namedperm"}),k({field:arguments[0],value:r(arguments[1]),entries:o})}),o("stng__CustomPermissionsPicklist",function(){var o=[];t.each(e.$M("stng__CustomPermissions").data,function(e,t){var n=(t.NamespacePrefix?t.NamespacePrefix+"__":"")+t.DeveloperName,a=t.MasterLabel+(t.NamespacePrefix?" ("+t.NamespacePrefix+")":"");o.push({value:n,label:a,active:!0,defaultValue:0===e})}),k({field:arguments[0],value:r(arguments[1]),entries:o,required:!0})});var P='{"Authorization":"Bearer {{$Auth.Response.Body.access_token}}"}',C={salesforce:{label:"Salesforce",value:s,authorizationUrl:"https://<My Domain>.my.salesforce.com/services/oauth2/authorize",tokenUrl:"https://<My Domain>.my.salesforce.com/services/oauth2/token",requestHeaders:P,tokenRequestBodyParams:"{}",defaultScopes:"api,refresh_token"},sharepointonline:{label:"SharePoint Online",value:"sharepointonline",authorizationUrl:"https://<Company Name>.sharepoint.com/<Site Collection Path>_layouts/15/OauthAuthorize.aspx",tokenUrl:"https://accounts.accesscontrol.windows.net/<Company Name>.onmicrosoft.com/tokens/OAuth/2",tokenRequestBodyParams:'{"resource":"00000003-0000-0ff1-ce00-000000000000/<Company Name>.sharepoint.com@<Company Name>.onmicrosoft.com"}',requestHeaders:P},google:{label:"Google",value:"google",authorizationUrl:"https://accounts.google.com/o/oauth2/auth?access_type=offline",tokenUrl:"https://accounts.google.com/o/oauth2/token",requestHeaders:P,tokenRequestBodyParams:"{}",defaultScopes:"https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/calendar"},outlook:{label:"Outlook",value:"outlook",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https%3A%2F%2Foutlook.office.com%2F",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:P,tokenRequestBodyParams:"{}",defaultScopes:"https://outlook.office.com/mail.send,https://outlook.office.com/mail.readwrite.all,https://outlook.office.com/calendars.readwrite.all,https://outlook.office.com/tasks.readwrite.all"},github:{label:"Github",value:"github",authorizationUrl:"https://github.com/login/oauth/authorize",tokenUrl:"https://github.com/login/oauth/access_token",requestHeaders:P,tokenRequestBodyParams:"{}"},facebook:{label:"Facebook",value:"facebook",authorizationUrl:"https://www.facebook.com/dialog/oauth/",tokenUrl:"https://graph.facebook.com/oauth/access_token",requestHeaders:P,tokenRequestBodyParams:"{}"},dropbox:{label:"Dropbox",value:"dropbox",authorizationUrl:"https://www.dropbox.com/1/oauth2/authorize",tokenUrl:"https://api.dropbox.com/1/oauth2/token",requestHeaders:P,tokenRequestBodyParams:"{}"},slack:{label:"Slack",value:"slack",authorizationUrl:"https://slack.com/oauth/authorize",tokenUrl:"https://slack.com/api/oauth.access",requestHeaders:'{"Authorization":"Bearer {{$Auth.Response.Body.token}}"}',defaultScopes:"identify,client",tokenRequestBodyParams:"{}"},box:{label:"Box",value:"box",authorizationUrl:"https://account.box.com/api/oauth2/authorize",tokenUrl:"https://api.box.com/oauth2/token",requestHeaders:P,defaultScopes:"",tokenRequestBodyParams:"{}"},onedrive:{label:"Microsoft OneDrive",value:"onedrive",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https://<My Domain>-my.sharepoint.com",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:P,defaultScopes:"MyFiles.Read,MyFiles.Write",tokenRequestBodyParams:"{}"},msexcel:{label:"Microsoft Excel",value:"msexcel",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https://graph.microsoft.com",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:P,defaultScopes:"MyFiles.Read,MyFiles.Write",tokenRequestBodyParams:"{}"},msdynamics:{label:"Microsoft Dynamics",value:"msdynamics",authorizationUrl:"https://login.windows.net/common/oauth2/authorize?resource=https%3A%2F%2Fskuidify.api.crm.dynamics.com%2F",tokenUrl:"https://login.windows.net/common/oauth2/token",requestHeaders:P,tokenRequestBodyParams:"{}"},docusign:{label:"DocuSign",value:"docusign",authorizationUrl:"https://account.docusign.com/oauth/auth",tokenUrl:"https://account.docusign.com/oauth/token",requestHeaders:P,tokenRequestBodyParams:"{}"},servicenow:{label:"ServiceNow",value:"servicenow",authorizationUrl:"https://account.service-now.com/oauth_auth.do",tokenUrl:"https://account.service-now.com/oauth_token.do",requestHeaders:P,tokenRequestBodyParams:"{}"},intuit_quickbooks:{value:"intuit_quickbooks",label:"QuickBooks",authorizationUrl:"https://appcenter.intuit.com/connect/oauth2",tokenUrl:"https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",defaultScopes:"com.intuit.quickbooks.accounting",requestHeaders:{Accept:"application/json;charset=UTF-8","Content-Type":"application/json",Authorization:"Bearer {{$Auth.Response.Body.access_token}}"},tokenRequestBodyParams:"{}"},other:{label:"Other",value:"other",authorizationUrl:"",tokenUrl:"",requestHeaders:P,tokenRequestBodyParams:"{}"}};o("AuthProviderTypesPicklist",function(){return t.map(C,function(e){return{value:e.value,label:e.label}}).sort(function(e,t){return e.label.localeCompare(t.label)})}),o("skuid.settings.onAuthProviderTypeChange",function(e){var o=e.model,a=e.row,r=o.getFieldValue(a,d.oauth_provider_type,!0),i=C[r],s={};t.each({authorizationUrl:d.authorize_endpoint_url,tokenUrl:d.token_endpoint_url,requestHeaders:d.request_headers,tokenRequestBodyParams:d.token_request_body_parameters,clientId:d.client_id,clientSecret:d.client_secret,customCallbackUrl:d.custom_callback_url,defaultScopes:d.default_scopes},function(e,t){i?t&&(s[t]=i.hasOwnProperty(e)?i[e]:""):s[t]=""}),n.size(s)&&o.updateRow(a,s)}),o("AuthProviderApexClasses",function(){var e=arguments[0],t=r(arguments[1]);S(e,t,["ApexClass"],!1)}),o("AuthProviderPicklist",function(t,o,n){var a=t.row,i=a[c.authentication],u=a[c.type];return v({field:t,value:r(o),isRequired:!1,model:e.$M("stng__AuthProviders"),filterFunction:function(e){var t=e[d.auth_method]||"oauth2";return u===s?e[d.oauth_provider_type]===s:a.NeedsAWSKeysAuthProvider__ui?"aws_keys"===t:"provider"===i&&("apex"!==t||"Sharepoint"===u&&"apex"===t)},renderas:n?n.renderas:null})}),o("AuthProviderPicklist_Radio",function(){e.snippet.get("AuthProviderPicklist")(arguments[0],arguments[1],{renderas:"RADIO_BUTTONS"})}),o("PackagesMultipicklist",function(o,n){var a=[];t.each(e.$M("stng__Packages").data,function(e,t){a.push({value:t.NamespacePrefix,label:t.NamespacePrefix,active:!0,defaultValue:0===e})}),y(o,n,a)}),o("stng__PermissionSetsMultipicklist",function(o,n){var a=[];t.each(e.$M("stng__AllPermissionSets").data,function(e,t){var o=(t.NamespacePrefix?t.NamespacePrefix+"__":"")+t.Name,n=t.Label+(t.NamespacePrefix?" ("+t.NamespacePrefix+")":"");a.push({value:o,label:n,active:!0,defaultValue:0===e})}),y(o,n,a)}),o("ProfileLookup",function(e,t){S(e,t,["Profile"],!1)}),o("UserOrProfileLookup",function(e,t){S(e,t,["User","Profile"],!1)});var D=function(e){return JSON.stringify(e,void 0,3)};o("skuid.loadJSZip",function(){var o=t.Deferred();return"undefined"!=typeof JSZip?o.resolve():n.loadJS(e.platform.getResourceUrl({name:"lib/jSZip.js",namespace:"skuid"}),function(){o.resolve()}),o.promise()}),o("skuid.newComponentPackPreSave",function(){var o=arguments[0],n=t.Deferred(),a=o.row,r=o.model,i=a.skuid__Resource_Name__c,s=a.Name,u=s+("Mobile"==a.skuid__Type__c?"Mobile":"")+"Components",l=1,c=!1;if(t.each(r.getRows(),function(){this.skuid__Load_Order__c&&this.skuid__Load_Order__c>l&&(l=this.skuid__Load_Order__c+1)}),r.updateRow(a,{skuid__Load_Order__c:l}),t.each(r.registeredLists,function(e,t){if(t.validateRequiredFields().length)return c=!0,!1}),c)return n.reject(),!1;var d={id:s,components:[{id:"sayhello"}],js:[{path:"runtime.js"}],css:[{path:"runtime.css"}]},m={id:s,components:[{id:"sayhello",folderId:s}],folders:[{id:s,name:i,icon:"sk-icon-component-pack"}],js:[{path:"builders.js"}],css:[{path:"builders.css"}]},p='(function(skuid){\n\tskuid.componentType.register("'+s+'__sayhello",function(element,xmlDef){\n\t\telement.addClass("hello-content").html("<b>Hello " + xmlDef.attr("person") + "</b>");\n\t});\n})(skuid);',h='(function($) {\n\tskuid.builder.core.registerBuilder(new skuid.builder.core.Builder({\n\t\tid: "'+s+'__sayhello",\n\t\tname: "Say Hello",\n\t\ticon: "sk-icon-contact",\n\t\tdescription: "This component says Hello to someone",\n\t\tcomponentRenderer: function(component) {\n\t\t\tcomponent.setTitle(component.builder.name);\n\t\t\tcomponent.body.html(\n\t\t\t\t"<div class=\'hello-content\'>Hello " + component.state.attr("person") + "!</div>"\n\t\t\t);\n\t\t},\n\t\tmobileRenderer: function(component) {\n\t\t\tcomponent.setTitle(component.builder.name);\n\t\t\tcomponent.body.html(\n\t\t\t\t"<div class=\'hello-content\'>Hello " + component.state.attr("person") + "!</div>"\n\t\t\t);\n\t\t},\n\t\tpropertiesRenderer: function (propertiesObj,component) {\n\t\t\tpropertiesObj.setTitle("Say Hello Component Properties");\n\t\t\tvar state = component.state;\n\t\t\tvar propCategories = [];\n\t\t\tvar propsList = [\n\t\t\t\t{\n\t\t\t\t\tid: "person",\n\t\t\t\t\ttype: "string",\n\t\t\t\t\tlabel: "Person to say Hello to",\n\t\t\t\t\thelptext: "Pick a name, any name!",\n\t\t\t\t\tonChange: function(){\n\t\t\t\t\t\tcomponent.refresh();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t];\n\t\t\tpropCategories.push({\n\t\t\t\tname: "",\n\t\t\t\tprops: propsList,\n\t\t\t});\n\t\t\tif(skuid.mobile) propCategories.push({ name : "Remove", props : [{ type : "remove" }] });\n\t\t\tpropertiesObj.applyPropsWithCategories(propCategories,state);\n\t\t},\n\t\tdefaultStateGenerator : function() {\n\t\t\treturn skuid.utils.makeXMLDoc("<'+s+"__sayhello person='"+e.utils.userInfo.firstName+"' />\");\n\t\t}\n\t}));\n})(skuid);\n",f=new JSZip;f.file("skuid_runtime.json",D(d)),f.file("skuid_builders.json",D(m)),f.file("runtime.js",p),f.file("builders.js",h),f.file("runtime.css",".hello-content {\n\tcolor: black;\n\tfont-size: 18pt;\n}"),f.file("builders.css",".hello-content {\n\tcolor:black;\n\tfont-size: 18pt;\n}");var _=f.generate({type:"base64",compression:"DEFLATE"}),g={Name:u,ContentType:"application/zip",Body:_,CacheControl:"Public"};return t.ajax({type:"POST",url:"/services/data/v34.0/sobjects/StaticResource",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.utils.userInfo.sessionId},data:JSON.stringify(g),dataType:"json",success:function(){r.updateRow(a,{skuid__Resource_Name__c:u}),n.resolve()},error:function(){n.reject()}}),n.promise()}),o("skuid.settings.newModelDataSource.checkForRemoteSite",function(){var o=arguments[0],a=o.model,r=o.row;a&&"stng__ModelDataSources"===a.id||(a=e.$M("stng__ModelDataSources")),r&&a.getRowById(a.getRowId(r))||(r=a.getFirstRow());var i=a.getFieldValue(r,"skuid__URL__c",!0),s=a.getFieldValue(r,"skuid__Use_Apex_Proxy__c",!0),u=!1,l=m.getOriginFromUrl(i);t.each(e.$M("stng__AuthProviders").getRows(),function(e,t){var o=t.skuid__Authorize_Endpoint_URL__c,a=t.skuid__Token_Endpoint_URL__c;if(n.startsWith(o,l)||n.startsWith(a,l))return u=!0,!1});var c=s&&!u,d=a.getFieldValue(r,"Name",!0);return c?m.checkForRemoteSiteSetting(i,d):(t.unblockUI(),!0)}),o("skuid.settings.newAuthProvider.checkForRemoteSites",function(){var o=arguments[0],n=o.model,a=o.row;n&&"stng__AuthProviders"===n.id||(n=e.$M("stng__AuthProviders")),a&&n.getRowById(n.getRowId(a))||(a=n.getFirstRow());var r={},i=t.map(["skuid__Authorize_Endpoint_URL__c","skuid__Token_Endpoint_URL__c","skuid__User_Info_Endpoint_URL__c"],function(e){var t=n.getFieldValue(a,e,!0),o=!!t&&m.getOriginFromUrl(t);if(o&&!r[o])return r[o]=1,o});if(!i.length||!window.confirm("In order for Skuid to authenticate using this Auth Provider, you will need to create Salesforce Remote Site Settings for the following URL(s):\n\n - "+i.join("\n - ")+"\n\nWould you like Skuid to try to see if the necessary Remote Site Settings corresponding to these URL(s) already exist, and if not, create them for you?"))return t.unblockUI(),!0;var s=n.getFieldValue(a,"Name",!0);s&&(s=s.replace(/[\W]+/g,""));var u="For Skuid to authenticate using Auth Provider "+s,l=[];t.each(i,function(e,t){l.push(n.getDataSourceType().addRemoteSiteSetting({dataSource:n.getDataSource(),description:u,url:t}))}),t.blockUI({message:"Attempting to create Remote Site Settings for "+i.length+" URL(s) ..."}),t.when.all(l).done(function(){t.blockUI({message:i.length+" Remote Site Setting(s) have successfully been created!",timeout:2e3})}).fail(function(e){t.blockUI({message:"There was a problem creating the Remote Site Setting(s) for these URL(s):<br/><br/>"+e,timeout:3e3})})}),o("skuid.importComponentPack",function(){var t,o=e.$,n=arguments[0],a=o.Deferred(),r=n.apiExtensions.$Result.body;return o.ajax({url:"/componentpacks/"+r.name+"/skuid_builders.json",type:"GET",contentType:"application/json"}).fail(function(){return a.reject("The uploaded file is not a valid Skuid Component Pack. skuid_builders.json not found.")}).then(function(e){return e.id?(t=e.id,o.ajax({url:"/componentpacks/"+r.name+"/skuid_runtime.json",type:"GET",contentType:"application/json"}).fail(function(){return a.reject("The uploaded file is not a valid Skuid Component Pack. skuid_runtime.json not found.")})):a.reject("Property id required in skuid_builders.json for import")}).then(function(o){if(!o.id)return a.reject("Property id required in skuid_runtime.json for import");if(o.id!==t)return a.reject("Property id must be consistant between skuid_runtime.json and skuid_builders.json");var n=e.$M("stng__ComponentPacks_Existing");return n.setCondition(n.getConditionByName("packName"),o.id),t=o.id,n.updateData()}).then(function(){var o=e.$M("stng__ComponentPacks_Existing"),n=e.$M("stng__ComponentPacks"),a=o.getFirstRow(),i=n;if(a)(i=o).updateRow(a,{file_id:r.id,resource_name:r.name});else{var s=0;n.getRows().length&&n.getRows().forEach(function(e){var t=n.getFieldValue(e,"load_order",!0);t>s&&(s=t)}),i.updateRow(n.createRow(),{name:t,file_id:r.id,resource_name:r.name,active:!0,load_order:s+1})}return i.save()}).then(function(t){if(t.messages&&t.messages.length){var n=o('<div id="componentImportErrors" class="nx-error">');return n.prependTo(o("#importUploadTitle")),n.empty(),o.each(t.messages,function(e,t){n.append("<div>"+t+"</div>")}),e.$M("stng__ComponentPacks").cancel(),a.reject()}a.resolve()}),a}),o("skuid.settings.copyPrefsFromOrgDefault",function(){var o=arguments[0],a=o.row,r=o.model,i=e.$M("stng__OrgPreferences"),s=i.getFirstRow(),u={};t.each(i.fields,function(){n.startsWith(this.id,"skuid__")&&"skuid__Use_Component_Packs__c"!==this.id&&(u[this.id]=i.getFieldValue(s,this.id,!0))}),r.updateRow(a,u,{initiatorId:o.initiatorId})}),o("skuid.crypt.generateKey",function(o){var n=o.model,a=o.row,r=t.Deferred();return e.SkuidSettingsController.generateNewSkuidCryptKey(function(e){e&&"string"==typeof e?(n.updateRow(a,"skuid__Key__c",e),r.resolve()):r.reject()}),r.promise()});var T={};o("skuid.settings.changeDataSourceWithCreds",function(e){var o=e.model,a=e.row,r=o.getFieldValue(a,"Id"),i=o.getFieldValue(a,"StoredCredCount__ui"),s={};t.each(e.updates,function(e,t){!0!==o.getField(e).uiOnly&&(s[e]=t)}),void 0===T[r]&&n.size(s)&&i&&(T[r]=!0,window.confirm("WARNING: This Data Source has stored Data Source Credentials. For security reasons, Data Sources with stored credentials cannot be changed. If you proceed, the records will automatically be deleted, but your changes will not be saved and the Data Source will be unavailable until the process completes. \n\nWould you like proceed?")||(o.cancelRowChanges(a),delete T[r]))}),o("skuid.settings.clearDataSourceChangeWarnings",function(){T={}}),o("skuid.settings.newDataSourceWizard.navigateToStep.newAuthProvider",function(){var t=e.$C("salesforce_NewModelDataSourceWizard")||e.$C("NewModelDataSourceWizard");t&&t.navigate("newAuthProvider_salesforce")});var x="ODATA_ON_PLATFORM",U="SALESFORCE_ON_PLATFORM",M="SALESFORCE_ON_SALESFORCE";function N(e){var t=!1;return!0===e.ODataBase__ui&&(t=x),!0===e.IsSalesforceDataSource__ui&&(t=U),1==e.IsSalesforceService__ui&&(t=M),t}function A(e){var t=e.model,o=t&&t.getDataSourceType(),n=e&&e.targetUrl||window.top.location.protocol+"//"+window.top.location.hostname+"/";return o.addRemoteSiteSetting({dataSource:t.getDataSource(),url:n,description:"For Skuid to access the Metadata API"})}o("skuid.settings.dataSourceMetadata.enableCache",function(o){var a,r,i=t.Deferred(),s=[];if(o.row?s.push(o.row):o.insertResults&&o.insertResults.length&&o.insertResults[0].success&&s.push(o.insertResults[0].record),!s.length)return i.reject().promise();var u=s.filter(function(e){r=e.name?e.name:e.Name;var t=e.type?e.type:r;return r&&t&&N(e)});if(!u.length)return i.reject().promise();a=u[0],r=a.name?a.name:a.Name;var l=N(a);if(l===x)var c=setTimeout(function(){t.blockUI({message:"Loading metadata for Data Source..."})},10);function d(e,o){return t.blockUI({message:"Parsing and caching metadata..."}),t.ajax({url:"/api/v1/datasource-metadata?datasource="+e,method:"POST",data:JSON.stringify(o),contentType:"application/json"})}return e.loader.service.loadDataSourceAndDependencies(r).then(function(e){switch(l){case x:return function(e){var t=e.name;return delete e._metadataCacheVersion,delete e.metadata,e.dataSourceType.authenticateAndGetMetadata({dataSource:e,minimalOnly:!0}).then(function(e){return d(t,e)}).then(function(e){i.resolve(e)},function(e){var t;n.isString(e)?t=e:e&&e.response&&e.response.body&&(t=e.response.body),i.reject({$PreviousAction:{Error:t}})})}(e);case U:return function(e){var t=e.name,o=Date.now();return e._metadataCacheVersion=o,d(t).then(function(e){i.resolve(e)})}(e);case M:return function(e,o){t.blockUI({message:"Setting Metadata Cache... Please save to retain changes.",timeout:4e3});var n=Date.now();o.updateRow(e,{skuid__Cache_Time_Stamp__c:n+""})}(a,o.model)}}).catch(function(){return c&&clearTimeout(c),i.reject({$PreviousAction:{Error:"You do not have access to this Data Source."}})}),i.promise()}),o("skuid.settings.dataSourceMetadata.disableCache",function(o){var n=t.Deferred(),a=o.row,r=o.model;if(N(a)!==M)return(t=e.$).ajax({url:"/api/v1/datasource-metadata?datasource="+a.name,method:"DELETE"});return t.blockUI({message:"Disabling Metadata Caching... Please save to retain changes.",timeout:4e3}),e.loader.service.loadDataSourceAndDependencies(a.Name).then(function(){if(a.IsSalesforceService__ui)return function(e,t){t.updateRow(e,{skuid__Cache_Time_Stamp__c:null})}(a,r)}).catch(function(){return n.reject({$PreviousAction:{Error:"You do not have access to this Data Source."}})}),n.promise()}),o("skuid.settings.addCurrentOrgToRemoteSiteSettings",A),o("skuid.settings.syncAppManifest",function t(o){return e.remote.promisify(e.SkuidSettingsController,"syncAppManifest").then(function(a){var r=e.$M("stng__ApexJobStatus");return a.indexOf("Remote Site Setting")>-1?A({model:o?o.model:null,targetUrl:a.substring(a.indexOf("https://"))}).then(t):function e(){return r.updateConditionValue({value:a}),n.delay(2e3).then(function(){return r.load()}).then(function(){var t=r.getFirstRow(),o=r.getFieldValue(t,"Status");return"Completed"===o?n.resolve({$PreviousAction:{result:a}}):"Failed"===o||"Aborted"===o?n.reject({$PreviousAction:{result:a}}):e()})}().then(function(){return{$PreviousAction:{result:a}}})}).catch(function(e){throw{$PreviousAction:{error:e}}})})}(skuid)}});