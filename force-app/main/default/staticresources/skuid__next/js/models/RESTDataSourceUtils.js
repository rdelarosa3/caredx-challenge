skuid.runtime.registerApi("v2","models/RESTDataSourceUtils",function(e){var t=function(e){var t={};function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}};e[n].call(o.exports,o,o.exports,r);o.l=true;return o.exports}r.m=e;r.c=t;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(e,t){if(t&1)e=r(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s=441)}({441:function(t,r){(function(e){const t=e.$,r=t.extend,n=e.utils,o=e.dataSource.utils,{contains:i,combineUrls:a,Deferred:u,makeXMLDoc:s,isString:l,startsWith:c}=n;function d(e,t){let r;if(e&&t in e){r=e[t]}else{r=f[t]}return function(){return r.apply(e,arguments)}}const f=o.REST={isSuccessfulResponseCode:function e(t){return t&&t<400&&t>=200},processErrorObject:function e(t){let r=[];if(l(t)){r.push(t)}else{if(t.error)r.push(t.error);if(t.message)r.push(t.message)}return r.join(": ")},generateErrorMessage:function e(r,o){o=o||{};let a=d(this,"processErrorObject"),u=r.body,s=o.showStatus===false?null:r.status,l;if(s==="OK")s="";if(u){u=n.parseAsJSONIfString(u);if(t.isPlainObject(u)){if(u.errors&&t.isArray(u.errors)&&u.errors.length){l=a(u.errors[0])}else{l=a(u)}}else if(t.isArray(u)&&u.length){l=a(u[0])}else if(u&&i(u,"/html")){let e,r=u.toLowerCase().indexOf("<body"),n=u.toLowerCase().indexOf("</body>",r);if(r&&n){e=t(u.substring(r,n+7))}else{e=t(u)}l=t.trim(e.text()||"")}else{l=u}}return s&&l?s+": "+l:l},getConditionSourceProperties:function t(r,o){let i=e.builder.core;const a="sourcetype";const u=r.get("xmlState");const s=u.attr(a)||"param";const l=s==="param";if(o.renderMode==="propsonly"){return i.getConditionParameterProperties(r,{url:o.url})}else{let e=[{label:"Type",deleteable:false,linkedComponent:r,summaryFunction:function e(){if(l){return"URL Parameter"}return"Field"},propsFunction:function e(){return[{id:a,label:"Condition Type",type:"picklist",defaultValue:"param",picklistEntries:[{value:"param",label:"URL Parameter"},{value:"fieldvalue",label:"Field"}],onChange:e=>{if(e==="fieldvalue"){r.get("xmlState").removeAttr("sourceparam")}else{r.get("xmlState").removeAttr("field operator")}r.save().refresh().rebuildProps()}}]}}];let t={label:"URL Merge Parameter",deleteable:false,linkedComponent:r,summaryFunction:function e(t){return i.conditionDescriptionRenderers.parameter(t)},propsFunction:function e(t){return i.getConditionParameterProperties(r,{handleChange:o.handleChange(t),handleRefresh:o.handleRefresh(t)})}};if(l){e.push(t)}else{n.mergeArrays(e,i.getFieldAndOperatorProperties(r))}return e}},getIdField:function e(t){let r=null,n=t?t.idFields:null;if(n&&n.length){if(n.length>1)return n;else return n[0]}return r||"id"},getNameField:function e(r,n,o){let i=this,a;o=o||{};if(o.nameField)return o.nameField;else{a=d(i,"getIdField")(o);if(t.isArray(a))return a[0];else return a}},getRowId:function e(r,n){let o=this,i=d(o,"getIdField")(n);if(t.isArray(i)&&i.length>1)return n.getFieldValues(r,i,true).join(",");else return n.getFieldValue(r,i,true)},getRowName:function e(t,r){return r.getFieldValue(t,d(this,"getNameField")(r.objectName,this,r),true)},makeRequest:function i(s,l,f={}){let p=u(),m=l.request||l,g=l.parameters,h=l.row,y=this,b=d(y,"generateErrorMessage"),S=function i(u,s,l,d){d=d||{};if(!l){l={method:u.verb,dataType:u.dataType,contentType:u.contentType,url:u.serviceUrl,type:"query"}}let f=!n.isUndefined(u.getDataSource)?u.getDataSource():u.dataSource,p=f&&f.serviceUrl||"",m=l.url||"",h=d.dfd;if(!f)h.reject("There is no data source associated with this model");f.authenticate(u,l).then(function(){let n={},i=false,y,S=p?a(p,m):m;if(u.conditions&&!d.isSample){t.each(u.conditions,function(e,t){if(t.inactive===false&&t.sourceParam&&new RegExp("{{[#/^]?"+t.sourceParam+"}}","g").test(S)){let e=u.getConditionValueResult(t),r=e.status,o;if(r){if(r==="deactivate"){return true}else if(r==="noquery"){i=true;h.reject("Could not perform this query because no value could be found for merge variable  '"+t.sourceParam+"'");return false}}else{o=e.value;n[t.sourceParam]=o?encodeURIComponent(o):o}}})}if(i)return;y=r({},l,{apiExtensions:n,model:u,url:S,method:l.method||"GET",contentType:l.dataType||l.contentType||e.constants.MIME_TYPES.JSON});if(s)y.row=s;if(l.data)y.body=l.data;if(g)y.parameters=g;y=f.createHTTPRequest(y);if(d.coerceCreateHTTPRequest){d.coerceCreateHTTPRequest(y)}u.soql=u.query=u.debug=y.url;f.makeRequest(y).then(function(e){let t;if(!o.REST.isSuccessfulResponseCode(e.statusCode)){t=b(e)}if(t){h.reject(t)}else{h.resolve(e)}}).catch(function(e){let t=e.statusCode,r=e.error;if(t===0&&e.status==="error"){h.reject('Data source "'+f.name+'" could not be reached due to an undefined connection error. Please check your settings.')}if(c(r,"Invalid Request: Unauthorized endpoint")){if(window.confirm("To access this Data Source, you will need to add its endpoint as a Remote Site from Salesforce Setup.\n\nWould you like to do that now?")){let e=window.location.href+"",t=encodeURIComponent(e.substring(e.indexOf("/",e.indexOf("//")+2),e.length));window.location="/0rp/e?setupid=SecurityRemoteProxy&IsActive=1"+"&retURL="+t+"&cancelURL="+t+"&EndpointUrl="+encodeURIComponent(p)+"&SiteName="+f.name.replace(/[\W]+/g,"")+"&DescriptionField="+'For Skuid Model Data Source "'+f.name+'"'}}if(t===404){r=b(e);if(!r){r='The requested resource for data source "'+f.name+'" could not be found:\n\n'+m}}else if(t===401){r=b(e)}if(!r){r=b(e,{showStatus:false})}if(t>=400&&t<500&&r){h.reject(r)}else{h.reject('Request to data source "'+f.name+'" failed'+(r?": "+r:e.status?e.status:"."))}})}).catch(function(e){h.reject('Unable to authenticate to data source "'+f.name+'": '+e)});return h.promise()};S(s,h,m,r(f,{dfd:p}));return p.promise()},populateBreadcrumbFromEntityMetadata:function e(t){let r=t.crumb,n=t.dataSource,o=t.modelXML;if(t.index===0){let e=o.attr("verb");r.rel=r.ref=n.name+(e?": "+e:"")}return r},setDefaultConditionState:function e(t){t.sourceType="param";t.operator="=";t.encloseValueInQuotes=true},replaceConditions:function e(t,r){let n=r.children("conditions").empty();if(t&&t.length>0){n.append(t.map(function(e){return s('<condition value="" />').attr(e)}))}}}})(e)}});return t});