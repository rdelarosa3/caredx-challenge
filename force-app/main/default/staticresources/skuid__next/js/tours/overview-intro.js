skuid.runtime.registerApi("v2","tours/overview-intro",function(e){var t=function(e){var t={};function o(n){if(t[n]){return t[n].exports}var s=t[n]={i:n,l:false,exports:{}};e[n].call(s.exports,s,s.exports,o);s.l=true;return s.exports}o.m=e;o.c=t;o.d=function(e,t,n){if(!o.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};o.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};o.t=function(e,t){if(t&1)e=o(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);o.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n};o.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};o.d(t,"a",t);return t};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="";return o(o.s=689)}({689:function(e,t,o){"use strict";o.r(t);var n=o(690);var s=o.n(n)},690:function(t,o){let n=e.tour.tourController;let s=n.Shepherd;let a=n.skuidElements;let l=n.buttonPatterns;const i=e.constants.LOCAL_STORAGE_KEYS.DEFAULT_DATA_SOURCE;const r=document.querySelector.bind(document);const c=document.querySelectorAll.bind(document);window.localStorage.removeItem(i);s.on("cancel",()=>{n.deletePageAndGoBack()});const d=()=>{if(n.Shepherd.activeTour){c(".sk-tr__element--disabled").forEach(e=>{n.enableElement(e)});n.Shepherd.activeTour.complete();e.events.publish("tour_complete_panel")}};const p={modifiers:{flip:{enabled:false},preventOverflow:{escapeWithReference:true}}};const u=new s.Tour({keyboardNavigation:false,confirmCancel:true,confirmCancelMessage:"You're about to exit the tour. If you do so, your work will be lost.",useModalOverlay:true,copyPasteEnabled:false,undoRedoEnabled:false,defaultStepOptions:{classes:"skuid-step",cancelIcon:{enabled:true,label:"Cancel tour"},when:{hide:()=>{let e=n.getCurrentStep().target;if(e){e.style.pointerEvents="auto"}}},tippyOptions:{flip:false}}});let h=[{id:"intro-step",title:"Getting Started with Skuid",text:"<p>Welcome!</p><p>This tour will walk you through the basic concepts of Skuid and the tools you'll need to build your first page.</p><p>We'll start by introducing the different parts of the App Composer, and then we'll create a list of accounts.</p>",classes:"intro-step skuid-step",buttons:l.GetStarted,attachTo:{on:"bottom"},tippyOptions:{maxWidth:500},when:{show:()=>{n.getCurrentStep().el.parentElement.parentElement.classList.add("intro-step")}}},{title:"The App Composer Workspace",text:"<p>First, let's get to know our workspace.</p><p>This is the <strong>App Elements Pane</strong>. Each of these tabs contains the elements, like components and models, that you'll need to add to your page to create a functioning application.</p>",classes:"skuid-step",buttons:l.Defaults,attachTo:{element:a.AppElementsPane,on:"right"},canClickTarget:false},{title:"The App Composer Workspace",text:"<p>This is the <strong>Properties Pane</strong>. After adding an element from the App Elements pane to your page, you'll come here to configure its properties. Right now, it’s displaying the properties for the page itself.</p><p> The properties here will change depending on what you have selected in the App Composer, and those properties determine how each element in the page behaves. You'll return here often as you build.</p>",classes:"skuid-step",buttons:l.Defaults,attachTo:{element:a.PropertiesPane,on:"left"},canClickTarget:false},{title:"The App Composer Workspace",text:"<p>This is the <strong>canvas</strong>. This area is where you'll add and modify your page's components.</p><p>It also displays a simplified preview of the page's layout. This lets you keep your user's experience in mind while tweaking the settings of your components.</p>",classes:"skuid-step",buttons:l.Defaults,attachTo:{element:a.Canvas,on:"top"},canClickTarget:false},{title:"Building a Page",text:"Now that we've seen the primary areas of the App Composer, let's build a page!",classes:"skuid-step",buttons:l.Defaults},{title:"Creating a Model",text:"First, we need data for our page, so let's create a <strong>model.</strong> Models connect to your data and bring it into your Skuid page.</p><p>Click the <strong>Models</strong> tab to get started.</p>",buttons:l.PreviousOnly,attachTo:{element:a.ModelsTab,on:"right"},advanceOn:{selector:a.ModelsTab,event:"click"}},{title:"Creating a Model",text:"<p>Excellent!</p><p>Now click the <strong>+ button</strong> to create a new model.</p>",classes:"skuid-step",buttons:l.PreviousOnly,modalOverlayOpeningPadding:5,beforeShowPromise:function e(){return new Promise(function(e){setTimeout(function(){e()},100)})},attachTo:{element:a.ModelAddModel,on:"bottom"},advanceOn:{selector:a.ModelAddModel,event:"click"},tippyOptions:{popperOptions:p}},{title:"Creating a Model",text:"<p>Our new model's name defaults to <em>NewModel</em>, but let's give it a better one. Some pages can have many models, so it's best to give them specific, descriptive, and unique names. </p><p>Let's name the model based on what we're building (an account list) and the object we're connecting to (Account).</p><p> Enter the name <strong>AccountList_Accounts</strong>.</p>",classes:"skuid-step",buttons:l.DisabledNextOnly,successState:()=>{n.disableElement(n.skuidElements.ModelModelId);n.enableDisableButton()},modalOverlayOpeningPadding:5,attachTo:{element:a.ModelModelId,on:"right"},when:{show:()=>{let e=c(".nx-pagebuilder-property-item");let t=c(".nx-pagebuilder-toolbarpanel-propgroup");e.forEach(e=>{n.disableElement(e)});t.forEach(e=>{n.disableElement(e)});n.enableElement("#model-sobject");n.watchModel("properties",{modelId:"AccountList_Accounts",values:{id:"AccountList_Accounts"},callback:()=>{r(n.skuidElements.ModelModelId).blur()}})}}},{title:"Connecting Models to Objects",text:"<p>With the model's name set, it's time to <strong>connect it to an object.</strong>  Once connected, models can search, access, and modify the records within an object. (But don't worry: Skuid always respects your system's security model.)</p>",classes:"skuid-step",buttons:l.NextOnly},{title:"Connecting Models to Objects",text:"<p>To select an object, click the object property and start typing the object's name. After typing a few characters, a dropdown of options matching what you've entered will appear.</p <p>We’re building an account list, so let's connect to the <strong>Account</strong> object.</p>",classes:"skuid-step",buttons:l.DisabledNextOnly,successState:()=>{n.disableElement(a.ModelObjectSelector);n.getCurrentStep().el.focus();setTimeout(()=>{n.enableDisableButton()},900)},attachTo:{element:a.ModelObjectSelector,on:"right"},when:{show:()=>{n.hideOverlay();n.disableElement(a.ModelAddModel);n.disableElement(a.Canvas);n.disableElement(a.AppElementsPane);n.disableElement('[data-prop-id="id"]');n.disableElement('[data-prop-id="datasourcetype"]');n.watchModel("properties",{modelId:"AccountList_Accounts",values:{sobject:"Account"}})},hide:()=>{n.enableElement(a.Canvas);n.enableElement(a.AppElementsPane)}}},{title:"Adding Fields to Models",text:"<p>Now that our model is connected to the Account object, <strong>it can access the object’s fields.</strong> We can pick and choose which fields to add to the model. Because of this, we show just the data we want the user to see.</p><p>Click the <strong>Fields</strong> label to begin.</p>",classes:"skuid-step",attachTo:{element:a.ModelFieldsLabel,on:"right"},advanceOn:{selector:a.ModelFieldsLabel,event:"click"},canClickTarget:true,tippyOptions:{popperOptions:p}},{title:"Adding Fields to Models",text:"<p>Here we see every available field on the Account object.</p><p>We only need a few fields for our account list. Find the following and add them to the model by clicking their checkbox:</p><ul><li>Account ID</li><li>Account Name</li><li>Created Date</li><li>Industry</li><li>Owner ID</li></ul>",classes:"skuid-step",buttons:l.DisabledNextOnly,successState:()=>{let e=n.getCurrentStep().options.validateValues.value;e.forEach(e=>{n.disableElement('tr[data-field="'+e+'"] label')});n.enableDisableButton()},attachTo:{element:a.PropertiesPane,on:"left"},canClickTarget:true,validateValues:{type:"fields",operator:"contains",value:["CreatedDate","Id","Industry","Name","Owner.Name","OwnerId"]},when:{show:()=>{let e=n.getCurrentStep().options.validateValues.value;n.watchModel("fields",{modelId:"AccountList_Accounts",values:e})}}},{title:"Adding Components to the Canvas",text:"<p>Your page can access data now, but it's still blank because it has no components. Let's add a Table component to display our model data.</p><p>Click the <strong>Components</strong> tab.</p>",classes:"skuid-step",attachTo:{element:a.ComponentsTab,on:"bottom"},advanceOn:{selector:a.ComponentsTab,event:"click"}},{title:"Adding Components to the Canvas",text:"<p>Search for <strong>Table</strong> in the search bar at the top of the App Elements pane.</p><p>When you see the Table component in the list, drag and drop it into the canvas. The canvas's dropzone will highlight when you hover over it with a component.</p>",classes:"skuid-step",buttons:l.PreviousOnly,attachTo:{element:a.AppElementsPane,on:"right"},successState:()=>{n.goToNextStep()},when:{show:()=>{n.hideOverlay();c(".nx-pagebuilder-componenttag").forEach(e=>{if(e.querySelector(".nx-pagebuilder-tag-text").innerText!="Table"){n.disableElement(e)}});const e=[a.ModelsTab,a.IndexTab,a.ActionSequencesTab,a.JavaScriptTab];e.forEach(e=>{n.disableElement(e)});n.watchCanvas("skuid__table")}}},{title:"Connecting Components to Models",text:"<p>You’ve added a Table to your page! Nice! But notice that the Table is empty? That's because we haven't added fields <em>to the component</em> yet.</p><p>Even though our Table automatically connected to the accounts model, it must be configured to display the fields the model is retrieving for us.</p>",classes:"skuid-step",buttons:l.NextOnly,attachTo:{on:"top"}},{title:"Adding Fields to the Table",text:"<p>To add your model fields to your component, click the Table's <strong>Add Field(s)</strong> button.</p>",classes:"skuid-step",modalOverlayOpeningPadding:5,attachTo:{element:a.TableAddFields,on:"left"},when:{show:()=>{n.scrollToTop();n.waitForMenuItem("Model Fields",["attachTo","advanceOn"])}},successState:()=>{n.goToNextStep()}},{title:"Adding Fields to the Table",text:"<p>Now click <strong>Model Fields</strong>.</p>",classes:"skuid-step",buttons:l.PreviousOnly,attachTo:{on:"left"},advanceOn:{event:"click"},when:{show:()=>{const t=n.getCurrentStep().target.closest("[data-te='skuid__menu']").id;const o=e.$C(t);const s=o.subscribeChange("show",e=>{if(e==false){o.unsubscribe(s);if(r(a.TableFieldSelector)){n.triggerStepSuccess()}else{n.goToPreviousStep()}}})}},successState:()=>{n.goToNextStep()},tippyOptions:{popperOptions:p}},{title:"Adding Fields to the Table",text:"<p>We're almost there!</p><p>Now select the fields you wish to display in your component. You can include some, or all, of the fields within the model. </p><p>Click the <strong>Apply button</strong> when you're done.</p>",classes:"skuid-step",attachTo:{element:a.TableFieldSelector,on:"bottom"},advanceOn:{selector:"#apply",event:"click"},when:{show:()=>{n.disableElement("button#cancel");n.disableElement(".ui-dialog-titlebar-close");n.disableElement(".ui-icon-closethick");setTimeout(()=>{c(".sk-bi-follow-ref").forEach(e=>{n.disableElement(e)})},200)}}},{title:"Saving and Previewing Your Page",text:"<p>Be sure to save your work often by clicking the Save button.</p><p>Once you've saved your work, any changes you've made will be reflected when you preview the page. You'll also immediately see those changes anywhere the page is deployed within your org.</p><p>So let's wrap this up. Click <strong>Save</strong>.</p>",classes:"skuid-step",modalOverlayOpeningPadding:5,attachTo:{element:a.SaveButton,on:"left"},successState:()=>{n.goToNextStep()},when:{show:()=>{e.events.subscribeOnce("builder.page.saved",()=>{n.changePageNameToTourComplete()})}}},{id:"final-step",title:"Saving and Previewing Your Page",text:"<p>And with that, you've created your first page! </p><p>Want to see what your page looks like to end users? Click <strong>Preview</strong> to view it in a new tab. </p><p>Once you've seen your page, <strong>complete your tour and see more resources by returning to this tab.</strong></p>",classes:"skuid-step",buttons:[{classes:"skuid-step cta-button",text:"Finish!",action:()=>{d()}}],modalOverlayOpeningPadding:5,attachTo:{element:a.PreviewButton,on:"left"},when:{show:()=>{e.events.subscribeOnce("builder.page.previewed",()=>{d()})}}}];u.addSteps(h);u.steps.forEach(e=>{n.setStepIndex(e);n.setStepId(e)});u.steps.forEach(e=>{e.on("show",()=>{n.createProgressIndicator(e)})});let g=e.model.getModel("page");if(g.getFirstRow().name){if(g.getFirstRow().name.search("Complete")<0){u.start()}}if(g.getFirstRow().Name){if(g.getFirstRow().Name.search("Complete")<0){u.start()}}}});return t});