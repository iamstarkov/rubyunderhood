/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".app.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./js */8);


/***/ },
/* 1 */
/*!*********************************************!*\
  !*** ./~/ilyabirman-likely/source/utils.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	var bool = { yes: true, no: false };
	
	/**
	 * @internal
	 */
	var utils = {
	    /**
	     * Simple $.each, only for objects
	     *
	     * @param {Object} object
	     * @param {Function} callback
	     */
	    each: function (object, callback) {
	        for (var key in object) {
	            if (object.hasOwnProperty(key)) {
	                callback(object[key], key);
	            }
	        }
	    },
	
	    /**
	     * Convert array-like object to array
	     *
	     * @param {Object} arrayLike
	     * @returns {Array}
	     */
	    toArray: function (arrayLike) {
	        return Array.prototype.slice.call(arrayLike);
	    },
	
	    /**
	     * Merge given dictionaries (objects) into one object
	     *
	     * @param {...Object} object
	     * @returns {Object}
	     */
	    merge: function () {      // eslint-disable-line no-unused-vars
	        var result = {};
	
	        for (var i = 0; i < arguments.length; i++) {
	            var arg = arguments[i];
	
	            if (arg) {
	                for (var key in arg) {
	                    if (arg.hasOwnProperty(key)) {
	                        result[key] = arg[key];
	                    }
	                }
	            }
	        }
	
	        return result;
	    },
	
	    /**
	     * Extend one (target) object by other (subject)
	     *
	     * @param {Object} target
	     * @param {Object} subject
	     */
	    extend: function (target, subject) {
	        for (var key in subject) {
	            if (subject.hasOwnProperty(key)) {
	                target[key] = subject[key];
	            }
	        }
	    },
	
	    /**
	     * Return node.dataset or plain object for IE 10without setters
	     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js
	     *
	     * @param {Node} node
	     * @returns {Object}
	     */
	    getDataset: function (node) {
	        if (typeof node.dataset === 'object') {
	            return node.dataset;
	        }
	
	        var i;
	        var dataset = {};
	        var attributes = node.attributes;
	        var attribute;
	        var attributeName;
	
	        var toUpperCase = function (n0) {
	            return n0.charAt(1).toUpperCase();
	        };
	
	        for (i = attributes.length - 1; i >= 0; i--) {
	            attribute = attributes[i];
	            if (attribute && attribute.name &&
	                (/^data-\w[\w\-]*$/).test(attribute.name)) {
	                attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);
	                dataset[attributeName] = attribute.value;
	            }
	        }
	
	        return dataset;
	    },
	
	    /**
	     * Convert "yes" and "no" to true and false.
	     *
	     * @param {Node} node
	     * @returns {Object}
	     */
	    bools: function (node) {
	        var result = {};
	        var data = utils.getDataset(node);
	
	        for (var key in data) {
	            if (data.hasOwnProperty(key)) {
	                var value = data[key];
	
	                result[key] = bool[value] || value;
	            }
	        }
	
	        return result;
	    },
	
	    /**
	     * Map object keys in string to its values
	     *
	     * @param {String} text
	     * @param {Object} data
	     * @returns {String}
	     */
	    template: function (text, data) {
	        return text ? text.replace(/\{([^\}]+)\}/g, function (value, key) {
	            return key in data ? data[key] : value;
	        }) : '';
	    },
	
	    /**
	     * Map object keys in URL to its values
	     *
	     * @param {String} text
	     * @param {Object} data
	     * @returns {String}
	     */
	    makeUrl: function (text, data) {
	        for (var key in data) {
	            if (data.hasOwnProperty(key)) {
	                data[key] = encodeURIComponent(data[key]);
	            }
	        }
	
	        return utils.template(text, data);
	    },
	
	    /**
	     * Create query string out of data
	     *
	     * @param {Object} data
	     * @returns {String}
	     */
	    query: function (data) {
	        var filter = encodeURIComponent;
	        var query = [];
	
	        for (var key in data) {
	            if (typeof data[key] === 'object') {
	                continue;
	            }
	
	            query.push(filter(key) + '=' + filter(data[key]));
	        }
	
	        return query.join('&');
	    },
	
	    /**
	     * Set value in object using dot-notation
	     *
	     * @param {Object} object
	     * @param {String} key
	     * @param {Object} value
	     */
	    set: function (object, key, value) {
	        var frags = key.split('.');
	        var last = null;
	
	        frags.forEach(function (key, index) {
	            if (typeof object[key] === 'undefined') {
	                object[key] = {};
	            }
	
	            if (index !== frags.length - 1) {
	                object = object[key];   // eslint-disable-line no-param-reassign
	            }
	
	            last = key;
	        });
	
	        object[last] = value;
	    },
	
	    /**
	     * Returns default url for likely.
	     * It could be href from <link rel='canonical'>
	     * if presents in the document, or the current url of the page otherwise
	     *
	     * @returns {String}
	     */
	    getDefaultUrl: function () {
	        var link = document.querySelector('link[rel="canonical"]');
	
	        if (link) {
	            return link.href;
	        }
	        return window.location.href.replace(window.location.hash, '');
	    },
	};
	
	module.exports = utils;


