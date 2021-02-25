!function(o){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=347)}({347:function(e,t,o){"use strict";function F(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}!function(g){var v=g.$,e=g.snippet.register,d=g.utils,p=g.ui.getFieldRenderer,m=d.decodeHTML,_=d.reject,h=g.constants,a=h.SALESFORCE,t=g.platform.getEntityFieldNames,k=t("component_pack"),o=t("theme"),s=t("data_source"),u=t("auth_provider"),c=g.skuidPageUtils,f=g.ui.getRenderer,n=h.DISPLAY_TYPES,y=n.COMBOBOX,b=n.PICKLIST,i=n.MULTIPICKLIST,r=["Composer Dark","Composer Light","Builder Light","Builder Dark"],l=function(e){var t=e.field,o=m(e.value),n=e.filterFunction,i=e.isRequired,r=e.restrictToEntries,a=e.model,s=e.renderas,u=function(){var e=a.getRows();return n&&(e=e.filter(n)),e.map(function(e){var t=a.getRowName(e);return{label:t,value:d.inPlatform(h.NATIVE)?a.getRowId(e):t}})},l=function(e){t.model.updateRow(t.row,t.id,e,{initiatorId:t._GUID})};if("edit"===t.mode)if("COMBOBOX"===s){var c=v('<div style="position: relative;">');c.append(f(y).edit({appendDropdown:!1,entries:u,getErrorContainer:function(){var e=c.parent().find(".nx-property-error");return e.length||(e=v("<div>").addClass("nx-property-error").insertAfter(c)),e},restrictToEntries:r,showLabelInTextInput:!0,onChange:l,parentElem:c,value:o})),t.element.append(c)}else t.element.append(f(b).edit({entries:u,onChange:l,renderas:s,required:i,value:o}));else p(t)[t.mode](t,o);t._mspSubscriptions||(t._mspSubscriptions=g.events.subscribe(["models.saved","models.cancelled","models.loaded"],function(e){a.id in e.models&&t.render()}),t.unregister=function(){v.each(t._mspSubscriptions,function(){g.events.unsubscribe(this)}),t.constructor.prototype.unregister.call(this)})},S=function(t){var o=t.field,e=t.value,n=t.entries,i=t.onChange;"edit"===o.mode?o.element.html(f(b).edit({value:e,required:!0,onChange:function(e){o.model.updateRow(o.row,o.id,e,{initiatorId:o._GUID}),i&&t.onChange(e)},entries:n})):(v.each(n,function(){if(e===this.value)return e=this.label,!1}),p(o)[o.mode](o,e))},w=function(e,t,o){t=m(arguments[1]);var n={};v.extend(!0,n,e.metadata),(e.metadata=n).picklistEntries=o,p(e,i)[e.mode](e,t)},P=function(e,t,o,n){t=m(t);var i=e.metadata;if("edit"==e.mode){i={},v.extend(!0,i,e.metadata),e.metadata=i;var r=[],a={};if(v.each(i.referenceTo,function(e,t){if(-1!=v.inArray(t.objectName,o)&&!a[t.objectName]&&(r.push(t),a[t.objectName]=1,r.length==o.length))return!1}),r.length){n&&(e.options.type="REFPICK"),i.referenceTo.length=0;var s=[];v.each(r,function(){s.push(this.objectName)}),i.ref=s.join(),i.referenceTo=r}}p(e)[e.mode](e,t),n&&(e.options.type="CUSTOM")},R=function(e){var t=e.field,o=e.value||"{}";if("edit"===t.mode){t.element.removeClass("nx-field"),t.element.css({height:e.height||"300px",width:"100%","white-space":"","font-family":""});var n=new JSONEditor(t.element.get(0),{change:function(){t.model.updateRow(t.row,t.id,JSON.parse(n.getText()),{initiatorId:t._GUID})}},d.parseAsJSONIfString(o))}else t.element.addClass("nx-field"),t.element.css({height:"",width:"","white-space":"pre","font-family":"monospace"}),o=o&&!d.isString(o)?JSON.stringify(o,null,"  "):o,p(t)[t.mode](t,o)},C=function(e){var o=e.field,l=e.value,n=e.themes,c=e.themeResources,i=e.dialogTitle||"Choose Theme";if("edit"===o.mode){var t=function(){var t=v("<div>"),u=v('<div class="themes-wrapper">');v.each(n,function(e,t){var o=v('<div data-theme="'+t.Name+'">').addClass("theme-card");t.Name===l&&o.addClass("selected");var n=v('<div class="theme-label">').text(t.Name),i=t.skuid__Resource_Namespace__c,r=t.skuid__Resource_Name__c,a=function(e,r,a){var s,t,o;return v.each(e,function(e,t){var o=t.Name===r,n=t.NamespacePrefix===a,i=!a&&!t.NamespacePrefix;if(o&&(n||i))return s=t,!1}),o=s?g.time.parseSFDateTime(s.SystemModstamp).getTime()+"/":"",s&&(t=s.NamespacePrefix),"/resource/"+o+(t?t+"__":"")+r+"/"}(c,r,i)+"screenshot.png",s=v('<div class="theme-screenshot">').append(v("<img>").attr({src:a,width:"350"}));o.append(s,n),u.append(o)}),u.on("click",".theme-card",function(){var e=v(this).data("theme");o.model.updateRow(o.row,o.id,e,{initiatorId:o._GUID}),t.dialog("close")}),t.append(u),t.dialog({width:"90%",height:600,modal:!0,title:i,close:function(){r||(o.mode="read"),o.render()}})},r=o.item.list.editor.element.is(".nx-skootable");r?o.element.append(v('<div class="nx-fieldtext">').text(l).append(v("<button>").css({cursor:"pointer","margin-left":"10px","vertical-align":"middle"}).append(v('<div class="sk-icon inline sk-icon-photoview">')).skootip("Click to change Theme").on("click",t))):t()}else p(o)[o.mode](o,l)};function T(e,t){e.row||e.model||(e.model=g.model.getModel("stng__ModelDataSources"),e.row=e.model&&e.model.getFirstRow());var o="datasource__",n=o+e.row[s.type],i=n;g.region.get(i)||(i=e.model&&e.row&&e.model.getFieldValue(e.row,"IsSQLDataSource__ui")?o+"SQL":o+"DefaultDataSourceWizard");var r=g.snippet.get(n);r&&r({context:e}),g.region.setContentByIds(t,i)}e("AuthRequestBodyContentTypes",function(){var e=h.MIME_TYPES,t=e.JSON,o=e.FORM_URL_ENCODED;S({field:arguments[0],value:m(arguments[1]),entries:[{label:"Form Data ("+o+")",value:o},{label:"JSON ("+t+")",value:t}]})}),e("JSONEditor",function(){return R({field:arguments[0],value:m(arguments[1])})}),e("JSONEditor_Short",function(){return R({field:arguments[0],value:m(arguments[1]),height:"150px"})}),e("PasswordInput",function(e,t){p(e)[e.mode](e,m(t)),"edit"===e.mode&&e.element.find(":input").attr({type:"password",maxlength:"140"})}),e("DSNameInput",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";p(e.metadata.displaytype)[e.mode](e,m(t)),"edit"===e.mode&&e.element.find(":input").attr({maxlength:"140",autocomplete:"nope"}),v("<input>").attr({type:"text",id:"fake_username"+g.utils.generateGUID(),name:"fake_name",value:"no-autofill",style:"display:none"}).prependTo(e.element)}),e("DSPasswordInput",function(e,t){t=t||"",p(e.metadata.displaytype)[e.mode](e,m(t)),"edit"===e.mode&&e.element.find(":input").attr({type:"password",autocomplete:"new-password"})}),e("MaxLengthInput",function(e,t){p(e)[e.mode](e,m(t)),"edit"===e.mode&&e.element.find(":input").attr({maxlength:"140"})}),e("ThemePicker_Composer_Desktop",function(e,t){C({field:e,value:t,themes:g.$M("stng__Themes_Desktop").getRows([{field:o.name,operator:"in",values:r,type:"multiple"}]),themeResources:g.$M("stng__DesktopThemeResources").getRows(),dialogTitle:"Choose Desktop Composer Theme"})}),e("ThemePicker_Composer_Mobile",function(e,t){return l({field:e,value:t,isRequired:!0,model:g.$M("stng__Themes_Mobile"),filterFunction:function(e){return"Mobile"===e.skuid__Type__c&&-1!==v.inArray(e.Name,["MobileClassic"])}})}),e("ThemePicker_Desktop",function(e,t){C({field:e,value:t,themes:g.$M("stng__Themes_Desktop").getRows([{field:o.name,operator:"not in",values:r,type:"multiple"},{field:o.active,value:!0}]),themeResources:g.$M("stng__DesktopThemeResources").getRows()})}),e("ThemePicker_Mobile",function(e,t){C({field:e,value:t,themes:g.$M("stng__Themes_Mobile").getRows([{field:o.active,value:!0}]),themeResources:g.$M("stng__MobileThemeResources").getRows()})}),e("ThemeTypePicklist",function(){var t=arguments[0],e=m(arguments[1]);"edit"===t.mode?t.element.html(f(b).edit({value:e,required:!0,onChange:function(e){t.model.updateRow(t.row,t.id,e)},entries:[{label:"Desktop",value:"Desktop"},{label:"Mobile",value:"Mobile"}]})):p(t)[t.mode](t,e)}),e("ModelDataSourcePrepareAdvSettingsRegion",function(e){T(e&&e.context?e.context:{},"region_datasource_advsettings")}),e("ModelDataSourcePrepareNewRegion",function(e){T(e,"region_datasource_new")}),e("ServiceAccessMethod",function(){var e=arguments[0],t=e.row,o=[{label:"Unrestricted (Anyone can use)",value:"any"}];e.model.getFieldValue(t,"skuid__Use_Apex_Proxy__c")&&o.push({label:"Require Named Permission",value:"namedperm"}),S({field:arguments[0],value:m(arguments[1]),entries:o})}),e("stng__CustomPermissionsPicklist",function(){var i=[];v.each(g.$M("stng__CustomPermissions").data,function(e,t){var o=(t.NamespacePrefix?t.NamespacePrefix+"__":"")+t.DeveloperName,n=t.MasterLabel+(t.NamespacePrefix?" ("+t.NamespacePrefix+")":"");i.push({value:o,label:n,active:!0,defaultValue:0===e})}),S({field:arguments[0],value:m(arguments[1]),entries:i,required:!0})});var x='{"Authorization":"Bearer {{$Auth.Response.Body.access_token}}"}',D={salesforce:{label:"Salesforce",value:a,authorizationUrl:"https://<My Domain>.my.salesforce.com/services/oauth2/authorize",tokenUrl:"https://<My Domain>.my.salesforce.com/services/oauth2/token",requestHeaders:x,tokenRequestBodyParams:"{}",defaultScopes:"api,refresh_token"},sharepointonline:{label:"SharePoint Online",value:"sharepointonline",authorizationUrl:"https://<Company Name>.sharepoint.com/<Site Collection Path>_layouts/15/OauthAuthorize.aspx",tokenUrl:"https://accounts.accesscontrol.windows.net/<Company Name>.onmicrosoft.com/tokens/OAuth/2",tokenRequestBodyParams:'{"resource":"00000003-0000-0ff1-ce00-000000000000/<Company Name>.sharepoint.com@<Company Name>.onmicrosoft.com"}',requestHeaders:x},google:{label:"Google",value:"google",authorizationUrl:"https://accounts.google.com/o/oauth2/auth?access_type=offline",tokenUrl:"https://accounts.google.com/o/oauth2/token",requestHeaders:x,tokenRequestBodyParams:"{}",defaultScopes:"https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/calendar"},outlook:{label:"Outlook",value:"outlook",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https%3A%2F%2Foutlook.office.com%2F",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:x,tokenRequestBodyParams:"{}",defaultScopes:"https://outlook.office.com/mail.send,https://outlook.office.com/mail.readwrite.all,https://outlook.office.com/calendars.readwrite.all,https://outlook.office.com/tasks.readwrite.all"},github:{label:"Github",value:"github",authorizationUrl:"https://github.com/login/oauth/authorize",tokenUrl:"https://github.com/login/oauth/access_token",requestHeaders:x,tokenRequestBodyParams:"{}"},facebook:{label:"Facebook",value:"facebook",authorizationUrl:"https://www.facebook.com/dialog/oauth/",tokenUrl:"https://graph.facebook.com/oauth/access_token",requestHeaders:x,tokenRequestBodyParams:"{}"},dropbox:{label:"Dropbox",value:"dropbox",authorizationUrl:"https://www.dropbox.com/1/oauth2/authorize",tokenUrl:"https://api.dropbox.com/1/oauth2/token",requestHeaders:x,tokenRequestBodyParams:"{}"},slack:{label:"Slack",value:"slack",authorizationUrl:"https://slack.com/oauth/authorize",tokenUrl:"https://slack.com/api/oauth.access",requestHeaders:'{"Authorization":"Bearer {{$Auth.Response.Body.token}}"}',defaultScopes:"identify,client",tokenRequestBodyParams:"{}"},box:{label:"Box",value:"box",authorizationUrl:"https://account.box.com/api/oauth2/authorize",tokenUrl:"https://api.box.com/oauth2/token",requestHeaders:x,defaultScopes:"",tokenRequestBodyParams:"{}"},onedrive:{label:"Microsoft OneDrive",value:"onedrive",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https://<My Domain>-my.sharepoint.com",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:x,defaultScopes:"MyFiles.Read,MyFiles.Write",tokenRequestBodyParams:"{}"},msexcel:{label:"Microsoft Excel",value:"msexcel",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https://graph.microsoft.com",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:x,defaultScopes:"MyFiles.Read,MyFiles.Write",tokenRequestBodyParams:"{}"},msdynamics:{label:"Microsoft Dynamics",value:"msdynamics",authorizationUrl:"https://login.windows.net/common/oauth2/authorize?resource=https%3A%2F%2F<My Domain>.api.crm.dynamics.com%2F",tokenUrl:"https://login.windows.net/common/oauth2/token",requestHeaders:x,tokenRequestBodyParams:"{}"},docusign:{label:"DocuSign",value:"docusign",authorizationUrl:"https://account.docusign.com/oauth/auth",tokenUrl:"https://account.docusign.com/oauth/token",requestHeaders:x,tokenRequestBodyParams:"{}"},servicenow:{label:"ServiceNow",value:"servicenow",authorizationUrl:"https://account.service-now.com/oauth_auth.do",tokenUrl:"https://account.service-now.com/oauth_token.do",requestHeaders:x,tokenRequestBodyParams:"{}"},intuit_quickbooks:{value:"intuit_quickbooks",label:"QuickBooks",authorizationUrl:"https://appcenter.intuit.com/connect/oauth2",tokenUrl:"https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",defaultScopes:"com.intuit.quickbooks.accounting",requestHeaders:{Accept:"application/json;charset=UTF-8","Content-Type":"application/json",Authorization:"Bearer {{$Auth.Response.Body.access_token}}"},tokenRequestBodyParams:"{}"},other:{label:"Other",value:"other",authorizationUrl:"",tokenUrl:"",requestHeaders:x,tokenRequestBodyParams:"{}"}};e("AuthProviderTypesPicklist",function(){return v.map(D,function(e){return{value:e.value,label:e.label}}).sort(function(e,t){return e.label.localeCompare(t.label)})}),e("skuid.settings.onAuthProviderTypeChange",function(e){var t=e.model,o=e.row,n=t.getFieldValue(o,u.oauth_provider_type,!0),i=D[n],r={};v.each({authorizationUrl:u.authorize_endpoint_url,tokenUrl:u.token_endpoint_url,requestHeaders:u.request_headers,tokenRequestBodyParams:u.token_request_body_parameters,clientId:u.client_id,clientSecret:u.client_secret,customCallbackUrl:u.custom_callback_url,defaultScopes:u.default_scopes},function(e,t){i?t&&(r[t]=i.hasOwnProperty(e)?i[e]:""):r[t]=""}),d.size(r)&&t.updateRow(o,r)}),e("AuthProviderApexClasses",function(e,t){P(e,m(t),["ApexClass"],!1)}),e("AuthProviderPicklist",function(e,t,o){var n=e.row,i=n[s.authentication],r=n[s.type];return l({field:e,value:m(t),isRequired:!1,model:g.$M("stng__AuthProviders"),filterFunction:function(e){var t=e[u.auth_method]||"oauth2";return r===a?e[u.oauth_provider_type]===a:n.NeedsAWSAuthProvider__ui?t.startsWith("aws_"):"provider"===i&&("apex"!==t||"Sharepoint"===r&&"apex"===t)},renderas:o?o.renderas:null})}),e("AuthProviderPicklist_Radio",function(){g.snippet.get("AuthProviderPicklist")(arguments[0],arguments[1],{renderas:"RADIO_BUTTONS"})}),e("PackagesMultipicklist",function(e,t){var o=[];v.each(g.$M("stng__Packages").data,function(e,t){o.push({value:t.NamespacePrefix,label:t.NamespacePrefix,active:!0,defaultValue:0===e})}),w(e,t,o)}),e("stng__PermissionSetsMultipicklist",function(e,t){var i=[];v.each(g.$M("stng__AllPermissionSets").data,function(e,t){var o=(t.NamespacePrefix?t.NamespacePrefix+"__":"")+t.Name,n=t.Label+(t.NamespacePrefix?" ("+t.NamespacePrefix+")":"");i.push({value:o,label:n,active:!0,defaultValue:0===e})}),w(e,t,i)}),e("ProfileLookup",function(e,t){P(e,t,["Profile"],!1)}),e("UserOrProfileLookup",function(e,t){P(e,t,["User","Profile"],!1)});var M=function(e){return JSON.stringify(e,void 0,3)};e("skuid.loadJSZip",function(){return void 0!==g.lib.JSZip?d.resolve():d.loadJS(g.platform.getResourceUrl({ns:"skuid",path:"js/lib/jSZip.js"})).then(function(){g.lib.JSZip=window.JSZip})}),e("skuid.newComponentPackPreSave",function(e){var t,o,n=e.model,i=e.row,r=k.load_order,a=k.name,s=k.resource_name,u=k.api_version,l=i[s],c=i[a],d=c+"Components",p=g.platform.hasFeature("CustomComponent")?i[u]:"v1",m={prefix:c,label:l,icon:"v2"===p?"sk-webicon-ink:components":"sk-icon-component-pack"},h=1,f=!1;return n.getRows().forEach(function(e){!isNaN(e[r])&&e[r]>h&&(h=e[r])}),n.updateRow(i,(F(t={},k.active,!0),F(t,r,h+1),F(t,a,c),F(t,s,d),F(t,u,p),t)),v.each(n.registeredLists,function(e,t){if(t.validateRequiredFields().length)return!(f=!0)}),f?_():(o="v2"===p?function(e){var t=e.prefix,o=e.label,n=e.icon,i="sayhello",r="runtime1.js",a="pack/"+t+"/"+r,s={id:t,components:[{id:i,apiName:a,js:[{path:r}]}]},u="builders.js",l="pack/"+t+"/"+u,c={id:t,components:[{id:i,folderId:t,apiName:l,js:[{path:u}]}],folders:[{id:t,name:o,icon:n}]},d='skuid.runtime.registerApi("v2", "'+a+'", function(skuid) {\n\tvar h = skuid.virtualDom.hyperScript;\n\n\tvar definition = {\n\t\t/**\n\t\t * Defines the state of the component and how the component is\n\t\t * structured in the Page Composer\n\t\t */\n\t\tschema: {\n\t\t\tattributes: {\n\t\t\t\tperson: {\n\t\t\t\t\ttype: "string",\n\t\t\t\t\tdefault: "World",\n\t\t\t\t},\n\t\t\t},\n\t\t\tnodes: {},\n\t\t\tproperties: {},\n\t\t},\n\t\t/**\n\t\t * Instantiate style settings that will then be applied in getStyles()\n\t\t * Here you can access your Design System variables either by string reference\n\t\t * as shown below, or direct access through the "themeSettings" parameter.\n\t\t * \n\t\t * @param {Object} themeSettings Direct access to settings within your Design System\n\t\t * @returns {Object} Collection of style settings for getStyles() to use\n\t\t */\n\t\tgetStyleSettings(themeSettings) {\n\t\t\treturn {\n\t\t\t\tcolor: "@tk.utility.fontColor",\n\t\t\t\tfontSize: "@tk.fontSize.body",\n\t\t\t};\n\t\t},\n\t\t/**\n\t\t * Write your CSS rules here in the form of "classes" which will be used in\n\t\t * the rendering of the component in renderVDom()\n\t\t * \n\t\t * Skuid makes use of the JSS library to create CSS from JavaScript\n\t\t * https://cssinjs.org\n\t\t * \n\t\t * @param {Object} styles The style settings declared in getStyleSettings() above\n\t\t * @returns {Object} The collection of style "classes"\n\t\t */\n\t\tgetStyles(styles) {\n\t\t\treturn {\n\t\t\t\t"hello-content": {\n\t\t\t\t\tcolor: styles.color,\n\t\t\t\t\tfontSize: styles.fontSize,\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\t\t/**\n\t\t * The init() method is run once when component is created\n\t\t * Use this method to initialize anything the component will\n\t\t * need for rendering.\n\t\t * @param {Component} component The component you are initializing\n\t\t * @param {Object} state The internal state to set/get\n\t\t * @param {Object} cpi Methods to call within the component\n\t\t */\n\t\tinit(component, state, cpi) {\n\t\t\t// do initializations here\n\t\t},\n\t\t/**\n\t\t * The actual rendering logic.\n\t\t * Please consult the Maquette website to learn more\n\t\t * https://maquettejs.org/\n\t\t * @param {Component} component The current component to get information from\n\t\t * @returns {VNode} A Maquette VNode (virtual node)\n\t\t */\n\t\trenderVDom(component) {\n\t\t\tconst gc = component.shortcut("getStyledClasses"),\n\t\t\t\t// access to both public and private CPI methods\n\t\t\t\tcpi = component._getCPI(),\n\t\t\t\tstate = component.getState();\n\t\t\treturn h("div",\n\t\t\t\t{\n\t\t\t\t\tclass: gc("hello-content"),\n\t\t\t\t},\n\t\t\t\t[\n\t\t\t\t\t"Hello " + state.person,\n\t\t\t\t]\n\t\t\t);\n\t\t},\n\t\t/**\n\t\t * Component Programming Interface\n\t\t * Below is where you can define methods that your component\n\t\t * can call to perform actions. The public CPI are methods\n\t\t * available for external components to use/access.\n\t\t */\n\t\tcpi: {\n\t\t\t// privateCPI\n\t\t\t// publicCPI\n\t\t}\n\t};\n\tskuid.componentType.register("'+t+"__"+i+'", definition);\n});',p='skuid.runtime.registerApi("v2", "'+l+'", function(skuid) {\n\tvar bc = skuid.builder.core;\n\tvar componentId = "'+t+"__"+i+'";\n\tvar $xml = skuid.utils.makeXMLDoc;\n\n\tbc.registerBuilder(new bc.Builder({\n\t\tid: componentId,\n\t\tname: "Say Hello",\n\t\ticon: "sk-webicon-ink:people",\n\t\tdescription: "This component says Hello to someone",\n\t\tcomponentRenderer: function(component) {\n\t\t\tvar state = component.get("xmlState");\n\t\t\tcomponent.setTitle(component.builder.name);\n\t\t\tcomponent.body.html(\'<div class="hello-content">Hello \' + state.attr("person") + \'!</div>\');\n\t\t},\n\t\tpropertiesRenderer: function (propViewer, component) {\n\t\t\tpropViewer.setTitle("Say Hello Component Properties");\n\t\t\tvar state = component.get("xmlState");\n\t\t\tvar propCategories = [];\n\t\t\tvar propsList = [\n\t\t\t\t{\n\t\t\t\t\tid: "person",\n\t\t\t\t\ttype: "string",\n\t\t\t\t\tlabel: "Person to say Hello to",\n\t\t\t\t\thelptext: "Pick a name, any name!",\n\t\t\t\t\tonChange: function(){\n\t\t\t\t\t\tcomponent.refresh();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t];\n\t\t\tpropCategories.push({\n\t\t\t\tname: "",\n\t\t\t\tprops: propsList,\n\t\t\t});\n\t\t\tpropViewer.applyPropsWithCategories(propCategories, state);\n\t\t},\n\t\tdefaultStateGenerator: function() {\n\t\t\treturn $xml("<" + componentId + \' person="\' + skuid.utils.userInfo.firstName + \'"/>\');\n\t\t},\n\t}));\n});',m=new g.lib.JSZip;return m.file("skuid_runtime.json",M(s)),m.file("skuid_builders.json",M(c)),m.file(r,d),m.file(u,p),m.generate({type:"base64",compression:"DEFLATE"})}(m):function(e){var t=e.prefix,o=e.label,n=e.icon,i={id:t,components:[{id:"sayhello"}],js:[{path:"runtime.js"}],css:[{path:"runtime.css"}]},r={id:t,components:[{id:"sayhello",folderId:t}],folders:[{id:t,name:o,icon:n}],js:[{path:"builders.js"}],css:[{path:"builders.css"}]},a='(function(skuid) {\nskuid.componentType.register("'+t+'__sayhello", function(element, xmlDef, /*component*/) {\n\telement.addClass("hello-content").html("<b>Hello " + xmlDef.attr("person") + "</b>");\n});\n})(skuid);',s='(function(skuid) {\nvar bc = skuid.builder.core;\nvar componentId = "'+t+'__sayhello";\nbc.registerBuilder(new bc.Builder({\n\tid: componentId,\n\tname: "Say Hello",\n\ticon: "sk-icon-contact",\n\tdescription: "This component says Hello to someone",\n\tcomponentRenderer: function(component) {\n\t\tcomponent.setTitle(component.builder.name);\n\t\tcomponent.body.html(\'<div class="hello-content">Hello \' + component.state.attr("person") + \'!</div>\');\n\t},\n\tpropertiesRenderer: function (propViewer, component) {\n\t\tpropViewer.setTitle("Say Hello Component Properties");\n\t\tvar state = component.state;\n\t\tvar propCategories = [];\n\t\tvar propsList = [\n\t\t\t{\n\t\t\t\tid: "person",\n\t\t\t\ttype: "string",\n\t\t\t\tlabel: "Person to say Hello to",\n\t\t\t\thelptext: "Pick a name, any name!",\n\t\t\t\tonChange: function(){\n\t\t\t\t\tcomponent.refresh();\n\t\t\t\t}\n\t\t\t}\n\t\t];\n\t\tpropCategories.push({\n\t\t\tname: "",\n\t\t\tprops: propsList,\n\t\t});\n\t\tpropViewer.applyPropsWithCategories(propCategories, state);\n\t},\n\tdefaultStateGenerator: function() {\n\t\treturn skuid.utils.makeXMLDoc("<" + componentId + \' person="\' + skuid.utils.userInfo.firstName + \'"/>\');\n\t},\n}));\n})(skuid);',u=new g.lib.JSZip;return u.file("skuid_runtime.json",M(i)),u.file("skuid_builders.json",M(r)),u.file("runtime.js",a),u.file("builders.js",s),u.file("runtime.css",".hello-content {\ncolor: black;\nfont-size: 18pt;\n}"),u.file("builders.css",".hello-content {\ncolor:black;\nfont-size: 18pt;\n}"),u.generate({type:"base64",compression:"DEFLATE"})}(m),g.platform.uploadComponentPackFile({body:o,model:n,resourceName:d,row:i}).catch(function(e){return _({$PreviousAction:{error:e.message?e.message:e}})}))}),e("skuid.settings.newModelDataSource.checkForRemoteSite",function(){var e=arguments[0],t=e.model,o=e.row,n="stng__ModelDataSources";t&&t.id===n||(t=g.$M(n)),o&&t.getRowById(t.getRowId(o))||(o=t.getFirstRow());var i=t.getFieldValue(o,"skuid__URL__c",!0),r=t.getFieldValue(o,"skuid__Use_Apex_Proxy__c",!0),a=!1,s=c.getOriginFromUrl(i);v.each(g.$M("stng__AuthProviders").getRows(),function(e,t){var o=t.skuid__Authorize_Endpoint_URL__c,n=t.skuid__Token_Endpoint_URL__c;if(d.startsWith(o,s)||d.startsWith(n,s))return!(a=!0)});var u=r&&!a,l=t.getFieldValue(o,"Name",!0);return u?c.checkForRemoteSiteSetting(i,l):(v.unblockUI(),!0)}),e("skuid.settings.newAuthProvider.checkForRemoteSites",function(){var e=arguments[0],n=e.model,i=e.row,t="stng__AuthProviders";n&&n.id===t||(n=g.$M(t)),i&&n.getRowById(n.getRowId(i))||(i=n.getFirstRow());var r={},o=v.map(["skuid__Authorize_Endpoint_URL__c","skuid__Token_Endpoint_URL__c","skuid__User_Info_Endpoint_URL__c"],function(e){var t=n.getFieldValue(i,e,!0),o=!!t&&c.getOriginFromUrl(t);if(o&&!r[o])return r[o]=1,o});if(!o.length||!window.confirm("In order for Skuid to authenticate using this Auth Provider, you will need to create Salesforce Remote Site Settings for the following URL(s):\n\n - "+o.join("\n - ")+"\n\nWould you like Skuid to try to see if the necessary Remote Site Settings corresponding to these URL(s) already exist, and if not, create them for you?"))return v.unblockUI(),!0;var a=n.getFieldValue(i,"Name",!0);a&&(a=a.replace(/[\W]+/g,""));var s="For Skuid to authenticate using Auth Provider "+a,u=[];v.each(o,function(e,t){u.push(n.getDataSourceType().addRemoteSiteSetting({dataSource:n.getDataSource(),description:s,url:t}))}),v.blockUI({message:"Attempting to create Remote Site Settings for "+o.length+" URL(s) ..."}),v.when.all(u).done(function(){v.blockUI({message:o.length+" Remote Site Setting(s) have successfully been created!",timeout:2e3})}).fail(function(e){v.blockUI({message:"There was a problem creating the Remote Site Setting(s) for these URL(s):<br/><br/>"+e,timeout:3e3})})}),e("skuid.importComponentPack",function(e){var n=v.Deferred(),r=e.apiExtensions.$Result.body,a=g.platform.hasFeature("CustomComponent")?r.api_version:"v1",s=void 0;return v.ajax({url:"/componentpacks/"+r.name+"/skuid_builders.json",type:"GET",contentType:"application/json"}).fail(function(){return n.reject("The uploaded file is not a valid Skuid Component Pack. skuid_builders.json not found.")}).then(function(e){return e.id?(s=e.id,v.ajax({url:"/componentpacks/"+r.name+"/skuid_runtime.json",type:"GET",contentType:"application/json"}).fail(function(){return n.reject("The uploaded file is not a valid Skuid Component Pack. skuid_runtime.json not found.")})):n.reject("Property id required in skuid_builders.json for import")}).then(function(e){if(!e.id)return n.reject("Property id required in skuid_runtime.json for import");if(e.id!==s)return n.reject("Property id must be consistant between skuid_runtime.json and skuid_builders.json");var t=g.$M("stng__ComponentPacks_Existing");return t.setCondition(t.getConditionByName("packName"),e.id),s=e.id,t.updateData()}).then(function(){var e=g.$M("stng__ComponentPacks_Existing"),o=g.$M("stng__ComponentPacks"),t=e.getFirstRow(),n=o;if(t)(n=e).updateRow(t,{file_id:r.id,resource_name:r.name});else{var i=0;o.getRows().length&&o.getRows().forEach(function(e){var t=o.getFieldValue(e,"load_order",!0);i<t&&(i=t)}),n.updateRow(o.createRow(),{name:s,file_id:r.id,resource_name:r.name,api_version:a||"v1",active:!0,load_order:i+1})}return n.save()}).then(function(e){if(e.messages&&e.messages.length){var o=v('<div id="componentImportErrors" class="nx-error">');return o.prependTo(v("#importUploadTitle")),o.empty(),v.each(e.messages,function(e,t){o.append("<div>"+t+"</div>")}),g.$M("stng__ComponentPacks").cancel(),n.reject()}n.resolve()}),n}),e("skuid.settings.copyPrefsFromOrgDefault",function(){var e=arguments[0],t=e.row,o=e.model,n=g.$M("stng__OrgPreferences"),i=n.getFirstRow(),r={};v.each(n.fields,function(){d.startsWith(this.id,"skuid__")&&"skuid__Use_Component_Packs__c"!==this.id&&(r[this.id]=n.getFieldValue(i,this.id,!0))}),o.updateRow(t,r,{initiatorId:e.initiatorId})}),e("skuid.crypt.generateKey",function(e){var t=e.model,o=e.row,n=v.Deferred();return g.SkuidSettingsController.generateNewSkuidCryptKey(function(e){e&&"string"==typeof e?(t.updateRow(o,"skuid__Key__c",e),n.resolve()):n.reject()}),n.promise()});var U={};e("skuid.settings.changeDataSourceWithCreds",function(e){var o=e.model,t=e.row,n=o.getFieldValue(t,"Id"),i=o.getFieldValue(t,"StoredCredCount__ui"),r={};v.each(e.updates,function(e,t){!0!==o.getField(e).uiOnly&&(r[e]=t)}),void 0===U[n]&&d.size(r)&&i&&(U[n]=!0,window.confirm("WARNING: This Data Source has stored Data Source Credentials. For security reasons, Data Sources with stored credentials cannot be changed. If you proceed, the records will automatically be deleted, but your changes will not be saved and the Data Source will be unavailable until the process completes. \n\nWould you like proceed?")||(o.cancelRowChanges(t),delete U[n]))}),e("skuid.settings.clearDataSourceChangeWarnings",function(){U={}}),e("skuid.settings.newDataSourceWizard.navigateToStep.newAuthProvider",function(){var e=g.$C("salesforce_NewModelDataSourceWizard")||g.$C("NewModelDataSourceWizard");e&&e.navigate("newAuthProvider_salesforce")});var A="ODATA_ON_PLATFORM",N="SALESFORCE_ON_PLATFORM",I="SALESFORCE_ON_SALESFORCE";function j(e){var t=!1;return!0===e.ODataBase__ui&&(t=A),!0===e.IsSalesforceDataSource__ui&&(t=N),1==e.IsSalesforceService__ui&&(t=I),t}function O(e){var t=e.model,o=t&&t.getDataSourceType(),n=e&&e.targetUrl||window.top.location.protocol+"//"+window.top.location.hostname+"/";return o.addRemoteSiteSetting({dataSource:t.getDataSource(),url:n,description:"For Skuid to access the Metadata API"})}e("skuid.settings.dataSourceMetadata.enableCache",function(t){var o,n,i=v.Deferred(),e=[];if(t.row?e.push(t.row):t.insertResults&&t.insertResults.length&&t.insertResults[0].success&&e.push(t.insertResults[0].record),!e.length)return i.reject().promise();var r=e.filter(function(e){n=e.name?e.name:e.Name;var t=e.type?e.type:n;return n&&t&&j(e)});if(!r.length)return i.reject().promise();o=r[0],n=o.name?o.name:o.Name;var a=j(o);if(a===A)var s=setTimeout(function(){v.blockUI({message:"Loading metadata for Data Source..."})},10);function u(e,t){return v.blockUI({message:"Parsing and caching metadata..."}),v.ajax({url:"/api/v1/datasource-metadata?datasource="+e,method:"POST",data:JSON.stringify(t),contentType:"application/json"})}return g.loader.service.loadDataSourceAndDependencies(n).then(function(e){switch(a){case A:return function(e){var t=e.name;return delete e._metadataCacheVersion,delete e.metadata,e.dataSourceType.authenticateAndGetMetadata({dataSource:e,minimalOnly:!0}).then(function(e){return u(t,e)}).then(function(e){i.resolve(e)},function(e){var t;d.isString(e)?t=e:e&&e.response&&e.response.body&&(t=e.response.body),i.reject({$PreviousAction:{Error:t}})})}(e);case N:return function(e){var t=e.name,o=Date.now();return e._metadataCacheVersion=o,u(t).then(function(e){i.resolve(e)})}(e);case I:return function(e,t){v.blockUI({message:"Setting Metadata Cache... Please save to retain changes.",timeout:4e3});var o=Date.now();t.updateRow(e,{skuid__Cache_Time_Stamp__c:o+""})}(o,t.model)}}).catch(function(){return s&&clearTimeout(s),i.reject({$PreviousAction:{Error:"You do not have access to this Data Source."}})}),i.promise()}),e("skuid.settings.dataSourceMetadata.disableCache",function(e){var t=v.Deferred(),o=e.row,n=e.model;if(j(o)!==I)return v.ajax({url:"/api/v1/datasource-metadata?datasource="+o.name,method:"DELETE"});return v.blockUI({message:"Disabling Metadata Caching... Please save to retain changes.",timeout:4e3}),g.loader.service.loadDataSourceAndDependencies(o.Name).then(function(){if(o.IsSalesforceService__ui)return function(e,t){t.updateRow(e,{skuid__Cache_Time_Stamp__c:null})}(o,n)}).catch(function(){return t.reject({$PreviousAction:{Error:"You do not have access to this Data Source."}})}),t.promise()}),e("skuid.settings.addCurrentOrgToRemoteSiteSettings",O),e("skuid.settings.syncAppManifest",function e(t){return g.remote.promisify(g.SkuidSettingsController,"syncAppManifest").then(function(n){var i=g.$M("stng__ApexJobStatus");return-1<n.indexOf("Remote Site Setting")?O({model:t?t.model:null,targetUrl:n.substring(n.indexOf("https://"))}).then(e):function o(){return i.updateConditionValue({value:n}),d.delay(2e3).then(function(){return i.load()}).then(function(){var e=i.getFirstRow(),t=i.getFieldValue(e,"Status");return"Completed"===t?d.resolve({$PreviousAction:{result:n}}):"Failed"===t||"Aborted"===t?d.reject({$PreviousAction:{result:n}}):o()})}().then(function(){return{$PreviousAction:{result:n}}})}).catch(function(e){throw{$PreviousAction:{error:e}}})})}(skuid)}});