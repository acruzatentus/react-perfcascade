/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/ypetya/react-perfcascade/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
/* unused harmony export findIndex */
/* harmony export (immutable) */ __webpack_exports__["b"] = find;
/* harmony export (immutable) */ __webpack_exports__["g"] = resourceUrlFormatter;
/* harmony export (immutable) */ __webpack_exports__["h"] = roundNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = isInStatusCodeRange;
/* harmony export (immutable) */ __webpack_exports__["i"] = toCssClass;
/* harmony export (immutable) */ __webpack_exports__["f"] = pluralize;
/* harmony export (immutable) */ __webpack_exports__["e"] = isTabUp;
/* harmony export (immutable) */ __webpack_exports__["d"] = isTabDown;
/**
 *  Misc Helpers
 */
/**
 * Parses URL into its components
 * @param  {string} url
 */
function parseUrl(url) {
    const pattern = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
    const matches = url.match(pattern) || [];
    return {
        authority: matches[4],
        fragment: matches[9],
        path: matches[5],
        query: matches[7],
        scheme: matches[2],
    };
}
/**
 * @param  {T[]} arr - array to search
 * @param  {T} item - item to search for
 * @returns boolean - true if `item` is in `arr`
 */
function contains(arr, item) {
    return arr.some((x) => x === item);
}
/**
 * Returns Index of first match to `predicate` in `arr`
 * @param arr Array to search
 * @param predicate Function that returns true for a match
 */
function findIndex(arr, predicate) {
    let i = 0;
    if (!arr || arr.length < 1) {
        return undefined;
    }
    const len = arr.length;
    while (i < len) {
        if (predicate(arr[i], i)) {
            return i;
        }
        i++;
    }
    return undefined;
}
/**
 * Returns first match to `predicate` in `arr`
 * @param arr Array to search
 * @param predicate Function that returns true for a match
 */
function find(arr, predicate) {
    const index = findIndex(arr, predicate);
    if (index === undefined) {
        return undefined;
    }
    return arr[index];
}
/**
 * Formats and shortens a url for ui
 * @param  {string} url
 * @param  {number} maxLength - max length of shortened url
 * @returns string
 */
function resourceUrlFormatter(url, maxLength) {
    if (url.length < maxLength) {
        return url.replace(/https?:\/\//, "");
    }
    const matches = parseUrl(url);
    if ((matches.authority + matches.path).length < maxLength) {
        return matches.authority + matches.path;
    }
    const maxAuthLength = Math.floor(maxLength / 2) - 3;
    const maxPathLength = Math.floor(maxLength / 2) - 5;
    // maybe we could fine tune these numbers
    const p = matches.path.split("/");
    if (matches.authority.length > maxAuthLength) {
        return matches.authority.substr(0, maxAuthLength) + "..." + p[p.length - 1].substr(-maxPathLength);
    }
    return matches.authority + "..." + p[p.length - 1].substr(-maxPathLength);
}
/**
 * Helper to add a precision to `Math.round`.
 *
 * _defaults to 2 decimals_
 * @param  {number} num - number to round
 * @param  {number} [decimals=2] - decimal precision to round to
 */
function roundNumber(num, decimals = 2) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
/**
 *
 * Checks if `status` code is `>= lowerBound` and `<= upperBound`
 * @param  {number} status  HTTP status code
 * @param  {number} lowerBound  inclusive lower bound
 * @param  {number} upperBound  inclusive upper bound
 */
function isInStatusCodeRange(status, lowerBound, upperBound) {
    return status >= lowerBound && status <= upperBound;
}
/** precompiled regex */
const cssClassRegEx = /[^a-z-]/g;
/**
 * Converts a seed string to a CSS class by stripping out invalid characters
 * @param {string} seed string to base the CSS class off
 */
function toCssClass(seed) {
    return seed.toLowerCase().replace(cssClassRegEx, "");
}
/**
 * Conditionally pluralizes (adding 's') `word` based on `count`
 * @param {string} word word to pluralize
 * @param {number} count counter to deceide weather or not `word` should be pluralized
 */
function pluralize(word, count) {
    return word + (count > 1 ? "s" : "");
}
/**
 * Check if event is `tab` + `shift` key, to move to previous input element
 * @param {KeyboardEvent} evt Keyboard event
 */
function isTabUp(evt) {
    return evt.which === 9 && evt.shiftKey;
}
/**
 * Check if event is only `tab` key, to move to next input element
 * @param {KeyboardEvent} evt Keyboard event
 */
function isTabDown(evt) {
    return evt.which === 9 && !evt.shiftKey;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["h"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = getParentByClassName;
/* harmony export (immutable) */ __webpack_exports__["g"] = removeChildren;
/* harmony export (immutable) */ __webpack_exports__["c"] = getLastItemOfNodeList;
/* harmony export (immutable) */ __webpack_exports__["b"] = forEachNodeList;
/* unused harmony export safeSetStyle */
/* unused harmony export safeSetAttribute */
/* harmony export (immutable) */ __webpack_exports__["j"] = safeSetStyles;
/* harmony export (immutable) */ __webpack_exports__["i"] = safeSetAttributes;
/* harmony export (immutable) */ __webpack_exports__["f"] = makeHtmlEl;
/* harmony export (immutable) */ __webpack_exports__["e"] = makeBodyEl;
/**
 * Adds class `className` to `el`
 * @param  {Element} el
 * @param  {string} className
 */
function addClass(el, className) {
    const classList = el.classList;
    if (classList) {
        className.split(" ").forEach((c) => classList.add(c));
    }
    else {
        // IE doesn't support classList in SVG - also no need for duplication check i.t.m.
        el.setAttribute("class", el.getAttribute("class") + " " + className);
    }
    return el;
}
/**
 * Removes class `className` from `el`
 * @param  {Element} el
 * @param  {string} className
 */
function removeClass(el, className) {
    const classList = el.classList;
    if (classList) {
        classList.remove(className);
    }
    else {
        // IE doesn't support classList in SVG
        el.setAttribute("class", (el.getAttribute("class") || "")
            .replace(new RegExp("(\\s|^)" + className + "(\\s|$)", "g"), "$2"));
    }
    return el;
}
/**
 * Helper to recursively find parent with the `className` class
 * @param base `Element` to start from
 * @param className class that the parent should have
 */
function getParentByClassName(base, className) {
    if (typeof base.closest === "function") {
        return base.closest(`.${className}`);
    }
    while (base) {
        if (base.classList.contains(className)) {
            return base;
        }
        base = base.parentElement;
    }
    return null;
}
/**
 * Removes all child DOM nodes from `el`
 * @param  {Element} el
 */
function removeChildren(el) {
    while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
    }
    return el;
}
/**
 * Get last element of `NodeList`
 * @param list NodeListOf e.g. return value of `getElementsByClassName`
 */
function getLastItemOfNodeList(list) {
    if (!list || list.length === 0) {
        return undefined;
    }
    return list.item(list.length - 1);
}
/** Calls `fn` with each element of `els` */
function forEachNodeList(els, fn) {
    Array.prototype.forEach.call(els, fn);
}
/** Sets a CSS style property, but only if property exists on `el` */
function safeSetStyle(el, property, value) {
    if (property in el.style) {
        el.style[property] = value;
    }
    else {
        // tslint:disable-next-line:no-console
        console.warn(new Error(`Trying to set non-existing style ` +
            `${property} = ${value} on a <${el.tagName.toLowerCase()}>.`));
    }
}
/** Sets an attribute, but only if `name` exists on `el` */
function safeSetAttribute(el, name, value) {
    if (!(name in el)) {
        // tslint:disable-next-line:no-console
        console.warn(new Error(`Trying to set non-existing attribute ` +
            `${name} = ${value} on a <${el.tagName.toLowerCase()}>.`));
    }
    el.setAttributeNS("", name, value);
}
/** Sets multiple CSS style properties, but only if property exists on `el` */
function safeSetStyles(el, css) {
    Object.keys(css).forEach((property) => {
        safeSetStyle(el, property, css[property].toString());
    });
}
/** Sets attributes, but only if they exist on `el` */
function safeSetAttributes(el, attributes) {
    Object.keys(attributes).forEach((name) => {
        safeSetAttribute(el, name, attributes[name].toString());
    });
}
function makeHtmlEl() {
    const html = document.createElement("html");
    html.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/xmlns/");
    return html;
}
function makeBodyEl(css = {}, innerHTML = "") {
    const body = document.createElement("body");
    body.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    safeSetStyles(body, css);
    body.innerHTML = innerHTML;
    return body;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["i"] = newSvg;
/* harmony export (immutable) */ __webpack_exports__["e"] = newG;
/* harmony export (immutable) */ __webpack_exports__["c"] = newClipPath;
/* harmony export (immutable) */ __webpack_exports__["d"] = newForeignObject;
/* harmony export (immutable) */ __webpack_exports__["b"] = newA;
/* harmony export (immutable) */ __webpack_exports__["h"] = newRect;
/* harmony export (immutable) */ __webpack_exports__["f"] = newLine;
/* harmony export (immutable) */ __webpack_exports__["k"] = newTitle;
/* harmony export (immutable) */ __webpack_exports__["j"] = newTextEl;
/* harmony export (immutable) */ __webpack_exports__["g"] = newPath;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeTextWidth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(1);
/**
 *  SVG Helpers
 */

/** Namespace for SVG Elements */
const svgNamespaceUri = "http://www.w3.org/2000/svg";
function newElement(tagName, { attributes = {}, css = {}, text = "", className = "", } = {}) {
    const element = document.createElementNS(svgNamespaceUri, tagName);
    if (className) {
        Object(__WEBPACK_IMPORTED_MODULE_0__dom__["a" /* addClass */])(element, className);
    }
    if (text) {
        element.textContent = text;
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__dom__["j" /* safeSetStyles */])(element, css);
    Object(__WEBPACK_IMPORTED_MODULE_0__dom__["i" /* safeSetAttributes */])(element, attributes);
    return element;
}
function newSvg(className, attributes, css = {}) {
    return newElement("svg", { className, attributes, css });
}
function newG(className, attributes = {}, css = {}) {
    return newElement("g", { className, attributes, css });
}
function newClipPath(id) {
    const attributes = { id };
    return newElement("clipPath", { attributes });
}
function newForeignObject(attributes, className = "", css = {}) {
    return newElement("foreignObject", { attributes, className, css });
}
function newA(className) {
    return newElement("a", { className });
}
function newRect(attributes, className = "", css = {}) {
    return newElement("rect", { attributes, className, css });
}
function newLine(attributes, className = "") {
    return newElement("line", { className, attributes });
}
function newTitle(text) {
    const title = document.createElementNS(svgNamespaceUri, "title");
    title.setAttribute("text", text);
    return title;
}
function newTextEl(text, attributes = {}, css = {}) {
    return newElement("text", { text, attributes, css });
}
function newPath(d) {
    const path = document.createElementNS(svgNamespaceUri, "path");
    path.setAttribute("d", d);
    return path;
}
/** temp SVG element for size measurements  */
const getTestSVGEl = (() => {
    /** Reference to Temp SVG element for size measurements */
    let svgTestEl;
    let removeSvgTestElTimeout;
    return () => {
        // lazy init svgTestEl
        if (svgTestEl === undefined) {
            const attributes = {
                className: "water-fall-chart temp",
                width: "9999px",
            };
            const css = {
                "left": "0px",
                "position": "absolute",
                "top": "0px",
                "visibility": "hidden",
                "z-index": "99999",
            };
            svgTestEl = newSvg("water-fall-chart temp", attributes, css);
        }
        // needs access to body to measure size
        // TODO: refactor for server side use
        if (svgTestEl.parentElement === undefined) {
            window.document.body.appendChild(svgTestEl);
        }
        // debounced time-deleayed cleanup, so the element can be re-used in tight loops
        clearTimeout(removeSvgTestElTimeout);
        removeSvgTestElTimeout = setTimeout(() => {
            svgTestEl.parentNode.removeChild(svgTestEl);
        }, 500);
        return svgTestEl;
    };
})();
/**
 * Measure the width of a SVGTextElement in px
 * @param  {SVGTextElement} textNode
 * @param  {boolean=false} skipClone - do not clone `textNode` and use original
 * @returns number
 */
function getNodeTextWidth(textNode, skipClone = false) {
    if ((textNode.textContent || "").length === 0) {
        return 0;
    }
    const tmp = getTestSVGEl();
    let tmpTextNode;
    let shadow;
    if (skipClone) {
        shadow = textNode.style.textShadow;
        tmpTextNode = textNode;
    }
    else {
        tmpTextNode = textNode.cloneNode(true);
        tmpTextNode.setAttribute("x", "0");
        tmpTextNode.setAttribute("y", "0");
    }
    // make sure to turn of shadow for performance
    tmpTextNode.style.textShadow = "0";
    tmp.appendChild(tmpTextNode);
    window.document.body.appendChild(tmp);
    const width = tmpTextNode.getComputedTextLength();
    if (skipClone && shadow !== undefined) {
        textNode.style.textShadow = shadow;
    }
    return width;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = parseAndFormat;
/* harmony export (immutable) */ __webpack_exports__["h"] = parseNonEmpty;
/* harmony export (immutable) */ __webpack_exports__["g"] = parseDate;
/* harmony export (immutable) */ __webpack_exports__["i"] = parseNonNegative;
/* harmony export (immutable) */ __webpack_exports__["j"] = parsePositive;
/* harmony export (immutable) */ __webpack_exports__["d"] = formatMilliseconds;
/* harmony export (immutable) */ __webpack_exports__["e"] = formatSeconds;
/* harmony export (immutable) */ __webpack_exports__["c"] = formatDateLocalized;
/* harmony export (immutable) */ __webpack_exports__["b"] = formatBytes;
/* harmony export (immutable) */ __webpack_exports__["a"] = escapeHtml;
/* harmony export (immutable) */ __webpack_exports__["l"] = sanitizeUrlForLink;
/* harmony export (immutable) */ __webpack_exports__["k"] = sanitizeAlphaNumeric;
/* harmony export (immutable) */ __webpack_exports__["m"] = toInt;
/* harmony export (immutable) */ __webpack_exports__["n"] = validateOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc__ = __webpack_require__(0);

/**
 * Type safe and null safe way to transform, filter and format an input value, e.g. parse a Date from a string,
 * rejecting invalid dates, and formatting it as a localized string. If the input value is undefined, or the parseFn
 * returns undefined, the function returns undefined.
 * @param input
 * @param parseFn an optional function to transform and/or filter the input value.
 * @param formatFn an optional function to format the parsed input value.
 * @returns {string} a formatted string representation of the input, or undefined.
 */
function parseAndFormat(input, parseFn, formatFn = toString) {
    if (input === undefined) {
        return undefined;
    }
    const parsed = parseFn(input);
    if (parsed === undefined) {
        return undefined;
    }
    return formatFn(parsed);
}
function toString(source) {
    if (typeof source["toString"] === "function") {
        return source.toString();
    }
    else {
        throw TypeError(`Can't convert type ${typeof source} to string`);
    }
}
function parseNonEmpty(input) {
    return input.trim().length > 0 ? input : undefined;
}
function parseDate(input) {
    const date = new Date(input);
    if (isNaN(date.getTime())) {
        return undefined;
    }
    return date;
}
function parseNonNegative(input) {
    if (input === undefined || input === null) {
        return undefined;
    }
    const filter = (n) => (n >= 0);
    return parseToNumber(input, filter);
}
function parsePositive(input) {
    if (input === undefined || input === null) {
        return undefined;
    }
    const filter = (n) => (n > 0);
    return parseToNumber(input, filter);
}
function parseToNumber(input, filterFn) {
    const filter = (n) => filterFn(n) ? n : undefined;
    if (typeof input === "string") {
        const n = parseInt(input, 10);
        if (!isFinite(n)) {
            return undefined;
        }
        return filter(n);
    }
    return filter(input);
}
function formatMilliseconds(millis) {
    return (millis !== undefined) ? `${Object(__WEBPACK_IMPORTED_MODULE_0__misc__["h" /* roundNumber */])(millis, 3)} ms` : undefined;
}
const secondsPerMinute = 60;
const secondsPerHour = 60 * secondsPerMinute;
const secondsPerDay = 24 * secondsPerHour;
function formatSeconds(seconds) {
    if (seconds === undefined) {
        return undefined;
    }
    const raw = `${Object(__WEBPACK_IMPORTED_MODULE_0__misc__["h" /* roundNumber */])(seconds, 3)} s`;
    if (seconds > secondsPerDay) {
        return `${raw} (~${Object(__WEBPACK_IMPORTED_MODULE_0__misc__["h" /* roundNumber */])(seconds / secondsPerDay, 0)} days)`;
    }
    if (seconds > secondsPerHour) {
        return `${raw} (~${Object(__WEBPACK_IMPORTED_MODULE_0__misc__["h" /* roundNumber */])(seconds / secondsPerHour, 0)} hours)`;
    }
    if (seconds > secondsPerMinute) {
        return `${raw} (~${Object(__WEBPACK_IMPORTED_MODULE_0__misc__["h" /* roundNumber */])(seconds / secondsPerMinute, 0)} minutes)`;
    }
    return raw;
}
function formatDateLocalized(date) {
    return (date !== undefined) ? `${date.toUTCString()}<br/>(local time: ${date.toLocaleString()})` : undefined;
}
const bytesPerKB = 1024;
const bytesPerMB = 1024 * bytesPerKB;
function formatBytes(bytes) {
    if (bytes === undefined) {
        return "";
    }
    const raw = `${bytes} bytes`;
    if (bytes >= bytesPerMB) {
        return `${raw} (~${Object(__WEBPACK_IMPORTED_MODULE_0__misc__["h" /* roundNumber */])(bytes / bytesPerMB, 1)} MB)`;
    }
    if (bytes >= bytesPerKB) {
        return `${raw} (~${Object(__WEBPACK_IMPORTED_MODULE_0__misc__["h" /* roundNumber */])(bytes / bytesPerKB, 0)} kB)`;
    }
    return raw;
}
/** HTML character to escape */
const htmlCharMap = {
    "\"": "&quot",
    "&": "&amp",
    "'": "&#039",
    "<": "&lt",
    ">": "&gt",
};
/**
 * Reusable regex to escape HTML chars
 * Combined to improve performance
 */
const htmlChars = new RegExp(Object.keys(htmlCharMap).join("|"), "g");
/**
 * Escapes unsafe characters in a string to render safely in HTML
 * @param  {string} unsafe - string to be rendered in HTML
 */
function escapeHtml(unsafe = "") {
    if (unsafe === null || unsafe === undefined) {
        return ""; // See https://github.com/micmro/PerfCascade/issues/217
    }
    if (typeof unsafe !== "string") {
        if (typeof unsafe["toString"] === "function") {
            unsafe = unsafe.toString();
        }
        else {
            throw TypeError("Invalid parameter");
        }
    }
    return unsafe.replace(htmlChars, (match) => {
        return htmlCharMap[match];
    });
}
/** Whitelist of save-ish URL chars */
const unSafeUrlChars = new RegExp("[^-A-Za-z0-9+&@#/%?=~_|!:,.;\(\)]", "g");
/** returns a cleaned http:// or https:// based URL  */
function sanitizeUrlForLink(unsafeUrl) {
    const cleaned = unsafeUrl.replace(unSafeUrlChars, "_");
    if (cleaned.indexOf("http://") === 0 || cleaned.indexOf("https://") === 0) {
        return cleaned;
    }
    // tslint:disable-next-line:no-console
    console.warn("skipped link, due to potentially unsafe url", unsafeUrl);
    return "";
}
/** whitelist basic chars */
const requestTypeTypeRegEx = new RegExp("[^a-zA-Z0-9]", "g");
/**  returns cleaned sting - stipps out not a-zA-Z0-9 */
function sanitizeAlphaNumeric(unsafe) {
    return unsafe.toString().replace(requestTypeTypeRegEx, "");
}
/** Ensures `input` is casted to `number` */
function toInt(input) {
    if (typeof input === "number") {
        return input;
    }
    else if (typeof input === "string") {
        return parseInt(input, 10);
    }
    else {
        return undefined;
    }
}
/** Validates the `ChartOptions` attributes types */
function validateOptions(options) {
    const validateInt = (name) => {
        const val = toInt(options[name]);
        if (val === undefined) {
            throw TypeError(`option "${name}" needs to be a number`);
        }
        options[name] = val;
    };
    const ensureBoolean = (name) => {
        options[name] = !!options[name];
    };
    validateInt("leftColumnWidth");
    validateInt("rowHeight");
    validateInt("selectedPage");
    ensureBoolean("showAlignmentHelpers");
    ensureBoolean("showIndicatorIcons");
    ensureBoolean("showMimeTypeIcon");
    return options;
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = makeDefinitionList;
/* harmony export (immutable) */ __webpack_exports__["g"] = mimeToRequestType;
/* harmony export (immutable) */ __webpack_exports__["a"] = createWaterfallEntry;
/* harmony export (immutable) */ __webpack_exports__["b"] = createWaterfallEntryTiming;
/* harmony export (immutable) */ __webpack_exports__["f"] = makeRowCssClasses;
/* harmony export (immutable) */ __webpack_exports__["e"] = makeMimeTypeIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_parse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waterfall_row_svg_indicators__ = __webpack_require__(8);
/** Helpers that are not file-fromat specific */



/** Escapes all HTML except linebreaks `<br/>` */
const escapeHtmlLight = (str) => Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(str).replace("&ltbr/&gt", "<br/>");
/**
 * Converts `dlKeyValues` to the contennd a definition list, without the outer `<dl>` tags
 * @param {SafeKvTuple[]} dlKeyValues array of Key/Value pair
 * @param {boolean} [addClass=false] if `true` the key in `dlKeyValues`
 * is converted to a class name andd added to the `<dt>`
 * @returns {string} stringified HTML definition list
 */
function makeDefinitionList(dlKeyValues, addClass = false) {
    const makeClass = (key) => {
        if (!addClass) {
            return "";
        }
        const className = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["i" /* toCssClass */])(key) || "no-colour";
        return `class="${className}"`;
    };
    return dlKeyValues
        .map((tuple) => `
      <dt ${makeClass(tuple[0])}>${escapeHtmlLight(tuple[0])}</dt>
      <dd>${escapeHtmlLight(tuple[1])}</dd>
    `).join("");
}
/**
 * Convert a MIME type into it's WPT style request type (font, script etc)
 * @param {string} mimeType - a HTTP headers mime-type
 */
function mimeToRequestType(mimeType) {
    if (mimeType === undefined) {
        return "other";
    }
    const types = mimeType.split("/");
    let part2 = types[1];
    // take care of text/css; charset=UTF-8 etc
    if (part2 !== undefined) {
        part2 = part2.indexOf(";") > -1 ? part2.split(";")[0] : part2;
    }
    switch (types[0]) {
        case "image": {
            if (part2 === "svg+xml") {
                return "svg";
            }
            return "image";
        }
        case "font": return "font";
        case "video": return "video";
        case "audio": return "audio";
        default: break;
    }
    switch (part2) {
        case "xml":
        case "html": return "html";
        case "plain": return "plain";
        case "css": return "css";
        case "vnd.ms-fontobject":
        case "font-woff":
        case "font-woff2":
        case "x-font-truetype":
        case "x-font-opentype":
        case "x-font-woff": return "font";
        case "javascript":
        case "x-javascript":
        case "script":
        case "json": return "javascript";
        case "x-shockwave-flash": return "flash";
        default: return "other";
    }
}
/** helper to create a `WaterfallEntry` */
function createWaterfallEntry(url, start, end, segments = [], responseDetails, tabs) {
    const total = (typeof start !== "number" || typeof end !== "number") ? NaN : (end - start);
    return {
        end,
        responseDetails,
        segments,
        start,
        tabs,
        total,
        url,
    };
}
/** helper to create a `WaterfallEntryTiming` */
function createWaterfallEntryTiming(type, start, end) {
    const total = (typeof start !== "number" || typeof end !== "number") ? NaN : (end - start);
    const typeClean = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["k" /* sanitizeAlphaNumeric */])(type);
    return {
        end,
        start,
        total,
        type: typeClean,
    };
}
/**
 * Creates the css classes for a row based on it's status code
 * @param  {number} status - HTTP status code
 * @returns string - concatinated css class names
 */
function makeRowCssClasses(status) {
    const classes = ["row-item"];
    if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["c" /* isInStatusCodeRange */])(status, 500, 599)) {
        classes.push("status5xx");
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["c" /* isInStatusCodeRange */])(status, 400, 499)) {
        classes.push("status4xx");
    }
    else if (status !== 304 &&
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["c" /* isInStatusCodeRange */])(status, 300, 399)) {
        // 304 == Not Modified, so not an issue
        classes.push("status3xx");
    }
    return classes.join(" ");
}
/**
 * Create icon that fits the response and highlights issues
 *
 * @param  {number} status - HTTP status code
 * @param  {string} statusText - HTTP status text
 * @param  {RequestType} requestType
 * @param  {string=""} redirectURL - pass the URL for `301` or `302`
 * @returns Icon
 */
