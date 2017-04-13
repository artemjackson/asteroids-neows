webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectors = exports.actions = exports.reducer = exports.Details = exports.default = exports.name = undefined;

var _constants = __webpack_require__(125);

Object.defineProperty(exports, 'name', {
  enumerable: true,
  get: function get() {
    return _constants.domain;
  }
});

var _Summary = __webpack_require__(330);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Summary).default;
  }
});

var _Details = __webpack_require__(327);

Object.defineProperty(exports, 'Details', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Details).default;
  }
});

var _reducer = __webpack_require__(334);

Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducer).default;
  }
});

var _actions = __webpack_require__(52);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(101);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.actions = actions;
exports.selectors = selectors;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gaetPagination = exports.getAreAsteroidsFetching = exports.getAsteroid = exports.getAsteroids = exports.getAsteroidsById = exports.getState = undefined;

var _redux = __webpack_require__(98);

var _reselect = __webpack_require__(190);

var _constants = __webpack_require__(125);

var getState = exports.getState = function getState(state) {
  return state[_constants.domain];
};

var getAsteroidsById = exports.getAsteroidsById = (0, _redux.compose)(function (_ref) {
  var asteroidsById = _ref.asteroidsById;
  return asteroidsById;
}, getState);

var getAsteroids = exports.getAsteroids = (0, _reselect.createSelector)([getAsteroidsById], function (asteroidsById) {
  return Object.values(asteroidsById);
});

var getAsteroid = exports.getAsteroid = (0, _redux.compose)(function (_ref2) {
  var asteroid = _ref2.asteroid;
  return asteroid;
}, getState);

var getAreAsteroidsFetching = exports.getAreAsteroidsFetching = (0, _redux.compose)(function (_ref3) {
  var fetching = _ref3.fetching;
  return fetching.asteroids;
}, getState);

var gaetPagination = exports.gaetPagination = (0, _redux.compose)(function (_ref4) {
  var pagination = _ref4.pagination;
  return pagination;
}, getState);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getState, 'getState', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/selectors.js');

  __REACT_HOT_LOADER__.register(getAsteroidsById, 'getAsteroidsById', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/selectors.js');

  __REACT_HOT_LOADER__.register(getAsteroids, 'getAsteroids', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/selectors.js');

  __REACT_HOT_LOADER__.register(getAsteroid, 'getAsteroid', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/selectors.js');

  __REACT_HOT_LOADER__.register(getAreAsteroidsFetching, 'getAreAsteroidsFetching', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/selectors.js');

  __REACT_HOT_LOADER__.register(gaetPagination, 'gaetPagination', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/selectors.js');
}();

;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(527);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(99)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionType = __webpack_require__(309);

Object.keys(_actionType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actionType[key];
    }
  });
});

var _http = __webpack_require__(312);

Object.defineProperty(exports, 'http', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_http).default;
  }
});

var _querystring = __webpack_require__(313);

Object.defineProperty(exports, 'querystring', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_querystring).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var domain = exports.domain = 'asteroids';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(domain, 'domain', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/constants.js');
}();

;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SortOrders = exports.SortOrders = {
  DESC: -1,
  NOT_SORTED: 0,
  ASC: 1
};

var SortOrder = exports.SortOrder = function () {
  var initialsSort = SortOrders.NOT_SORTED;
  var possibleSortsCount = Object.keys(SortOrders).length;

  var current = initialsSort;

  return {
    initial: function initial() {
      current = initialsSort;
      return current;
    },

    // 0, 1, -1, 0, 1, -1, ...
    next: function next() {
      current = (current + possibleSortsCount - 1) % possibleSortsCount - 1;
      return current;
    }
  };
}();

var sortBy = exports.sortBy = function sortBy(array, field, order) {
  var toBeSorted = [].concat(array);

  if (order === SortOrders.NOT_SORTED) return toBeSorted;

  var _ref = order === SortOrders.DESC ? [1, -1] : [-1, 1],
      lt = _ref[0],
      gt = _ref[1];

  return toBeSorted.sort(function (x, y) {
    var xField = x[field];
    var yField = y[field];

    if (xField < yField) return lt;
    if (xField > yField) return gt;

    return 0;
  });
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SortOrders, "SortOrders", "/home/jackson/WebDevelopment/Asteroids/src/elements/Table/sort.js");

  __REACT_HOT_LOADER__.register(SortOrder, "SortOrder", "/home/jackson/WebDevelopment/Asteroids/src/elements/Table/sort.js");

  __REACT_HOT_LOADER__.register(sortBy, "sortBy", "/home/jackson/WebDevelopment/Asteroids/src/elements/Table/sort.js");
}();

;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(317);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _NotFound = __webpack_require__(319);

Object.defineProperty(exports, 'NotFound', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotFound).default;
  }
});

var _Layout = __webpack_require__(315);