/***/ },
/* 2 */
/*!**********************************************!*\
  !*** ./~/ilyabirman-likely/source/config.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Configuration
	 */
	
	var secure = window.location.protocol === 'https:';
	
	module.exports = {
	    name: 'likely',
	    prefix: 'likely__',
	    secure: secure,
	    protocol: secure ? 'https:' : 'http:',
	};


/***/ },
/* 3 */
/*!*******************************************!*\
  !*** ./~/ilyabirman-likely/source/dom.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	var div = document.createElement('div');
	var gid = 0;
	
	var dom = module.exports = {
	    /**
	     * Wrap SVG coords from data object into SVG tag
	     *
	     * @param {String} coords
	     * @returns {String}
	     */
	    wrapSVG: function (coords) {
	        return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" ' +
	            'viewBox="0 0 16 16"><path d="M' +
	            coords +
	            'z"/></svg>';
	    },
	
	    /**
	     * Create node from HTML
	     *
	     * @param {String} html
	     * @returns {Node}
	     */
	    createNode: function (html) {
	        div.innerHTML = html;
	
	        return div.children[0];
	    },
	
	    /**
	     * Load script
	     *
	     * @param {String} url
	     */
	    getScript: function (url) {
	        var script = document.createElement('script');
	        var head = document.head;
	
	        script.type = 'text/javascript';
	        script.src = url;
	
	        head.appendChild(script);
	        head.removeChild(script);
	    },
	
	    /**
	     * Get JSON
	     *
	     * @param {String} url
	     * @param {Function} callback
	     */
	    getJSON: function (url, callback) {
	        var name = encodeURIComponent('random_fun_' + (++gid));
	
	        var concreteUrl = url.replace(
	            /callback=(\?)/,
	            'callback=' + name
	        );
	
	        window[name] = callback;
	
	        dom.getScript(concreteUrl);
	    },
	
	    /**
	     * Find first node by selector
	     *
	     * @param {String} selector
	     * @param {Node} node
	     * @returns {Node}
	     */
	    find: function (selector, node) {
	        return (node || document).querySelector(selector);
	    },
	
	    /**
	     * Find all nodes by selector
	     *
	     * @param {String} selector
	     * @param {Node} node
	     * @returns {NodeList}
	     */
	    findAll: function (selector, node) {
	        return (node || document).querySelectorAll(selector);
	    },
	
	    /**
	     * Open the popup
	     *
	     * @param {String} url
	     * @param {String} winId
	     * @param {Number} width,
	     * @param {Number} height
	     * @returns {Object|null}
	     */
	    openPopup: function (url, winId, width, height) {
	        var left = Math.round(screen.width / 2 - width / 2);
	        var top = 0;
	
	        if (screen.height > height) {
	            top = Math.round(screen.height / 3 - height / 2);
	        }
	
	        var options = 'left=' + left +
	            ',top=' + top +
	            ',width=' + width +
	            ',height=' + height +
	            ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';
	
	        var win = window.open(url, winId, options);
	
	        if (!win) {
	            location.href = url;
	            return null;
	        }
	
	        win.focus();
	
	        return win;
	    },
	};