function makeMimeTypeIcon(status, statusText, requestType, redirectURL = "") {
    // highlight redirects
    if (!!redirectURL) {
        const url = encodeURI(redirectURL.split("?")[0] || "");
        return Object(__WEBPACK_IMPORTED_MODULE_2__waterfall_row_svg_indicators__["b" /* makeIcon */])("err3xx", `${status} response status: Redirect to ${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(url)}...`);
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["c" /* isInStatusCodeRange */])(status, 400, 499)) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__waterfall_row_svg_indicators__["b" /* makeIcon */])("err4xx", `${status} response status: ${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(statusText)}`);
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["c" /* isInStatusCodeRange */])(status, 500, 599)) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__waterfall_row_svg_indicators__["b" /* makeIcon */])("err5xx", `${status} response status: ${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(statusText)}`);
    }
    else if (status === 204) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__waterfall_row_svg_indicators__["b" /* makeIcon */])("plain", "No content");
    }
    else {
        return Object(__WEBPACK_IMPORTED_MODULE_2__waterfall_row_svg_indicators__["b" /* makeIcon */])(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["k" /* sanitizeAlphaNumeric */])(requestType), Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(requestType));
    }
}
/**
 * Flattens out a second level of `KvTuple` nesting (and removed empty and `undefined` entries)
 *
 * @param nestedKvPairs - nested `KvTuple`s (possibly sub-nested)
 */
const flattenKvTuple = (nestedKvPairs) => {
    const returnKv = [];
    nestedKvPairs.forEach((maybeKv) => {
        if (maybeKv === undefined || maybeKv.length === 0) {
            return;
        }
        if (Array.isArray(maybeKv[0])) {
            returnKv.push(...maybeKv);
            return;
        }
        returnKv.push(maybeKv);
    });
    return returnKv;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = flattenKvTuple;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(14);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hasHeader;
/* harmony export (immutable) */ __webpack_exports__["a"] = getHeader;
/* harmony export (immutable) */ __webpack_exports__["b"] = getHeaders;
/** Partial function that buils a filter predicate function */
const matchHeaderPartialFn = (lowercaseName) => {
    return (header) => header.name.toLowerCase() === lowercaseName;
};
/**
 * @param headers List of `Header` to search in
 * @param headerName Name of `Header` to find
 */
function hasHeader(headers, headerName) {
    const headerFilter = matchHeaderPartialFn(headerName.toLowerCase());
    return headers.some(headerFilter);
}
/** feature detection if browser supports `find` for arrays */
const browserHasFind = !!Array.prototype["find"];
/**
 * Returns the fist instances of `headerName` in `headers`
 * @param headers List of `Header` to search in
 * @param headerName Name of `Header` to find
 */
function getHeader(headers, headerName) {
    const headerFilter = matchHeaderPartialFn(headerName.toLowerCase());
    let firstItem;
    if (browserHasFind) {
        firstItem = headers["find"](headerFilter);
    }
    else {
        firstItem = headers.map(headerFilter).pop();
    }
    return firstItem ? firstItem.value : undefined;
}
/**
 * Returns all instances of `headerName` in `headers` as `KvTuple`
 * @param headers List of `Header` to search in
 * @param headerName Name of `Header` to find
 */
function getHeaders(headers, headerName) {
    const headerFilter = matchHeaderPartialFn(headerName.toLowerCase());
    return headers.filter(headerFilter).map((h) => [headerName, h.value]);
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = makeIcon;
/* harmony export (immutable) */ __webpack_exports__["a"] = getIndicatorIcons;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_misc__ = __webpack_require__(0);

/**
 * Convinience helper to create a new `Icon`
 *
 * _Width of icons is fixed_
 */
function makeIcon(type, title) {
    return { type, title, width: 20 };
}
/**
 * Gets the Indicators in Icon format
 * @param  {WaterfallEntry} entry
 * @returns {Icon[]}
 */
function getIndicatorIcons(entry) {
    const indicators = entry.responseDetails.indicators.filter((i) => i.displayType === "icon");
    if (indicators.length === 0) {
        return [];
    }
    const combinedTitle = [];
    let icon = "";
    const errors = indicators.filter((i) => i.type === "error");
    const warnings = indicators.filter((i) => i.type === "warning");
    const info = indicators.filter((i) => i.type !== "error" && i.type !== "warning");
    if (errors.length > 0) {
        combinedTitle.push(Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["f" /* pluralize */])("Error", errors.length) + ":\n " + errors.map((e) => e.title).join("\n"));
        icon = "error";
    }
    if (warnings.length > 0) {
        combinedTitle.push(Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["f" /* pluralize */])("Warning", warnings.length) + ":\n" + warnings.map((w) => w.title).join("\n"));
        icon = icon || "warning";
    }
    if (info.length > 0) {
        combinedTitle.push(`Info:\n${info.map((i) => i.title).join("\n")}`);
        if (!icon && info.length === 1) {
            icon = info[0].icon || info[0].type;
        }
        else {
            icon = icon || "info";
        }
    }
    return [makeIcon(icon, combinedTitle.join("\n"))];
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requestTypeToCssClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = timingTypeToCssClass;
/**
 * Convert a RequestType into a CSS class
 * @param {RequestType} requestType
 */
function requestTypeToCssClass(requestType) {
    return "block-" + requestType;
}
/**
 * Convert a TimingType into a CSS class
 * @param {TimingType} timingType
 */
function timingTypeToCssClass(timingType) {
    return "block-" + timingType;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_svg__ = __webpack_require__(2);


const translateYRegEx = /(?:translate)\(.+[, ]+(.+)\)/;
const tooltipMaxWidth = 200;
const getTranslateY = (str = "") => {
    str = (str === null) ? "" : str;
    const res = translateYRegEx.exec(str);
    if (res && res.length >= 2) {
        return parseInt(res[1], 10);
    }
    return 0;
};
/** static event-handler to show tooltip */
const onHoverInShowTooltip = (base, rectData, foreignEl) => {
    const innerDiv = foreignEl.querySelector(".tooltip-payload");
    const row = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["d" /* getParentByClassName */])(base, "row-item");
    const yTransformOffsest = getTranslateY(row.getAttribute("transform"));
    /** Base Y */
    const yInt = parseInt(base.getAttribute("y") || "", 10);
    /** Base X */
    const x = base.getAttribute("x") || "";
    /** X Positon of parent in Percent */
    const xPercInt = parseFloat(x);
    let offsetY = 50;
    /** Row's width in Pixel */
    const rowWidthPx = base.width.baseVal.value || base.getBoundingClientRect().width;
    /** current ratio: 1% ≙ `pxPerPerc` Pixel */
    const pxPerPerc = rowWidthPx / (rectData.width / rectData.unit);
    const percPerPx = (rectData.width / rectData.unit) / rowWidthPx;
    const isLeftOfRow = xPercInt > 50 && ((95 - xPercInt) * pxPerPerc < tooltipMaxWidth);
    innerDiv.innerHTML = rectData.label || "";
    // Disable animation for size-gathering
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["a" /* addClass */])(innerDiv, "no-anim");
    foreignEl.style.display = "block";
    innerDiv.style.opacity = "0.01";
    /** First heigth, floating might change this later, since with is not fixed */
    const initialHeight = innerDiv.clientHeight + 5;
    if (yInt + yTransformOffsest - initialHeight > 0) {
        offsetY = yTransformOffsest - initialHeight;
    }
    else {
        offsetY = yTransformOffsest + rectData.height + 10;
    }
    if (isLeftOfRow) {
        const newLeft = xPercInt - ((innerDiv.clientWidth + 5) * percPerPx);
        let leftOffset = parseInt(foreignEl.querySelector("body").style.left || "", 10);
        const ratio = 1 / (1 / 100 * (100 - leftOffset));
        leftOffset = ratio * leftOffset;
        if (newLeft > -leftOffset) {
            innerDiv.style.left = `${newLeft}%`;
        }
        else {
            // change value to not crop tooltip
            innerDiv.style.left = `${-leftOffset}%`;
        }
    }
    else {
        innerDiv.style.left = x;
    }
    foreignEl.setAttribute("y", `${yInt + offsetY}`);
    foreignEl.setAttribute("height", initialHeight.toString());
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["h" /* removeClass */])(innerDiv, "no-anim");
    innerDiv.style.opacity = "1";
    const diff = (innerDiv.clientHeight + 5) - initialHeight;
    if (diff !== 0) {
        // make adjustments if the initial height was wrong
        foreignEl.setAttribute("height", (initialHeight + diff).toString());
        foreignEl.setAttribute("y", `${yInt + offsetY - diff}`);
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = onHoverInShowTooltip;

const onHoverOutShowTooltip = (base) => {
    const holder = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["d" /* getParentByClassName */])(base, "water-fall-chart");
    const foreignEl = holder.querySelector(".tooltip");
    const innerDiv = foreignEl.querySelector(".tooltip-payload");
    foreignEl.style.display = "none";
    foreignEl.setAttribute("height", "250"); // set to high value
    innerDiv.style.opacity = "0";
};
/* harmony export (immutable) */ __webpack_exports__["c"] = onHoverOutShowTooltip;

/**
 * Creates the Tooltip base elements
 * @param {ChartOptions} options - Chart config/customization options
 */
const makeTooltip = (options) => {
    const leftColOffsetPerc = options.leftColumnWidth;
    const holder = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["i" /* newSvg */]("tooltip-holder", {
        width: "100%",
        x: "0",
        y: "0",
    });
    const foreignEl = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["d" /* newForeignObject */]({
        width: `100%`,
        x: "0",
        y: `${leftColOffsetPerc}%`,
    }, "tooltip", {
        display: "none",
    });
    const html = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["f" /* makeHtmlEl */])();
    const body = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["e" /* makeBodyEl */])({
        left: `${leftColOffsetPerc}%`,
        width: `${100 - leftColOffsetPerc}%`,
    }, `<div class="tooltip-payload" style="max-width: ${tooltipMaxWidth}px; opacity: 0;"></div>`);
    html.appendChild(body);
    foreignEl.appendChild(html);
    holder.appendChild(foreignEl);
    return holder;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = makeTooltip;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(19);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(13).enable();
  window.Promise = __webpack_require__(16);
}

// fetch() polyfill for making API calls.
__webpack_require__(17);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(18);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global);
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(6);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(6);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PerfCascade__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WithZipJs__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PerfCascade", function() { return __WEBPACK_IMPORTED_MODULE_1__PerfCascade__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WithZipJs", function() { return __WEBPACK_IMPORTED_MODULE_2__WithZipJs__["a"]; });
/* harmony default export */ __webpack_exports__["default"] = (function(_ref){var harData=_ref.harData;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__WithZipJs__["a" /* WithZipJs */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__PerfCascade__["a" /* PerfCascade */],{harData:harData}));});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfCascade; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perf_cascade__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perf_cascade_dist_perf_cascade_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perf_cascade_dist_perf_cascade_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_perf_cascade_dist_perf_cascade_css__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PerfCascade=function(_Component){_inherits(PerfCascade,_Component);function PerfCascade(props){_classCallCheck(this,PerfCascade);var _this=_possibleConstructorReturn(this,(PerfCascade.__proto__||Object.getPrototypeOf(PerfCascade)).call(this,props));_this.render=function(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{ref:_this.myRef});};_this.shouldComponentUpdate=function(){return false;};_this.componentDidMount=function(){var perfCascadeSvg=Object(__WEBPACK_IMPORTED_MODULE_1_perf_cascade__["a" /* fromHar */])(_this.props.harData);_this.myRef.current.appendChild(perfCascadeSvg);};_this.myRef=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();return _this;}return PerfCascade;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_main__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_main__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_file_reader__ = __webpack_require__(40);
/* unused harmony namespace reexport */




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeLegend */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromHar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_parse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__legend_legend__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paging_paging__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transformers_har__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__waterfall_svg_chart__ = __webpack_require__(29);





/** default options to use if not set in `options` parameter */
const defaultChartOptions = {
    leftColumnWidth: 25,
    legendHolder: undefined,
    onParsed: undefined,
    pageSelector: undefined,
    rowHeight: 23,
    selectedPage: 0,
    showAlignmentHelpers: true,
    showIndicatorIcons: true,
    showMimeTypeIcon: true,
};
/** default options to use if not set in `options` parameter */
const defaultHarTransformerOptions = {
    showUserTiming: false,
    showUserTimingEndMarker: false,
};
/**
 * Creates the html for diagrams legend
 * @returns {HTMLUListElement} - Legend `<ul>` element
 */
function makeLegend() {
    return Object(__WEBPACK_IMPORTED_MODULE_1__legend_legend__["a" /* makeLegend */])();
}
function PerfCascade(waterfallDocsData, chartOptions = {}) {
    if (chartOptions["leftColumnWith"] !== undefined) {
        // tslint:disable-next-line: no-console
        console.warn("Depreciation Warning: The option 'leftColumnWith' has been fixed to 'leftColumnWidth', " +
            "please update your code as this will get deprecated in the future");
        chartOptions.leftColumnWidth = chartOptions["leftColumnWith"];
    }
    const options = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_parse__["n" /* validateOptions */])(Object.assign({}, defaultChartOptions, chartOptions));
    // setup paging helper
    const paging = new __WEBPACK_IMPORTED_MODULE_2__paging_paging__["a" /* default */](waterfallDocsData, options.selectedPage);
    let doc = Object(__WEBPACK_IMPORTED_MODULE_4__waterfall_svg_chart__["a" /* createWaterfallSvg */])(paging.getSelectedPage(), options);
    // page update behaviour
    paging.onPageUpdate((_pageIndex, pageDoc) => {
        const el = doc.parentElement;
        const newDoc = Object(__WEBPACK_IMPORTED_MODULE_4__waterfall_svg_chart__["a" /* createWaterfallSvg */])(pageDoc, options);
        el.replaceChild(newDoc, doc);
        doc = newDoc;
    });
    if (options.pageSelector) {
        paging.initPagingSelectBox(options.pageSelector);
    }
    if (options.legendHolder) {
        options.legendHolder.innerHTML = "";
        options.legendHolder.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__legend_legend__["a" /* makeLegend */])());
    }
    return doc;
}
/**
 * Create new PerfCascade from HAR data
 * @param  {Har} harData - HAR object
 * @param  {ChartOptions} options - PerfCascade options object
 * @returns {SVGSVGElement} - Chart SVG Element
 */