Object.defineProperty(exports, 'Layout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Layout).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOOKUP_ASTEROID_BY_ID = exports.FETCH_ASTEROID_BY_ID = exports.FETCH_ASTEROIDS = undefined;

var _lib = __webpack_require__(124);

var _constants = __webpack_require__(125);

var createActionType = (0, _lib.createDomainActionTypeCreator)(_constants.domain);

var FETCH_ASTEROIDS = exports.FETCH_ASTEROIDS = createActionType('FETCH_ASTEROIDS');
var FETCH_ASTEROID_BY_ID = exports.FETCH_ASTEROID_BY_ID = createActionType('FETCH_ASTEROID_BY_ID');
var LOOKUP_ASTEROID_BY_ID = exports.LOOKUP_ASTEROID_BY_ID = createActionType('LOOKUP_ASTEROID_BY_ID');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createActionType, 'createActionType', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/types.js');

  __REACT_HOT_LOADER__.register(FETCH_ASTEROIDS, 'FETCH_ASTEROIDS', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/types.js');

  __REACT_HOT_LOADER__.register(FETCH_ASTEROID_BY_ID, 'FETCH_ASTEROID_BY_ID', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/types.js');

  __REACT_HOT_LOADER__.register(LOOKUP_ASTEROID_BY_ID, 'LOOKUP_ASTEROID_BY_ID', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/types.js');
}();

;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(525);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(99)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(622);

var _store = __webpack_require__(340);

var _store2 = _interopRequireDefault(_store);

var _routes = __webpack_require__(339);

var _routes2 = _interopRequireDefault(_routes);

var _app = __webpack_require__(193);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = window.__INITIAL_STATE__;
var store = (0, _store2.default)(initialState);

var APP_ROOT = document.getElementById('app-root');

(0, _reactDom.render)(_react2.default.createElement(_app2.default, { store: store, routes: _routes2.default }), APP_ROOT);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/jackson/WebDevelopment/Asteroids/src/index.js');

  __REACT_HOT_LOADER__.register(store, 'store', '/home/jackson/WebDevelopment/Asteroids/src/index.js');

  __REACT_HOT_LOADER__.register(APP_ROOT, 'APP_ROOT', '/home/jackson/WebDevelopment/Asteroids/src/index.js');
}();

;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = NavLink;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(79);

var _classnames = __webpack_require__(102);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(223);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function NavLink(_ref) {
  var className = _ref.className,
      passThrough = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(_reactRouter.Link, _extends({ className: (0, _classnames2.default)(_styles2.default.link, className), activeClassName: _styles2.default.active }, passThrough));
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavLink, 'NavLink', '/home/jackson/WebDevelopment/Asteroids/src/elements/Pagination/NavLink.jsx');
}();

;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavLink = __webpack_require__(296);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _styles = __webpack_require__(223);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocationForPageCreator = function createLocationForPageCreator(size) {
  return function (_ref, page) {
    var pathname = _ref.pathname;
    return { pathname: pathname, query: { page: page, size: size } };
  };
};

function Pagination(_ref2) {
  var location = _ref2.location,
      currentPage = _ref2.currentPage,
      totalPages = _ref2.totalPages,
      itemsPerPage = _ref2.itemsPerPage;

  var createLocationForPage = createLocationForPageCreator(itemsPerPage);

  var first = createLocationForPage(location, 0);
  var prev = createLocationForPage(location, currentPage - 1);
  var next = createLocationForPage(location, currentPage + 1);
  var last = createLocationForPage(location, totalPages);

  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'ul',
      { className: _styles2.default.pagination },
      currentPage !== 0 && _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _NavLink2.default,
          { to: first },
          'First'
        )
      ),
      currentPage > 0 && _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _NavLink2.default,
          { to: prev },
          'Previous'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _NavLink2.default,
          { className: _styles2.default.active },
          currentPage
        )
      ),
      currentPage < totalPages && _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _NavLink2.default,
          { to: next },
          'Next'
        )
      ),
      currentPage !== totalPages && _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _NavLink2.default,
          { to: last },
          'Last'
        )
      )
    )
  );
}

Pagination.propTypes = {
  startPage: _propTypes2.default.number,
  currentPage: _propTypes2.default.number,
  lastPage: _propTypes2.default.number
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createLocationForPageCreator, 'createLocationForPageCreator', '/home/jackson/WebDevelopment/Asteroids/src/elements/Pagination/Pagination.jsx');

  __REACT_HOT_LOADER__.register(Pagination, 'Pagination', '/home/jackson/WebDevelopment/Asteroids/src/elements/Pagination/Pagination.jsx');
}();

;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(79);

var _Pagination = __webpack_require__(297);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)(_Pagination2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/elements/Pagination/PaginationContainer.js');
}();

;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaginationContainer = __webpack_require__(298);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PaginationContainer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Preloader;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(530);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Preloader() {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.track },
    _react2.default.createElement('div', { className: _styles2.default.thumb })
  );
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Preloader, 'Preloader', '/home/jackson/WebDevelopment/Asteroids/src/elements/Preloader/Preloader.jsx');
}();

;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Preloader = __webpack_require__(300);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Preloader).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = THead;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(114);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function THead(_ref) {
  var field = _ref.field,
      children = _ref.children,
      _ref$sort = _ref.sort,
      sort = _ref$sort === undefined ? false : _ref$sort;

  return _react2.default.createElement(
    'i',
    null,
    children
  );
}

THead.propTypes = {
  field: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.string.isRequired,
  sort: _propTypes2.default.bool
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(THead, 'THead', '/home/jackson/WebDevelopment/Asteroids/src/elements/Table/THead.jsx');
}();

;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(102);

var _classnames2 = _interopRequireDefault(_classnames);

var _sort = __webpack_require__(192);