/***/ },
/* 4 */
/*!******************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/index.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Social network services
	 */
	
	var Service = __webpack_require__(/*! ../service */ 13);
	var utils = __webpack_require__(/*! ../utils */ 1);
	var svg = __webpack_require__(/*! ../svg.js */ 21);
	
	/* eslint-disable global-require */
	var services = {
	    odnoklassniki: __webpack_require__(/*! ./odnoklassniki */ 16),
	    vkontakte: __webpack_require__(/*! ./vk */ 20),
	    pinterest: __webpack_require__(/*! ./pinterest */ 17),
	    facebook: __webpack_require__(/*! ./facebook */ 14),
	    twitter: __webpack_require__(/*! ./twitter */ 19),
	    gplus: __webpack_require__(/*! ./gplus */ 15),
	    telegram: __webpack_require__(/*! ./telegram */ 18),
	};
	/* eslint-enable global-require */
	
	utils.each(services, function (service, key) {
	    Service(service);
	
	    service.svgi = svg[key];
	    service.name = key;
	});
	
	module.exports = services;


/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ilyabirmanLikely = __webpack_require__(/*! ilyabirman-likely */ 12);
	
	(0, _ilyabirmanLikely.initate)();
	
	var d = document; // eslint-disable-line id-length
	var $ = d.querySelector.bind(d); // eslint-disable-line id-length
	
	if ($('.js-stats')) {
	  __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! moment */ 6), __webpack_require__(/*! tablesort */ 7), __webpack_require__(/*! imports?Tablesort=tablesort!tablesort/src/sorts/tablesort.number */ 23)]; (function (moment, tablesort) {
	    tablesort($('.host-stats'), { descending: true });
	
	    var lastUpdated = $('.js-last-updated');
	    var timestamp = lastUpdated.getAttribute('data-timestamp');
	    lastUpdated.textContent = moment.unix(timestamp).locale('ru').fromNow();
	  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	}

/***/ },
/* 9 */
/*!**********************************************!*\
  !*** ./~/ilyabirman-likely/source/button.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var services = __webpack_require__(/*! ./services */ 4);
	var config = __webpack_require__(/*! ./config */ 2);
	var fetch = __webpack_require__(/*! ./fetch */ 11);
	var utils = __webpack_require__(/*! ./utils */ 1);
	var dom = __webpack_require__(/*! ./dom */ 3);
	
	var htmlSpan = '<span class="{className}">{content}</span>';
	
	/**
	 * Separate social link widget
	 *
	 * @param {Node} widget
	 * @param {Likely} likely
	 * @param {Object} options
	 */
	function LikelyButton(widget, likely, options) {
	    this.widget = widget;
	    this.likely = likely;
	    this.options = utils.merge(options);
	
	    this.init();
	}
	
	LikelyButton.prototype = {
	    /**
	     * Initiate the button
	     */
	    init: function () {
	        this.detectService();
	        this.detectParams();
	
	        if (this.service) {
	            this.initHtml();
	
	            setTimeout(this.initCounter.bind(this), 0);
	        }
	    },
	
	    /**
	     * Update the counter
	     *
	     * @param {Object} options
	     */
	    update: function (options) {
	        var className = '.' + config.prefix + 'counter';
	        var counters = dom.findAll(className, this.widget);
	
	        utils.extend(this.options, utils.merge({ forceUpdate: false }, options));
	        utils.toArray(counters).forEach(function (node) {
	            node.parentNode.removeChild(node);
	        });
	
	        this.initCounter();
	    },
	
	    /**
	     * Get the config.name of service and its options
	     */
	    detectService: function () {
	        var widget = this.widget;
	        var service = utils.getDataset(widget).service;
	
	        if (!service) {
	            service = Object.keys(services).filter(function (service) {
	                return widget.classList.contains(service);
	            })[0];
	        }
	
	        if (service) {
	            this.service = service;
	
	            utils.extend(this.options, services[service]);
	        }
	    },
	
	    /**
	     * Merge params from data-* attributes into options hash map
	     */
	    detectParams: function () {
	        var options = this.options;
	        var data = utils.getDataset(this.widget);
	
	        if (data.counter) {
	            var counter = parseInt(data.counter, 10);
	
	            if (isNaN(counter)) {
	                options.counterUrl = data.counter;
	            }
	            else {
	                options.counterNumber = counter;
	            }
	        }
	
	        options.title = data.title || options.title;
	        options.url = data.url || options.url;
	    },
	
	    /**
	     * Inititate button's HTML
	     */
	    initHtml: function () {
	        var options = this.options;
	        var widget = this.widget;
	        var text = widget.innerHTML;
	
	        widget.addEventListener('click', this.click.bind(this));
	        widget.classList.remove(this.service);
	        widget.className += (' ' + this.className('widget'));
	
	        var button = utils.template(htmlSpan, {
	            className: this.className('button'),
	            content: text,
	        });
	
	        var icon = utils.template(htmlSpan, {
	            className: this.className('icon'),
	            content: dom.wrapSVG(options.svgi),
	        });
	
	        widget.innerHTML = icon + button;
	    },
	
	    /**
	     * Fetch or get cached counter value and update the counter
	     */
	    initCounter: function () {
	        var options = this.options;
	
	        if (options.counters && options.counterNumber) {
	            this.updateCounter(options.counterNumber);
	        }
	        else if (options.counterUrl) {
	            fetch(
	                this.service,
	                options.url,
	                options
	            )(this.updateCounter.bind(this));
	        }
	    },
	
	    /**
	     * @param {String} className
	     * @returns {String}
	     */
	    className: function (className) {
	        var fullClass = config.prefix + className;
	
	        return fullClass + ' ' + fullClass + '_' + this.service;
	    },
	
	    /**
	     * Update counter
	     *
	     * @param {String} counterString
	     */
	    updateCounter: function (counterString) {
	        var counter = parseInt(counterString, 10) || 0;
	
	        var counterElement = dom.find('.' + config.name + '__counter', this.widget);
	
	        if (counterElement) {
	            counterElement.parentNode.removeChild(counterElement);
	        }
	
	        var options = {
	            className: this.className('counter'),
	            content: counter,
	        };
	
	        if (!counter && !this.options.zeroes) {
	            options.className += ' ' + config.prefix + 'counter_empty';
	            options.content = '';
	        }
	
	        this.widget.appendChild(
	            dom.createNode(utils.template(htmlSpan, options))
	        );
	
	        this.likely.updateCounter(this.service, counter);
	    },
	
	    /**
	     * Click event listener
	     * @returns {Boolean}
	     */
	    click: function () {
	        var options = this.options;
	
	        if (options.click.call(this)) {
	            var url = utils.makeUrl(options.popupUrl, {
	                url: options.url,
	                title: options.title,
	            });
	
	            dom.openPopup(
	                this.addAdditionalParamsToUrl(url),
	                config.prefix + this.service,
	                options.popupWidth,
	                options.popupHeight
	            );
	        }
	
	        return false;
	    },
	
	    /**
	     * Append service data to URL
	     *
	     * @param {String} url
	     * @returns {String}
	     */
	    addAdditionalParamsToUrl: function (url) {
	        var parameters = utils.query(utils.merge(this.widget.dataset, this.options.data));
	        var delimeter = url.indexOf('?') === -1 ? '?' : '&';
	
	        return parameters === ''
	            ? url
	            : url + delimeter + parameters;
	    },
	};
	
	module.exports = LikelyButton;


