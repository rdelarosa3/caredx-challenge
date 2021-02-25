skuid.runtime.registerApi("v2","skuidPages/skuidSettings",function(t){var e=function(t){var e={};function n(o){if(e[o]){return e[o].exports}var r=e[o]={i:o,l:false,exports:{}};t[o].call(r.exports,r,r.exports,n);r.l=true;return r.exports}n.m=t;n.c=e;n.d=function(t,e,o){if(!n.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:o})}};n.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};n.t=function(t,e){if(e&1)t=n(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var o=Object.create(null);n.r(o);Object.defineProperty(o,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};n.p="";return n(n.s=745)}({745:function(e,n,o){"use strict";o.r(n);function r(t,e){const{prefix:n,label:o,icon:r}=t,{componentName:i,runtimeJSPath:a,runtimeCSSPath:s,buildersJSPath:u,buildersCSSPath:c}=e;let l={id:n,components:[{id:i}],js:[{path:a}],css:[{path:s}]};let d={id:n,components:[{id:i,folderId:n}],folders:[{id:n,name:o,icon:r}],js:[{path:u}],css:[{path:c}]};let p='(function(skuid) {\n\tskuid.componentType.register("'.concat(n,"__").concat(i,'", function(element, xmlDef, /*component*/) {\n\t\telement.addClass("hello-content").html("<b>Hello " + xmlDef.attr("person") + "</b>");\n\t});\n})(skuid);');let m='(function(skuid) {\n\tvar bc = skuid.builder.core;\n\tvar componentId = "'.concat(n,"__").concat(i,'";\n\tbc.registerBuilder(new bc.Builder({\n\t\tid: componentId,\n\t\tname: "Say Hello",\n\t\ticon: "sk-icon-contact",\n\t\tdescription: "This component says Hello to someone",\n\t\tcomponentRenderer: function(component) {\n\t\t\tcomponent.setTitle(component.builder.name);\n\t\t\tcomponent.body.html(\'<div class="hello-content">Hello \' + component.state.attr("person") + \'!</div>\');\n\t\t},\n\t\tpropertiesRenderer: function (propViewer, component) {\n\t\t\tpropViewer.setTitle("Say Hello Component Properties");\n\t\t\tvar state = component.state;\n\t\t\tvar propCategories = [];\n\t\t\tvar propsList = [\n\t\t\t\t{\n\t\t\t\t\tid: "person",\n\t\t\t\t\ttype: "string",\n\t\t\t\t\tlabel: "Person to say Hello to",\n\t\t\t\t\thelptext: "Pick a name, any name!",\n\t\t\t\t\tonChange: function(){\n\t\t\t\t\t\tcomponent.refresh();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t];\n\t\t\tpropCategories.push({\n\t\t\t\tname: "",\n\t\t\t\tprops: propsList,\n\t\t\t});\n\t\t\tpropViewer.applyPropsWithCategories(propCategories, state);\n\t\t},\n\t\tdefaultStateGenerator: function() {\n\t\t\treturn skuid.utils.makeXMLDoc("<" + componentId + \' person="\' + skuid.utils.userInfo.firstName + \'"/>\');\n\t\t},\n\t}));\n})(skuid);');let h=".hello-content {\n\tcolor: black;\n\tfont-size: 18pt;\n}";let f=".hello-content {\n\tcolor:black;\n\tfont-size: 18pt;\n}";return{runtimeJSON:l,buildersJSON:d,runtimeJS:p,buildersJS:m,runtimeCSS:h,buildersCSS:f}}function i(t,e){const{prefix:n,label:o,icon:r}=t,{componentName:i,runtimeJSPath:a,buildersJSPath:s}=e,u="pack/".concat(n,"/").concat(a),c="pack/".concat(n,"/").concat(s);let l={id:n,components:[{id:i,apiName:u,js:[{path:a}]}]};let d={id:n,components:[{id:i,folderId:n,apiName:c,js:[{path:s}]}],folders:[{id:n,name:o,icon:r}]};let p='skuid.runtime.registerApi("v2", "'.concat(u,'", function(skuid) {\n\tvar h = skuid.virtualDom.hyperScript;\n\n\tvar definition = {\n\t\t/**\n\t\t * Defines the state of the component and how the component is\n\t\t * structured in the Page Composer\n\t\t */\n\t\tschema: {\n\t\t\tattributes: {\n\t\t\t\tperson: {\n\t\t\t\t\ttype: "string",\n\t\t\t\t\tdefault: "World",\n\t\t\t\t},\n\t\t\t},\n\t\t\tnodes: {},\n\t\t\tproperties: {},\n\t\t},\n\t\t/**\n\t\t * Instantiate style settings that will then be applied in getStyles()\n\t\t * Here you can access your Design System variables either by string reference\n\t\t * as shown below, or direct access through the "themeSettings" parameter.\n\t\t * \n\t\t * @param {Object} themeSettings Direct access to settings within your Design System\n\t\t * @returns {Object} Collection of style settings for getStyles() to use\n\t\t */\n\t\tgetStyleSettings(themeSettings) {\n\t\t\treturn {\n\t\t\t\tcolor: "@tk.utility.fontColor",\n\t\t\t\tfontSize: "@tk.fontSize.body",\n\t\t\t};\n\t\t},\n\t\t/**\n\t\t * Write your CSS rules here in the form of "classes" which will be used in\n\t\t * the rendering of the component in renderVDom()\n\t\t * \n\t\t * Skuid makes use of the JSS library to create CSS from JavaScript\n\t\t * https://cssinjs.org\n\t\t * \n\t\t * @param {Object} styles The style settings declared in getStyleSettings() above\n\t\t * @returns {Object} The collection of style "classes"\n\t\t */\n\t\tgetStyles(styles) {\n\t\t\treturn {\n\t\t\t\t"hello-content": {\n\t\t\t\t\tcolor: styles.color,\n\t\t\t\t\tfontSize: styles.fontSize,\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\t\t/**\n\t\t * The init() method is run once when component is created\n\t\t * Use this method to initialize anything the component will\n\t\t * need for rendering.\n\t\t * @param {Component} component The component you are initializing\n\t\t * @param {Object} state The internal state to set/get\n\t\t * @param {Object} cpi Methods to call within the component\n\t\t */\n\t\tinit(component, state, cpi) {\n\t\t\t// do initializations here\n\t\t},\n\t\t/**\n\t\t * The actual rendering logic.\n\t\t * Please consult the Maquette website to learn more\n\t\t * https://maquettejs.org/\n\t\t * @param {Component} component The current component to get information from\n\t\t * @returns {VNode} A Maquette VNode (virtual node)\n\t\t */\n\t\trenderVDom(component) {\n\t\t\tconst gc = component.shortcut("getStyledClasses"),\n\t\t\t\t// access to both public and private CPI methods\n\t\t\t\tcpi = component._getCPI(),\n\t\t\t\tstate = component.getState();\n\t\t\treturn h("div",\n\t\t\t\t{\n\t\t\t\t\tclass: gc("hello-content"),\n\t\t\t\t},\n\t\t\t\t[\n\t\t\t\t\t"Hello " + state.person,\n\t\t\t\t]\n\t\t\t);\n\t\t},\n\t\t/**\n\t\t * Component Programming Interface\n\t\t * Below is where you can define methods that your component\n\t\t * can call to perform actions. The public CPI are methods\n\t\t * available for external components to use/access.\n\t\t */\n\t\tcpi: {\n\t\t\t// privateCPI\n\t\t\t// publicCPI\n\t\t}\n\t};\n\tskuid.componentType.register("').concat(n,"__").concat(i,'", definition);\n});');let m='skuid.runtime.registerApi("v2", "'.concat(c,'", function(skuid) {\n\tvar bc = skuid.builder.core;\n\tvar componentId = "').concat(n,"__").concat(i,'";\n\tvar $xml = skuid.utils.makeXMLDoc;\n\n\tbc.registerBuilder(new bc.Builder({\n\t\tid: componentId,\n\t\tname: "Say Hello",\n\t\ticon: "sk-webicon-ink:people",\n\t\tdescription: "This component says Hello to someone",\n\t\tcomponentRenderer: function(component) {\n\t\t\tvar state = component.get("xmlState");\n\t\t\tcomponent.setTitle(component.builder.name);\n\t\t\tcomponent.body.html(\'<div class="hello-content">Hello \' + state.attr("person") + \'!</div>\');\n\t\t},\n\t\tpropertiesRenderer: function (propViewer, component) {\n\t\t\tpropViewer.setTitle("Say Hello Component Properties");\n\t\t\tvar state = component.get("xmlState");\n\t\t\tvar propCategories = [];\n\t\t\tvar propsList = [\n\t\t\t\t{\n\t\t\t\t\tid: "person",\n\t\t\t\t\ttype: "string",\n\t\t\t\t\tlabel: "Person to say Hello to",\n\t\t\t\t\thelptext: "Pick a name, any name!",\n\t\t\t\t\tonChange: function(){\n\t\t\t\t\t\tcomponent.refresh();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t];\n\t\t\tpropCategories.push({\n\t\t\t\tname: "",\n\t\t\t\tprops: propsList,\n\t\t\t});\n\t\t\tpropViewer.applyPropsWithCategories(propCategories, state);\n\t\t},\n\t\tdefaultStateGenerator: function() {\n\t\t\treturn $xml("<" + componentId + \' person="\' + skuid.utils.userInfo.firstName + \'"/>\');\n\t\t},\n\t}));\n});');return{runtimeJSON:l,buildersJSON:d,runtimeJS:p,buildersJS:m}}const a=t.$,s=t.snippet.register,u=t.utils,c=u.reject,l=t.platform.getEntityFieldNames,d=l("component_pack"),p=l("auth_provider"),m=p.oauth_grant_type,h="jwt-bearer",f=t.constants,g=f.SALESFORCE,k=t.skuidPageUtils,S='{"Authorization":"Bearer {{$Auth.Response.Body.access_token}}"}';let _=function t(e){return JSON.stringify(e,undefined,3)};s("skuid.loadJSZip",function(){if(typeof JSZip!=="undefined"){return u.resolve()}else{return u.loadJS(t.platform.getResourceUrl({ns:"skuid",path:"js/lib/jSZip.js"}))}});s("skuid.downloadComponentPack",function({row:t}){window.open("/componentpacks/"+t.resource_name,"_blank")});s("skuid.newComponentPackPreSave",function({model:e,row:n}){let o=d.load_order,r=d.name,i=d.resource_name,s=d.api_version,u=n[i],l=n[r],p=l+"Components",m=t.platform.hasFeature("CustomComponent"),h=m?n[s]:"v1",f=h==="v2"?"sk-webicon-ink:components":"sk-icon-component-pack",g={prefix:l,label:u,icon:f},k=1,S=false,_;e.getRows().forEach(function(t){if(!isNaN(t[o])&&t[o]>k){k=t[o]}});e.updateRow(n,{[d.active]:true,[o]:k+1,[r]:l,[i]:p,[s]:h});a.each(e.registeredLists,function(t,e){if(e.validateRequiredFields().length){S=true;return false}});if(S){return c()}if(h==="v2"){_=y(g)}else{_=b(g)}return t.platform.uploadComponentPackFile({body:_,model:e,resourceName:p,row:n}).catch(function(t){return c({$PreviousAction:{error:t.message?t.message:t}})})});s("skuid.importComponentPack",function(e){let n=u.Deferred(),o=e.apiExtensions.$Result.body,r=t.platform.hasFeature("CustomComponent"),i=t.$M("stng__ComponentPacks_New"),s=i.getFirstRow(),c=r?s.api_version:"v1",l;a.ajax({url:"/componentpacks/"+o.name+"/skuid_builders.json",type:"GET",contentType:"application/json"}).catch(function(){return n.reject("The uploaded file is not a valid Skuid Component Pack. skuid_builders.json not found.")}).then(function(t){if(!t.id)return n.reject("Property id required in skuid_builders.json for import");l=t.id;return a.ajax({url:"/componentpacks/"+o.name+"/skuid_runtime.json",type:"GET",contentType:"application/json"}).catch(function(){return n.reject("The uploaded file is not a valid Skuid Component Pack. skuid_runtime.json not found.")})}).then(function(e){if(!e.id)return n.reject("Property id required in skuid_runtime.json for import");if(e.id!==l)return n.reject("Property id must be consistant between skuid_runtime.json and skuid_builders.json");let o=t.$M("stng__ComponentPacks_Existing");o.setCondition(o.getConditionByName("packName"),e.id);l=e.id;return o.updateData()}).then(function(){let e=t.$M("stng__ComponentPacks_Existing");let n=t.$M("stng__ComponentPacks");let r=e.getFirstRow();let i=n;if(r){i=e;i.updateRow(r,{file_id:o.id,resource_name:o.name})}else{let t=0;if(n.getRows().length){n.getRows().forEach(function(e){let o=n.getFieldValue(e,"load_order",true);if(o>t)t=o})}i.updateRow(n.createRow(),{name:l,file_id:o.id,resource_name:o.name,api_version:c||"v1",active:true,load_order:t+1})}return i.save()}).then(function(e){if(e.messages&&e.messages.length){let o=a('<div id="componentImportErrors" class="nx-error">');o.prependTo(a("#importUploadTitle"));o.empty();a.each(e.messages,function(t,e){o.append("<div>"+e+"</div>")});t.$M("stng__ComponentPacks").cancel();return n.reject()}n.resolve()});return n});function b(e){const n={componentName:"sayhello",runtimeJSPath:"runtime.js",runtimeCSSPath:"runtime.css",buildersJSPath:"builders.js",buildersCSSPath:"builders.css"},o=r(e,n);let i=new t.lib.JSZip;i.file("skuid_runtime.json",_(o.runtimeJSON));i.file("skuid_builders.json",_(o.buildersJSON));i.file(n.runtimeJSPath,o.runtimeJS);i.file(n.buildersJSPath,o.buildersJS);i.file(n.runtimeCSSPath,o.runtimeCSS);i.file(n.buildersCSSPath,o.buildersCSS);return i.generate({type:"base64",compression:"DEFLATE"})}function y(e){const n={componentName:"sayhello",runtimeJSPath:"runtime.js",buildersJSPath:"builders.js"},o=i(e,n);let r=new t.lib.JSZip;r.file("skuid_runtime.json",_(o.runtimeJSON));r.file("skuid_builders.json",_(o.buildersJSON));r.file(n.runtimeJSPath,o.runtimeJS);r.file(n.buildersJSPath,o.buildersJS);return r.generate({type:"base64",compression:"DEFLATE"})}s("skuid.settings.copyPrefsFromOrgDefault",function(){let e=arguments[0],n=e.row,o=e.model,r=t.$M("stng__OrgPreferences"),i=r.getFirstRow(),s={};a.each(r.fields,function(){if(u.startsWith(this.id,"skuid__")&&this.id!=="skuid__Use_Component_Packs__c"){s[this.id]=r.getFieldValue(i,this.id,true)}});o.updateRow(n,s,{initiatorId:e.initiatorId})});const v={salesforce:{label:"Salesforce",value:g,authorizationUrl:"https://<My Domain>.my.salesforce.com/services/oauth2/authorize",tokenUrl:"https://<My Domain>.my.salesforce.com/services/oauth2/token",requestHeaders:S,tokenRequestBodyParams:"{}",defaultScopes:"api,refresh_token",claims:function t(e){let n=e[m];if(n===h){return{iss:"{{$Auth.Client_Id}}",sub:"<Your Salesforce Username, e.g. {{$User.FederationId}}>",aud:'"https://login.salesforce.com"'}}else{return}}},sharepointonline:{label:"SharePoint Online",value:"sharepointonline",authorizationUrl:"https://<Company Name>.sharepoint.com/<Site Collection Path>_layouts/15/OauthAuthorize.aspx",tokenUrl:"https://accounts.accesscontrol.windows.net/<Company Name>.onmicrosoft.com/tokens/OAuth/2",tokenRequestBodyParams:'{"resource":"00000003-0000-0ff1-ce00-000000000000/<Company Name>.sharepoint.com@<Company Name>.onmicrosoft.com"}',requestHeaders:S},google:{label:"Google",value:"google",authorizationUrl:"https://accounts.google.com/o/oauth2/auth?access_type=offline",tokenUrl:"https://accounts.google.com/o/oauth2/token",requestHeaders:S,tokenRequestBodyParams:"{}",defaultScopes:"https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/calendar"},outlook:{label:"Outlook",value:"outlook",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https%3A%2F%2Foutlook.office.com%2F",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:S,tokenRequestBodyParams:"{}",defaultScopes:"https://outlook.office.com/mail.send,https://outlook.office.com/mail.readwrite.all,https://outlook.office.com/calendars.readwrite.all,https://outlook.office.com/tasks.readwrite.all"},github:{label:"Github",value:"github",authorizationUrl:"https://github.com/login/oauth/authorize",tokenUrl:"https://github.com/login/oauth/access_token",requestHeaders:S,tokenRequestBodyParams:"{}"},facebook:{label:"Facebook",value:"facebook",authorizationUrl:"https://www.facebook.com/dialog/oauth/",tokenUrl:"https://graph.facebook.com/oauth/access_token",requestHeaders:S,tokenRequestBodyParams:"{}"},dropbox:{label:"Dropbox",value:"dropbox",authorizationUrl:"https://www.dropbox.com/1/oauth2/authorize",tokenUrl:"https://api.dropbox.com/1/oauth2/token",requestHeaders:S,tokenRequestBodyParams:"{}"},slack:{label:"Slack",value:"slack",authorizationUrl:"https://slack.com/oauth/authorize",tokenUrl:"https://slack.com/api/oauth.access",requestHeaders:'{"Authorization":"Bearer {{$Auth.Response.Body.token}}"}',defaultScopes:"identify,client",tokenRequestBodyParams:"{}"},box:{label:"Box",value:"box",authorizationUrl:"https://account.box.com/api/oauth2/authorize",tokenUrl:"https://api.box.com/oauth2/token",requestHeaders:S,defaultScopes:"",tokenRequestBodyParams:"{}"},onedrive:{label:"Microsoft OneDrive",value:"onedrive",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https://<My Domain>-my.sharepoint.com",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:S,defaultScopes:"MyFiles.Read,MyFiles.Write",tokenRequestBodyParams:"{}"},msexcel:{label:"Microsoft Excel",value:"msexcel",authorizationUrl:"https://login.microsoftonline.com/common/oauth2/authorize?resource=https://graph.microsoft.com",tokenUrl:"https://login.microsoftonline.com/common/oauth2/token",requestHeaders:S,defaultScopes:"MyFiles.Read,MyFiles.Write",tokenRequestBodyParams:"{}"},msdynamics:{label:"Microsoft Dynamics",value:"msdynamics",authorizationUrl:"https://login.windows.net/common/oauth2/authorize?resource=https%3A%2F%2F<My Domain>.api.crm.dynamics.com%2F",tokenUrl:"https://login.windows.net/common/oauth2/token",requestHeaders:S,tokenRequestBodyParams:function t(e){let n=e[m];if(n===h){return{requested_token_use:"on_behalf_of"}}else{return{}}}},docusign:{label:"DocuSign",value:"docusign",authorizationUrl:"https://account.docusign.com/oauth/auth",tokenUrl:"https://account.docusign.com/oauth/token",requestHeaders:S,tokenRequestBodyParams:"{}"},servicenow:{label:"ServiceNow",value:"servicenow",authorizationUrl:"https://account.service-now.com/oauth_auth.do",tokenUrl:"https://account.service-now.com/oauth_token.do",requestHeaders:S,tokenRequestBodyParams:"{}"},intuit_quickbooks:{value:"intuit_quickbooks",label:"QuickBooks",authorizationUrl:"https://appcenter.intuit.com/connect/oauth2",tokenUrl:"https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",defaultScopes:"com.intuit.quickbooks.accounting",requestHeaders:{Accept:"application/json;charset=UTF-8","Content-Type":"application/json",Authorization:"Bearer {{$Auth.Response.Body.access_token}}"},tokenRequestBodyParams:"{}"},other:{label:"Other",value:"other",authorizationUrl:"",tokenUrl:"",requestHeaders:S,tokenRequestBodyParams:"{}"}};s("AuthProviderTypesPicklist",function(){return a.map(v,function(t){return{value:t.value,label:t.label}}).sort(function(t,e){return t.label.localeCompare(e.label)})});s("skuid.settings.onAuthProviderTypeChange",function(e){const n=p.claims;let o=e.model,r=e.row,i=o.getFieldValue(r,p.oauth_provider_type,true),s=v[i],c={};a.each({authorizationUrl:p.authorize_endpoint_url,tokenUrl:p.token_endpoint_url,requestHeaders:p.request_headers,tokenRequestBodyParams:p.token_request_body_parameters,clientId:p.client_id,clientSecret:p.client_secret,customCallbackUrl:p.custom_callback_url,defaultScopes:p.default_scopes,claims:n},function(e,o){if(!s&&o!==n)c[o]="";else if(s&&o){let n="";if(s.hasOwnProperty(e)){n=s[e];if(t.utils.isFunction(n)){n=n(r)}}c[o]=n}});if(r[m]===h&&!s[n]){c[n]={iss:"<application identifier, e.g. {{$Auth.Client_Id}}>",aud:'<intended recipient of the token, e.g. "https://api.foo.com">',sub:"<user identifier, e.g. {{$User.FederationId}}>"}}if(u.size(c)){o.updateRow(r,c)}});s("skuid.settings.AuthProviderNameRegExTest",function(e){const n=e.model,o=e.row,r=t.platform.getEntityFieldName("auth_provider","name"),i=n.getFieldValue(o,r);if(i!==""){let t=/^[a-z0-9_]+$/i;if(!t.exec(i)){return false}}});let w={};s("skuid.settings.changeDataSourceWithCreds",function(t){const e=t.model,n=t.row,o=e.getFieldValue(n,"Id"),r=e.getFieldValue(n,"StoredCredCount__ui"),i={};a.each(t.updates,function(t,n){let o=e.getField(t);if(o.uiOnly!==true){i[t]=n}});if(w[o]===undefined&&u.size(i)&&r){w[o]=true;if(!window.confirm("WARNING: This Data Source has stored Data Source Credentials. "+"For security reasons, Data Sources with stored credentials cannot be changed. "+"If you proceed, the records will automatically be deleted, "+"but your changes will not be saved and the Data Source will be unavailable until "+"the process completes."+" \n\nWould you like proceed?")){e.cancelRowChanges(n);delete w[o]}}});s("skuid.settings.clearDataSourceChangeWarnings",function(){w={}});s("skuid.settings.newDataSourceWizard.navigateToStep.newAuthProvider",function(){let e=t.$C("salesforce_NewModelDataSourceWizard")||t.$C("NewModelDataSourceWizard");if(e){e.navigate("newAuthProvider_salesforce")}});const P="ODATA_ON_PLATFORM",C="SALESFORCE_ON_PLATFORM",R="SALESFORCE_ON_SALESFORCE";function U(t){let e=false;if(t.ODataBase__ui===true)e=P;if(t.IsSalesforceDataSource__ui===true)e=C;if(t.IsSalesforceService__ui==true)e=R;return e}function F(){return t.$M("stng__DataSources")||t.$M("stng__ModelDataSources")}s("skuid.settings.dataSourceMetadata.enableCache",function(e){let n,o=[],r;if(e.row)o.push(e.row);else if(e.insertResults&&e.insertResults.length){if(e.insertResults[0].success){o.push(e.insertResults[0].record)}}else{o=F().getRows()}if(!o.length)return c();let i=o.filter(function(t){r=t.name?t.name:t.Name;let e=t.type?t.type:r;return r&&e&&U(t)});if(!i.length)return c();n=i[0];r=n.name?n.name:n.Name;let s=U(n);let l;if(s===P){l=setTimeout(function(){a.blockUI({message:"Loading metadata for Data Source..."})},10)}return t.loader.service.loadDataSourceAndDependencies(r).then(t=>{switch(s){case P:return m(t);case C:return d(t);case R:return p(n,e.model)}}).catch(()=>{if(l)clearTimeout(l);return c({$PreviousAction:{Error:"You do not have access to this Data Source."}})});function d(t){let e=t.name;let n=Date.now();t._metadataCacheVersion=n;return h(e)}function p(t,e){a.blockUI({message:"Setting Metadata Cache...",timeout:4e3});let n=Date.now();e.updateRow(t,{skuid__Cache_Time_Stamp__c:n+""});e.save()}function m(t){let e=t.name;delete t._metadataCacheVersion;delete t.metadata;return t.dataSourceType.authenticateAndGetMetadata({dataSource:t,minimalOnly:true}).then(function(t){return h(e,t)}).catch(function(t){let e;if(u.isString(t))e=t;else if(t&&t.response&&t.response.body){e=t.response.body}return c({$PreviousAction:{Error:e}})})}function h(t,e){a.blockUI({message:"Parsing and caching metadata..."});return a.ajax({url:"/api/v1/datasource-metadata?datasource="+t,method:"POST",data:JSON.stringify(e),contentType:"application/json"})}});s("skuid.settings.dataSourceMetadata.disableCache",e=>{let n=e.model||F(),o=e.row||n.getFirstRow(),r=U(o);if(r===R){a.blockUI({message:"Disabling Metadata Caching...",timeout:4e3});return t.loader.service.loadDataSourceAndDependencies(o.Name).then(()=>{if(o.IsSalesforceService__ui){n.updateRow(o,{skuid__Cache_Time_Stamp__c:null});n.save()}}).catch(()=>{return c({$PreviousAction:{Error:"You do not have access to this Data Source."}})})}else{return a.ajax({url:"/api/v1/datasource-metadata?datasource="+o.name,method:"DELETE"})}});function j(t){let e=t.model,n=e&&e.getDataSourceType(),o=t&&t.targetUrl||window.top.location.protocol+"//"+window.top.location.hostname+"/";return n.addRemoteSiteSetting({dataSource:e.getDataSource(),url:o,description:"For Skuid to access the Metadata API"})}s("skuid.settings.addCurrentOrgToRemoteSiteSettings",j);function A(e){return t.remote.promisify(t.SkuidSettingsController,"syncAppManifest").then(function(n){let o=t.$M("stng__ApexJobStatus"),r=function t(){o.updateConditionValue({value:n});return u.delay(2e3).then(function(){return o.load()}).then(function(){let e=o.getFirstRow(),r=o.getFieldValue(e,"Status");if(r==="Completed"){return u.resolve({$PreviousAction:{result:n}})}if(r==="Failed"||r==="Aborted"){return u.reject({$PreviousAction:{result:n}})}return t()})};if(n.indexOf("Remote Site Setting")>-1){return j({model:e?e.model:null,targetUrl:n.substring(n.indexOf("https://"))}).then(A)}return r().then(function(){return{$PreviousAction:{result:n}}})}).catch(function(t){return{$PreviousAction:{error:t}}})}s("skuid.settings.syncAppManifest",A);s("skuid.settings.newModelDataSource.checkForRemoteSite",function(){let e=arguments[0],n=e.model,o=e.row,r="stng__ModelDataSources";if(!n||n.id!==r)n=t.$M(r);if(!o||!n.getRowById(n.getRowId(o)))o=n.getFirstRow();let i=n.getFieldValue(o,"skuid__URL__c",true),s=n.getFieldValue(o,"skuid__Use_Apex_Proxy__c",true),c=false,l=k.getOriginFromUrl(i);a.each(t.$M("stng__AuthProviders").getRows(),function(t,e){let n=e.skuid__Authorize_Endpoint_URL__c,o=e.skuid__Token_Endpoint_URL__c;if(u.startsWith(n,l)||u.startsWith(o,l)){c=true;return false}});let d=s&&!c;let p=n.getFieldValue(o,"Name",true);if(d){return k.checkForRemoteSiteSetting(i,p)}else{a.unblockUI();return true}});s("skuid.settings.newAuthProvider.checkForRemoteSites",function(){let e=arguments[0],n=e.model,o=e.row,r="stng__AuthProvider",i=t.component.getByType("skuid__page")[0];if(!n||n.id!==r)n=t.$M(r);if(!o||!n.getRowById(n.getRowId(o)))o=n.getFirstRow();let s={},u=a.map(["skuid__Authorize_Endpoint_URL__c","skuid__Token_Endpoint_URL__c","skuid__User_Info_Endpoint_URL__c"],function(t){let e=n.getFieldValue(o,t,true),r=e?k.getOriginFromUrl(e):false;if(r&&!s[r]){s[r]=1;return r}});if(u.length&&window.confirm("In order for Skuid to authenticate using this Auth Provider, "+"you will need to create Salesforce Remote Site Settings for the following URL(s):\n\n"+" - "+u.join("\n - ")+"\n\nWould you like Skuid to try to see if the necessary Remote Site Settings"+" corresponding to these URL(s) already exist, and if not, create them for you?")){let t=n.getFieldValue(o,"Name",true);if(t)t=t.replace(/[\W]+/g,"");let e="For Skuid to authenticate using Auth Provider "+t;let r=[];a.each(u,function(t,o){r.push(n.getDataSourceType().addRemoteSiteSetting({dataSource:n.getDataSource(),description:e,url:o}))});i._getCPI().blockUI({message:"Attempting to create Remote Site Settings for "+u.length+" URL(s) ...",styleSettingsVariant:"dark"});return Promise.all(r).then(function(){i._getCPI().blockUI({message:u.length+" Remote Site Setting(s) have successfully been created!",styleSettingsVariant:"dark",timeout:2e3})}).catch(function(t){i._getCPI().blockUI({message:"There was a problem creating the Remote Site Setting(s) for these URL(s):"+t,styleSettingsVariant:"dark",timeout:3e3})})}else{i._getCPI().unblockUI();return true}});s("skuid.crypt.generateKey",function(){let e=t.$M("stng__EncryptionSettings"),n=e.getFirstRow(),o=u.Deferred();window.skuid.SkuidSettingsController.generateNewSkuidCryptKey(function(t){if(t&&typeof t==="string"){e.updateRow(n,"skuid__Key__c",t);o.resolve()}else{o.reject()}});return o.promise()});t.events.subscribe("invalidateLoaderServiceCache",function(t){window.skuid.SkuidSettingsController.invalidateLoaderServiceCache(JSON.stringify({serviceName:t.loaderServiceName}),()=>{return true},{escape:false})})}});return e});