var _styles = __webpack_require__(114);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function THeadContainer(_ref) {
  var _cx;

  var field = _ref.field,
      children = _ref.children,
      sortOrder = _ref.sortOrder,
      _onClick = _ref.onClick;

  return _react2.default.createElement(
    'span',
    {
      className: (0, _classnames2.default)(_styles2.default.toggle, (_cx = {}, _cx[_styles2.default.asc] = sortOrder === _sort.SortOrders.ASC, _cx[_styles2.default.desc] = sortOrder === _sort.SortOrders.DESC, _cx)),
      onClick: function onClick() {
        return _onClick(field);
      }
    },
    children
  );
}

exports.default = THeadContainer;
THeadContainer.propTypes = {
  field: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired,
  sortOrder: _propTypes2.default.oneOf(Object.values(_sort.SortOrders)),
  onClick: _propTypes2.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(THeadContainer, 'THeadContainer', '/home/jackson/WebDevelopment/Asteroids/src/elements/Table/THeadContainer.jsx');
}();

;

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(102);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(114);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Table(_ref) {
  var children = _ref.children,
      items = _ref.items,
      fields = _ref.fields,
      onEntryClick = _ref.onEntryClick;

  return _react2.default.createElement(
    'table',
    { className: _styles2.default.table },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        { className: _styles2.default.head },
        children.map(function (child, index) {
          return _react2.default.createElement(
            'th',
            { key: index, className: _styles2.default.column },
            child
          );
        })
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      items.map(function (item, rIndex) {
        var _cx;

        return _react2.default.createElement(
          'tr',
          {
            key: rIndex,
            className: (0, _classnames2.default)(_styles2.default.row, (_cx = {}, _cx[_styles2.default.clickable] = onEntryClick, _cx)),
            onClick: function onClick() {
              return onEntryClick && onEntryClick(item);
            }
          },
          fields.map(function (field, cIndex) {
            return _react2.default.createElement(
              'td',
              { key: cIndex, className: _styles2.default.column },
              item[field]
            );
          })
        );
      })
    )
  );
}

Table.propTypes = {
  children: _propTypes2.default.element.isRequired,
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  fields: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  onEntryClick: _propTypes2.default.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Table, 'Table', '/home/jackson/WebDevelopment/Asteroids/src/elements/Table/Table.jsx');
}();

;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(102);

var _classnames2 = _interopRequireDefault(_classnames);

var _Preloader = __webpack_require__(301);

var _Preloader2 = _interopRequireDefault(_Preloader);

var _sort = __webpack_require__(192);

var _THeadContainer = __webpack_require__(303);

var _THeadContainer2 = _interopRequireDefault(_THeadContainer);

var _Table = __webpack_require__(304);

var _Table2 = _interopRequireDefault(_Table);

var _styles = __webpack_require__(114);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableConatiner = (_temp = _class = function (_Component) {
  _inherits(TableConatiner, _Component);

  function TableConatiner(props) {
    _classCallCheck(this, TableConatiner);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var children = props.children;

    var _ref = children.find(function (c) {
      return c.props.sort;
    }) || {},
        sortField = _ref.field;

    var sortOrder = sortField ? _sort.SortOrder.next() : _sort.SortOrder.initial();

    _this.state = {
      sortField: sortField,
      sortOrder: sortOrder
    };

    _this.onTHeadClick = _this.onTHeadClick.bind(_this);
    return _this;
  }

  TableConatiner.prototype.onTHeadClick = function onTHeadClick(field) {
    var sortField = this.state.sortField;


    if (sortField === field) {
      return this.toggleSortOrder(field);
    }

    _sort.SortOrder.initial();

    this.setState({
      sortField: field,
      sortOrder: _sort.SortOrder.next()
    });
  };

  TableConatiner.prototype.toggleSortOrder = function toggleSortOrder(field) {
    this.setState({ sortOrder: _sort.SortOrder.next() });
  };

  TableConatiner.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        loading = _props.loading,
        children = _props.children,
        items = _props.items,
        onEntryClick = _props.onEntryClick;
    var _state = this.state,
        sortField = _state.sortField,
        sortOrder = _state.sortOrder;


    var count = children.length;
    var fields = children.map(function (c) {
      return c.props.field;
    });

    var sortedItems = items;

    if (sortField) {
      if (sortOrder !== _sort.SortOrders.NOT_SORTED) {
        sortedItems = (0, _sort.sortBy)(items, sortField, sortOrder);
      }
    }

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_styles2.default.container, className) },
      _react2.default.createElement(
        _Table2.default,
        {
          items: sortedItems,
          fields: fields,
          onEntryClick: onEntryClick
        },
        children.map(function (child, index) {
          var field = child.props.field;


          return _react2.default.createElement(
            _THeadContainer2.default,
            {
              key: index,
              field: field,
              sortOrder: sortField === field ? sortOrder : _sort.SortOrders.NOT_SORTED,
              onClick: _this2.onTHeadClick
            },
            child
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.preloader },
        loading && _react2.default.createElement(_Preloader2.default, null)
      )
    );
  };

  return TableConatiner;
}(_react.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  onEntryClick: _propTypes2.default.func
}, _temp);
exports.default = TableConatiner;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableConatiner, 'TableConatiner', '/home/jackson/WebDevelopment/Asteroids/src/elements/Table/TableContainer.jsx');
}();

;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableContainer = __webpack_require__(305);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableContainer).default;
  }
});

var _THead = __webpack_require__(302);

Object.defineProperty(exports, 'THead', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_THead).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Table = __webpack_require__(306);