function fromHar(harData, options = {}) {
    const harTransformerOptions = Object.assign({}, defaultHarTransformerOptions, options);
    const data = __WEBPACK_IMPORTED_MODULE_3__transformers_har__["a" /* transformDoc */](harData, harTransformerOptions);
    if (typeof options.onParsed === "function") {
        options.onParsed(data);
    }
    return PerfCascade(data, options);
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeLegend;
/**
 * Creates the html for diagrams legend
 */
function makeLegend() {
    const ulNode = document.createElement("ul");
    ulNode.className = "resource-legend";
    ulNode.innerHTML = `
        <li class="legend-blocked" title="Time spent in a queue waiting for a network connection.">Blocked</li>
        <li class="legend-dns" title="DNS resolution time.">DNS</li>
        <li class="legend-connect" title="Time required to create TCP connection.">Connect</li>
        <li class="legend-ssl" title="Time required for SSL/TLS negotiation.">SSL (TLS)</li>
        <li class="legend-send" title="Time required to send HTTP request to the server.">Send</li>
        <li class="legend-wait" title="Waiting for a response from the server.">Wait</li>
        <li class="legend-receive"
        title="Time required to read entire response from the server (or cache).">Receive</li>`;
    return ulNode;
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);

/** Class to keep track of run of a multi-run har is beeing shown  */
class Paging {
    constructor(doc, selectedPageIndex = 0) {
        this.doc = doc;
        this.selectedPageIndex = selectedPageIndex;
        this.onPageUpdateCbs = [];
        if (selectedPageIndex >= this.doc.pages.length) {
            // fall back to last item if doc has too few pages.
            this.selectedPageIndex = this.doc.pages.length - 1;
        }
    }
    /**
     * Returns number of pages
     * @returns number - number of pages in current doc
     */
    getPageCount() {
        return this.doc.pages.length;
    }
    /**
     * Returns selected pages
     * @returns WaterfallData - currently selected page
     */
    getSelectedPage() {
        return this.doc.pages[this.selectedPageIndex];
    }
    /**
     * Returns index of currently selected page
     * @returns number - index of current page (0 based)
     */
    getSelectedPageIndex() {
        return this.selectedPageIndex;
    }
    /**
     * Update which pageIndex is currently update.
     * Published `onPageUpdate`
     * @param  {number} pageIndex
     */
    setSelectedPageIndex(pageIndex) {
        if (this.selectedPageIndex === pageIndex) {
            return;
        }
        if (pageIndex < 0 || pageIndex >= this.getPageCount()) {
            throw new Error("Page does not exist - Invalid pageIndex selected");
        }
        this.selectedPageIndex = pageIndex;
        const selectedPage = this.doc.pages[this.selectedPageIndex];
        this.onPageUpdateCbs.forEach((cb) => {
            cb(this.selectedPageIndex, selectedPage);
        });
    }
    /**
     * Register subscriber callbacks to be called when the pageindex updates
     * @param  {OnPagingCb} cb
     * @returns number - index of the callback
     */
    onPageUpdate(cb) {
        if (this.getPageCount() > 1) {
            return this.onPageUpdateCbs.push(cb);
        }
        return undefined;
    }
    /**
     * hooks up select box with paging options
     * @param  {HTMLSelectElement} selectbox
     */
    initPagingSelectBox(selectbox) {
        const self = this;
        if (this.getPageCount() <= 1) {
            selectbox.style.display = "none";
            return;
        }
        // remove all existing options, like placeholders
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["g" /* removeChildren */])(selectbox);
        this.doc.pages.forEach((p, i) => {
            const option = new Option(p.title, i.toString(), false, i === this.selectedPageIndex);
            selectbox.add(option);
        });
        selectbox.style.display = "block";
        selectbox.addEventListener("change", (evt) => {
            const val = parseInt(evt.target.value, 10);
            self.setSelectedPageIndex(val);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Paging;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transformDoc;
/* unused harmony export transformPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_parse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__har_heuristics__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__har_tabs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__(5);





/**
 * Transforms the full HAR doc, including all pages
 * @param  {Har} harData - raw HAR object
 * @param {HarTransformerOptions} options - HAR-parser-specific options
 * @returns WaterfallDocs
 */
function transformDoc(harData, options) {
    // make sure it's the *.log base node
    const data = (harData["log"] !== undefined ? harData["log"] : harData);
    const pages = getPages(data);
    return {
        pages: pages.map((_page, i) => transformPage(data, i, options)),
    };
}
/**
 * Converts an HAR `Entry` into PerfCascads `WaterfallEntry`
 *
 * @param  {Entry} entry
 * @param  {number} index - resource entry index
 * @param  {number} startRelative - entry start time relative to the document in ms
 * @param  {boolean} isTLS
 */
function toWaterFallEntry(entry, index, startRelative, isTLS) {
    startRelative = Math.round(startRelative);
    const endRelative = Math.round(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["m" /* toInt */])(entry._all_end) || (startRelative + entry.time));
    const requestType = Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["g" /* mimeToRequestType */])(entry.response.content.mimeType);
    const indicators = Object(__WEBPACK_IMPORTED_MODULE_2__har_heuristics__["a" /* collectIndicators */])(entry, index, isTLS, requestType);
    const responseDetails = createResponseDetails(entry, indicators);
    return Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* createWaterfallEntry */])(entry.request.url, startRelative, endRelative, buildDetailTimingBlocks(startRelative, entry), responseDetails, Object(__WEBPACK_IMPORTED_MODULE_3__har_tabs__["a" /* makeTabs */])(entry, (index + 1), requestType, startRelative, endRelative, indicators));
}
/** retuns the page or a mock page object */
const getPages = (data) => {
    if (data.pages && data.pages.length > 0) {
        return data.pages;
    }
    const statedTime = data.entries.reduce((earliest, curr) => {
        const currDate = Date.parse(curr.startedDateTime);
        const earliestDate = Date.parse(earliest);
        return earliestDate < currDate ? earliest : curr.startedDateTime;
    }, data.entries[0].startedDateTime);
    return [{
            id: "",
            pageTimings: {},
            startedDateTime: statedTime,
            title: "n/a",
        }];
};
/**
 * Transforms a HAR object into the format needed to render the PerfCascade
 * @param  {Har} harData - HAR document
 * @param {number=0} pageIndex - page to parse (for multi-page HAR)
 * @param {ChartOptions} options - HAR-parser-specific options
 * @returns WaterfallData
 */
function transformPage(harData, pageIndex = 0, options) {
    // make sure it's the *.log base node
    const data = (harData["log"] !== undefined ? harData["log"] : harData);
    const pages = getPages(data);
    const currPage = pages[pageIndex];
    if (!currPage.startedDateTime) {
        throw new TypeError(`Invalid HAR document: "log.pages[${pageIndex}].startedDateTime" is not set`);
    }
    const pageStartTime = new Date(currPage.startedDateTime).getTime();
    const pageTimings = currPage.pageTimings;
    let doneTime = 0;
    const isTLS = Object(__WEBPACK_IMPORTED_MODULE_2__har_heuristics__["b" /* documentIsSecure */])(data.entries);
    const entries = data.entries
        .filter((entry) => {
        // filter inline data
        if (entry.request.url.indexOf("data:") === 0 || entry.request.url.indexOf("javascript:") === 0) {
            return false;
        }
        if (pages.length === 1 && currPage.id === "") {
            return true;
        }
        return entry.pageref === currPage.id;
    })
        .map((entry, index) => {
        const startRelative = new Date(entry.startedDateTime).getTime() - pageStartTime;
        doneTime = Math.max(doneTime, startRelative + entry.time);
        return toWaterFallEntry(entry, index, startRelative, isTLS);
    });
    const marks = getMarks(pageTimings, currPage, options);
    // if marks happens later than doneTime, increase the doneTime
    marks.forEach((mark) => {
        if (mark.startTime > doneTime) {
            doneTime = mark.startTime;
        }
    });
    // if we configured fixed length from the outside, use that!
    if (options.fixedLengthMs) {
        doneTime = options.fixedLengthMs;
    }
    // Add 100ms margin to make room for labels
    doneTime += 100;
    return {
        docIsTLS: isTLS,
        durationMs: doneTime,
        entries,
        marks,
        title: currPage.title,
    };
}
/**
 * Extract all `Mark`s based on `PageTiming` and `UserTiming`
 * @param {PageTiming} pageTimings - HARs `PageTiming` object
 * @param {Page} currPage - active page
 * @param {ChartOptions} options - HAR options
 */
const getMarks = (pageTimings, currPage, options) => {
    if (pageTimings === undefined) {
        return [];
    }
    const sortFn = (a, b) => a.startTime - b.startTime;
    const marks = Object.keys(pageTimings)
        .filter((k) => (typeof pageTimings[k] === "number" && pageTimings[k] >= 0))
        .map((k) => ({
        name: `${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(k.replace(/^[_]/, ""))} (${Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["h" /* roundNumber */])(pageTimings[k], 0)} ms)`,
        startTime: pageTimings[k],
    }));
    if (!options.showUserTiming) {
        return marks.sort(sortFn);
    }
    return getUserTimimngs(currPage, options)
        .concat(marks)
        .sort(sortFn);
};
/**
 * Extract all `Mark`s based on `UserTiming`
 * @param {Page} currPage - active page
 * @param {ChartOptions} options - HAR options
 */
const getUserTimimngs = (currPage, options) => {
    const baseFilter = options.showUserTimingEndMarker ?
        (k) => k.indexOf("_userTime.") === 0 :
        (k) => k.indexOf("_userTime.") === 0 && k.indexOf("_userTime.endTimer-") !== 0;
    let filterFn = baseFilter;
    if (Array.isArray(options.showUserTiming)) {
        const findTimings = options.showUserTiming;
        filterFn = (k) => (baseFilter(k) &&
            findTimings.indexOf(k.replace(/^_userTime\./, "")) >= 0);
    }
    const findName = /^_userTime\.((?:startTimer-)?(.+))$/;
    const extractUserTiming = (k) => {
        let name;
        let fullName;
        let duration;
        [, fullName, name] = findName.exec(k) || [, undefined, undefined];
        fullName = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(fullName);
        name = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(name);
        if (fullName !== name && currPage[`_userTime.endTimer-${name}`]) {
            duration = currPage[`_userTime.endTimer-${name}`] - currPage[k];
            return {
                duration,
                name: `${options.showUserTimingEndMarker ? fullName : name} (${currPage[k]} - ${currPage[k] + duration} ms)`,
                startTime: currPage[k],
            };
        }
        return {
            name: fullName,
            startTime: currPage[k],
        };
    };
    return Object.keys(currPage)
        .filter(filterFn)
        .map(extractUserTiming);
};
/**
 * Create `WaterfallEntry`s to represent the subtimings of a request
 * ("blocked", "dns", "connect", "send", "wait", "receive")
 * @param  {number} startRelative - Number of milliseconds since page load started (`page.startedDateTime`)
 * @param  {Entry} harEntry
 * @returns Array
 */
const buildDetailTimingBlocks = (startRelative, harEntry) => {
    const t = harEntry.timings;
    const types = ["blocked", "dns", "connect", "send", "wait", "receive"];
    return types.reduce((collect, key) => {
        const time = getTimePair(key, harEntry, collect, startRelative);
        if (time.end && time.start >= time.end) {
            return collect;
        }
        // special case for 'connect' && 'ssl' since they share time
        // http://www.softwareishard.com/blog/har-12-spec/#timings
        if (key === "connect" && t.ssl && t.ssl !== -1) {
            const sslStart = parseInt(`${harEntry[`_ssl_start`]}`, 10) || time.start;
            const sslEnd = parseInt(`${harEntry[`_ssl_end`]}`, 10) || time.start + t.ssl;
            const connectStart = (!!parseInt(`${harEntry[`_ssl_start`]}`, 10)) ? time.start : sslEnd;
            return collect
                .concat([Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["b" /* createWaterfallEntryTiming */])("ssl", Math.round(sslStart), Math.round(sslEnd))])
                .concat([Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["b" /* createWaterfallEntryTiming */])(key, Math.round(connectStart), Math.round(time.end))]);
        }
        return collect.concat([Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["b" /* createWaterfallEntryTiming */])(key, Math.round(time.start), Math.round(time.end))]);
    }, []);
};
/**
 * Returns Object containing start and end time of `collect`
 *
 * @param  {string} key
 * @param  {Entry} harEntry
 * @param  {WaterfallEntry[]} collect
 * @param  {number} startRelative - Number of milliseconds since page load started (`page.startedDateTime`)
 * @returns {Object}
 */
const getTimePair = (key, harEntry, collect, startRelative) => {
    let wptKey;
    switch (key) {
        case "wait":
            wptKey = "ttfb";
            break;
        case "receive":
            wptKey = "download";
            break;
        default: wptKey = key;
    }
    const preciseStart = parseInt(harEntry[`_${wptKey}_start`], 10);
    const preciseEnd = parseInt(harEntry[`_${wptKey}_end`], 10);
    const start = isNaN(preciseStart) ?
        ((collect.length > 0) ? collect[collect.length - 1].end : startRelative) : preciseStart;
    const end = isNaN(preciseEnd) ? (start + harEntry.timings[key]) : preciseEnd;
    return {
        end: Math.round(end),
        start: Math.round(start),
    };
};
/**
 * Helper to create a requests `WaterfallResponseDetails`
 *
 * @param  {Entry} entry
 * @param  {WaterfallEntryIndicator[]} indicators
 * @returns WaterfallResponseDetails
 */
const createResponseDetails = (entry, indicators) => {
    const requestType = Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["g" /* mimeToRequestType */])(entry.response.content.mimeType);
    const statusClean = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["m" /* toInt */])(entry.response.status) || 0;
    return {
        icon: Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["e" /* makeMimeTypeIcon */])(statusClean, entry.response.statusText, requestType, entry.response.redirectURL),
        indicators,
        requestType,
        rowClass: Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["f" /* makeRowCssClasses */])(statusClean),
        statusCode: statusClean,
    };
};


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = documentIsSecure;
/* harmony export (immutable) */ __webpack_exports__["a"] = collectIndicators;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_har__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_parse__ = __webpack_require__(3);
/**
 * Heuristics used at parse-time for HAR data
 */



function isCompressible(entry, requestType) {
    const minCompressionSize = 1000;
    // small responses
    if (entry.response.bodySize < minCompressionSize) {
        return false;
    }
    if (__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["a" /* contains */](["html", "css", "javascript", "svg", "plain"], requestType)) {
        return true;
    }
    const mime = entry.response.content.mimeType;
    const compressableMimes = ["application/vnd.ms-fontobject",
        "application/x-font-opentype",
        "application/x-font-truetype",
        "application/x-font-ttf",
        "application/xml",
        "font/eot",
        "font/opentype",
        "font/otf",
        "image/vnd.microsoft.icon"];
    if (__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["a" /* contains */](["text"], mime.split("/")[0]) || __WEBPACK_IMPORTED_MODULE_1__helpers_misc__["a" /* contains */](compressableMimes, mime.split(";")[0])) {
        return true;
    }
    return false;
}
/**
 * Checks if response could be cacheable, but isn't due to lack of cache header.
 * @param {Entry} entry -  the waterfall entry.
 * @returns {boolean}
 */
function hasCacheIssue(entry) {
    if (!entry.request.method || entry.request.method.toLowerCase() !== "get") {
        return false;
    }
    if (entry.response.status === 204 || !__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["c" /* isInStatusCodeRange */](entry.response.status, 200, 299)) {
        return false;
    }
    const headers = entry.response.headers;
    return !(Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["c" /* hasHeader */])(headers, "Cache-Control") || Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["c" /* hasHeader */])(headers, "Expires"));
}
function hasCompressionIssue(entry, requestType) {
    const headers = entry.response.headers;
    return (!Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["c" /* hasHeader */])(headers, "Content-Encoding") && isCompressible(entry, requestType));
}
/** Checks if the ressource uses https */
function isSecure(entry) {
    return entry.request.url.indexOf("https://") === 0;
}
function isInitialRedirect(entry, index) {
    return index === 0 && !!entry.response.redirectURL;
}
function isPush(entry) {
    if (entry._was_pushed === undefined || entry._was_pushed === null) {
        return false;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__helpers_parse__["m" /* toInt */])(entry._was_pushed) === 1;
}
/**
 * Check if the document (disregarding any initial http->https redirects) is loaded over a secure connection.
 * @param {Entry[]} data - the waterfall entries data.
 * @returns {boolean}
 */
