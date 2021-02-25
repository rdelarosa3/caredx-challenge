!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=91)}({90:function(e,t,a){"use strict";!function(e){var t=e.$,a=e.utils,l=a.makeXMLDoc,n=e.ui.getRenderer,i=e.visualizations=e.visualizations?e.visualizations:{},o=i.core=i.core?i.core:{},r=i.chart=i.chart?i.chart:{},d=i.map=i.map?i.map:{};if(o.AGG_FUNCTIONS={avg:{label:"Average",abbreviation:"AVG",value:"avg"},sum:{label:"Sum",abbreviation:"SUM",value:"sum"},max:{label:"Max",abbreviation:"MAX",value:"max"},min:{label:"Min",abbreviation:"MIN",value:"min"},count:{label:"Count",abbreviation:"COUNT",value:"count"}},o.DATE_GRANULARITIES={none:{label:"None",value:"none"},day:{label:"Day",value:"day",dayInterval:1},calweek:{label:"Calendar Week",value:"calweek",dayInterval:7},calmonth:{label:"Calendar Month",value:"calmonth",monthInterval:1},calquarter:{label:"Calendar Quarter",value:"calquarter",monthInterval:3},calyear:{label:"Calendar Year",value:"calyear",yearInterval:1}},o.getColorsArray=function(e){var a=[],l=e.children("value");return l.length&&t.each(l,function(){var e=t(this);a.push(e.text())}),a},o.parseNodetoObj=function(e){var a={};return t.each(e.get(0).attributes,function(){this.value&&(a[this.name]=this.value)}),a},e.builder){var s=e.builder,f=s.core,c=s.mobile;o.getModelFieldsOptions=function(e,a){var l=f.getModelFromModelName(e).children("fields,groupby").children(),n=[];return!0===(a||{}).includeNone&&n.push({label:"-- None --",value:""}),l&&t.each(l,function(){var e=t(this),a=e.attr("id"),l=e.attr("name");n.push({label:l||a,value:l||a,fieldId:a})}),n},o.getHeightTree=function(e){var t=e.component;return{label:"Height",deleteable:!1,linkedComponent:t,summaryFunction:function(t){return t.attr("height")||e.defaultSummary||"-- Default --"},propsFunction:function(a){return[{id:"height",type:"csssize",label:e.label||"Height",onChange:function(){a.refresh(),t.refresh()}}]}}},o.getLegendTree=function(e){var t=e.component,a=e.metadata||{};return{label:"Legend",deleteable:!1,linkedComponent:t,state:t.state.children("legend:first"),defaultStateFunction:function(){return l(e.defaultState||'<legend layout="horizontal" halign="center" valign="bottom"/>')},summaryFunction:function(t){var a=e.defaultSummary||"-- Default --",l=t.attr("layout")||"(default)",n=t.attr("halign")||"(default)",i=t.attr("valign")||"(default)",o="";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}return l&&(o=r(l),(n||i)&&"off"!==l&&(o+=" | ")),"off"!==l&&(n&&(o+=r(n),i&&(o+=" | ")),i&&(o+=r(i))),""!==o&&o||a},propsFunction:function(l){var n=function(){l.refresh(),t.refresh()},i=[{id:"layout",type:"picklist",label:"Layout",helptext:"The layout of the legend items.",picklistEntries:[{label:e.defaultSummary||"-- Default --",value:""},{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"},{label:"Off",value:"off"}],onChange:function(e){var t=l.state,a=t.attr("halign"),i=t.attr("valign");"horizontal"===e?("center"!==a&&f.updateState(t,{key:"halign",value:"center"}),"top"!==i&&"bottom"!==i&&f.updateState(t,{key:"valign",value:"bottom"})):"vertical"===e&&"left"!==a&&"right"!==a&&f.updateState(t,{key:"halign",value:"left"}),l.rebuildProps(),n()}}];return"off"!==l.state.attr("layout")&&i.push({id:"halign",type:"picklist",label:"Horizontal Alignment",helptext:"The horizontal alignment of the legend box",picklistEntries:[{label:e.defaultSummary||"-- Default --",value:""},{label:"Center",value:"center"},{label:"Left",value:"left"},{label:"Right",value:"right"}],onChange:function(e){var t=l.state,a=t.attr("layout"),i=t.attr("valign");"left"!==e&&"right"!==e||"vertical"===a?"center"===e&&("horizontal"!==a&&f.updateState(t,{key:"layout",value:"horizontal"}),"top"!==i&&"bottom"!==i&&f.updateState(t,{key:"valign",value:"bottom"})):f.updateState(t,{key:"layout",value:"vertical"}),l.rebuildProps(),n()}},{id:"valign",type:"picklist",label:"Vertical Alignment",helptext:"The vertical alignment of the legend box.",picklistEntries:[{label:e.defaultSummary||"-- Default --",value:""},{label:"Bottom",value:"bottom"},{label:"Middle",value:"middle"},{label:"Top",value:"top"}],onChange:function(e){var t=l.state,a=t.attr("layout"),i=t.attr("halign");if("middle"===e){var o=!1;"center"===i&&(f.updateState(t,{key:"halign",value:"left"}),o=!0),"horizontal"!==a&&!0!==o||f.updateState(t,{key:"layout",value:"vertical"})}l.rebuildProps(),n()}}),a.hasDataLabels&&i.push({id:"showlabels",type:"picklist",label:"Display Data Labels",location:"attribute",picklistEntries:[{label:e.defaultSummary||"-- Default --",value:""},{label:"On",value:"true"},{label:"Off",value:"false"}],onChange:n}),i}}},o.getBordersTree=function(a){var l=a.component;return{id:"borders",label:"Borders",deleteable:!1,linkedComponent:l,summaryFunction:function(e){var l=t("<span>").text(a.defaultSummary||"-- Default --"),n="",i=e.attr("bordercolor"),r=e.attr("borderwidth"),d=e.attr("borderstyle");return r&&(n=r),d&&(""!==n&&(n+=" | "),n+=d),""!==n&&l.html(n),i&&l.prepend(o.getColorPreview(i)),l},propsFunction:function(t){function a(){l.refresh(),t.refresh()}return[{type:"helptext",html:"Options for styling the border around the Chart"},{id:"bordercolor",label:"Color",type:"string",onChange:function(e){a()}},{id:"borderwidth",label:"Width",type:"string",validator:e.builder.core.validators.numericOnly,onChange:function(e){a()}},{id:"borderradius",label:"Radius",type:"string",validator:e.builder.core.validators.numericOnly,onChange:function(e){a()}}]}}},o.getColorPreview=function(e){return t("<div>").css({display:"inline-block",height:"12px",width:"12px",border:"1px solid black",background:e,"vertical-align":"middle","margin-right":"8px"})},o.buildColorGenerator=function(a,l){var i,o=a.state.children("colors"),r=t("<div>").addClass("sk-icon sk-bi-color-picker").css({position:"absolute",top:"1px",right:"4px"}).skootip("Generate Colors");return l=t.extend({colorCount:14},l),r.click(function(){if(i)i.dialog("open");else{i=t("<div>");var r=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange"],d={red:{label:"Red",50:"#fde0dc",100:"#f9bdbb",200:"#f69988",300:"#f36c60",400:"#e84e40",500:"#e51c23",600:"#dd191d",700:"#d01716",800:"#c41411",900:"#b0120a",a100:"#ff7997",a200:"#ff5177",a400:"#ff2d6f",a700:"#e00032"},pink:{label:"Pink",50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{label:"Purple",50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{label:"Deep Purple",50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{label:"Indigo",50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{label:"Blue",50:"#e7e9fd",100:"#d0d9ff",200:"#afbfff",300:"#91a7ff",400:"#738ffe",500:"#5677fc",600:"#4e6cef",700:"#455ede",800:"#3b50ce",900:"#2a36b1",a100:"#a6baff",a200:"#6889ff",a400:"#4d73ff",a700:"#4d69ff"},lightBlue:{label:"Light Blue",50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{label:"Cyan",50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{label:"Teal",50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{label:"Green",50:"#d0f8ce",100:"#a3e9a4",200:"#72d572",300:"#42bd41",400:"#2baf2b",500:"#259b24",600:"#0a8f08",700:"#0a7e07",800:"#056f00",900:"#0d5302",a100:"#a2f78d",a200:"#5af158",a400:"#14e715",a700:"#12c700"},lightGreen:{label:"Light Green",50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{label:"Lime",50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{label:"Yellow",50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{label:"Amber",50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{label:"Orange",50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{label:"Deep Orange",50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{label:"Brown",50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{label:"Grey",50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#ffffff"},blueGrey:{label:"Blue Grey",50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"}},s="indigo",f=l.variance||"3",c=n("PICKLIST").edit({required:!0,value:s,entries:r.map(function(e){return{value:e,label:d[e].label}}),onChange:function(e){s=e,h()}}),u=n("PICKLIST").edit({required:!0,value:f,entries:[{value:"0",label:"Monochromatic"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"Full Spectrum"}],onChange:function(e){f=e,h()}}),p=t("<div>"),b=function(){return function(e,a,n,i){var o=t.inArray(e,r);if(-1===o)return!1;a=a||0,n=n||0,i=i||2;for(var s=[],f=0;f<l.colorCount;f++){var c=100*(f*n%7+i);c>900&&(c=900);var u=(o+(f%(a+1)-Math.floor(a/2))+r.length)%r.length,p=r[u];s.push(d[p][c])}return s}(s,parseInt(f,10),1)},h=function(){p.empty().append(v(b()))},v=function(e){var a=t("<div>");return t.each(e,function(){var e=t("<div>").css({display:"inline-block",width:"18px",height:"18px",margin:"2px"}).prop("title",this).css("background-color",this);a.append(e)}),a};h(),i.append(c),l.variance||i.append(u),i.append(p),i.dialog({width:400,height:200,title:"Generate a color swatch",resizable:!0,modal:!0,buttons:[{text:"Apply",click:function(){o.empty(),t.each(b(),function(){var t=e.utils.makeXMLDoc("<value>"+this+"</value>");o.append(t)}),a.save().refresh().rebuildProps(),i.dialog("close")}},{text:"Cancel",click:function(){i.dialog("close")}}]})}}),r},o.getAdvancedProps=function(e){var t=e.component,a=t.builder&&t.builder.name||"Chart";return{name:"Advanced",props:[f.coreProps.uniqueIdProp({component:t}),f.coreProps.cssClassProp(),{id:"rendersnippet",label:"Before Render Snippet",type:"snippet",helptext:"This snippet is run immediately before the "+a+" is drawn. Use this to set advanced options not available in the Page Composer. The Snippet gets handed the "+a+" config object as its only argument."},{id:"export",label:"Exporting",type:"picklist",picklistEntries:[{label:"-- "+a+" default --",value:""},{label:"Server-side",value:"server"},{label:"Client-side",value:"client"},{label:"Disabled",value:"off"}],onChange:function(){t.refresh()}}]}},o.getSeriesOnClickActionsTree=function(a){var n=a.seriesComponent,i=a.component,o=i.builder&&i.builder.id,r=a.seriesObj,d=f.getBuilder(o).actionTypes.series(i);return[f.getActionTreeNode({linkedComponent:i,useModelName:n.state.attr("modelId")||i.state.attr("model"),additionalActionOptions:d,treeNode:{invisibleParent:"actions",invisibleParentLabel:"On Click Actions",indent:(r.indent||0)+1,addtooltip:"Add On Click Action",deletetooltip:"Remove On Click Action",defaultStateFunction:function(){var a=t.grep(d,function(e){return"drilldown"===e.value}).length>0,i=t.grep(d,function(e){return"mapDrillIn"===e.value}).length>0,o=d&&d.length>0&&n.state.children("actions").children('action[type="drilldown"],action[type="mapDrillIn"]').length>0,r=e.mobile?"setPopupPanel":"showPopup",s=l('<action type="closeAllPopups"/>');return!0===o?s.attr("type",r):!0===a?s.attr("type","drilldown"):!0===i&&s.attr("type","mapDrillIn"),!1===o&&f.getDefaultConditions({state:s,isMultiRow:!0}),s}}})]},o.getSeriesActions=function(e,a){var n=(a=a||{}).indent||2,i=[],o=e.chartSet,r=o&&o.charts;return r&&r.length&&i.push({value:"drilldown",label:"Drilldown",propsFunction:function(){return[{id:"chartid",type:"picklist",label:"Drilldown Chart",picklistEntries:t.map(r,function(a,l){var n=t(a.state).attr("uniqueid");if(n!==e.state.attr("uniqueid"))return{label:"Chart "+(l+1),value:n}})}]},childrenFunction:function(){return[{invisibleParent:"conditions",invisibleParentLabel:"Context Conditions",indent:n,icon:"sk-bi-condition",addicon:"sk-bi-condition",addtooltip:"Add Context Condition",deletetooltip:"Remove Context Condition",propsFunction:function(t){var a=[],l=t.state.closest("series").attr("modelId")||e.state.attr("model"),n=t.state.closest("action"),i=o.getChartByID(n.attr("chartid")),r=i&&i.state.attr("model");return a.push({id:"field",type:"field",label:"Field",helptext:"The field on the drilldown Chart's Model that will be checked against a field on the row in context.",modelname:r},{id:"mergefield",type:"field",label:"Merge Field",helptext:"The field on the row in context that will be checked against a field on this Series's Model.",modelname:l},f.getConditionOperatorPropObj(t,{fieldMetadata:f.getMetadataForField(t,{modelName:r})})),a},labelFunction:function(e){return(e.attr("field")||"Id")+" of record(s) "+f.operatormap[e.attr("operator")||""].name+" "+(e.attr("mergefield")||"Id")+" of rows in context."},defaultStateFunction:function(){return l('<condition type="contextrows" field="Id" mergefield="Id" operator="in" autocreated="true"/>')}}]}}),i},o.makeChartSet=function(e,t){var a=e.state,l=a.clone(),n=f.getBuilder("skuidvis__chartset").getDefaultState();return n.children("charts").first().append(l,f.getBuilder(t).getDefaultState(void 0,{setUniqueId:!0})),a.replaceWith(n),n},o.addDrilldownActionGroup=function(e){var t=function(t,a,l){return{text:t,icon:a,action:function(){var t=o.makeChartSet(e,l),a=f.componentFactoryWithCache(t,f.getBuilder("skuidvis__chartset"),{makeDraggable:!0,isGlobalComponent:!0});e.element.replaceWith(a.element),a.select(),a.charts.map(function(e){e.reflow()}),e.remove()}}};e.addActionGroup([t("Chart","sk-bi-fields-agg","skuidvis__chart"),t("Geochart","sk-icon-world","skuidvis__geochart")],"Add Drilldown","sk-icon-add")},o.getMobileActionsList=function(t){var a=function(a,l){return new c.PropertyItem({type:"customaction",label:a,customAction:function(){var a=o.makeChartSet(t,l),n=new c.Component(a).render();t.element.replaceWith(n.element),n.select(),t.remove(),e.events.publish("skuidBuilderSave"),e.events.publish("skuid.chart.reflow",[{component:t}]),e.mobile.processResponsiveArea(n.element)}})};return[a("Add Drilldown Chart","skuidvis__chart"),a("Add Drilldown Geochart","skuidvis__geochart")]}}o.methods={formatBorders:function(e,t){e.chart||(e.chart={}),t.color&&(e.chart.borderColor=t.color),t.width&&(e.chart.borderWidth=t.width),t.radius&&(e.chart.borderRadius=t.radius)}},r.methods={drawCenter:function(t,a,l,n,i,o){var r=a.plotWidth/2,d=a.plotHeight/2,s=t.group.element.getBBox(),f=Math.max(s.height/6,12),c=Math.max(s.height/24,10);a.innerText||(a.innerText=a.renderer.text("",r,d).css("text-anchor","middle").addClass("sk-chart-innertext").add()),o&&a.innerText.attr({text:'<span style="font-size:'+f+"px;color:"+o+'" class="sk-chart-innertext-title">'+Highcharts.numberFormat(l,0)+'%</span><br><span style="font-size:'+c+"px;color:"+o+'">'+Highcharts.numberFormat(n)+'</span><br><span style="font-size:'+c+"px;color:"+o+'">'+e.utils.decodeHTML(i)+"</span>"}),a.innerText.attr({x:r,y:d,transform:"translate("+t.group.translateX+","+t.group.translateY+")",style:"text-anchor: middle;",class:"sk-chart-innertext"})}},r.types={line:{label:"Line",value:"line",category:"line",metadata:{hasDataAxes:!0,hasCategories:!0,hasLegend:!0,hasMultiAxis:!0,isStackable:!0}},spline:{label:"Spline",value:"spline",category:"line"},area:{label:"Area",value:"area",category:"line"},areaspline:{label:"Area Spline",value:"areaspline",category:"line"},column:{label:"Column",value:"column",category:"line"},bar:{label:"Bar",value:"bar",category:"line"},pie:{label:"Pie",value:"pie",category:"pie",metadata:{hasLegend:!0,hasDataLabels:!0},additionalProps:function(e,a){void 0===a&&(a="pie"),void 0===e.plotOptions&&(e.plotOptions={}),void 0===e.plotOptions[a]&&(e.plotOptions[a]={}),t.extend(!0,e.plotOptions[a],{tooltip:{headerFormat:"",pointFormat:"{point.name}: <b>{point.y}</b><br/>"}})}},donut:{label:"Donut",value:"donut",category:"pie",hcType:"pie",additionalProps:function(e){var l=r.types.donut.hcType;function n(e){var l,n=e.hcObj,i=e.series;t.each(i.data,function(){(!l||this.y>l.y)&&(l=this)}),a.isUndefined(l)||r.methods.drawCenter(i,n,l.percentage,l.y,l.name,l.color)}void 0===e.plotOptions&&(e.plotOptions={}),void 0===e.plotOptions[l]&&(e.plotOptions[l]={}),t.extend(e.plotOptions[l],{innerSize:"70%",point:{events:{mouseOver:function(){r.methods.drawCenter(this.series,this.series.chart,this.percentage,this.y,this.name,this.color)},select:function(){this.slice(!0),r.methods.drawCenter(this.series,this.series.chart,this.percentage,this.y,this.name,this.color)}}},events:{afterAnimate:function(){n({hcObj:this.chart,series:this})}}}),t.extend(e.chart,{events:{endResize:function(){n({hcObj:this,series:this.series[0]})}}}),r.types.pie.additionalProps(e,l)}},funnel:{label:"Funnel",value:"funnel",category:"pie",additionalProps:function(e){void 0!==e.plotOptions&&void 0!==e.plotOptions.funnel&&void 0!==e.plotOptions.funnel.dataLabels&&void 0!==e.plotOptions.funnel.dataLabels&&void 0!==e.plotOptions.funnel.dataLabels.enabled&&!0!==e.plotOptions.funnel.dataLabels.enabled||(e.chart.marginRight=100,void 0!==e.title&&(e.title.x=-45),void 0!==e.subtitle&&(e.subtitle.x=-45)),t.extend(!0,e,{plotOptions:{series:{neckWidth:"30%",neckHeight:"25%"}}}),r.types.pie.additionalProps(e,"funnel")}},pyramid:{label:"Pyramid",value:"pyramid",category:"pie",additionalProps:function(e){void 0!==e.plotOptions&&void 0!==e.plotOptions.pyramid&&void 0!==e.plotOptions.pyramid.dataLabels&&void 0!==e.plotOptions.pyramid.dataLabels&&void 0!==e.plotOptions.pyramid.dataLabels.enabled&&!0!==e.plotOptions.pyramid.dataLabels.enabled||(e.chart.marginRight=100,void 0!==e.title&&(e.title.x=-45),void 0!==e.subtitle&&(e.subtitle.x=-45)),r.types.pie.additionalProps(e,"pyramid")}},scatter:{label:"Scatter",value:"scatter",category:"scatter",metadata:{hasMultiAxis:!0,hasDataAxes:!0,hasXY:!0,hasSize:!0,hasLegend:!0}},bubble:{label:"Bubble",value:"bubble",category:"scatter"}},t.each(r.types,function(){this.metadata||(this.metadata=r.types[this.category].metadata)}),d.methods={formatDataLabels:function(e,a){if("sk-off"===a.format?e.plotOptions.map.dataLabels.enabled=!1:a.format&&(e.plotOptions.map.dataLabels.formatter=function(){var e=this.point.name;return"sk-data-value"===a.format?e=this.point.value:this.point.properties&&this.point.properties[a.format]&&(e=this.point.properties[a.format]),e}),a.color||a.bold||a.strokeColor||a.strokeWidth){var l=!0===a.bold?"bold":"normal";t.extend(!0,e.plotOptions.map.dataLabels,{style:{fontWeight:l}}),t.extend(!0,e,{drilldown:{activeDataLabelStyle:{fontWeight:l}}}),a.color&&(e.plotOptions.map.dataLabels.style.color=a.color),(a.strokeColor||a.strokeWidth)&&(e.plotOptions.map.dataLabels.style.textShadow="0 0 "+(a.strokeWidth>=0?2*a.strokeWidth:"6")+"px contrast, 0 0 "+(a.strokeWidth>=0?a.strokeWidth:"3")+"px "+(a.strokeColor||"contrast"))}},formatRegions:function(e,t){t.color&&(e.plotOptions.map.borderColor=t.color),t.width&&(e.plotOptions.map.borderWidth=t.width),t.style&&(e.plotOptions.map.dashStyle=t.style)},formatLegend:function(e,a){if("off"===a.layout)e.legend={enabled:!1};else{var l={};a.layout&&(l.layout=a.layout),a.halign&&(l.align=a.halign),a.valign&&(l.verticalAlign=a.valign),a.backgroundcolor&&(l.backgroundColor=a.backgroundcolor),a.title&&(l.title={text:a.title}),t.isEmptyObject(l)||(e.legend=l)}}},d.defaultSettings={BACKGROUND_COLOR:"#9bc6cf",NULL_COLOR:"#eee",REGION_WIDTH:"0",LABEL_COLOR:"black",STROKE_WIDTH:"0"}}(skuid)},91:function(e,t,a){"use strict";a.r(t);a(90)}});