Object.defineProperty(exports, 'Table', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Table).default;
  }
});
Object.defineProperty(exports, 'THead', {
  enumerable: true,
  get: function get() {
    return _Table.THead;
  }
});

var _Pagination = __webpack_require__(299);

Object.defineProperty(exports, 'Pagination', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Pagination).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ActionStates = exports.ActionStates = {
  PENDING: 'PENDING',
  SUCCEED: 'SUCCEED',
  FAILED: 'FAILED'
};

var createActionType = exports.createActionType = function createActionType(name) {
  return {
    toString: function toString() {
      return name;
    },

    get PENDING() {
      return name + '_' + ActionStates.PENDING;
    },
    get SUCCEED() {
      return name + '_' + ActionStates.SUCCEED;
    },
    get FAILED() {
      return name + '_' + ActionStates.FAILED;
    }
  };
};

var createDomainActionTypeCreator = exports.createDomainActionTypeCreator = function createDomainActionTypeCreator(domain) {
  return function (name) {
    return createActionType(domain + '/' + name);
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ActionStates, 'ActionStates', '/home/jackson/WebDevelopment/Asteroids/src/lib/actionType/actionType.js');

  __REACT_HOT_LOADER__.register(createActionType, 'createActionType', '/home/jackson/WebDevelopment/Asteroids/src/lib/actionType/actionType.js');

  __REACT_HOT_LOADER__.register(createDomainActionTypeCreator, 'createDomainActionTypeCreator', '/home/jackson/WebDevelopment/Asteroids/src/lib/actionType/actionType.js');
}();

;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionType = __webpack_require__(308);

Object.keys(_actionType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actionType[key];
    }
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HttpError = exports.HttpError = function (_Error) {
  _inherits(HttpError, _Error);

  function HttpError(messgae, status) {
    _classCallCheck(this, HttpError);

    var _this = _possibleConstructorReturn(this, _Error.call(this, messgae));

    _this.name = _this.constructor.name;
    _this.messgae = messgae;
    _this.status = status;
    return _this;
  }

  return HttpError;
}(Error);

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HttpError, "HttpError", "/home/jackson/WebDevelopment/Asteroids/src/lib/http/errors.js");
}();

;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = __webpack_require__(310);

var defaultOptions = {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
};

var request = function request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  return fetch(url).catch(function (error) {
    throw new Error('Service is not available');
  }).then(function (response) {
    if (!response.ok) {
      throw new _errors.HttpError(response.statusText, response.status);
    }
    return response.json();
  });
};

var _default = {
  get: function get(url) {
    return request(url);
  },
  post: function post(url, data) {
    throw new Error('Not implemented yet');
  }
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultOptions, 'defaultOptions', '/home/jackson/WebDevelopment/Asteroids/src/lib/http/http.js');

  __REACT_HOT_LOADER__.register(request, 'request', '/home/jackson/WebDevelopment/Asteroids/src/lib/http/http.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/lib/http/http.js');
}();

;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(311);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_http).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = __webpack_require__(314);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_querystring).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(filter).map(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    return encodeURIComponent(key) + '=' + encodeURIComponent(value);
  }).join('&');
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/lib/querystring/querystring.js');
}();

;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(79);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(531);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      { className: _styles2.default.header },
      _react2.default.createElement(
        'h1',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            className: _styles2.default.link,
            to: '/'
          },
          'Asteroids - NeoWS'
        )
      ),
      _react2.default.createElement(
        'h3',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            className: _styles2.default.link,
            target: '_blank',
            to: 'https://api.nasa.gov/api.html#neows'
          },
          'NASA Near Earth Object Web Service'
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: _styles2.default.content },
      props.children
    )
  );
}

Layout.propTypes = {
  children: _propTypes2.default.element.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Layout, 'Layout', '/home/jackson/WebDevelopment/Asteroids/src/modules/app/Layout.jsx');
}();

;

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(182);

var _reactRouter = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var store = _ref.store,
      routes = _ref.routes;

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory, routes: routes })
  );
}

App.propTypes = {
  store: _propTypes2.default.object.isRequired,
  routes: _propTypes2.default.object.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/home/jackson/WebDevelopment/Asteroids/src/modules/app/components/App/App.jsx');
}();

;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(316);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Not found'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Sorry, the page is not found or doesn\'t exists'
    )
  );
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFound, 'NotFound', '/home/jackson/WebDevelopment/Asteroids/src/modules/app/components/NotFound/NotFound.jsx');
}();

;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NotFound = __webpack_require__(318);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotFound).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lookupAsteroidById = exports.fetchAsteroidById = exports.fetchAsteroids = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = __webpack_require__(97);

var _types = __webpack_require__(194);

var _selectors = __webpack_require__(101);

var _api = __webpack_require__(322);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchAsteroids = exports.fetchAsteroids = (0, _reduxActions.createAction)(_types.FETCH_ASTEROIDS, function (query) {
  return _api2.default.fetchAsteroids(query);
});

var fetchAsteroidById = exports.fetchAsteroidById = (0, _reduxActions.createAction)(_types.FETCH_ASTEROID_BY_ID, function (id) {
  return _api2.default.fetchAsteroidById(id);
});

var _lookupAsteroidById = (0, _reduxActions.createAction)(_types.LOOKUP_ASTEROID_BY_ID, function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id, _ref) {
    var getState = _ref.getState;
    var asteroids, asteroid;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            asteroids = (0, _selectors.getAsteroidsById)(getState());
            asteroid = asteroids[id];

            if (!asteroid) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', _extends({}, asteroid, { _cached: true }));

          case 4:
            throw new Error('Asteroid was not found in cache');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());