function documentIsSecure(data) {
    const rootDocument = data.filter((e) => !e.response.redirectURL)[0];
    // check if request is a redirect chain
    if (rootDocument === undefined) {
        return (data.length > 0) ? isSecure(data[0]) : false;
    }
    return isSecure(rootDocument);
}
/** Scans `entry` for noteworthy issues or infos and highlights them */
function collectIndicators(entry, index, docIsTLS, requestType) {
    // const harEntry = entry;
    const output = [];
    if (isPush(entry)) {
        output.push({
            description: "Response was pushed by the server using HTTP2 push.",
            displayType: "inline",
            icon: "push",
            id: "push",
            title: "Response was pushed by the server",
            type: "info",
        });
    }
    if (docIsTLS && !(isSecure(entry) || isInitialRedirect(entry, index))) {
        output.push({
            description: "Insecure request, it should use HTTPS.",
            displayType: "icon",
            id: "noTls",
            title: "Insecure Connection",
            type: "error",
        });
    }
    if (hasCacheIssue(entry)) {
        output.push({
            description: "The response is not allow to be cached on the client. Consider setting 'Cache-Control' headers.",
            displayType: "icon",
            id: "noCache",
            title: "Response not cached",
            type: "error",
        });
    }
    if (hasCompressionIssue(entry, requestType)) {
        output.push({
            description: "The response is not compressed. Consider enabling HTTP compression on your server.",
            displayType: "icon",
            id: "noGzip",
            title: "no gzip",
            type: "error",
        });
    }
    if (!entry.response.content.mimeType &&
        __WEBPACK_IMPORTED_MODULE_1__helpers_misc__["c" /* isInStatusCodeRange */](entry.response.status, 200, 299) &&
        entry.response.status !== 204) {
        output.push({
            description: "Response doesn't contain a 'Content-Type' header.",
            displayType: "icon",
            id: "warning",
            title: "No MIME Type defined",
            type: "warning",
        });
    }
    return output;
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeTabs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_parse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extract_details_keys__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(5);




/**
 * Generates the tabs for the details-overlay of a `Entry`
 * @param  {Entry} entry - the entry to parse
 * @param  {number} requestID
 * @param  {RequestType} requestType
 * @param  {number} startRelative - start time in ms, relative to the page's start time
 * @param  {number} endRelative - end time in ms, relative to the page's start time
 * @param  {number} detailsHeight - height of the details-overlay
 * @param  {WaterfallEntryIndicator[]} indicators
 * @returns WaterfallEntryTab
 */
function makeTabs(entry, requestID, requestType, startRelative, endRelative, indicators) {
    const tabs = [];
    const tabsData = Object(__WEBPACK_IMPORTED_MODULE_2__extract_details_keys__["a" /* getKeys */])(entry, requestID, startRelative, endRelative);
    tabs.push(makeGeneralTab(tabsData.general, indicators));
    tabs.push(makeRequestTab(tabsData.request, tabsData.requestHeaders));
    tabs.push(makeResponseTab(tabsData.response, tabsData.responseHeaders));
    tabs.push(makeWaterfallEntryTab("Timings", Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(tabsData.timings, true)));
    tabs.push(makeRawData(entry));
    if (requestType === "image") {
        tabs.push(makeImgTab(entry));
    }
    return tabs.filter((t) => t !== undefined);
}
/** Helper to create `WaterfallEntryTab` object literal  */
function makeWaterfallEntryTab(title, content, tabClass = "") {
    return {
        content,
        tabClass,
        title,
    };
}
/** Helper to create `WaterfallEntryTab` object literal that is evaluated lazyly at runtime (e.g. for performance) */
function makeLazyWaterfallEntryTab(title, renderContent, tabClass = "") {
    return {
        renderContent,
        tabClass,
        title,
    };
}
/** General tab with warnings etc. */
function makeGeneralTab(generalData, indicators) {
    const mainContent = Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(generalData);
    if (indicators.length === 0) {
        return makeWaterfallEntryTab("General", mainContent);
    }
    const general = `<h2>General</h2>\n<dl>${mainContent}<dl>`;
    let content = "";
    // Make indicator sections
    const errors = indicators
        .filter((i) => i.type === "error")
        .map((i) => [i.title, i.description]);
    const warnings = indicators
        .filter((i) => i.type === "warning")
        .map((i) => [i.title, i.description]);
    // all others
    const info = indicators
        .filter((i) => i.type !== "error" && i.type !== "warning")
        .map((i) => [i.title, i.description]);
    if (errors.length > 0) {
        content += `<h2 class="no-boder">${Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["f" /* pluralize */])("Error", errors.length)}</h2>
    <dl>${Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(errors)}</dl>`;
    }
    if (warnings.length > 0) {
        content += `<h2 class="no-boder">${Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["f" /* pluralize */])("Warning", warnings.length)}</h2>
    <dl>${Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(warnings)}</dl>`;
    }
    if (info.length > 0) {
        content += `<h2 class="no-boder">Info</h2>
    <dl>${Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(info)}</dl>`;
    }
    return makeWaterfallEntryTab("General", content + general);
}
function makeRequestTab(request, requestHeaders) {
    const content = `<dl>
      ${Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(request)}
    </dl>
    <h2>All Request Headers</h2>
    <dl>
      ${Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(requestHeaders)}
    </dl>`;
    return makeWaterfallEntryTab("Request", content);
}
function makeResponseTab(respose, responseHeaders) {
    const content = `<dl>
      ${Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(respose)}
    </dl>
    <h2>All Response Headers</h2>
    <dl>
      ${Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["d" /* makeDefinitionList */])(responseHeaders)}
    </dl>`;
    return makeWaterfallEntryTab("Response", content);
}
function makeRawData(entry) {
    return makeLazyWaterfallEntryTab("Raw Data", () => `<pre><code>${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(JSON.stringify(entry, null, 2))}</code></pre>`, "raw-data");
}
/** Image preview tab */
function makeImgTab(entry) {
    return makeLazyWaterfallEntryTab("Preview", (detailsHeight) => `<img class="preview" style="max-height:${(detailsHeight - 100)}px"
 data-src="${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["l" /* sanitizeUrlForLink */])(entry.request.url)}" />`);
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getKeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_har__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_parse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(5);



const byteSizeProperty = (title, input) => {
    return [title, Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(input, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["j" /* parsePositive */], __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["b" /* formatBytes */])];
};
const countProperty = (title, input) => {
    return [title, Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(input, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["j" /* parsePositive */])];
};
/** Predicate to filter out invalid or empty `KvTuple` */
const notEmpty = (kv) => {
    return kv.length > 1 && kv[1] !== undefined && kv[1] !== "";
};
function parseGeneralDetails(entry, startRelative, requestID) {
    return [
        ["Request Number", `#${requestID}`],
        ["Started", new Date(entry.startedDateTime).toLocaleString() + ((startRelative > 0) ?
                " (" + Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["d" /* formatMilliseconds */])(startRelative) + " after page request started)" : "")],
        ["Duration", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["d" /* formatMilliseconds */])(entry.time)],
        ["Error/Status Code", entry.response.status + " " + entry.response.statusText],
        ["Server IPAddress", entry.serverIPAddress],
        ["Connection", entry.connection],
        ["Browser Priority", entry._priority || entry._initialPriority],
        ["Was pushed", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(entry._was_pushed, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["j" /* parsePositive */], () => "yes")],
        ["Initiator (Loaded by)", entry._initiator],
        ["Initiator Line", entry._initiator_line],
        ["Initiator Type", entry._initiator_type],
        ["Host", Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["a" /* getHeader */])(entry.request.headers, "Host")],
        ["IP", entry._ip_addr],
        ["Client Port", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(entry._client_port, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["j" /* parsePositive */])],
        ["Expires", entry._expires],
        ["Cache Time", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(entry._cache_time, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["j" /* parsePositive */], __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["e" /* formatSeconds */])],
        ["CDN Provider", entry._cdn_provider],
        byteSizeProperty("ObjectSize", entry._objectSize),
        byteSizeProperty("Bytes In (downloaded)", entry._bytesIn),
        byteSizeProperty("Bytes Out (uploaded)", entry._bytesOut),
        byteSizeProperty("JPEG Scan Count", entry._jpeg_scan_count),
        byteSizeProperty("Gzip Total", entry._gzip_total),
        byteSizeProperty("Gzip Save", entry._gzip_save),
        byteSizeProperty("Minify Total", entry._minify_total),
        byteSizeProperty("Minify Save", entry._minify_save),
        byteSizeProperty("Image Total", entry._image_total),
        byteSizeProperty("Image Save", entry._image_save),
    ].filter(notEmpty);
}
function parseRequestDetails(harEntry) {
    const request = harEntry.request;
    const stringHeader = (name) => Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["b" /* getHeaders */])(request.headers, name);
    return Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["c" /* flattenKvTuple */])([
        ["Method", request.method],
        ["HTTP Version", request.httpVersion],
        byteSizeProperty("Bytes Out (uploaded)", harEntry._bytesOut),
        byteSizeProperty("Headers Size", request.headersSize),
        byteSizeProperty("Body Size", request.bodySize),
        ["Comment", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(request.comment, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["h" /* parseNonEmpty */])],
        stringHeader("User-Agent"),
        stringHeader("Host"),
        stringHeader("Connection"),
        stringHeader("Accept"),
        stringHeader("Accept-Encoding"),
        stringHeader("Expect"),
        stringHeader("Forwarded"),
        stringHeader("If-Modified-Since"),
        stringHeader("If-Range"),
        stringHeader("If-Unmodified-Since"),
        countProperty("Querystring parameters count", request.queryString.length),
        countProperty("Cookies count", request.cookies.length),
    ]).filter(notEmpty);
}
function parseResponseDetails(entry) {
    const response = entry.response;
    const content = response.content;
    const headers = response.headers;
    const stringHeader = (title, name = title) => {
        return Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["b" /* getHeaders */])(headers, name);
    };
    const dateHeader = (name) => {
        const header = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["a" /* getHeader */])(headers, name);
        return [name, Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(header, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["g" /* parseDate */], __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["c" /* formatDateLocalized */])];
    };
    const contentLength = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["a" /* getHeader */])(headers, "Content-Length");
    let contentSize;
    if (content.size !== -1 && contentLength !== content.size.toString()) {
        contentSize = content.size;
    }
    let contentType = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["a" /* getHeader */])(headers, "Content-Type");
    if (entry._contentType && entry._contentType !== contentType) {
        contentType = contentType + " | " + entry._contentType;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["c" /* flattenKvTuple */])([
        ["Status", response.status + " " + response.statusText],
        ["HTTP Version", response.httpVersion],
        byteSizeProperty("Bytes In (downloaded)", entry._bytesIn),
        byteSizeProperty("Headers Size", response.headersSize),
        byteSizeProperty("Body Size", response.bodySize),
        ["Content-Type", contentType],
        stringHeader("Cache-Control"),
        stringHeader("Content-Encoding"),
        dateHeader("Expires"),
        dateHeader("Last-Modified"),
        stringHeader("Pragma"),
        byteSizeProperty("Content-Length", contentLength),
        byteSizeProperty("Content Size", contentSize),
        byteSizeProperty("Content Compression", content.compression),
        stringHeader("Connection"),
        stringHeader("ETag"),
        stringHeader("Accept-Patch"),
        ["Age", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(Object(__WEBPACK_IMPORTED_MODULE_0__helpers_har__["a" /* getHeader */])(headers, "Age"), __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["i" /* parseNonNegative */], __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["e" /* formatSeconds */])],
        stringHeader("Allow"),
        stringHeader("Content-Disposition"),
        stringHeader("Location"),
        stringHeader("Strict-Transport-Security"),
        stringHeader("Trailer (for chunked transfer coding)", "Trailer"),
        stringHeader("Transfer-Encoding"),
        stringHeader("Upgrade"),
        stringHeader("Vary"),
        stringHeader("Timing-Allow-Origin"),
        ["Redirect URL", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(response.redirectURL, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["h" /* parseNonEmpty */])],
        ["Comment", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(response.comment, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["h" /* parseNonEmpty */])],
    ]).filter(notEmpty);
}
function parseTimings(entry, start, end) {
    const timings = entry.timings;
    const optionalTiming = (timing) => Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["f" /* parseAndFormat */])(timing, __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["i" /* parseNonNegative */], __WEBPACK_IMPORTED_MODULE_1__helpers_parse__["d" /* formatMilliseconds */]);
    const total = (typeof start !== "number" || typeof end !== "number") ? undefined : (end - start);
    let connectVal = optionalTiming(timings.connect);
    if (timings.ssl && timings.ssl > 0 && timings.connect) {
        // SSL time is also included in the connect field (to ensure backward compatibility with HAR 1.1).
        connectVal = `${connectVal} (without TLS: ${optionalTiming(timings.connect - timings.ssl)})`;
    }
    return [
        ["Total", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["d" /* formatMilliseconds */])(total)],
        ["Blocked", optionalTiming(timings.blocked)],
        ["DNS", optionalTiming(timings.dns)],
        ["Connect", connectVal],
        ["SSL (TLS)", optionalTiming(timings.ssl)],
        ["Send", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["d" /* formatMilliseconds */])(timings.send)],
        ["Wait", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["d" /* formatMilliseconds */])(timings.wait)],
        ["Receive", Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["d" /* formatMilliseconds */])(timings.receive)],
    ].filter(notEmpty);
}
/**
 * Data to show in overlay tabs
 * @param  {number} requestID - request number
 * @param  {WaterfallEntry} entry
 */
function getKeys(entry, requestID, startRelative, endRelative) {
    const requestHeaders = entry.request.headers;
    const responseHeaders = entry.response.headers;
    const headerToKvTuple = (header) => [header.name, header.value];
    return {
        general: parseGeneralDetails(entry, startRelative, requestID),
        request: parseRequestDetails(entry),
        requestHeaders: requestHeaders.map(headerToKvTuple).filter(notEmpty),
        response: parseResponseDetails(entry),
        responseHeaders: responseHeaders.map(headerToKvTuple).filter(notEmpty),
        timings: parseTimings(entry, startRelative, endRelative),
    };
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createWaterfallSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_svg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transformers_styling_converters__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_overlay_overlay_manager__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_overlay_pub_sub__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__row_svg_row__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__row_svg_tooltip__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sub_components_svg_alignment_helper__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sub_components_svg_general_components__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sub_components_svg_marks__ = __webpack_require__(39);









/**
 * Get a string that's as wide, or wider than any number from 0-n.
 * @param {number} n the highest number that should fit within the returned string's width.
 * @returns {string}
 */
function getWidestDigitString(n) {
    const numDigits = Math.floor((Math.log(n) / Math.LN10)) + 1;
    let s = "";
    for (let i = 0; i < numDigits; i++) {
        // No number should take more horizontal space than "0" does.
        s += "0";
    }
    return s;
}
/**
 * Calculate the height of the SVG chart in px
 * @param {Mark[]}       marks      [description]
 * @param  {number} diagramHeight
 * @returns Number
 */
function getSvgHeight(marks, diagramHeight) {
    const maxMarkTextLength = marks.reduce((currMax, currValue) => {
        const attributes = { x: 0, y: 0 };
        return Math.max(currMax, __WEBPACK_IMPORTED_MODULE_0__helpers_svg__["a" /* getNodeTextWidth */](__WEBPACK_IMPORTED_MODULE_0__helpers_svg__["j" /* newTextEl */](currValue.name, attributes), true));
    }, 0);
    return Math.floor(diagramHeight + maxMarkTextLength + 35);
}
/**
 * Intitializes the context object
 * @param {WaterfallData} data - Object containing the setup parameter
 * @param {ChartOptions} options - Chart config/customization options
 * @param {WaterfallEntry[]} entriesToShow - Filtered array of entries that will be rendered
 * @return {Context} Context object
 */
function createContext(data, options, entriesToShow) {
    const unit = data.durationMs / 100;
    const diagramHeight = (entriesToShow.length + 1) * options.rowHeight;
    const context = {
        diagramHeight,
        options,
        pubSub: new __WEBPACK_IMPORTED_MODULE_3__details_overlay_pub_sub__["a" /* PubSub */](),
        unit,
    };
    // `overlayManager` needs the `context` reference, so it's attached later
    return Object.assign({}, context, { overlayManager: new __WEBPACK_IMPORTED_MODULE_2__details_overlay_overlay_manager__["a" /* default */](context) });
}
/**
 * Entry point to start rendering the full waterfall SVG
 * @param {WaterfallData} data - Object containing the setup parameter
 * @param {ChartOptions} options - Chart config/customization options
 * @return {SVGSVGElement} - SVG Element ready to render
 */
function createWaterfallSvg(data, options) {
    // constants
    const entriesToShow = data.entries
        .filter((entry) => (typeof entry.start === "number" && typeof entry.total === "number"))
        .sort((a, b) => (a.start || 0) - (b.start || 0));
    /** Holder of request-details overlay */
    const overlayHolder = __WEBPACK_IMPORTED_MODULE_0__helpers_svg__["e" /* newG */]("overlays");
    /** Holds all rows */
    const rowHolder = __WEBPACK_IMPORTED_MODULE_0__helpers_svg__["e" /* newG */]("rows-holder");
    const context = createContext(data, options, entriesToShow);
    /** full height of the SVG chart in px */
    const chartHolderHeight = getSvgHeight(data.marks, context.diagramHeight);
    /** Main SVG Element that holds all data */
    const timeLineHolder = __WEBPACK_IMPORTED_MODULE_0__helpers_svg__["i" /* newSvg */]("water-fall-chart", {
        height: chartHolderHeight,
    });
    /** Holder for scale, event and marks */
    const scaleAndMarksHolder = __WEBPACK_IMPORTED_MODULE_0__helpers_svg__["i" /* newSvg */]("scale-and-marks-holder", {
        width: `${100 - options.leftColumnWidth}%`,
        x: `${options.leftColumnWidth}%`,
    });
    /** Holder for on-hover vertical comparison bars */
    let hoverOverlayHolder;
    let mouseListeners;
    if (options.showAlignmentHelpers) {
        hoverOverlayHolder = __WEBPACK_IMPORTED_MODULE_0__helpers_svg__["e" /* newG */]("hover-overlays");
        const hoverEl = __WEBPACK_IMPORTED_MODULE_6__sub_components_svg_alignment_helper__["a" /* createAlignmentLines */](context.diagramHeight);
        hoverOverlayHolder.appendChild(hoverEl.startline);
        hoverOverlayHolder.appendChild(hoverEl.endline);
        mouseListeners = __WEBPACK_IMPORTED_MODULE_6__sub_components_svg_alignment_helper__["b" /* makeHoverEvtListeners */](hoverEl);
    }
    // Start appending SVG elements to the holder element (timeLineHolder)
    scaleAndMarksHolder.appendChild(__WEBPACK_IMPORTED_MODULE_7__sub_components_svg_general_components__["a" /* createTimeScale */](context, data.durationMs));
    scaleAndMarksHolder.appendChild(__WEBPACK_IMPORTED_MODULE_8__sub_components_svg_marks__["a" /* createMarks */](context, data.marks));
    // This assumes all icons (mime and indicators) have the same width
    const perIconWidth = entriesToShow[0].responseDetails.icon.width;
    let maxIcons = 0;
    if (options.showMimeTypeIcon) {
        maxIcons += 1;
    }
    if (options.showIndicatorIcons) {
        const iconsPerBlock = entriesToShow.map((entry) => entry.responseDetails.indicators.filter((i) => i.displayType === "icon").length > 0 ? 1 : 0);
        maxIcons += Math.max.apply(null, iconsPerBlock);
    }
    const maxIconsWidth = maxIcons * perIconWidth;
    const widestRequestNumber = getWidestDigitString(entriesToShow.length);
    const maxNumberWidth = __WEBPACK_IMPORTED_MODULE_0__helpers_svg__["a" /* getNodeTextWidth */](__WEBPACK_IMPORTED_MODULE_0__helpers_svg__["j" /* newTextEl */](`${widestRequestNumber}`), true);
    const rowItems = [];
    function getChartHeight() {
        return chartHolderHeight + context.overlayManager.getCombinedOverlayHeight();
    }
    context.pubSub.subscribeToOverlayChanges(() => {
        const newHeight = getChartHeight();
        timeLineHolder.classList.toggle("closing", newHeight < timeLineHolder.clientHeight);
        timeLineHolder.style.height = `${newHeight}px`;
    });
    /** Renders single row and hooks up behaviour */
    function renderRow(entry, i) {
        const entryWidth = entry.total || 1;
        const y = options.rowHeight * i;
        const x = (entry.start || 0.001);
        const detailsHeight = 450;
        const rectData = {
            cssClass: Object(__WEBPACK_IMPORTED_MODULE_1__transformers_styling_converters__["a" /* requestTypeToCssClass */])(entry.responseDetails.requestType),
            height: options.rowHeight,
            hideOverlay: options.showAlignmentHelpers ? mouseListeners.onMouseLeavePartial : undefined,
            label: `<strong>${entry.url}</strong><br/>` +
                `${Math.round(entry.start)}ms - ${Math.round(entry.end)}ms<br/>` +
                `total: ${isNaN(entry.total) ? "n/a " : Math.round(entry.total)}ms`,
            showOverlay: options.showAlignmentHelpers ? mouseListeners.onMouseEnterPartial : undefined,
            unit: context.unit,
            width: entryWidth,
            x,
            y,
        };
        const showDetailsOverlay = () => {
            context.overlayManager.toggleOverlay(i, y + options.rowHeight, detailsHeight, entry, rowItems);
        };
        const rowItem = __WEBPACK_IMPORTED_MODULE_4__row_svg_row__["a" /* createRow */](context, i, maxIconsWidth, maxNumberWidth, rectData, entry, showDetailsOverlay);
        rowItems.push(rowItem);
        rowHolder.appendChild(rowItem);
        rowHolder.appendChild(__WEBPACK_IMPORTED_MODULE_0__helpers_svg__["e" /* newG */]("row-overlay-holder"));
    }
    // Main loop to render rows with blocks
    entriesToShow.forEach(renderRow);
    if (options.showAlignmentHelpers && hoverOverlayHolder !== undefined) {
        scaleAndMarksHolder.appendChild(hoverOverlayHolder);
    }
    timeLineHolder.appendChild(scaleAndMarksHolder);
    timeLineHolder.appendChild(rowHolder);
    timeLineHolder.appendChild(overlayHolder);
    timeLineHolder.appendChild(Object(__WEBPACK_IMPORTED_MODULE_5__row_svg_tooltip__["a" /* makeTooltip */])(options));
    return timeLineHolder;
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OverlayManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_details_overlay__ = __webpack_require__(31);



/** Overlay (popup) instance manager */
class OverlayManager {
    constructor(context) {
        this.context = context;
        /** Collection of currely open overlays */
        this.openOverlays = [];
        /**
         * Sets the offset for a request-bar
         * @param {SVGAElement[]} rowItems
         * @param {number} offset
         */
        this.realignRow = (rowItem, offset) => {
            rowItem.setAttribute("transform", `translate(0, ${offset})`);
        };
    }
    /** all open overlays height combined */
    getCombinedOverlayHeight() {
        return this.openOverlays.reduce((pre, curr) => pre + (curr.height || 0), 0);
    }
    /**
     * Opens an overlay - rerenders others internaly
     */
    openOverlay(index, y, detailsHeight, entry, rowItems) {
        if (this.openOverlays.some((o) => o.index === index)) {
            return;
        }
        const self = this;
        const newOverlay = {
            defaultY: y,
            entry,
            index,
            onClose: () => {
                self.closeOverlay(index, detailsHeight, rowItems);
            },
            openTabIndex: 0,
        };
        this.openOverlays.push(newOverlay);
        this.openOverlays = this.openOverlays.sort((a, b) => a.index > b.index ? 1 : -1);
        this.renderOverlays(detailsHeight, rowItems);
        this.context.pubSub.publishToOverlayChanges({
            changedIndex: index,
            combinedOverlayHeight: self.getCombinedOverlayHeight(),
            type: "open",
        });
    }
    /**
     * Toggles an overlay - rerenders others
     */
    toggleOverlay(index, y, detailsHeight, entry, rowItems) {
        if (this.openOverlays.some((o) => o.index === index)) {
            this.closeOverlay(index, detailsHeight, rowItems);
        }
        else {
            this.openOverlay(index, y, detailsHeight, entry, rowItems);
        }
    }
    /**
     * closes on overlay - rerenders others internally
     */
    closeOverlay(index, detailsHeight, rowItems) {
        const self = this;
        this.openOverlays.splice(this.openOverlays.reduce((prev, curr, i) => {
            return (curr.index === index) ? i : prev;
        }, -1), 1);
        this.renderOverlays(detailsHeight, rowItems);
        this.context.pubSub.publishToOverlayChanges({
            changedIndex: index,
            combinedOverlayHeight: self.getCombinedOverlayHeight(),
            type: "closed",
        });
    }
    /**
     * Renders / Adjusts Overlays
     *
     * @summary this is to re-set the "y" position since there is a bug in chrome with
     * tranform of an SVG and positioning/scoll of a foreignObjects
     * @param  {number} detailsHeight
     * @param  {SVGAElement[]} rowItems
     */
    renderOverlays(detailsHeight, rowItems) {
        /** shared variable to keep track of heigth */
        let currY = 0;
        const updateHeight = (overlay, y, currHeight) => {
            currY += currHeight;
            overlay.actualY = y;
            overlay.height = currHeight;
        };
        const addNewOverlay = (overlayHolder, overlay) => {
            const y = overlay.defaultY + currY;
            const infoOverlay = Object(__WEBPACK_IMPORTED_MODULE_2__svg_details_overlay__["a" /* createRowInfoOverlay */])(overlay, y, detailsHeight);
            // if overlay has a preview image show it
            const previewImg = infoOverlay.querySelector("img.preview");
            if (previewImg && !previewImg.src) {
                previewImg.setAttribute("src", previewImg.attributes.getNamedItem("data-src").value);
            }
            infoOverlay.querySelector("a")
                .addEventListener("keydown", OverlayManager.firstElKeypress);
            Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["c" /* getLastItemOfNodeList */])(infoOverlay.querySelectorAll("button"))
                .addEventListener("keydown", OverlayManager.lastElKeypress);
            overlayHolder.appendChild(infoOverlay);
            updateHeight(overlay, y, infoOverlay.getBoundingClientRect().height);
        };
        const updateRow = (rowItem, index) => {
            const overlay = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["b" /* find */])(this.openOverlays, (o) => o.index === index);
            const nextRowItem = rowItem.nextElementSibling;
            const overlayEl = nextRowItem.firstElementChild;
            this.realignRow(rowItem, currY);
            if (overlay === undefined) {
                if (overlayEl && nextRowItem !== null) {
                    // remove closed overlay
                    nextRowItem.querySelector("a")
                        .removeEventListener("keydown", OverlayManager.firstElKeypress);
                    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["c" /* getLastItemOfNodeList */])(nextRowItem.querySelectorAll("button"))
                        .removeEventListener("keydown", OverlayManager.lastElKeypress);
                    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["g" /* removeChildren */])(nextRowItem);
                }
                return; // not open
            }
            if (overlayEl && overlay.actualY !== undefined) {
                const bg = overlayEl.querySelector(".info-overlay-bg");
                const fo = overlayEl.querySelector("foreignObject");
                const btnRect = overlayEl.querySelector(".info-overlay-close-btn rect");
                const btnText = overlayEl.querySelector(".info-overlay-close-btn text");
                updateHeight(overlay, overlay.defaultY + currY, overlay.height);
                // needs updateHeight
                bg.setAttribute("y", overlay.actualY.toString());
                fo.setAttribute("y", overlay.actualY.toString());
                btnText.setAttribute("y", overlay.actualY.toString());
                btnRect.setAttribute("y", overlay.actualY.toString());
                return;
            }
            addNewOverlay(rowItem.nextElementSibling, overlay);
        };
        rowItems.forEach(updateRow);
    }
}
OverlayManager.showFullName = (el) => {
    el.getElementsByClassName("row-fixed").item(0)
        .dispatchEvent(new MouseEvent("mouseenter"));
};
/**
 * Keypress Event handler for fist el in Overlay,
 * to manage highlighting of the element above
 */
