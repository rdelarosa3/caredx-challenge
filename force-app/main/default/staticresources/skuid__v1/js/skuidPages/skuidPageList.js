!function(i){var o={};function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=i,n.c=o,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=344)}({344:function(e,t,i){"use strict";var P,o,S,I,N,F,s,R,r,c,D,C,l,u,m,p,g,d;P=skuid,o=P.sfdc.api,S=P.utils,I=P.$,N="skuid__DataSourceType__ui",F="skuid__DataSource__ui",s=P.constants,R=s.SALESFORCE,r=P.dataSource,c=P.ui.getRenderer,D=P.platform.getEntityFieldNames("page"),C=D.api_version,l=D.type,u=o.SObject,m=o.query,p=o.escapeMetadataBody,g=S.size,(d=P.snippet.register)("skuid.pageList.previewPage",function(){var e=arguments[0],t=P.snippet.get("skuid.builder.page.preview");t&&t({model:e.model,row:e.item?e.item.row:e.row})}),d("skuid.pageList.bytesToKBs",function(e,t){var i=0;I.isNumeric(t)&&(i=I.number(t/1e3,1)+" KB"),P.ui.getFieldRenderer(e,"TEXT").read(e,i)}),d("Multipicklist",function(e,t){P.ui.getFieldRenderer(e,"MULTIPICKLIST").edit(e,S.decodeHTML(t))}),d("skuid.page.packagePages",function(e){var n=e.srName,a=e.srDescription,t="SELECT Id, Name, Description FROM StaticResource WHERE Name = '"+n+"'",i=P.model.getModel("pgs__pagedata"),o=[],s="SELECT Id, Name, skuid__API_Version__c, skuid__Type__c, skuid__UniqueId__c, skuid__Module__c, skuid__Composer_Settings__c, skuid__MasterPage__c, skuid__MasterPage__r.Name, skuid__MasterPage__r.skuid__UniqueId__c, skuid__IsMaster__c, skuid__Layout__c, skuid__Layout2__c, skuid__Layout3__c, skuid__Layout4__c, skuid__Layout5__c FROM skuid__Page__c WHERE Id IN ('";if(I.each(i.registeredItems,function(){this.selected&&o.push(this.row.Id)}),0!==o.length){s+=o.join("','")+"') ORDER BY skuid__Module__c, Name",I.blockUI({message:"Getting Page and StaticResource records..."});var r,c,l=m(t),d=m(s);I.when(l,d).then(function(e,t){r=e[0].records,c=t[0].records;var i,o=I.Deferred();0<r.length?(i=new u("StaticResource",{Id:r[0].Id,CacheControl:"Private"}),o.resolve()):(I.blockUI({message:"Creating StaticResource..."}),(i=new u("StaticResource",{Name:n,Description:a,Body:p(JSON.stringify([])),CacheControl:"Private"})).insert({success:function(){o.resolve()},error:function(e){o.reject({resourceName:n,errorMessage:e.responseJSON[0].message})}})),I.when(o).then(function(){I.blockUI({message:"Packaging Pages into StaticResource..."}),i.Body=p(JSON.stringify(c)),i.ContentType="application/json",I.when(i.update()).then(function(){I.blockUI({message:'The "'+n+'" Page Pack was created/updated successfully!',timeout:3e3}),I(".ui-dialog-content").last().dialog("close"),P.$M("pgs__PagesInStaticResources").updateData()},function(e){I.blockUI({message:'There was an error creating the "'+n+'" Page Pack'+(e&&e.errorMessage?":\n\n"+e.errorMessage:"."),timeout:5e3})})},function(e){I.blockUI({message:'There was an error creating the "'+e.resourceName+'" Page Pack:\n\n'+e.errorMessage,timeout:5e3})})},function(){I.blockUI({message:"There was an error creating the Page Pack",timeout:5e3})})}else I.blockUI({message:"Please select at least one Page for your Page Pack",timeout:2500})}),d("skuid.page.packagePagesInModules",function(e){var t=e.model,i=e.row,o=t.getFieldValue(i,"skuid__Module__c",!0);if(o){I.blockUI({message:"Retrieving Page and StaticResource records..."});var r,c,n=o.split(";"),a="('"+n.join("','")+"') ",s="('"+n.join("Pages','")+"Pages') ",l=m("select Id, Name from StaticResource where Name in "+s),d=m("select Id, Name, skuid__API_Version__c, skuid__Type__c, skuid__UniqueId__c, skuid__Module__c, skuid__Composer_Settings__c, skuid__MasterPage__c, skuid__MasterPage__r.Name, skuid__MasterPage__r.skuid__UniqueId__c, skuid__IsMaster__c, skuid__Layout__c, skuid__Layout2__c, skuid__Layout3__c, skuid__Layout4__c, skuid__Layout5__c from skuid__Page__c where skuid__Module__c in "+a+"order by skuid__Module__c, Name");I.when(l,d).then(function(e,t){c=e[0].records,r=t[0].records,I.blockUI({message:"Checking for Resources that may need to be created..."});var a={},i={},s={};I.each(c,function(){a[this.Name.substring(0,this.Name.indexOf("Pages"))]=new u("StaticResource",{Name:this.Name,Id:this.Id,Body:this.Body,CacheControl:"Private"})}),I.each(r,function(){var e=a[this.skuid__Module__c],t=s[this.skuid__Module__c];e||(i[this.skuid__Module__c]=1),t||(t=s[this.skuid__Module__c]=[]),t.push(this)});var o=I.Deferred(),n={};I.each(i,function(e){var t=e+"Pages",i=new u("StaticResource",{Name:t,Body:p(JSON.stringify([])),CacheControl:"Private"});a[e]=i,n[t]=1,i.insert({success:function(){delete n[t],0===g(n)&&o.resolve()},error:function(e){o.reject({resourceName:t,errorMessage:e.responseJSON[0].message})}})}),0===g(i)&&o.resolve(),I.when(o).then(function(){I.blockUI({message:"Packaging Pages into StaticResources..."});var o=I.Deferred(),n=g(s);I.each(s,function(e,t){var i=a[e];i&&(i.Body=p(JSON.stringify(t)),i.ContentType="application/json",I.when(i.update()).then(function(){0==--n&&o.resolve()}))}),I.when(o).then(function(){var t=[];I.each(s,function(e){t.push(e+"Pages")}),I.blockUI({css:{"text-align":"left"},message:"Module Pages packaged successfully!<br/><br/>The following StaticResources were updated, or created if they did not exist before:<br/><ul><li>"+t.join("</li><li>")+"</ul>",timeout:5e3})})},function(e){I.blockUI({message:'There was an error creating the new StaticResource "'+e.resourceName+'":\n\n'+e.errorMessage,timeout:7500})})},function(){I.blockUI({message:"There was an error creating the Page Pack",timeout:5e3})})}else window.alert("Please select a Module.")}),d("skuid.pageList.packagePages",function(){var e=arguments[0],t=e.model,i=e.row,o={srName:t.getFieldValue(i,"Name"),srDescription:t.getFieldValue(i,"Description")},n=I("input[name='tab-radio-PagePackDetailsTabSet']");I.each(n,function(){var e=I(this);if(!0===e.prop("checked")&&"1"===e.val()){var t=P.model.getModel("pgs__PagesInStaticResources"),i=t.getRowById(I("input:radio:checked[name='existingPagePack']").val());o.srName=t.getFieldValue(i,"Name"),o.srDescription=t.getFieldValue(i,"Description")}});var a=P.snippet.getSnippet("skuid.page.packagePages");a&&a(I.extend(e,o))}),d("skuid.pageList.refreshPages",function(){var i=[],e=I("#pageSRSelect").find("input");I.each(e,function(){var e=I(this),t=e.val();null!==t&&!0===e.prop("checked")&&i.push(t)}),0<i.length&&(P.$.blockUI({message:"Refreshing Pages in selected Static Resources..."}),P.PageListControllerExtension.RefreshPagesFromStaticResource(JSON.stringify(i),function(e){P.model.getModel("pgs__pagedata").updateData().then(function(){if(e&&!0===e.isSuccess)P.$.blockUI({message:"Success!",timeout:1500});else{var i="There was an error refreshing one or more pages";e&&e.errorList&&0<e.errorList.length&&(i+=":",I.each(e.errorList,function(e,t){i+="<br/>\n<br/>\n"+ ++e+". "+t})),P.$.blockUI({message:i,timeout:7500})}})}))}),d("skuid.core.snippets.newPageStartingPoint",function(e,t){if(e.options||(e.options={}),e.options.type="RADIO_BUTTONS",P.ui.getFieldRenderer(e)[e.mode](e,t),e.options.type="CUSTOM","edit"===e.mode){var i=e.model,o=e.row,n=i.getFieldValue(o,l,!0),a=i.getFieldValue(o,C,!0);"Mobile"!==n&&"v2"!==a||e.element.find("div.nx-radiowrapper").each(function(){var e=I(this),t=e.children('input[type="radio"]');"Mobile"===n&&"masterpage"===t.val()?e.hide():"v2"===a&&"template"===t.val()&&e.hide()})}}),I(document.body).one("pageload",function(){var v="skuid__Primary_Object__c",k=P.platform.getDefaultDataSourceTypeName(),w=P.platform.getDefaultDataSourceName(),M=D.master_page_id;function t(e){e||(e={});var i,t,o,n,a=e.model,s=e.row,r=a.getFieldValue(s,"skuid__Initial_State__c",!0)||"none",c=a.getFieldValue(s,"skuid__Page_Template__c",!0)||"tab-page",l=a.getFieldValue(s,v,!0)||"",d=a.getFieldValue(s,N,!0)||k,u=a.getFieldValue(s,F,!0)||w,m=P.dataSource.get(u),p=m.getCachedEntityMetadata(l),g=u===R&&d===R,_=a.getFieldValue(s,D.type,!0)||"Desktop",f=function(e){var t=e.getFirstRow();return t&&t[C]&&"v1"!==t[C]?"skuid__page":"skuidpage"}(a),b="<"+f+' unsavedchangeswarning="yes" personalizationmode="server"',h=function(){d===R&&-1<I.inArray(l,["Contact","Lead","User"])?(o=["FirstName","LastName"],"Lead"===l&&o.push("Company")):(o=[],(n=m.getNameField(l))&&o.push(n))};if("skuid__page"===f&&(c="new-page"),""!==l&&"none"!==r)t=l.replace("__c","").replace(/_/g,""),"tab-page"===c?(h(),i="Mobile"===_?b+"><models>":b+' showsidebar="true" showheader="true" '+(g?'tabtooverride="'+l+'"':"")+"><models>",i+='<model id="'+t+'" limit="100" query="true" createrowifnonefound="false" datasourcetype="'+d+'" datasource="'+u+'" sobject="'+l+'">',i+="<fields>",I.each(o,function(e,t){p.getField(t)&&(i+='<field id="'+t+'"/>')}),p.getField("CreatedDate")&&(i+='<field id="CreatedDate"/>'),i+="</fields>",i+="<conditions/></model></models><components>","Desktop"===_?(i+='<pagetitle model="'+t+'"><maintitle><template>{{Model.labelPlural}}</template></maintitle><subtitle><template>Home</template></subtitle><actions><action type="savecancel"/></actions></pagetitle>',i+='<skootable showconditions="true" showsavecancel="false" searchmethod="server" searchbox="true" showexportbuttons="false" pagesize="10" createrecords="true" model="'+t+'" mode="read" allowcolumnreordering="true">',i+="<fields>",I.each(o,function(e,t){p.getField(t)&&(i+='<field id="'+t+'" hideable="true" allowordering="true" uniqueid="'+S.generateUniqueId({prefix:"fi"})+'"/>')}),p.getField("CreatedDate")&&(i+='<field id="CreatedDate" hideable="true" allowordering="true" uniqueid="'+S.generateUniqueId({prefix:"fi"})+'"/>'),i+='</fields><rowactions><action type="edit"/><action type="delete"/></rowactions><massactions usefirstitemasdefault="true"><action type="massupdate"/><action type="massdelete"/></massactions><views><view type="standard"/></views>',i+="</skootable>"):"Mobile"===_&&(i+="<skuidmobile>",i+="<mobilepanels>",i+='<mobilepanel uniqueid="main" minwidth="400">',i+="<components>",i+='<mobiledeck showsavecancel="true" searchmethod="server" searchbox="true" tokenizesearch="true" createrecords="true" precision="6" minwidth="300" model="'+t+'" mode="read">',i+="<components>",I.each(o,function(e,t){p.getField(t)&&(i+='<mobilefield id="'+t+'"/>')}),p.getField("CreatedDate")&&(i+='<mobilefield id="CreatedDate"/>'),i+="</components>",i+="<title>{{Model.labelPlural}}</title>",i+="<cardtitle>",I.each(o,function(e,t){i+=(0!==e?" ":"")+"{{"+t+"}}"}),i+="</cardtitle>",i+="</mobiledeck>",i+="</components>",i+="</mobilepanel>",i+="</mobilepanels>",i+="<mobilenavs>",i+='<mobilenav uniqueid="header">',i+="<components>",i+='<mobilegrid precision="6" minwidth="50">',i+="<divisions>",i+='<division size="1">',i+="<components>",i+='<mobilebutton label="" style="nav" icon="fa-bars">',i+="<actions>",i+='<action type="setMainPanel" panel="main"/>',i+="</actions>",i+="</mobilebutton>",i+="</components>",i+="</division>",i+='<division size="4">',i+="<components>",i+="<mobiletitle>",i+="<contents>{{$Model."+t+".labelPlural}}</contents>",i+="</mobiletitle>",i+="</components>",i+="</division>",i+='<division size="1">',i+="<components>",i+='<mobilebutton label="" style="nav" icon="fa-th">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</mobilebutton>",i+="</components>",i+="</division>",i+="</divisions>",i+="</mobilegrid>",i+="</components>",i+="<interactions>",i+='<interaction type="doubletap">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+='<interaction type="swipedown">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+="</interactions>",i+="</mobilenav>",i+="</mobilenavs>",i+="</skuidmobile>"),i+='</components><resources><labels/><css/><javascript/><actionsequences/></resources><styles><styleitem type="background" bgtype="none"/></styles></'+f+">"):"detail-page"===c?(h(),i="Mobile"===_?b+"><models>":b+' showsidebar="true" showheader="true" '+(g?'tabtooverride="'+l+'"':"")+"><models>",i+='<model id="'+t+'" limit="1" query="true" createrowifnonefound="false" datasourcetype="'+d+'" datasource="'+u+'" sobject="'+l+'">',i+="<fields>",I.each(o,function(e,t){p.getField(t)&&(i+='<field id="'+t+'"/>')}),p.getField("CreatedDate")&&(i+='<field id="CreatedDate"/>'),i+="</fields>",i+='<conditions><condition type="param" enclosevalueinquotes="true" operator="=" field="Id" value="id"/></conditions>',i+="</model></models><components>","Desktop"===_?(i+='<pagetitle model="'+t+'"><maintitle><template>',I.each(o,function(e,t){p.getField(t)&&(i+=(0!==e?" ":"")+"{{"+t+"}}")}),i+="</template></maintitle><subtitle><template>{{Model.label}}</template></subtitle><actions>"+(g?'<action type="delete"/><action type="clone"/><action type="share"/>':"")+'<action type="savecancel" window="self"/></actions></pagetitle>',i+='<basicfieldeditor showsavecancel="false" showheader="true" model="'+t+'" mode="read"><columns>',i+='<column width="50%"><sections>',i+='<section title="Basics"><fields>',I.each(o,function(e,t){p.getField(t)&&(i+='<field id="'+t+'"/>')}),i+="</fields></section>",i+="</sections></column>",i+='<column width="50%"><sections>',i+='<section title="System Info"><fields>'+(p.getField("CreatedDate")?'<field id="CreatedDate"/>':"")+"</fields></section>",i+="</sections></column>",i+="</columns></basicfieldeditor>"):"Mobile"===_&&(i+="<skuidmobile>",i+="<mobilepanels>",i+='<mobilepanel uniqueid="main" minwidth="400">',i+="<components>",i+='<mobiledeck showsavecancel="true" searchmethod="server" searchbox="false" tokenizesearch="false" createrecords="false" precision="1" minwidth="200" model="'+t+'" mode="read">',i+="<components>",I.each(o,function(e,t){p.getField(t)&&(i+='<mobilefield id="'+t+'"/>')}),p.getField("CreatedDate")&&(i+='<mobilefield id="CreatedDate"/>'),i+="</components>",i+="<title>{{Model.label}}</title>",i+="<cardtitle>",I.each(o,function(e,t){p.getField(t)&&(i+=(0!==e?" ":"")+"{{"+t+"}}")}),i+="</cardtitle>",i+="</mobiledeck>",i+="</components>",i+="</mobilepanel>",i+="</mobilepanels>",i+="<mobilenavs>",i+='<mobilenav uniqueid="header">',i+="<components>",i+='<mobilegrid precision="6" minwidth="50">',i+="<divisions>",i+='<division size="1">',i+="<components>",i+='<mobilebutton label="" style="nav" icon="fa-bars">',i+="<interactions>",i+='<interaction type="tap">',i+="<actions>",i+='<action type="setMainPanel" panel="main"/>',i+="</actions>",i+="</interaction>",i+="</interactions>",i+="</mobilebutton>",i+="</components>",i+="</division>",i+='<division size="4">',i+="<components>",i+="<mobiletitle>",i+="<contents>{{$Model."+t+".label}}</contents>",i+="</mobiletitle>",i+="</components>",i+="</division>",i+='<division size="1">',i+="<components>",i+='<mobilebutton label="" style="nav" icon="fa-th">',i+="<interactions>",i+='<interaction type="tap">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+="</interactions>",i+="</mobilebutton>",i+="</components>",i+="</division>",i+="</divisions>",i+="</mobilegrid>",i+="</components>",i+="<interactions>",i+='<interaction type="doubletap">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+='<interaction type="swipedown">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+="</interactions>",i+="</mobilenav>",i+="</mobilenavs>",i+="</skuidmobile>"),i+='</components><resources><labels/><css/><javascript/><actionsequences/></resources><styles><styleitem type="background" bgtype="none"/></styles></'+f+">"):"new-page"===c&&(h(),i="Mobile"===_?b+"><models>":b+' showsidebar="true" showheader="true" '+(g?'tabtooverride="'+l+'"':"")+"><models>",i+='<model id="'+t+'" limit="1" query="false" createrowifnonefound="true" datasourcetype="'+d+'" datasource="'+u+'" sobject="'+l+'">',i+="<fields>",I.each(o,function(e,t){p.getField(t)&&(i+='<field id="'+t+'"/>')}),i+="</fields>",i+="</model></models><components>","Desktop"===_?(i+='<pagetitle model="'+t+'"><maintitle><template>New {{Model.label}}</template></maintitle><subtitle><template>{{Model.labelPlural}}</template></subtitle><actions><action type="savecancel" '+(g?'afterCancel="/{{Model.KeyPrefix}}/o" ':"")+(g?'afterSave="/{{Id}}" ':"")+'rollbackonanyerror="true"/></actions></pagetitle>',i+='<basicfieldeditor showsavecancel="false" showheader="true" model="'+t+'" mode="edit"><columns>',i+='<column width="50%"><sections>',i+='<section title="Basics"><fields>',I.each(o,function(e,t){p.getField(t)&&(i+=(0!==e?" ":"")+'<field id="'+t+'"/>')}),i+="</fields></section>",i+="</sections></column>",i+='<column width="50%"><sections>',i+='<section title="Additional Info"><fields/></section>',i+="</sections></column>",i+="</columns></basicfieldeditor>"):"Mobile"===_&&(i+="<skuidmobile>",i+="<mobilepanels>",i+='<mobilepanel uniqueid="main" minwidth="400">',i+="<components>",i+='<mobiledeck showsavecancel="true" searchmethod="client" searchbox="false" tokenizesearch="false" createrecords="true" precision="1" minwidth="200" model="'+t+'" mode="edit">',i+="<components>",I.each(o,function(e,t){p.getField(t)&&(i+='<mobilefield id="'+t+'"/>')}),i+="</components>",i+="<title>{{Model.label}}</title>",i+="<cardtitle>",I.each(o,function(e,t){p.getField(t)&&(i+=(0!==e?" ":"")+"{{"+t+"}}")}),i+="</cardtitle>",i+="</mobiledeck>",i+="</components>",i+="</mobilepanel>",i+="</mobilepanels>",i+="<mobilenavs>",i+='<mobilenav uniqueid="header">',i+="<components>",i+='<mobilegrid precision="6" minwidth="50">',i+="<divisions>",i+='<division size="1">',i+="<components>",i+='<mobilebutton label="" style="nav" icon="fa-bars">',i+="<interactions>",i+='<interaction type="tap">',i+="<actions>",i+='<action type="setMainPanel" panel="main"/>',i+="</actions>",i+="</interaction>",i+="</interactions>",i+="</mobilebutton>",i+="</components>",i+="</division>",i+='<division size="4">',i+="<components>",i+="<mobiletitle>",i+="<contents>New {{$Model."+t+".label}}</contents>",i+="</mobiletitle>",i+="</components>",i+="</division>",i+='<division size="1">',i+="<components>",i+='<mobilebutton label="" style="nav" icon="fa-th">',i+="<interactions>",i+='<interaction type="tap">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+="</interactions>",i+="</mobilebutton>",i+="</components>",i+="</division>",i+="</divisions>",i+="</mobilegrid>",i+="</components>",i+="<interactions>",i+='<interaction type="doubletap">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+='<interaction type="swipedown">',i+="<actions>",i+='<action type="toggleSetupMenu"/>',i+="</actions>",i+="</interaction>",i+="</interactions>",i+="</mobilenav>",i+="</mobilenavs>",i+="</skuidmobile>"),i+='</components><resources><labels/><css/><javascript/><actionsequences/></resources><styles><styleitem type="background" bgtype="none"/></styles></'+f+">");else if("masterpage"===r&&""!==M)i="<"+f+' unsavedchangeswarning="yes">\n\t<models/>\n\t<pageregioncontents/>\n\t<components/>\n\t<resources>\n\t\t<labels/>\n\t\t<javascript/>\n\t\t<css/>\n\t\t<actionsequences/>\n\t</resources>\n\t<styles>\n\t\t<styleitem type="background" bgtype="none"/>\n\t</styles>\n</'+f+">";else if("from-xml"===r||"from-xml-file"===r){var y=a.getFieldValue(s,"skuid__Page_XML__c",!0);return void(y&&S.writeXmlToPageLayoutFields(y,a,s))}i||(i="Mobile"===_?b+'>\n\t<models/>\n\t<components>\n\t\t<skuidmobile>\n\t\t\t<mobilepanels/>\n\t\t\t<mobilenavs/>\n\t\t</skuidmobile>\n\t</components>\n\t<resources>\n\t\t<labels/>\n\t\t<javascript/>\n\t\t<css/>\n\t\t<actionsequences/>\n\t</resources>\n\t<styles>\n\t\t<styleitem type="background" bgtype="none"/>\n\t</styles>\n</'+f+">":b+' showsidebar="true" showheader="true">\n\t<models/>\n\t<components/>\n\t<resources>\n\t\t<labels/>\n\t\t<javascript/>\n\t\t<css/>\n\t\t<actionsequences/>\n\t</resources>\n\t<styles>\n\t\t<styleitem type="background" bgtype="none"/>\n\t</styles>\n</'+f+">"),S.writeXmlToPageLayoutFields(i,a,s)}d("skuid.pageList.buildLayoutFromTemplate",function(e){t({model:e.model,row:e.row})}),d("PrimaryObjectField",function(t){var i=t.model,o=t.row,n=r.mapByType(),e=i.getFieldValue(o,v,!0);t.element.append(c("ENTITY").edit({dataSource:function(){var e=i.getFieldValue(o,N,!0)||Object.keys(n)[0],t=i.getFieldValue(o,F,!0);return t&&P.dataSource.getDataSource(t)||n[e][0]},getErrorContainer:function(){var e=t.element.find(".nx-error-inline");return e.length||(e=I("<div>").addClass("nx-error-inline").appendTo(t.element)),e},onChange:function(e){i.updateRow(o,v,e,{initiatorId:t._GUID})},value:e}))});var o,n,i=P.$M("pgs__NewPage"),a=P.$M("master__DataSourceReassign");i.subscribe("row.updated",function(e){var t=e.row;e.updates.hasOwnProperty("skuid__Page_XML__c")&&t.skuid__Page_XML__c!==o&&function(){if(!n){if(S.inPlatform(s.NATIVE)){var e=P.$M("master__DataSources");return e.load().then(function(){n=e.getRows().map(function(e){return e.name}).sort(function(e,t){return e.localeCompare(t)})})}n=P.dataSource.list().map(function(e){return e.name}).sort(function(e,t){return e.localeCompare(t)})}return S.resolve()}().then(function(){!function(e){var t=S.makeXMLDoc(e.skuid__Page_XML__c),i=[];a.emptyData(),t.find("[datasource]").each(function(){var e=this.getAttribute("datasource");n.includes(e)||i.includes(e)||(a.adoptRow({currentName:e}),i.push(e))}),o=e.skuid__Page_XML__c}(t)})}),d("after-xml-file-upload",function(e){var t=i.getRows()[0];i.updateRow(t,{fileName:e.component.fileName})})}),d("newpage-before-save-xml",function(){var e=P.$M("pgs__NewPage"),t=P.$M("master__DataSourceReassign"),i=e.getRows()[0];if(t.getRows().length){var o=S.makeXMLDoc(i.skuid__Page_XML__c);t.getRows().forEach(function(e){o.find('[datasource="'+e.currentName+'"]').attr("datasource",e.newName||e.currentName)}),e.updateRow(i,{skuid__Page_XML__c:o[0].outerHTML})}t.cancel()})}});