/***/ },
/* 10 */
/*!***********************************************!*\
  !*** ./~/ilyabirman-likely/source/factory.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable consistent-return, no-param-reassign */
	
	/**
	 * Factory function
	 *
	 * This function returns function with following API:
	 *
	 * - if passed argument is callback, then this callback would be called
	 *   if the value was changed
	 * - if passed argument is anything but undefined or function, then this
	 *   function behaves like setter
	 * - if argument isn't provided, then return value stored in closure
	 *
	 * @param {Object} value
	 * @returns {Function}
	 */
	module.exports = function (value) {
	    var listeners = [];
	
	    return function (argument) {
	        var type = typeof argument;
	
	        if (type === 'undefined') {
	            return value;
	        }
	        else if (type === 'function') {
	            listeners.push(argument);
	        }
	        else {
	            value = argument;
	
	            listeners.forEach(function (listener) {
	                listener(argument);
	            });
	        }
	    };
	};


/***/ },
/* 11 */
/*!*********************************************!*\
  !*** ./~/ilyabirman-likely/source/fetch.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var services = __webpack_require__(/*! ./services */ 4);
	var Factory = __webpack_require__(/*! ./factory */ 10);
	var utils = __webpack_require__(/*! ./utils */ 1);
	
	var factories = {};
	
	/**
	 * Fetch data
	 *
	 * @param {String} service
	 * @param {String} url
	 * @param {Object} options
	 * @returns {Promise}
	 */
	module.exports = function (service, url, options) {
	    if (!factories[service]) {
	        factories[service] = {};
	    }
	
	    var counters = factories[service];
	    var counter = counters[url];
	
	    if (!options.forceUpdate && counter) {
	        return counter;
	    }
	
	    counter = Factory();
	
	    var href = utils.makeUrl(options.counterUrl, {
	        url: url,
	    });
	
	    services[service].counter(href, counter, url);
	
	    counters[url] = counter;
	    return counter;
	};