OverlayManager.firstElKeypress = (evt) => {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["e" /* isTabUp */])(evt)) {
        const par = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["d" /* getParentByClassName */])(evt.target, "row-overlay-holder");
        if (par && par.previousElementSibling) {
            OverlayManager.showFullName(par.previousElementSibling);
        }
    }
};
/**
 * Keypress Event handler for last el in Overlay,
 * to manage highlighting of the element below
 */
OverlayManager.lastElKeypress = (evt) => {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["d" /* isTabDown */])(evt)) {
        const par = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["d" /* getParentByClassName */])(evt.target, "row-overlay-holder");
        if (par && par.nextElementSibling) {
            OverlayManager.showFullName(par.nextElementSibling);
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (OverlayManager);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRowInfoOverlay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_svg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_details_body__ = __webpack_require__(32);



function createCloseButtonSvg(y) {
    const closeBtn = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["b" /* newA */]("info-overlay-close-btn");
    closeBtn.appendChild(__WEBPACK_IMPORTED_MODULE_1__helpers_svg__["h" /* newRect */]({
        height: 23,
        width: 23,
        x: "100%",
        y,
    }));
    closeBtn.appendChild(__WEBPACK_IMPORTED_MODULE_1__helpers_svg__["j" /* newTextEl */]("✕", {
        dx: 7,
        dy: 16,
        x: "100%",
        y,
    }));
    closeBtn.appendChild(__WEBPACK_IMPORTED_MODULE_1__helpers_svg__["k" /* newTitle */]("Close Overlay"));
    return closeBtn;
}
function createHolder(y, detailsHeight) {
    const holder = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["e" /* newG */]("info-overlay-holder");
    const bg = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["h" /* newRect */]({
        height: detailsHeight,
        rx: 2,
        ry: 2,
        width: "100%",
        x: "0",
        y,
    }, "info-overlay-bg");
    holder.appendChild(bg);
    return holder;
}
function createRowInfoOverlay(overlay, y, detailsHeight) {
    const requestID = overlay.index + 1;
    const holder = createHolder(y, detailsHeight);
    const foreignObject = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["d" /* newForeignObject */]({
        height: detailsHeight,
        width: "100%",
        x: "0",
        y,
    });
    const closeBtn = createCloseButtonSvg(y);
    closeBtn.addEventListener("click", () => overlay.onClose(overlay.index));
    const body = Object(__WEBPACK_IMPORTED_MODULE_2__html_details_body__["a" /* createDetailsBody */])(requestID, detailsHeight, overlay.entry);
    // need to re-fetch the elements to fix Edge "Invalid Calling Object" bug
    const getButtons = () => body.getElementsByClassName("tab-button");
    const getTabs = () => body.getElementsByClassName("tab");
    const setTabStatus = (tabIndex) => {
        overlay.openTabIndex = tabIndex;
        Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["b" /* forEachNodeList */])(getTabs(), (tab, j) => {
            tab.style.display = (tabIndex === j) ? "block" : "none";
            getButtons().item(j).classList.toggle("active", (tabIndex === j));
        });
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["b" /* forEachNodeList */])(getButtons(), (btn, tabIndex) => {
        btn.addEventListener("click", () => setTabStatus(tabIndex));
    });
    setTabStatus(overlay.openTabIndex);
    foreignObject.appendChild(body);
    holder.appendChild(foreignObject);
    holder.appendChild(closeBtn);
    return holder;
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDetailsBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_parse__ = __webpack_require__(3);


/**
 * Creates the HTML body for the overlay
 *
 * _All tabable elements are set to `tabindex="-1"` to avoid tabing issues_
 * @param requestID ID
 * @param detailsHeight
 * @param entry
 */
function createDetailsBody(requestID, detailsHeight, entry) {
    const html = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["f" /* makeHtmlEl */])();
    const body = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["e" /* makeBodyEl */])();
    const tabMenu = entry.tabs.map((t) => {
        return `<li><button class="tab-button">${t.title}</button></li>`;
    }).join("\n");
    const tabBody = entry.tabs.map((t) => {
        let cssClasses = "tab";
        if (t.tabClass) {
            cssClasses += ` ${t.tabClass}`;
        }
        let content = "";
        if (t.content) {
            content = t.content;
        }
        else if (typeof t.renderContent === "function") {
            content = t.renderContent(detailsHeight);
            // keep content for later
            t.content = content;
        }
        else {
            throw TypeError("Invalid Details Tab");
        }
        return `<div class="tab ${cssClasses}">${content}</div>`;
    }).join("\n");
    body.innerHTML = `
    <div class="wrapper">
      <header class="type-${entry.responseDetails.requestType}">
        <h3><strong>#${requestID}</strong> <a href="${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["l" /* sanitizeUrlForLink */])(entry.url)}">
          ${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_parse__["a" /* escapeHtml */])(entry.url)}
        </a></h3>
        <nav class="tab-nav">
          <ul>
            ${tabMenu}
          </ul>
        </nav>
      </header>
      ${tabBody}
    </div>
    `;
    html.appendChild(body);
    return html;
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSub; });
class PubSub {
    constructor() {
        this.subscribers = [];
    }
    /** Call `fn` whenever a new change is publisched on OverlayChanges channel */
    subscribeToOverlayChanges(fn) {
        this.subscribers.push(fn);
    }
    /**
     * Call `fn` whenever a new change for `index` are publisched
     * on OverlayChanges channel
     */
    subscribeToSpecificOverlayChanges(index, fn) {
        this.subscribers.push((evt) => {
            if (evt.changedIndex === index) {
                fn(evt);
            }
        });
    }
    /** Publish a change on OverlayChanges channel  */
    publishToOverlayChanges(change) {
        this.subscribers.forEach((fn) => fn(change));
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (PubSub);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_icons__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_svg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_indicators__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__ = __webpack_require__(36);





// initial clip path
const clipPathElProto = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["c" /* newClipPath */]("titleClipPath");
clipPathElProto.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
    height: "100%",
    width: "100%",
}));
const clipPathElFullProto = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["c" /* newClipPath */]("titleFullClipPath");
clipPathElFullProto.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
    height: "100%",
    width: "100%",
}));
const ROW_LEFT_MARGIN = 3;
// Create row for a single request
function createRow(context, index, maxIconsWidth, maxNumberWidth, rectData, entry, onDetailsOverlayShow) {
    const y = rectData.y;
    const rowHeight = rectData.height;
    const leftColumnWidth = context.options.leftColumnWidth;
    const rowItem = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["b" /* newA */](entry.responseDetails.rowClass || "");
    rowItem.setAttribute("tabindex", "0");
    rowItem.setAttribute("xlink:href", "javascript:void(0)");
    const leftFixedHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["i" /* newSvg */]("left-fixed-holder", {
        width: `${leftColumnWidth}%`,
        x: "0",
    });
    const flexScaleHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["i" /* newSvg */]("flex-scale-waterfall", {
        width: `${100 - leftColumnWidth}%`,
        x: `${leftColumnWidth}%`,
    });
    const rect = __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["d" /* createRect */](rectData, entry);
    const rowName = __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["c" /* createNameRowBg */](y, rowHeight);
    const rowBar = __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["h" /* createRowBg */](y, rowHeight);
    const bgStripe = __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["b" /* createBgStripe */](y, rowHeight, (index % 2 === 0));
    let x = ROW_LEFT_MARGIN + maxIconsWidth;
    if (context.options.showMimeTypeIcon) {
        const icon = entry.responseDetails.icon;
        x -= icon.width;
        rowName.appendChild(__WEBPACK_IMPORTED_MODULE_0__helpers_icons__[icon.type](x, y + 3, icon.title));
    }
    if (context.options.showIndicatorIcons) {
        // Create and add warnings for potentia;l issues
        Object(__WEBPACK_IMPORTED_MODULE_3__svg_indicators__["a" /* getIndicatorIcons */])(entry).forEach((icon) => {
            x -= icon.width;
            rowName.appendChild(__WEBPACK_IMPORTED_MODULE_0__helpers_icons__[icon.type](x, y + 3, icon.title));
        });
    }
    // Jump to the largest offset of all rows
    x = ROW_LEFT_MARGIN + maxIconsWidth;
    const requestNumber = `${index + 1}`;
    const requestNumberLabel = __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["g" /* createRequestNumberLabel */](x, y, requestNumber, rowHeight, maxNumberWidth);
    // 4 is slightly bigger than the hover "glow" around the url
    x += maxNumberWidth + 4;
    const shortLabel = __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["e" /* createRequestLabelClipped */](x, y, Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["g" /* resourceUrlFormatter */])(entry.url, 40), rowHeight);
    const fullLabel = __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["f" /* createRequestLabelFull */](x, y, entry.url, rowHeight);
    // create and attach request block
    rowBar.appendChild(rect);
    __WEBPACK_IMPORTED_MODULE_4__svg_row_subcomponents__["a" /* appendRequestLabels */](rowName, requestNumberLabel, shortLabel, fullLabel);
    context.pubSub.subscribeToSpecificOverlayChanges(index, (change) => {
        hasOpenOverlay = (change.type === "open");
    });
    if (index > 0) {
        context.pubSub.subscribeToSpecificOverlayChanges(index - 1, (change) => {
            hasPrevOpenOverlay = (change.type === "open");
        });
    }
    let hasOpenOverlay;
    let hasPrevOpenOverlay;
    rowItem.addEventListener("click", (evt) => {
        evt.preventDefault();
        onDetailsOverlayShow(evt);
    });
    rowItem.addEventListener("keydown", (evt) => {
        const e = evt; // need to type this manually
        // space on enter
        if (e.which === 32 || e.which === 13) {
            e.preventDefault();
            return onDetailsOverlayShow(e);
        }
        // tab without open overlays around
        if (Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["e" /* isTabUp */])(e) && !hasPrevOpenOverlay && index > 0) {
            if (rowItem.previousSibling &&
                rowItem.previousSibling.previousSibling &&
                rowItem.previousSibling.previousSibling.lastChild &&
                rowItem.previousSibling.previousSibling.lastChild.lastChild) {
                rowItem.previousSibling.previousSibling.lastChild.lastChild.dispatchEvent(new MouseEvent("mouseenter"));
            }
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["d" /* isTabDown */])(e) && !hasOpenOverlay) {
            if (rowItem.nextSibling &&
                rowItem.nextSibling.nextSibling &&
                rowItem.nextSibling.nextSibling.lastChild &&
                rowItem.nextSibling.nextSibling.lastChild.lastChild) {
                rowItem.nextSibling.nextSibling.lastChild.lastChild.dispatchEvent(new MouseEvent("mouseenter"));
            }
            return;
        }
    });
    rowItem.addEventListener("focusout", () => {
        rowName.dispatchEvent(new MouseEvent("mouseleave"));
    });
    flexScaleHolder.appendChild(rowBar);
    leftFixedHolder.appendChild(clipPathElProto.cloneNode(true));
    leftFixedHolder.appendChild(rowName);
    rowItem.appendChild(clipPathElFullProto.cloneNode(true));
    rowItem.appendChild(bgStripe);
    rowItem.appendChild(flexScaleHolder);
    rowItem.appendChild(leftFixedHolder);
    return rowItem;
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["noTls"] = noTls;
/* harmony export (immutable) */ __webpack_exports__["err3xx"] = err3xx;
/* harmony export (immutable) */ __webpack_exports__["err4xx"] = err4xx;
/* harmony export (immutable) */ __webpack_exports__["err5xx"] = err5xx;
/* harmony export (immutable) */ __webpack_exports__["plain"] = plain;
/* harmony export (immutable) */ __webpack_exports__["other"] = other;
/* harmony export (immutable) */ __webpack_exports__["javascript"] = javascript;
/* harmony export (immutable) */ __webpack_exports__["image"] = image;
/* harmony export (immutable) */ __webpack_exports__["svg"] = svg;
/* harmony export (immutable) */ __webpack_exports__["html"] = html;
/* harmony export (immutable) */ __webpack_exports__["css"] = css;
/* harmony export (immutable) */ __webpack_exports__["warning"] = warning;
/* harmony export (immutable) */ __webpack_exports__["error"] = error;
/* harmony export (immutable) */ __webpack_exports__["font"] = font;
/* harmony export (immutable) */ __webpack_exports__["flash"] = flash;
/* harmony export (immutable) */ __webpack_exports__["video"] = video;
/* harmony export (immutable) */ __webpack_exports__["audio"] = audio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg__ = __webpack_require__(2);

/**
 *  SVG Icons
 */