var lookupAsteroidById = exports.lookupAsteroidById = function lookupAsteroidById(id) {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return dispatch(_lookupAsteroidById(id, { getState: getState }));

            case 3:
              return _context2.abrupt('return', _context2.sent);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', dispatch(fetchAsteroidById(id)));

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 6]]);
    }));

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fetchAsteroids, 'fetchAsteroids', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/asteroids.js');

  __REACT_HOT_LOADER__.register(fetchAsteroidById, 'fetchAsteroidById', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/asteroids.js');

  __REACT_HOT_LOADER__.register(_lookupAsteroidById, '_lookupAsteroidById', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/asteroids.js');

  __REACT_HOT_LOADER__.register(lookupAsteroidById, 'lookupAsteroidById', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/actions/asteroids.js');
}();

;

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizr = __webpack_require__(248);

var _lib = __webpack_require__(124);

var _scheme = __webpack_require__(324);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _process$env = __webpack_require__.i({"NODE_ENV":"development","API_URI":"https://api.nasa.gov/neo/rest/v1/neo","API_KEY":"DNnIOj3S7fHn8Ztb9XuGI9W45hpwmZWcqSwnHIPT"}),
    API_URI = _process$env.API_URI,
    API_KEY = _process$env.API_KEY;


var DEFAULT_PAGE = 0;
var DEFAULT_SIZE = 10;

var _default = {
  fetchAsteroids: function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
      var _ref$page = _ref.page,
          page = _ref$page === undefined ? DEFAULT_PAGE : _ref$page,
          _ref$size = _ref.size,
          size = _ref$size === undefined ? DEFAULT_SIZE : _ref$size;

      var query, url, _ref3, pagination, _ref3$page, currentPage, totalPages, near_earth_objects, _normalize, asteroidsById, asteroidsIds;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = (0, _lib.querystring)({ page: page, size: size, api_key: API_KEY });
              url = API_URI + '/browse';


              if (query) {
                url = url + '?' + query;
              }

              _context.next = 5;
              return _lib.http.get(url);

            case 5:
              _ref3 = _context.sent;
              pagination = _ref3.links;
              _ref3$page = _ref3.page;
              currentPage = _ref3$page.number;
              totalPages = _ref3$page.total_pages;
              near_earth_objects = _ref3.near_earth_objects;
              _normalize = (0, _normalizr.normalize)(near_earth_objects, _scheme.asteroidListSchema), asteroidsById = _normalize.entities.asteroids, asteroidsIds = _normalize.result;
              return _context.abrupt('return', {
                pagination: pagination,
                currentPage: currentPage,
                totalPages: totalPages,
                asteroidsById: asteroidsById,
                asteroidsIds: asteroidsIds
              });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function fetchAsteroids(_x) {
      return _ref2.apply(this, arguments);
    }

    return fetchAsteroids;
  }(),
  fetchAsteroidById: function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(id) {
      var query, url;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = (0, _lib.querystring)({ api_key: API_KEY });
              url = API_URI + '/' + id + '?' + query;
              return _context2.abrupt('return', _lib.http.get(url));

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function fetchAsteroidById(_x2) {
      return _ref4.apply(this, arguments);
    }

    return fetchAsteroidById;
  }()
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(API_URI, 'API_URI', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/api/api.js');

  __REACT_HOT_LOADER__.register(API_KEY, 'API_KEY', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/api/api.js');

  __REACT_HOT_LOADER__.register(DEFAULT_PAGE, 'DEFAULT_PAGE', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/api/api.js');

  __REACT_HOT_LOADER__.register(DEFAULT_SIZE, 'DEFAULT_SIZE', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/api/api.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/api/api.js');
}();

;

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__(321);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_api).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asteroidListSchema = exports.asteroidSchema = undefined;

var _normalizr = __webpack_require__(248);

var asteroidSchema = exports.asteroidSchema = new _normalizr.schema.Entity('asteroids', {}, { idAttribute: 'neo_reference_id' });

var asteroidListSchema = exports.asteroidListSchema = new _normalizr.schema.Array(asteroidSchema);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(asteroidSchema, 'asteroidSchema', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/api/scheme/asteroid.js');

  __REACT_HOT_LOADER__.register(asteroidListSchema, 'asteroidListSchema', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/api/scheme/asteroid.js');
}();

;

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asteroid = __webpack_require__(323);

Object.keys(_asteroid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _asteroid[key];
    }
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Details;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Details(_ref) {
  var asteroid = _ref.asteroid;

  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Asteroid details:'
    ),
    asteroid && asteroid._cached && _react2.default.createElement(
      'p',
      null,
      'The value was given from cache (due to optimization)',
      _react2.default.createElement('br', null),
      'Reload the page in you want not cached one'
    ),
    _react2.default.createElement(
      'pre',
      null,
      asteroid ? JSON.stringify(asteroid, null, 2) : 'Loading...'
    )
  );
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Details, 'Details', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Details/Details.jsx');
}();

;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(182);

var _reactRouter = __webpack_require__(79);

var _reselect = __webpack_require__(190);

var _actions = __webpack_require__(52);

var _selectors = __webpack_require__(101);

var _Details = __webpack_require__(325);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stateToProps = (0, _reselect.createStructuredSelector)({
  asteroid: _selectors.getAsteroid
});

var dispatchToProps = {
  lookupAsteroidById: _actions.lookupAsteroidById
};

var DetailsConatiner = (_dec = (0, _reactRedux.connect)(stateToProps, dispatchToProps), _dec(_class = (0, _reactRouter.withRouter)(_class = function (_Component) {
  _inherits(DetailsConatiner, _Component);

  function DetailsConatiner() {
    _classCallCheck(this, DetailsConatiner);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DetailsConatiner.prototype.componentDidMount = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.props.lookupAsteroidById(this.props.params.id);

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context['catch'](0);

              if (_context.t0.status === 404) {
                this.props.router.push('/NotFound');
              }

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 5]]);
    }));

    function componentDidMount() {
      return _ref.apply(this, arguments);
    }

    return componentDidMount;
  }();

  DetailsConatiner.prototype.render = function render() {
    var asteroid = this.props.asteroid;


    return _react2.default.createElement(_Details2.default, { asteroid: asteroid });
  };

  return DetailsConatiner;
}(_react.Component)) || _class) || _class);
exports.default = DetailsConatiner;
;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Details/DetailsContainer.jsx');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Details/DetailsContainer.jsx');

  __REACT_HOT_LOADER__.register(DetailsConatiner, 'DetailsConatiner', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Details/DetailsContainer.jsx');
}();