/***/ },
/* 12 */
/*!*********************************************!*\
  !*** ./~/ilyabirman-likely/source/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Likely = __webpack_require__(/*! ./widget */ 22);
	var config = __webpack_require__(/*! ./config */ 2);
	var utils = __webpack_require__(/*! ./utils */ 1);
	var dom = __webpack_require__(/*! ./dom */ 3);
	
	/**
	 * @param {Node} node
	 * @param {Object} options
	 * @returns {Likely}
	 */
	var likely = function (node, options) {
	    var fullOptions = options || {};
	
	    var widget = node[config.name];
	
	    if (widget) {
	        widget.update(fullOptions);
	    }
	    else {
	        node[config.name] = new Likely(node, utils.merge(
	            {}, likely.defaults,
	            fullOptions, utils.bools(node)
	        ));
	    }
	
	    return widget;
	};
	
	/**
	 * Initiate Likely buttons on load
	 */
	likely.initiate = likely.initate = function () {
	    var widgets = dom.findAll('.' + config.name);
	
	    utils.toArray(widgets)
	        .forEach(function (widget) {
	            likely(widget);
	        });
	};
	
	/**
	 * Defaults options for likely
	 */
	likely.defaults = {
	    counters: true,
	    timeout: 1e3,
	    zeroes: false,
	    title: document.title,
	    wait: 0.5e3,
	    url: utils.getDefaultUrl(),
	};
	
	module.exports = likely;