const wrapSvgIcon = (x, y, title, className, scale, svgEl) => {
    const holder = __WEBPACK_IMPORTED_MODULE_0__svg__["i" /* newSvg */]("", {
        x,
        y,
    });
    const el = __WEBPACK_IMPORTED_MODULE_0__svg__["e" /* newG */](`icon ${className}`, {
        transform: `scale(${scale})`,
    });
    // el.innerHTML = svgDoc;
    el.appendChild(svgEl);
    el.appendChild(__WEBPACK_IMPORTED_MODULE_0__svg__["k" /* newTitle */](title));
    holder.appendChild(el);
    return holder;
};
let noTlsIconLazy;
function noTls(x, y, title, scale = 1) {
    if (noTlsIconLazy === undefined) {
        const d = `M18 6.216v2.77q0 .28-.206.486-.205.206-.486.206h-.693q-.28 0-.486-.206-.21-.205-.21
  -.487v-2.77q0-1.145-.81-1.957-.813-.81-1.96-.81-1.146 0-1.957.81-.81.812-.81 1.958v2.077h1.037q.434
  0 .737.303.302.303.302.736v6.23q0 .433-.305.736t-.737.303H1.038q-.433 0-.736-.3Q0 15.996 0
  15.56V9.33q0-.433.303-.736t.735-.303h7.27V6.218q0-2 1.422-3.423 1.423-1.423 3.424-1.423 2
  0 3.424 1.424Q18 4.214 18 6.216`;
        noTlsIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-no-tls", scale, noTlsIconLazy.cloneNode(false));
}
let err3xxIconLazy;
function err3xx(x, y, title, scale = 1) {
    if (err3xxIconLazy === undefined) {
        const d = `M17 2.333V7q0 .27-.198.47-.198.197-.47.197h-4.665q-.438 0-.615-.417-.177-.406.146-.72l1.437-1.436Q11.095
  3.667 9 3.667q-1.083 0-2.068.422-.984.42-1.703 1.14-.72.715-1.14 1.7-.426.984-.426 2.07 0 1.08.422 2.065.42.984
  1.14 1.703.718.72 1.702 1.14.984.422 2.067.422 1.24 0 2.344-.54 1.104-.543 1.864-1.533.073-.105.24-.126.146 0
  .26.095l1.427 1.436q.095.084.1.214.006.13-.08.234-1.133 1.376-2.75 2.13Q10.793 17 9 17q-1.625
  0-3.104-.635-1.48-.636-2.552-1.71-1.073-1.072-1.71-2.55Q1 10.625 1 9t.635-3.104q.636-1.48 1.71-2.552
  1.072-1.073 2.55-1.71Q7.375 1 9 1q1.53 0 2.964.578 1.432.578 2.546
  1.63l1.355-1.343q.302-.323.73-.146.405.173.405.61z`;
        err3xxIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-redirect", scale, err3xxIconLazy.cloneNode(false));
}
function err4xx(x, y, title, scale = 1) {
    return warning(x, y, title, scale);
}
function err5xx(x, y, title, scale = 1) {
    return warning(x, y, title, scale);
}
let plainIconLazy;
function plain(x, y, title, scale = 1) {
    if (plainIconLazy === undefined) {
        const d = `M15.247 4.393q.25.25.43.678.177.43.177.79v10.287q0
  .357-.25.607t-.607.25h-12q-.357 0-.607-.25t-.25-.606V1.858q0-.358.25-.608T2.997 1h8q.357 0
  .786.18.428.177.678.427zm-3.964-2.18V5.57h3.357q-.09-.256-.196-.364L11.65 2.41q-.108-.106-.367
  -.196zm3.428 13.644V6.714H11q-.357 0-.607-.25t-.25-.607V2.143h-6.86v13.714H14.71zM5.57
  8.143q0-.125.08-.205.08-.08.204-.08h6.286q.125 0 .205.08.08.08.08.205v.57q0 .126-.08.207-.08.08
  -.205.08H5.854q-.125 0-.205-.08-.08-.08-.08-.206v-.57zm6.57 2q.125 0 .205.08.08.08.08.206V11q0
  .125-.08.205-.08.08-.205.08H5.854q-.125 0-.205-.08-.08-.08-.08-.205v-.57q0-.126.08-.207.08-.08.2
  -.08h6.286zm0 2.286q.125 0 .205.08.08.08.08.2v.572q0 .125-.08.205-.08.08-.205.08H5.854q-.125 0-.205
  -.08-.08-.08-.08-.205v-.572q0-.124.08-.204.08-.08.2-.08h6.286z`;
        plainIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-plain", scale, plainIconLazy.cloneNode(false));
}
let otherIconLazy;
function other(x, y, title, scale = 1) {
    if (otherIconLazy === undefined) {
        const d = `M10.8 13.5v3q0 .2-.15.35-.15.15-.35.15h-3q-.2 0-.35-.15-.15-.15-.15-.35v-3q0-.2.15-.35.15
  -.15.35-.15h3q.2 0 .35.15.15.15.15.35zM14.75 6q0 .675-.193 1.262-.193.588-.437.957-.244.365
  -.688.74-.443.375-.718.543-.275.17-.763.444-.51.286-.852.81-.344.526-.344.84 0 .21-.15.405-.15.194
  -.35.194h-3q-.186 0-.318-.23-.13-.234-.13-.47v-.564q0-1.037.812-1.956.812-.917 1.787-1.355.74-.336
  1.05-.7.314-.362.314-.95 0-.524-.583-.924-.58-.4-1.343-.4-.814 0-1.35.362-.44.312-1.34 1.437-.16.2
  -.386.2-.15 0-.313-.1L3.4 4.987q-.16-.124-.193-.312-.03-.188.07-.35Q5.277 1 9.077 1q1 0 2.01.387
  1.01.388 1.825 1.038.812.65 1.325 1.594.51.94.51 1.98z`;
        otherIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-other", scale, otherIconLazy.cloneNode(false));
}
let javascriptIconLazy;
function javascript(x, y, title, scale = 1) {
    if (javascriptIconLazy === undefined) {
        const d = `M13.516 2.9c-2.766 0-4.463 1.522-4.463 3.536 0 1.733 1.295 2.82 3.256 3.52
  1.413.49 1.973.926 1.973 1.644 0 .787-.647 1.296-1.873 1.296-1.137 0-2.26-.368-2.96-.736l-.54
  2.19c.665.367 1.996.734 3.344.734 3.238 0 4.744-1.68 4.744-3.658
  0-1.68-.966-2.767-3.05-3.537-1.54-.6-2.186-.93-2.186-1.68 0-.6.56-1.14 1.714-1.14
  1.137 0 1.996.33 2.45.56l.596-2.138c-.7-.332-1.663-.596-3.01-.596zm-9.032.192v7.44c0
  1.822-.702 2.33-1.822 2.33-.525 0-.997-.09-1.365-.212L1 14.805c.525.175 1.33.28 1.96.28
  2.574 0 4.185-1.173 4.185-4.534V3.097h-2.66z`;
        javascriptIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-js", scale, javascriptIconLazy.cloneNode(false));
}
let imageIconLazy;
function image(x, y, title, scale = 1) {
    if (imageIconLazy === undefined) {
        const d = `M6 6q0 .75-.525 1.275Q4.95 7.8 4.2 7.8q-.75 0-1.275-.525Q2.4 6.75 2.4
  6q0-.75.525-1.275Q3.45 4.2 4.2 4.2q.75 0 1.275.525Q6 5.25 6 6zm9.6 3.6v4.2H2.4V12l3-3
  1.5 1.5 4.8-4.8zm.9-6.6h-15q-.122 0-.21.09-.09.088-.09.21v11.4q0
  .122.09.21.088.09.21.09h15q.122 0 .21-.09.09-.088.09-.21V3.3q0-.122-.09-.21Q16.623
  3 16.5 3zm1.5.3v11.4q0 .62-.44 1.06-.44.44-1.06.44h-15q-.62 0-1.06-.44Q0 15.32 0
  14.7V3.3q0-.62.44-1.06.44-.44 1.06-.44h15q.62 0 1.06.44.44.44.44 1.06z`;
        imageIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-image", scale, imageIconLazy.cloneNode(false));
}
function svg(x, y, title, scale = 1) {
    return image(x, y, title, scale);
}
let htmlIconLazy;
function html(x, y, title, scale = 1) {
    if (htmlIconLazy === undefined) {
        const d = `M5.626 13.31l-.492.492q-.098.098-.226.098t-.226-.098L.098 9.22Q0 9.12 0
  8.99q0-.127.098-.226L4.682 4.18q.098-.097.226-.097t.226.098l.492.49q.1.1.1.23t-.1.23L1.76
  8.99l3.866 3.866q.1.098.1.226t-.1.226zM11.44 2.815l-3.67
  12.7q-.04.127-.152.19-.113.065-.23.026l-.61-.162q-.13-.04-.193-.152-.064-.112-.024-.24l3.67-12.698q.04
  -.128.157-.192.113-.064.23-.025l.61.167q.13.04.193.152.063.113.023.24zM17.9
  9.22l-4.582 4.58q-.098.098-.226.098t-.226-.098l-.492-.492q-.1-.098-.1-.226t.1-.226L16.24
  8.99l-3.867-3.865q-.1-.098-.1-.226t.1-.23l.492-.49q.098-.1.226-.1t.23.1l4.58 4.583q.1.1.1.226 0 .13-.1.23z`;
        htmlIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-html", scale, htmlIconLazy.cloneNode(false));
}
let cssIconLazy;
function css(x, y, title, scale = 1) {
    if (cssIconLazy === undefined) {
        const d = `M15.436.99q.625 0 1.095.416.47.415.47 1.04 0 .564-.4 1.35-2.97 5.624-4.16 6.724-.865.814
  -1.946.814-1.127 0-1.935-.827-.81-.827-.81-1.962 0-1.144.822-1.895l5.705-5.175Q14.8.99
  15.435.99zM7.31 10.232q.35.68.953 1.162.603.483 1.345.68l.01.634q.035 1.904-1.16 3.102-1.192
  1.198-3.114 1.198-1.1 0-1.948-.416-.85-.415-1.364-1.14-.514-.723-.773-1.635Q1 12.905 1
  11.85l.366.268q.304.224.555.398.25.175.53.327.277.15.41.15.368 0 .493-.33.224-.59.515-1.005.29
  -.415.62-.68.332-.263.788-.424.455-.16.92-.228.465-.066 1.118-.094z`;
        cssIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-css", scale, cssIconLazy.cloneNode(false));
}
let warningIconLazy;
function warning(x, y, title, scale = 1) {
    if (warningIconLazy === undefined) {
        const d = `M6 6q0 .75-.525 1.275Q4.95 7.8 4.2 7.8q-.75 0-1.275-.525Q2.4 6.75 2.4
  6q0-.75.525-1.275Q3.45 4.2 4.2 4.2q.75 0 1.275.525Q6 5.25 6 6zm9.6 3.6v4.2H2.4V12l3-3
  1.5 1.5 4.8-4.8zm.9-6.6h-15q-.122 0-.21.09-.09.088-.09.21v11.4q0
  .122.09.21.088.09.21.09h15q.122 0 .21-.09.09-.088.09-.21V3.3q0-.122-.09-.21Q16.623
  3 16.5 3zm1.5.3v11.4q0 .62-.44 1.06-.44.44-1.06.44h-15q-.62 0-1.06-.44Q0 15.32 0
  14.7V3.3q0-.62.44-1.06.44-.44 1.06-.44h15q.62 0 1.06.44.44.44.44 1.06z`;
        warningIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-warning", scale, warningIconLazy.cloneNode(false));
}
let errorIconLazy;
function error(x, y, title, scale = 1) {
    if (errorIconLazy === undefined) {
        const d = `M9 1q2.177 0 4.016 1.073 1.838 1.073 2.91 2.91Q17 6.823 17 9q0 2.177-1.073 4.016-1.073
  1.838-2.91 2.91Q11.177 17 9 17q-2.177 0-4.016-1.073-1.838-1.073-2.91-2.91Q1 11.177 1 9q0-2.177 1.073-4.016
  1.073-1.838 2.91-2.91Q6.823 1 9 1zm1.333 12.99v-1.98q0-.145-.093-.244-.094-.1-.23-.1h-2q-.135 0-.24.105
  -.103.106-.103.24v1.98q0 .136.104.24.106.104.24.104h2q.137 0 .23-.1.094-.098.094-.243zm-.02-3.584l.187
  -6.468q0-.125-.104-.188-.104-.084-.25-.084H7.854q-.146 0-.25.084-.104.062-.104.188l.177 6.468q0
  .104.104.183.106.076.25.076h1.93q.146 0 .245-.078.1-.08.11-.184z`;
        errorIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-no-gzip", scale, errorIconLazy.cloneNode(false));
}
let fontIconLazy;
function font(x, y, title, scale = 1) {
    if (fontIconLazy === undefined) {
        const d = `M7.97 5.754L6.338 10.08q.317 0 1.312.02.994.02 1.542.02.183 0 .548-.02-.836-2.432-1.77
  -4.345zM1 16.38l.02-.76q.22-.068.538-.12.317-.053.548-.102.23-.048.476-.14.245-.09.428-.278.182
  -.187.298-.485l2.28-5.923 2.69-6.962H9.51q.077.135.105.202l1.972 4.615q.317.75 1.02 2.476.7 1.726
  1.095 2.64.144.327.558 1.39.413 1.062.692 1.62.192.432.336.547.183.145.847.284.663.14.807.197.058.37.058.55
  0 .04-.005.13t-.005.128q-.605 0-1.827-.076-1.22-.08-1.836-.08-.73 0-2.067.07-1.337.067-1.712.076 0-.412.04
  -.75l1.258-.27q.01 0 .12-.022l.15-.033q.038-.01.14-.044.1-.034.143-.06l.1-.08q.06-.048.082-.106.024-.056.024
  -.133 0-.152-.298-.926t-.693-1.71q-.392-.93-.402-.96l-4.325-.02q-.25.56-.734 1.88-.487 1.32-.487 1.56 0
  .213.136.362.134.15.418.235.285.087.467.13.185.044.55.08.366.04.395.04.01.183.01.558 0 .087-.02.26-.558
  0-1.678-.095-1.12-.098-1.678-.098-.08 0-.26.04-.18.037-.208.037-.77.136-1.808.136Z`;
        fontIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-font", scale, fontIconLazy.cloneNode(false));
}
let flashIconLazy;
function flash(x, y, title, scale = 1) {
    if (flashIconLazy === undefined) {
        const d = `M13.724 4.738q.195.216.076.476L7.96 17.73q-.142.27-.456.27-.043 0-.15-.022-.185-.054-.277
  -.205-.092-.15-.05-.325l2.132-8.74L4.765 9.8q-.044.01-.13.01-.195 0-.336-.118-.193-.162-.14-.422L6.337.346q.043
  -.15.173-.25Q6.64 0 6.81 0h3.548q.206 0 .346.135.14.135.14.32 0 .086-.053.194L8.94 5.654l4.285
  -1.06q.086-.02.13-.02.205 0 .367.16z`;
        flashIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-flash", scale, flashIconLazy.cloneNode(false));
}
let videoIconLazy;
function video(x, y, title, scale = 1) {
    if (videoIconLazy === undefined) {
        const d = `M17 4.107v9.714q0 .38-.348.53-.116.05-.223.05-.25 0-.41-.17l-3.6-3.6v1.48q0 1.067-.757 1.82-.754.756
  -1.817.756H3.57q-1.06 0-1.816-.753Q1 13.17 1 12.106V5.82q0-1.06.754-1.816.755-.754 1.817-.754h6.29q1.07 0
  1.82.754.76.755.76 1.817V7.3l3.597-3.59q.16-.17.4-.17.107 0 .22.045.35.153.35.528z`;
        videoIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-video", scale, videoIconLazy.cloneNode(false));
}
let audioIconLazy;
function audio(x, y, title, scale = 1) {
    if (audioIconLazy === undefined) {
        const d = `M8.385 3.756v10.46q0 .252-.183.434-.183.183-.433.183t-.44-.183l-3.2-3.202H1.61q-.25
  0-.43-.183-.18-.182-.18-.432V7.14q0-.25.182-.432.182-.183.432-.183h2.52l3.202-3.202q.182-.183.432
  -.183t.43.183q.182.183.182.433zm3.692 5.23q0 .73-.41 1.36-.407.63-1.08.9-.097.048-.24.048-.25 0
  -.434-.178-.182-.177-.182-.437 0-.21.12-.35.12-.14.28-.24.16-.1.33-.22.166-.12.28-.34.117-.22.117
  -.55 0-.33-.115-.55-.115-.224-.28-.344-.163-.12-.326-.22-.165-.1-.28-.24-.116-.14-.116-.34 0-.26.183
  -.44t.43-.176q.146 0 .24.048.676.26 1.08.894.41.636.41 1.367zm2.46 0q0 1.472-.816 2.717t-2.16 1.813q
  -.12.048-.24.048-.26 0-.44-.183-.18-.18-.18-.43 0-.37.378-.56.54-.28.73-.42.713-.52 1.11-1.302.4
  -.783.4-1.667 0-.886-.4-1.67-.4-.783-1.11-1.303-.192-.145-.73-.424-.376-.192-.376-.567 0-.25.183
  -.434.183-.18.433-.18.123 0 .25.047 1.344.567 2.16 1.812.82 1.244.82 2.716zm2.463 0q0 2.212
  -1.22 4.063-1.222 1.85-3.25 2.72-.126.05-.25.05-.25 0-.434-.19-.183-.183-.183-.433 0-.346.375
  -.568.068-.04.217-.1.15-.064.216-.1.45-.244.79-.494 1.19-.875 1.85-2.183.67-1.306.67-2.777 0
  -1.47-.663-2.78-.664-1.304-1.846-2.18-.346-.25-.79-.49-.065-.035-.214-.1-.15-.06-.22-.1
  -.375-.22-.375-.57 0-.25.183-.43.183-.182.433-.182.123 0 .25.047 2.027.876 3.25 2.727Q17 6.775 17 8.99Z`;
        audioIconLazy = __WEBPACK_IMPORTED_MODULE_0__svg__["g" /* newPath */](d);
    }
    return wrapSvgIcon(x, y, title, "icon-audio", scale, audioIconLazy.cloneNode(false));
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = createRect;
/* harmony export (immutable) */ __webpack_exports__["g"] = createRequestNumberLabel;
/* harmony export (immutable) */ __webpack_exports__["e"] = createRequestLabelClipped;
/* harmony export (immutable) */ __webpack_exports__["f"] = createRequestLabelFull;
/* harmony export (immutable) */ __webpack_exports__["a"] = appendRequestLabels;
/* harmony export (immutable) */ __webpack_exports__["b"] = createBgStripe;
/* harmony export (immutable) */ __webpack_exports__["c"] = createNameRowBg;
/* harmony export (immutable) */ __webpack_exports__["h"] = createRowBg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_svg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transformers_styling_converters__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_tooltip__ = __webpack_require__(10);
/**
 * Creation of sub-components used in a ressource request row
 */





/**
 * Creates the `rect` that represent the timings in `rectData`
 * @param  {RectData} rectData - Data for block
 * @param  {string} className - className for block `rect`
 */
function makeBlock(rectData, className) {
    const holder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("");
    const blockHeight = rectData.height - 1;
    const rectX = __WEBPACK_IMPORTED_MODULE_1__helpers_misc__["h" /* roundNumber */](rectData.x / rectData.unit) + "%";
    const rect = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
        height: blockHeight,
        width: __WEBPACK_IMPORTED_MODULE_1__helpers_misc__["h" /* roundNumber */](rectData.width / rectData.unit) + "%",
        x: rectX,
        y: rectData.y,
    }, className);
    holder.appendChild(rect);
    if (rectData.label) {
        let showDelayTimeOut;
        let foreignElLazy;
        rect.addEventListener("mouseenter", () => {
            if (!foreignElLazy) {
                foreignElLazy = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["d" /* getParentByClassName */])(rect, "water-fall-chart")
                    .querySelector(".tooltip");
            }
            showDelayTimeOut = setTimeout(() => {
                showDelayTimeOut = null;
                Object(__WEBPACK_IMPORTED_MODULE_4__svg_tooltip__["b" /* onHoverInShowTooltip */])(rect, rectData, foreignElLazy);
            }, 100);
        });
        rect.addEventListener("mouseleave", () => {
            if (showDelayTimeOut) {
                clearTimeout(showDelayTimeOut);
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_4__svg_tooltip__["c" /* onHoverOutShowTooltip */])(rect);
            }
        });
    }
    if (rectData.showOverlay && rectData.hideOverlay) {
        rect.addEventListener("mouseenter", rectData.showOverlay(rectData));
        rect.addEventListener("mouseleave", rectData.hideOverlay(rectData));
    }
    return holder;
}
/**
 * Converts a segment to RectData
 * @param  {WaterfallEntryTiming} segment
 * @param  {RectData} rectData
 * @returns RectData
 */
function segmentToRectData(segment, rectData) {
    const total = (!isNaN(segment.total)) ? `<br/>total: ${Math.round(segment.total)}ms` : "";
    return {
        cssClass: Object(__WEBPACK_IMPORTED_MODULE_3__transformers_styling_converters__["b" /* timingTypeToCssClass */])(segment.type),
        height: (rectData.height - 6),
        hideOverlay: rectData.hideOverlay,
        label: `<strong>${segment.type}</strong><br/>` +
            `${Math.round(segment.start)}ms - ${Math.round(segment.end)}ms${total}`,
        showOverlay: rectData.showOverlay,
        unit: rectData.unit,
        width: segment.total,
        x: segment.start || 0.001,
        y: rectData.y,
    };
}
/**
 * @param  {RectData} rectData
 * @param  {number} timeTotal
 * @param  {number} firstX
 * @returns SVGTextElement
 */
function createTimingLabel(rectData, timeTotal, firstX) {
    const minWidth = 500; // minimum supported diagram width that should show the timing label uncropped
    const spacingPerc = (5 / minWidth * 100);
    const y = rectData.y + rectData.height / 1.5;
    const totalLabel = `${Math.round(timeTotal)} ms`;
    let percStart = (rectData.x + rectData.width) / rectData.unit + spacingPerc;
    let txtEl = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["j" /* newTextEl */](totalLabel, { x: `${__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["h" /* roundNumber */](percStart)}%`, y });
    // (pessimistic) estimation of text with to avoid performance penalty of `getBBox`
    const roughTxtWidth = totalLabel.length * 8;
    if (percStart + (roughTxtWidth / minWidth * 100) > 100) {
        percStart = firstX / rectData.unit - spacingPerc;
        txtEl = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["j" /* newTextEl */](totalLabel, { x: `${__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["h" /* roundNumber */](percStart)}%`, y }, { textAnchor: "end" });
    }
    return txtEl;
}
function createPushIndicator(rectData) {
    const y = rectData.y + rectData.height / 1.5;
    const x = `${__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["h" /* roundNumber */](rectData.x / rectData.unit)}%`;
    const el = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("http2-inidicator-holder");
    el.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["j" /* newTextEl */]("→", {
        transform: `translate(-5)`,
        x,
        y,
    }, {
        "fillOpacity": "0.6",
        "text-anchor": "end",
    }));
    el.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["k" /* newTitle */]("http2 Push"));
    return el;
}
/**
 * Render the block and timings for a request
 * @param  {RectData}         rectData Basic dependencys and globals
 * @param  {WaterfallEntry}   entry Request Details, e.g. Request and Timing Data
 * @return {SVGElement}       Renerated SVG (rect or g element)
 */
function createRect(rectData, entry) {
    const segments = entry.segments;
    const rect = makeBlock(rectData, `time-block ${rectData.cssClass}`);
    const rectHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("rect-holder");
    let firstX = rectData.x;
    rectHolder.appendChild(rect);
    if (segments && segments.length > 0) {
        segments.forEach((segment) => {
            if (!isNaN(segment.total) && segment.total > 0 && typeof segment.start === "number") {
                const childRectData = segmentToRectData(segment, rectData);
                const childRect = makeBlock(childRectData, `segment ${childRectData.cssClass}`);
                firstX = Math.min(firstX, childRectData.x);
                rectHolder.appendChild(childRect);
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["b" /* find */](entry.responseDetails.indicators, (indicator) => indicator.id === "push")) {
            rectHolder.appendChild(createPushIndicator(rectData));
        }
        rectHolder.appendChild(createTimingLabel(rectData, entry.total, firstX));
    }
    return rectHolder;
}
/**
 * Create a SVG text element for the request number label, right aligned within the specified width.
 * @param {number} x horizontal position (in px).
 * @param {number} y vertical position of related request block (in px).
 * @param {string} requestNumber the request number string
 * @param {number} height height of row
 * @param {number} width width of the space within the right align the label.
 * @returns {SVGTextElement}
 */
function createRequestNumberLabel(x, y, requestNumber, height, width) {
    y += Math.round(height / 2) + 5;
    x += width;
    return __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["j" /* newTextEl */](requestNumber, { x, y }, { "text-anchor": "end" });
}
/**
 * Create a new clipper SVG Text element to label a request block to fit the left panel width
 * @param  {number}         x                horizontal position (in px)
 * @param  {number}         y                vertical position of related request block (in px)
 * @param  {string}         name             URL
 * @param  {number}         height           height of row
 * @return {SVGTextElement}                  label SVG element
 */
function createRequestLabelClipped(x, y, name, height) {
    const blockLabel = createRequestLabel(x, y, name, height);
    blockLabel.style.clipPath = `url(#titleClipPath)`;
    return blockLabel;
}
/**
 * Create a new full width SVG Text element to label a request block
 * @param  {number}         x                horizontal position (in px)
 * @param  {number}         y                vertical position of related request block (in px)
 * @param  {string}         name             URL
 * @param  {number}         height           height of row
 */
function createRequestLabelFull(x, y, name, height) {
    const blockLabel = createRequestLabel(x, y, name, height);
    const labelHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("full-label", {}, {
        clipPath: `url(#titleFullClipPath)`,
    });
    labelHolder.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
        height: height - 4,
        rx: 5,
        ry: 5,
        // for initial load performance use 500px as base width
        // it's updated one by one on hover
        width: 500,
        x: x - 3,
        y: y + 3,
    }, "label-full-bg"));
    labelHolder.appendChild(blockLabel);
    return labelHolder;
}
// private helper
function createRequestLabel(x, y, name, height) {
    const blockName = __WEBPACK_IMPORTED_MODULE_1__helpers_misc__["g" /* resourceUrlFormatter */](name, 125);
    y = y + Math.round(height / 2) + 5;
    const blockLabel = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["j" /* newTextEl */](blockName, { x, y });
    blockLabel.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["k" /* newTitle */](name));
    blockLabel.style.opacity = name.match(/js.map$/) ? "0.5" : "1";
    return blockLabel;
}
const supportsAnimationFrame = (typeof window.requestAnimationFrame === "function" &&
    typeof window.cancelAnimationFrame === "function");
/**
 * Appends the labels to `rowFixed` - TODO: see if this can be done more elegant
 * @param {SVGGElement}    rowFixed   [description]
 * @param {SVGTextElement} requestNumberLabel a label placed in front of every shortLabel
 * @param {SVGTextElement} shortLabel [description]
 * @param {SVGGElement}    fullLabel  [description]
 */
function appendRequestLabels(rowFixed, requestNumberLabel, shortLabel, fullLabel) {
    const labelFullBg = fullLabel.getElementsByTagName("rect")[0];
    const fullLabelText = fullLabel.getElementsByTagName("text")[0];
    // use display: none to not render it and visibility to remove it from search results (crt+f in chrome at least)
    fullLabel.style.display = "none";
    fullLabel.style.visibility = "hidden";
    rowFixed.appendChild(requestNumberLabel);
    rowFixed.appendChild(shortLabel);
    rowFixed.appendChild(fullLabel);
    /** the size adjustment only needs to happend once, this var keeps track of that */
    let isAdjusted = false;
    /** store AnimationFrame id, to cancel it if hovering was too fast */
    let updateAnimFrame;
    rowFixed.addEventListener("mouseenter", () => {
        fullLabel.style.display = "block";
        shortLabel.style.display = "none";
        fullLabel.style.visibility = "visible";
        // offload doublecheck of width
        const update = () => {
            const newWidth = fullLabelText.getComputedTextLength() + 10;
            labelFullBg.setAttribute("width", newWidth.toString());
            isAdjusted = true;
            updateAnimFrame = undefined;
        };
        if (!isAdjusted) {
            if (supportsAnimationFrame) {
                updateAnimFrame = window.requestAnimationFrame(update);
            }
            else {
                update();
            }
        }
    });
    rowFixed.addEventListener("mouseleave", () => {
        shortLabel.style.display = "block";
        fullLabel.style.display = "none";
        fullLabel.style.visibility = "hidden";
        if (supportsAnimationFrame && updateAnimFrame !== undefined) {
            cancelAnimationFrame(updateAnimFrame);
        }
    });
}
/**
 * Stripe for BG
 * @param  {number}      y              [description]
 * @param  {number}      height         [description]
 * @param  {boolean}     isEven         [description]
 * @return {SVGRectElement}                [description]
 */
function createBgStripe(y, height, isEven) {
    const className = isEven ? "even" : "odd";
    return __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
        height,
        width: "100%",
        x: 0,
        y,
    }, className);
}
function createNameRowBg(y, rowHeight) {
    const rowFixed = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("row row-fixed");
    rowFixed.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
        height: rowHeight,
        width: "100%",
        x: "0",
        y,
    }, "", {
        opacity: 0,
    }));
    return rowFixed;
}
function createRowBg(y, rowHeight) {
    const rowFixed = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("row row-flex");
    rowFixed.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
        height: rowHeight,
        width: "100%",
        x: "0",
        y,
    }, "", {
        opacity: 0,
    }));
    return rowFixed;
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAlignmentLines;
/* harmony export (immutable) */ __webpack_exports__["b"] = makeHoverEvtListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_svg__ = __webpack_require__(2);
/**
 * vertical alignment helper lines
 */


