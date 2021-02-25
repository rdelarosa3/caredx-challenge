!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=56)}({56:function(e,t,n){"use strict";var r,L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(8),k=(r=a)&&r.__esModule?r:{default:r};!function(p){var g=p.$,e=g.each,t=g.extend,o=p.constants,r=p.dataSource,b=o.DISPLAY_TYPES,y=b.REFERENCE,n=r.core||(r.core={}),h=p.utils,u=h.isString,a=h.makeXMLDoc,d=g.Deferred,i=["name"],l="_entityListCache";function c(e){return null==e}function s(e){var t=e.body;if(t)for(;u(t);)try{t=JSON.parse(t)}catch(e){break}return t}function f(e){if(e.proxyVersion){var t=e.proxyVersion.split(".");if(3==t.length){var n=t.map(function(e){return parseInt(e,10)}),r=I(n,3),a=r[0],i=r[1],o=r[2];if(0<=a&&2<=i&&3<=o)return e.name}}return e.id}var v={getEntityList:function(e,t){return{url:h.combineUrls(t.dataServiceUrl,"datasources/"+f(t)+"/entities"),method:"GET",contentType:"application/json",headers:{}}},getModelMetadata:function(e,t){return{url:h.combineUrls(t.dataServiceUrl,"datasources/"+f(t)+"/entities?name="+e.entity),method:"GET",contentType:"application/json",headers:{accept:"application/vnd.skuid-metadata"}}},load:function(e,t){return{url:h.combineUrls(t.dataServiceUrl,"datasources/"+f(t)+"/load"),method:"POST",contentType:"application/json",body:e}},save:function(e,t){return{url:h.combineUrls(t.dataServiceUrl,"datasources/"+f(t)+"/save"),method:"POST",contentType:"application/json",body:e}}};function m(n){for(var e,t={},r=(n.getDataSourceType(),function(t){return function(e){return function(n,r,a){return k.default.getAPIToken().then(function(e){var t=v[n](r,a);return t.headers=g.extend({},{"x-skuid-public-key-endpoint":p.platform.getPublicKeyEndpoint(),Authorization:"Bearer "+e.jwt},t.headers),h.inPlatform([o.VISUALFORCE,o.LIGHTNING])&&(t.headers["x-skuid-session-id"]=p.utils.userInfo.sessionId),t})}(t,e,n).then(function(e){return p.ajax.direct(n.createHTTPRequest(e)).then(s).catch(function(e){var t,n=s(e);return n&&g.isPlainObject(n)&&(t=n.message),!t&&e&&(t=0===e.statusCode?"Error with the connection, likely caused by a timeout talking to the data source.":e.status),t})})}}),a=0,i=["load","save","getModelMetadata","getEntityList"];a<i.length;a++)t[e=i[a]]=r(e);return n._remote=t}function S(e){var t=e._remote;return t||(t=new m(e)),t}function F(e,t,n){var r=M(e,t,n);if(r&&r.length)return r[0]}function M(e,t,n){!t&&n&&(t=n.getDataSource());var r=t.getCachedEntityMetadata(e);return r?r.get("nameFields"):[]}function N(e,t){if(u(e)&&t){var n=t.getCachedEntityMetadata(e);return n?n.get("idFields"):[]}return e.idFields}function j(e,t){var n=N(e,t);if(n&&n.length)return n[0]}function E(e,n){var t=e.referenceTo;e.rel||(e.rel=e.id.split(".").pop()+"__rel"),e.relationshipName||(e.relationshipName=e.rel),!e.ref&&t&&t.length&&(t.forEach(function(e){if(!e.label&&n){var t=n.getCachedEntityMetadata(e.objectName);t&&(e.label=t.getLabel(),e.labelPlural=t.getLabelPlural(),e.createable=t.get("createable"),e.searchable=t.get("searchable"))}e.accessible=!0}),e.ref=e.refprefix=t.map(function(e){return e.objectName}).join(","))}function P(e,t){var n=h.grab(e,"referenceTo",0,"keyField");if(n||!t)return n;var r=t.getDataSource(),a=t.objectName,i=r.getCachedEntityMetadata(a),o=i&&i.get("idFields");return o&&o.length?o[0]:void 0}function T(e){return e&&e.slice(0,-5)}function C(e){return e&&e+"__rel"}function O(e){!function(e){g.each(e,function(e,t){if(!t.fields||!t.fields.length)throw"Error with Model: "+t.id+" - Must have at least one valid field"})}(e),function(e){g.each(e,function(e,t){if(!t.conditions||!t.conditions.length)return delete t.conditions,void delete t.conditionLogic;var n=!1;g.each(t.conditions,function(e,t){t.inactive||(n=!0)}),n||(delete t.conditions,delete t.conditionLogic)})}(e)}function R(e){return h.isString(e)||e.objectName&&e.dataSource}function w(n){e(i,function(e,t){if(!n[t])throw"Missing Required Property Error: "+t}),t(this,n),n.extendedProperties&&(t(!0,this.properties,n.extendedProperties),delete this.extendedProperties),r.DataSourceType.prototype.constructor.call(this,this),delete this.getModelProperties}w.prototype=new r.DataSourceType(!1),(w.constructor=w).prototype=t(!0,w.prototype,{buildEntityMetadataRequest:function(e){var t=e.targetEntity;return!t&&e.model&&e.model.attr&&(t=e.model.attr("sobject")),{objectName:t}},getAggregateFieldProperties:function(t,n){var r=t.state,a=p.builder.core;return[{id:"function",type:"picklist",label:"Function",helptext:"The Aggregation function to use",defaultValue:"SUM",required:!0,picklistEntries:[{label:"COUNT",value:"COUNT"},{label:"COUNT DISTINCT",value:"COUNT_DISTINCT"},{label:"SUM",value:"SUM"},{label:"AVG",value:"AVG"},{label:"MAX",value:"MAX"},{label:"MIN",value:"MIN"}],onChange:function(e){e&&r.attr("name",a.getDefaultAliasName(r.attr("id"),e)),t.save().refresh().rebuildProps(n)}}]},getAggregateGroupingProperties:function(){return[]},getChildIdFromRow:function(e,t,n){var r=e.getIdFieldForChildRelationship(n),a=t[r],i=null,o=void 0;return r&&a&&((o={})[r]=a,i=h.encodeHTML(JSON.stringify(o))),i},getEntityList:function(e){var t=e.dataSource;return t[l]?d().resolve(t[l]):t.authenticate().then(function(){return S(t).getEntityList()}).then(function(e){if(u(e))throw e;if(Array.isArray(e)&&!e.length)throw"No Data Source Objects found for this Data Source. Go to the Data Source and click 'Import Data Source Objects'.";return t[l]=e.map(function(e){return g.isPlainObject(e)?{label:e.label,value:e.name}:e})})},getEntityMetadata:function(e){var t=e.entities,r=e.dataSource;return function(e){if(e){if(g.isArray(e)){var t=!0;return g.each(e,function(){if(!R(this))return t=!1}),t}if(g.isPlainObject(e))return R(e);if(h.isString(e))return!0}return!1}(t)?r.authenticate().then(function(){var e=g.map(t,function(e){var t=u(e)?e:e.objectName,n={entity:t,loadChildRelationships:!0,loadPicklistValues:!1};return t?(e&&e.fields&&e.fields.length&&(n.fieldsToLoad=e.fields.join(",")),S(r).getModelMetadata(n).then(function(e){if(!e||!e.length&&!g.isPlainObject(e))throw"No metadata could be retrieved for this table. You probably need to import this table as a Data Source Object. Go to your Data Source, and click 'Import Data Source Objects', then select this table to import it.";g.isArray(e)&&(e=e[0]);var t=e.fields;return t&&t.length&&t.forEach(function(e){e.displaytype===y&&E(e,r)}),e})):d().reject("No Table Name provided")});return g.when.all(e).catch(function(e){return d().reject(e&&e.length?e.join(","):"")})}):d().reject("Invalid Model configuration. Metadata could not be retrieved.")},getEntityMetadataCacheKey:function(e){return e.objectName},getEntityMetadataLoadingMessageFromBreadcrumb:function(e){return"Loading metadata for table "+e.endsobject+"..."},getIdField:j,getIdFields:N,getIdFieldForChildRelationship:function(e,t){return j(e.fieldsMap[t],e.dataSource)},getModelProperties:function(l,e){var u=p.builder.core,d=l.state,t=u.getUnsavedChangesWarningProperty({component:l}),n=u.getCoreModelBasicProperties({component:l,propViewer:e}),r=[];return n.push({id:"sobject",type:"sobject",dataSourceTypeName:this.name,dataSourceName:d.attr("datasource"),label:"Entity Name",onChange:function(e){if(e){var t,n=!1;try{var r=d.closest("model");t=u.getDataSourceFromModel(r).getCachedEntityMetadata(e)}catch(e){t={get:function(){}}}d.attr("batchable")||(d.attr("batchable",t.get("batchable")),n=!0);var a=h.capitalizeFirst(e.split(".").pop());if(!d.attr("label")){var i=t.get("label")||a;d.attr("label",i),n=!0}if(!d.attr("labelplural")){var o=t.get("labelPlural")||a+(h.endsWith(a,"s")?"":"s");d.attr("labelplural",o),n=!0}n&&l.save()}}}),n.push(u.getModelTypeProperty({component:l}),u.getModelQueryOnPageLoadProperty({component:l,propViewer:e}),u.getAsyncLoadProperty({component:l}),u.getModelLimitProperty(),u.getModelOrderByProperty(),u.getCreateDefaultRowProperty(),u.getModelNameFieldProperty()),t&&r.push(t),Array.prototype.push.apply(r,u.getModelLabelProperties()),r.push(u.getModelBatchProperty()),[{name:"Basic",props:n},{name:"Advanced",props:r}]},getNameField:F,getNameFields:M,getReferenceFieldNameFromRelationshipField:T,getReferenceFieldRelatedData:function(e,n,t,a,r){var i,o=e.id,l=C(o);if(void 0===r[l]){if(g.each(a.data,function(){if(this[o]&&this[o]===n&&a.getFieldValue(this,l,!0))return i=a.getFieldValue(this,l,!0),!1}),!i){var u=a.dataSource&&a.dataSource.name,d=e.referenceTo,c=[],s=[];d&&d.length&&g.each(d,function(){c.push(this),s.push(this.objectName)}),g.each(p.model.getModelsByDataSource(u),function(){var t=this,r=[];if(t!==a&&-1!==s.indexOf(t.objectName))return g.each(this.fields,function(){var n=this;g.each(c,function(e,t){t.keyField===n.id&&r.push(n)})}),r.length&&g.each(t.getRows(),function(){var e=this;if(g.each(r,function(){if(t.getFieldValue(e,this.id,!0)===n)return i=e,!1}),i)return!1}),!i&&void 0})}return i}},getReferenceFieldRelationshipName:C,getReferenceHandler:function(){return{getBaseReferenceProps:function(e){return[{id:"targetobjects",type:"entity",label:"Entity Name",readonly:!1,dataSourceName:p.dataSource.getDataSourceFromXML(e.state).name}]},getOverrideBatchProperties:function(){return[{type:"helptext",html:"Specify fields that will be added as related data. Any fields that are used in search or display templates will need to be added here."}]},getOverrideBatchNoItemsFunction:function(){return function(){return g("<div>").text("(Loading key field only.)")}},getOverrideBatchFieldChildrenFunction:function(t){return function(){return[{id:"batchfield",indent:1,linkedComponent:t,addtooltip:"Add New Batch Load Field",labelFunction:function(e){return e.attr("field")||"[No Field Selected]"},defaultStateFunction:function(){return a("<batchfield/>")},propsFunction:function(e){return[{id:"field",type:"field",label:"Field",sobject:t.state.attr("targetobjects"),dataSourceName:t.state.attr("datasource"),onChange:function(){e.refresh().rebuildProps()}}]}}]}},getMetadataHandler:function(e,t,n,r,a){var i,o=e.children("batchfields").first().children("batchfield"),l=e.attr("keyfield")||j(n),u=e.attr("targetobjects"),d=e.attr("ogdisplaytype"),c=e.attr("rel")||r+"__r";if(l&&u&&(t.keyField=l,t.originalDisplayType=d,u&&(i=u.split(","),t.isNamePointing=1<i.length,(a||d&&d!==y)&&(t.relationshipName=t.rel=c),t.referenceTo=g.map(i,function(e){return{accessible:!0,objectName:e,keyField:l}}),t.ref=u),!a&&d&&d!==y)){var s=p.dataSource.getDataSourceFromXML(e),f=new p.model.Model({dataSource:s});f.id="_ReferenceLabelModel_"+(new Date).getTime()+c,o&&o.length?f.fields=g.map(o,function(e){return{id:g(e).attr("field")}}):f.fields=[{id:l}],f.doQuery=!0,f.doClone=!1,f.objectName=u,f.initialize();var h=new p.model.Condition;h.name="__reference_batch",h.operator="in",h.field=l,f.addCondition(h),n.batchLabelModels||(n.batchLabelModels={}),n.batchLabelModels[r]=f}},getReferenceValue:function(e,t,n){return e[P(t,n)]},processReferenceLookupModel:function(e,t,n){var r=P(t.metadata,e),a=M(n,null,e),i=e.fields;e.objectName=n,i||(i=e.fields=[]),r&&!i.find(function(e){return e.id===r})&&i.push({id:r}),a&&a.length&&a.forEach(function(t){return!i.find(function(e){return e.id===t})&&i.push({id:t})})},getRowFromReferenceValue:function(e,t,n){var r=P(n,e),a=e.getRows([{field:r,value:t}]);return a&&a.length?a[0]:{}}}},getRowId:function(n,r){var e=j(r),a={},t=void 0,i=!1;return g.isArray(e)?(e.length<=0&&(i=!0),e.forEach(function(e){var t=r.getFieldValue(n,e,!0);h.isUndefined(t)||null===t?i=!0:a[e]=t})):(t=r.getFieldValue(n,e,!0),h.isUndefined(t)||null===t?i=!0:a[e]=t),i?h.generateUniqueId():JSON.stringify(a)},getRowName:function(e,t,n){return t.getFieldValue(e,F(t.objectName,n,t),!0)},handleDefaultReferenceFieldValue:function(e,n,t,r,a){var i=r.rel,o=n.value,l=t.dataSource,u=l.getNameField(r.ref),d=n.nameFieldValue||!1;if(!d){var c=h.getFieldReference(n.field,r,l);g.each(a,function(e,t){t===n||t.field!==c||t.inactive||!t.value||n.operator&&"="!==n.operator||(d=t.value)})}var s,f={};d&&("object"===(void 0===d?"undefined":L(d))?s=d:(s={})[u]=d,f[i]=s),f[n.field]=o,t.updateRow(e,f)},initialize:function(n){if(n.fields&&n.fields.length){var e=n.getDataSource&&n.getDataSource(),r=e&&e.getCachedEntityMetadata(n.objectName);r&&(g.each(n.fields,function(e,t){!function n(r,e,t,a){if(e){var i,o,l,u,d,c=e.split("."),s=a.getDataSource&&a.getDataSource();if("childRelationship"===r.type){var f=t.getChildRelationship(r.id);f&&(u=s&&s.getCachedEntityMetadata(f.childObject))&&(r.idFields=u.get("idFields"),(d=r.subFields)&&g.each(d,function(e,t){n(t,t.id,u,a)}))}else if(1===c.length){if(i=t&&t.getField&&t.getField(e)){o=a.getOverrideableFieldMetadata(r);var h=r.id,p=r.name;g.extend(!0,r,i),h&&(r.id=h),p&&(r.name=p),o&&g.each(o,function(e,t){r[e]=t})}r&&r.displaytype===b.REFERENCE&&E(r,s)}else e=T(e=c.shift()),(i=t&&e&&t.getField&&t.getField(e))&&((l=i.referenceTo)&&1===l.length?t=s&&s.getCachedEntityMetadata(l[0].objectName||l[0].o):l&&1<l.length&&(t=s&&s.getCachedEntityMetadata("Name")),t&&n(r,c.join("."),t,a)),r.required=r.createable=r.editable=!1}}(t,t.id,r,n)}),g.each(r.get(["label","labelPlural"]),function(e,t){n.hasOwnProperty(e)||(n[e]=t)}),g.each(r.get(["accessible","createable","updateable","deleteable","idFields"]),function(e,t){n[e]=t}))}return(!n.idFields||n.idFields&&!n.idFields.length)&&(n.updateable=!1,n.deleteable=!1),n.data instanceof Array||(n.data=[n.data]),n},joinFieldDisplayTypeFilter:function(e){if(e)return!0},load:function(i,o){var l=o.dataSource;return l.authenticate().then(function(){var n=!1,r=["conditionLogic","doQuery","groupByMethod","havingLogic","id","objectName","schemaName","orderByClause","offsetPageNumber","offsetPageSize","recordsLimit","type"],a={},e=g.map(i,function(i){var o={};for(var e in i)i.hasOwnProperty(e)&&-1<g.inArray(e,r)&&(h.isUndefined(i[e])||""===i[e]||(o[e]=i[e]));var t=i.fields.filter(function(e){return e.uiOnly});return t.length&&(a[i.id]=t),g.each(["fields","groupByFields"],function(e,t){var n,r=i[t];r&&r.length&&(n=o[t]=[],g.each(r,function(e,r){var a;if(r.uiOnly)return!0;"childRelationship"===r.type?(a={id:r.id,type:r.type,anchorField:r.anchorField,keyField:r.keyField,childObject:r.childObject},g.each(["recordsLimit","orderByClause","subConditionLogic"],function(e,t){r.hasOwnProperty(t)&&null!==r[t]&&void 0!==r[t]&&(a[t]=r[t])}),r.subConditions&&(a.subConditions=[],r.subConditions.length&&g.each(r.subConditions,function(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&null!==t[r]&&void 0!==t[r]&&(n[r]=t[r]);a.subConditions.push(n)})),r.subFields&&(a.subFields=[],r.subFields.length&&g.each(r.subFields,function(e,t){var n={id:t.id};void 0!==r.query&&null!==r.query&&(n.query=n.query),a.subFields.push(n)}))):(a={id:r.id},g.each(["name","function","query"],function(e,t){r.hasOwnProperty(t)&&null!==r[t]&&(a[t]=r[t])})),n.push(a)}))}),g.each(["conditions","havings"],function(e,t){var a,n=i[t];n&&n.length&&(a=o[t]=[],g.each(n,function(e,t){var n=g.extend({},t);for(var r in n)null===n[r]&&delete n[r];g.each(n.subConditions,function(e,t){var n=i.getField(t.field);-1<["INTEGER","DOUBLE","CURRENCY"].indexOf(n.displaytype)&&(t.operator="=")}),a.push(n)}))}),i.needsMetadataLoad&&(n=!0),o}).filter(function(e){if(e.conditions&&e.conditions.length)for(var t=0,n=e.conditions.length;t<n;++t){var r=e.conditions[t];if("noquery"===r.noValueBehavior&&c(r.value)&&c(r.values))return!1}return!0});if(e.length<=0)return null;O(e);var t=!o||o.loadAllMetadata||n;return S(l).load({operationModels:e,options:{excludeMetadata:!t}}).then(function(e){var t,n=d();if(g.isArray(e))n.resolve(e);else if(e&&e.models)(t=e.metadata)&&h.size(t)&&g.each(t,function(e,t){l.cacheEntityMetadata(e,t).setIsFullMetadata()}),Object.keys(a).length&&(e.models=function(t,e){return e.map(function(e){return e.fields&&t[e.id]&&(e.fields=e.fields.concat(t[e.id])),e})}(a,e.models)),n.resolve(e.models);else{var r=void 0;u(e)?r=e:g.isPlainObject(e)&&(r=e.message?e.message:e.error),n.reject(r||"Invalid Response Format")}return n.promise()})})},properties:{batchableEntityRequests:!0,canAutoGenerateConditionsFromFields:!0,canConditionsBeGrouped:!0,composer:{supports:{childRelationships:!0},canFieldsBeSelected:function(e){return!!e.breadcrumb.endsobject||"Select an entity to use for this Model"}},hasGlobalSearchEntities:!0,serverSideModelMerge:!0,validConditionTypes:["blank","fieldvalue","join","modelmerge","multiple","param","userinfo"]},save:function(e,t){var n=t.dataSource;return n.authenticate().then(function(){return S(n).save(e).then(function(e){if(h.isString(e))throw Error(e);return e})})},search:function(a,e,n){var t=this,r=a.dataSource,i=g.map(a.returning,function(e){var t=n["search__"+r.name+"__"+e.objectName];return t.doQuery=!0,t.recordsLimit=6,t.conditions=[],e.fields||(e.fields=[]),t.searchFields=e.fields,t});return t.getEntityMetadata({dataSource:r,entities:i}).then(function(e){return g.each(e,function(e,t){var n=i[e],r={sourceType:"fieldvalue",type:"group",operator:"=",inactive:!1,encloseValueInQuotes:!0,originalInactive:!1,name:"__global_search",subConditions:[],value:a.query};g.each(n.searchFields,function(e,n){g.each(t.fields,function(e,t){(n=h.isString(n)?n:n.id)===t.id&&t.filterable&&r.subConditions.push({name:"__global_search_subcondition",type:"fieldvalue",field:t.id,inactive:!1,operator:"contains",value:a.query})})}),r.subConditionLogic="(",g.each(r.subConditions,function(e){r.subConditions.length-1===e?r.subConditionLogic+=e+1+")":r.subConditionLogic+=e+1+" OR "}),n.addCondition(r)}),t.load(i,{dataSource:r,loadAllMetadata:!0}).then(function(e){return{request:a,results:e.map(function(e){var t=e.id.split("__"),n=a.returning[t[t.length-1]];return{label:e.label||n.objectName,labelPlural:e.labelPlural||n.objectName,objectName:n.objectName,objectMapKey:n.objectMapKey,modelName:n.modelName,records:e.data}})}})})},searchableDisplayTypes:{INTEGER:1,DOUBLE:1,CURRENCY:1,ID:1,STRING:1,TEXT:1,EMAIL:1,PICKLIST:1,MULTIPICKLIST:1,COMBOBOX:1,PHONE:1,URL:1,REFERENCE:1,TEXTAREA:1}}),t(n,{RelationalDataSourceTypeBase:w})}(skuid)},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"refreshAPIToken",value:function(){var r=this;return skuid.platform.services.getToken().then(function(e){var t=e.token,n=r.extractJWTPayload(t).exp;return r.apiToken={expiration:n,jwt:t}})}},{key:"extractJWTPayload",value:function(e){var t=e.split(".");if(3!=t.length)throw new Error("JWT not formatted correctly");var n,r,a=void 0;try{n=t[1],r=(n+"===".slice((n.length+3)%4)).replace(/-/g,"+").replace(/_/g,"/"),a=atob(r)}catch(e){throw new Error("Error decoding JWT payload")}var i=void 0;try{i=JSON.parse(a)}catch(e){throw new Error("Error parsing JWT payload")}return i}},{key:"getAPIToken",value:function(){var e=this.apiToken;return e&&this.isValid(e)?skuid.utils.resolve(e):this.refreshAPIToken()}},{key:"isValid",value:function(e){var t=void 0;return(t=skuid.utils.isString(e)?this.extractJWTPayload(e).exp:e.expiration)&&t>Date.now()/1e3}}]),e}();t.default=new a}});