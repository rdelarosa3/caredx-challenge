/**
 * @module inject.js
 * adapted from
 * yepnope.js
 * v2.0.0
 * 
 * by
 * Alex Sexton - @slexaxton - alexsexton[at]gmail.com
 * Ralph Holzmann - @rlph - ralphholzmann[at]gmail.com
 * 
 * http://yepnopejs.com/
 * https://github.com/SlexAxton/yepnope.js/
 * 
 * New BSD
 */

import $ from "jquery";
import {LIGHTNING, SCOPES} from "js/core/constants.js";
import {
	registerSkuidApi,
} from "js/core/publicApi";
const GLOBAL = SCOPES.GLOBAL,
	PAGE = SCOPES.PAGE;
import runtime from "js/core/runtime";
// Due to dependency loops, we can't import this one yet:
// eslint-disable-next-line skuid/refactored-namespaces, no-undef
const page = skuid.page;
import {
	inPlatform,
} from "js/core/utils/environmentQuerying";
import {
	Deferred,
} from "js/core/utils/promiseShortcuts";
import {
	isObject,
	isString,
} from "js/core/utils/typeValidation";


let errorTimeout = 10000;

// Yepnope's style is intentionally very flat to aid in
// minification. The authors are usually against too much
// self-minification, but in the case of a script loader, we're
// especially file size sensitive.

// Some aliases
let sTimeout = window.setTimeout;
let cTimeout = window.clearTimeout;

// This is just used for a race condition,
// so even if it fails it's not a huge risk
// var isOldIE = !!document.attachEvent && !(window.opera && toString.call(window.opera) == '[object Opera]');

function noop(){}

function runWhenReady(src, cb, script) {
	// Handle memory leak in IE
	if (script) {
		script.onload = script.onreadystatechange = script.onerror = null;	
	}
	
	cb.call(window);
}

const loadingCache = {};

/**
 * Returns true if we are running inside of Salesforce Lightning LockerService,
 * where we have a non-standard DOM
 * @return {boolean}
 */
function inLockerService() {
	return (window.$A && window.$A.lockerService) || (
		inPlatform(LIGHTNING)
	);
}

// Inject a script into the page and know when it's done
function injectJs(options, cb) {
	let src,
		attrs,
		timeout,
		scope,
		script,
		done,
		i,
		dfd = Deferred(),
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
		scope = options.scope || GLOBAL;
	} 
	
	cb = cb || noop;
	attrs = attrs || {};
	if (!attrs.type) attrs.type = "application/javascript";
	
	// If we don't have a src, we're done
	if (!src) {
		const err = new Error('You must provide a valid script to load.');
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

	timeout = timeout || errorTimeout;

	if (scope === PAGE) {
		$.get({
			url: src,
			cache: true,
			dataType: "text",
			timeout: timeout,
		}).then(function(code) {
			const apiName = (src.match(/js\/(.*?)(\.js|JS|$)/) || [])[1],
				pageComponentId = options.pageComponentId || page.pageComponentId;
			if (!pageComponentId) throw Error("Unable to establish Page Context for \"" + src + "\"");
			// eslint-disable-next-line no-eval
			window.eval(
				`skuid.runtime.runInPage("${pageComponentId}", function(skuid){\n` +
					code +
				`\n});\n//# sourceURL=${src}`
			);
			if (apiName) runtime.tryInitApi(apiName);
			onLoad();
		}).catch(function() {
			onError.call(null, Array.prototype.slice.apply(arguments));
		});
	} else {

		script = document.createElement('script');
		
		// BH change
		// Setting async false does NOT stop scripts from loading asynchronously,
		// but it does preserve the order in which they are loaded
		// ZDM: Unfortunately .async is not available in LockerService
		if (!inLockerService()) {
			script.async = false;
		}

		script.src = src;
		
		// Add our extra attributes to the script element
		for (i in attrs) {
			script.setAttribute(i, attrs[i]);
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
			script.onerror = onError;
		}
		
		// Inject script into to document
		document.body.appendChild(script);
	}

	function onLoad() {
		if ( !done && isFileReady() ) {
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

	function isFileReady() {
		// Check to see if any of the ways a file can be ready are available as properties on the file's element
		// If we are loading the file via eval, then the script element doesn't exist and we can just return true.
		const readyState = script && script.readyState;
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
				const firstState = readyState;
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
	
	function onError() {
		// Don't do anything if the script has already finished
		if (!done) {
			// Mark it as done, which means the callback won't run again
			done = 1;

			// Prevent the 404 callback from firing (if it hasn't already)
			cTimeout(script404);
			
			// Might as well pass in an error-state if we fire the 404 fallback
			const err = new Error('Timeout: ' + src); 
			cb(err);
			dfd.reject(err);
			// Maybe...
			if (script) script.parentNode && script.parentNode.removeChild(script);
		}
	}
	
	// Return our promise
	return promise;
}

const supportsOnLoad = function(){
	let el = document.createElement('link');
	const eventName = 'onload';
	let isSupported = (eventName in el);
	if (!isSupported) {
		el.setAttribute(eventName, 'return;');
		isSupported = typeof el[eventName] == 'function';
	}
	el = null;
	return isSupported;
};

function injectCss(options, cb) {
	let attrs = {},
		href,
		i,
		// media,
		link,
		dfd = Deferred(),
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

const load = {
	// Expose no BS script injection
	js: injectJs,
	// Expose super-lightweight css injector
	css: injectCss,
	get errorTimeout() {
		return errorTimeout;
	},
	set errorTimeout(value) {
		errorTimeout = value;
	},
};
registerSkuidApi("load", () => load);
export default load;