/**
 * Creates verticale alignment bars
 * @param {number} diagramHeight  height of the requests part of the diagram in px
 */
function createAlignmentLines(diagramHeight) {
    return {
        endline: __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["f" /* newLine */]({
            x1: "0",
            x2: "0",
            y1: "0",
            y2: diagramHeight,
        }, "line-end"),
        startline: __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["f" /* newLine */]({
            x1: "0",
            x2: "0",
            y1: "0",
            y2: diagramHeight,
        }, "line-start"),
    };
}
/**
 * Partially appliable Eventlisteners for verticale alignment bars to be shown on hover
 * @param {HoverElements} hoverEl  verticale alignment bars SVG Elements
 */
function makeHoverEvtListeners(hoverEl) {
    return {
        onMouseEnterPartial() {
            return (evt) => {
                const targetRect = evt.target;
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["a" /* addClass */])(targetRect, "active");
                const xPosEnd = targetRect.x.baseVal.valueInSpecifiedUnits +
                    targetRect.width.baseVal.valueInSpecifiedUnits + "%";
                const xPosStart = targetRect.x.baseVal.valueInSpecifiedUnits + "%";
                hoverEl.endline.x1.baseVal.valueAsString = xPosEnd;
                hoverEl.endline.x2.baseVal.valueAsString = xPosEnd;
                hoverEl.startline.x1.baseVal.valueAsString = xPosStart;
                hoverEl.startline.x2.baseVal.valueAsString = xPosStart;
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["a" /* addClass */])(hoverEl.endline, "active");
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["a" /* addClass */])(hoverEl.startline, "active");
            };
        },
        onMouseLeavePartial() {
            return (evt) => {
                const targetRect = evt.target;
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["h" /* removeClass */])(targetRect, "active");
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["h" /* removeClass */])(hoverEl.endline, "active");
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["h" /* removeClass */])(hoverEl.startline, "active");
            };
        },
    };
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTimeScale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_svg__ = __webpack_require__(2);
/**
 * Creation of sub-components of the waterfall chart
 */


/**
 * Renders a per-second marker line and appends it to `timeHolder`
 *
 * @param  {Context} context  Execution context object
 * @param  {SVGGElement} timeHolder element that the second marker is appended to
 * @param  {number} secsTotal  total number of seconds in the timeline
 * @param  {number} sec second of the time marker to render
 * @param  {boolean} addLabel  if true a time label is added to the marker-line
 */
const appendSecond = (context, timeHolder, secsTotal, sec, addLabel = false) => {
    const diagramHeight = context.diagramHeight;
    const secPerc = 100 / secsTotal;
    /** just used if `addLabel` is `true` - for full seconds */
    let lineLabel;
    let lineClass = "sub-second-line";
    let x;
    if (addLabel) {
        const showTextBefore = (sec > secsTotal - 0.2);
        lineClass = "second-line";
        x = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["h" /* roundNumber */])(secPerc * sec) + 0.5 + "%";
        const css = {};
        if (showTextBefore) {
            x = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["h" /* roundNumber */])(secPerc * sec) - 0.5 + "%";
            css["text-anchor"] = "end";
        }
        lineLabel = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["j" /* newTextEl */](sec + "s", { x, y: diagramHeight }, css);
    }
    x = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_misc__["h" /* roundNumber */])(secPerc * sec) + "%";
    const lineEl = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["f" /* newLine */]({
        x1: x,
        x2: x,
        y1: 0,
        y2: diagramHeight,
    }, lineClass);
    context.pubSub.subscribeToOverlayChanges((change) => {
        const offset = change.combinedOverlayHeight;
        // figure out why there is an offset
        const scale = (diagramHeight + offset) / (diagramHeight);
        lineEl.setAttribute("transform", `scale(1, ${scale})`);
        if (addLabel) {
            lineLabel.setAttribute("transform", `translate(0, ${offset})`);
        }
    });
    timeHolder.appendChild(lineEl);
    if (addLabel) {
        timeHolder.appendChild(lineLabel);
    }
};
/**
 * Renders the time-scale SVG elements (1sec, 2sec...)
 * @param  {Context} context  Execution context object
 * @param {number} durationMs    Full duration of the waterfall
 */
function createTimeScale(context, durationMs) {
    const timeHolder = __WEBPACK_IMPORTED_MODULE_1__helpers_svg__["e" /* newG */]("time-scale full-width");
    const subStepMs = Math.ceil(durationMs / 10000) * 200;
    /** steps between each major second marker */
    const subStep = 1000 / subStepMs;
    const secs = durationMs / 1000;
    const steps = durationMs / subStepMs;
    for (let i = 0; i <= steps; i++) {
        const isMarkerStep = i % subStep < 0.000000001; // to avoid rounding issues
        const secValue = i / subStep;
        appendSecond(context, timeHolder, secs, secValue, isMarkerStep);
    }
    return timeHolder;
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createMarks;
/* unused harmony export createLineRect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_misc__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_svg__ = __webpack_require__(2);



/**
 * Renders global marks for events like the onLoad event etc
 * @param  {Context} context  Execution context object
 * @param {Mark[]} marks         [description]
 */
function createMarks(context, marks) {
    const diagramHeight = context.diagramHeight;
    const marksHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("marker-holder", {
        transform: "scale(1, 1)",
    });
    marks.forEach((mark, i) => {
        const x = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["h" /* roundNumber */])(mark.startTime / context.unit);
        const markHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("mark-holder type-" + mark.name.toLowerCase().replace(/([0-9]+[ ]?ms)|\W/g, ""));
        const lineHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("line-holder");
        const lineLabelHolder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */]("line-label-holder");
        const lineLabel = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["j" /* newTextEl */](mark.name, { x: x + "%", y: diagramHeight + 25 });
        lineLabel.setAttribute("writing-mode", "tb");
        let lineRect;
        mark.x = x;
        const line = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["f" /* newLine */]({
            x1: x + "%",
            x2: x + "%",
            y1: 0,
            y2: diagramHeight,
        });
        const lastMark = marks[i - 1];
        const minDistance = 2.5; // minimum distance between marks
        if (lastMark && lastMark.x !== undefined && mark.x - lastMark.x < minDistance) {
            lineLabel.setAttribute("x", lastMark.x + minDistance + "%");
            mark.x = lastMark.x + minDistance;
        }
        // would use polyline but can't use percentage for points
        const lineConnection = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["f" /* newLine */]({
            x1: x + "%",
            x2: mark.x + "%",
            y1: diagramHeight,
            y2: diagramHeight + 23,
        });
        lineHolder.appendChild(line);
        lineHolder.appendChild(lineConnection);
        if (mark.duration) {
            lineRect = createLineRect(context, mark);
            lineHolder.appendChild(lineRect);
        }
        context.pubSub.subscribeToOverlayChanges((change) => {
            const offset = change.combinedOverlayHeight;
            const scale = (diagramHeight + offset) / (diagramHeight);
            line.setAttribute("transform", `scale(1, ${scale})`);
            lineLabelHolder.setAttribute("transform", `translate(0, ${offset})`);
            lineConnection.setAttribute("transform", `translate(0, ${offset})`);
            if (lineRect) {
                lineRect.setAttribute("transform", `translate(0, ${offset})`);
            }
        });
        let isHoverActive = false;
        /** click indicator - overwrites `isHoverActive` */
        let isClickActive = false;
        const onLabelMouseEnter = () => {
            if (!isHoverActive) {
                // move marker to top
                markHolder.parentNode.appendChild(markHolder);
                isHoverActive = true;
                // assign class later to not break animation with DOM re-order
                if (typeof window.requestAnimationFrame === "function") {
                    window.requestAnimationFrame(() => Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["a" /* addClass */])(lineHolder, "active"));
                }
                else {
                    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["a" /* addClass */])(lineHolder, "active");
                }
            }
        };
        const onLabelMouseLeave = () => {
            isHoverActive = false;
            if (!isClickActive) {
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["h" /* removeClass */])(lineHolder, "active");
            }
        };
        const onLabelClick = () => {
            if (isClickActive) {
                // deselect
                isHoverActive = false;
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["h" /* removeClass */])(lineHolder, "active");
            }
            else if (!isHoverActive) {
                // for touch devices
                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom__["a" /* addClass */])(lineHolder, "active");
            }
            else {
                isHoverActive = false;
            }
            // set new state
            isClickActive = !isClickActive;
        };
        lineLabel.addEventListener("mouseenter", onLabelMouseEnter);
        lineLabel.addEventListener("mouseleave", onLabelMouseLeave);
        lineLabel.addEventListener("click", onLabelClick);
        lineLabelHolder.appendChild(lineLabel);
        markHolder.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["k" /* newTitle */](mark.name));
        markHolder.appendChild(lineHolder);
        markHolder.appendChild(lineLabelHolder);
        marksHolder.appendChild(markHolder);
    });
    return marksHolder;
}
/**
 * Converts a `Mark` with a duration (e.g. a UserTiming with `startTimer` and `endTimer`) into a rect.
 * @param {Context} context Execution context object
 * @param {Mark} entry  Line entry
 */
