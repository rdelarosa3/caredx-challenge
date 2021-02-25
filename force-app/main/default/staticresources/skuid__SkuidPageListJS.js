!function(e){var s={};function t(a){if(s[a])return s[a].exports;var i=s[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=s,t.d=function(e,s,a){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:a})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=78)}({78:function(e,s,t){"use strict";!function(e){var s=e.sfdc.api,t=e.utils,a=e.$,i=s.SObject,r=s.query,o=s.escapeMetadataBody,n=t.size,c=e.snippet.register;c("skuid.pageList.previewPage",function(){var s=arguments[0],t=e.snippet.get("skuid.builder.page.preview");t&&t({model:s.model,row:s.item?s.item.row:s.row})}),c("skuid.pageList.bytesToKBs",function(s,t){var i=0;a.isNumeric(t)&&(i=a.number(t/1e3,1)+" KB"),e.ui.getFieldRenderer(s,"TEXT").read(s,i)}),c("Multipicklist",function(s,a){e.ui.getFieldRenderer(s,"MULTIPICKLIST").edit(s,t.decodeHTML(a))}),c("skuid.page.packagePages",function(s){var t=s.srName,n=s.srDescription,c="SELECT Id, Name, Description FROM StaticResource WHERE Name = '"+t+"'",u=e.model.getModel("pgs__pagedata"),_=[],d="SELECT Id, Name, skuid__API_Version__c, skuid__Type__c, skuid__UniqueId__c, skuid__Module__c, skuid__Composer_Settings__c, skuid__MasterPage__c, skuid__MasterPage__r.Name, skuid__MasterPage__r.skuid__UniqueId__c, skuid__IsMaster__c, skuid__Layout__c, skuid__Layout2__c, skuid__Layout3__c, skuid__Layout4__c, skuid__Layout5__c FROM skuid__Page__c WHERE Id IN ('";if(a.each(u.registeredItems,function(){this.selected&&_.push(this.row.Id)}),0!==_.length){d+=_.join("','")+"') ORDER BY skuid__Module__c, Name",a.blockUI({message:"Getting Page and StaticResource records..."});var g,l,p=r(c),k=r(d);a.when(p,k).then(function(s,r){g=s[0].records,l=r[0].records;var c,u=a.Deferred();g.length>0?(c=new i("StaticResource",{Id:g[0].Id,CacheControl:"Private"}),u.resolve()):(a.blockUI({message:"Creating StaticResource..."}),(c=new i("StaticResource",{Name:t,Description:n,Body:o(JSON.stringify([])),CacheControl:"Private"})).insert({success:function(){u.resolve()},error:function(e){u.reject({resourceName:t,errorMessage:e.responseJSON[0].message})}})),a.when(u).then(function(){a.blockUI({message:"Packaging Pages into StaticResource..."}),c.Body=o(JSON.stringify(l)),c.ContentType="application/json",a.when(c.update()).then(function(){a.blockUI({message:'The "'+t+'" Page Pack was created/updated successfully!',timeout:3e3}),a(".ui-dialog-content").last().dialog("close"),e.$M("pgs__PagesInStaticResources").updateData()},function(e){a.blockUI({message:'There was an error creating the "'+t+'" Page Pack'+(e&&e.errorMessage?":\n\n"+e.errorMessage:"."),timeout:5e3})})},function(e){a.blockUI({message:'There was an error creating the "'+e.resourceName+'" Page Pack:\n\n'+e.errorMessage,timeout:5e3})})},function(){a.blockUI({message:"There was an error creating the Page Pack",timeout:5e3})})}else a.blockUI({message:"Please select at least one Page for your Page Pack",timeout:2500})}),c("skuid.page.packagePagesInModules",function(e){var s=e.model,t=e.row,c=s.getFieldValue(t,"skuid__Module__c",!0);if(c){a.blockUI({message:"Retrieving Page and StaticResource records..."});var u,_,d=c.split(";"),g="('"+d.join("','")+"') ",l="('"+d.join("Pages','")+"Pages') ",p=r("select Id, Name from StaticResource where Name in "+l),k=r("select Id, Name, skuid__API_Version__c, skuid__Type__c, skuid__UniqueId__c, skuid__Module__c, skuid__Composer_Settings__c, skuid__MasterPage__c, skuid__MasterPage__r.Name, skuid__MasterPage__r.skuid__UniqueId__c, skuid__IsMaster__c, skuid__Layout__c, skuid__Layout2__c, skuid__Layout3__c, skuid__Layout4__c, skuid__Layout5__c from skuid__Page__c where skuid__Module__c in "+g+"order by skuid__Module__c, Name");a.when(p,k).then(function(e,s){_=e[0].records,u=s[0].records,a.blockUI({message:"Checking for Resources that may need to be created..."});var t={},r={},c={};a.each(_,function(){t[this.Name.substring(0,this.Name.indexOf("Pages"))]=new i("StaticResource",{Name:this.Name,Id:this.Id,Body:this.Body,CacheControl:"Private"})}),a.each(u,function(){var e=t[this.skuid__Module__c],s=c[this.skuid__Module__c];e||(r[this.skuid__Module__c]=1),s||(s=c[this.skuid__Module__c]=[]),s.push(this)});var d=a.Deferred(),g={};a.each(r,function(e){var s=e+"Pages",a=new i("StaticResource",{Name:s,Body:o(JSON.stringify([])),CacheControl:"Private"});t[e]=a,g[s]=1,a.insert({success:function(){delete g[s],0===n(g)&&d.resolve()},error:function(e){d.reject({resourceName:s,errorMessage:e.responseJSON[0].message})}})}),0===n(r)&&d.resolve(),a.when(d).then(function(){a.blockUI({message:"Packaging Pages into StaticResources..."});var e=a.Deferred(),s=n(c);a.each(c,function(i,r){var n=t[i];n&&(n.Body=o(JSON.stringify(r)),n.ContentType="application/json",a.when(n.update()).then(function(){0===--s&&e.resolve()}))}),a.when(e).then(function(){var e=[];a.each(c,function(s){e.push(s+"Pages")}),a.blockUI({css:{"text-align":"left"},message:"Module Pages packaged successfully!<br/><br/>The following StaticResources were updated, or created if they did not exist before:<br/><ul><li>"+e.join("</li><li>")+"</ul>",timeout:5e3})})},function(e){a.blockUI({message:'There was an error creating the new StaticResource "'+e.resourceName+'":\n\n'+e.errorMessage,timeout:7500})})},function(){a.blockUI({message:"There was an error creating the Page Pack",timeout:5e3})})}else window.alert("Please select a Module.")}),c("skuid.pageList.packagePages",function(){var s=arguments[0],t=s.model,i=s.row,r={srName:t.getFieldValue(i,"Name"),srDescription:t.getFieldValue(i,"Description")},o=a("input[name='tab-radio-PagePackDetailsTabSet']");a.each(o,function(){var s=a(this);if(!0===s.prop("checked")&&"1"===s.val()){var t=e.model.getModel("pgs__PagesInStaticResources"),i=t.getRowById(a("input:radio:checked[name='existingPagePack']").val());r.srName=t.getFieldValue(i,"Name"),r.srDescription=t.getFieldValue(i,"Description")}});var n=e.snippet.getSnippet("skuid.page.packagePages");n&&n(a.extend(s,r))}),c("skuid.pageList.refreshPages",function(){var s=[],t=a("#pageSRSelect").find("input");a.each(t,function(){var e=a(this),t=e.val();null!==t&&!0===e.prop("checked")&&s.push(t)}),s.length>0&&(e.$.blockUI({message:"Refreshing Pages in selected Static Resources..."}),e.PageListControllerExtension.RefreshPagesFromStaticResource(JSON.stringify(s),function(s){e.model.getModel("pgs__pagedata").updateData().then(function(){if(s.isSuccess){var t=e.snippet.get("skuid.pageList.snippets.regenPackSupportFiles");if(t)return t(s.pageSummaries)}}).then(function(){if(s&&!0===s.isSuccess)e.$.blockUI({message:"Success!",timeout:1500});else{var t="There was an error refreshing one or more pages";s&&s.errorList&&s.errorList.length>0&&(t+=":",a.each(s.errorList,function(e,s){t+="<br/>\n<br/>\n"+ ++e+". "+s})),e.$.blockUI({message:t,timeout:7500})}})}))})}(skuid)}});