;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DetailsContainer = __webpack_require__(326);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DetailsContainer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Summary;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elements = __webpack_require__(307);

var _styles = __webpack_require__(532);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Summary(_ref) {
  var _ref$asteroids = _ref.asteroids,
      asteroids = _ref$asteroids === undefined ? [] : _ref$asteroids,
      areAsteroidsFetching = _ref.areAsteroidsFetching,
      onAsteroidSelect = _ref.onAsteroidSelect,
      pagination = _ref.pagination,
      itemsPerPage = _ref.itemsPerPage;

  return _react2.default.createElement(
    'section',
    { className: _styles2.default.content },
    _react2.default.createElement(
      'h1',
      null,
      'Asteroids List:'
    ),
    _react2.default.createElement(
      _elements.Table,
      {
        className: _styles2.default.table,
        loading: areAsteroidsFetching,
        items: asteroids,
        onEntryClick: onAsteroidSelect
      },
      _react2.default.createElement(
        _elements.THead,
        { field: 'neo_reference_id' },
        'Id:'
      ),
      _react2.default.createElement(
        _elements.THead,
        { field: 'name' },
        'Name:'
      ),
      _react2.default.createElement(
        _elements.THead,
        { field: 'absolute_magnitude_h' },
        'Absolute Magnitude H:'
      )
    ),
    _react2.default.createElement(_elements.Pagination, {
      itemsPerPage: itemsPerPage,
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages
    })
  );
}

Summary.propTypes = {
  asteroids: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onAsteroidSelect: _propTypes2.default.func,
  pagination: _propTypes2.default.object,
  itemsPerPage: _propTypes2.default.number
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Summary, 'Summary', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Summary/Summary.jsx');
}();

;

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(182);

var _reactRouter = __webpack_require__(79);

var _reselect = __webpack_require__(190);

var _actions = __webpack_require__(52);

var _selectors = __webpack_require__(101);

var _Summary = __webpack_require__(328);

var _Summary2 = _interopRequireDefault(_Summary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stateToProps = (0, _reselect.createStructuredSelector)({
  asteroids: _selectors.getAsteroids,
  areAsteroidsFetching: _selectors.getAreAsteroidsFetching,
  pagination: _selectors.gaetPagination
});
var dispatchToProps = {
  fetchAsteroids: _actions.fetchAsteroids
};

var SummaryContainer = (_dec = (0, _reactRedux.connect)(stateToProps, dispatchToProps), (0, _reactRouter.withRouter)(_class = _dec(_class = function (_Component) {
  _inherits(SummaryContainer, _Component);

  function SummaryContainer(props) {
    _classCallCheck(this, SummaryContainer);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.showDetails = _this.showDetails.bind(_this);
    return _this;
  }

  SummaryContainer.prototype.componentDidMount = function componentDidMount() {
    var _props$location$query = this.props.location.query,
        page = _props$location$query.page,
        size = _props$location$query.size;

    this.props.fetchAsteroids({ page: page, size: size });
  };

  SummaryContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    if (this.props.location === newProps.location) return;

    var _newProps$location$qu = newProps.location.query,
        page = _newProps$location$qu.page,
        size = _newProps$location$qu.size;

    this.props.fetchAsteroids({ page: page, size: size });
  };

  SummaryContainer.prototype.showDetails = function showDetails(asteroid) {
    this.props.router.push('/details/' + asteroid.neo_reference_id);
  };

  SummaryContainer.prototype.render = function render() {
    var size = this.props.location.query.size;

    return _react2.default.createElement(_Summary2.default, _extends({
      itemsPerPage: size,
      onAsteroidSelect: this.showDetails
    }, this.props));
  };

  return SummaryContainer;
}(_react.Component)) || _class) || _class);
exports.default = SummaryContainer;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateToProps, 'stateToProps', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Summary/SummaryContainer.jsx');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Summary/SummaryContainer.jsx');

  __REACT_HOT_LOADER__.register(SummaryContainer, 'SummaryContainer', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/components/Summary/SummaryContainer.jsx');
}();