/***/ },
/* 13 */
/*!***********************************************!*\
  !*** ./~/ilyabirman-likely/source/service.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dom = __webpack_require__(/*! ./dom */ 3);
	
	/**
	 * @param {String} url
	 * @param {Function} factory
	 */
	var counter = function (url, factory) {
	    var self = this;
	
	    dom.getJSON(url, function (count) {
	        try {
	            var convertedNumber = typeof self.convertNumber === 'function' ? self.convertNumber(count) : count;
	            factory(convertedNumber);
	        }
	        catch (e) {}
	    });
	};
	
	/**
	 * @param {Object} options
	 */
	module.exports = function (options) {
	    options.counter = options.counter || counter;
	    options.click = options.click || function () {
	        return true;
	    };
	};


/***/ },
/* 14 */
/*!*********************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/facebook.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Facebook service provider
	 */
	
	module.exports = {
	    counterUrl: 'https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?',
	    convertNumber: function (counter) {
	        return counter.data[0].total_count;
	    },
	    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
	    popupWidth: 600,
	    popupHeight: 500,
	};


/***/ },
/* 15 */
/*!******************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/gplus.js ***!
  \******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Google+ service provider
	 */
	
	var gplus = {
	    counterUrl: 'https://share.yandex.net/counter/gpp/?url={url}&callback=?',
	    gid: 0,
	    promises: {},
	    popupUrl: 'https://plus.google.com/share?url={url}',
	    popupWidth: 700,
	    popupHeight: 500,
	};
	
	module.exports = gplus;


/***/ },
/* 16 */
/*!**************************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/odnoklassniki.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Odnoklassniki service provider
	 */
	
	var config = __webpack_require__(/*! ../config */ 2);
	var utils = __webpack_require__(/*! ../utils */ 1);
	var dom = __webpack_require__(/*! ../dom */ 3);
	
	var odnoklassniki = {
	    counterUrl: config.protocol + '//connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
	    counter: function (url, promise) {
	        this.promises.push(promise);
	
	        dom.getScript(utils.makeUrl(url, {
	            index: this.promises.length - 1,
	        }));
	    },
	    promises: [],
	    popupUrl: config.protocol + '//connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
	    popupWidth: 640,
	    popupHeight: 400,
	};
	
	utils.set(window, 'ODKL.updateCount', function (index, counter) {
	    odnoklassniki.promises[index](counter);
	});
	
	module.exports = odnoklassniki;


/***/ },
/* 17 */
/*!**********************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/pinterest.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Pinterest service provider
	 */
	
	var config = __webpack_require__(/*! ../config */ 2);
	
	module.exports = {
	    counterUrl: config.protocol + '//api.pinterest.com/v1/urls/count.json?url={url}&callback=?',
	    convertNumber: function (counter) {
	        return counter.count;
	    },
	    popupUrl: config.protocol + '//pinterest.com/pin/create/button/?url={url}&description={title}',
	    popupWidth: 630,
	    popupHeight: 270,
	};


/***/ },
/* 18 */
/*!*********************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/telegram.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Telegram service provider
	 */
	
	module.exports = {
	    popupUrl: 'https://telegram.me/share/url?url={url}',
	    popupWidth: 600,
	    popupHeight: 500,
	};


/***/ },
/* 19 */
/*!********************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/twitter.js ***!
  \********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Twitter service provider
	 */
	
	module.exports = {
	    popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',
	    popupWidth: 600,
	    popupHeight: 450,
	    click: function () {
	        if (!/[\.\?:\-–—]\s*$/.test(this.options.title)) {
	            this.options.title += ':';
	        }
	
	        return true;
	    },
	};


