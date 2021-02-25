"use strict";
// ExternalJS

// Define the skuid object if it is not defined yet,
// and wrap all subsequent code in an if statement that only gets run
// if skuid has not been defined yet
window.skuid || (window.skuid = {});

// Define a namespace for third-party libraries that don't have to be on the window
skuid.lib || (skuid.lib = {});

// If we have not run our ExternalJS code yet, then proceed
if (!skuid.$) {

// Wrap all subsequent code in closure 
(function(skuid,jQuery){

	// Mustache JS 0.8.0
	// Modified slightly by bhubbard. Instead of sending in "this" into the closure, I send in window, so use strict works.
	!function(a,b){if("object"==typeof exports&&exports)b(exports);else{var c={};b(c),"function"==typeof define&&define.amd?define(c):a.Mustache=c}}(window,function(a){function i(a,b){return h.call(a,b)}function j(a){return!i(d,a)}function m(a){return"function"==typeof a}function n(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function p(a){return String(a).replace(/[&<>"'\/]/g,function(a){return o[a]})}function q(a){if(!l(a)||2!==a.length)throw new Error("Invalid tags: "+a);return[new RegExp(n(a[0])+"\\s*"),new RegExp("\\s*"+n(a[1]))]}function r(d,h){function v(){if(p&&!r)for(;o.length;)delete m[o.pop()];else o=[];p=!1,r=!1}h=h||a.tags,d=d||"","string"==typeof h&&(h=h.split(c));for(var w,x,y,z,A,B,i=q(h),k=new u(d),l=[],m=[],o=[],p=!1,r=!1;!k.eos();){if(w=k.pos,y=k.scanUntil(i[0]))for(var C=0,D=y.length;D>C;++C)z=y.charAt(C),j(z)?o.push(m.length):r=!0,m.push(["text",z,w,w+1]),w+=1,"\n"===z&&v();if(!k.scan(i[0]))break;if(p=!0,x=k.scan(g)||"name",k.scan(b),"="===x?(y=k.scanUntil(e),k.scan(e),k.scanUntil(i[1])):"{"===x?(y=k.scanUntil(new RegExp("\\s*"+n("}"+h[1]))),k.scan(f),k.scanUntil(i[1]),x="&"):y=k.scanUntil(i[1]),!k.scan(i[1]))throw new Error("Unclosed tag at "+k.pos);if(A=[x,y,w,k.pos],m.push(A),"#"===x||"^"===x)l.push(A);else if("/"===x){if(B=l.pop(),!B)throw new Error('Unopened section "'+y+'" at '+w);if(B[1]!==y)throw new Error('Unclosed section "'+B[1]+'" at '+w)}else"name"===x||"{"===x||"&"===x?r=!0:"="===x&&(i=q(h=y.split(c)))}if(B=l.pop())throw new Error('Unclosed section "'+B[1]+'" at '+k.pos);return t(s(m))}function s(a){for(var c,d,b=[],e=0,f=a.length;f>e;++e)c=a[e],c&&("text"===c[0]&&d&&"text"===d[0]?(d[1]+=c[1],d[3]=c[3]):(b.push(c),d=c));return b}function t(a){for(var e,f,b=[],c=b,d=[],g=0,h=a.length;h>g;++g)switch(e=a[g],e[0]){case"#":case"^":c.push(e),d.push(e),c=e[4]=[];break;case"/":f=d.pop(),f[5]=e[2],c=d.length>0?d[d.length-1][4]:b;break;default:c.push(e)}return b}function u(a){this.string=a,this.tail=a,this.pos=0}function v(a,b){this.view=null==a?{}:a,this.cache={".":this.view},this.parent=b}function w(){this.cache={}}var b=/\s*/,c=/\s+/,d=/\S/,e=/\s*=/,f=/\s*\}/,g=/#|\^|\/|>|\{|&|=|!/,h=RegExp.prototype.test,k=Object.prototype.toString,l=Array.isArray||function(a){return"[object Array]"===k.call(a)},o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};u.prototype.eos=function(){return""===this.tail},u.prototype.scan=function(a){var b=this.tail.match(a);if(b&&0===b.index){var c=b[0];return this.tail=this.tail.substring(c.length),this.pos+=c.length,c}return""},u.prototype.scanUntil=function(a){var c,b=this.tail.search(a);switch(b){case-1:c=this.tail,this.tail="";break;case 0:c="";break;default:c=this.tail.substring(0,b),this.tail=this.tail.substring(b)}return this.pos+=c.length,c},v.prototype.push=function(a){return new v(a,this)},v.prototype.lookup=function(a){var b;if(a in this.cache)b=this.cache[a];else{for(var c=this;c;){if(a.indexOf(".")>0){b=c.view;for(var d=a.split("."),e=0;null!=b&&e<d.length;)b=b[d[e++]]}else b=c.view[a];if(null!=b)break;c=c.parent}this.cache[a]=b}return m(b)&&(b=b.call(this.view)),b},w.prototype.clearCache=function(){this.cache={}},w.prototype.parse=function(a,b){var c=this.cache,d=c[a];return null==d&&(d=c[a]=r(a,b)),d},w.prototype.render=function(a,b,c){var d=this.parse(a),e=b instanceof v?b:new v(b);return this.renderTokens(d,e,c,a)},w.prototype.renderTokens=function(b,c,d,e){function h(a){return g.render(a,c,d)}for(var i,j,f="",g=this,k=0,n=b.length;n>k;++k)switch(i=b[k],i[0]){case"#":if(j=c.lookup(i[1]),!j)continue;if(l(j))for(var o=0,p=j.length;p>o;++o)f+=this.renderTokens(i[4],c.push(j[o]),d,e);else if("object"==typeof j||"string"==typeof j)f+=this.renderTokens(i[4],c.push(j),d,e);else if(m(j)){if("string"!=typeof e)throw new Error("Cannot use higher-order sections without the original template");j=j.call(c.view,e.slice(i[3],i[5]),h),null!=j&&(f+=j)}else f+=this.renderTokens(i[4],c,d,e);break;case"^":j=c.lookup(i[1]),(!j||l(j)&&0===j.length)&&(f+=this.renderTokens(i[4],c,d,e));break;case">":if(!d)continue;j=this.parse(m(d)?d(i[1]):d[i[1]]),null!=j&&(f+=this.renderTokens(j,c,d,e));break;case"&":j=c.lookup(i[1]),null!=j&&(f+=j);break;case"name":j=c.lookup(i[1]),null!=j&&(f+=a.escape(j));break;case"text":f+=i[1]}return f},a.name="mustache.js",a.version="0.8.0",a.tags=["{{","}}"];var x=new w;a.clearCache=function(){return x.clearCache()},a.parse=function(a,b){return x.parse(a,b)},a.render=function(a,b,c){return x.render(a,b,c)},a.to_html=function(b,c,d,e){var f=a.render(b,c,d);return m(e)?(e(f),void 0):f},a.escape=p,a.Scanner=u,a.Context=v,a.Writer=w});

	/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
	* @license MIT */
	 // Modified slightly by bhubbard. Adding a custom id instead of just "nprogress"
	 var nProgressId = "sk-nprogress";
	!function(n,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():n.NProgress=e()}(window,function(){function n(n,e,t){return e>n?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,r){var i;return i="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},i.transition="all "+t+"ms "+r,i}function r(n,e){var t="string"==typeof n?n:s(n);return t.indexOf(" "+e+" ")>=0}function i(n,e){var t=s(n),i=t+e;r(t,e)||(n.className=i.substring(1))}function o(n,e){var t,i=s(n);r(n,e)&&(t=i.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function s(n){return(" "+(n&&n.className||"")+" ").replace(/\s+/gi," ")}function a(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var u={};u.version="0.2.0";var c=u.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};u.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},u.status=null,u.set=function(e){var r=u.isStarted();e=n(e,c.minimum,1),u.status=1===e?null:e;var i=u.render(!r),o=i.querySelector(c.barSelector),s=c.speed,a=c.easing;return i.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=u.getPositioningCSS()),f(o,t(e,s,a)),1===e?(f(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){f(i,{transition:"all "+s+"ms linear",opacity:0}),setTimeout(function(){u.remove(),n()},s)},s)):setTimeout(n,s)}),this},u.isStarted=function(){return"number"==typeof u.status},u.start=function(){u.status||u.set(0);var n=function(){setTimeout(function(){u.status&&(u.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},u.done=function(n){return n||u.status?u.inc(.3+.5*Math.random()).set(1):this},u.inc=function(e){var t=u.status;return t?t>1?void 0:("number"!=typeof e&&(e=t>=0&&.2>t?.1:t>=.2&&.5>t?.04:t>=.5&&.8>t?.02:t>=.8&&.99>t?.005:0),t=n(t+e,0,.994),u.set(t)):u.start()},u.trickle=function(){return u.inc()},function(){var n=0,e=0;u.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&u.start(),n++,e++,t.always(function(){e--,0===e?(n=0,u.done()):u.set((n-e)/n)}),this):this}}(),u.render=function(n){if(u.isRendered())return document.getElementById(nProgressId);i(document.documentElement,nProgressId+"-busy");var t=document.createElement("div");t.id=nProgressId,t.innerHTML=c.template;var r,o=t.querySelector(c.barSelector),s=n?"-100":e(u.status||0),l=document.querySelector(c.parent);return f(o,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),c.showSpinner||(r=t.querySelector(c.spinnerSelector),r&&a(r)),l!=document.body&&i(l,nProgressId+"-custom-parent"),l.appendChild(t),t},u.remove=function(){o(document.documentElement,nProgressId+"-busy"),o(document.querySelector(c.parent),nProgressId+"-custom-parent");var n=document.getElementById(nProgressId);n&&a(n)},u.isRendered=function(){return!!document.getElementById(nProgressId)},u.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),f=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,r=i.length,o=n.charAt(0).toUpperCase()+n.slice(1);r--;)if(t=i[r]+o,t in e)return t;return n}function t(t){return t=n(t),o[t]||(o[t]=e(t))}function r(n,e,r){e=t(e),n.style[e]=r}var i=["Webkit","O","Moz","ms"],o={};return function(n,e){var t,i,o=arguments;if(2==o.length)for(t in e)i=e[t],void 0!==i&&e.hasOwnProperty(t)&&r(n,t,i);else r(n,o[1],o[2])}}();return u});

	// Define the exports module as Skuid for CommonJS / Node-style module exporting
	// e.g. this will cause MustacheJS to create skuid.Mustache
	var exports = skuid,
		originalMustache = window.Mustache;
	
	// Ensure we have a reference to Skuid's version of jQuery
	// (and for backwards compatibility, define $j (face-palm))
	window.$j = exports.$ = exports.jQuery = jQuery.noConflict();
	
	// Add window mustache to our exports
	exports.Mustache = window.Mustache;
	exports.NProgress = window.NProgress;
	// Reassign original Mustache to window if it existed so as to avoid conflicts
	if (originalMustache) {
		window.Mustache = originalMustache;
		originalMustache = null;
	} else {
		delete window.Mustache;
		delete window.NProgress;
	}
	
	/**
	 * jQuery Hotkeys Plugin
	 * Copyright 2010, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 *
	 * Based upon the plugin by Tzury Bar Yochay:
	 * http://github.com/tzuryby/hotkeys
	 *
	 * Original idea by:
	 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
	*/

	/*
	 * One small change is: now keys are passed by object { keys: '...' }
	 * Might be useful, when you want to pass some other data to your handler
	 */

	// Modified by Zach McElrath
	// so that filterTextInputs is a per-binding setting, rather than global.

	// Modified by J. Tingle
	//	Removing support for "return" and "space" as hotkeys because they conflict with accessibility (SKUID-2116)

	(function(jQuery){

		jQuery.hotkeys = {
			version: "0.8",

			specialKeys: {
				8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
				20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
				37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=",
				96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
				104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",
				112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
				120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=",
				188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"
			},

			shiftNums: {
				"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
				"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
				".": ">",  "/": "?",  "\\": "|"
			},

			// excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
			textAcceptingInputTypes: [
			  "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
			  "datetime-local", "search", "color", "tel"
			]
		};

		function keyHandler( handleObj ) {
			if ( typeof handleObj.data === "string" ) {
			  handleObj.data = { keys: handleObj.data };
			}

			// Only care when a possible input has been specified
			if ( !handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string" ) {
				return;
			}
			
			var origHandler = handleObj.handler,
				keys = handleObj.data.keys.toLowerCase().split(" ");

			handleObj.handler = function( event ) {
			  // Don't fire in text-accepting inputs that we didn't directly bind to
			  // ZDM note: we never bind to text-accepting inputs, but we'll leave this in here just in case
			  if ( 
					(this !== event.target)
				 && handleObj.data.filterTextInputs 
				&& (
					// We are on an <input> element that's one of the text input types
					(jQuery.inArray(event.target.type, jQuery.hotkeys.textAcceptingInputTypes) > -1)
					// Or we are on a <textarea> or <select> element
					|| (/textarea|select/i.test( event.target.nodeName ))  
				) 
			  ) {
				  return;
			  }
		
				var special = jQuery.hotkeys.specialKeys[ event.keyCode ],
					character = String.fromCharCode( event.which ).toLowerCase(),
					modif = "", 
					possible = {};
		
			  jQuery.each([ "alt", "ctrl", "meta", "shift" ], function(index, specialKey) {
				  if (event[specialKey + 'Key'] && special !== specialKey) {
					  modif += specialKey + '+';
				  }
			  });
		
			  modif = modif.replace('alt+ctrl+meta+shift', 'hyper');
		
				if ( special ) {
					possible[ modif + special ] = true;
				}
				
				if ( character ) {
					possible[ modif + character ] = true;
					possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;
				
					// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
					if ( modif === "shift+" ) {
						possible[ jQuery.hotkeys.shiftNums[ character ] ] = true;
					}
				}
				
				for ( var i = 0, l = keys.length; i < l; i++ ) {
					if ( possible[ keys[i] ] ) {
						return origHandler.apply( this, arguments );
					}
				}
			};
		} // end function keyHandler

		jQuery.each([ "keydown", "keyup", "keypress" ], function() {
			jQuery.event.special[ this ] = { add: keyHandler };
		});

	})( jQuery );

	(function($){
		
		// ZDM 9/2/2014
		// Override to jQuery UI datepicker parseDate function
		// Source: https://github.com/zachelrath/jquery-ui/blob/master/ui/datepicker.js
		// Prior to jQuery 1.11.1,
		// if users entered two-digit years, the Datepicker would parse these to 4-digit years
		// according to the shortYearCutoff algorithm,
		// regardless of whether / not the supplied dateFormat included yy or y.
		// 
		// As of jQuery 1.11.1,
		//		(see this commit: https://github.com/jquery/jquery-ui/commit/573037423822fa04a1888e3bcc52243b9324c5e2
		//			and this ticket: http://bugs.jqueryui.com/ticket/8353 ),
		//	 	the behavior of parseDate was changed so that you can only enter two-digit years if your dateFormat is y.
			// This constitutes a major behavior change that our customers have complained about
		//			(see https://community.skuidify.com/skuid/topics/date-fields-requiring-4-characters-for-the-year),
		//	 	so we are reverting to the previous functionality.
		//		ZDM introduced a new "parseAnyYearFormat" property to the Datepicker widget,
		//			that ZDM should eventually submit as an issue / pull request to jQuery UI,
		//			but has not yet due to time constraints and priorities.
			// In this parseDate implementation here,
		//			we are just manually overriding Skuid's jQuery UI datepicker parseDate implementation
		//			as per the content of ZDM's github repo datepicker.js
		$.datepicker.parseDate = function (format, value, settings) {
			
			if (format == null || value == null) {
				throw "Invalid arguments";
			}

			value = (typeof value === "object" ? value.toString() : value + "");
			if (value === "") {
				return null;
			}

			var iFormat, dim, extra,
				iValue = 0,
				shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
					new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
				dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
				dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
				monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
				// ZDM our expected behavior is that this be TRUE all the time
				// This reproduces the jQuery UI <= 1.11.0 behavior,
				// where if users enter two-digit years, the Datepicker parses it to 4-digit
				// regardless of whether / not dateFormat includes yy or y
				parseAnyYearFormat = true,
				//parseAnyYearFormat = (settings ? settings.parseAnyYearFormat : null) || this._defaults.parseAnyYearFormat,
				year = -1,
				month = -1,
				day = -1,
				doy = -1,
				literal = false,
				date,
				// Check whether a format character is doubled
				lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				// Extract a number from the string value
				getNumber = function(match) {
					var isDoubled = lookAhead(match),
						size = (match === "@" ? 14 : (match === "!" ? 20 :
						(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
						minSize = (match === "y" && !parseAnyYearFormat ? size : 1),
						digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
						num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue;
					}
					iValue += num[0].length;
					return parseInt(num[0], 10);
				},
				// Extract a name from the string value and convert to an index
				getName = function(match, shortNames, longNames) {
					var index = -1,
						names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
							return [ [k, v] ];
						}).sort(function (a, b) {
							return -(a[1].length - b[1].length);
						});

					$.each(names, function (i, pair) {
						var name = pair[1];
						if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
							index = pair[0];
							iValue += name.length;
							return false;
						}
					});
					if (index !== -1) {
						return index + 1;
					} else {
						throw "Unknown name at position " + iValue;
					}
				},
				// Confirm that a literal character matches the string value
				checkLiteral = function() {
					if (value.charAt(iValue) !== format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue;
					}
					iValue++;
				};

			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						checkLiteral();
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							day = getNumber("d");
							break;
						case "D":
							getName("D", dayNamesShort, dayNames);
							break;
						case "o":
							doy = getNumber("o");
							break;
						case "m":
							month = getNumber("m");
							break;
						case "M":
							month = getName("M", monthNamesShort, monthNames);
							break;
						case "y":
							year = getNumber("y");
							break;
						case "@":
							date = new Date(getNumber("@"));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "!":
							date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "'":
							if (lookAhead("'")){
								checkLiteral();
							} else {
								literal = true;
							}
							break;
						default:
							checkLiteral();
					}
				}
			}

			if (iValue < value.length){
				extra = value.substr(iValue);
				if (!/^\s+/.test(extra)) {
					throw "Extra/unparsed characters found in date: " + extra;
				}
			}

			if (year === -1) {
				year = new Date().getFullYear();
			} else if (year < 100) {
				year += new Date().getFullYear() - new Date().getFullYear() % 100 +
					(year <= shortYearCutoff ? 0 : -100);
			}

			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim) {
						break;
					}
					month++;
					day -= dim;
				} while (true);
			}

			date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
				throw "Invalid date"; // E.g. 31/02/00
			}
			return date;
		};
	})(jQuery);

	/*!
	 * jQuery Cookie Plugin v1.3.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2013 Klaus Hartl
	 * Released under the MIT license
	 */
	(function(a){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery)})(function(a){function c(a){return a}function d(a){return decodeURIComponent(a.replace(b," "))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return f.json?JSON.parse(a):a}catch(b){}}var b=/\+/g,f=a.cookie=function(b,g,h){if(void 0!==g){if(h=a.extend({},f.defaults,h),"number"==typeof h.expires){var i=h.expires,j=h.expires=new Date;j.setDate(j.getDate()+i)}return g=f.json?JSON.stringify(g):g+"",document.cookie=[encodeURIComponent(b),"=",f.raw?g:encodeURIComponent(g),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("")}for(var k=f.raw?c:d,l=document.cookie.split("; "),m=b?void 0:{},n=0,o=l.length;o>n;n++){var p=l[n].split("="),q=k(p.shift()),r=k(p.join("="));if(b&&b===q){m=e(r);break}b||(m[q]=e(r))}return m};f.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend(c,{expires:-1})),!0):!1}});

	//(function($){
		// By default, convert objects passed to jQuery cookie to/from JSON
		//$.cookie.json = true;
		//$.extend($.cookie.defaults,{
		//	expires: 3650 // set cookies to expire in 10 years
		//});
	//})(jQuery);

	/*!
	 * jQuery blockUI plugin
	 * Version 2.65.0-2013.09.02
	 * Requires jQuery v1.7 or later
	 *
	 * Examples at: http://malsup.com/jquery/block/
	 * Copyright (c) 2007-2013 M. Alsup
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	 *
	 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
	 */
	!function(){"use strict";function a(a){function i(e,i){var k,m,q=e==window,r=i&&void 0!==i.message?i.message:void 0;if(i=a.extend({},a.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!a(e).data("blockUI.isBlocked")){if(i.overlayCSS=a.extend({},a.blockUI.defaults.overlayCSS,i.overlayCSS||{}),k=a.extend({},a.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),m=a.extend({},a.blockUI.defaults.themedCSS,i.themedCSS||{}),r=void 0===r?i.message:r,q&&g&&j(window,{fadeOut:0}),r&&"string"!=typeof r&&(r.parentNode||r.jquery)){var s=r.jquery?r[0]:r,t={};a(e).data("blockUI.history",t),t.el=s,t.parent=s.parentNode,t.display=s.style.display,t.position=s.style.position,t.parent&&t.parent.removeChild(s)}a(e).data("blockUI.onUnblock",i.onUnblock);var v,w,x,y,u=i.baseZ;v=c||i.forceIframe?a('<iframe class="blockUI" style="z-index:'+u++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):a('<div class="blockUI" style="display:none"></div>'),w=i.theme?a('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+u++ +';display:none"></div>'):a('<div class="blockUI blockOverlay" style="z-index:'+u++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&q?(y='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(u+10)+';display:none;position:fixed">',i.title&&(y+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),y+='<div class="ui-widget-content ui-dialog-content"></div>',y+="</div>"):i.theme?(y='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(u+10)+';display:none;position:absolute">',i.title&&(y+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),y+='<div class="ui-widget-content ui-dialog-content"></div>',y+="</div>"):y=q?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(u+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(u+10)+';display:none;position:absolute"></div>',x=a(y),r&&(i.theme?(x.css(m),x.addClass("ui-widget-content")):x.css(k)),i.theme||w.css(i.overlayCSS),w.css("position",q?"fixed":"absolute"),(c||i.forceIframe)&&v.css("opacity",0);var z=[v,w,x],A=q?a("body"):a(e);a.each(z,function(){this.appendTo(A)}),i.theme&&i.draggable&&a.fn.draggable&&x.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var B=f&&(!a.support.boxModel||a("object,embed",q?null:e).length>0);if(d||B){if(q&&i.allowBodyStretch&&a.support.boxModel&&a("html,body").css("height","100%"),(d||!a.support.boxModel)&&!q)var C=p(e,"borderTopWidth"),D=p(e,"borderLeftWidth"),E=C?"(0 - "+C+")":0,F=D?"(0 - "+D+")":0;a.each(z,function(a,b){var c=b[0].style;if(c.position="absolute",2>a)q?c.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):c.setExpression("height",'this.parentNode.offsetHeight + "px"'),q?c.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):c.setExpression("width",'this.parentNode.offsetWidth + "px"'),F&&c.setExpression("left",F),E&&c.setExpression("top",E);else if(i.centerY)q&&c.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),c.marginTop=0;else if(!i.centerY&&q){var d=i.css&&i.css.top?parseInt(i.css.top,10):0,e="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+d+') + "px"';c.setExpression("top",e)}})}if(r&&(i.theme?x.find(".ui-widget-content").append(r):x.append(r),(r.jquery||r.nodeType)&&a(r).show()),(c||i.forceIframe)&&i.showOverlay&&v.show(),i.fadeIn){var G=i.onBlock?i.onBlock:b,H=i.showOverlay&&!r?G:b,I=r?G:b;i.showOverlay&&w._fadeIn(i.fadeIn,H),r&&x._fadeIn(i.fadeIn,I)}else i.showOverlay&&w.show(),r&&x.show(),i.onBlock&&i.onBlock();if(l(1,e,i),q?(g=x[0],h=a(i.focusableElements,g),i.focusInput&&setTimeout(n,20)):o(x[0],i.centerX,i.centerY),i.timeout){var J=setTimeout(function(){q?a.unblockUI(i):a(e).unblock(i)},i.timeout);a(e).data("blockUI.timeout",J)}}}function j(b,c){var d,e=b==window,f=a(b),i=f.data("blockUI.history"),j=f.data("blockUI.timeout");j&&(clearTimeout(j),f.removeData("blockUI.timeout")),c=a.extend({},a.blockUI.defaults,c||{}),l(0,b,c),null===c.onUnblock&&(c.onUnblock=f.data("blockUI.onUnblock"),f.removeData("blockUI.onUnblock"));var m;m=e?a("body").children().filter(".blockUI").add("body > .blockUI"):f.find(">.blockUI"),c.cursorReset&&(m.length>1&&(m[1].style.cursor=c.cursorReset),m.length>2&&(m[2].style.cursor=c.cursorReset)),e&&(g=h=null),c.fadeOut?(d=m.length,m.stop().fadeOut(c.fadeOut,function(){0===--d&&k(m,i,c,b)})):k(m,i,c,b)}function k(b,c,d,e){var f=a(e);if(!f.data("blockUI.isBlocked")){b.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),c&&c.el&&(c.el.style.display=c.display,c.el.style.position=c.position,c.parent&&c.parent.appendChild(c.el),f.removeData("blockUI.history")),f.data("blockUI.static")&&f.css("position","static"),"function"==typeof d.onUnblock&&d.onUnblock(e,d);var g=a(document.body),h=g.width(),i=g[0].style.width;g.width(h-1).width(h),g[0].style.width=i}}function l(b,c,d){var e=c==window,f=a(c);if((b||(!e||g)&&(e||f.data("blockUI.isBlocked")))&&(f.data("blockUI.isBlocked",b),e&&d.bindEvents&&(!b||d.showOverlay))){var h="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";b?a(document).bind(h,d,m):a(document).unbind(h,m)}}function m(b){if("keydown"===b.type&&b.keyCode&&9==b.keyCode&&g&&b.data.constrainTabKey){var c=h,d=!b.shiftKey&&b.target===c[c.length-1],e=b.shiftKey&&b.target===c[0];if(d||e)return setTimeout(function(){n(e)},10),!1}var f=b.data,i=a(b.target);return i.hasClass("blockOverlay")&&f.onOverlayClick&&f.onOverlayClick(),i.parents("div."+f.blockMsgClass).length>0?!0:0===i.parents().children().filter("div.blockUI").length}function n(a){if(h){var b=h[a===!0?h.length-1:0];b&&b.focus()}}function o(a,b,c){var d=a.parentNode,e=a.style,f=(d.offsetWidth-a.offsetWidth)/2-p(d,"borderLeftWidth"),g=(d.offsetHeight-a.offsetHeight)/2-p(d,"borderTopWidth");b&&(e.left=f>0?f+"px":"0"),c&&(e.top=g>0?g+"px":"0")}function p(b,c){return parseInt(a.css(b,c),10)||0}a.fn._fadeIn=a.fn.fadeIn;var b=a.noop||function(){},c=/MSIE/.test(navigator.userAgent),d=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);document.documentMode||0;var f=a.isFunction(document.createElement("div").style.setExpression);a.blockUI=function(a){i(window,a)},a.unblockUI=function(a){j(window,a)},a.growlUI=function(b,c,d,e){var f=a('<div class="growlUI"></div>');b&&f.append("<h1>"+b+"</h1>"),c&&f.append("<h2>"+c+"</h2>"),void 0===d&&(d=3e3);var g=function(b){b=b||{},a.blockUI({message:f,fadeIn:"undefined"!=typeof b.fadeIn?b.fadeIn:700,fadeOut:"undefined"!=typeof b.fadeOut?b.fadeOut:1e3,timeout:"undefined"!=typeof b.timeout?b.timeout:d,centerY:!1,showOverlay:!1,onUnblock:e,css:a.blockUI.defaults.growlCSS})};g(),f.css("opacity"),f.mouseover(function(){g({fadeIn:0,timeout:3e4});var b=a(".blockMsg");b.stop(),b.fadeTo(300,1)}).mouseout(function(){a(".blockMsg").fadeOut(1e3)})},a.fn.block=function(b){if(this[0]===window)return a.blockUI(b),this;var c=a.extend({},a.blockUI.defaults,b||{});return this.each(function(){var b=a(this);c.ignoreIfBlocked&&b.data("blockUI.isBlocked")||b.unblock({fadeOut:0})}),this.each(function(){"static"==a.css(this,"position")&&(this.style.position="relative",a(this).data("blockUI.static",!0)),this.style.zoom=1,i(this,b)})},a.fn.unblock=function(b){return this[0]===window?(a.unblockUI(b),this):this.each(function(){j(this,b)})},a.blockUI.version=2.65,a.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var g=null,h=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery)}();

	// Set the default styles for our block UI plugin.
	// These should be applied to the latest version of jQuery and blockUI that we just loaded.
	(function($){
		var defaults = $.blockUI.defaults;
		$.extend(defaults.css,{
			border: 'none', 
			padding: '15px', 
			backgroundColor: '#888', 
			'-webkit-border-radius': '10px', 
			'-moz-border-radius': '10px', 
			opacity: 0.75, 
			color: '#EEE',
			'font-weight': 'bold',
			top: '200px'
		});
		defaults.centerY = false;
		$.extend(defaults.overlayCSS,{
			backgroundColor: '#FFF',
			opacity: 0.7
		});
		$.extend(defaults.growlCSS,{
			opacity: 1,
			backgroundColor: '#000'
		});
	})(jQuery);

	/**
	 * @author Skuid 
	 * Salesforce LockerService makes DOM manipulation (particularly showing/hiding things) pretty non-performant.
	 * In this method, elements are being shown just before they are removed from the DOM. This was leading to **30**
	 * second render times on pages that used a lot of `ech.multiselect` based widgets (e.g. Multipicklist fields). 
	 * We suspect that this jQuery UI plugin does this for screen readers or some other accessibility issue. Since 
	 * V1 isn't guaranteed to be accessible anyway, we're going to remove the `show` within the `destroy` method.
	 * 
	 * See DSC-977.
	 * 
	 * jQuery MultiSelect UI Widget 1.13
	 * Copyright (c) 2012 Eric Hynds
	 *
	 * https://github.com/ehynds/jquery-ui-multiselect-widget/blob/1.13/src/jquery.multiselect.js
	 *
	 * Depends:
	 *   - jQuery 1.4.2+
	 *   - jQuery UI 1.8 widget factory
	 *
	 * Optional:
	 *   - jQuery UI effects
	 *   - jQuery UI position utility
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *   http://www.gnu.org/licenses/gpl.html
	 *
	 */
	(function(d){var k=0;d.widget("ech.multiselect",{options:{header:!0,height:175,minWidth:225,classes:"",checkAllText:"Check all",uncheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:null,hide:null,autoOpen:!1,multiple:!0,position:{}},_create:function(){var a=this.element.hide(),b=this.options;this.speed=d.fx.speeds._default;this._isOpen=!1;a=(this.button=d('<div type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></div>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(b.classes).attr({title:a.attr("title"),"aria-haspopup":!0,tabIndex:a.attr("tabIndex")}).insertAfter(a);(this.buttonlabel=d("<span />")).html(b.noneSelectedText).appendTo(a);var a=(this.menu=d("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(b.classes).appendTo(document.body),c=(this.header=d("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(a);(this.headerLinkContainer=d("<ul />")).addClass("ui-helper-reset").html(function(){return!0===b.header?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+b.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+b.uncheckAllText+"</span></a></li>":"string"===typeof b.header?"<li>"+b.header+"</li>":""}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(c);(this.checkboxContainer=d("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(a);this._bindEvents();this.refresh(!0);b.multiple||a.addClass("ui-multiselect-single")},_init:function(){!1===this.options.header&&this.header.hide();this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide();this.options.autoOpen&&this.open();this.element.is(":disabled")&&this.disable()},refresh:function(a){var b=this.element,c=this.options,f=this.menu,h=this.checkboxContainer,g=[],e="",i=b.attr("id")||k++;b.find("option").each(function(b){d(this);var a=this.parentNode,f=this.innerHTML,h=this.title,k=this.value,b="ui-multiselect-"+(this.id||i+"-option-"+b),l=this.disabled,n=this.selected,m=["ui-corner-all"],o=(l?"ui-multiselect-disabled ":" ")+this.className,j;"OPTGROUP"===a.tagName&&(j=a.getAttribute("label"),-1===d.inArray(j,g)&&(e+='<li class="ui-multiselect-optgroup-label '+a.className+'"><a href="#">'+j+"</a></li>",g.push(j)));l&&m.push("ui-state-disabled");n&&!c.multiple&&m.push("ui-state-active");e+='<li class="'+o+'">';e+='<label for="'+b+'" title="'+h+'" class="'+m.join(" ")+'">';e+='<input id="'+b+'" name="multiselect_'+i+'" type="'+(c.multiple?"checkbox":"radio")+'" value="'+k+'" title="'+f+'"';n&&(e+=' checked="checked"',e+=' aria-selected="true"');l&&(e+=' disabled="disabled"',e+=' aria-disabled="true"');e+=" /><span>"+f+"</span></label></li>"});h.html(e);this.labels=f.find("label");this.inputs=this.labels.children("input");this._setButtonWidth();this._setMenuWidth();this.button[0].defaultValue=this.update();a||this._trigger("refresh")},update:function(){var a=this.options,b=this.inputs,c=b.filter(":checked"),f=c.length,a=0===f?a.noneSelectedText:d.isFunction(a.selectedText)?a.selectedText.call(this,f,b.length,c.get()):/\d/.test(a.selectedList)&&0<a.selectedList&&f<=a.selectedList?c.map(function(){return d(this).next().html()}).get().join(", "):a.selectedText.replace("#",f).replace("#",b.length);this.buttonlabel.html(a);return a},_bindEvents:function(){function a(){b[b._isOpen? "close":"open"]();return!1}var b=this,c=this.button;c.find("span").bind("click.multiselect",a);c.bind({click:a,keypress:function(a){switch(a.which){case 27:case 38:case 37:b.close();break;case 39:case 40:b.open()}},mouseenter:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-hover-")},mouseleave:function(){d(this).removeClass("ui-state-hover-")},focus:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-focus")},blur:function(){d(this).removeClass("ui-state-focus")}});this.header.delegate("a","click.multiselect",function(a){if(d(this).hasClass("ui-multiselect-close"))b.close();else b[d(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]();a.preventDefault()});this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(a){a.preventDefault();var c=d(this),g=c.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),e=g.get(),c=c.parent().text();!1!==b._trigger("beforeoptgrouptoggle",a,{inputs:e,label:c})&&(b._toggleChecked(g.filter(":checked").length!==g.length,g),b._trigger("optgrouptoggle",a,{inputs:e,label:c,checked:e[0].checked}))}).delegate("label","mouseenter.multiselect",function(){d(this).hasClass("ui-state-disabled")||(b.labels.removeClass("ui-state-hover-"),d(this).addClass("ui-state-hover-").find("input").focus())}).delegate("label","keydown.multiselect",function(a){a.preventDefault();switch(a.which){case 9:case 27:b.close();break;case 38:case 40:case 37:case 39:b._traverse(a.which,this);break;case 13:d(this).find("input")[0].click()}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(a){var c=d(this),g=this.value,e=this.checked,i=b.element.find("option");this.disabled||!1===b._trigger("click",a,{value:g,text:this.title,checked:e})?a.preventDefault():(c.focus(),c.attr("aria-selected",e),i.each(function(){this.value===g?this.selected=e:b.options.multiple||(this.selected=!1)}),b.options.multiple||(b.labels.removeClass("ui-state-active"),c.closest("label").toggleClass("ui-state-active",e),b.close()),b.element.trigger("change"),setTimeout(d.proxy(b.update,b),10))});d(document).bind("mousedown.multiselect",function(a){b._isOpen&&(!d.contains(b.menu[0],a.target)&&!d.contains(b.button[0],a.target)&&a.target!==b.button[0])&&b.close()});d(this.element[0].form).bind("reset.multiselect",function(){setTimeout(d.proxy(b.refresh,b),10)})},_setButtonWidth:function(){var a=this.element.outerWidth(),b=this.options;/\d/.test(b.minWidth)&&a<b.minWidth&&(a=b.minWidth);this.button.css('width','100%')},_setMenuWidth:function(){var a=this.menu,b=this.button.outerWidth()-parseInt(a.css("padding-left"),10)-parseInt(a.css("padding-right"),10)-parseInt(a.css("border-right-width"),10)-parseInt(a.css("border-left-width"),10);/*a.width(b||this.button.outerWidth())*/},_traverse:function(a,b){var c=d(b),f=38===a||37===a,c=c.parent()[f?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[f?"last":"first"]();c.length?c.find("label").trigger("mouseover"):(c=this.menu.find("ul").last(),this.menu.find("label")[f? "last":"first"]().trigger("mouseover"),c.scrollTop(f?c.height():0))},_toggleState:function(a,b){return function(){this.disabled||(this[a]=b);b?this.setAttribute("aria-selected",!0):this.removeAttribute("aria-selected")}},_toggleChecked:function(a,b){var c=b&&b.length?b:this.inputs,f=this;c.each(this._toggleState("checked",a));c.eq(0).focus();this.update();var h=c.map(function(){return this.value}).get();this.element.find("option").each(function(){!this.disabled&&-1<d.inArray(this.value,h)&&f._toggleState("selected",a).call(this)});c.length&&this.element.trigger("change")},_toggleDisabled:function(a){this.button.attr({disabled:a,"aria-disabled":a})[a?"addClass":"removeClass"]("ui-state-disabled");var b=this.menu.find("input"),b=a?b.filter(":enabled").data("ech-multiselect-disabled",!0):b.filter(function(){return!0===d.data(this,"ech-multiselect-disabled")}).removeData("ech-multiselect-disabled");b.attr({disabled:a,"arial-disabled":a}).parent()[a?"addClass":"removeClass"]("ui-state-disabled");this.element.attr({disabled:a,"aria-disabled":a})},open:function(){var a=this.button,b=this.menu,c=this.speed,f=this.options,h=[];if(!(!1===this._trigger("beforeopen")||a.hasClass("ui-state-disabled")||this._isOpen)){var g=b.find("ul").last(),e=f.show,i=a.offset();d.isArray(f.show)&&(e=f.show[0],c=f.show[1]||this.speed);e&&(h=[e,c]);g.scrollTop(0).height(f.height);d.ui.position&&!d.isEmptyObject(f.position)?(f.position.of=f.position.of||a,b.show().position(f.position).hide()):b.css({top:i.top+a.outerHeight(),left:i.left});d.fn.show.apply(b,h);this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");a.addClass("ui-state-active");this._isOpen=!0;this._trigger("open")}},close:function(){if(!1!==this._trigger("beforeclose")){var a=this.options,b=a.hide,c=this.speed,f=[];d.isArray(a.hide)&&(b=a.hide[0],c=a.hide[1]||this.speed);b&&(f=[b,c]);d.fn.hide.apply(this.menu,f);this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");this._isOpen=!1;this._trigger("close")}},enable:function(){this._toggleDisabled(!1)},disable:function(){this._toggleDisabled(!0)},checkAll:function(){this._toggleChecked(!0);this._trigger("checkAll")},uncheckAll:function(){this._toggleChecked(!1);this._trigger("uncheckAll")},getChecked:function(){return this.menu.find("input").filter(":checked")},destroy:function(){d.Widget.prototype.destroy.call(this);this.button.remove();this.menu.remove();
		// DSC-977 - Removed for performance in LockerService reasons
		//this.element.show();
		return this},isOpen:function(){return this._isOpen},widget:function(){return this.menu},getButton:function(){return this.button},_setOption:function(a,b){var c=this.menu;switch(a){case "header":c.find("div.ui-multiselect-header")[b?"show":"hide"]();break;case "checkAllText":c.find("a.ui-multiselect-all span").eq(-1).text(b);break;case "uncheckAllText":c.find("a.ui-multiselect-none span").eq(-1).text(b);break;case "height":c.find("ul").last().height(parseInt(b,10));break;case "minWidth":this.options[a]=parseInt(b,10);this._setButtonWidth();this._setMenuWidth();break;case "selectedText":case "selectedList":case "noneSelectedText":this.options[a]=b;this.update();break;case "classes":c.add(this.button).removeClass(this.options.classes).addClass(b);break;case "multiple":c.toggleClass("ui-multiselect-single",!b),this.options.multiple=b,this.element[0].multiple=b,this.refresh()}d.Widget.prototype._setOption.apply(this,arguments)}})
	})(jQuery);

	/*
	 * jQuery MultiSelect UI Widget Filtering Plugin 1.6
	 * Copyright (c) 2012 Eric Hynds
	 *
	 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
	 *
	 * Depends:
	 *   - jQuery UI MultiSelect widget
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *   http://www.gnu.org/licenses/gpl.html
	 *
	 */
	(function($) {
		var rEscape = /[\-\[\]{}()*+?.,\\\^$|#\s]/g;
	
		//Courtesy of underscore.js
		function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) {
						func.apply(context, args);
					}
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) {
					func.apply(context, args);
				}
			};
		}
	
		$.widget('ech.multiselectfilter', {
	
			options: {
				label: 'Filter:',
				width: null, /* override default width set in css file (px). null will inherit */
				placeholder: 'Enter keywords',
				autoReset: false,
				debounceMS: 250
			},
		
			_create: function() {
				var opts = this.options;
				var elem = $(this.element);
		
				// get the multiselect instance
				var instance = (this.instance = (elem.data('echMultiselect') || elem.data("multiselect") || elem.data("ech-multiselect")));
		
				// store header; add filter class so the close/check all/uncheck all links can be positioned correctly
				var header = (this.header = instance.menu.find('.ui-multiselect-header').addClass('ui-multiselect-hasfilter'));
		
				// wrapper elem
				var wrapper = (this.wrapper = $('<div class="ui-multiselect-filter">' + (opts.label.length ? opts.label : '') + '<input placeholder="'+opts.placeholder+'" type="search"' + (/\d/.test(opts.width) ? 'style="width:'+opts.width+'px"' : '') + ' /></div>').prependTo(this.header));
		
				// reference to the actual inputs
				this.inputs = instance.menu.find('input[type="checkbox"], input[type="radio"]');
		
				// build the input box
				this.input = wrapper.find('input').bind({
					keydown: function(e) {
						// prevent the enter key from submitting the form / closing the widget
						if(e.which === 13) {
							e.preventDefault();
						}
					},
					input: $.proxy(debounce(this._handler, opts.debounceMS), this),
					search: $.proxy(this._handler, this)
				});
		
				// cache input values for searching
				this.updateCache();
		
				// rewrite internal _toggleChecked fn so that when checkAll/uncheckAll is fired,
				// only the currently filtered elements are checked
				instance._toggleChecked = function(flag, group) {
					var $inputs = (group && group.length) ?  group : this.labels.find('input');
					var _self = this;
			
					// do not include hidden elems if the menu isn't open.
					var selector = _self._isOpen ?  ':disabled, :hidden' : ':disabled';
			
					$inputs = $inputs
						.not(selector)
						.each(this._toggleState('checked', flag));
			
					// update text
					this.update();
			
					// gather an array of the values that actually changed
					var values = {};
					$inputs.each(function() {
						values[this.value] = true;
					});
			
					// select option tags
					this.element.find('option').filter(function() {
						if(!this.disabled && values[this.value]) {
							_self._toggleState('selected', flag).call(this);
						}
					});
			
					// trigger the change event on the select
					if($inputs.length) {
						this.element.trigger('change');
					}
				};
		
				// rebuild cache when multiselect is updated
				var doc = $(document).bind('multiselectrefresh.'+ instance._namespaceID, $.proxy(function() {
					this.updateCache();
					this._handler();
				}, this));
		
				// automatically reset the widget on close?
				if(this.options.autoReset) {
					doc.bind('multiselectclose.'+ instance._namespaceID, $.proxy(this._reset, this));
				}
			},
		
			// thx for the logic here ben alman
			_handler: function(e) {
				var term = $.trim(this.input[0].value.toLowerCase()),
		
					// speed up lookups
					rows = this.rows, inputs = this.inputs, cache = this.cache;
		
				if(!term) {
					rows.show();
				} else {
					rows.hide();
		
					var regex = new RegExp(term.replace(rEscape, "\\$&"), 'gi');
			
					this._trigger("filter", e, $.map(cache, function(v, i) {
						if (v.search(regex) !== -1) {
							// CORE-1343 fix to render items more quickly
							rows.eq(i).css("display", "block");
							return inputs.get(i);
						}
			
						return null;
					}));
				}
		
				// show/hide optgroups
				this.instance.menu.find(".ui-multiselect-optgroup-label").each(function() {
					var $this = $(this);
					var isVisible = $this.nextUntil('.ui-multiselect-optgroup-label').filter(function() {
						return $.css(this, "display") !== 'none';
					}).length;
			
					$this[isVisible ? 'show' : 'hide']();
				});
			},
		
			_reset: function() {
				this.input.val('').trigger('keyup');
			},
		
			updateCache: function() {
				// each list item
				this.rows = this.instance.menu.find(".ui-multiselect-checkboxes li:not(.ui-multiselect-optgroup-label)");
		
				// cache
				this.cache = this.element.children().map(function() {
					var elem = $(this);
			
					// account for optgroups
					if(this.tagName.toLowerCase() === "optgroup") {
						elem = elem.children();
					}
			
					return elem.map(function() {
						return this.innerHTML.toLowerCase();
					}).get();
				}).get();
			},
		
			widget: function() {
				return this.wrapper;
			},
		
			destroy: function() {
				$.Widget.prototype.destroy.call(this);
				this.input.val('').trigger("keyup");
				this.wrapper.remove();
			}
		});
	})(jQuery);
  

	// Fix for jquery deferreds to help them take an array of promises.  For more info...
	// http://stackoverflow.com/a/16208148/1873363

	//Put somewhere in your scripting environment
	if (jQuery.when.all===undefined) {
		jQuery.when.all = function(deferreds) {
			var deferred = new jQuery.Deferred();
			jQuery.when.apply(jQuery, deferreds).then(
				function() {
					deferred.resolve(Array.prototype.slice.call(arguments));
				},
				function() {
					deferred.reject(Array.prototype.slice.call(arguments));
				}
			);

			return deferred;
		};
	}

	// Like when, but each deferred is contained within a wrapper deferred that will resolve regardless of the outcome.
	// This ensures that all deferreds have an opportunity to complete before moving on to the next task.
	jQuery.settle || (jQuery.settle = function(deferreds) {
		if (arguments.length > 1) deferreds = Array.prototype.slice.call(arguments);
		if (!jQuery.isArray(deferreds)) deferreds = [deferreds];

		var deferred = new jQuery.Deferred();

		var wrapperDeferreds = deferreds.map(function(innerDfd){
			var wrapperDfd = new jQuery.Deferred();

			innerDfd.then(
				// Success
				function(){
					var innerDfdResults = Array.prototype.slice.call(arguments);
					wrapperDfd.resolve({
						success: true,
						results: innerDfdResults.length > 1 ? innerDfdResults : innerDfdResults[0],
						//original: innerDfd // I see no immediate need for this property, but I'll leave it here as an option in case we add this in the future.
					});
				},
				// Failure
				function(){
					var innerDfdResults = Array.prototype.slice.call(arguments);
					wrapperDfd.resolve({
						success: false,
						results: innerDfdResults.length > 1 ? innerDfdResults : innerDfdResults[0],
						//original: innerDfd
					});
				});

			return wrapperDfd;
		});

		jQuery.when.apply(jQuery, wrapperDeferreds).always(function() {
			deferred.resolve(Array.prototype.slice.call(arguments));
		});

		return deferred;
	});


	/**
	 * jQuery number plug-in 2.0.1
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * A jQuery plugin which implements a permutation of phpjs.org's number_format to provide
	 * simple number formatting, insertion, and as-you-type masking of a number.
	 * 
	 * @author	Sam Sehnert
	 * @docs	http://www.teamdf.com/web/jquery-number-format/178/
	 * 
	 * ZDM 12/19/2012
	 * We are only leveraging the $.number() part. 
	 * For original source, see https://raw.github.com/teamdf/jquery-number/master/jquery.number.js 
	 * 
	 */

	// JUST $.number (MINIFIED)
	(function(a){a.number=function(a,b,c,d){d=d===void 0?",":d,c=c===void 0?".":c,b=isFinite(+b)?Math.abs(b):0;var e="\\u"+("0000"+c.charCodeAt(0).toString(16)).substr(-4);a=(a+"").replace(RegExp(e,"g"),".").replace(RegExp("[^0-9+-Ee.]","g"),"");var f=isFinite(+a)?+a:0,g="",h=function(a,b){var c=Math.pow(10,b);return""+Math.round(a*c)/c};return g=(b?h(f,b):""+Math.round(f)).split("."),g[0].length>3&&(g[0]=g[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,d)),b>(g[1]||"").length&&(g[1]=g[1]||"",g[1]+=Array(b-g[1].length+1).join("0")),g.join(c)}})(jQuery);

	// ALL (MINIFIED)
	//(function(a){function b(a,b){if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveStart("character",a),c.moveEnd("character",b),c.select()}else this.setSelectionRange&&(this.focus(),this.setSelectionRange(a,b))}function c(b){var d,c=a(this).val(),e=this.value.length;return b="start"==b.toLowerCase()?"Start":"End",this.createTextRange?(d=document.selection.createRange().duplicate(),d["move"+b]("character",-c.length),""==d.text&&(e=c.length),e=c.lastIndexOf(d.text)):this["selection"+b]!==void 0&&(e=this["selection"+b]),e}a.fn.number=function(d,e,f,g){g=g===void 0?",":g,f=f===void 0?".":f;var h="\\u"+("0000"+f.charCodeAt(0).toString(16)).substr(-4),i=RegExp("[^"+h+"0-9]","g"),j=RegExp(h,"g");return d===!0?this.is("input:text")?this.on({"keydown.format":function(d){var h=a(this),k=h.data("numFormat"),l=d.keyCode?d.keyCode:d.which,m=unescape(d.originalEvent.keyIdentifier.replace("U+","%u")),n=c.apply(this,["start"]),o=c.apply(this,["end"]),p="";if(setPos=!1,8===l||m==f||!(48>l||l>57)||!(96>l||l>105)){if((0!=n||o!=this.value.length)&&0!=h.val()||d.metaKey||d.ctrlKey||d.altKey||1!==m.length||0==m?k.c=o-this.value.length:(n=o=1,this.value="",k.init=-1,k.c=-(e+1),b.apply(this,[0,0])),n==this.value.length-e-1&&m==f)k.c++,k.init=Math.max(0,k.init),d.preventDefault(),setPos=this.value.length+k.c;else if(m==f)k.init=Math.max(0,k.init),d.preventDefault();else if(8==l&&n==this.value.length-e)d.preventDefault(),k.c--,setPos=this.value.length+k.c;else if(8==l&&n>this.value.length-e){if(""===this.value)return;"0"!=this.value.substr(n-1,1)&&(p=this.value.substr(0,n-1)+"0"+this.value.substr(n),h.val(p.replace(i,"").replace(j,f))),d.preventDefault(),k.c--,setPos=this.value.length+k.c}else 8==l&&this.value.substr(n-1,1)==g?(d.preventDefault(),k.c--,setPos=this.value.length+k.c):n==o&&this.value.length>e+1&&n>this.value.length-e-1&&isFinite(+m)&&!d.metaKey&&!d.ctrlKey&&!d.altKey&&1===m.length&&(p=o===this.value.length?this.value.substr(0,n-1):this.value.substr(0,n)+this.value.substr(n+1),this.value=p,setPos=n);setPos!==!1&&b.apply(this,[setPos,setPos]),h.data("numFormat",k)}},"keyup.format":function(d){var j,f=a(this),g=f.data("numFormat"),h=d.keyCode?d.keyCode:d.which,i=c.apply(this,["start"]);""===this.value||(48>h||h>57)&&(96>h||h>105)&&8!==h||(f.val(f.val()),1>g.init?(i=this.value.length-e-(0>g.init?1:0),g.c=i-this.value.length,g.init=1,f.data("numFormat",g)):i>this.value.length-e&&8!=h&&(g.c++,f.data("numFormat",g)),j=this.value.length+g.c,b.apply(this,[j,j]))},"paste.format":function(b){var c=a(this),d=b.originalEvent,e=null;return window.clipboardData&&window.clipboardData.getData?e=window.clipboardData.getData("Text"):d.clipboardData&&d.clipboardData.getData&&(e=d.clipboardData.getData("text/plain")),c.val(e),b.preventDefault(),!1}}).each(function(){var b=a(this).data("numFormat",{c:-(e+1),decimals:e,thousands_sep:g,dec_point:f,regex_dec_num:i,regex_dec:j,init:!1});""!==this.value&&b.val(b.val())}):this.each(function(){var b=a(this),c=+b.text().replace(i,"").replace(j,".");b.number(isFinite(c)?+c:0,e,f,g)}):this.text(a.number.apply(window,arguments))};var d=null,e=null;a.valHooks.text?(d=a.valHooks.text.get,e=a.valHooks.text.set):a.valHooks.text={},a.valHooks.text.get=function(b){var e,c=a(b),f=c.data("numFormat");return f?""===b.value?"":(e=+b.value.replace(f.regex_dec_num,"").replace(f.regex_dec,f.dec_point),""+(isFinite(e)?e:0)):a.isFunction(d)?d(b):void 0},a.valHooks.text.set=function(b,c){var d=a(b),f=d.data("numFormat");return f?b.value=a.number(c,f.decimals,f.dec_point,f.thousands_sep):a.isFunction(e)?e(b,c):void 0},a.number=function(a,b,c,d){d=d===void 0?",":d,c=c===void 0?".":c,b=isFinite(+b)?Math.abs(b):0;var e="\\u"+("0000"+c.charCodeAt(0).toString(16)).substr(-4);a=(a+"").replace(RegExp(e,"g"),".").replace(RegExp("[^0-9+-Ee.]","g"),"");var f=isFinite(+a)?+a:0,g="",h=function(a,b){var c=Math.pow(10,b);return""+Math.round(a*c)/c};return g=(b?h(f,b):""+Math.round(f)).split("."),g[0].length>3&&(g[0]=g[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,d)),b>(g[1]||"").length&&(g[1]=g[1]||"",g[1]+=Array(b-g[1].length+1).join("0")),g.join(c)}})(jQuery);

	/**
	 * setCursorPosition and getCursorPosition plugins 
	 * - sets/gets the position of cursor
	 * 
	 * @param pos - the position to set the cursor to 
	 * 
	 * Added 1/22/2013 by ZDM
	 */

	(function($){
		$.fn.setCursorPosition = function(pos) {
			this.each(function(index, elem) {
				if (elem.setSelectionRange) {
					elem.setSelectionRange(pos, pos);
				} else if (elem.createTextRange) {
					var range = elem.createTextRange();
					range.collapse(true);
					range.moveEnd('character', pos);
					range.moveStart('character', pos);
					range.select();
				}
			});
			return this;
		};
		$.fn.getCursorPosition = function() {
			var el = $(this).get(0),
				pos = 0;
			if('selectionStart' in el) {
				pos = el.selectionStart;
			} else if('selection' in document) {
				el.focus();
				var Sel = document.selection.createRange(),
					SelLength = document.selection.createRange().text.length;
				Sel.moveStart('character', -el.value.length);
				pos = Sel.text.length - SelLength;
			}
			return pos;
		};
	})(jQuery);

	// Extend jQuery .attr() to allow for retrieval of all specified attributes
	// on a node but calling .attr() with no arguments
	// http://stackoverflow.com/questions/14645806/get-all-attributes-of-an-element-using-jquery
	(function($) {
		var old = $.fn.attr;
		$.fn.attr = function() {
			if(arguments.length === 0) {
				if(this.length === 0) {
					return null;
				}

				var obj = {};
				$.each(this[0].attributes, function() {
					if(this.specified) {
						obj[this.name] = this.value;
					}
				});
				return obj;
			}
			return old.apply(this, arguments);
		};
	})(jQuery);

	// adapted from
	// yepnope.js
	// v2.0.0
	//
	// by
	// Alex Sexton - @slexaxton - alexsexton[at]gmail.com
	// Ralph Holzmann - @rlph - ralphholzmann[at]gmail.com
	//
	// http://yepnopejs.com/
	// https://github.com/SlexAxton/yepnope.js/
	//
	// New BSD
	exports.load = (function (window, document, $/*, undef*/) {
		// Yepnope's style is intentionally very flat to aid in
		// minification. The authors are usually against too much
		// self-minification, but in the case of a script loader, we're
		// especially file size sensitive.
		
		// Some aliases
		var sTimeout = window.setTimeout;
		var cTimeout = window.clearTimeout;
		// var scriptsQueue = [];
		// var count = 0;
		// var toString = {}.toString;
		
		// This is just used for a race condition,
		// so even if it fails it's not a huge risk
		// var isOldIE = !!document.attachEvent && !(window.opera && toString.call(window.opera) == '[object Opera]');
		
		function noop(){}
		
		// Helper functions
		function isObject(obj) {
			return Object(obj) === obj;
		}
		
		function isString(s) {
			return typeof s == 'string';
		}
		
		// Loader Utilities
		// function uniq() {
		// 	return 'yn_' + (count++);
		// }
		
		function isFileReady(script) {
			// Check to see if any of the ways a file can be ready are available as properties on the file's element
			var readyState = script.readyState;
			// Most browsers (Safari, Firefox, Chrome, modern IE) do not populate readyState,
			// if onReadyStateChange is called, the file has been loaded successfully
			if (!readyState) return true;
			else {
				// For IE 7-9,
				// we need to check for 'loaded' as well as 'complete'
				// as complete sometimes never gets returned, only loaded.
				// (Found this especially when running Skuid Unit Tests)
				//
				// To determine whether a script is actually loaded or not,
				// there's a weird hack described below that we utilize. And it works great in IE <= 9.
				// http://stackoverflow.com/questions/6946631/dynamically-creating-script-readystate-never-complete
				if (/loaded|complete/.test(readyState)) {
					var firstState = readyState;
					// hack: calling 'children' property changes node's readyState from 'loaded' to complete
					// (if script was loaded normally) or to 'loading' - if error detected
					script.children;
					// error detected
					if (firstState === 'loaded' && script.readyState === 'loading') {
						onError();
					} else {
						return true;
					}
				} else if (readyState==='uninitialized') {
					return true;
				} else {
					return false;
				}
			}
			// return (!readyState || /*readyState == 'loaded' || */readyState == 'complete' || readyState == 'uninitialized');
		}
		
		function runWhenReady(src, cb, script) {
			// Handle memory leak in IE
			if (script) {
				script.onload = script.onreadystatechange = script.onerror = null;	
			}
			
			cb.call(window);
		}
		
		var loadingCache = {};
		
		/**
		 * Returns true if we are running inside of Salesforce Lightning LockerService,
		 * where we have a non-standard DOM
		 * @return {boolean}
		 */
		function inLockerService() {
			return (window.$A && window.$A.lockerService) || (
				skuid.platform &&
				skuid.utils.inPlatform &&
				skuid.utils.inPlatform(skuid.constants.LIGHTNING)
			);
		}

		// Inject a script into the page and know when it's done
		function injectJs(options, cb) {
			var src,
				attrs,
				timeout,
				script,
				done,
				i,
				dfd = $.Deferred(),
				promise = dfd.promise(),
				script404;
		
			if (isString(options)) {
				src = options;
			}
			else if (isObject(options)) {
				// Allow rewritten url to take precedence
				src = options._url || options.src;
				attrs = options.attrs;
				timeout = options.timeout;
			} 
			
			cb = cb || noop;
			attrs = attrs || {};
			if (!attrs.type) attrs.type = "application/javascript";
			
			// If we don't have a src, we're done
			if (!src) {
				var err = new Error('You must provide a valid script to load.');
				cb(err);
				// We don't waste bytes on cleaning up memory in error cases
				// because hopefully it doesn't happen often enough to matter.
				// And you're probably already in an 'uh-oh' situation.
				dfd.reject(err);
				return promise;
			}
		
			// ZDM 2/17/2015
			// 1. (MUST COME FIRST)
			// Check whether we are currently trying to load this file.
			// Must be first because the first thing we do after this if/else
			// is to create a <script> tag, which means that 2. would be satisfied,
			// even though we hadn't really finished loading it yet
			if (src in loadingCache) {
				// Grab the corresponding promise
				return loadingCache[src];
			}
			// 2. Check whether our file has already been loaded
			else if (!src.startsWith("data:") && $("script[src='" + src + "']").length) {
				dfd.resolve();
				runWhenReady(src, cb, script);
				return promise;
			} 
			else {
				loadingCache[src] = promise;
			}
			
			script = document.createElement('script');
			timeout = timeout || yepnope.errorTimeout;
			
			// BH change
			// Setting async false does NOT stop scripts from loading asynchronously,
			// but it does preserve the order in which they are loaded
			// ZDM: Unfortunately .async is not available in LockerService
			if (!inLockerService()) {
				script.async = false;
			}

			script.src = src;
			
			// IE Race condition
			// http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
			
			
			// Removing because this breaks IE8, IE9, and IE10
			
			/*
			if (isOldIE) {
				script.event = 'onclick';
				script.id = script.htmlFor = attrs.id || uniq();
			}
			*/
			
			
			
			// Add our extra attributes to the script element
			for (i in attrs) {
				script.setAttribute(i, attrs[i]);
			}

			function onLoad() {
				if ( !done && isFileReady(script) ) {
					// Set done to prevent this function from being called twice.
					done = 1;
					// Second half of IE race condition hack
					
					// Removing because this breaks IE8, IE9, and IE10
					/*
					if (isOldIE) {
						try {
							// By calling this here, we create a synchronous
							// execution of the contents of the script
							// and the execution of the callback below.
							script.onclick();
						}
						catch (e) {}
					}
					*/

					// Prevent the 404 callback from firing
					cTimeout(script404);
					
					// Just run the callback
					runWhenReady(src, cb, script);
					dfd.resolve();
				}
			}
			
			function onError() {
				// Don't do anything if the script has already finished
				if (!done) {
					// Mark it as done, which means the callback won't run again
					done = 1;

					// Prevent the 404 callback from firing (if it hasn't already)
					cTimeout(script404);
					
					// Might as well pass in an error-state if we fire the 404 fallback
					var err = new Error('Timeout: ' + src); 
					cb(err);
					dfd.reject(err);
					// Maybe...
					script.parentNode && script.parentNode.removeChild(script);
				}
			}
			
			// 404 Fallback
			script404 = sTimeout(onError, timeout);

			// Inside of locker service, "script" is not an actual DOM Element, it's a 
			// "SecureScriptElement" provided by locker service. This element fires a 
			// "load" event, so we'll have to listen to that.

			// Source at: https://github.com/forcedotcom/aura/blob/master/aura-impl/src/main/resources/aura/locker/SecureScriptElement.js
			if (inLockerService()) {
				script.addEventListener("load", onLoad);
				script.addEventListener("error", onError);
			} else {
				// Bind to load events
				script.onreadystatechange = script.onload = onLoad;

				// This won't work in every browser, but
				// would be helpful in those that it does.
				// http://stackoverflow.com/questions/2027849/how-to-trigger-script-onerror-in-internet-explorer/2032014#2032014
				// For those that don't support it, the timeout will be the backup
				script.onerror = function () {
					onError();
				};
			}
			
			// Inject script into to document
			document.body.appendChild(script);
			
			// Return our promise
			return promise;
		}

		var supportsOnLoad = function(){
			var el = document.createElement('link');
			var eventName = 'onload';
			var isSupported = (eventName in el);
			if (!isSupported) {
				el.setAttribute(eventName, 'return;');
				isSupported = typeof el[eventName] == 'function';
			}
			el = null;
			return isSupported;
		};
		
		function injectCss(options, cb) {
			var attrs = {},
				href,
				i,
				// media,
				link,
				dfd = $.Deferred(),
				promise = dfd.promise();
			
			// optionally accept an object of settings
			// or a string that's the url
			if (isObject(options)) {
				// allow the overriden _url property to take precendence
				href = options._url || options.href;
				attrs = options.attrs || {};
			}
			else if (isString(options)) {
				href = options;
			}

			cb = cb || noop;
			
			// ZDM 2/17/2015
			// Check whether our file has been loaded already before we try to load it
			if($("link[href='" + href + "']").length) {
				dfd.resolve();
				cb.call(window);
				return promise;
			}
			
			// Create stylesheet link
			link = document.createElement('link');
			
			// Add attributes
			link.href = href;
			link.rel = 'stylesheet';
			
			// Technique to force non-blocking loading from:
			// https://github.com/filamentgroup/loadCSS/blob/master/loadCSS.js#L20
			link.media = 'only x';
			link.type = attrs.type || 'text/css';
			
			// On next tick, just set the media to what it's supposed to be
			sTimeout(function() {
				link.media = attrs.media || 'all';
			});
			
			// Add our extra attributes to the link element
			for (i in attrs) {
				link.setAttribute(i, attrs[i]);
			}
			
			if (options && options.insertBefore) {
				options.insertBefore.parentNode.insertBefore(link,options.insertBefore);
			} else if (options && options.insertAfter) {
				// Works for last element because when nextSibling is null, it just puts it at the end.
				options.insertAfter.parentNode.insertBefore(link,options.insertAfter.nextSibling);
			} else {
				
				// We append link tags so the cascades work as expected.
				// A little more dangerous, but if you're injecting CSS
				// dynamically, you probably can handle it.
				document.body.appendChild(link);
			}

			if (supportsOnLoad()) {
				link.onload = function(){
					dfd.resolve();
					cb.call(window);
				};
				link.onerror = function(){
					// Still resolve the promise on error,
					// we just won't have the css.
					dfd.resolve();
					cb.call(window);
				};
			} else {
				// Always just run the callback for CSS on next tick. We're not
				// going to try to normalize this, so don't worry about runwhenready here.
				sTimeout(function() {
					dfd.resolve();
					cb.call(window);
				});
			}
			return promise;
		}
		
		var yepnope = {
			// Add a default for the error timer
			errorTimeout: 40000,
			// Expose no BS script injection
			js: injectJs,
			// Expose super-lightweight css injector
			css: injectCss
		};
		
		// Export
		return yepnope;
	})(window, document, jQuery);

	/**
	 * jQuery UI Combobox
	 * This is an adaptation from the combobox example at https://jqueryui.com/autocomplete/#combobox
	 * added by Josh Chandler
	 */
	(function ($) {
		$.widget('custom.combobox', {
			options: {
				parentElem: $('<div>'),
				source: function( request, response ) {
					var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
					response( this.element.children( "option" ).map(function() {
						var text = $( this ).text();
						if ( this.value && ( !request.term || matcher.test(text) ) )
							return {
								label: text,
								value: text,
								option: this
							};
					}) );
				},
				delay: 0,
				searchicon: $('<div>'),
				menuClass: 'ui-combobox'
			},
			_create: function() {
				this.wrapper = this.options.parentElem
					.addClass( "custom-combobox" )
					.insertAfter( this.options.parentElem );

				this.element.hide();
				this._createAutocomplete();
				this._createShowAllButton();
			},
			_createAutocomplete: function() {
				var self = this,
					selected = self.element.children( ":selected" ),
					value =  self.options.value || ( selected.val() && selected.text() ) || '',
					dropdownDiv = $('<div class="ui-combobox-container"></div>'),
					autocompleteOptions = {
						delay: self.options.delay,
						minLength: 0, // Must be zero or the dropdown won't work when input is empty.
						source: self.options.source,
						select: self.options.onChange,
						focus: function (event, ui) {
							if (self.options.showLabelInTextInput) {
								var label = typeof ui.item === 'object' ? ui.item.label : null;
								if (label) $(this).val(label);
								return false;	
							}
						}
					},
					menu;

				self.options.appendDropdown ? $.extend(autocompleteOptions, {appendTo: dropdownDiv}) : '';

				self.input = $( "<input>" )
					.appendTo(self.wrapper)
					.autocomplete(autocompleteOptions).val( value );

				self.input.appendTo(self.wrapper);

				self.input.focus(function (event) {
					self.options.onFocus && self.options.onFocus(event);
				});

				self.input.blur(function(event) {
					self.options.onBlur && self.options.onBlur(event);
				});

				if (self.options.appendDropdown) {
					dropdownDiv.insertAfter(self.wrapper.children().last());
					menu = dropdownDiv.find('ul.ui-autocomplete');
				} else menu = $('body').find('ul.ui-autocomplete');

				menu.addClass(self.options.menuClass).removeClass('ui-front'); // Remove this class to prevent popups from stacking on top of the dropdown.

				if (self.options.parentElem) {
					// Append a search icon
					self.options.parentElem.append(self.options.searchicon);
					// If the parent element IS our input box,
					// then add some padding to ensure that the search text and the search icon don't collide
					if (self.options.parentElem.is(self.input)) {
						self.input.css('padding-right','22px');
					}
				}
			},

			_createShowAllButton: function() {
				var self = this,
					input = self.input,
					wasOpen = false;

				$( "<a>" )
					.attr( "tabIndex", -1 )
					.tooltip()
					.appendTo( self.wrapper )
					.button({
						icons: {
							primary: "fa fa-chevron-down"
						},
						text: false
					})
					.removeClass( "ui-corner-all ui-button ui-widget ui-state-default ui-button-icon-only" )
					.addClass( "nx-combobox-renderer-button" )
					.on( "mousedown", function() {
						wasOpen = input.autocomplete( "widget" ).is( ":visible" );
					})
					.on( "click", function() {
						input.trigger( "focus" );

						// Close if already visible
						if ( wasOpen ) {
							return;
						}

						// Pass empty string as value to search for, displaying all results
						input.autocomplete( "search", "" );
					});
			},
		});
	})(jQuery);

	/**
	 * CORE-893 - Allows interaction within a jQuery UI dialog.
	 *
	 * One example of this use case is the RICHTEXT renderer inside of one of these dialogs. 
	 * Some interactions like copy and paste did not work in certain browsers.
	 * 
	 * https://bugs.jqueryui.com/ticket/9087
	 */
	(function ($) {
		$.widget( "ui.dialog", $.ui.dialog, {
			_allowInteraction: function() {
				return true;
			}
		});
	})(jQuery);

	/**
	 * jQuery flexText: Auto-height textareas
	 * --------------------------------------
	 * Requires: jQuery 1.7+
	 * Usage example: $('textarea').flexText()
	 * Info: https://github.com/alexdunphy/flexible-textareas
	 */
	(function ($) {

		// Constructor
		function FT(elem) {
			this.$textarea = $(elem);

			this._init();
		}

		FT.prototype = {
			_init: function () {
				var _this = this;

				// Insert wrapper elem & pre/span for textarea mirroring
				this.$textarea.wrap('<div class="flex-text-wrap" />').before('<pre><span /><br /></pre>');

				this.$span = this.$textarea.prev().find('span');

				// Add input event listeners
				// * input for modern browsers
				// * propertychange for IE 7 & 8
				// * keyup for IE >= 9: catches keyboard-triggered undos/cuts/deletes
				// * change for IE >= 9: catches mouse-triggered undos/cuts/deletions (when textarea loses focus)
				this.$textarea.on('input propertychange keyup change', function () {
					_this._mirror();
				});

				// jQuery val() strips carriage return chars by default (see http://api.jquery.com/val/)
				// This causes issues in IE7, but a valHook can be used to preserve these chars
				$.valHooks.textarea = {
					get: function (elem) {
						return elem.value.replace(/\r?\n/g, "\r\n");
					}
				};

				// Mirror contents once on init
				this._mirror();
			}

			// Mirror pre/span & textarea contents
			,_mirror: function () {
				this.$span.text(this.$textarea.val());
			}
		};

		// jQuery plugin wrapper
		$.fn.flexText = function () {
			return this.each(function () {
				// Check if already instantiated on this elem
				if (!$.data(this, 'flexText')) {
					// Instantiate & store elem + string
					$.data(this, 'flexText', new FT(this));
				}
			});
		};

	})(jQuery);

	/**
	 * insertAtCaret jQuery function. Inserts text at the current position of the cursor.
	 * 
	 * @myValue a string to insert at the current cursor position
	 * 
	 * Retrieved from http://stackoverflow.com/a/15976659/211627
	 * 
	 * Added by jdb 5/15/2015
	 */
	jQuery.fn.extend({
		insertAtCaret: function(myValue){
			return this.each(function() {
				if (document.selection) {
					//For browsers like Internet Explorer
					this.focus();
					var sel = document.selection.createRange();
					sel.text = myValue;
					this.focus();
				}
				else if (this.selectionStart || this.selectionStart == '0') {
					//For browsers like Firefox and Webkit based
					var startPos = this.selectionStart;
					var endPos = this.selectionEnd;
					var scrollTop = this.scrollTop;
					this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
					this.focus();
					this.selectionStart = startPos + myValue.length;
					this.selectionEnd = startPos + myValue.length;
					this.scrollTop = scrollTop;
				} else {
					this.value += myValue;
					this.focus();
				}
			});
		}
	});
	
})(window.skuid,window.jQuery);

(function(){
	// This gets the version of Internet explorer, for an unminified version, checkout utils.js
	var _ie=function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b<=4&&!window.ActiveXObject&&"ActiveXObject"in window?11:b>4?b:a}();
	// IE/Edge support for css object-fit
	// https://github.com/bfred-it/object-fit-images
	// Built from the source code
	var objectFitImages = (function () {
		'use strict';

		var transparentImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='; // transparent image, used as accessor and replacing image
		var propRegex = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
		var testImg = new Image();
		var supportsObjectFit = 'object-fit' in testImg.style;
		var supportsObjectPosition = 'object-position' in testImg.style;
		var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
		var nativeGetAttribute = testImg.getAttribute;
		var nativeSetAttribute = testImg.setAttribute;
		var autoModeEnabled = false;

		function getStyle(el) {
			var style = getComputedStyle(el).fontFamily;
			var parsed;
			var props = {};
			while ((parsed = propRegex.exec(style)) !== null) {
				props[parsed[1]] = parsed[2];
			}
			return props;
		}

		function fixOne(el, requestedSrc) {
			if (el[transparentImage].parsingSrcset) {
				return;
			}
			var style = getStyle(el);
			style['object-fit'] = style['object-fit'] || 'fill'; // default value

			// If the fix was already applied, don't try to skip fixing,
			// - because once you go ofi you never go back.
			// - Wait, that doesn't rhyme.
			// - This ain't rap, bro.
			if (!el[transparentImage].s) {
				// fill is the default behavior so no action is necessary
				if (style['object-fit'] === 'fill') {
					return;
				}

				// Where object-fit is supported and object-position isn't (Safari < 10)
				if (
					!el[transparentImage].skipTest && // unless user wants to apply regardless of browser support
					supportsObjectFit && // if browser already supports object-fit
					!style['object-position'] // unless object-position is used
				) {
					return;
				}
			}

			var src = el[transparentImage].ios7src || el.currentSrc || el.src;

			if (requestedSrc) {
				// explicitly requested src takes precedence
				// TODO: this still should overwrite srcset
				src = requestedSrc;
			} else if (el.srcset && !supportsCurrentSrc && window.picturefill) {
				var pf = window.picturefill._;
				// prevent infinite loop
				// fillImg sets the src which in turn calls fixOne
				el[transparentImage].parsingSrcset = true;

				// parse srcset with picturefill where currentSrc isn't available
				if (!el[pf.ns] || !el[pf.ns].evaled) {
					// force synchronous srcset parsing
					pf.fillImg(el, {reselect: true});
				}

				if (!el[pf.ns].curSrc) {
					// force picturefill to parse srcset
					el[pf.ns].supported = false;
					pf.fillImg(el, {reselect: true});
				}
				delete el[transparentImage].parsingSrcset;

				// retrieve parsed currentSrc, if any
				src = el[pf.ns].curSrc || src;
			}

			// store info on object for later use
			if (el[transparentImage].s) {
				el[transparentImage].s = src;
				if (requestedSrc) {
					// the attribute reflects the user input
					// the property is the resolved URL
					el[transparentImage].srcAttr = requestedSrc;
				}
			} else {
				el[transparentImage] = {
					s: src,
					srcAttr: requestedSrc || nativeGetAttribute.call(el, 'src'),
					srcsetAttr: el.srcset
				};
				el.src = transparentImage;

				try {
					// remove srcset because it overrides src
					if (el.srcset) {
						el.srcset = '';

						// restore non-browser-readable srcset property
						Object.defineProperty(el, 'srcset', {
							value: el[transparentImage].srcsetAttr
						});
					}

					keepSrcUsable(el);
				} catch (err) {
					el[transparentImage].ios7src = src;
				}
			}

			el.style.backgroundImage = 'url("' + src + '")';
			el.style.backgroundPosition = style['object-position'] || 'center';
			el.style.backgroundRepeat = 'no-repeat';

			if (/scale-down/.test(style['object-fit'])) {
				// `object-fit: scale-down` is either `contain` or `auto`
				if (!el[transparentImage].i) {
					el[transparentImage].i = new Image();
					el[transparentImage].i.src = src;
				}

				// naturalWidth is only available when the image headers are loaded,
				// this loop will poll it every 100ms.
				// There's currently no check to prevent this loop from starting twice
				// as a consequence of calling ofi() twice on the same image, but it's light
				// and causes no issues, so it's not worth ensuring that it doesn't.
				(function loop() {
					// https://bugs.chromium.org/p/chromium/issues/detail?id=495908
					if (el[transparentImage].i.naturalWidth) {
						if (el[transparentImage].i.naturalWidth > el.width || el[transparentImage].i.naturalHeight > el.height) {
							el.style.backgroundSize = 'contain';
						} else {
							el.style.backgroundSize = 'auto';
						}
						return;
					}
					setTimeout(loop, 100);
				})();
			} else {
				el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
			}
		}

		function keepSrcUsable(el) {
			var descriptors = {
				get: function get() {
					return el[transparentImage].s;
				},
				set: function set(src) {
					delete el[transparentImage].i; // scale-down's img sizes need to be updated too
					fixOne(el, src);
					return src;
				}
			};
			Object.defineProperty(el, 'src', descriptors);
			Object.defineProperty(el, 'currentSrc', {get: descriptors.get}); // it should be read-only
		}

		function hijackAttributes() {
			if (!supportsObjectPosition) {
				HTMLImageElement.prototype.getAttribute = function (name) {
					if (this[transparentImage] && (name === 'src' || name === 'srcset')) {
						return this[transparentImage][name + 'Attr'];
					}
					return nativeGetAttribute.call(this, name);
				};

				HTMLImageElement.prototype.setAttribute = function (name, value) {
					if (this[transparentImage] && (name === 'src' || name === 'srcset')) {
						this[name === 'src' ? 'src' : name + 'Attr'] = String(value);
					} else {
						nativeSetAttribute.call(this, name, value);
					}
				};
			}
		}

		function fix(imgs, opts) {
			var startAutoMode = !autoModeEnabled && !imgs;
			opts = opts || {};
			imgs = imgs || 'img';
			if (supportsObjectPosition && !opts.skipTest) {
				return false;
			}

			// use imgs as a selector or just select all images
			if (typeof imgs === 'string') {
				imgs = document.querySelectorAll('img');
			} else if (!('length' in imgs)) {
				imgs = [imgs];
			}

			// apply fix to all
			for (var i = 0; i < imgs.length; i++) {
				imgs[i][transparentImage] = imgs[i][transparentImage] || opts;
				fixOne(imgs[i]);
			}

			if (startAutoMode) {
				document.body.addEventListener('load', function (e) {
					if (e.target.tagName === 'IMG') {
						fix(e.target, {
							skipTest: opts.skipTest
						});
					}
				}, true);
				autoModeEnabled = true;
				imgs = 'img'; // reset to a generic selector for watchMQ
			}

			// if requested, watch media queries for object-fit change
			if (opts.watchMQ) {
				window.addEventListener('resize', fix.bind(null, imgs, {
					skipTest: opts.skipTest
				}));
			}
		}

		fix.supportsObjectFit = supportsObjectFit;
		fix.supportsObjectPosition = supportsObjectPosition;

		hijackAttributes();

		return fix;
	}());

	if(_ie > 8 || _ie === undefined){
		skuid.$(function(){
			objectFitImages();
		});
	}
})();
if (!skuid.utils) skuid.utils = {};
} // end if (!window.skuid)