;

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SummaryContainer = __webpack_require__(329);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SummaryContainer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _reduxActions = __webpack_require__(97);

var _actions = __webpack_require__(52);

var initialAsteroidState = null;

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _handleActions[_actions.types.LOOKUP_ASTEROID_BY_ID.SUCCEED] = function (state, _ref) {
  var payload = _ref.payload;
  return payload;
}, _handleActions[_actions.types.FETCH_ASTEROID_BY_ID.SUCCEED] = function (state, _ref2) {
  var payload = _ref2.payload;
  return payload;
}, _handleActions), initialAsteroidState);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialAsteroidState, 'initialAsteroidState', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/asteroid.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/asteroid.js');
}();

;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = __webpack_require__(97);

var _actions = __webpack_require__(52);

var initialAsteroidsByIdState = {};

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _handleActions[_actions.types.FETCH_ASTEROIDS.SUCCEED] = function (stateAsteroidsById, _ref) {
  var payload = _ref.payload;
  return _extends({}, payload.asteroidsById);
}, _handleActions), initialAsteroidsByIdState);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialAsteroidsByIdState, 'initialAsteroidsByIdState', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/asteroidsById.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/asteroidsById.js');
}();

;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = __webpack_require__(97);

var _actions = __webpack_require__(52);

var initialFetchingState = {
  asteroids: false
};

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _handleActions[_actions.types.FETCH_ASTEROIDS.PENDING] = function (state) {
  return _extends({}, state, {
    asteroids: true
  });
}, _handleActions[_actions.types.FETCH_ASTEROIDS.SUCCEED + '||' + _actions.types.FETCH_ASTEROIDS.FAILED] = function undefined(state) {
  return _extends({}, state, {
    asteroids: false
  });
}, _handleActions), initialFetchingState);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialFetchingState, 'initialFetchingState', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/fetching.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/fetching.js');
}();

;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(98);

var _asteroid = __webpack_require__(331);

var _asteroid2 = _interopRequireDefault(_asteroid);

var _asteroidsById = __webpack_require__(332);

var _asteroidsById2 = _interopRequireDefault(_asteroidsById);

var _fetching = __webpack_require__(333);

var _fetching2 = _interopRequireDefault(_fetching);

var _pagination = __webpack_require__(335);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  asteroid: _asteroid2.default,
  asteroidsById: _asteroidsById2.default,
  fetching: _fetching2.default,
  pagination: _pagination2.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/index.js');
}();

;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = __webpack_require__(97);

var _actions = __webpack_require__(52);

var initialPaginationState = {};

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _handleActions[_actions.types.FETCH_ASTEROIDS.SUCCEED] = function (statePagination, _ref) {
  var payload = _ref.payload;
  return _extends({}, statePagination, payload.pagination, {
    currentPage: payload.currentPage,
    totalPages: payload.totalPages
  });
}, _handleActions), initialPaginationState);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialPaginationState, 'initialPaginationState', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/pagination.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/modules/asteroids/reducer/pagination.js');
}();

;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _combineReducers;

var _redux = __webpack_require__(98);

var _asteroids = __webpack_require__(100);

var _default = (0, _redux.combineReducers)((_combineReducers = {}, _combineReducers[_asteroids.name] = _asteroids.reducer, _combineReducers));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/reducer.js');
}();

;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asteroids = __webpack_require__(100);

var _default = {
  path: 'details/:id',
  component: _asteroids.Details
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/routes/asteroids/details.js');
}();

;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asteroids = __webpack_require__(100);

var _asteroids2 = _interopRequireDefault(_asteroids);

var _details = __webpack_require__(337);

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  childRoutes: [_details2.default, {
    path: '(list)',
    component: _asteroids2.default
  }]
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/routes/asteroids/index.js');
}();

;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(193);

var _asteroids = __webpack_require__(100);

var _asteroids2 = _interopRequireDefault(_asteroids);

var _asteroids3 = __webpack_require__(338);

var _asteroids4 = _interopRequireDefault(_asteroids3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  path: '/',
  component: _app.Layout,
  indexRoute: { component: _asteroids2.default },
  childRoutes: [_asteroids4.default, {
    path: '*',
    component: _app.NotFound
  }]
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/routes/index.js');
}();

;

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(98);

var _reduxPromiseMiddleware = __webpack_require__(737);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reduxThunk = __webpack_require__(739);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _lib = __webpack_require__(124);

var _reducer = __webpack_require__(336);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default, (0, _reduxPromiseMiddleware2.default)({
  promiseTypeSuffixes: Object.values(_lib.ActionStates)
})];

var composeEnhancers = _redux.compose;

var _default = function _default() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (true) {
    var composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  return (0, _redux.createStore)(_reducer2.default, initialState, composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)));
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middlewares, 'middlewares', '/home/jackson/WebDevelopment/Asteroids/src/store.js');

  __REACT_HOT_LOADER__.register(composeEnhancers, 'composeEnhancers', '/home/jackson/WebDevelopment/Asteroids/src/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/jackson/WebDevelopment/Asteroids/src/store.js');
}();

;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;

var _asteroids = __webpack_require__(320);

Object.keys(_asteroids).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _asteroids[key];
    }
  });
});

