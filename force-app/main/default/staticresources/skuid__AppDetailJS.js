!function(e){var a={};function t(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=89)}({89:function(e,a,t){"use strict";!function(e){var a=e.$,t=e.snippet.register,r=e.utils,i=r.combineUrls;function n(e,a){return"/"===a||""===a?e:i(e,a)}t("dynamics.exportPage",function(){var a=e.$M("PageDeploy").getRows()[0],t=a.dynamicsDataSource,n=e.dataSource.map()[t],s=a.webResourceName,o=a.entityName,u={dataSource:t,webResourceName:s,accessToken:n.authentication.responseBody.access_token};return"SAML"===a.pageAuthentication&&a.samlProvider?(u.samlRedirectUrl=i(window.location.origin,"/auth/saml/sp/"+a.samlProvider+"/redirect"),u.skuidPagePath=a.skuidPageUrl):u.skuidPagePath=i(window.location.origin,a.skuidPageUrl),a.createPage&&(o&&(u.pageEntity=o),u.pageType=a.createPage+"",u.pageName=a.pageName),e.ajax.direct({url:"/api/v1/exportpage/dynamics",type:"POST",body:u,contentType:"application/json",headers:{"x-skuid-data-source-name":n.name}}).then(null,function(e){var a=void 0,t=void 0,i=e.body;return i&&(i=r.parseAsJSONIfString(i))&&(a=i.message),a||(a="Unknown error"),a&&-1!==a.indexOf("missing prvWriteWebResource")?t="Your Dynamics CRM Profile does not have permission to update Web Resources.":a&&-1!==a.indexOf("missing prvCreateWebResource")?t="Your Dynamics CRM Profile does not have permission to create Web Resources.":a&&(t=a),r.reject({$PreviousAction:{Error:t}})})}),t("dynamics.navigateToCustomSettings",function(){var a=e.dataSource.map()[e.$M("PageDeploy").getFirstRow().dynamicsDataSource].serviceUrl,t=a.substring(0,a.indexOf("/api/"))+"/tools/solution/edit.aspx?id=%7bFD140AAF-4DF4-11DD-BD17-0019B9312238%7d";window.open(t)}),t("dynamics.createDataSource",function(){var a=e.$M("PageDeploy").getFirstRow().dynamicsDataSource;return e.loader.service.loadDataSourceAndDependencies(a)}),t("dynamics.createEntityModel",function(){var t=e.$M("PageDeploy"),r="Microsoft.Dynamics.CRM",i='<model id="EntitysCreatable" query="true" createrowifnonefound="false" datasource="'+t.getRows()[0].dynamicsDataSource+'" processonclient="true" deferfieldrendering="true" sobject="Microsoft.Dynamics.CRM.EntityDefinitions" label="EntityDefinitions" labelplural="EntityDefinitions"><fields><field id="EntitySetName" accessible="true" createable="true" editable="true" sortable="true" label="EntitySetName" displaytype="STRING" edmtype="Edm.String" filterable="true" required="false"/><field id="CanCreateFrom__ui" uionly="true" displaytype="FORMULA" ogdisplaytype="TEXT" readonly="true" returntype="TEXT"><formula>{{CanCreateForms.Value}}+""</formula></field><field id="SchemaName" accessible="true" createable="true" editable="true" sortable="true" label="SchemaName" displaytype="STRING" edmtype="Edm.String" filterable="true" required="false"/><field id="CanCreateForms.Value" accessible="true" createable="true" editable="true" sortable="true" label="Value" displaytype="BOOLEAN" edmtype="Edm.Boolean" filterable="false" required="false"/><field id="ObjectTypeCode" accessible="true" createable="true" editable="true" sortable="true" label="ObjectTypeCode" displaytype="NUMBER" edmtype="Edm.Int32" filterable="false" required="false"/><field id="EntitySetName" accessible="true" createable="true" editable="true" sortable="true" label="ObjectTypeCode" displaytype="NUMBER" edmtype="Edm.Int32" filterable="false" required="false"/></fields><conditions><condition type="fieldvalue" value="true" enclosevalueinquotes="true" field="CanCreateFrom__ui"/></conditions><actions/></model>',n=new e.model.Model(i);return n.load().then(function(){var e=n.dataSource.metadata.dataServices.schemaMap[r],i=[];a.each(n.getRows(),function(a,t){var n=t.EntitySetName,s=e.entitySetMap[n];if(s){var o=s.entityType,u="";u=-1!==o.indexOf(r)?o.substring(r.length+1):o,i.push({value:u,label:u})}}),t.fieldsMap.entityName.picklistEntries=i})}),t("native.createApp",function(){var a=arguments[0].changes,t=e.utils.userInfo;return{id:a.id,name:a.name,android:a.android,ios:a.ios,user_id:t.userId,user_username:t.userName,user_first_name:t.firstName,user_last_name:t.lastName,user_email:t.email,organization_id:t.organizationId,subdomain:window.location.host.split(".")[0],assets_url:e.coreAssetBase}}),t("native.loadNativeAppModel",function(){var a=e.$M("NativeApp");if(e.platform.hasFeature("Native"))return a.load()}),t("native.createPages",function(){var a=e.$M("App").getFirstRow(),t=e.$M("Routes"),r=t.dataMap[a.default_route_id],i=e.$M("NativePages"),n=i.createRow();return i.updateRow(n,{id:r.page.id,name:r.page.name,is_default:!0,namespace:"",route:r.fq_route}),i.save().then(function(){i.emptyData();for(var e=0;e<t.data.length;e++){var a=t.data[e];if(r.id!==a.id){var n=i.createRow();i.updateRow(n,{id:a.page.id,name:a.page.name,is_default:!1,namespace:"",route:a.fq_route})}}return i.save()}).then(function(){return i.emptyData()})}),t("native.createPage",function(){var a=arguments[0],t=e.$M("SkuidPages"),r=a.changes;return{name:r.name,is_default:!1,page_id:t.data.find(function(e){return e.name===r.name}).id,assets_url:e.coreAssetBase}}),t("native.updateApp",function(){return{assets_url:e.coreAssetBase}}),t("native.buildApp",function(){var a=arguments[0].changes,t=e.utils.userInfo;return{android_key_alias:a.android_key_alias,android_key_passphrase:a.android_key_passphrase,android_keystore_passphrase:a.android_keystore_passphrase,apple_key_passphrase:a.apple_key_passphrase,username:t.userName,first_name:t.firstName,last_name:t.lastName,email:t.email}}),t("AppDetail.UrlRenderer",function(a,t){var r=a.mode,i=e.$M("App").getFirstRow(),s=t;"edit"!==r&&(s=n(i.base_url,t)),e.ui.getFieldRenderer("TEXT")[r](a,s)}),t("AppDetail.ParseRouteParameters",function(a){var t=a.row.fq_route,r=e.$M("apps__RouteParameters");r.emptyData(),r.adoptRows(e.Mustache.parse(t,["{","}"]).filter(function(e){return"name"===e[0]}).map(function(e){var a=e[1],t=a.indexOf("*")>-1,r=a.indexOf("?")>-1,i=r||t;return r&&(a=a.replace("?","")),t&&(a=a.substring(0,a.indexOf("*"))),{IsOptional:i,Name:a,FullName:"{"+e[1]+"}"}}))}),t("AppDetail.PreviewParameterizedRoute",function(a){var t=a.row.fq_route;e.$M("apps__RouteParameters").getRows().forEach(function(e){t=t.replace(e.FullName,e.Value||"")}),r.redirect({url:t,window:"blank"})}),t("AppDetail.ComputeFullyQualifiedUrlPreview",function(a){a.model.updateRow(a.row,"fq_route__preview",n(e.$M("App").getFirstRow().base_url,a.row.route))})}(skuid)}});