!function(a){var r={};function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=336)}({336:function(e,t,a){"use strict";var r,j=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(n)throw o}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(8),x=(r=n)&&r.__esModule?r:{default:r};function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(_){var e=_.snippet.register,t=_.componentType.register,u=_.$,s=_.utils,a=_.constants,c=a.MIME_TYPES.JSON,d=_.platform.getEntityFieldName,h=_.platform.getEntityFieldNames,l=a.SALESFORCE;function r(e){var t="",a=e.responseJSON;return a?(a.error&&(t+=a.error),a.message&&(t+=(t?": ":"")+a.message)):t+=e.responseText,t}function n(e){return s.reject({$PreviousAction:{error:r(e)}})}function o(e){var t=r(e);if(f(t)){var a=m();a.updateRow(a.getFirstRow(),"dso_import_error",t)}return s.reject({$PreviousAction:{error:t}})}function i(e){return m().cancel(),e}function f(e){var t=e.split("\n\n");return 3===t.length&&"The import could not be completed because of missing related objects."===t[0]}function p(){return x.default.getAPIToken().then(function(e){var t={Accept:c,"Content-Type":c,Authorization:"Bearer "+e.jwt,"x-skuid-public-key-endpoint":_.platform.getPublicKeyEndpoint()};return s.inPlatform([a.VISUALFORCE,a.LIGHTNING])&&(t["x-skuid-session-id"]=_.utils.userInfo.sessionId),t})}function b(){return _.$M("stng__DataSources")||_.$M("stng__ModelDataSources")}function m(){return _.$M("stng__DataSource_Warden")}function g(){return _.$M("stng__DSOImport")}function y(){return _.$M("stng__SiteEnv")}function S(){return b().getFirstRow()}function v(e,t,a){var r=M({},_.platform.getEntityFieldName("data_service","is_active"),!0);if(a&&a.version&&(r[_.platform.getEntityFieldName("data_service","version")]=a.version),e&&t)return e.updateRow(t,r),e.save()}function w(){var e=b(),t=S(),a=_.$M("stng__DataServices"),r=h("data_source"),n=r.data_service_id,o=r.data_service,i=e.getFieldValue(t,n,!0),s=e.getFieldValue(t,o,!0);if(!s&&i&&(s=t[o]=a.getRowById(i)),!i){var u,c=y().getFirstRow(),d=c.PLINY_WARDEN_HOST,l=c.PLINY_WARDEN_PORT,f=c.PLINY_WARDEN_VERSION,p=h("data_service"),m=p.host,g=p.port,v=p.version;M(u={},m,d),M(u,g,l),M(u,v,f),s=u}return s}function T(e){var t=e[d("data_service","host")],a=e[d("data_service","port")];return"https://"+t+(a?":"+a:"")}function P(){return T(w())}function D(e,t,a){var r=w()[_.platform.getEntityFieldName("data_service","version")];if(r){var n=r.split(".");if(3==n.length){var o=n.map(function(e){return parseInt(e,10)}),i=j(o,3),s=i[0],u=i[1],c=i[2];if(e<=s&&t<=u&&a<=c)return!0}}return!1}function R(){return O()+"/source-entity"}function O(){return P()+"/api/v2/datasources/"+S()[_.platform.getEntityFieldName("data_source",D(0,2,3)?"name":"external_id")]}function E(e){var t=e.name,a=e.schema,r=t,n=s.capitalizeFirst(t),o=n;return a&&(r+="_"+a),s.endsWith(o,"s")||(s.endsWith(o,"y")?o=o.substring(0,o.length-1)+"ies":o+="s"),{entity:t,label:n,labelPlural:o,name:r,schema:a,tableName:t}}function k(t){return p().then(function(e){return u.ajax({url:R(),method:"PATCH",headers:e,data:JSON.stringify({operation:"import",payload:Array.isArray(t)?t.map(E):[E(t)]}),contentType:c,dataType:"json"}).then(i).catch(o)})}function A(){var e=_.model.getModel("stng__ConnectionTest"),t=e.createRow();return t.status="Success!",t.message="The Data Source appears to be correctly configured.",e.save(),!0}function I(e){var t=_.model.getModel("stng__ConnectionTest"),a=t.createRow();return a.status="Unsuccessful.",a.message="Skuid could not connect to the Data Source.\n",a.message+="Please check all configuration values and make sure the Data Source ",a.message+="can be accessed from Skuid's web servers in your region.\n\n",e&&e.responseJSON&&e.responseJSON.message?a.message+=e.responseJSON.message:e&&e.statusText&&"timeout"!==e.statusText&&(a.message+=e.statusText),t.save(),!0}function N(e){if(e){var t="env_specific_config_map",a={database_username_config:"database_username",database_password_config:"database_password",database_name_config:"database_name"};for(var r in a)if(e[r]){e[t]={};break}for(var n in a){if(e[n]){var o=e[n];e[t][a[n]]={id:o}}delete e[n]}}}e("DSC_Value_Editor",function(e,t){var a=e.metadata.displaytype,r=e.mode;"userinfo"===e.row.type?(e.metadata.picklistEntries=["Email","Federation Id","First Name","Last Name","Site Id","Username","User Id"].map(function(e){return{label:e,value:e.split(" ").map(function(e){return e.toLowerCase()}).join("_")}}),e.required=!0,a="PICKLIST",r="read"===e.mode||"readonly"===e.mode?"read":"edit"):e.required=!1,_.ui.fieldRenderers[a][r](e,t)}),e("Update_DSC_Value_Editor",function(e){var t=e.component,a=e.rowId,r=e.row,n=t.registeredFieldsByRowThenField[a].value;t.updateRow(r,"value",""),u.each(n,function(){this.render()})}),e("BuildProfilePermissionSummary",function(){var e=arguments[0].model,n=["createable","deleteable","queryable","updateable"],t=_.$M("Profile"),o={};u.each(e.data,function(e,a){var r=a.permission_set_id;o[r]={},u.each(n,function(e,t){o[r][t]=a[t]})});var i={};u.each(t.getRows(),function(e,t){var a=o[t[d("profile","name")]],r=i[t[d("profile","id")]]={};u.each(n,function(e,t){a&&(r[t]=a[t])})}),t.updateRows(i),t.hasChanged=!1,t.originals=u.extend({},t.changes),t.changes={},t.cancel()}),e("buildPermissionCache",function(){var e=arguments[0].model,n={},t=void 0,a=void 0,o=void 0;switch(e.id){case"DataSourceObjectPermissions":t="data_source_object_id",a="stng__DataSourceObjects",o={queryable:"queryable",createable:"createable",updateable:"updateable",deleteable:"deleteable"};break;case"DataSourceFieldPermissions":t="data_source_field_id",a="stng__DataSourceFields",o={queryable:"queryable",createable:"createable",updateable:"updateable"};break;case"DataSourceConditionPermissions":t="data_source_condition_id",a="stng__DataSourceConditions",o={alwaysOn:"always_on"}}if(t){var r=_.$M(a);u.each(e.data,function(e,a){var r=a[t];n[r]={},u.each(o,function(e,t){n[r][t]=a[e]})});var i={};u.each(r.getRows(),function(e,t){var a=n[t.id],r=i[t.id]={};u.each(o,function(e,t){a&&(r[t]=a[t])})}),r.updateRows(i),r.hasChanged=!1,r.originals=u.extend({},r.changes),r.changes={},r.cancel()}}),e("saveScheme",function(){var e=m().getFirstRow(),t=_.$M("stng__DataSourceObjects").getFirstRow(),a=_.$M("stng__DataSourceFields"),r=_.$M("stng__DataSourceConditions"),n={name:_.$M("Profile").getFirstRow()[_.platform.getEntityFieldName("profile","name")],dataSourcePermissions:{}},o={dataSourceObjectPermissions:{}},i={createable:!!t.createable,queryable:!!t.queryable,updateable:!!t.updateable,deleteable:!!t.deleteable,dataSourceFieldPermissions:{},dataSourceConditionPermissions:{}};return u.each(a.data,function(e,t){i.dataSourceFieldPermissions[t.name]={createable:!!t.createable,queryable:!!t.queryable,updateable:!!t.updateable}}),u.each(r.data,function(e,t){i.dataSourceConditionPermissions[t.name]={alwaysOn:!!t.always_on}}),o.dataSourceObjectPermissions[t.name]=i,n.dataSourcePermissions[e.name]=o,p().then(function(e){return u.ajax({url:P()+"/api/v2/permissionsets",method:"PATCH",headers:e,data:JSON.stringify(n),contentType:c,dataType:"json"})})}),e("validateDataServiceName",function(){var r=_.component.getByType("skuidpage")[0],e=_.$M("stng__DataServices").changes,n=/^[a-z0-9_-]+$/i;return u.when().then(function(){u.each(e,function(e,t){if(t.Name&&"Name"in t&&!n.exec(t.Name)){var a="The name must only contain alpha-numeric characters, underscores, and dashes";throw r.addProblem(a),a}})})}),e("skuid.settings.dataSources.pingDataService",function(e){return function(t,a){var r=a?T(a):P();return p().then(function(e){return u.ajax({url:r+"/api/v2/ping",method:"GET",headers:e}).then(function(e){return v(t,a,e)})})}(e.model,e.row).catch(n)}),e("skuid.settings.dataSources.registerDataService",function(e){return function(r,n){return p().then(function(e){var t=_.utils.userInfo.organizationId,a=n?T(n):P();return u.ajax({url:a+"/api/v2/site/"+t+"/register",method:"POST",headers:e}).then(function(e){return v(r,n,e)})})}(e.model,e.row).catch(n)}),e("skuid.settings.dataSources.populateDefaultDataService",function(){return _.platform.getDefaultDataService().then(function(r){_.$M("stng__SiteEnv").adoptRow(["WARDEN_HOST","WARDEN_PORT","WARDEN_VERSION","OUTBOUND_IP_ADDRESSES"].reduce(function(e,t){var a="PLINY_"+t;return r[a]&&(e[a]=r[a]),e},{}))})}),e("testConnection",function(){return p().then(function(e){return u.ajax({url:O()+"/poke",method:"GET",headers:e,contentType:c,dataType:"json"})}).then(A).catch(I)}),e("addDependentTablesAndRetry",function(){return function a(){var u=_.component.getById("dso-import-table"),e=m(),c=g(),t=e.getFieldValue(e.getFirstRow(),"dso_import_error");f(t)&&t.split("\n\n")[1].split("\n").forEach(function(e){var t=e.split(", "),a=t[0].substring("Table: ".length),r=t[1].substring("Schema: ".length),n=c.getRows([{field:"name",value:a},{field:"schema",value:r}]);if(0<n.length){var o=n[0],i=c.getRecordForRow(o),s=u.list.getRenderedItemByRowId(i.id());s.selected||s.element.find(".nx-skootable-rowselect").trigger("click.skuid")}});var r=u.list.getSelectedItems().map(function(e){return e.row});return k(r).catch(function(e){if(e.$PreviousAction&&e.$PreviousAction.error){var t=e.$PreviousAction.error;if(t&&null!=t&&f(t))return a()}return e})}()}),e("importDSO",function(e){var t=e.row,a=e.item;return e.list.editor.handleCancel(),a.element.find(".nx-skootable-rowselect").trigger("click.skuid"),k(t)}),e("importMultipleDSOs",function(e){var t=e.rows;return D(0,2,4)?k(t):u.when.all(t.map(k))}),e("importDSOS",function(){var a=_.$;return p().then(function(e){return a.ajax({url:R(),headers:e}).then(function(e){var t=g();t.abandonAllRows(),t.adoptRows(a.map(e,function(e){return{name:e.tablename,schema:e.tableschema}}))}).catch(n)})}),t("outboundIPsComponent",function(e){var t=y(),a=t.getFirstRow(),r=a&&t.getFieldValue(a,"PLINY_OUTBOUND_IP_ADDRESSES");if(r&&r.length){var n=u("<h3>").text("Skuid Outbound Connection IP Addresses"),o=u("<p>").text("Skuid may use any one of the following static IP addresses to connect directly from the cloud to your datasources."),i=u("<p>").text("If you use a firewall for your datasources, these IP addresses may need to be whitelisted on your firewall."),s=u("<ul>");u.each(r,function(e,t){s.append(u("<li>").text(t))}),e.append(n,o,i,s)}}),e("testNewConn",function(){return function(){var e=m().getFirstRow(),t=S(),a={url:e.url,database_username:e.database_username,database_password:e.database_password,database_name:e.database_name,database_username_config:e.database_username_config,database_password_config:e.database_password_config,database_name_config:e.database_name_config,type:t[d("data_source","type")]};N(a);var r=P()+"/api/v2/datasources/poke";return p().then(function(e){return u.ajax({url:r,method:"POST",headers:e,data:JSON.stringify(a),contentType:c,dataType:"json"})}).then(A).catch(I)}()}),e("dataSourceVariableMerge",function(){var e=arguments[0],t=e.changes,a=e.model.data[0];return N(t),N(a),t}),new _.formula.FormulaFunction("GET_FEATURE_VALUE",function(e){var t=_.features[e];return t?t.value:0},{argCount:1,namespace:"skuid_stng",returnType:a.JS_TYPES.STRING});var F=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/;function C(){var t=_.$M("stng__DataServiceSettings");return t.emptyData(),_.remote.promisify(_.remote(),"getDataServiceConfig").then(function(e){t.adoptRow(e)})}new _.formula.FormulaFunction("IS_VALID_HOST_OR_IP_ADDRESS",function(e){return"localhost"===e||F.test(e)},{argCount:1,namespace:"skuid_stng",returnType:a.JS_TYPES.BOOLEAN}),e("skuid.settings.dataSources.getCertificates",function(){return s.inPlatform(a.VISUALFORCE)?_.sfdc.api.query("SELECT DeveloperName,MasterLabel FROM Certificate ORDER BY MasterLabel",{useToolingApi:!0}).then(function(e){return e.records.map(function(e){var t=e.DeveloperName;return{label:e.MasterLabel,value:t}})}):s.resolve([])}),e("skuid.settings.dataSources.queryDataServiceConfig",C),e("skuid.settings.dataSources.modifyDataServiceConfig",function(){var e=_.$M("stng__ModifyDataServiceSettings"),t=e.getFirstRow(),a=e.getRowChanges(t),r=_.dataSource.get(l),n=_.dataSource.getType(l),o=void 0;function i(){return n.makeMetadataApiRequest({dataSource:r,body:"<checkDeployStatus><id>"+o+"</id></checkDeployStatus>"})}return _.remote.promisify(_.remote(),"modifyDataServiceConfig",JSON.stringify(a)).then(function(e){return o=e,function t(){return s.delay(500).then(i).then(function(e){if("true"!==e.done)return t();if("true"===e.success)return"Job Succeeded";throw"Job failed: "+e.details})}()}).then(C).catch(function(e){return s.reject({$PreviousAction:{error:e}})})}),_.events.subscribe("skuid.settings.jwtSigningCertificateChanged",x.default.refreshAPIToken)}(skuid)},8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}}();var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"refreshAPIToken",value:function(){var r=this;return skuid.platform.services.getToken().then(function(e){var t=e.token,a=r.extractJWTPayload(t).exp;return r.apiToken={expiration:a,jwt:t}})}},{key:"extractJWTPayload",value:function(e){var t=e.split(".");if(3!=t.length)throw new Error("JWT not formatted correctly");var a,r,n=void 0;try{a=t[1],r=(a+"===".slice((a.length+3)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=atob(r)}catch(e){throw new Error("Error decoding JWT payload")}var o=void 0;try{o=JSON.parse(n)}catch(e){throw new Error("Error parsing JWT payload")}return o}},{key:"getAPIToken",value:function(){var e=this.apiToken;return e&&this.isValid(e)?skuid.utils.resolve(e):this.refreshAPIToken()}},{key:"isValid",value:function(e){var t=void 0;return(t=skuid.utils.isString(e)?this.extractJWTPayload(e).exp:e.expiration)&&t>Date.now()/1e3}}]),e}();t.default=new n}});