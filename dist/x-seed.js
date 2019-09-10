(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Seed"] = factory(require("react"), require("react-dom"));
	else
		root["Seed"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Mask = __webpack_require__(1);

	var _Mask2 = _interopRequireDefault(_Mask);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = _Mask2.default; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-xui/x-mask
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	}; /*
	    * Created with Visual Studio Code.
	    * github: https://github.com/React-xui/x-seed
	    * User: 田想兵
	    * Date: 2017-05-14
	    * Time: 20:00:00
	    * Contact: 55342775@qq.com
	    */

	// import Style from './_Seed'; 


	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _xDialog = __webpack_require__(3);

	var _xDialog2 = _interopRequireDefault(_xDialog);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Mask = {
	  defaultOptions: { content: _react2.default.createElement('div', null, 'loading'), mask: false },
	  setDefaultOptions: function setDefaultOptions(opts) {
	    _extends(this.defaultOptions, opts);
	  },

	  cache: [],
	  show: function show(opts) {
	    opts = _extends({}, this.defaultOptions, { buttons: false, maskHide: false, className: 'x-mask' }, opts);
	    console.log(opts);
	    var m = _xDialog2.default.show(opts);
	    this.cache.push(m);
	    return m;
	  },
	  hide: function hide() {
	    var m = this.cache.pop();
	    m && m.hide();
	  }
	};
	exports.default = Mask;
	// export default class Seed extends Component {
	//   render () {
	//     console.log(123)
	//     return (

	//     );
	//   }
	// }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Dialog = __webpack_require__(4);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// export default Dialog;
	module.exports = _Dialog2.default; /*
	                                    * Created with Visual Studio Code.
	                                    * github: https://github.com/React-Plugin/x-dialog
	                                    * User: 田想兵
	                                    * Date: 2017-05-16
	                                    * Time: 20:00:00
	                                    * Contact: 55342775@qq.com
	                                    */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _DialogPortal = __webpack_require__(15);

	var _DialogPortal2 = _interopRequireDefault(_DialogPortal);

	var _xI18n = __webpack_require__(17);

	var _xI18n2 = _interopRequireDefault(_xI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-Plugin/x-dialog
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2017-05-16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var renderSubtreeIntoContainer = _reactDom2.default.unstable_renderSubtreeIntoContainer;

	// let zIndex=9;

	var Dialog = function (_Component) {
	  _inherits(Dialog, _Component);

	  _createClass(Dialog, [{
	    key: "componentWillReceiveProps",

	    // static getDerivedStateFromProps(props, state){
	    //   if(state.isShow!==props.isShow){
	    //     return {isShow:props.isShow};
	    //   }
	    // }
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.isShow != this.state.isShow) {
	        this.setState({ isShow: newProps.isShow });
	      }
	    }
	  }], [{
	    key: "show",
	    value: function show(config) {
	      var myRef = _react2.default.createRef;
	      var div = document.createDocumentFragment('div');
	      var currentConfig = _extends({ children: config.content }, config, { isShow: true, ref: function ref(_ref) {
	          return myRef = _ref;
	        } });
	      function render(props) {
	        _reactDom2.default.render(_react2.default.createElement(Dialog, props), div);
	      }
	      render(currentConfig);
	      return myRef;
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      _DialogPortal2.default.hide();
	    }
	  }, {
	    key: "hideAll",
	    value: function hideAll() {
	      _DialogPortal2.default.hideAll();
	    }
	  }]);

	  function Dialog(props) {
	    _classCallCheck(this, Dialog);

	    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

	    _initialiseProps.call(_this);

	    if (typeof props.zIndex !== 'undefined') {
	      Dialog.zIndex = props.zIndex;
	    }
	    _this.state = { isShow: props.isShow, zIndex: Dialog.zIndex };
	    return _this;
	  }

	  _createClass(Dialog, [{
	    key: "componentDidUpdate",

	    //props有更新时调用事件,更新portal组件，相当于render。
	    // componentWillReceiveProps(newProps) {
	    //   this.renderPortal(newProps);
	    // }
	    value: function componentDidUpdate() {
	      this.renderPortal();
	    }
	    //初始化时插入父级和渲染一次portal组件

	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {

	      this.renderPortal();
	    }
	    //模拟render方法，调用portal组件时传入父级容器

	  }, {
	    key: "renderPortal",
	    value: function renderPortal() {
	      // console.log(this.props)
	      var dd = _react2.default.createElement(
	        _xI18n2.default,
	        { componentName: "Dialog", defaultValue: this.props.local },
	        this.renderContent
	      );
	      if (!this.state.isShow) {
	        dd = null;
	      } else if (!this.node) {
	        this.node = document.createElement("div");
	        this.props.container.appendChild(this.node);
	        renderSubtreeIntoContainer(this, dd, this.node);
	      } else {
	        renderSubtreeIntoContainer(this, dd, this.node);
	      }
	    }
	  }, {
	    key: "componentWillUnmount",

	    //组件销毁时触发,移除绑定
	    value: function componentWillUnmount() {
	      if (this.node) {
	        _reactDom2.default.unmountComponentAtNode(this.node);
	        this.node.parentNode.removeChild(this.node);
	        this.node = null;
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return null;
	    }
	  }]);

	  return Dialog;
	}(_react.Component);

	Dialog.propTypes = {
	  isShow: _propTypes2.default.bool.isRequired,
	  mask: _propTypes2.default.bool,
	  children: _propTypes2.default.node
	};
	Dialog.defaultProps = {
	  isShow: false,
	  mask: true,
	  container: document.body
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this.hide = function () {
	    _this2.setState({ isShow: false }, function () {
	      if (_this2.node) {
	        _reactDom2.default.unmountComponentAtNode(_this2.node);
	        _this2.node.parentNode.removeChild(_this2.node);
	        _this2.node = null;
	      }
	    });
	  };

	  this.renderContent = function (local) {
	    // console.log(this.props)
	    var props = _extends({}, _this2.props);
	    props.afterHide = function () {
	      _this2.props.afterHide && _this2.props.afterHide();
	      _this2.hide();
	    };
	    if (_this2.state.isShow) {
	      if (_this2.props.draggable) {
	        return _react2.default.createElement(_DialogPortal2.default, _extends({}, props, _this2.state, { local: local, onClick: _this2.onFocus }));
	      } else {
	        return _react2.default.createElement(_DialogPortal2.default, _extends({}, props, _this2.state, { local: local, onClick: _this2.onFocus }));
	      }
	    }
	  };

	  this.onFocus = function () {
	    Dialog.zIndex++;
	    _this2.setState({ zIndex: Dialog.zIndex });
	  };
	};

	exports.default = Dialog;


	Dialog.zIndex = 1000;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if ((undefined) !== 'production') {
	  var ReactIs = __webpack_require__(6);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(9)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(13)();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if ((undefined) === 'production') {
	  module.exports = __webpack_require__(7);
	} else {
	  module.exports = __webpack_require__(8);
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/** @license React v16.9.0
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
	60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
	exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
	exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.9.0
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if ((undefined) !== "production") {
	  (function() {
	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(6);
	var assign = __webpack_require__(10);

	var ReactPropTypesSecret = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(12);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if ((undefined) !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if ((undefined) !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if ((undefined) !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if ((undefined) !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      (undefined) !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
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
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if ((undefined) !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if ((undefined) !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if ((undefined) !== 'production') {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(11);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDraggable = __webpack_require__(16);

	var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-Plugin/x-dialog
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2017-05-16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var lastDialog = null,
	    dialogList = [];

	var Dialog = function (_PureComponent) {
	  _inherits(Dialog, _PureComponent);

	  function Dialog(props) {
	    _classCallCheck(this, Dialog);

	    var _this2 = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

	    _this2.container = document.documentElement;
	    _this2.bounds = 'html';

	    _this2.keyBind = function (e) {
	      // console.log(e);
	      if (e.keyCode === 27) {
	        // console.log(this.dialog)
	        _this2.hide();
	      }
	    };

	    _this2.setPosition = function (newProps) {
	      var _this = _this2;
	      _this.dialog.className ? _this.dialog.className += " opacity-animate" : undefined;
	      // console.log(this.refs.dialogContent.offsetHeight)
	      // console.log(-this.refs.dialogContent.offsetLeft,-this.refs.dialogContent.offsetTop)
	      var ch = _this2.container.clientHeight;
	      var dh = _this.refs.dialogContent.offsetHeight;
	      var stop = _this2.container.scrollTop;
	      var ot = parseInt(_this.refs.dialogContent.offsetTop);
	      var sl = _this2.container.scrollLeft;
	      var x = 0,
	          y = 0;
	      if (ot < 0) {
	        y = 0;
	      } else {
	        y = Math.max(0, parseInt((ch - dh) / 2)) + stop;
	      }

	      // console.log(ot,y)
	      _this.setState({
	        defaultPosition: {
	          x: sl + parseInt((_this2.container.clientWidth - _this.refs.dialogContent.offsetWidth) / 2),
	          y: y //: parseInt((this.container.clientHeight - this.refs.dialogContent.offsetHeight) / 2)
	        }
	      }, function () {
	        _this.props.afterShow();
	      });
	      var height = parseInt(_this.refs.dialogContent.offsetHeight);
	      var maxHeight = newProps.height || parseInt(_this2.container.clientHeight);
	      if (height >= maxHeight) {
	        _this.refs.dialogContent.style.height = maxHeight + "px";
	        var bodyHeight = maxHeight - (_this.refs.dialogHeader.offsetHeight || 0) - (_this.refs.dialogFooter.offsetHeight || 0) - 2;
	        _this.refs.dialogBody.style.height = Math.max(0, bodyHeight) + "px";
	        // console.log(bodyHeight);
	        // console.log(
	        //   maxHeight,
	        //   this.refs.dialogHeader.offsetHeight,
	        //   this.refs.dialogFooter.offsetHeight,
	        //   this.refs.dialogBody.style.height
	        // );
	      }
	      // _this.refs.dialogContent.style.zIndex = _this.props.zIndex;
	      // _this.dialog.style.height = _this.refs.dialogBody.clientHeight+'px';
	      // _this.dialog.style.width = _this.refs.dialogBody.clientWidth+'px';
	    };

	    _this2.maskHandle = function () {
	      _this2.props.maskHide && _this2.hide();
	    };

	    _this2.onFocus = function () {
	      lastDialog = _this2;
	      _this2.props.onClick();
	    };

	    _this2.id = +new Date();
	    _this2.dialog = null;
	    _this2.state = { isShow: props.isShow, defaultPosition: {} };
	    _this2.keyBind = _this2.keyBind.bind(_this2); //方便移除事件绑定.每次bind会生成新的对象
	    //容器配置
	    if (document.body != _this2.props.container) {
	      _this2.container = _this2.props.container;
	      console.log('position', _this2.container.style.position);
	      if (_this2.container.style.position == 'static' || _this2.container.style.position == '') {
	        _this2.container.style.position = 'relative';
	        _this2.bounds = 'parent';
	        // console.log({left: 0, top: 0, right: this.container.clientWidth, bottom: this.container.clientHeight})
	        // this.bounds = {left: 0, top: 0, right: this.container.clientWidth, bottom: this.container.clientHeight};
	      }
	    } else {
	      _this2.container = document.documentElement;
	    }
	    _this2.setDialogRef = function (element) {
	      _this2.dialog = element;
	    };
	    return _this2;
	  }

	  _createClass(Dialog, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(newProps) {
	      // console.log(newProps.isShow, this.state.isShow);
	      if (newProps.isShow && !this.state.isShow) {
	        this.show(newProps);
	      } else if (!newProps.isShow && this.state.isShow) {
	        this.hide(newProps);
	      }
	    }
	  }, {
	    key: "timerHide",
	    value: function timerHide(newProps) {
	      var _this3 = this;

	      if (newProps.timer) {
	        this.clearTimer();
	        this.timer = setTimeout(function () {
	          _this3.state.isShow && _this3.hide();
	        }, newProps.timer);
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      var _this4 = this;

	      this.clearTimer();
	      // console.log("unmount");
	      lastDialog = null;
	      dialogList.forEach(function (item, i) {
	        if (item.id === _this4.id) {
	          dialogList.splice(i, 1);
	        }
	      });
	      document.removeEventListener("keydown", this.keyBind);
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      // console.log(this.dialog)
	      document.addEventListener("keydown", this.keyBind);
	      if (this.props.isShow) {
	        this.show(this.props);
	      }
	      lastDialog = this;
	      dialogList.push({ instance: this, id: this.id });
	    }
	  }, {
	    key: "clearTimer",
	    value: function clearTimer() {
	      this.timer && clearTimeout(this.timer);
	    }
	  }, {
	    key: "show",
	    value: function show(newProps) {
	      var _this5 = this;

	      // console.log("show");
	      var _this = this;
	      this.clearTimer();
	      this.setState({ isShow: true }, function () {
	        _this5.setPosition(newProps);
	        // let st = setTimeout(() => {
	        //   clearTimeout(st);
	        //     this.setPosition(newProps);
	        // }, 0);
	      });
	      this.timerHide(newProps);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      // console.log("hide");
	      // this._hide();
	      if (this.dialog) {
	        var cls = this.dialog.className;
	        this.dialog.className = cls.replace("opacity-animate", "opacity-animate-hide");
	      }
	      // this._hide();
	      this.dialog.addEventListener('transitionend', this._hide.bind(this));
	      // setTimeout(this._hide.bind(this), 3000);
	    }
	  }, {
	    key: "_hide",
	    value: function _hide() {
	      var _this6 = this;

	      this.setState({ isShow: false }, function () {
	        _this6.props.afterHide();
	      });
	    }
	  }, {
	    key: "renderHTML",
	    value: function renderHTML() {
	      var _props = this.props,
	          local = _props.local,
	          buttons = _props.buttons,
	          okCallback = _props.okCallback;

	      if (typeof buttons === "undefined") {
	        this.buttons = _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "button",
	            { className: "d-ok", onClick: okCallback.bind(this) },
	            local.submit
	          ),
	          _react2.default.createElement(
	            "button",
	            { className: "d-cancel", onClick: this.hide.bind(this) },
	            local.cancel
	          )
	        );
	      } else if (buttons) {
	        this.buttons = buttons;
	      } else {
	        this.buttons = undefined;
	      }
	      // console.log(this.buttons);
	      // console.log(this.state.bounds)
	      var maskHeight = this.container == document.body || this.container == document.documentElement ? document.documentElement.clientHeight + 'px' : this.container.offsetHeight + 'px';
	      if (this.state.isShow) {
	        var DD = this.props.draggable ? _react2.default.createElement(
	          _reactDraggable2.default,
	          { handle: this.props.dragHandle || ".dialog-title", bounds: this.bounds },
	          this.renderDialog()
	        ) : this.renderDialog();
	        if (this.props.mask) {
	          return _react2.default.createElement(
	            "div",
	            {
	              className: "x-dialog-continer"
	            },
	            _react2.default.createElement(
	              "div",
	              { className: "x-dialog", ref: this.setDialogRef, style: { height: maskHeight } },
	              DD,
	              _react2.default.createElement("div", { style: { height: maskHeight }, className: "x-dialog-mask", onClick: this.maskHandle })
	            )
	          );
	        } else {
	          return _react2.default.createElement(
	            "div",
	            { className: "x-dialog", ref: this.setDialogRef },
	            DD
	          );
	        }
	      } else {
	        return null;
	      }
	      // return this.state.isShow
	      //   ? <div
	      //     className={
	      //       this.props.mask
	      //         ? "x-dialog-continer x-dialog-mask"
	      //         : "x-dialog-continer"
	      //     }
	      //     style={{ zIndex: this.props.zIndex }}
	      //   >
	      //     <div className="x-dialog" ref="dialog">
	      //       <Draggable bounds="parent">{this.renderDialog()}</Draggable>
	      //     </div>
	      //   </div>
	      //   : <div />;
	    }
	  }, {
	    key: "renderDialog",
	    value: function renderDialog() {
	      var _props2 = this.props,
	          local = _props2.local,
	          buttons = _props2.buttons,
	          okCallback = _props2.okCallback;

	      return _react2.default.createElement(
	        "div",
	        {
	          className: "dialog-content " + this.props.className,
	          ref: "dialogContent",
	          onClick: this.onFocus,
	          style: {
	            width: this.props.width || "auto",
	            height: this.props.height || "auto",
	            top: this.state.defaultPosition.y,
	            left: this.state.defaultPosition.x,
	            zIndex: this.props.zIndex
	          }
	        },
	        this.props.title ? _react2.default.createElement(
	          "div",
	          { className: "dialog-title", ref: "dialogHeader" },
	          _react2.default.createElement(
	            "h4",
	            null,
	            this.props.title
	          ),
	          _react2.default.createElement(
	            "div",
	            {
	              onClick: this.hide.bind(this),
	              className: "dialog-close-con"
	            },
	            this.props.closeIcon
	          )
	        ) : undefined,
	        _react2.default.createElement(
	          "div",
	          { className: "dialog-body", ref: "dialogBody" },
	          this.props.children
	        ),
	        _react2.default.createElement(
	          "div",
	          { ref: "dialogFooter" },
	          this.buttons ? _react2.default.createElement(
	            "div",
	            { className: "dialog-action" },
	            this.buttons
	          ) : undefined
	        )
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return this.renderHTML();
	    }
	  }], [{
	    key: "hide",
	    value: function hide() {
	      lastDialog && lastDialog.hide();
	    }
	  }, {
	    key: "hideAll",
	    value: function hideAll() {
	      dialogList.forEach(function (item) {
	        item.instance.hide();
	      });
	    }
	  }]);

	  return Dialog;
	}(_react.PureComponent);

	Dialog.propTypes = {
	  isShow: _propTypes2.default.bool.isRequired,
	  mask: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  zIndex: _propTypes2.default.number,
	  height: _propTypes2.default.number,
	  buttons: _propTypes2.default.any,
	  closeIcon: _propTypes2.default.node,
	  afterHide: _propTypes2.default.func,
	  afterShow: _propTypes2.default.func,
	  okCallback: _propTypes2.default.func,
	  dragHandle: _propTypes2.default.string,
	  draggable: _propTypes2.default.bool,
	  maskHide: _propTypes2.default.bool
	};
	Dialog.defaultProps = {
	  isShow: false,
	  mask: true,
	  className: "",
	  zIndex: 0,
	  maskHide: true,
	  closeIcon: _react2.default.createElement(
	    "button",
	    { className: "dialog-close" },
	    _react2.default.createElement(
	      "span",
	      null,
	      "\xD7"
	    )
	  ),
	  dragHandle: '.dialog-title',
	  draggable: false,
	  afterHide: function afterHide() {},
	  afterShow: function afterShow() {},
	  okCallback: function okCallback() {},
	  container: document.body
	};
	exports.default = Dialog;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(14), __webpack_require__(2)) :
		typeof define === 'function' && define.amd ? define(['react-dom', 'react'], factory) :
		(global.ReactDraggable = factory(global.ReactDOM,global.React));
	}(this, (function (ReactDOM,React) { 'use strict';

		ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
		React = React && React.hasOwnProperty('default') ? React['default'] : React;

		function createCommonjsModule(fn, module) {
			return module = { exports: {} }, fn(module, module.exports), module.exports;
		}

		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 *
		 * 
		 */

		function makeEmptyFunction(arg) {
		  return function () {
		    return arg;
		  };
		}

		/**
		 * This function accepts and discards inputs; it has no side effects. This is
		 * primarily useful idiomatically for overridable function endpoints which
		 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
		 */
		var emptyFunction = function emptyFunction() {};

		emptyFunction.thatReturns = makeEmptyFunction;
		emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
		emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
		emptyFunction.thatReturnsNull = makeEmptyFunction(null);
		emptyFunction.thatReturnsThis = function () {
		  return this;
		};
		emptyFunction.thatReturnsArgument = function (arg) {
		  return arg;
		};

		var emptyFunction_1 = emptyFunction;

		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 *
		 */

		/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */

		var validateFormat = function validateFormat(format) {};

		{
		  validateFormat = function validateFormat(format) {
		    if (format === undefined) {
		      throw new Error('invariant requires an error message argument');
		    }
		  };
		}

		function invariant(condition, format, a, b, c, d, e, f) {
		  validateFormat(format);

		  if (!condition) {
		    var error;
		    if (format === undefined) {
		      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
		    } else {
		      var args = [a, b, c, d, e, f];
		      var argIndex = 0;
		      error = new Error(format.replace(/%s/g, function () {
		        return args[argIndex++];
		      }));
		      error.name = 'Invariant Violation';
		    }

		    error.framesToPop = 1; // we don't care about invariant's own frame
		    throw error;
		  }
		}

		var invariant_1 = invariant;

		/**
		 * Similar to invariant but only logs a warning if the condition is not met.
		 * This can be used to log issues in development environments in critical
		 * paths. Removing the logging code for production environments will keep the
		 * same logic and follow the same code paths.
		 */

		var warning = emptyFunction_1;

		{
		  var printWarning = function printWarning(format) {
		    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      args[_key - 1] = arguments[_key];
		    }

		    var argIndex = 0;
		    var message = 'Warning: ' + format.replace(/%s/g, function () {
		      return args[argIndex++];
		    });
		    if (typeof console !== 'undefined') {
		      console.error(message);
		    }
		    try {
		      // --- Welcome to debugging React ---
		      // This error was thrown as a convenience so that you can use this stack
		      // to find the callsite that caused this warning to fire.
		      throw new Error(message);
		    } catch (x) {}
		  };

		  warning = function warning(condition, format) {
		    if (format === undefined) {
		      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
		    }

		    if (format.indexOf('Failed Composite propType: ') === 0) {
		      return; // Ignore CompositeComponent proptype check.
		    }

		    if (!condition) {
		      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
		        args[_key2 - 2] = arguments[_key2];
		      }

		      printWarning.apply(undefined, [format].concat(args));
		    }
		  };
		}

		var warning_1 = warning;

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

		var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */

		var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

		var ReactPropTypesSecret_1 = ReactPropTypesSecret;

		{
		  var invariant$1 = invariant_1;
		  var warning$1 = warning_1;
		  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
		  var loggedTypeFailures = {};
		}

		/**
		 * Assert that the values match with the type specs.
		 * Error messages are memorized and will only be shown once.
		 *
		 * @param {object} typeSpecs Map of name to a ReactPropType
		 * @param {object} values Runtime values that need to be type-checked
		 * @param {string} location e.g. "prop", "context", "child context"
		 * @param {string} componentName Name of the component for error messages.
		 * @param {?Function} getStack Returns the component stack.
		 * @private
		 */
		function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		  {
		    for (var typeSpecName in typeSpecs) {
		      if (typeSpecs.hasOwnProperty(typeSpecName)) {
		        var error;
		        // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.
		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
		          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
		        } catch (ex) {
		          error = ex;
		        }
		        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
		        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error.message] = true;

		          var stack = getStack ? getStack() : '';

		          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
		        }
		      }
		    }
		  }
		}

		var checkPropTypes_1 = checkPropTypes;

		var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
		  /* global Symbol */
		  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
		  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

		  /**
		   * Returns the iterator method function contained on the iterable object.
		   *
		   * Be sure to invoke the function with the iterable as context:
		   *
		   *     var iteratorFn = getIteratorFn(myIterable);
		   *     if (iteratorFn) {
		   *       var iterator = iteratorFn.call(myIterable);
		   *       ...
		   *     }
		   *
		   * @param {?object} maybeIterable
		   * @return {?function}
		   */
		  function getIteratorFn(maybeIterable) {
		    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
		    if (typeof iteratorFn === 'function') {
		      return iteratorFn;
		    }
		  }

		  /**
		   * Collection of methods that allow declaration and validation of props that are
		   * supplied to React components. Example usage:
		   *
		   *   var Props = require('ReactPropTypes');
		   *   var MyArticle = React.createClass({
		   *     propTypes: {
		   *       // An optional string prop named "description".
		   *       description: Props.string,
		   *
		   *       // A required enum prop named "category".
		   *       category: Props.oneOf(['News','Photos']).isRequired,
		   *
		   *       // A prop named "dialog" that requires an instance of Dialog.
		   *       dialog: Props.instanceOf(Dialog).isRequired
		   *     },
		   *     render: function() { ... }
		   *   });
		   *
		   * A more formal specification of how these methods are used:
		   *
		   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		   *   decl := ReactPropTypes.{type}(.isRequired)?
		   *
		   * Each and every declaration produces a function with the same signature. This
		   * allows the creation of custom validation functions. For example:
		   *
		   *  var MyLink = React.createClass({
		   *    propTypes: {
		   *      // An optional string or URI prop named "href".
		   *      href: function(props, propName, componentName) {
		   *        var propValue = props[propName];
		   *        if (propValue != null && typeof propValue !== 'string' &&
		   *            !(propValue instanceof URI)) {
		   *          return new Error(
		   *            'Expected a string or an URI for ' + propName + ' in ' +
		   *            componentName
		   *          );
		   *        }
		   *      }
		   *    },
		   *    render: function() {...}
		   *  });
		   *
		   * @internal
		   */

		  var ANONYMOUS = '<<anonymous>>';

		  // Important!
		  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
		  var ReactPropTypes = {
		    array: createPrimitiveTypeChecker('array'),
		    bool: createPrimitiveTypeChecker('boolean'),
		    func: createPrimitiveTypeChecker('function'),
		    number: createPrimitiveTypeChecker('number'),
		    object: createPrimitiveTypeChecker('object'),
		    string: createPrimitiveTypeChecker('string'),
		    symbol: createPrimitiveTypeChecker('symbol'),

		    any: createAnyTypeChecker(),
		    arrayOf: createArrayOfTypeChecker,
		    element: createElementTypeChecker(),
		    instanceOf: createInstanceTypeChecker,
		    node: createNodeChecker(),
		    objectOf: createObjectOfTypeChecker,
		    oneOf: createEnumTypeChecker,
		    oneOfType: createUnionTypeChecker,
		    shape: createShapeTypeChecker,
		    exact: createStrictShapeTypeChecker,
		  };

		  /**
		   * inlined Object.is polyfill to avoid requiring consumers ship their own
		   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		   */
		  /*eslint-disable no-self-compare*/
		  function is(x, y) {
		    // SameValue algorithm
		    if (x === y) {
		      // Steps 1-5, 7-10
		      // Steps 6.b-6.e: +0 != -0
		      return x !== 0 || 1 / x === 1 / y;
		    } else {
		      // Step 6.a: NaN == NaN
		      return x !== x && y !== y;
		    }
		  }
		  /*eslint-enable no-self-compare*/

		  /**
		   * We use an Error-like object for backward compatibility as people may call
		   * PropTypes directly and inspect their output. However, we don't use real
		   * Errors anymore. We don't inspect their stack anyway, and creating them
		   * is prohibitively expensive if they are created too often, such as what
		   * happens in oneOfType() for any type before the one that matched.
		   */
		  function PropTypeError(message) {
		    this.message = message;
		    this.stack = '';
		  }
		  // Make `instanceof Error` still work for returned errors.
		  PropTypeError.prototype = Error.prototype;

		  function createChainableTypeChecker(validate) {
		    {
		      var manualPropTypeCallCache = {};
		      var manualPropTypeWarningCount = 0;
		    }
		    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
		      componentName = componentName || ANONYMOUS;
		      propFullName = propFullName || propName;

		      if (secret !== ReactPropTypesSecret_1) {
		        if (throwOnDirectAccess) {
		          // New behavior only for users of `prop-types` package
		          invariant_1(
		            false,
		            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
		            'Use `PropTypes.checkPropTypes()` to call them. ' +
		            'Read more at http://fb.me/use-check-prop-types'
		          );
		        } else if ("development" !== 'production' && typeof console !== 'undefined') {
		          // Old behavior for people using React.PropTypes
		          var cacheKey = componentName + ':' + propName;
		          if (
		            !manualPropTypeCallCache[cacheKey] &&
		            // Avoid spamming the console because they are often not actionable except for lib authors
		            manualPropTypeWarningCount < 3
		          ) {
		            warning_1(
		              false,
		              'You are manually calling a React.PropTypes validation ' +
		              'function for the `%s` prop on `%s`. This is deprecated ' +
		              'and will throw in the standalone `prop-types` package. ' +
		              'You may be seeing this warning due to a third-party PropTypes ' +
		              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
		              propFullName,
		              componentName
		            );
		            manualPropTypeCallCache[cacheKey] = true;
		            manualPropTypeWarningCount++;
		          }
		        }
		      }
		      if (props[propName] == null) {
		        if (isRequired) {
		          if (props[propName] === null) {
		            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
		          }
		          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
		        }
		        return null;
		      } else {
		        return validate(props, propName, componentName, location, propFullName);
		      }
		    }

		    var chainedCheckType = checkType.bind(null, false);
		    chainedCheckType.isRequired = checkType.bind(null, true);

		    return chainedCheckType;
		  }

		  function createPrimitiveTypeChecker(expectedType) {
		    function validate(props, propName, componentName, location, propFullName, secret) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== expectedType) {
		        // `propValue` being instance of, say, date/regexp, pass the 'object'
		        // check, but we can offer a more precise error message here rather than
		        // 'of type `object`'.
		        var preciseType = getPreciseType(propValue);

		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createAnyTypeChecker() {
		    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
		  }

		  function createArrayOfTypeChecker(typeChecker) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
		      }
		      var propValue = props[propName];
		      if (!Array.isArray(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
		      }
		      for (var i = 0; i < propValue.length; i++) {
		        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
		        if (error instanceof Error) {
		          return error;
		        }
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createElementTypeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      if (!isValidElement(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createInstanceTypeChecker(expectedClass) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (!(props[propName] instanceof expectedClass)) {
		        var expectedClassName = expectedClass.name || ANONYMOUS;
		        var actualClassName = getClassName(props[propName]);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createEnumTypeChecker(expectedValues) {
		    if (!Array.isArray(expectedValues)) {
		      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
		      return emptyFunction_1.thatReturnsNull;
		    }

		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      for (var i = 0; i < expectedValues.length; i++) {
		        if (is(propValue, expectedValues[i])) {
		          return null;
		        }
		      }

		      var valuesString = JSON.stringify(expectedValues);
		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createObjectOfTypeChecker(typeChecker) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
		      }
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
		      }
		      for (var key in propValue) {
		        if (propValue.hasOwnProperty(key)) {
		          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
		          if (error instanceof Error) {
		            return error;
		          }
		        }
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createUnionTypeChecker(arrayOfTypeCheckers) {
		    if (!Array.isArray(arrayOfTypeCheckers)) {
		      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
		      return emptyFunction_1.thatReturnsNull;
		    }

		    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		      var checker = arrayOfTypeCheckers[i];
		      if (typeof checker !== 'function') {
		        warning_1(
		          false,
		          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
		          'received %s at index %s.',
		          getPostfixForTypeWarning(checker),
		          i
		        );
		        return emptyFunction_1.thatReturnsNull;
		      }
		    }

		    function validate(props, propName, componentName, location, propFullName) {
		      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		        var checker = arrayOfTypeCheckers[i];
		        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
		          return null;
		        }
		      }

		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createNodeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (!isNode(props[propName])) {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createShapeTypeChecker(shapeTypes) {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      }
		      for (var key in shapeTypes) {
		        var checker = shapeTypes[key];
		        if (!checker) {
		          continue;
		        }
		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
		        if (error) {
		          return error;
		        }
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }

		  function createStrictShapeTypeChecker(shapeTypes) {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      }
		      // We need to check all keys in case some are required but missing from
		      // props.
		      var allKeys = objectAssign({}, props[propName], shapeTypes);
		      for (var key in allKeys) {
		        var checker = shapeTypes[key];
		        if (!checker) {
		          return new PropTypeError(
		            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
		            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
		            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
		          );
		        }
		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
		        if (error) {
		          return error;
		        }
		      }
		      return null;
		    }

		    return createChainableTypeChecker(validate);
		  }

		  function isNode(propValue) {
		    switch (typeof propValue) {
		      case 'number':
		      case 'string':
		      case 'undefined':
		        return true;
		      case 'boolean':
		        return !propValue;
		      case 'object':
		        if (Array.isArray(propValue)) {
		          return propValue.every(isNode);
		        }
		        if (propValue === null || isValidElement(propValue)) {
		          return true;
		        }

		        var iteratorFn = getIteratorFn(propValue);
		        if (iteratorFn) {
		          var iterator = iteratorFn.call(propValue);
		          var step;
		          if (iteratorFn !== propValue.entries) {
		            while (!(step = iterator.next()).done) {
		              if (!isNode(step.value)) {
		                return false;
		              }
		            }
		          } else {
		            // Iterator will provide entry [k,v] tuples rather than values.
		            while (!(step = iterator.next()).done) {
		              var entry = step.value;
		              if (entry) {
		                if (!isNode(entry[1])) {
		                  return false;
		                }
		              }
		            }
		          }
		        } else {
		          return false;
		        }

		        return true;
		      default:
		        return false;
		    }
		  }

		  function isSymbol(propType, propValue) {
		    // Native Symbol.
		    if (propType === 'symbol') {
		      return true;
		    }

		    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
		    if (propValue['@@toStringTag'] === 'Symbol') {
		      return true;
		    }

		    // Fallback for non-spec compliant Symbols which are polyfilled.
		    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
		      return true;
		    }

		    return false;
		  }

		  // Equivalent of `typeof` but with special handling for array and regexp.
		  function getPropType(propValue) {
		    var propType = typeof propValue;
		    if (Array.isArray(propValue)) {
		      return 'array';
		    }
		    if (propValue instanceof RegExp) {
		      // Old webkits (at least until Android 4.0) return 'function' rather than
		      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
		      // passes PropTypes.object.
		      return 'object';
		    }
		    if (isSymbol(propType, propValue)) {
		      return 'symbol';
		    }
		    return propType;
		  }

		  // This handles more types than `getPropType`. Only used for error messages.
		  // See `createPrimitiveTypeChecker`.
		  function getPreciseType(propValue) {
		    if (typeof propValue === 'undefined' || propValue === null) {
		      return '' + propValue;
		    }
		    var propType = getPropType(propValue);
		    if (propType === 'object') {
		      if (propValue instanceof Date) {
		        return 'date';
		      } else if (propValue instanceof RegExp) {
		        return 'regexp';
		      }
		    }
		    return propType;
		  }

		  // Returns a string that is postfixed to a warning about an invalid type.
		  // For example, "undefined" or "of type array"
		  function getPostfixForTypeWarning(value) {
		    var type = getPreciseType(value);
		    switch (type) {
		      case 'array':
		      case 'object':
		        return 'an ' + type;
		      case 'boolean':
		      case 'date':
		      case 'regexp':
		        return 'a ' + type;
		      default:
		        return type;
		    }
		  }

		  // Returns class name of the object, if any.
		  function getClassName(propValue) {
		    if (!propValue.constructor || !propValue.constructor.name) {
		      return ANONYMOUS;
		    }
		    return propValue.constructor.name;
		  }

		  ReactPropTypes.checkPropTypes = checkPropTypes_1;
		  ReactPropTypes.PropTypes = ReactPropTypes;

		  return ReactPropTypes;
		};

		var propTypes = createCommonjsModule(function (module) {
		/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */

		{
		  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
		    Symbol.for &&
		    Symbol.for('react.element')) ||
		    0xeac7;

		  var isValidElement = function(object) {
		    return typeof object === 'object' &&
		      object !== null &&
		      object.$$typeof === REACT_ELEMENT_TYPE;
		  };

		  // By explicitly using `prop-types` you are opting into new development behavior.
		  // http://fb.me/prop-types-in-prod
		  var throwOnDirectAccess = true;
		  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
		}
		});

		var classnames = createCommonjsModule(function (module) {
		/*!
		  Copyright (c) 2016 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = [];

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;

					var argType = typeof arg;

					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg)) {
						classes.push(classNames.apply(null, arg));
					} else if (argType === 'object') {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					}
				}

				return classes.join(' ');
			}

			if ('object' !== 'undefined' && module.exports) {
				module.exports = classNames;
			} else if (false) {
				// register as 'classnames', consistent with npm package name
				undefined('classnames', [], function () {
					return classNames;
				});
			} else {
				window.classNames = classNames;
			}
		}());
		});

		// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
		function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
		  for (var i = 0, length = array.length; i < length; i++) {
		    if (callback.apply(callback, [array[i], i, array])) return array[i];
		  }
		}

		function isFunction(func /*: any*/) /*: boolean*/ {
		  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
		}

		function isNum(num /*: any*/) /*: boolean*/ {
		  return typeof num === 'number' && !isNaN(num);
		}

		function int(a /*: string*/) /*: number*/ {
		  return parseInt(a, 10);
		}

		function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
		  if (props[propName]) {
		    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
		  }
		}

		var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
		function getPrefix() /*: string*/ {
		  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

		  // Checking specifically for 'window.document' is for pseudo-browser server-side
		  // environments that define 'window' as the global context.
		  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
		  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

		  var style = window.document.documentElement.style;

		  if (prop in style) return '';

		  for (var i = 0; i < prefixes.length; i++) {
		    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
		  }

		  return '';
		}

		function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
		  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
		}

		function kebabToTitleCase(str /*: string*/) /*: string*/ {
		  var out = '';
		  var shouldCapitalize = true;
		  for (var i = 0; i < str.length; i++) {
		    if (shouldCapitalize) {
		      out += str[i].toUpperCase();
		      shouldCapitalize = false;
		    } else if (str[i] === '-') {
		      shouldCapitalize = true;
		    } else {
		      out += str[i];
		    }
		  }
		  return out;
		}

		// Default export is the prefix itself, like 'Moz', 'Webkit', etc
		// Note that you may have to re-test for certain things; for instance, Chrome 50
		// can handle unprefixed `transform`, but not unprefixed `user-select`
		var browserPrefix = getPrefix();

		var classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		var createClass = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      Object.defineProperty(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();

		var defineProperty = function (obj, key, value) {
		  if (key in obj) {
		    Object.defineProperty(obj, key, {
		      value: value,
		      enumerable: true,
		      configurable: true,
		      writable: true
		    });
		  } else {
		    obj[key] = value;
		  }

		  return obj;
		};

		var _extends = Object.assign || function (target) {
		  for (var i = 1; i < arguments.length; i++) {
		    var source = arguments[i];

		    for (var key in source) {
		      if (Object.prototype.hasOwnProperty.call(source, key)) {
		        target[key] = source[key];
		      }
		    }
		  }

		  return target;
		};

		var inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		var possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		var slicedToArray = function () {
		  function sliceIterator(arr, i) {
		    var _arr = [];
		    var _n = true;
		    var _d = false;
		    var _e = undefined;

		    try {
		      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
		        _arr.push(_s.value);

		        if (i && _arr.length === i) break;
		      }
		    } catch (err) {
		      _d = true;
		      _e = err;
		    } finally {
		      try {
		        if (!_n && _i["return"]) _i["return"]();
		      } finally {
		        if (_d) throw _e;
		      }
		    }

		    return _arr;
		  }

		  return function (arr, i) {
		    if (Array.isArray(arr)) {
		      return arr;
		    } else if (Symbol.iterator in Object(arr)) {
		      return sliceIterator(arr, i);
		    } else {
		      throw new TypeError("Invalid attempt to destructure non-iterable instance");
		    }
		  };
		}();

		/*:: import type {ControlPosition, PositionOffsetControlPosition, MouseTouchEvent} from './types';*/


		var matchesSelectorFunc = '';
		function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
		  if (!matchesSelectorFunc) {
		    matchesSelectorFunc = findInArray(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
		      // $FlowIgnore: Doesn't think elements are indexable
		      return isFunction(el[method]);
		    });
		  }

		  // Might not be found entirely (not an Element?) - in that case, bail
		  // $FlowIgnore: Doesn't think elements are indexable
		  if (!isFunction(el[matchesSelectorFunc])) return false;

		  // $FlowIgnore: Doesn't think elements are indexable
		  return el[matchesSelectorFunc](selector);
		}

		// Works up the tree to the draggable itself attempting to match selector.
		function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
		  var node = el;
		  do {
		    if (matchesSelector(node, selector)) return true;
		    if (node === baseNode) return false;
		    node = node.parentNode;
		  } while (node);

		  return false;
		}

		function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
		  if (!el) {
		    return;
		  }
		  if (el.attachEvent) {
		    el.attachEvent('on' + event, handler);
		  } else if (el.addEventListener) {
		    el.addEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = handler;
		  }
		}

		function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
		  if (!el) {
		    return;
		  }
		  if (el.detachEvent) {
		    el.detachEvent('on' + event, handler);
		  } else if (el.removeEventListener) {
		    el.removeEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = null;
		  }
		}

		function outerHeight(node /*: HTMLElement*/) /*: number*/ {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetTop which is including margin. See getBoundPosition
		  var height = node.clientHeight;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  height += int(computedStyle.borderTopWidth);
		  height += int(computedStyle.borderBottomWidth);
		  return height;
		}

		function outerWidth(node /*: HTMLElement*/) /*: number*/ {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetLeft which is including margin. See getBoundPosition
		  var width = node.clientWidth;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  width += int(computedStyle.borderLeftWidth);
		  width += int(computedStyle.borderRightWidth);
		  return width;
		}
		function innerHeight(node /*: HTMLElement*/) /*: number*/ {
		  var height = node.clientHeight;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  height -= int(computedStyle.paddingTop);
		  height -= int(computedStyle.paddingBottom);
		  return height;
		}

		function innerWidth(node /*: HTMLElement*/) /*: number*/ {
		  var width = node.clientWidth;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  width -= int(computedStyle.paddingLeft);
		  width -= int(computedStyle.paddingRight);
		  return width;
		}

		// Get from offsetParent
		function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
		  var isBody = offsetParent === offsetParent.ownerDocument.body;
		  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

		  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
		  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

		  return { x: x, y: y };
		}

		function createCSSTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: Object*/ {
		  var translation = getTranslation(controlPos, positionOffset, 'px');
		  return defineProperty({}, browserPrefixToKey('transform', browserPrefix), translation);
		}

		function createSVGTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: string*/ {
		  var translation = getTranslation(controlPos, positionOffset, '');
		  return translation;
		}
		function getTranslation(_ref2, positionOffset /*: PositionOffsetControlPosition*/, unitSuffix /*: string*/) /*: string*/ {
		  var x = _ref2.x,
		      y = _ref2.y;

		  var translation = 'translate(' + x + unitSuffix + ',' + y + unitSuffix + ')';
		  if (positionOffset) {
		    var defaultX = '' + (typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
		    var defaultY = '' + (typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
		    translation = 'translate(' + defaultX + ', ' + defaultY + ')' + translation;
		  }
		  return translation;
		}

		function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
		  return e.targetTouches && findInArray(e.targetTouches, function (t) {
		    return identifier === t.identifier;
		  }) || e.changedTouches && findInArray(e.changedTouches, function (t) {
		    return identifier === t.identifier;
		  });
		}

		function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
		  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
		}

		// User-select Hacks:
		//
		// Useful for preventing blue highlights all over everything when dragging.

		// Note we're passing `document` b/c we could be iframed
		function addUserSelectStyles(doc /*: ?Document*/) {
		  if (!doc) return;
		  var styleEl = doc.getElementById('react-draggable-style-el');
		  if (!styleEl) {
		    styleEl = doc.createElement('style');
		    styleEl.type = 'text/css';
		    styleEl.id = 'react-draggable-style-el';
		    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
		    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
		    doc.getElementsByTagName('head')[0].appendChild(styleEl);
		  }
		  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
		}

		function removeUserSelectStyles(doc /*: ?Document*/) {
		  try {
		    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
		    // $FlowIgnore: IE
		    if (doc.selection) {
		      // $FlowIgnore: IE
		      doc.selection.empty();
		    } else {
		      window.getSelection().removeAllRanges(); // remove selection caused by scroll
		    }
		  } catch (e) {
		    // probably IE
		  }
		}

		function styleHacks() /*: Object*/ {
		  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		  // Workaround IE pointer events; see #51
		  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
		  return _extends({
		    touchAction: 'none'
		  }, childStyle);
		}

		function addClassName(el /*: HTMLElement*/, className /*: string*/) {
		  if (el.classList) {
		    el.classList.add(className);
		  } else {
		    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
		      el.className += ' ' + className;
		    }
		  }
		}

		function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
		  if (el.classList) {
		    el.classList.remove(className);
		  } else {
		    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
		  }
		}

		/*:: import type Draggable from '../Draggable';*/
		/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
		/*:: import type DraggableCore from '../DraggableCore';*/


		function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
		  // If no bounds, short-circuit and move on
		  if (!draggable.props.bounds) return [x, y];

		  // Clone new bounds
		  var bounds = draggable.props.bounds;

		  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
		  var node = findDOMNode(draggable);

		  if (typeof bounds === 'string') {
		    var ownerDocument = node.ownerDocument;

		    var ownerWindow = ownerDocument.defaultView;
		    var boundNode = void 0;
		    if (bounds === 'parent') {
		      boundNode = node.parentNode;
		    } else {
		      boundNode = ownerDocument.querySelector(bounds);
		    }
		    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
		      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
		    }
		    var nodeStyle = ownerWindow.getComputedStyle(node);
		    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
		    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
		    bounds = {
		      left: -node.offsetLeft + int(boundNodeStyle.paddingLeft) + int(nodeStyle.marginLeft),
		      top: -node.offsetTop + int(boundNodeStyle.paddingTop) + int(nodeStyle.marginTop),
		      right: innerWidth(boundNode) - outerWidth(node) - node.offsetLeft + int(boundNodeStyle.paddingRight) - int(nodeStyle.marginRight),
		      bottom: innerHeight(boundNode) - outerHeight(node) - node.offsetTop + int(boundNodeStyle.paddingBottom) - int(nodeStyle.marginBottom)
		    };
		  }

		  // Keep x and y below right and bottom limits...
		  if (isNum(bounds.right)) x = Math.min(x, bounds.right);
		  if (isNum(bounds.bottom)) y = Math.min(y, bounds.bottom);

		  // But above left and top limits.
		  if (isNum(bounds.left)) x = Math.max(x, bounds.left);
		  if (isNum(bounds.top)) y = Math.max(y, bounds.top);

		  return [x, y];
		}

		function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
		  var x = Math.round(pendingX / grid[0]) * grid[0];
		  var y = Math.round(pendingY / grid[1]) * grid[1];
		  return [x, y];
		}

		function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
		}

		function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
		}

		// Get {x, y} positions from event.
		function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
		  var touchObj = typeof touchIdentifier === 'number' ? getTouch(e, touchIdentifier) : null;
		  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
		  var node = findDOMNode(draggableCore);
		  // User can provide an offsetParent if desired.
		  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
		  return offsetXYFromParent(touchObj || e, offsetParent);
		}

		// Create an data object exposed by <DraggableCore>'s events
		function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
		  var state = draggable.state;
		  var isStart = !isNum(state.lastX);
		  var node = findDOMNode(draggable);

		  if (isStart) {
		    // If this is our first move, use the x and y as last coords.
		    return {
		      node: node,
		      deltaX: 0, deltaY: 0,
		      lastX: x, lastY: y,
		      x: x, y: y
		    };
		  } else {
		    // Otherwise calculate proper values.
		    return {
		      node: node,
		      deltaX: x - state.lastX, deltaY: y - state.lastY,
		      lastX: state.lastX, lastY: state.lastY,
		      x: x, y: y
		    };
		  }
		}

		// Create an data exposed by <Draggable>'s events
		function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
		  var scale = draggable.props.scale;
		  return {
		    node: coreData.node,
		    x: draggable.state.x + coreData.deltaX / scale,
		    y: draggable.state.y + coreData.deltaY / scale,
		    deltaX: coreData.deltaX / scale,
		    deltaY: coreData.deltaY / scale,
		    lastX: draggable.state.x,
		    lastY: draggable.state.y
		  };
		}

		// A lot faster than stringify/parse
		function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
		  return {
		    left: bounds.left,
		    top: bounds.top,
		    right: bounds.right,
		    bottom: bounds.bottom
		  };
		}

		function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
		  var node = ReactDOM.findDOMNode(draggable);
		  if (!node) {
		    throw new Error('<DraggableCore>: Unmounted during event!');
		  }
		  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
		  return node;
		}

		/*eslint no-console:0*/
		function log() {
		}

		/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/


		// Simple abstraction for dragging events names.
		/*:: import type {Element as ReactElement} from 'react';*/
		var eventsFor = {
		  touch: {
		    start: 'touchstart',
		    move: 'touchmove',
		    stop: 'touchend'
		  },
		  mouse: {
		    start: 'mousedown',
		    move: 'mousemove',
		    stop: 'mouseup'
		  }
		};

		// Default to mouse events.
		var dragEventFor = eventsFor.mouse;

		/*:: type DraggableCoreState = {
		  dragging: boolean,
		  lastX: number,
		  lastY: number,
		  touchIdentifier: ?number
		};*/
		/*:: export type DraggableBounds = {
		  left: number,
		  right: number,
		  top: number,
		  bottom: number,
		};*/
		/*:: export type DraggableData = {
		  node: HTMLElement,
		  x: number, y: number,
		  deltaX: number, deltaY: number,
		  lastX: number, lastY: number,
		};*/
		/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
		/*:: export type ControlPosition = {x: number, y: number};*/
		/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/


		//
		// Define <DraggableCore>.
		//
		// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
		// work well with libraries that require more control over the element.
		//

		/*:: export type DraggableCoreProps = {
		  allowAnyClick: boolean,
		  cancel: string,
		  children: ReactElement<any>,
		  disabled: boolean,
		  enableUserSelectHack: boolean,
		  offsetParent: HTMLElement,
		  grid: [number, number],
		  handle: string,
		  onStart: DraggableEventHandler,
		  onDrag: DraggableEventHandler,
		  onStop: DraggableEventHandler,
		  onMouseDown: (e: MouseEvent) => void,
		};*/

		var DraggableCore = function (_React$Component) {
		  inherits(DraggableCore, _React$Component);

		  function DraggableCore() {
		    var _ref;

		    var _temp, _this, _ret;

		    classCallCheck(this, DraggableCore);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
		      dragging: false,
		      // Used while dragging to determine deltas.
		      lastX: NaN, lastY: NaN,
		      touchIdentifier: null
		    }, _this.handleDragStart = function (e) {
		      // Make it possible to attach event handlers on top of this one.
		      _this.props.onMouseDown(e);

		      // Only accept left-clicks.
		      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

		      // Get nodes. Be sure to grab relative document (could be iframed)
		      var thisNode = ReactDOM.findDOMNode(_this);
		      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
		        throw new Error('<DraggableCore> not mounted on DragStart!');
		      }
		      var ownerDocument = thisNode.ownerDocument;

		      // Short circuit if handle or cancel prop was provided and selector doesn't match.

		      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !matchesSelectorAndParentsTo(e.target, _this.props.handle, thisNode) || _this.props.cancel && matchesSelectorAndParentsTo(e.target, _this.props.cancel, thisNode)) {
		        return;
		      }

		      // Set touch identifier in component state if this is a touch event. This allows us to
		      // distinguish between individual touches on multitouch screens by identifying which
		      // touchpoint was set to this element.
		      var touchIdentifier = getTouchIdentifier(e);
		      _this.setState({ touchIdentifier: touchIdentifier });

		      // Get the current drag point from the event. This is used as the offset.
		      var position = getControlPosition(e, touchIdentifier, _this);
		      if (position == null) return; // not possible but satisfies flow
		      var x = position.x,
		          y = position.y;

		      // Create an event object with all the data parents need to make a decision here.

		      var coreEvent = createCoreData(_this, x, y);

		      // Call event handler. If it returns explicit false, cancel.
		      log('calling', _this.props.onStart);
		      var shouldUpdate = _this.props.onStart(e, coreEvent);
		      if (shouldUpdate === false) return;

		      // Add a style to the body to disable user-select. This prevents text from
		      // being selected all over the page.
		      if (_this.props.enableUserSelectHack) addUserSelectStyles(ownerDocument);

		      // Initiate dragging. Set the current x and y as offsets
		      // so we know how much we've moved during the drag. This allows us
		      // to drag elements around even if they have been moved, without issue.
		      _this.setState({
		        dragging: true,

		        lastX: x,
		        lastY: y
		      });

		      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
		      // this element. We use different events depending on whether or not we have detected that this
		      // is a touch-capable device.
		      addEvent(ownerDocument, dragEventFor.move, _this.handleDrag);
		      addEvent(ownerDocument, dragEventFor.stop, _this.handleDragStop);
		    }, _this.handleDrag = function (e) {

		      // Prevent scrolling on mobile devices, like ipad/iphone.
		      if (e.type === 'touchmove') e.preventDefault();

		      // Get the current drag point from the event. This is used as the offset.
		      var position = getControlPosition(e, _this.state.touchIdentifier, _this);
		      if (position == null) return;
		      var x = position.x,
		          y = position.y;

		      // Snap to grid if prop has been provided

		      if (Array.isArray(_this.props.grid)) {
		        var _deltaX = x - _this.state.lastX,
		            _deltaY = y - _this.state.lastY;

		        var _snapToGrid = snapToGrid(_this.props.grid, _deltaX, _deltaY);

		        var _snapToGrid2 = slicedToArray(_snapToGrid, 2);

		        _deltaX = _snapToGrid2[0];
		        _deltaY = _snapToGrid2[1];

		        if (!_deltaX && !_deltaY) return; // skip useless drag
		        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;
		      }

		      var coreEvent = createCoreData(_this, x, y);

		      // Call event handler. If it returns explicit false, trigger end.
		      var shouldUpdate = _this.props.onDrag(e, coreEvent);
		      if (shouldUpdate === false) {
		        try {
		          // $FlowIgnore
		          _this.handleDragStop(new MouseEvent('mouseup'));
		        } catch (err) {
		          // Old browsers
		          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
		          // I see why this insanity was deprecated
		          // $FlowIgnore
		          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		          _this.handleDragStop(event);
		        }
		        return;
		      }

		      _this.setState({
		        lastX: x,
		        lastY: y
		      });
		    }, _this.handleDragStop = function (e) {
		      if (!_this.state.dragging) return;

		      var position = getControlPosition(e, _this.state.touchIdentifier, _this);
		      if (position == null) return;
		      var x = position.x,
		          y = position.y;

		      var coreEvent = createCoreData(_this, x, y);

		      var thisNode = ReactDOM.findDOMNode(_this);
		      if (thisNode) {
		        // Remove user-select hack
		        if (_this.props.enableUserSelectHack) removeUserSelectStyles(thisNode.ownerDocument);
		      }

		      // Reset the el.
		      _this.setState({
		        dragging: false,
		        lastX: NaN,
		        lastY: NaN
		      });

		      // Call event handler
		      _this.props.onStop(e, coreEvent);

		      if (thisNode) {
		        removeEvent(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
		        removeEvent(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
		      }
		    }, _this.onMouseDown = function (e) {
		      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

		      return _this.handleDragStart(e);
		    }, _this.onMouseUp = function (e) {
		      dragEventFor = eventsFor.mouse;

		      return _this.handleDragStop(e);
		    }, _this.onTouchStart = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;

		      return _this.handleDragStart(e);
		    }, _this.onTouchEnd = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;

		      return _this.handleDragStop(e);
		    }, _temp), possibleConstructorReturn(_this, _ret);
		  }

		  createClass(DraggableCore, [{
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
		      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
		      var thisNode = ReactDOM.findDOMNode(this);
		      if (thisNode) {
		        var ownerDocument = thisNode.ownerDocument;

		        removeEvent(ownerDocument, eventsFor.mouse.move, this.handleDrag);
		        removeEvent(ownerDocument, eventsFor.touch.move, this.handleDrag);
		        removeEvent(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
		        removeEvent(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
		        if (this.props.enableUserSelectHack) removeUserSelectStyles(ownerDocument);
		      }
		    }

		    // Same as onMouseDown (start drag), but now consider this a touch device.

		  }, {
		    key: 'render',
		    value: function render() {
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return React.cloneElement(React.Children.only(this.props.children), {
		        style: styleHacks(this.props.children.props.style),

		        // Note: mouseMove handler is attached to document so it will still function
		        // when the user drags quickly and leaves the bounds of the element.
		        onMouseDown: this.onMouseDown,
		        onTouchStart: this.onTouchStart,
		        onMouseUp: this.onMouseUp,
		        onTouchEnd: this.onTouchEnd
		      });
		    }
		  }]);
		  return DraggableCore;
		}(React.Component);

		DraggableCore.displayName = 'DraggableCore';
		DraggableCore.propTypes = {
		  /**
		   * `allowAnyClick` allows dragging using any mouse button.
		   * By default, we only accept the left button.
		   *
		   * Defaults to `false`.
		   */
		  allowAnyClick: propTypes.bool,

		  /**
		   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
		   * with the exception of `onMouseDown`, will not fire.
		   */
		  disabled: propTypes.bool,

		  /**
		   * By default, we add 'user-select:none' attributes to the document body
		   * to prevent ugly text selection during drag. If this is causing problems
		   * for your app, set this to `false`.
		   */
		  enableUserSelectHack: propTypes.bool,

		  /**
		   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
		   * instead of using the parent node.
		   */
		  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
		    if (props[propName] && props[propName].nodeType !== 1) {
		      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
		    }
		  },

		  /**
		   * `grid` specifies the x and y that dragging should snap to.
		   */
		  grid: propTypes.arrayOf(propTypes.number),

		  /**
		   * `scale` specifies the scale of the area you are dragging inside of. It allows
		   * the drag deltas to scale correctly with how far zoomed in/out you are.
		   */
		  scale: propTypes.number,

		  /**
		   * `handle` specifies a selector to be used as the handle that initiates drag.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable handle=".handle">
		   *              <div>
		   *                  <div className="handle">Click me to drag</div>
		   *                  <div>This is some other content</div>
		   *              </div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  handle: propTypes.string,

		  /**
		   * `cancel` specifies a selector to be used to prevent drag initialization.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *           return(
		   *               <Draggable cancel=".cancel">
		   *                   <div>
		   *                     <div className="cancel">You can't drag from here</div>
		   *                     <div>Dragging here works fine</div>
		   *                   </div>
		   *               </Draggable>
		   *           );
		   *       }
		   *   });
		   * ```
		   */
		  cancel: propTypes.string,

		  /**
		   * Called when dragging starts.
		   * If this function returns the boolean false, dragging will be canceled.
		   */
		  onStart: propTypes.func,

		  /**
		   * Called while dragging.
		   * If this function returns the boolean false, dragging will be canceled.
		   */
		  onDrag: propTypes.func,

		  /**
		   * Called when dragging stops.
		   * If this function returns the boolean false, the drag will remain active.
		   */
		  onStop: propTypes.func,

		  /**
		   * A workaround option which can be passed if onMouseDown needs to be accessed,
		   * since it'll always be blocked (as there is internal use of onMouseDown)
		   */
		  onMouseDown: propTypes.func,

		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: dontSetMe,
		  style: dontSetMe,
		  transform: dontSetMe
		};
		DraggableCore.defaultProps = {
		  allowAnyClick: false, // by default only accept left click
		  cancel: null,
		  disabled: false,
		  enableUserSelectHack: true,
		  offsetParent: null,
		  handle: null,
		  grid: null,
		  transform: null,
		  onStart: function onStart() {},
		  onDrag: function onDrag() {},
		  onStop: function onStop() {},
		  onMouseDown: function onMouseDown() {}
		};

		/*:: import type {DraggableEventHandler} from './utils/types';*/
		/*:: import type {Element as ReactElement} from 'react';*/
		/*:: type DraggableState = {
		  dragging: boolean,
		  dragged: boolean,
		  x: number, y: number,
		  slackX: number, slackY: number,
		  isElementSVG: boolean
		};*/


		//
		// Define <Draggable>
		//

		/*:: export type DraggableProps = {
		  ...$Exact<DraggableCoreProps>,
		  axis: 'both' | 'x' | 'y' | 'none',
		  bounds: DraggableBounds | string | false,
		  defaultClassName: string,
		  defaultClassNameDragging: string,
		  defaultClassNameDragged: string,
		  defaultPosition: ControlPosition,
		  positionOffset: PositionOffsetControlPosition,
		  position: ControlPosition,
		  scale: number
		};*/

		var Draggable = function (_React$Component) {
		  inherits(Draggable, _React$Component);

		  function Draggable(props /*: DraggableProps*/) {
		    classCallCheck(this, Draggable);

		    var _this = possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));

		    _this.onDragStart = function (e, coreData) {

		      // Short-circuit if user's callback killed it.
		      var shouldStart = _this.props.onStart(e, createDraggableData(_this, coreData));
		      // Kills start event on core as well, so move handlers are never bound.
		      if (shouldStart === false) return false;

		      _this.setState({ dragging: true, dragged: true });
		    };

		    _this.onDrag = function (e, coreData) {
		      if (!_this.state.dragging) return false;

		      var uiData = createDraggableData(_this, coreData);

		      var newState /*: $Shape<DraggableState>*/ = {
		        x: uiData.x,
		        y: uiData.y
		      };

		      // Keep within bounds.
		      if (_this.props.bounds) {
		        // Save original x and y.
		        var _x = newState.x,
		            _y = newState.y;

		        // Add slack to the values used to calculate bound position. This will ensure that if
		        // we start removing slack, the element won't react to it right away until it's been
		        // completely removed.

		        newState.x += _this.state.slackX;
		        newState.y += _this.state.slackY;

		        // Get bound position. This will ceil/floor the x and y within the boundaries.

		        var _getBoundPosition = getBoundPosition(_this, newState.x, newState.y),
		            _getBoundPosition2 = slicedToArray(_getBoundPosition, 2),
		            newStateX = _getBoundPosition2[0],
		            newStateY = _getBoundPosition2[1];

		        newState.x = newStateX;
		        newState.y = newStateY;

		        // Recalculate slack by noting how much was shaved by the boundPosition handler.
		        newState.slackX = _this.state.slackX + (_x - newState.x);
		        newState.slackY = _this.state.slackY + (_y - newState.y);

		        // Update the event we fire to reflect what really happened after bounds took effect.
		        uiData.x = newState.x;
		        uiData.y = newState.y;
		        uiData.deltaX = newState.x - _this.state.x;
		        uiData.deltaY = newState.y - _this.state.y;
		      }

		      // Short-circuit if user's callback killed it.
		      var shouldUpdate = _this.props.onDrag(e, uiData);
		      if (shouldUpdate === false) return false;

		      _this.setState(newState);
		    };

		    _this.onDragStop = function (e, coreData) {
		      if (!_this.state.dragging) return false;

		      // Short-circuit if user's callback killed it.
		      var shouldStop = _this.props.onStop(e, createDraggableData(_this, coreData));
		      if (shouldStop === false) return false;

		      var newState /*: $Shape<DraggableState>*/ = {
		        dragging: false,
		        slackX: 0,
		        slackY: 0
		      };

		      // If this is a controlled component, the result of this operation will be to
		      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
		      var controlled = Boolean(_this.props.position);
		      if (controlled) {
		        var _this$props$position = _this.props.position,
		            _x2 = _this$props$position.x,
		            _y2 = _this$props$position.y;

		        newState.x = _x2;
		        newState.y = _y2;
		      }

		      _this.setState(newState);
		    };

		    _this.state = {
		      // Whether or not we are currently dragging.
		      dragging: false,

		      // Whether or not we have been dragged before.
		      dragged: false,

		      // Current transform x and y.
		      x: props.position ? props.position.x : props.defaultPosition.x,
		      y: props.position ? props.position.y : props.defaultPosition.y,

		      // Used for compensating for out-of-bounds drags
		      slackX: 0, slackY: 0,

		      // Can only determine if SVG after mounting
		      isElementSVG: false
		    };

		    if (props.position && !(props.onDrag || props.onStop)) {
		      // eslint-disable-next-line no-console
		      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
		    }
		    return _this;
		  }

		  createClass(Draggable, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      // Check to see if the element passed is an instanceof SVGElement
		      if (typeof window.SVGElement !== 'undefined' && ReactDOM.findDOMNode(this) instanceof window.SVGElement) {
		        this.setState({ isElementSVG: true });
		      }
		    }
		  }, {
		    key: 'componentWillReceiveProps',
		    value: function componentWillReceiveProps(nextProps /*: Object*/) {
		      // Set x/y if position has changed
		      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
		        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
		      }
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
		    }
		  }, {
		    key: 'render',
		    value: function render() /*: ReactElement<any>*/ {
		      var _classNames;

		      var style = {},
		          svgTransform = null;

		      // If this is controlled, we don't want to move it - unless it's dragging.
		      var controlled = Boolean(this.props.position);
		      var draggable = !controlled || this.state.dragging;

		      var position = this.props.position || this.props.defaultPosition;
		      var transformOpts = {
		        // Set left if horizontal drag is enabled
		        x: canDragX(this) && draggable ? this.state.x : position.x,

		        // Set top if vertical drag is enabled
		        y: canDragY(this) && draggable ? this.state.y : position.y
		      };

		      // If this element was SVG, we use the `transform` attribute.
		      if (this.state.isElementSVG) {
		        svgTransform = createSVGTransform(transformOpts, this.props.positionOffset);
		      } else {
		        // Add a CSS transform to move the element around. This allows us to move the element around
		        // without worrying about whether or not it is relatively or absolutely positioned.
		        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
		        // has a clean slate.
		        style = createCSSTransform(transformOpts, this.props.positionOffset);
		      }

		      var _props = this.props,
		          defaultClassName = _props.defaultClassName,
		          defaultClassNameDragging = _props.defaultClassNameDragging,
		          defaultClassNameDragged = _props.defaultClassNameDragged;


		      var children = React.Children.only(this.props.children);

		      // Mark with class while dragging
		      var className = classnames(children.props.className || '', defaultClassName, (_classNames = {}, defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return React.createElement(
		        DraggableCore,
		        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
		        React.cloneElement(children, {
		          className: className,
		          style: _extends({}, children.props.style, style),
		          transform: svgTransform
		        })
		      );
		    }
		  }]);
		  return Draggable;
		}(React.Component);

		Draggable.displayName = 'Draggable';
		Draggable.propTypes = _extends({}, DraggableCore.propTypes, {

		  /**
		   * `axis` determines which axis the draggable can move.
		   *
		   *  Note that all callbacks will still return data as normal. This only
		   *  controls flushing to the DOM.
		   *
		   * 'both' allows movement horizontally and vertically.
		   * 'x' limits movement to horizontal axis.
		   * 'y' limits movement to vertical axis.
		   * 'none' limits all movement.
		   *
		   * Defaults to 'both'.
		   */
		  axis: propTypes.oneOf(['both', 'x', 'y', 'none']),

		  /**
		   * `bounds` determines the range of movement available to the element.
		   * Available values are:
		   *
		   * 'parent' restricts movement within the Draggable's parent node.
		   *
		   * Alternatively, pass an object with the following properties, all of which are optional:
		   *
		   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
		   *
		   * All values are in px.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable bounds={{right: 300, bottom: 300}}>
		   *              <div>Content</div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  bounds: propTypes.oneOfType([propTypes.shape({
		    left: propTypes.number,
		    right: propTypes.number,
		    top: propTypes.number,
		    bottom: propTypes.number
		  }), propTypes.string, propTypes.oneOf([false])]),

		  defaultClassName: propTypes.string,
		  defaultClassNameDragging: propTypes.string,
		  defaultClassNameDragged: propTypes.string,

		  /**
		   * `defaultPosition` specifies the x and y that the dragged item should start at
		   *
		   * Example:
		   *
		   * ```jsx
		   *      let App = React.createClass({
		   *          render: function () {
		   *              return (
		   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
		   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		   *                  </Draggable>
		   *              );
		   *          }
		   *      });
		   * ```
		   */
		  defaultPosition: propTypes.shape({
		    x: propTypes.number,
		    y: propTypes.number
		  }),
		  positionOffset: propTypes.shape({
		    x: propTypes.oneOfType([propTypes.number, propTypes.string]),
		    y: propTypes.oneOfType([propTypes.number, propTypes.string])
		  }),

		  /**
		   * `position`, if present, defines the current position of the element.
		   *
		   *  This is similar to how form elements in React work - if no `position` is supplied, the component
		   *  is uncontrolled.
		   *
		   * Example:
		   *
		   * ```jsx
		   *      let App = React.createClass({
		   *          render: function () {
		   *              return (
		   *                  <Draggable position={{x: 25, y: 25}}>
		   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		   *                  </Draggable>
		   *              );
		   *          }
		   *      });
		   * ```
		   */
		  position: propTypes.shape({
		    x: propTypes.number,
		    y: propTypes.number
		  }),

		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: dontSetMe,
		  style: dontSetMe,
		  transform: dontSetMe
		});
		Draggable.defaultProps = _extends({}, DraggableCore.defaultProps, {
		  axis: 'both',
		  bounds: false,
		  defaultClassName: 'react-draggable',
		  defaultClassNameDragging: 'react-draggable-dragging',
		  defaultClassNameDragged: 'react-draggable-dragged',
		  defaultPosition: { x: 0, y: 0 },
		  position: null,
		  scale: 1
		});

		// Previous versions of this lib exported <Draggable> as the root export. As to not break
		// them, or TypeScript, we export *both* as the root and as 'default'.
		// See https://github.com/mzabriskie/react-draggable/pull/254
		// and https://github.com/mzabriskie/react-draggable/issues/266
		Draggable.default = Draggable;
		Draggable.DraggableCore = DraggableCore;

		return Draggable;

	})));
	//# sourceMappingURL=react-draggable.js.map


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _I18n = __webpack_require__(18);

	var _I18n2 = _interopRequireDefault(_I18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _I18n2.default; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-Plugin/x-seed
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _zh_CN = __webpack_require__(19);

	var _zh_CN2 = _interopRequireDefault(_zh_CN);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-xui/x-seed
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2019-02-20
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var I18n = _react2.default.createContext({
	  local: _zh_CN2.default
	});
	// export default I18n;

	var LocalReceiver = function (_Component) {
	  _inherits(LocalReceiver, _Component);

	  function LocalReceiver() {
	    _classCallCheck(this, LocalReceiver);

	    return _possibleConstructorReturn(this, (LocalReceiver.__proto__ || Object.getPrototypeOf(LocalReceiver)).apply(this, arguments));
	  }

	  _createClass(LocalReceiver, [{
	    key: 'getLocalData',

	    //返回当前的语言包
	    value: function getLocalData() {
	      var local = this.context.local;
	      var _props = this.props,
	          componentName = _props.componentName,
	          defaultValue = _props.defaultValue;
	      //默认语言包如果未传值，则使用i18n的默认包
	      //如果顶层还有i18n的，进行合并
	      // debugger;

	      return _extends({}, local[componentName || 'global'], defaultValue || {});
	    }
	    //当前语言代码

	  }, {
	    key: 'getLocalCode',
	    value: function getLocalCode() {
	      var local = this.context.local;

	      return local.local;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        I18n.Provider,
	        { value: _zh_CN2.default },
	        this.props.children(this.getLocalData(), this.getLocalCode())
	      );
	    }
	  }]);

	  return LocalReceiver;
	}(_react.Component);

	// export default class i18n extends Component {
	//   static childContextTypes={
	//     local:PropTypes.object,
	//     getLocal:PropTypes.func
	//   }
	//   getChildContext(){
	//     return {
	//       local:{
	//         test:{
	//           "hello":"你好!"
	//         }
	//       },
	//       getLocal:this.getLocal
	//     }
	//   }
	//   static contextTypes ={
	//     local:PropTypes.object
	//   }
	//   //返回当前语言包
	//   getLocal(){
	//     debugger
	//     return this.context.local;
	//   }
	//   render () {
	//     //调用子组件的方法，把语言包传给他
	//     return this.props.children(this.getLocal());
	//   }
	// }


	LocalReceiver.contextType = I18n;
	exports.default = LocalReceiver;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    local: 'zh_CN',
	    global: {
	        submit: '确定',
	        cancel: '取消'
	    },
	    Paging: {
	        page: '页',
	        prev: '上一页',
	        next: '下一页',
	        last: '最后一页',
	        first: '第一页',
	        go: '第',
	        sum: '共',
	        pageNum: '页码数'
	    },
	    Dialog: {
	        close: '关闭',
	        submit: '确认',
	        cancel: '返回'
	    }
	};

/***/ })
/******/ ])
});
;