/***/ },
/* 20 */
/*!***************************************************!*\
  !*** ./~/ilyabirman-likely/source/services/vk.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Vkontakte service provider
	 */
	
	var config = __webpack_require__(/*! ../config */ 2);
	var utils = __webpack_require__(/*! ../utils */ 1);
	var dom = __webpack_require__(/*! ../dom */ 3);
	
	var vkontakte = {
	    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
	    counter: function (url, promise) {
	        this.promises.push(promise);
	
	        dom.getScript(utils.makeUrl(url, {
	            index: this.promises.length - 1,
	        }));
	    },
	    promises: [],
	    popupUrl: config.protocol + '//vk.com/share.php?url={url}&title={title}',
	    popupWidth: 550,
	    popupHeight: 330,
	};
	
	utils.set(window, 'VK.Share.count', function (index, count) {
	    vkontakte.promises[index](count);
	});
	
	module.exports = vkontakte;


/***/ },
/* 21 */
/*!*******************************************!*\
  !*** ./~/ilyabirman-likely/source/svg.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * SVG icons for buttons
	 * @type {Object}
	 */
	module.exports = {
	    facebook: '13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3',
	    twitter: '15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353',
	    vkontakte: '13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71',
	    gplus: '8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8',
	    pinterest: '7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8',
	    odnoklassniki: '8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184',
	    telegram: '6,11.960784l-1,-3l11,-8l-15.378,5.914c0,0 -0.672,0.23 -0.619,0.655c0.053,0.425 0.602,0.619 0.602,0.619l3.575,1.203l1.62,5.154l2.742,-2.411l-0.007,-0.005l3.607,2.766c0.973,0.425 1.327,-0.46 1.327,-0.46l2.531,-13.435l-10,11z',
	};


/***/ },
/* 22 */
/*!**********************************************!*\
  !*** ./~/ilyabirman-likely/source/widget.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Button = __webpack_require__(/*! ./button */ 9);
	
	var config = __webpack_require__(/*! ./config */ 2);
	var utils = __webpack_require__(/*! ./utils */ 1);
	
	/**
	 * Main widget view
	 *
	 * @param {Node} container
	 * @param {Object} options
	 */
	function Likely(container, options) {
	    this.container = container;
	    this.options = options;
	
	    this.countersLeft = 0;
	    this.buttons = [];
	    this.number = 0;
	
	    this.init();
	}
	
	Likely.prototype = {
	    /**
	     * Initiate the social buttons widget
	     */
	    init: function () {
	        utils.toArray(this.container.children)
	             .forEach(this.addButton.bind(this));
	
	        if (this.options.counters) {
	            this.timer = setTimeout(this.appear.bind(this), this.options.wait);
	            this.timeout = setTimeout(this.ready.bind(this), this.options.timeout);
	        }
	        else {
	            this.appear();
	        }
	    },
	
	    /**
	     * Add a button
	     *
	     * @param {Node} node
	     */
	    addButton: function (node) {
	        var button = new Button(node, this, this.options);
	
	        this.buttons.push(button);
	
	        if (button.options.counterUrl) {
	            this.countersLeft++;
	        }
	    },
	
	    /**
	     * Update the timer with URL
	     *
	     * @param {Object} options
	     */
	    update: function (options) {
	        if (
	            options.forceUpdate ||
	            options.url !== this.options.url
	        ) {
	            this.countersLeft = this.buttons.length;
	            this.number = 0;
	
	            this.buttons.forEach(function (button) {
	                button.update(options);
	            });
	        }
	    },
	
	    /**
	     * Update counter
	     *
	     * @param {String} service
	     * @param {Number} counter
	     */
	    updateCounter: function (service, counter) {
	        if (counter) {
	            this.number += counter;
	        }
	
	        this.countersLeft--;
	
	        if (this.countersLeft === 0) {
	            this.appear();
	            this.ready();
	        }
	    },
	
	    /**
	     * Show the buttons with smooth animation
	     */
	    appear: function () {
	        this.container.classList.add(config.name + '_visible');
	    },
	
	    /**
	     * Get. Set. Ready.
	     */
	    ready: function () {
	        if (this.timeout) {
	            clearTimeout(this.timeout);
	
	            this.container.classList.add(config.name + '_ready');
	        }
	    },
	};
	
	module.exports = Likely;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map