function createLineRect(context, entry) {
    const holder = __WEBPACK_IMPORTED_MODULE_2__helpers_svg__["e" /* newG */](`line-mark-holder line-marker-${Object(__WEBPACK_IMPORTED_MODULE_1__helpers_misc__["i" /* toCssClass */])(entry.name)}`);
    holder.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["k" /* newTitle */](entry.name.replace(/^startTimer-/, "")));
    holder.appendChild(__WEBPACK_IMPORTED_MODULE_2__helpers_svg__["h" /* newRect */]({
        height: context.diagramHeight,
        width: ((entry.duration || 1) / context.unit) + "%",
        x: ((entry.startTime || 0.001) / context.unit) + "%",
        y: 0,
    }, "line-mark"));
    return holder;
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export readFile */
const zipJs = () => (window["zip"] || {});
// use zip
zipJs().useWebWorkers = false;
/** handle client side file upload */
function readFile(file, fileName, callback, onProgress) {
    if (!file) {
        return callback(new Error("Failed to load HAR file"));
    }
    function parseJson(rawData) {
        try {
            const harData = JSON.parse(rawData);
            callback(null, harData.log);
        }
        catch (e) {
            callback(e);
        }
    }
    /** start reading the file */
    const extension = (fileName.match(/\.[0-9a-z]+$/i) || [])[0];
    const zip = zipJs();
    if ([".zhar", ".zip"].indexOf(extension) !== -1) {
        /** zhar */
        zip.createReader(new zip.BlobReader(file), (zipReader) => {
            zipReader.getEntries((x) => {
                x[0].getData(new zip.TextWriter(), (txt) => {
                    parseJson(txt);
                    // close the zip reader
                    zipReader.close();
                }, onProgress);
            });
        });
    }
    else {
        const reader = new FileReader();
        /** try to parse the file once uploaded to browser */
        reader.addEventListener("load", (e) => {
            parseJson(e.target.result);
        });
        reader.readAsText(file);
    }
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithZipJs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var WithZipJs=function(_Component){_inherits(WithZipJs,_Component);function WithZipJs(props){_classCallCheck(this,WithZipJs);var _this=_possibleConstructorReturn(this,(WithZipJs.__proto__||Object.getPrototypeOf(WithZipJs)).call(this,props));_this.render=function(){return _this.state.zip?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,_this.props.children):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,"Loading...");};_this.componentDidMount=function(){createZipOn(window);_this.setState({zip:true});};_this.state={zip:false};return _this;}return WithZipJs;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);function createZipOn(obj){var ERR_BAD_FORMAT="File format is not recognized.";var ERR_CRC="CRC failed.";var ERR_ENCRYPTED="File contains encrypted entry.";var ERR_ZIP64="File is using Zip64 (4gb+ file size).";var ERR_READ="Error while reading zip file.";var ERR_WRITE="Error while writing zip file.";var ERR_WRITE_DATA="Error while writing file data.";var ERR_READ_DATA="Error while reading file data.";var ERR_DUPLICATED_NAME="File already exists.";var CHUNK_SIZE=512*1024;var TEXT_PLAIN="text/plain";var appendABViewSupported;try{appendABViewSupported=new Blob([new DataView(new ArrayBuffer(0))]).size===0;}catch(e){}function Crc32(){this.crc=-1;}Crc32.prototype.append=function append(data){var crc=this.crc|0,table=this.table;for(var offset=0,len=data.length|0;offset<len;offset++){crc=crc>>>8^table[(crc^data[offset])&0xFF];}this.crc=crc;};Crc32.prototype.get=function get(){return~this.crc;};Crc32.prototype.table=function(){var i,j,t,table=[];// Uint32Array is actually slower than []
for(i=0;i<256;i++){t=i;for(j=0;j<8;j++){if(t&1)t=t>>>1^0xEDB88320;else t=t>>>1;}table[i]=t;}return table;}();// "no-op" codec
function NOOP(){}NOOP.prototype.append=function append(bytes,onprogress){return bytes;};NOOP.prototype.flush=function flush(){};function blobSlice(blob,index,length){if(index<0||length<0||index+length>blob.size)throw new RangeError('offset:'+index+', length:'+length+', size:'+blob.size);if(blob.slice)return blob.slice(index,index+length);else if(blob.webkitSlice)return blob.webkitSlice(index,index+length);else if(blob.mozSlice)return blob.mozSlice(index,index+length);else if(blob.msSlice)return blob.msSlice(index,index+length);}function getDataHelper(byteLength,bytes){var dataBuffer,dataArray;dataBuffer=new ArrayBuffer(byteLength);dataArray=new Uint8Array(dataBuffer);if(bytes)dataArray.set(bytes,0);return{buffer:dataBuffer,array:dataArray,view:new DataView(dataBuffer)};}// Readers
function Reader(){}function TextReader(text){var that=this,blobReader;function init(callback,onerror){var blob=new Blob([text],{type:TEXT_PLAIN});blobReader=new BlobReader(blob);blobReader.init(function(){that.size=blobReader.size;callback();},onerror);}function readUint8Array(index,length,callback,onerror){blobReader.readUint8Array(index,length,callback,onerror);}that.size=0;that.init=init;that.readUint8Array=readUint8Array;}TextReader.prototype=new Reader();TextReader.prototype.constructor=TextReader;function Data64URIReader(dataURI){var that=this,dataStart;function init(callback){var dataEnd=dataURI.length;while(dataURI.charAt(dataEnd-1)==="="){dataEnd--;}dataStart=dataURI.indexOf(",")+1;that.size=Math.floor((dataEnd-dataStart)*0.75);callback();}function readUint8Array(index,length,callback){var i,data=getDataHelper(length);var start=Math.floor(index/3)*4;var end=Math.ceil((index+length)/3)*4;var bytes=obj.atob(dataURI.substring(start+dataStart,end+dataStart));var delta=index-Math.floor(start/4)*3;for(i=delta;i<delta+length;i++){data.array[i-delta]=bytes.charCodeAt(i);}callback(data.array);}that.size=0;that.init=init;that.readUint8Array=readUint8Array;}Data64URIReader.prototype=new Reader();Data64URIReader.prototype.constructor=Data64URIReader;function BlobReader(blob){var that=this;function init(callback){that.size=blob.size;callback();}function readUint8Array(index,length,callback,onerror){var reader=new FileReader();reader.onload=function(e){callback(new Uint8Array(e.target.result));};reader.onerror=onerror;try{reader.readAsArrayBuffer(blobSlice(blob,index,length));}catch(e){onerror(e);}}that.size=0;that.init=init;that.readUint8Array=readUint8Array;}BlobReader.prototype=new Reader();BlobReader.prototype.constructor=BlobReader;// Writers
function Writer(){}Writer.prototype.getData=function(callback){callback(this.data);};function TextWriter(encoding){var that=this,blob;function init(callback){blob=new Blob([],{type:TEXT_PLAIN});callback();}function writeUint8Array(array,callback){blob=new Blob([blob,appendABViewSupported?array:array.buffer],{type:TEXT_PLAIN});callback();}function getData(callback,onerror){var reader=new FileReader();reader.onload=function(e){callback(e.target.result);};reader.onerror=onerror;reader.readAsText(blob,encoding);}that.init=init;that.writeUint8Array=writeUint8Array;that.getData=getData;}TextWriter.prototype=new Writer();TextWriter.prototype.constructor=TextWriter;function Data64URIWriter(contentType){var that=this,data="",pending="";function init(callback){data+="data:"+(contentType||"")+";base64,";callback();}function writeUint8Array(array,callback){var i,delta=pending.length,dataString=pending;pending="";for(i=0;i<Math.floor((delta+array.length)/3)*3-delta;i++){dataString+=String.fromCharCode(array[i]);}for(;i<array.length;i++){pending+=String.fromCharCode(array[i]);}if(dataString.length>2)data+=obj.btoa(dataString);else pending=dataString;callback();}function getData(callback){callback(data+obj.btoa(pending));}that.init=init;that.writeUint8Array=writeUint8Array;that.getData=getData;}Data64URIWriter.prototype=new Writer();Data64URIWriter.prototype.constructor=Data64URIWriter;function BlobWriter(contentType){var blob,that=this;function init(callback){blob=new Blob([],{type:contentType});callback();}function writeUint8Array(array,callback){blob=new Blob([blob,appendABViewSupported?array:array.buffer],{type:contentType});callback();}function getData(callback){callback(blob);}that.init=init;that.writeUint8Array=writeUint8Array;that.getData=getData;}BlobWriter.prototype=new Writer();BlobWriter.prototype.constructor=BlobWriter;/** 
	 * inflate/deflate core functions
	 * @param worker {Worker} web worker for the task.
	 * @param initialMessage {Object} initial message to be sent to the worker. should contain
	 *   sn(serial number for distinguishing multiple tasks sent to the worker), and codecClass.
	 *   This function may add more properties before sending.
	 */function launchWorkerProcess(worker,initialMessage,reader,writer,offset,size,onprogress,onend,onreaderror,onwriteerror){var chunkIndex=0,index,outputSize,sn=initialMessage.sn,crc;function onflush(){worker.removeEventListener('message',onmessage,false);onend(outputSize,crc);}function onmessage(event){var message=event.data,data=message.data,err=message.error;if(err){err.toString=function(){return'Error: '+this.message;};onreaderror(err);return;}if(message.sn!==sn)return;if(typeof message.codecTime==='number')worker.codecTime+=message.codecTime;// should be before onflush()
if(typeof message.crcTime==='number')worker.crcTime+=message.crcTime;switch(message.type){case'append':if(data){outputSize+=data.length;writer.writeUint8Array(data,function(){step();},onwriteerror);}else step();break;case'flush':crc=message.crc;if(data){outputSize+=data.length;writer.writeUint8Array(data,function(){onflush();},onwriteerror);}else onflush();break;case'progress':if(onprogress)onprogress(index+message.loaded,size);break;case'importScripts'://no need to handle here
case'newTask':case'echo':break;default:console.warn('zip.js:launchWorkerProcess: unknown message: ',message);}}function step(){index=chunkIndex*CHUNK_SIZE;// use `<=` instead of `<`, because `size` may be 0.
if(index<=size){reader.readUint8Array(offset+index,Math.min(CHUNK_SIZE,size-index),function(array){if(onprogress)onprogress(index,size);var msg=index===0?initialMessage:{sn:sn};msg.type='append';msg.data=array;// posting a message with transferables will fail on IE10
try{worker.postMessage(msg,[array.buffer]);}catch(ex){worker.postMessage(msg);// retry without transferables
}chunkIndex++;},onreaderror);}else{worker.postMessage({sn:sn,type:'flush'});}}outputSize=0;worker.addEventListener('message',onmessage,false);step();}function launchProcess(process,reader,writer,offset,size,crcType,onprogress,onend,onreaderror,onwriteerror){var chunkIndex=0,index,outputSize=0,crcInput=crcType==='input',crcOutput=crcType==='output',crc=new Crc32();function step(){var outputData;index=chunkIndex*CHUNK_SIZE;if(index<size)reader.readUint8Array(offset+index,Math.min(CHUNK_SIZE,size-index),function(inputData){var outputData;try{outputData=process.append(inputData,function(loaded){if(onprogress)onprogress(index+loaded,size);});}catch(e){onreaderror(e);return;}if(outputData){outputSize+=outputData.length;writer.writeUint8Array(outputData,function(){chunkIndex++;setTimeout(step,1);},onwriteerror);if(crcOutput)crc.append(outputData);}else{chunkIndex++;setTimeout(step,1);}if(crcInput)crc.append(inputData);if(onprogress)onprogress(index,size);},onreaderror);else{try{outputData=process.flush();}catch(e){onreaderror(e);return;}if(outputData){if(crcOutput)crc.append(outputData);outputSize+=outputData.length;writer.writeUint8Array(outputData,function(){onend(outputSize,crc.get());},onwriteerror);}else onend(outputSize,crc.get());}}step();}function inflate(worker,sn,reader,writer,offset,size,computeCrc32,onend,onprogress,onreaderror,onwriteerror){var crcType=computeCrc32?'output':'none';if(obj.zip.useWebWorkers){var initialMessage={sn:sn,codecClass:'Inflater',crcType:crcType};launchWorkerProcess(worker,initialMessage,reader,writer,offset,size,onprogress,onend,onreaderror,onwriteerror);}else launchProcess(new obj.zip.Inflater(),reader,writer,offset,size,crcType,onprogress,onend,onreaderror,onwriteerror);}function deflate(worker,sn,reader,writer,level,onend,onprogress,onreaderror,onwriteerror){var crcType='input';if(obj.zip.useWebWorkers){var initialMessage={sn:sn,options:{level:level},codecClass:'Deflater',crcType:crcType};launchWorkerProcess(worker,initialMessage,reader,writer,0,reader.size,onprogress,onend,onreaderror,onwriteerror);}else launchProcess(new obj.zip.Deflater(),reader,writer,0,reader.size,crcType,onprogress,onend,onreaderror,onwriteerror);}function copy(worker,sn,reader,writer,offset,size,computeCrc32,onend,onprogress,onreaderror,onwriteerror){var crcType='input';if(obj.zip.useWebWorkers&&computeCrc32){var initialMessage={sn:sn,codecClass:'NOOP',crcType:crcType};launchWorkerProcess(worker,initialMessage,reader,writer,offset,size,onprogress,onend,onreaderror,onwriteerror);}else launchProcess(new NOOP(),reader,writer,offset,size,crcType,onprogress,onend,onreaderror,onwriteerror);}// ZipReader
function decodeASCII(str){var i,out="",charCode,extendedASCII=["\xC7","\xFC","\xE9","\xE2","\xE4","\xE0","\xE5","\xE7","\xEA","\xEB","\xE8","\xEF","\xEE","\xEC","\xC4","\xC5","\xC9","\xE6","\xC6","\xF4","\xF6","\xF2","\xFB","\xF9","\xFF","\xD6","\xDC","\xF8","\xA3","\xD8","\xD7","\u0192","\xE1","\xED","\xF3","\xFA","\xF1","\xD1","\xAA","\xBA","\xBF","\xAE","\xAC","\xBD","\xBC","\xA1","\xAB","\xBB",'_','_','_',"\xA6","\xA6","\xC1","\xC2","\xC0","\xA9","\xA6","\xA6",'+','+',"\xA2","\xA5",'+','+','-','-','+','-','+',"\xE3","\xC3",'+','+','-','-',"\xA6",'-','+',"\xA4","\xF0","\xD0","\xCA","\xCB","\xC8",'i',"\xCD","\xCE","\xCF",'+','+','_','_',"\xA6","\xCC",'_',"\xD3","\xDF","\xD4","\xD2","\xF5","\xD5","\xB5","\xFE","\xDE","\xDA","\xDB","\xD9","\xFD","\xDD","\xAF","\xB4","\xAD","\xB1",'_',"\xBE","\xB6","\xA7","\xF7","\xB8","\xB0","\xA8","\xB7","\xB9","\xB3","\xB2",'_',' '];for(i=0;i<str.length;i++){charCode=str.charCodeAt(i)&0xFF;if(charCode>127)out+=extendedASCII[charCode-128];else out+=String.fromCharCode(charCode);}return out;}function decodeUTF8(string){return decodeURIComponent(escape(string));}function getString(bytes){var i,str="";for(i=0;i<bytes.length;i++){str+=String.fromCharCode(bytes[i]);}return str;}function getDate(timeRaw){var date=(timeRaw&0xffff0000)>>16,time=timeRaw&0x0000ffff;try{return new Date(1980+((date&0xFE00)>>9),((date&0x01E0)>>5)-1,date&0x001F,(time&0xF800)>>11,(time&0x07E0)>>5,(time&0x001F)*2,0);}catch(e){}}function readCommonHeader(entry,data,index,centralDirectory,onerror){entry.version=data.view.getUint16(index,true);entry.bitFlag=data.view.getUint16(index+2,true);entry.compressionMethod=data.view.getUint16(index+4,true);entry.lastModDateRaw=data.view.getUint32(index+6,true);entry.lastModDate=getDate(entry.lastModDateRaw);if((entry.bitFlag&0x01)===0x01){onerror(ERR_ENCRYPTED);return;}if(centralDirectory||(entry.bitFlag&0x0008)!==0x0008){entry.crc32=data.view.getUint32(index+10,true);entry.compressedSize=data.view.getUint32(index+14,true);entry.uncompressedSize=data.view.getUint32(index+18,true);}if(entry.compressedSize===0xFFFFFFFF||entry.uncompressedSize===0xFFFFFFFF){onerror(ERR_ZIP64);return;}entry.filenameLength=data.view.getUint16(index+22,true);entry.extraFieldLength=data.view.getUint16(index+24,true);}function createZipReader(reader,callback,onerror){var inflateSN=0;function Entry(){}Entry.prototype.getData=function(writer,onend,onprogress,checkCrc32){var that=this;function testCrc32(crc32){var dataCrc32=getDataHelper(4);dataCrc32.view.setUint32(0,crc32);return that.crc32===dataCrc32.view.getUint32(0);}function getWriterData(uncompressedSize,crc32){if(checkCrc32&&!testCrc32(crc32))onerror(ERR_CRC);else writer.getData(function(data){onend(data);});}function onreaderror(err){onerror(err||ERR_READ_DATA);}function onwriteerror(err){onerror(err||ERR_WRITE_DATA);}reader.readUint8Array(that.offset,30,function(bytes){var data=getDataHelper(bytes.length,bytes),dataOffset;if(data.view.getUint32(0)!==0x504b0304){onerror(ERR_BAD_FORMAT);return;}readCommonHeader(that,data,4,false,onerror);dataOffset=that.offset+30+that.filenameLength+that.extraFieldLength;writer.init(function(){if(that.compressionMethod===0)copy(that._worker,inflateSN++,reader,writer,dataOffset,that.compressedSize,checkCrc32,getWriterData,onprogress,onreaderror,onwriteerror);else inflate(that._worker,inflateSN++,reader,writer,dataOffset,that.compressedSize,checkCrc32,getWriterData,onprogress,onreaderror,onwriteerror);},onwriteerror);},onreaderror);};function seekEOCDR(eocdrCallback){// "End of central directory record" is the last part of a zip archive, and is at least 22 bytes long.
// Zip file comment is the last part of EOCDR and has max length of 64KB,
// so we only have to search the last 64K + 22 bytes of a archive for EOCDR signature (0x06054b50).
var EOCDR_MIN=22;if(reader.size<EOCDR_MIN){onerror(ERR_BAD_FORMAT);return;}var ZIP_COMMENT_MAX=256*256,EOCDR_MAX=EOCDR_MIN+ZIP_COMMENT_MAX;// In most cases, the EOCDR is EOCDR_MIN bytes long
doSeek(EOCDR_MIN,function(){// If not found, try within EOCDR_MAX bytes
doSeek(Math.min(EOCDR_MAX,reader.size),function(){onerror(ERR_BAD_FORMAT);});});// seek last length bytes of file for EOCDR
function doSeek(length,eocdrNotFoundCallback){reader.readUint8Array(reader.size-length,length,function(bytes){for(var i=bytes.length-EOCDR_MIN;i>=0;i--){if(bytes[i]===0x50&&bytes[i+1]===0x4b&&bytes[i+2]===0x05&&bytes[i+3]===0x06){eocdrCallback(new DataView(bytes.buffer,i,EOCDR_MIN));return;}}eocdrNotFoundCallback();},function(){onerror(ERR_READ);});}}var zipReader={getEntries:function getEntries(callback){var worker=this._worker;// look for End of central directory record
seekEOCDR(function(dataView){var datalength,fileslength;datalength=dataView.getUint32(16,true);fileslength=dataView.getUint16(8,true);if(datalength<0||datalength>=reader.size){onerror(ERR_BAD_FORMAT);return;}reader.readUint8Array(datalength,reader.size-datalength,function(bytes){var i,index=0,entries=[],entry,filename,comment,data=getDataHelper(bytes.length,bytes);for(i=0;i<fileslength;i++){entry=new Entry();entry._worker=worker;if(data.view.getUint32(index)!==0x504b0102){onerror(ERR_BAD_FORMAT);return;}readCommonHeader(entry,data,index+6,true,onerror);entry.commentLength=data.view.getUint16(index+32,true);entry.directory=(data.view.getUint8(index+38)&0x10)===0x10;entry.offset=data.view.getUint32(index+42,true);filename=getString(data.array.subarray(index+46,index+46+entry.filenameLength));entry.filename=(entry.bitFlag&0x0800)===0x0800?decodeUTF8(filename):decodeASCII(filename);if(!entry.directory&&entry.filename.charAt(entry.filename.length-1)==="/")entry.directory=true;comment=getString(data.array.subarray(index+46+entry.filenameLength+entry.extraFieldLength,index+46+entry.filenameLength+entry.extraFieldLength+entry.commentLength));entry.comment=(entry.bitFlag&0x0800)===0x0800?decodeUTF8(comment):decodeASCII(comment);entries.push(entry);index+=46+entry.filenameLength+entry.extraFieldLength+entry.commentLength;}callback(entries);},function(){onerror(ERR_READ);});});},close:function close(callback){if(this._worker){this._worker.terminate();this._worker=null;}if(callback)callback();},_worker:null};if(!obj.zip.useWebWorkers)callback(zipReader);else{createWorker('inflater',function(worker){zipReader._worker=worker;callback(zipReader);},function(err){onerror(err);});}}// ZipWriter
function encodeUTF8(string){return unescape(encodeURIComponent(string));}function getBytes(str){var i,array=[];for(i=0;i<str.length;i++){array.push(str.charCodeAt(i));}return array;}function createZipWriter(writer,callback,onerror,dontDeflate){var files={},filenames=[],datalength=0;var deflateSN=0;function onwriteerror(err){onerror(err||ERR_WRITE);}function onreaderror(err){onerror(err||ERR_READ_DATA);}var zipWriter={add:function add(name,reader,onend,onprogress,options){var header,filename,date;var worker=this._worker;function writeHeader(callback){var data;date=options.lastModDate||new Date();header=getDataHelper(26);files[name]={headerArray:header.array,directory:options.directory,filename:filename,offset:datalength,comment:getBytes(encodeUTF8(options.comment||""))};header.view.setUint32(0,0x14000808);if(options.version)header.view.setUint8(0,options.version);if(!dontDeflate&&options.level!==0&&!options.directory)header.view.setUint16(4,0x0800);header.view.setUint16(6,(date.getHours()<<6|date.getMinutes())<<5|date.getSeconds()/2,true);header.view.setUint16(8,(date.getFullYear()-1980<<4|date.getMonth()+1)<<5|date.getDate(),true);header.view.setUint16(22,filename.length,true);data=getDataHelper(30+filename.length);data.view.setUint32(0,0x504b0304);data.array.set(header.array,4);data.array.set(filename,30);datalength+=data.array.length;writer.writeUint8Array(data.array,callback,onwriteerror);}function writeFooter(compressedLength,crc32){var footer=getDataHelper(16);datalength+=compressedLength||0;footer.view.setUint32(0,0x504b0708);if(typeof crc32!=="undefined"){header.view.setUint32(10,crc32,true);footer.view.setUint32(4,crc32,true);}if(reader){footer.view.setUint32(8,compressedLength,true);header.view.setUint32(14,compressedLength,true);footer.view.setUint32(12,reader.size,true);header.view.setUint32(18,reader.size,true);}writer.writeUint8Array(footer.array,function(){datalength+=16;onend();},onwriteerror);}function writeFile(){options=options||{};name=name.trim();if(options.directory&&name.charAt(name.length-1)!=="/")name+="/";if(files.hasOwnProperty(name)){onerror(ERR_DUPLICATED_NAME);return;}filename=getBytes(encodeUTF8(name));filenames.push(name);writeHeader(function(){if(reader){if(dontDeflate||options.level===0)copy(worker,deflateSN++,reader,writer,0,reader.size,true,writeFooter,onprogress,onreaderror,onwriteerror);else deflate(worker,deflateSN++,reader,writer,options.level,writeFooter,onprogress,onreaderror,onwriteerror);}else writeFooter();},onwriteerror);}if(reader)reader.init(writeFile,onreaderror);else writeFile();},close:function close(callback){if(this._worker){this._worker.terminate();this._worker=null;}var data,length=0,index=0,indexFilename,file;for(indexFilename=0;indexFilename<filenames.length;indexFilename++){file=files[filenames[indexFilename]];length+=46+file.filename.length+file.comment.length;}data=getDataHelper(length+22);for(indexFilename=0;indexFilename<filenames.length;indexFilename++){file=files[filenames[indexFilename]];data.view.setUint32(index,0x504b0102);data.view.setUint16(index+4,0x1400);data.array.set(file.headerArray,index+6);data.view.setUint16(index+32,file.comment.length,true);if(file.directory)data.view.setUint8(index+38,0x10);data.view.setUint32(index+42,file.offset,true);data.array.set(file.filename,index+46);data.array.set(file.comment,index+46+file.filename.length);index+=46+file.filename.length+file.comment.length;}data.view.setUint32(index,0x504b0506);data.view.setUint16(index+8,filenames.length,true);data.view.setUint16(index+10,filenames.length,true);data.view.setUint32(index+12,length,true);data.view.setUint32(index+16,datalength,true);writer.writeUint8Array(data.array,function(){writer.getData(callback);},onwriteerror);},_worker:null};if(!obj.zip.useWebWorkers)callback(zipWriter);else{createWorker('deflater',function(worker){zipWriter._worker=worker;callback(zipWriter);},function(err){onerror(err);});}}function resolveURLs(urls){var a=document.createElement('a');return urls.map(function(url){a.href=url;return a.href;});}var DEFAULT_WORKER_SCRIPTS={deflater:['z-worker.js','deflate.js'],inflater:['z-worker.js','inflate.js']};function createWorker(type,callback,onerror){if(obj.zip.workerScripts!==null&&obj.zip.workerScriptsPath!==null){onerror(new Error('Either zip.workerScripts or zip.workerScriptsPath may be set, not both.'));return;}var scripts;if(obj.zip.workerScripts){scripts=obj.zip.workerScripts[type];if(!Array.isArray(scripts)){onerror(new Error('zip.workerScripts.'+type+' is not an array!'));return;}scripts=resolveURLs(scripts);}else{scripts=DEFAULT_WORKER_SCRIPTS[type].slice(0);scripts[0]=(obj.zip.workerScriptsPath||'')+scripts[0];}var worker=new Worker(scripts[0]);// record total consumed time by inflater/deflater/crc32 in this worker
worker.codecTime=worker.crcTime=0;worker.postMessage({type:'importScripts',scripts:scripts.slice(1)});worker.addEventListener('message',onmessage);function onmessage(ev){var msg=ev.data;if(msg.error){worker.terminate();// should before onerror(), because onerror() may throw.
onerror(msg.error);return;}if(msg.type==='importScripts'){worker.removeEventListener('message',onmessage);worker.removeEventListener('error',errorHandler);callback(worker);}}// catch entry script loading error and other unhandled errors
worker.addEventListener('error',errorHandler);function errorHandler(err){worker.terminate();onerror(err);}}function onerror_default(error){console.error(error);}obj.zip={Reader:Reader,Writer:Writer,BlobReader:BlobReader,Data64URIReader:Data64URIReader,TextReader:TextReader,BlobWriter:BlobWriter,Data64URIWriter:Data64URIWriter,TextWriter:TextWriter,createReader:function createReader(reader,callback,onerror){onerror=onerror||onerror_default;reader.init(function(){createZipReader(reader,callback,onerror);},onerror);},createWriter:function createWriter(writer,callback,onerror,dontDeflate){onerror=onerror||onerror_default;dontDeflate=!!dontDeflate;writer.init(function(){createZipWriter(writer,callback,onerror,dontDeflate);},onerror);},useWebWorkers:true,/**
		 * Directory containing the default worker scripts (z-worker.js, deflate.js, and inflate.js), relative to current base url.
		 * E.g.: zip.workerScripts = './';
		 */workerScriptsPath:null,/**
		 * Advanced option to control which scripts are loaded in the Web worker. If this option is specified, then workerScriptsPath must not be set.
		 * workerScripts.deflater/workerScripts.inflater should be arrays of urls to scripts for deflater/inflater, respectively.
		 * Scripts in the array are executed in order, and the first one should be z-worker.js, which is used to start the worker.
		 * All urls are relative to current base url.
		 * E.g.:
		 * zip.workerScripts = {
		 *   deflater: ['z-worker.js', 'deflate.js'],
		 *   inflater: ['z-worker.js', 'inflate.js']
		 * };
		 */workerScripts:null};};

/***/ })
/******/ ]);
//# sourceMappingURL=react-perfcascade.js.map