var _types = __webpack_require__(194);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.types = types;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, ".src-elements-Pagination-styles__pagination {\n  display: flex;\n  margin: 0;\n  padding: 5px;\n  list-style: none;\n}\n.src-elements-Pagination-styles__pagination > * {\n  margin: 2px;\n}\n.src-elements-Pagination-styles__link {\n  display: inline-block;\n  padding: 0 5px;\n  border: solid 1px #a7a7a7;\n  border-radius: 5px;\n  color: #1471c1;\n  background-color: #fff;\n  text-decoration: none;\n}\n.src-elements-Pagination-styles__link.src-elements-Pagination-styles__active {\n  color: #fff;\n  background-color: #1471c1;\n}\n", ""]);

// exports
exports.locals = {
	"pagination": "src-elements-Pagination-styles__pagination",
	"link": "src-elements-Pagination-styles__link",
	"active": "src-elements-Pagination-styles__active"
};

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, ".src-elements-Preloader-styles__track {\n  width: 100%;\n  height: 3px;\n  overflow: hidden;\n}\n.src-elements-Preloader-styles__thumb {\n  width: 50%;\n  height: 100%;\n  background-color: #1471c1;\n  animation: src-elements-Preloader-styles__loading 1.5s ease-out infinite;\n}\n@-moz-keyframes src-elements-Preloader-styles__loading {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(200%);\n  }\n}\n@-webkit-keyframes src-elements-Preloader-styles__loading {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(200%);\n  }\n}\n@-o-keyframes src-elements-Preloader-styles__loading {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(200%);\n  }\n}\n@keyframes src-elements-Preloader-styles__loading {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(200%);\n  }\n}\n", ""]);

// exports
exports.locals = {
	"track": "src-elements-Preloader-styles__track",
	"thumb": "src-elements-Preloader-styles__thumb",
	"loading": "src-elements-Preloader-styles__loading"
};

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, ".src-elements-Table-styles__container {\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 5px 20px -5px #a7a7a7;\n}\n.src-elements-Table-styles__table {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n}\n.src-elements-Table-styles__head {\n  color: #1471c1;\n  text-align: left;\n}\n.src-elements-Table-styles__row {\n  border: 1px solid #dadada;\n  text-align: left;\n}\n.src-elements-Table-styles__row:hover {\n  background-color: #f8f8f8;\n}\n.src-elements-Table-styles__column {\n  padding: 10px;\n}\n.src-elements-Table-styles__row:last-child {\n  border-bottom: none;\n}\n.src-elements-Table-styles__row .src-elements-Table-styles__column:first-child {\n  border-left: none;\n}\n.src-elements-Table-styles__row .src-elements-Table-styles__column:last-child {\n  border-right: none;\n}\n.src-elements-Table-styles__clickable {\n  cursor: pointer;\n}\n.src-elements-Table-styles__preloader {\n  height: 3px;\n}\n.src-elements-Table-styles__toggle {\n  position: relative;\n  padding-left: 0.75em;\n  cursor: pointer;\n  user-select: none;\n}\n.src-elements-Table-styles__toggle:before {\n  position: absolute;\n  top: 7px;\n  left: 0;\n  font-size: 0.75em;\n  content: \"\\25BE\";\n}\n.src-elements-Table-styles__toggle:after {\n  position: absolute;\n  bottom: 7px;\n  left: 0;\n  font-size: 0.75em;\n  content: \"\\25B4\";\n}\n.src-elements-Table-styles__toggle.src-elements-Table-styles__asc:before {\n  opacity: 0.5;\n}\n.src-elements-Table-styles__toggle.src-elements-Table-styles__desc:after {\n  opacity: 0.5;\n}\n", ""]);

// exports
exports.locals = {
	"container": "src-elements-Table-styles__container",
	"table": "src-elements-Table-styles__table",
	"head": "src-elements-Table-styles__head",
	"row": "src-elements-Table-styles__row",
	"column": "src-elements-Table-styles__column",
	"clickable": "src-elements-Table-styles__clickable",
	"preloader": "src-elements-Table-styles__preloader",
	"toggle": "src-elements-Table-styles__toggle",
	"asc": "src-elements-Table-styles__asc",
	"desc": "src-elements-Table-styles__desc"
};

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, ".src-modules-app-styles__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 25px;\n  color: #a7a7a7;\n  background-color: #272727;\n}\n.src-modules-app-styles__header .src-modules-app-styles__link {\n  color: currentColor;\n  text-decoration: none;\n}\n.src-modules-app-styles__content {\n  overflow: auto;\n  padding: 10px 50px;\n}\n", ""]);

// exports
exports.locals = {
	"header": "src-modules-app-styles__header",
	"link": "src-modules-app-styles__link",
	"content": "src-modules-app-styles__content"
};

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, ".src-modules-asteroids-components-Summary-styles__content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.src-modules-asteroids-components-Summary-styles__content .src-modules-asteroids-components-Summary-styles__table {\n  width: 70%;\n}\n", ""]);

// exports
exports.locals = {
	"content": "src-modules-asteroids-components-Summary-styles__content",
	"table": "src-modules-asteroids-components-Summary-styles__table"
};

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(526);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(99)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(99)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!../../../node_modules/stylus-loader/index.js!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(529);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(99)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../node_modules/stylus-loader/index.js!./styles.styl", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../node_modules/stylus-loader/index.js!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(295);
module.exports = __webpack_require__(294);


/***/ })

},[749]);
//# sourceMappingURL=app.02123a5ad30ba05f6436.js.map