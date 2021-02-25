!function(e){var t={};function a(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=61)}({0:function(e){e.exports={date:"1534254252473",id:"v1",major:11,minor:4,patch:0,number:"11.4.0",name:"Millau (11.4.0)",path:"v1"}},61:function(e,t,a){"use strict";var i,n=a(0),r=(i=n)&&i.__esModule?i:{default:i};!function(e){var t=e.$,a=t.each,i=e.utils,n=e.dataSource.utils,o=e.data.v2.sessionStorage,s={None:!1,SystemRequired:!0,ApplicationRequired:!0,Recommended:!1},u="Microsoft.Dynamics.CRM.PicklistAttributeMetadata",d="Microsoft.Dynamics.CRM.StatusAttributeMetadata",c="Microsoft.Dynamics.CRM.StateAttributeMetadata",l="statecode",p="statuscode",f={1:{endpoint:"WinOpportunity",objectParameterName:"OpportunityClose"},2:{endpoint:"LoseOpportunity",objectParameterName:"OpportunityClose"}};if(!e.dataSource.getType("MicrosoftDynamics")){var m=e.dataSource.core.ODataDataSourceTypeBase;new m({name:"MicrosoftDynamics",supportsToLowerForFilters:function(){return!1},getGenericErrorMessage:function(){return"Unknown error occured during Dynamics request"},preSaveHook:function(a,n,r,o){if(!(o&&("opportunities"===o.type||"Microsoft.Dynamics.CRM.opportunities"===o.type)&&!!i.size(o.updates)))return t.when();var s=e.model.getModel(o.id),u=n&&n.serviceUrl,d=s&&s.getField(l),c=d&&d.picklistMetadata,m=c&&c.stateDefaultMapping;return d&&m&&u?t.when.all(t.map(r,function(e){var r=e.data,d="PATCH"===e.method,c=r&&r[l],y=r&&r[p];if(d&&(1===c||2===c)){var b=e.__oldid,h=b&&s.getRecordById(b).row(),S=h&&s.getRowOriginals(h),M=f[c],R=M.endpoint,D=M.objectParameterName,I={},U=!0,O=t.when();return I[D]={"opportunityid@odata.bind":i.combineUrls(u,e.requestUri)},delete r[l],delete r[p],t.each(r,function(e){if(-1===e.indexOf("@odata")||"@odata.bind"===e)return U=!1,!1}),U&&(r.__shouldRemove=!0),(i.isUndefined(y)||isNaN(y))&&(y=m[c]),I.Status=y,S&&S[l]+""!="0"&&(O=function(e,t,a,i){var n={};return n[l]=0,n[p]=a,n["@odata.type"]="#Microsoft.Dynamics.CRM.opportunity",g(t,{url:i,method:"PATCH",headers:v({"Content-ID":e}),body:JSON.stringify(n)})}(b,n,m[0],i.combineUrls(u,e.requestUri))),O.then(function(){return g(n,{url:i.combineUrls(u,R),method:"POST",headers:v(),body:JSON.stringify(I)})}).then(function(){a.updateResults.push({errors:[],id:b,messages:[],record:JSON.stringify({statecode:c,statuscode:y}),source:o.id,success:!0})}).catch(function(){a.updateResults.push({errors:[{message:"There was an error attempting to update the Opportunity Status"}],id:b,messages:[],record:{},source:o.id,success:!1})})}})):t.when()},coerceResponseItemData:function(e,a,i,n){a&&"204"===a.statusCode&&i&&t.each(i,function(e){if(!n||!n[e]){if("@odata.type"===e){var t=i[e];return delete i[e],void(i["@odata\\.type"]=t)}delete i[e]}})},coerceRequest:function(e,t){var a=t.model;if(a){var i=0|a.recordsLimit;if(i>0&&(e.headers.Prefer="odata.maxpagesize="+(i+1)),t.addOnly&&a.paginationURL){var n=a.paginationURL.split("$skiptoken="),r=n[n.length-1];e.parameters={$skiptoken:r}}}},isPolyMorphicField:function(e){return"owninguser@odata.bind"===e?"owninguser@odata.bind":"owningteam@odata.bind"===e?"team@odata.bind":void 0},coerceResponse:function(e,t){if(t&&e){var a=e.body&&e.body["@odata.nextLink"];a?(t.canRetrieveMoreRows=!0,t.paginationURL=a.substring(a.indexOf("$skiptoken"))):t.canRetrieveMoreRows=!1}},coerceSaveItemRequest:function(a,i){var n=this,r=["Edm.DateTimeOffset","Edm.DateTime"];a.headers["Content-ID"]=""+i.key;var o=i&&i.model&&i.model.fieldsMap;t.each(a.data,function(t,i){n.isPolyMorphicField(t,i)&&(delete a.data[t],a.data["ownerid@odata.bind"]=i),o&&o[t]&&-1!==r.indexOf(o[t].edmtype)&&(a.data[t]=e.time.parseDateTimeString(i).toISOString())})},supportsBatch:function(){return t.Deferred().resolve(!0).promise()},coerceAdditionalQueries:function(e){e.requestUri=e.requestUri.replace("guid'","").replace("')",")")},evaluateUserInfoConditionSourceType:function(e,a){if("RoleName"!==a&&"RoleId"!==a)return e.getUserInfoProperty(a);var n=e.getUserInfoProperty("Roles")||[];if("RoleId"===a)return n.join(";");var r=i.keyBy(function(e){return i.grab(e,"metadata","securityRoles")||[]}(e),"roleid")||{};return t.map(n,function(e){var t=r[e]&&r[e].name;return t&&[t,t.toLowerCase()]}).join(";")},getTopClause:function(){},getSkipClause:function(){},getEntitySetFromEntityTypeName:function(e,t){var a=this.getEntityType(e,t);return a.entitySetName?this.getEntitySet(a.entitySetName,t):m.prototype.getEntitySetFromEntityTypeName(e,t)},getDefaultFieldsForReferenceField:function(e,t,a){return[i.getFieldReference(e,t,a),e+"."+t.keyField]},produceErrorTextFromErrors:function(e){return"Dynamics Web API Query error: "+t.map(e,function(e){var t,a,n,r=i.grab(e,"response","body");return r?(t=r.message,a=r.statusCode,"Not Implemented"===(n=r.error)?"Attempted a query not supported by the Dynamics Web API ("+a+" - "+n+")":t+" ("+n+" - "+a+")"):i.isString(e)?e:i.grab(e,"response","error")||"Bad Request"}).join("; ")},withinADynamicsPage:function(){return"true"===i.deparam(window.location.search).inDynamics},getNameFieldURLForReferenceField:function(t,a,n){var r=t.model,o=t.row,s=t.metadata,u=t.options.fieldXML,d=u&&u.attr("redirecttype")||"datasourcedefault",c=e.dataSource.DataSourceType.prototype.getNameFieldURLForReferenceField;if("datasourcedefault"!==d)return c(t,a,n);var l,p,f=r.dataSource,m=f.metadata,y=f.dataSourceType,b=y.getEntitySet(r.objectName,m),g=b&&y.getEntityType(b.entityType,m),h=g&&g.nameField===t.id,v=r.getRowId(o),S=o&&o[t.id]&&o[t.id][s.keyField],M=s.ref&&this.getEntityType(s.ref,m),R=M&&M.name;return R?(l=S,p=R):h&&(l=v,p=g.name),l&&p?'<a href="'+(f.serviceUrl.substring(0,f.serviceUrl.indexOf("/api/")+1)+"main.aspx?etn="+i.encodeHTML(p)+"&id="+i.encodeHTML(l)+"&pagetype=entityrecord")+'" target="'+(this.withinADynamicsPage()?"top":"_blank")+'">'+n+"</a>":void 0},coerceEntitySetList:function(e){var a=this;b(e,function(e){return i.isString(e)}),t.each(e,function(t,i){i.value=a.trimDefaultNamespace(e[t].value)})},getKeyFields:function(e){var a={},i=e.key;return"systemuser"===e.name?(a.systemuserid={id:"systemuserid",entityType:e},a):"team"===e.name?(a.teamid={id:"teamid",entityType:e},a):(t.isArray(i)&&(i=i[0]),i&&i.propertyRef&&t.each(i.propertyRef,function(t,i){a[i.name]={id:i.name,entityType:e}}),a)},populateExtraServersideCachedMetadata:function(a){return t.when.all([this.fetchEntityDetailsNotIncludedInMetadataBlob(a),this.fetchSecurityRoles(a)]).then(function(){return a.metadata}).catch(function(i){return t.each(i,function(t,a){a&&a.message&&-1!==a.message.indexOf("Roles")&&e.component.getByType("skuidpage")[0].addProblem(a.message)}),a.metadata})},fetchSecurityRoles:function(e){var a=e.serviceUrl;return g(e,{url:i.combineUrls(a,"roles?$select=name,roleid,_businessunitid_value"),method:"GET",headers:v()}).then(function(a){var n=i.grab(a,"body","value");n&&(t.each(n,function(e,t){if(t){var a=t._businessunitid_value;delete t["@odata.etag"],delete t._businessunitid_value,t.businessUnitId=a}}),e.metadata.securityRoles=n)}).catch(function(){throw new Error("Error Fetching Security Roles")})},fetchEntityDetailsNotIncludedInMetadataBlob:function(e){var a=this,n=e.metadata,r={dataSource:e,requestUri:i.combineUrls(e.serviceUrl,"EntityDefinitions?$select="+["MetadataId","DisplayCollectionName","EntitySetName","PrimaryIdAttribute","DisplayName","SchemaName","LogicalName","PrimaryNameAttribute"].join(","))};return a.makeODataRequest(e,r).then(function(e){var i=a.getSchema(n,"Microsoft.Dynamics.CRM"),r=e.value,o=i.entityTypeMap,s=i.entitySetMap;return t.each(r,function(e,t){var a=t.LogicalName,i=o[a],n=t.PrimaryNameAttribute,r=t.DisplayName,u=t.PrimaryIdAttribute,d=t.DisplayCollectionName;if(i){u&&i.key&&i.key[0]&&i.key[0].propertyRef[0]&&(i.key[0].propertyRef[0].name=u),i.nameField=n,i.MetadataId=t.MetadataId,i.entitySetName=t.EntitySetName;var c=s[i.entitySetName];c&&d&&d.UserLocalizedLabel&&(c.label=d.UserLocalizedLabel.Label),r&&r.UserLocalizedLabel&&(i.label=r.UserLocalizedLabel.Label),c&&"activitypointers"===c.name&&(c.label=c.label+" (Read-Only)")}}),n})},trimDefaultNamespace:function(e){return 0===e.indexOf("Microsoft.Dynamics.CRM")?e.substring("Microsoft.Dynamics.CRM".length+1):e},getEntityDefinitionEndpointForAttributes:function(e,t){return i.combineUrls(t.serviceUrl,"EntityDefinitions("+e.MetadataId+")/Attributes")},getSpecificPicklistEndpoint:function(e,t,a,n){var r=this.getEntityDefinitionEndpointForAttributes(e,t);return i.combineUrls(r+"("+a+")",n+"?$select=LogicalName&$expand=OptionSet($select=Options),GlobalOptionSet($select=Options)")},getPicklistMetadataForEntityProps:function(e,i,n){var r,o=this,s=o.getSchema(i.metadata),u=s.entitySetMap,d=s.entityTypeMap,c={},l=[];return a(e,function(e,t){var i=u[o.trimDefaultNamespace(t.objectName)];(r=i&&d[o.trimDefaultNamespace(i.entityType)])&&r.MetadataId&&(r.builtMaps||o._buildEntitySpecificMaps(r,s,n),a(t.fields,function(e,t){var a=r.propertyMap&&r.propertyMap[t.id];a&&y(a.metadataType)&&!a.picklistEntries&&(c[JSON.stringify({entityTypeName:r.name,propId:a.metadataId,type:a.metadataType})]=!0)}))}),a(c,function(e){e=JSON.parse(e);var t=d[e.entityTypeName],a=o.getSpecificPicklistEndpoint(t,i,e.propId,e.type);l.push(o.makeCacheableODataRequest(i,{requestUri:a}).then(function(e){return o.handleNewFieldMetadata([e],t)}))}),t.when.all(l)},parseOptions:function(e){return t.map(e,function(e){return{value:e.Value,label:i.getObjectProperty(e,"Label.UserLocalizedLabel.Label")||e.Value}})},extractPicklistMetadata:function(e,a){var n={};if(e===c){n.isState=!0;var r=n.stateDefaultMapping={};return t.each(a,function(e,t){i.isUndefined(t.Value)||i.isUndefined(t.DefaultStatus)||(r[t.Value]=t.DefaultStatus)}),n}if(e===d){n.isStatus=!0;var o=n.validStateMapping={};return t.each(a,function(e,t){i.isUndefined(t.Value)||i.isUndefined(t.State)||(o[t.State]=o[t.State]||{},o[t.State][t.Value]=!0)}),n}},coerceUpdateRows:function(e,a){t.each(a,function(t,a){if(!i.isUndefined(a[l])){var n=e.getField(l),r=n&&n.picklistMetadata;if(r&&r.isState){var o=e.getRecordById(t),s=e.getField(p),u=a[l]+"",d=a[p]&&a[p]+""||o&&o.get(p),c=r.stateDefaultMapping,f=function(e,t,a){return!!i.grab(e,"picklistMetadata","validStateMapping",t,a)}(s,u,d),m=c&&c[u];if(o&&!i.isUndefined(m)&&s&&i.grab(s,"picklistMetadata","isStatus")&&(m+="",!f)){if(!i.isUndefined(a[p])&&m===a[p])return;a[p]=m}}}})},getValidPicklistEntriesSync:function(e){var a,n,r=e.metadata,o=r.picklistEntries,s=e.row,u=r.picklistMetadata,d=s&&s.statecode;return u&&u.isStatus&&!i.isUndefined(d)?(n=u.validStateMapping,a=n[d]||{},t.map(o,function(e){if(a[e.value])return e})):o},getValidPicklistEntries:function(e){return i.resolve(this.getValidPicklistEntriesSync(e))},appendAttributesToProperty:function(e,t){var a=t.OptionSet||t.GlobalOptionSet,n=a&&a.Options;if(n)return e.picklistEntries=this.parseOptions(n),void(e.picklistMetadata=this.extractPicklistMetadata(e.metadataType,n));e.metadataId=t.MetadataId,e.defaultValue=t.DefaultFormValue,e.attributeType=t.AttributeType,e.metadataType=t["@odata.type"]&&t["@odata.type"].split("#").pop(),e.helptext=i.getObjectProperty(t,"Description.UserLocalizedLabel.Label")||"",e.label=i.getObjectProperty(t,"DisplayName.UserLocalizedLabel.Label")||e.name,e.format=t.Format,e.accessible=t.IsValidForRead,e.createable=t.IsValidForCreate,e.editable=t.IsValidForUpdate,e.isRequired=t.RequiredLevel&&t.RequiredLevel.Value},isDefEditable:function(e,t){return!1!==e.editable&&!1!==t.editable&&"Uniqueidentifier"!==e.attributeType&&!!e.metadataId},isDefFilterable:function(e,t){var a=t&&t.id;return(!a||-1===a.indexOf("."))&&("String"===e.attributeType||"Memo"===e.attributeType)},fieldIsFilterableWhenSearchingReferenceFieldOptions:function(e){return"Edm.String"===e.edmtype},isDefCreateable:function(e,t){return!!e.metadataId&&(("Uniqueidentifier"!==e.attributeType||"Edm.Guid"!==e.type)&&(!1!==e.createable&&!1!==t.createable))},isDefRequired:function(e,t){var a=s[e.isRequired]&&!1!==t.createable&&!1!==e.createable&&"Edm.Guid"!==e.type;if(!e.metadataId)return!1;if(e.picklistEntries&&!i.isUndefined(e.defaultValue)&&"SystemRequired"===e.isRequired)for(var n=0;n<e.picklistEntries.length;n++)if(e.picklistEntries[n].value===e.defaultValue)return!0;return a},getReferenceFieldRelatedData:function(a,n,r,o){var s,u,d,c,l,p,f,m=a.id,y=a.keyField,b=i.isString(n)?n:n[y];if(y&&t.isPlainObject(n)&&n[y]&&i.size(n)>1)return n;var g=o.getRows();for(p=0;p<g.length;p++)if(g[p]!==r&&(c=g[p][m])&&c[y]===b)return c;for(u=o.dataSource&&o.dataSource.name,s=e.model.getModelsByDataSource(u),p=0;p<s.length;p++)for(g=(d=s[p]).getRows(),f=0;f<g.length;f++){if(l=g[f],d.getRowId(l)===b)return l;if((c=l[m])&&c[y]===b)return c}var h={};return h[y]=b,h},coerceRequestedFields:function(e){var t={productassociationid_productassociation:1,parentbundleid_opportunityproduct:1,ownerid:1};return b(e,function(e){return!!t[e.id]||!!e.isArray}),e},coerceFieldMetadata:function(e,t){t.helptext&&(e.inlineHelpText=t.helptext),t.label&&(e.label=t.label),t.metadataId?e.metadataId=t.metadataId:e.label=n.makeLabelFromId(e.id),t.picklistEntries?(e.displaytype="PICKLIST",e.picklistEntries=t.picklistEntries,e.picklistMetadata=t.picklistMetadata,!t.defaultValue&&0!==t.defaultValue||-1===t.defaultValue||(e.defaultValue=t.defaultValue)):null!==t.defaultValue&&void 0!==t.defaultValue&&(e.defaultValue=t.defaultValue),y(t.metadataType)&&(e.displaytype="PICKLIST")},handleNewFieldMetadata:function(e,t){if(e){t.hasExtraMetadata=!0;var i=this;a(e,function(e,a){var n=t.propertyMap[a.LogicalName]||t.navigationPropertyMap[a.LogicalName];n&&i.appendAttributesToProperty(n,a)})}},getDefaultNamespace:function(){return"Microsoft.Dynamics.CRM"},coerceConditionValue:function(e,t){var a=t.picklistEntries,i=a&&a.length;if(!i||("0"|e)===e)return e;for(var n=0;n<i;n++)if(a[n].label===e)return a[n].value+"";return e},getExtraEntityMetadata:function(i,n){var o=this,s=[],u=i.metadata,d=o.getSchema(u,"Microsoft.Dynamics.CRM"),c=d.entitySetMap,l=d.entityTypeMap,p={};return i._offlineStoreQueued||(i._offlineStoreQueued=!0,e.events.subscribeOnce("models.loaded").then(function(){i._offlineStoreQueued=!1,e.storage.getDb(r.default.id).getTable("dataSourceMetadata").add(i.name,{alreadyTransferable:!0,data:i.metadata})})),a(n,function(e,t){t.entitySetName="Microsoft.Dynamics.CRM."+t.objectName,p[t.objectName]=!0}),a(p,function(e){var r,p=c[o.trimDefaultNamespace(e)];p&&(r=l[o.trimDefaultNamespace(p.entityType)])&&(r.builtMaps||o._buildEntitySpecificMaps(r,d,u),r.MetadataId&&s.push((r.hasExtraMetadata?t.when():o.makeCacheableODataRequest(i,{requestUri:o.getEntityDefinitionEndpointForAttributes(r,i)})).then(function(t){o.handleNewFieldMetadata(t&&t.value,r);var s=[];return a(n,function(t,a){a.objectName===e&&s.push(a)}),o.getPicklistMetadataForEntityProps(s,i,u)})))}),t.when.all(s)},getCachedODataRequest:function(e,t){var a=n.convertRequestObjToKey(t);return o.getItemJSON(e.name+"."+e._metadataCacheVersion+"."+a)},setCachedODataRequest:function(e,t,a){var i=n.convertRequestObjToKey(t);return o.batchSetItem(e.name+"."+e._metadataCacheVersion+"."+i,JSON.stringify(a))},makeCacheableODataRequest:function(e,a,i){var n=this,r=n.getCachedODataRequest(e,a);return r?t.Deferred().resolve(r).promise():n.makeODataRequest(e,a).then(function(t){return i&&(t=i(t)),n.setCachedODataRequest(e,a,t),t})},getUserInfoProperties:function(e){var t=[{value:"UserId",label:"User Id",defaultValue:!0},{value:"OrganizationId",label:"Organization Id"},{value:"BusinessUnitId",label:"Business Unit Id"}];return(e=e||{}).renderCondition&&(t.push({value:"RoleName",label:"Role Names"}),t.push({value:"RoleId",label:"Role Ids"})),t},getUserInfo:function(e){var t,a,i,n=this;return h(e).then(function(r){return t=r.UserId,a=r.BusinessUnitId,i=r.OrganizationId,n.getSystemUserRoles(e,t)}).then(function(e){return{UserId:t,Roles:e,BusinessUnitId:a,OrganizationId:i}}).catch(function(){return{}})},getSystemUserRoles:function(e,a){var n=e.serviceUrl;return g(e,{url:i.combineUrls(n,"systemuserrolescollection?$select=roleid&$filter=systemuserid eq "+a),method:"GET",headers:v()}).then(function(e){var a=i.grab(e,"body","value"),n=[];return a&&a.length?(t.each(a,function(e,t){t&&n.push(t.roleid)}),n):n}).catch(function(){return[]})},properties:{composer:{supports:{childRelationships:!1},canFieldsBeSelected:function(e){return!!e.breadcrumb.endsobject||"Select an external object for this Model."}},canAutoGenerateConditionsFromFields:!0,canConditionsBeGrouped:!0,hasGlobalSearchEntities:!0,validConditionTypes:["blank","datasourceuserinfo","fieldvalue","modelmerge","multiple","param","userinfo"]}})}function y(e){return!!e&&(e===u||e===d||e===c)}function b(e,t){for(var a=e.length;a--;)t(e[a],a)&&e.splice(a,1)}function g(e,t){return e.makeRequest(e.createHTTPRequest(t))}function h(e){return function(e,t){var a=e.serviceUrl;return g(e,{url:i.combineUrls(a,t),method:"GET",headers:v()}).then(function(e){return e&&e.body})}(e,"WhoAmI")}function v(e){return t.extend({"Content-Type":"application/json; charset=utf-8",Accept:"application/json","OData-MaxVersion":"4.0","OData-Version":"4.0"},e||{})}}(skuid)}});