!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=348)}({348:function(e,t,n){"use strict";!function(e){var t=e.$,n=t.extend,r=e.utils,o=r.makeXMLDoc,a=r.parseAsJSONIfString,i=e.dataSource,s=i.utils,d=s.REST,u=i.core||(i.core={}),c=e.model,l=r.contains,p=r.getObjectProperty,h=r.hasObjectProperty,f=function e(r){t.each(["name"],function(e,t){if(!r[t])throw"Missing Required Property Error: "+t}),n(this,r),this.properties=n(!0,{},e.prototype.properties),r.extendedProperties&&(n(!0,this.properties,r.extendedProperties),delete this.extendedProperties),i.DataSourceType.prototype.constructor.call(this,this),delete this.getModelProperties};f.prototype=new i.DataSourceType(!1),f.constructor=f,f.prototype=n(!0,f.prototype,{_NEW_ID_PREFIX:"__skuid_new__",_FAKE_ID_PREFIX:"__skuid__",_DEFAULT_ID_FIELD:"id",buildEntityMetadataRequest:function(e){var t=e.model,n=new c.Model(t);return e.ignorePathToContent&&delete n.pathToContent,n.path=e.path||"",e.targetEntity&&e.targetEntity!==n.dataSource.name&&(n.objectName=e.targetEntity),n},buildSaveRequests:function(n){var o=this,a=e.$M(n.id),i=[],s={insert:n.inserts,update:n.updates,delete:n.deletes};return t.each(s,function(n,s){var d=o.getMethod(a,n);s&&d&&t.each(s,function(s,u){var c=function(e,t,n){return{type:e,originalRecordId:n,originalRecord:a.getRecordById(n).get(),method:t,model:a,row:a.getRowById(n),request:{url:t.url,method:t.verb,contentType:t.contentType}}}(n,d,s);"delete"!==n&&function(n,o){var a=n.method,i=n.request,s="autoprefix"===a.changeMapping,d=(a.sendDataAs||"").toLowerCase(),u={};t.each(o,function(e,t){u[(s?a.changeMappingPrefix:"")+e]=t}),a.contentType===e.constants.MIME_TYPES.FORM_URL_ENCODED?i.data=r.param(u):"headerperfield"===d?i.headers=u:"queryparamperfield"===d?i.url+=(l(i.url,"?")?"&":"?")+r.param(u):i.data=u}(c,u),o.coerceRequest(c),i.push(c)})}),i},coerceRequest:function(){},getEntityMetadata:function(e){var n=this;return t.when.all(t.map(e.entities,function(t){return n.getModelMetadata(t,e)}))},getModelMetadata:function(e,t){var n=this,o=e,a=t.dataSource;a&&!o.dataSource&&(o.dataSource=a);var i=n.getEntityMetadataCacheKey(o);return n.queryEntityMetadata(o,t).then(function(e){if(!e)return[];var t=(e.extensions||(e.extensions={})).rest||(e.rest={}),o=e.accessible=!!r.size(n.getMethod(e,"query")),a=e.createable=!!r.size(n.getMethod(e,"insert")),s=e.updateable=!!r.size(n.getMethod(e,"update")),d=e.deleteable=!!r.size(n.getMethod(e,"delete")),u=e.searchable=!!r.size(n.getMethod(e,"search"));return e.readonly=(o||u)&&!a&&!s&&!d,t.entityName=e.objectName=i,e})},getEntityMetadataCacheKey:function(e){return"string"==typeof e?e:e.objectName||p(e,"extensions.rest.entityName")},shouldIgnoreCache:function(e){return(e=e||{}).ignoreCache||!1},getEntityMetadataLoadingMessageFromBreadcrumb:function(){return"Loading Data Source metadata..."},getEntityList:function(){return t.Deferred().resolve([]).promise()},searchableEntities:function(e){e=e||{};var n=t.Deferred(),r=this,o=[];return r.getEntityList(e).then(function(a){t.each(a,function(t,n){r.queryEntityMetadata(n.value,e).then(function(e){e.methods.search&&o.push(n)})}),n.resolve(o)}),n.promise()},search:function(n,r,o){var a=this,i=[];return t.each(n.returning,function(e,s){var d=!1,u=r&&r[e],c=o[s.modelName];c.extensions.rest={entityName:e},t.each(c.conditions,function(e,t){"__global_search"===t.name&&(d=!0,t.value!==n.query&&(t.value=n.query))}),d||c.addCondition({name:"__global_search",sourceType:"param",sourceParam:"search",value:n.query,operator:"=",encloseValueInQuotes:!1,inactive:!1}),a.searchProperties&&u&&t.each(a.searchProperties(u).conditions,function(e,t){c.addCondition(t)}),i.push(c)}),a.load(i,{dataSource:e.dataSource.getDataSource(n.dataSourceName),loadAllMetadata:!0,performingSearch:!0,ignoreCache:!0}).then(function(e){return e})},getExtendedModelProperties:function(){return{basic:[],advanced:[],customTabs:[]}},getMethod:function(e,t){return this.getMethods(e)[t]||{}},getMethods:function(e){return p(e,"extensions.rest.methods")||e.methods||{}},getModelProperties:function(t,n,o){var a=this,i=e.builder.core,s=i.getUnsavedChangesWarningProperty({component:t}),d=t.state,u=d.attr("x-entityname"),c=void 0!==u,l=i.getCoreModelBasicProperties({component:t,propViewer:n,isDataSourceLocked:c}),p=[];!1!==this.prop("composer.hasEntityOptions")&&l.push({id:"x-entityname",label:"Model Entity",type:"entity",dataSourceName:o.name,readonly:!!d.attr("x-entityname"),showLabelInTextInput:!0,onChange:function(e,n){a.onSelectEntity&&a.onSelectEntity(e,n,t,o),t.save().refresh()}}),l.push(i.getModelQueryOnPageLoadProperty({component:t,propViewer:n}),i.getAsyncLoadProperty({component:t}),i.getCreateDefaultRowProperty()),s&&p.push(s),p.push(i.getDeferFieldRenderingProperty(!0));var h=this.getExtendedModelProperties(u,d,t,o),f=[],y=Array.prototype.push;return r.grab(h,"basic","length")&&y.apply(l,h.basic),f.push({name:"Basic",props:l}),r.grab(h,"advanced","length")&&y.apply(p,h.advanced),f.push({name:"Advanced",props:p}),r.grab(h,"customTabs","length")&&y.apply(f,h.customTabs),a.coerceModelPropertyTabs(f),f},coerceModelPropertyTabs:function(){},handleSaveResult:function(e){var t,o=this,i=[],s=[],d=[],u=[];return e.map(function(e){var c,l,f,y=e.operation,g=e.requestContext,m=g.type,v=g.method,S=v.receiveDataAs||"recordinbody",b=e.response,M=b?a(b.body):null,R=b?b.headers:null,E=e.error,x={errors:u,messages:[],source:y.id},q=e.isSuccess,P=v.successIf,_=v.successField,N=v.successValue;q&&("responsefieldispresent"===P?q=h(M,_):"responsefieldistrue"===P?q=!0===p(M,_,!0):"responsefieldequals"===P?q=p(M,_,!0)===N:"responseheaderispresent"===P?q=h(R,_,!0):"responseheaderequals"===P?q=p(R,_)===N:"responsebodyequals"===P?q=M===N:"responsebodyisempty"===P&&(q=r.isUndefined(M)||null===M)),x.success=q,q||(t=!0,E?u.push({message:E,severity:"ERROR"}):(c=o.generateErrorMessage(b))&&u.push({message:c,severity:"ERROR"})),"insert"===m?(x.oldId=g.originalRecordId,q&&(l=v.createdRecordIdLocation,n(f={},g.originalRecord),"recordinbody"===S?n(f,M):"idinbodyfield"===S?x.id=p(M,l):"idinheader"===S&&(x.id=p(R,l)),x.record=f),o.coerceSaveResultObject(x,g),s.push(x)):"update"===m?(x.id=g.originalRecordId,"recordinbody"===S&&(x.record=M),o.coerceSaveResultObject(x,g),d.push(x)):"delete"===m&&(x.id=g.originalRecordId,i.push(x))}),{deleteResults:i,globalErrors:[],insertResults:s,totalsuccess:!t,updateResults:d}},parseSuccessfulLoadResponse:s.parseSuccessfulLoadResponseWithSynonyms,parseSuccessfulSaveResponse:s.parseSuccessfulSaveResponseWithSynonyms,getPaginationToken:function(){},coerceSaveResultObject:function(){},initialize:function(e){if(e&&e.fields&&e.fields.length){var n,o,a,i,s=this,d=s.getEntityMetadataCacheKey(e),u=e.getDataSource&&e.getDataSource(),c=u&&u.getCachedEntityMetadata(d);if(!c||!r.size(c))return;1===r.size(c)&&c.message&&(c=c.message),n=c&&c.getFieldsList&&c.getFieldsList()||[],o=e.fields,i=(a=e.extensions||(e.extensions={})).rest||(a.rest={});var l=t.map(o,function(e){return e.id});t.each(n,function(e,t){l.indexOf(t.id)>=0||!1!==t.omittable||o.push({id:t.id})}),t.each(o,function(e,t){s.updateFieldMetadata(t,t.id,c)}),i.methods=c&&c.getExtensions&&c.getExtensions("rest.methods")}return e},load:function(e,n){var r=this,o=n.dataSource;return n.ignoreCache=r.shouldIgnoreCache(n),o.authenticate().then(function(){return t.when.all(t.map(e,function(e){if(!1===e.doQuery){var a=t.extend({},n,{entities:[e]});return o.getEntityMetadata(a).then(function(t){return r.createNewModelWithMetadata(e,t,n)})}return r.loadSingleModel(e,n)}))})},getEntityFieldsMap:function(e){var t=this.prop("x-metadata"),n=r.grab(t,e,"fields");return n&&r.keyBy(n,"id")},createNewModelWithMetadata:function(e,r){var o=r._unwrap(),a=o.fields.reduce(function(e,t){return e[t.id]=t,e},{}),i=n({},o,{fields:t.map(e.fields,function(e){return e.uiOnly?t.extend(!0,{},e):t.extend(!0,{},a[e.id],e)})});return i.extensions&&e.extensions&&(i.objectName=i.extensions.entityname=e.extensions.entityname,i.extensions.rest&&e.extensions.rest&&(i.extensions.rest.entityName=e.extensions.rest.entityName,i.objectName||(i.objectName=i.extensions.rest.entityName))),i},loadSingleModel:function(e,n){var r,o,a,i,s,d,u,c=this,l=t.extend({},n,{entities:[e]});return e.dataSource.getEntityMetadata(l).then(function(t){if(s=t._unwrap(),r=t.getExtensions("rest.entityName"),a=t.getExtensions("rest.methods"),i=a&&(n.performingSearch?a.search:a.query),d={url:i.url,method:i.verb,contentType:i.contentType},u={type:n.performingSearch?"search":"query",method:i,model:e,request:d,addOnly:l.addOnly},o=c.createNewModelWithMetadata(e,t,n),!i)throw'No query method found for "'+r+'"';return c.preLoadHook(u)}).then(function(){return c.coerceRequest(u),u.addOnly&&e.paginationToken&&c.applyPaginationToken(u.request,e.paginationToken),c.makeRequest(e,u)}).then(function(t){o.data=c.parseSuccessfulLoadResponse(t,i,o,e,s.fields);var n=c.getPaginationToken(t,i,o,e);return n?(o.canRetrieveMoreRows=!0,e.paginationToken=n):(o.canRetrieveMoreRows=!1,delete e.paginationToken),c.postLoadHook(o,u)}).then(function(){return n.performingSearch?{request:{dataSource:e.dataSource},results:[{label:e.label,objectName:e.objectName,objectMapKey:e.objectMapKey,modelName:e.id,records:o.data}]}:!e.deferFieldRendering&&u.method.additionalRequests?t.when.all(o.data.map(function(t,n){return c.makeAdditionalQueries(e,t,i,o).then(function(e){o.data[n]=e.row})})).then(function(){return o}):o})},applyPaginationToken:function(){},preLoadHook:function(){},postLoadHook:function(){},preSaveHook:function(){return s.deferrable()},postSaveHook:function(){},makeAdditionalQueries:function(n,r,o,a){var i=t.Deferred(),s=this,d=o||n.extensions.rest.methods.query;return a&&(n.fields=a.fields),d.additionalRequests&&d.additionalRequests.map(function(t){var o={type:"query",method:t,model:n,request:{url:t.url,method:t.verb,contentType:t.contentType},row:r};s.coerceRequest(o),s.makeRequest(n,o).then(function(t){r.__additionalRequestMade=!0,s.parseAdditionalQueries(t,n,r,o),e.events.publish("rest.deferred.loaded",[r]),i.resolve({row:r,model:n})})}),i.promise()},parseAdditionalQueries:function(e,n,o,a){var i=r.parseAsJSONIfString(e.body);n.fields.forEach(function(e){e.defer&&t.inArray(e.id,a.method.fields)>-1&&(o[e.id]=p(i,e.path))})},onSelectEntity:function(e,n,r,a){var i=e,s=a.getCachedEntityMetadata(i),d=s.getFieldsList().filter(function(e){return!1===e.omittable}),u=p(s.getExtensions(),"rest.defaultConditions"),c=r.state,l=c.children("fields").empty(),h=c.children("conditions").empty();d&&d.length>0&&l.append(d.map(function(e){return o('<field id="'+e.id+'" />')})),u&&u.length>0&&h.append(u.map(function(e){var n=o('<condition value="" />');return t.each(e,function(e,r){if("picklistEntries"===e){var a=o("<picklistentries/>");a.append(t.map(r,function(e){return o("<entry/>").attr(e)})),n.append(a)}else n.attr(e,r)}),n})),this.prop("composer.rebuildPropsOnSelectEntity")?r.refresh().rebuildProps():r.refresh()},processEntityMetadataRequest:function(e){var t=n(!0,{extensions:{rest:{}}},e.result),r=t.extensions.rest,o=t.methods,a=t.defaultConditions;return delete t.methods,r.methods=o,a&&(delete t.defaultConditions,r.defaultConditions=a),t},processModelXMLExtensions:function(e,t){var n=t.attr("x-entityname");e.extensions.rest={entityName:n},e.objectName=n},properties:{composer:{canFieldsBeSelected:function(e){var t=e.model,n=t.attr("x-entityname")||t.attr("sobject"),r=t.attr("datasource")||t.attr("service"),o=i.get(r);return!(!(!1!==(o&&o.getDataSourceType()).prop("composer.hasEntityOptions"))||!n)||"Select an Entity for this Model"},rebuildPropsOnSelectEntity:!0},canAutoGenerateConditionsFromFields:!1,canConditionsBeGrouped:!1,showSearchFields:!1,canFieldsBeIndividuallySearched:!1,canServerSearch:!1,supportsServerSideSort:!1},queryEntityMetadata:function(){},save:function(e){var n=this,r=t.Deferred();return t.each(e.operations,function(e,o){var a,i=n.buildSaveRequests(o),s=[],d=[];t.each(i,function(e,t){var r,a=n.preSaveHook(t).then(function(){return n.makeRequest(t.model,t)}).then(function(e){return r=e,e.body=n.parseSuccessfulSaveResponse(e,t),n.postSaveHook(e,t)}).then(function(){d.push({operation:o,requestContext:t,response:r,isSuccess:!0})}).catch(function(e){d.push({operation:o,requestContext:t,error:e,isSuccess:!1})});s.push(a)}),t.when.all(s).always(function(){a=n.handleSaveResult(d),r.resolve(a)})}),r.promise()},updateFieldMetadata:function(e,t,r){if(t||(t=e.id),t){var o,a,i=r&&r.getField&&r.getField(t);i&&(o=e.id,a=e.name,n(!0,e,i),o&&(e.id=o),a&&(e.name=a))}},parseResponseBodyAsJSON:a,processErrorObject:d.processErrorObject,populateBreadcrumbFromEntityMetadata:d.populateBreadcrumbFromEntityMetadata,makeRequest:d.makeRequest,generateErrorMessage:d.generateErrorMessage,getConditionSourceProperties:d.getConditionSourceProperties,getIdField:d.getIdField,getNameField:d.getNameField,getRowId:d.getRowId,getRowName:d.getRowName,setDefaultConditionState:d.setDefaultConditionState}),n(u,{RESTDataSourceTypeBase:f})}(skuid)}});