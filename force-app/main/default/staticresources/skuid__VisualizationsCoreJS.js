"use strict";!function(a){var b=a.$,c=a.utils,d=c.makeXMLDoc,e=a.ui.getRenderer,f=a.visualizations={},g=f.core={},h=f.chart={},i=f.map={};if(g.AGG_FUNCTIONS={avg:{label:"Average",abbreviation:"AVG",value:"avg"},sum:{label:"Sum",abbreviation:"SUM",value:"sum"},max:{label:"Max",abbreviation:"MAX",value:"max"},min:{label:"Min",abbreviation:"MIN",value:"min"},count:{label:"Count",abbreviation:"COUNT",value:"count"}},g.DATE_GRANULARITIES={none:{label:"None",value:"none"},day:{label:"Day",value:"day",dayInterval:1},calweek:{label:"Calendar Week",value:"calweek",dayInterval:7},calmonth:{label:"Calendar Month",value:"calmonth",monthInterval:1},calquarter:{label:"Calendar Quarter",value:"calquarter",monthInterval:3},calyear:{label:"Calendar Year",value:"calyear",yearInterval:1}},g.getColorsArray=function(a){var c=[],d=a.children("value");return d.length&&b.each(d,function(){var a=b(this);c.push(a.text())}),c},g.parseNodetoObj=function(a){var c={};return b.each(a.get(0).attributes,function(){this.value&&(c[this.name]=this.value)}),c},a.builder){var j=a.builder,k=j.core,l=j.mobile;g.getModelFieldsOptions=function(a,c){var d=k.getModelFromModelName(a),e=d.children("fields,groupby").children(),f=[];return!0===(c||{}).includeNone&&f.push({label:"-- None --",value:""}),e&&b.each(e,function(){var a=b(this),c=a.attr("id"),d=a.attr("name");f.push({label:d||c,value:d||c,fieldId:c})}),f},g.getHeightTree=function(a){var b=a.component;return{label:"Height",deleteable:!1,linkedComponent:b,summaryFunction:function(b){return b.attr("height")||a.defaultSummary||"-- Default --"},propsFunction:function(c){return[{id:"height",type:"csssize",label:a.label||"Height",onChange:function(){c.refresh(),b.refresh()}}]}}},g.getLegendTree=function(a){var b=a.component,c=a.metadata||{};return{label:"Legend",deleteable:!1,linkedComponent:b,state:b.state.children("legend:first"),defaultStateFunction:function(){return d(a.defaultState||'<legend layout="horizontal" halign="center" valign="bottom"/>')},summaryFunction:function(b){function c(a){return a.charAt(0).toUpperCase()+a.slice(1)}var d=a.defaultSummary||"-- Default --",e=b.attr("layout")||"(default)",f=b.attr("halign")||"(default)",g=b.attr("valign")||"(default)",h="";return e&&(h=c(e),(f||g)&&"off"!==e&&(h+=" | ")),"off"!==e&&(f&&(h+=c(f),g&&(h+=" | ")),g&&(h+=c(g))),""!==h&&h||d},propsFunction:function(d){var e=function(){d.refresh(),b.refresh()},f=[{id:"layout",type:"picklist",label:"Layout",helptext:"The layout of the legend items.",picklistEntries:[{label:a.defaultSummary||"-- Default --",value:""},{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"},{label:"Off",value:"off"}],onChange:function(a){var b=d.state,c=b.attr("halign"),f=b.attr("valign");"horizontal"===a?("center"!==c&&k.updateState(b,{key:"halign",value:"center"}),"top"!==f&&"bottom"!==f&&k.updateState(b,{key:"valign",value:"bottom"})):"vertical"===a&&"left"!==c&&"right"!==c&&k.updateState(b,{key:"halign",value:"left"}),d.rebuildProps(),e()}}];return"off"!==d.state.attr("layout")&&f.push({id:"halign",type:"picklist",label:"Horizontal Alignment",helptext:"The horizontal alignment of the legend box",picklistEntries:[{label:a.defaultSummary||"-- Default --",value:""},{label:"Center",value:"center"},{label:"Left",value:"left"},{label:"Right",value:"right"}],onChange:function(a){var b=d.state,c=b.attr("layout"),f=b.attr("valign");"left"!==a&&"right"!==a||"vertical"===c?"center"===a&&("horizontal"!==c&&k.updateState(b,{key:"layout",value:"horizontal"}),"top"!==f&&"bottom"!==f&&k.updateState(b,{key:"valign",value:"bottom"})):k.updateState(b,{key:"layout",value:"vertical"}),d.rebuildProps(),e()}},{id:"valign",type:"picklist",label:"Vertical Alignment",helptext:"The vertical alignment of the legend box.",picklistEntries:[{label:a.defaultSummary||"-- Default --",value:""},{label:"Bottom",value:"bottom"},{label:"Middle",value:"middle"},{label:"Top",value:"top"}],onChange:function(a){var b=d.state,c=b.attr("layout"),f=b.attr("halign");if("middle"===a){var g=!1;"center"===f&&(k.updateState(b,{key:"halign",value:"left"}),g=!0),"horizontal"!==c&&!0!==g||k.updateState(b,{key:"layout",value:"vertical"})}d.rebuildProps(),e()}}),c.hasDataLabels&&f.push({id:"showlabels",type:"picklist",label:"Display Data Labels",location:"attribute",picklistEntries:[{label:a.defaultSummary||"-- Default --",value:""},{label:"On",value:"true"},{label:"Off",value:"false"}],onChange:e}),f}}},g.getBordersTree=function(c){var d=c.component;return{id:"borders",label:"Borders",deleteable:!1,linkedComponent:d,summaryFunction:function(a){var d=b("<span>").text(c.defaultSummary||"-- Default --"),e="",f=a.attr("bordercolor"),h=a.attr("borderwidth"),i=a.attr("borderstyle");return h&&(e=h),i&&(""!==e&&(e+=" | "),e+=i),""!==e&&d.html(e),f&&d.prepend(g.getColorPreview(f)),d},propsFunction:function(b){function c(){d.refresh(),b.refresh()}return[{type:"helptext",html:"Options for styling the border around the Chart"},{id:"bordercolor",label:"Color",type:"string",onChange:function(a){c()}},{id:"borderwidth",label:"Width",type:"string",validator:a.builder.core.validators.numericOnly,onChange:function(a){c()}},{id:"borderradius",label:"Radius",type:"string",validator:a.builder.core.validators.numericOnly,onChange:function(a){c()}}]}}},g.getColorPreview=function(a){return b("<div>").css({display:"inline-block",height:"12px",width:"12px",border:"1px solid black",background:a,"vertical-align":"middle","margin-right":"8px"})},g.buildColorGenerator=function(c,d){var f,g=c.state,h=g.children("colors"),i=b("<div>").addClass("sk-icon sk-bi-color-picker").css({position:"absolute",top:"1px",right:"4px"}).skootip("Generate Colors");return d=b.extend({colorCount:14},d),i.click(function(){if(f)f.dialog("open");else{f=b("<div>");var g=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange"],i={red:{label:"Red",50:"#fde0dc",100:"#f9bdbb",200:"#f69988",300:"#f36c60",400:"#e84e40",500:"#e51c23",600:"#dd191d",700:"#d01716",800:"#c41411",900:"#b0120a",a100:"#ff7997",a200:"#ff5177",a400:"#ff2d6f",a700:"#e00032"},pink:{label:"Pink",50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{label:"Purple",50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{label:"Deep Purple",50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{label:"Indigo",50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{label:"Blue",50:"#e7e9fd",100:"#d0d9ff",200:"#afbfff",300:"#91a7ff",400:"#738ffe",500:"#5677fc",600:"#4e6cef",700:"#455ede",800:"#3b50ce",900:"#2a36b1",a100:"#a6baff",a200:"#6889ff",a400:"#4d73ff",a700:"#4d69ff"},lightBlue:{label:"Light Blue",50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{label:"Cyan",50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{label:"Teal",50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{label:"Green",50:"#d0f8ce",100:"#a3e9a4",200:"#72d572",300:"#42bd41",400:"#2baf2b",500:"#259b24",600:"#0a8f08",700:"#0a7e07",800:"#056f00",900:"#0d5302",a100:"#a2f78d",a200:"#5af158",a400:"#14e715",a700:"#12c700"},lightGreen:{label:"Light Green",50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{label:"Lime",50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{label:"Yellow",50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{label:"Amber",50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{label:"Orange",50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{label:"Deep Orange",50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{label:"Brown",50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{label:"Grey",50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#ffffff"},blueGrey:{label:"Blue Grey",50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"}},j="indigo",k=d.variance||"3",l=e("PICKLIST").edit({required:!0,value:j,entries:g.map(function(a){return{value:a,label:i[a].label}}),onChange:function(a){j=a,q()}}),m=e("PICKLIST").edit({required:!0,value:k,entries:[{value:"0",label:"Monochromatic"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"Full Spectrum"}],onChange:function(a){k=a,q()}}),n=b("<div>"),o=function(a,c,e,f){var h=b.inArray(a,g);if(-1===h)return!1;c=c||0,e=e||0,f=f||2;for(var j,k=[],l=0;l<d.colorCount;l++){j=l*e;var m=100*(j%7+f);m>900&&(m=900);var n=(h+(l%(c+1)-Math.floor(c/2))+g.length)%g.length,o=g[n];k.push(i[o][m])}return k},p=function(){return o(j,parseInt(k,10),1)},q=function(){n.empty().append(r(p()))},r=function(a){var c=b("<div>");return b.each(a,function(){var a=b("<div>").css({display:"inline-block",width:"18px",height:"18px",margin:"2px"}).prop("title",this).css("background-color",this);c.append(a)}),c};q(),f.append(l),d.variance||f.append(m),f.append(n),f.dialog({width:400,height:200,title:"Generate a color swatch",resizable:!0,modal:!0,buttons:[{text:"Apply",click:function(){h.empty(),b.each(p(),function(){var b=a.utils.makeXMLDoc("<value>"+this+"</value>");h.append(b)}),c.save().refresh().rebuildProps(),f.dialog("close")}},{text:"Cancel",click:function(){f.dialog("close")}}]})}}),i},g.getAdvancedProps=function(a){var b=a.component,c=b.builder&&b.builder.name||"Chart";return{name:"Advanced",props:[k.coreProps.uniqueIdProp({component:b}),k.coreProps.cssClassProp(),{id:"rendersnippet",label:"Before Render Snippet",type:"snippet",helptext:"This snippet is run immediately before the "+c+" is drawn. Use this to set advanced options not available in the Page Composer. The Snippet gets handed the "+c+" config object as its only argument."},{id:"export",label:"Exporting",type:"picklist",picklistEntries:[{label:"-- "+c+" default --",value:""},{label:"Server-side",value:"server"},{label:"Client-side",value:"client"},{label:"Disabled",value:"off"}],onChange:function(){b.refresh()}}]}},g.getSeriesOnClickActionsTree=function(c){var e=c.seriesComponent,f=c.component,g=f.builder&&f.builder.id,h=c.seriesObj,i=k.getBuilder(g).actionTypes.series(f);return[k.getActionTreeNode({linkedComponent:f,useModelName:e.state.attr("modelId")||f.state.attr("model"),additionalActionOptions:i,treeNode:{invisibleParent:"actions",invisibleParentLabel:"On Click Actions",indent:(h.indent||0)+1,addtooltip:"Add On Click Action",deletetooltip:"Remove On Click Action",defaultStateFunction:function(){var c=b.grep(i,function(a){return"drilldown"===a.value}).length>0,f=b.grep(i,function(a){return"mapDrillIn"===a.value}).length>0,g=i&&i.length>0&&e.state.children("actions").children('action[type="drilldown"],action[type="mapDrillIn"]').length>0,h=a.mobile?"setPopupPanel":"showPopup",j=d('<action type="closeAllPopups"/>');return!0===g?j.attr("type",h):!0===c?j.attr("type","drilldown"):!0===f&&j.attr("type","mapDrillIn"),!1===g&&k.getDefaultConditions({state:j,isMultiRow:!0}),j}}})]},g.getSeriesActions=function(a,c){c=c||{};var e=c.indent||2,f=[],g=a.chartSet,h=g&&g.charts;return h&&h.length&&f.push({value:"drilldown",label:"Drilldown",propsFunction:function(){return[{id:"chartid",type:"picklist",label:"Drilldown Chart",picklistEntries:b.map(h,function(c,d){var e=b(c.state).attr("uniqueid");if(e!==a.state.attr("uniqueid"))return{label:"Chart "+(d+1),value:e}})}]},childrenFunction:function(){return[{invisibleParent:"conditions",invisibleParentLabel:"Context Conditions",indent:e,icon:"sk-bi-condition",addicon:"sk-bi-condition",addtooltip:"Add Context Condition",deletetooltip:"Remove Context Condition",propsFunction:function(b){var c=[],d=b.state.closest("series"),e=d.attr("modelId")||a.state.attr("model"),f=b.state.closest("action"),h=g.getChartByID(f.attr("chartid")),i=h&&h.state.attr("model");return c.push({id:"field",type:"field",label:"Field",helptext:"The field on the drilldown Chart's Model that will be checked against a field on the row in context.",modelname:i},{id:"mergefield",type:"field",label:"Merge Field",helptext:"The field on the row in context that will be checked against a field on this Series's Model.",modelname:e},k.getConditionOperatorPropObj(b,{fieldMetadata:k.getMetadataForField(b,{modelName:i})})),c},labelFunction:function(a){return(a.attr("field")||"Id")+" of record(s) "+k.operatormap[a.attr("operator")||""].name+" "+(a.attr("mergefield")||"Id")+" of rows in context."},defaultStateFunction:function(){return d('<condition type="contextrows" field="Id" mergefield="Id" operator="in" autocreated="true"/>')}}]}}),f},g.makeChartSet=function(a,b){var c=a.state,d=c.clone(),e=k.getBuilder("skuidvis__chartset").getDefaultState();return e.children("charts").first().append(d,k.getBuilder(b).getDefaultState(undefined,{setUniqueId:!0})),c.replaceWith(e),e},g.addDrilldownActionGroup=function(a){var b=function(b,c,d){return{text:b,icon:c,action:function(){var b=g.makeChartSet(a,d),c=k.componentFactoryWithCache(b,k.getBuilder("skuidvis__chartset"),{makeDraggable:!0,isGlobalComponent:!0});a.element.replaceWith(c.element),c.select(),c.charts.map(function(a){a.reflow()}),a.remove()}}};a.addActionGroup([b("Chart","sk-bi-fields-agg","skuidvis__chart"),b("Geochart","sk-icon-world","skuidvis__geochart")],"Add Drilldown","sk-icon-add")},g.getMobileActionsList=function(b){var c=function(c,d){return new l.PropertyItem({type:"customaction",label:c,customAction:function(){var c=g.makeChartSet(b,d),e=new l.Component(c).render();b.element.replaceWith(e.element),e.select(),b.remove(),a.events.publish("skuidBuilderSave"),a.events.publish("skuid.chart.reflow",[{component:b}]),a.mobile.processResponsiveArea(e.element)}})};return[c("Add Drilldown Chart","skuidvis__chart"),c("Add Drilldown Geochart","skuidvis__geochart")]}}g.methods={formatBorders:function(a,b){a.chart||(a.chart={}),b.color&&(a.chart.borderColor=b.color),b.width&&(a.chart.borderWidth=b.width),b.radius&&(a.chart.borderRadius=b.radius)}},h.methods={drawCenter:function(b,c,d,e,f,g){var h=c.plotWidth/2,i=c.plotHeight/2,j=b.group.element.getBBox(),k=Math.max(j.height/6,12),l=Math.max(j.height/24,10);c.innerText||(c.innerText=c.renderer.text("",h,i).css("text-anchor","middle").addClass("sk-chart-innertext").add()),g&&c.innerText.attr({text:'<span style="font-size:'+k+"px;color:"+g+'" class="sk-chart-innertext-title">'+Highcharts.numberFormat(d,0)+'%</span><br><span style="font-size:'+l+"px;color:"+g+'">'+Highcharts.numberFormat(e)+'</span><br><span style="font-size:'+l+"px;color:"+g+'">'+a.utils.decodeHTML(f)+"</span>"}),c.innerText.attr({x:h,y:i,transform:"translate("+b.group.translateX+","+b.group.translateY+")",style:"text-anchor: middle;","class":"sk-chart-innertext"})}},h.types={line:{label:"Line",value:"line",category:"line",metadata:{hasDataAxes:!0,hasCategories:!0,hasLegend:!0,hasMultiAxis:!0,isStackable:!0}},spline:{label:"Spline",value:"spline",category:"line"},area:{label:"Area",value:"area",category:"line"},areaspline:{label:"Area Spline",value:"areaspline",category:"line"},column:{label:"Column",value:"column",category:"line"},bar:{label:"Bar",value:"bar",category:"line"},pie:{label:"Pie",value:"pie",category:"pie",metadata:{hasLegend:!0,hasDataLabels:!0},additionalProps:function(a,c){c===undefined&&(c="pie"),a.plotOptions===undefined&&(a.plotOptions={}),a.plotOptions[c]===undefined&&(a.plotOptions[c]={}),b.extend(!0,a.plotOptions[c],{tooltip:{headerFormat:"",pointFormat:"{point.name}: <b>{point.y}</b><br/>"}})}},donut:{label:"Donut",value:"donut",category:"pie",hcType:"pie",additionalProps:function(a){function d(a){var d,e=a.hcObj,f=a.series;b.each(f.data,function(){(!d||this.y>d.y)&&(d=this)}),c.isUndefined(d)||h.methods.drawCenter(f,e,d.percentage,d.y,d.name,d.color)}var e=h.types.donut.hcType;a.plotOptions===undefined&&(a.plotOptions={}),a.plotOptions[e]===undefined&&(a.plotOptions[e]={}),b.extend(a.plotOptions[e],{innerSize:"70%",point:{events:{mouseOver:function(){h.methods.drawCenter(this.series,this.series.chart,this.percentage,this.y,this.name,this.color)},select:function(){this.slice(!0),h.methods.drawCenter(this.series,this.series.chart,this.percentage,this.y,this.name,this.color)}}},events:{afterAnimate:function(){d({hcObj:this.chart,series:this})}}}),b.extend(a.chart,{events:{endResize:function(){d({hcObj:this,series:this.series[0]})}}}),h.types.pie.additionalProps(a,e)}},funnel:{label:"Funnel",value:"funnel",category:"pie",additionalProps:function(a){a.plotOptions!==undefined&&a.plotOptions.funnel!==undefined&&a.plotOptions.funnel.dataLabels!==undefined&&a.plotOptions.funnel.dataLabels!==undefined&&a.plotOptions.funnel.dataLabels.enabled!==undefined&&!0!==a.plotOptions.funnel.dataLabels.enabled||(a.chart.marginRight=100,a.title!==undefined&&(a.title.x=-45),a.subtitle!==undefined&&(a.subtitle.x=-45)),b.extend(!0,a,{plotOptions:{series:{neckWidth:"30%",neckHeight:"25%"}}}),h.types.pie.additionalProps(a,"funnel")}},pyramid:{label:"Pyramid",value:"pyramid",category:"pie",additionalProps:function(a){a.plotOptions!==undefined&&a.plotOptions.pyramid!==undefined&&a.plotOptions.pyramid.dataLabels!==undefined&&a.plotOptions.pyramid.dataLabels!==undefined&&a.plotOptions.pyramid.dataLabels.enabled!==undefined&&!0!==a.plotOptions.pyramid.dataLabels.enabled||(a.chart.marginRight=100,a.title!==undefined&&(a.title.x=-45),a.subtitle!==undefined&&(a.subtitle.x=-45)),h.types.pie.additionalProps(a,"pyramid")}},scatter:{label:"Scatter",value:"scatter",category:"scatter",metadata:{hasMultiAxis:!0,hasDataAxes:!0,hasXY:!0,hasSize:!0,hasLegend:!0}},bubble:{label:"Bubble",value:"bubble",category:"scatter"}},b.each(h.types,function(){this.metadata||(this.metadata=h.types[this.category].metadata)}),i.methods={formatDataLabels:function(a,c){if("sk-off"===c.format?a.plotOptions.map.dataLabels.enabled=!1:c.format&&(a.plotOptions.map.dataLabels.formatter=function(){var a=this.point.name;return"sk-data-value"===c.format?a=this.point.value:this.point.properties&&this.point.properties[c.format]&&(a=this.point.properties[c.format]),a}),c.color||c.bold||c.strokeColor||c.strokeWidth){var d=!0===c.bold?"bold":"normal";b.extend(!0,a.plotOptions.map.dataLabels,{style:{fontWeight:d}}),b.extend(!0,a,{drilldown:{activeDataLabelStyle:{fontWeight:d}}}),c.color&&(a.plotOptions.map.dataLabels.style.color=c.color),(c.strokeColor||c.strokeWidth)&&(a.plotOptions.map.dataLabels.style.textShadow="0 0 "+(c.strokeWidth>=0?2*c.strokeWidth:"6")+"px contrast, 0 0 "+(c.strokeWidth>=0?c.strokeWidth:"3")+"px "+(c.strokeColor||"contrast"))}},formatRegions:function(a,b){b.color&&(a.plotOptions.map.borderColor=b.color),b.width&&(a.plotOptions.map.borderWidth=b.width),b.style&&(a.plotOptions.map.dashStyle=b.style)},formatLegend:function(a,c){if("off"===c.layout)a.legend={enabled:!1};else{var d={};c.layout&&(d.layout=c.layout),c.halign&&(d.align=c.halign),c.valign&&(d.verticalAlign=c.valign),c.backgroundcolor&&(d.backgroundColor=c.backgroundcolor),c.title&&(d.title={text:c.title}),b.isEmptyObject(d)||(a.legend=d)}}},i.defaultSettings={BACKGROUND_COLOR:"#9bc6cf",NULL_COLOR:"#eee",REGION_WIDTH:"0",LABEL_COLOR:"black",STROKE_WIDTH:"0"}}(skuid);