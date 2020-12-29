/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Highlight.css":
/*!***************************!*\
  !*** ./src/Highlight.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Luminous.css":
/*!**************************!*\
  !*** ./src/Luminous.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Category.ts":
/*!*************************!*\
  !*** ./src/Category.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allCategories": function() { return /* binding */ allCategories; }
/* harmony export */ });
var allCategories = ['Computer', 'Music', 'Misc'];


/***/ }),

/***/ "./src/CategoryWidget.tsx":
/*!********************************!*\
  !*** ./src/CategoryWidget.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryWidget": function() { return /* binding */ CategoryWidget; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/Theme.tsx");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./src/Path.tsx");
/** @jsx jsx */





var CategoryButton = function (_a) {
    var _b = _a.category, category = _b === void 0 ? {} : _b, _c = _a.postCount, postCount = _c === void 0 ? 0 : _c;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_3__.PathContext).basename;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
        "-\u00A0",
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { css: {
                cursor: 'pointer',
                padding: '0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }, title: category, onClick: function () {
                navigate(basename + "category/" + category);
            } }, category),
        "\u00A0(",
        postCount,
        ")"));
};
var CategoryWidget = function (_a) {
    var _b = _a.categories, categories = _b === void 0 ? [] : _b, _c = _a.posts, posts = _c === void 0 ? [] : _c;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            display: 'inline-block',
            marginRight: '1rem',
            marginBottom: '1rem',
            color: theme.defaultColor
        } },
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
                fontWeight: 'bold'
            } }, "Category"),
        categories.map(function (category) { return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(CategoryButton, { category: category, postCount: posts.filter(function (post) { return post.category === category; }).length })); })));
};


/***/ }),

/***/ "./src/Header.tsx":
/*!************************!*\
  !*** ./src/Header.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/Theme.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./src/Icon.tsx");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./src/Path.tsx");
/** @jsx jsx */







var TitleButton = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_4__.PathContext).basename;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { css: {
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'inherit',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            textAlign: 'left',
            border: 'none',
            color: theme.darkColor,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            '&:hover, &:active, &:focus': {
                color: theme.lightColor
            }
        }, title: 'Home', onClick: function () {
            navigate(basename);
        } }, "Hunmin Park (Avantgarde95)"));
};
var Search = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_4__.PathContext).basename;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), query = _a[0], setQuery = _a[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { css: {
                fontFamily: 'inherit',
                fontSize: '1rem',
                color: theme.defaultColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                outline: 'none',
                border: "solid 1px " + theme.darkColor,
                borderRadius: 0,
                '&:hover, &:active, &:focus': {
                    border: "solid 1px " + theme.lightColor,
                }
            }, type: 'text', placeholder: 'Search', onChange: function (event) {
                setQuery(event.target.value);
            }, onKeyPress: function (event) {
                if (event.key === 'Enter') {
                    navigate(basename + "search/" + query);
                }
            } }),
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { css: {
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '1rem',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }, title: "Search " + query, onClick: function () {
                navigate(basename + "search/" + query);
            } },
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, { definition: _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_6__.faSearch }))));
};
var sites = [
    { name: 'Homepage', url: 'https://avantgarde95.github.io/' },
    { name: 'Code', url: 'https://github.com/Avantgarde95/blog' }
];
var SiteLinks = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, sites.map(function (_a) {
        var name = _a.name, url = _a.url;
        return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { css: {
                cursor: 'pointer',
                fontFamily: 'inherit',
                color: theme.darkColor,
                marginRight: '1rem',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }, title: name, href: url, target: '_blank', rel: 'noopener noreferrer' }, name));
    })));
};
var Header = function () {
    var _a, _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var onWideScreen = '@media (min-width: 769px)';
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            width: '100%',
            color: theme.defaultColor
        } },
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (_a = {
                    display: 'block',
                    marginBottom: '1rem'
                },
                _a[onWideScreen] = {
                    display: 'inline-block',
                    width: '50%'
                },
                _a) },
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(TitleButton, null)),
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (_b = {
                    boxSizing: 'border-box',
                    display: 'block',
                    marginBottom: '1rem'
                },
                _b[onWideScreen] = {
                    display: 'inline-block',
                    width: '50%',
                    textAlign: 'right'
                },
                _b) },
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Search, null)),
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
                marginBottom: '1rem'
            } },
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(SiteLinks, null))));
};


/***/ }),

/***/ "./src/Icon.tsx":
/*!**********************!*\
  !*** ./src/Icon.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/** @jsx jsx */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Icon = function (_a) {
    var _b = _a.definition, definition = _b === void 0 ? {} : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    var abstract = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.icon)(definition).abstract[0];
    var svgAttributes = abstract.attributes;
    var pathAttributes = abstract.children[0].attributes;
    svgAttributes["class"] += ' ' + className;
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", __assign({}, svgAttributes),
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", __assign({}, pathAttributes))));
};


/***/ }),

/***/ "./src/Main.tsx":
/*!**********************!*\
  !*** ./src/Main.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polyfill */ "./src/Polyfill.js");
/* harmony import */ var _Polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Header.tsx");
/* harmony import */ var _PostPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostPage */ "./src/PostPage.tsx");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Theme */ "./src/Theme.tsx");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Post */ "./src/Post.ts");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Category */ "./src/Category.ts");
/* harmony import */ var _PreviewPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PreviewPage */ "./src/PreviewPage.tsx");
/* harmony import */ var _CategoryWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CategoryWidget */ "./src/CategoryWidget.tsx");
/* harmony import */ var _SearchPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchPage */ "./src/SearchPage.tsx");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Path */ "./src/Path.tsx");
/* harmony import */ var _RecentPostsWidget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RecentPostsWidget */ "./src/RecentPostsWidget.tsx");
/* harmony import */ var _Luminous__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Luminous */ "./src/Luminous.css");
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Highlight */ "./src/Highlight.css");
/** @jsx jsx */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b;

















var NotFoundPage = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_5__.ThemeContext);
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { css: { color: theme.defaultColor } }, "Wrong URL!");
};
var ErrorHandler = /** @class */ (function (_super) {
    __extends(ErrorHandler, _super);
    function ErrorHandler(_a) {
        var _b = _a.children, children = _b === void 0 ? {} : _b;
        var _this = _super.call(this, { children: children }) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorHandler.prototype.componentDidCatch = function (error, errorInfo) {
        console.error(error === null || error === void 0 ? void 0 : error.toString());
        console.error(errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack);
    };
    ErrorHandler.prototype.render = function () {
        return this.props.children;
    };
    return ErrorHandler;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component));
var SafeRoutes = function (_a) {
    var _b = _a.basename, basename = _b === void 0 ? '/' : _b, _c = _a.routes, routes = _c === void 0 ? [] : _c;
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useRoutes)(routes.map(function (_a, index) {
        var path = _a.path, element = _a.element;
        return ({ path: path, element: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(ErrorHandler, { key: index }, element) });
    }), basename);
};
var AppRoutes = function (_a) {
    var _b = _a.posts, posts = _b === void 0 ? [] : _b, _c = _a.categories, categories = _c === void 0 ? [] : _c;
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_11__.PathContext).basename;
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(SafeRoutes, { basename: basename, routes: __spreadArrays([
            { path: '/', element: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PreviewPage__WEBPACK_IMPORTED_MODULE_8__.PreviewPage, { posts: posts }) }
        ], posts.map(function (post) { return ({
            path: "post/" + post.path,
            element: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PostPage__WEBPACK_IMPORTED_MODULE_4__.PostPage, { post: post })
        }); }), categories.map(function (category) { return ({
            path: "category/" + category.toLowerCase(),
            element: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_PreviewPage__WEBPACK_IMPORTED_MODULE_8__.PreviewPage, { posts: posts.filter(function (post) { return post.category === category; }) })
        }); }), [
            { path: 'search/:query', element: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SearchPage__WEBPACK_IMPORTED_MODULE_10__.SearchPage, { posts: posts }) },
            { path: '*', element: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(NotFoundPage, null) }
        ]) });
};
var AppArea = function (_a) {
    var _b, _c;
    var _d = _a.children, children = _d === void 0 ? {} : _d;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_5__.ThemeContext);
    var onWideScreen = '@media (min-width: 769px)';
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { css: (_b = {
                overflowY: 'auto',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%'
            },
            _b[onWideScreen] = {
                paddingTop: '1.5rem'
            },
            _b) },
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { css: (_c = {
                    boxSizing: 'border-box',
                    maxWidth: '769px',
                    margin: '0 auto',
                    padding: '1.5rem'
                },
                _c[onWideScreen] = {
                    border: "1px solid " + theme.darkColor
                },
                _c) }, children)));
};
var App = function () { return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.BrowserRouter, null,
    (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Path__WEBPACK_IMPORTED_MODULE_11__.PathProvider, { basename: document.getElementsByTagName('base')[0].getAttribute('href') },
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Theme__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, { defaultColor: '#ffffff', lightColor: '#00f6ff', darkColor: '#00d3dc' },
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(AppArea, null,
                (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, null),
                (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_CategoryWidget__WEBPACK_IMPORTED_MODULE_9__.CategoryWidget, { categories: _Category__WEBPACK_IMPORTED_MODULE_7__.allCategories, posts: _Post__WEBPACK_IMPORTED_MODULE_6__.allPosts }),
                (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_RecentPostsWidget__WEBPACK_IMPORTED_MODULE_12__.RecentPostsWidget, { posts: _Post__WEBPACK_IMPORTED_MODULE_6__.allPosts }),
                (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(AppRoutes, { posts: _Post__WEBPACK_IMPORTED_MODULE_6__.allPosts, categories: _Category__WEBPACK_IMPORTED_MODULE_7__.allCategories })))))); };
var temporaryElements = document.getElementsByClassName('Temporary');
for (var i = 0; i < temporaryElements.length; i++) {
    (_b = (_a = temporaryElements[i]) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(temporaryElements[i]);
}
(0,react__WEBPACK_IMPORTED_MODULE_2__.render)((0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(App, null), document.body);


/***/ }),

/***/ "./src/Path.tsx":
/*!**********************!*\
  !*** ./src/Path.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathContext": function() { return /* binding */ PathContext; },
/* harmony export */   "PathProvider": function() { return /* binding */ PathProvider; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/** @jsx jsx */


var PathContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
var PathProvider = function (_a) {
    var _b = _a.basename, basename = _b === void 0 ? '/' : _b, _c = _a.children, children = _c === void 0 ? {} : _c;
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(PathContext.Provider, { value: {
            basename: basename
        } }, children));
};


/***/ }),

/***/ "./src/Post.ts":
/*!*********************!*\
  !*** ./src/Post.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allPosts": function() { return /* binding */ allPosts; }
/* harmony export */ });
var allPosts = [
    {
        path: 'christmas2020',
        title: 'Merry Christmas!',
        date: new Date('2020-12-29'),
        category: 'Computer',
        load: function () { return __webpack_require__.e(/*! import() */ "src_post_Christmas2020_md").then(__webpack_require__.t.bind(__webpack_require__, /*! ./post/Christmas2020.md */ "./src/post/Christmas2020.md", 23)); }
    },
    {
        path: 'custommarkedrenderer',
        title: 'Customize marked.js renderer',
        date: new Date('2020-10-11'),
        category: 'Computer',
        load: function () { return __webpack_require__.e(/*! import() */ "src_post_CustomMarkedRenderer_md").then(__webpack_require__.t.bind(__webpack_require__, /*! ./post/CustomMarkedRenderer.md */ "./src/post/CustomMarkedRenderer.md", 23)); }
    },
    {
        path: 'myguitars',
        title: 'My guitars',
        date: new Date('2020-10-11'),
        category: 'Music',
        load: function () { return __webpack_require__.e(/*! import() */ "src_post_MyGuitars_md").then(__webpack_require__.t.bind(__webpack_require__, /*! ./post/MyGuitars.md */ "./src/post/MyGuitars.md", 23)); }
    },
    {
        path: 'markdowntest',
        title: 'Markdown test',
        date: new Date('2020-10-03'),
        category: 'Computer',
        load: function () { return __webpack_require__.e(/*! import() */ "src_post_MarkdownTest_md").then(__webpack_require__.t.bind(__webpack_require__, /*! ./post/MarkdownTest.md */ "./src/post/MarkdownTest.md", 23)); }
    },
    {
        path: 'welcome',
        title: 'Welcome',
        date: new Date('2020-09-21'),
        category: 'Misc',
        load: function () { return __webpack_require__.e(/*! import() */ "src_post_Welcome_md").then(__webpack_require__.t.bind(__webpack_require__, /*! ./post/Welcome.md */ "./src/post/Welcome.md", 23)); }
    }
];


/***/ }),

/***/ "./src/PostPage.tsx":
/*!**************************!*\
  !*** ./src/PostPage.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPage": function() { return /* binding */ PostPage; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! disqus-react */ "./node_modules/disqus-react/lib/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faClock */ "./node_modules/@fortawesome/free-solid-svg-icons/faClock.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Theme */ "./src/Theme.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "./src/Icon.tsx");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Path */ "./src/Path.tsx");
/** @jsx jsx */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Luminous = __webpack_require__(/*! luminous-lightbox */ "./node_modules/luminous-lightbox/es/lum.js").Luminous;
var loadingAnimation = (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    '0%': {
        opacity: 0
    },
    '50%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
var Loading = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            paddingBottom: '1rem',
            marginBottom: '1rem',
            borderBottom: "1px solid " + theme.darkColor,
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: theme.defaultColor
        } },
        "Loading...\u00A0",
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, { css: {
                animation: loadingAnimation + " 0.5s infinite"
            }, definition: _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_6__.faClock })));
};
var Title = function (_a) {
    var _b = _a.title, title = _b === void 0 ? '' : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: {
            display: 'inline-block',
            wordBreak: 'break-all',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            color: theme.defaultColor,
            fontSize: '1.8rem',
            fontWeight: 'bold'
        } }, title));
};
var PostDate = function (_a) {
    var _b = _a.date, date = _b === void 0 ? {} : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    var year = date.getFullYear().toString().padStart(4, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: {
            display: 'inline-block',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            color: theme.defaultColor
        } },
        year,
        ".",
        month,
        ".",
        day));
};
var Content = function (_a) {
    var _b = _a.html, html = _b === void 0 ? '' : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var root = ref.current;
        if (root !== null) {
            var images = root.querySelectorAll('.PostImage');
            for (var i = 0; i < images.length; i++) {
                new Luminous(images[i], { sourceAttribute: 'src' });
            }
        }
    });
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            paddingBottom: '1rem',
            marginBottom: '0.5rem',
            borderBottom: "1px solid " + theme.darkColor,
            color: theme.defaultColor,
            '& h1': {
                fontSize: '1.5rem'
            },
            '& h2': {
                fontSize: '1.3rem'
            },
            '& h3': {
                fontSize: '1rem'
            },
            '& a': {
                cursor: 'pointer',
                color: theme.darkColor,
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            },
            '& table': {
                borderCollapse: 'collapse',
                border: "1px solid " + theme.darkColor,
                '& th, & td': {
                    padding: '0.5rem',
                    border: "1px solid " + theme.darkColor
                }
            },
            '& pre': {
                margin: '1.5rem 0'
            },
            '& .PostImage': {
                cursor: 'zoom-in',
                maxWidth: '100%',
                border: "1px solid " + theme.darkColor,
                '&:hover, &:active, &:focus': {
                    border: "1px solid " + theme.lightColor
                }
            },
            '& .PostYouTubeOuterContainer': {
                width: '100%',
                maxWidth: '560px'
            },
            '& .PostYouTubeInnerContainer': {
                position: 'relative',
                height: 0,
                paddingBottom: '56.25%'
            },
            '& .PostYouTube': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: "1px solid " + theme.darkColor,
                '&:hover, &:active, &:focus': {
                    border: "1px solid " + theme.lightColor
                }
            },
            '& .hljs': {
                border: "1px solid " + theme.darkColor,
                background: 'none'
            }
        }, ref: ref, dangerouslySetInnerHTML: { __html: html } }));
};
var CategoryButton = function (_a) {
    var _b = _a.category, category = _b === void 0 ? '' : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_5__.PathContext).basename;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            marginBottom: '1rem',
            color: theme.defaultColor
        } },
        "Category:\u00A0",
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { css: {
                cursor: 'pointer',
                padding: '0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }, title: category, onClick: function () {
                navigate(basename + "category/" + category.toLowerCase());
            } }, category)));
};
var Comments = /** @class */ (function (_super) {
    __extends(Comments, _super);
    function Comments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comments.prototype.componentDidCatch = function (error, errorInfo) {
        console.error(error === null || error === void 0 ? void 0 : error.toString());
        console.error(errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack);
    };
    Comments.prototype.render = function () {
        return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(disqus_react__WEBPACK_IMPORTED_MODULE_2__.DiscussionEmbed, { shortname: 'Avantgarde95', config: {
                url: "https://avantgarde95.github.io/blog/" + this.props.post.path,
                identifier: this.props.post.title,
                title: this.props.post.title
            } }));
    };
    return Comments;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component));
var PostPage = function (_a) {
    var _b = _a.post, post = _b === void 0 ? {} : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), html = _c[0], setHTML = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        post.load().then(function (result) {
            setHTML(result.html);
        })["catch"](function () {
            setHTML('Failed to load the post!');
        });
    }, [html, post]);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
                paddingBottom: '0.5rem',
                borderBottom: "1px solid " + theme.darkColor,
            } },
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, { title: post.title }),
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostDate, { date: post.date })),
        (html === null) ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Loading, null) : (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, { html: html }),
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(CategoryButton, { category: post.category }),
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comments, { post: post })));
};


/***/ }),

/***/ "./src/PreviewPage.tsx":
/*!*****************************!*\
  !*** ./src/PreviewPage.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewPage": function() { return /* binding */ PreviewPage; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faClock */ "./node_modules/@fortawesome/free-solid-svg-icons/faClock.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/Theme.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./src/Icon.tsx");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./src/Path.tsx");
/** @jsx jsx */







var TitleButton = function (_a) {
    var _b = _a.post, post = _b === void 0 ? {} : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_4__.PathContext).basename;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { css: {
            cursor: 'pointer',
            wordBreak: 'break-all',
            textAlign: 'left',
            padding: '0',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            fontFamily: 'inherit',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            border: 'none',
            color: theme.darkColor,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            '&:hover, &:active, &:focus': {
                color: theme.lightColor
            }
        }, title: post.title, onClick: function () {
            navigate(basename + "post/" + post.path);
        } }, post.title));
};
var PostDate = function (_a) {
    var _b = _a.date, date = _b === void 0 ? {} : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var year = date.getFullYear().toString().padStart(4, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: {
            display: 'inline-block',
            marginBottom: '0.5rem',
            fontSize: '1rem',
            color: theme.defaultColor
        } },
        year,
        ".",
        month,
        ".",
        day));
};
var loadingAnimation = (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    '0%': {
        opacity: 0
    },
    '50%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
var Loading = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            fontWeight: 'bold',
            color: theme.defaultColor
        } },
        "Loading...\u00A0",
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, { css: {
                animation: loadingAnimation + " 0.5s infinite"
            }, definition: _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_6__.faClock })));
};
function getTextFromHTML(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    return element.innerText;
}
function getAbbreviation(value, maxLength) {
    if (value.length <= maxLength) {
        return value;
    }
    else {
        return value.substr(0, maxLength) + '...';
    }
}
var Preview = function (_a) {
    var _b = _a.post, post = _b === void 0 ? {} : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), preview = _c[0], setPreview = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        post.load().then(function (result) {
            setPreview(getAbbreviation(getTextFromHTML(result.html), 100));
        })["catch"](function () {
            setPreview('Failed to load the post!');
        });
    }, [preview]);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            color: theme.defaultColor
        } }, (preview === null) ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Loading, null) : preview));
};
var CategoryButton = function (_a) {
    var _b = _a.category, category = _b === void 0 ? '' : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_4__.PathContext).basename;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            marginTop: '0.5rem',
            marginBottom: '1rem',
            color: theme.defaultColor
        } },
        "Category:\u00A0",
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { css: {
                cursor: 'pointer',
                padding: '0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }, title: category, onClick: function () {
                navigate(basename + "category/" + category.toLowerCase());
            } }, category)));
};
var PreviewPage = function (_a) {
    var _b = _a.posts, posts = _b === void 0 ? [] : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, (posts.length === 0)
        ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: { color: theme.defaultColor } }, "No posts!")
        : posts.map(function (post) { return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
                borderBottom: "1px solid " + theme.darkColor,
            } },
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(TitleButton, { post: post }),
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostDate, { date: post.date }),
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Preview, { post: post }),
            (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(CategoryButton, { category: post.category }))); })));
};


/***/ }),

/***/ "./src/RecentPostsWidget.tsx":
/*!***********************************!*\
  !*** ./src/RecentPostsWidget.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentPostsWidget": function() { return /* binding */ RecentPostsWidget; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/Theme.tsx");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./src/Path.tsx");
/** @jsx jsx */





var RecentPost = function (_a) {
    var _b = _a.post, post = _b === void 0 ? {} : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var basename = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Path__WEBPACK_IMPORTED_MODULE_3__.PathContext).basename;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
        "-\u00A0",
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { css: {
                cursor: 'pointer',
                padding: '0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                border: 'none',
                color: theme.darkColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                '&:hover, &:active, &:focus': {
                    color: theme.lightColor
                }
            }, title: post.title, onClick: function () {
                navigate(basename + "post/" + post.path);
            } }, post.title)));
};
var RecentPostsWidget = function (_a) {
    var _b = _a.posts, posts = _b === void 0 ? [] : _b;
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var sortedPosts = posts.slice(0);
    sortedPosts.sort(function (post1, post2) { return (-post1.date.getTime() + post2.date.getTime()); });
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            display: 'inline-block',
            marginRight: '1rem',
            marginBottom: '1rem',
            color: theme.defaultColor
        } },
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
                fontWeight: 'bold'
            } }, "Recent posts"),
        sortedPosts.slice(0, 3).map(function (post) { return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(RecentPost, { post: post }); })));
};


/***/ }),

/***/ "./src/SearchPage.tsx":
/*!****************************!*\
  !*** ./src/SearchPage.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": function() { return /* binding */ SearchPage; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faClock */ "./node_modules/@fortawesome/free-solid-svg-icons/faClock.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ "./src/Theme.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./src/Icon.tsx");
/* harmony import */ var _PreviewPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewPage */ "./src/PreviewPage.tsx");
/** @jsx jsx */







var loadingAnimation = (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    '0%': {
        opacity: 0
    },
    '50%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
var Searching = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: {
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: theme.defaultColor
        } },
        "Searching...\u00A0",
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, { css: {
                animation: loadingAnimation + " 0.5s infinite"
            }, definition: _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_5__.faClock })));
};
function processString(value) {
    return value.trim().toLowerCase();
}
var SearchPage = function (_a) {
    var _b = _a.posts, posts = _b === void 0 ? [] : _b;
    var query = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)().query;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), postsToPreview = _c[0], setPostsToPreview = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        Promise.all(posts.map(function (post) { return post.load(); })).then(function (results) {
            var matchingPosts = [];
            var processedQuery = processString(query);
            for (var i = 0; i < results.length; i++) {
                if (processString(posts[i].title).includes(processedQuery)
                    || processString(results[i].html).includes(processedQuery)) {
                    matchingPosts.push(posts[i]);
                }
            }
            setPostsToPreview(matchingPosts);
        });
    }, [postsToPreview]);
    return (postsToPreview === null) ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(Searching, null) : (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PreviewPage__WEBPACK_IMPORTED_MODULE_4__.PreviewPage, { posts: postsToPreview });
};


/***/ }),

/***/ "./src/Theme.tsx":
/*!***********************!*\
  !*** ./src/Theme.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": function() { return /* binding */ ThemeContext; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/** @jsx jsx */


var ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
var ThemeProvider = function (_a) {
    var _b = _a.defaultColor, defaultColor = _b === void 0 ? '#ffffff' : _b, _c = _a.lightColor, lightColor = _c === void 0 ? '#ffffff' : _c, _d = _a.darkColor, darkColor = _d === void 0 ? '#ffffff' : _d, _e = _a.children, children = _e === void 0 ? {} : _e;
    return ((0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeContext.Provider, { value: {
            defaultColor: defaultColor,
            lightColor: lightColor,
            darkColor: darkColor
        } }, children));
};


/***/ }),

/***/ "./src/Polyfill.js":
/*!*************************!*\
  !*** ./src/Polyfill.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith.

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
    };
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith.

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
        if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    };
}

// From https://github.com/behnammodi/polyfill.

if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes.

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"src_post_Christmas2020_md":"4cc930a7ffd3e93de24c","src_post_CustomMarkedRenderer_md":"928ff27ce2369946e515","src_post_MyGuitars_md":"44f23ab175c400dc89e3","src_post_MarkdownTest_md":"f2038b1ec26f2783de77","src_post_Welcome_md":"0098e9cc8d037a2765b4"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "dist/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/Main.tsx","vendors-node_modules_emotion_core_dist_core_browser_esm_js-node_modules_fortawesome_fontaweso-e342be"]
/******/ 		];
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSGlnaGxpZ2h0LmNzcz8xNDIyIiwid2VicGFjazovLy8uL3NyYy9MdW1pbm91cy5jc3M/YWQxZiIsIndlYnBhY2s6Ly8vLi9zcmMvQ2F0ZWdvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhdGVnb3J5V2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9QYXRoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9zdFBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlY2VudFBvc3RzV2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU2VhcmNoUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1RoZW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU0sYUFBYSxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXBFLGVBQWU7QUFFbUI7QUFDRDtBQUNZO0FBR1I7QUFDRjtBQUVuQyxJQUFNLGNBQWMsR0FBRyxVQUFDLEVBQTBDO1FBQXpDLGdCQUF5QixFQUF6QixRQUFRLG1CQUFHLEVBQWMsT0FBRSxpQkFBYSxFQUFiLFNBQVMsbUJBQUcsQ0FBQztJQUM3RCxJQUFNLEtBQUssR0FBRyxpREFBVSxDQUFDLGdEQUFZLENBQUMsQ0FBQztJQUNoQyxZQUFRLEdBQUksaURBQVUsQ0FBQyw4Q0FBVyxDQUFDLFNBQTNCLENBQTRCO0lBQzNDLElBQU0sUUFBUSxHQUFHLDZEQUFXLEVBQUUsQ0FBQztJQUUvQixPQUFPLENBQ0g7O1FBRUksK0RBQ0ksR0FBRyxFQUFFO2dCQUNELE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDdEIsZUFBZSxFQUFFLGtCQUFrQjtnQkFDbkMsNEJB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrREFBa0Q7V0FDbEQ7V0FDQSxFOzs7O1VDOUhBO1VBQ0EiLCJmaWxlIjoibWFpbi5iNTkxN2M1NjI2NzdhY2RhOWNiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBhbGxDYXRlZ29yaWVzID0gWydDb21wdXRlcicsICdNdXNpYycsICdNaXNjJ10gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgdHlwZSBDYXRlZ29yeSA9ICh0eXBlb2YgYWxsQ2F0ZWdvcmllcylbbnVtYmVyXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcblxyXG5pbXBvcnQge2pzeH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZU5hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtQb3N0fSBmcm9tICcuL1Bvc3QnO1xyXG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tICcuL0NhdGVnb3J5JztcclxuaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gJy4vVGhlbWUnO1xyXG5pbXBvcnQge1BhdGhDb250ZXh0fSBmcm9tICcuL1BhdGgnO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlCdXR0b24gPSAoe2NhdGVnb3J5ID0ge30gYXMgQ2F0ZWdvcnksIHBvc3RDb3VudCA9IDB9KSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGNvbnN0IHtiYXNlbmFtZX0gPSB1c2VDb250ZXh0KFBhdGhDb250ZXh0KTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIC0mbmJzcDtcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5kYXJrQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7YmFzZW5hbWV9Y2F0ZWdvcnkvJHtjYXRlZ29yeX1gKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICZuYnNwOyh7cG9zdENvdW50fSlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlXaWRnZXQgPSAoe2NhdGVnb3JpZXMgPSBbXSBhcyByZWFkb25seSBDYXRlZ29yeVtdLCBwb3N0cyA9IFtdIGFzIFBvc3RbXX0pID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMXJlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBwb3N0Q291bnQ9e3Bvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5KS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5cclxuaW1wb3J0IHtqc3h9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQge0ZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZU5hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtmYVNlYXJjaH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2VhcmNoJztcclxuaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gJy4vVGhlbWUnO1xyXG5pbXBvcnQge0ljb259IGZyb20gJy4vSWNvbic7XHJcbmltcG9ydCB7UGF0aENvbnRleHR9IGZyb20gJy4vUGF0aCc7XHJcblxyXG5jb25zdCBUaXRsZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gICAgY29uc3Qge2Jhc2VuYW1lfSA9IHVzZUNvbnRleHQoUGF0aENvbnRleHQpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS44cmVtJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUuZGFya0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICAnJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmxpZ2h0Q29sb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGl0bGU9eydIb21lJ31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGUoYmFzZW5hbWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgSHVubWluIFBhcmsgKEF2YW50Z2FyZGU5NSlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGNvbnN0IHtiYXNlbmFtZX0gPSB1c2VDb250ZXh0KFBhdGhDb250ZXh0KTtcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5kZWZhdWx0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYHNvbGlkIDFweCAke3RoZW1lLmRhcmtDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgICAgICAgICAnJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYHNvbGlkIDFweCAke3RoZW1lLmxpZ2h0Q29sb3J9YCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2gnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAke2Jhc2VuYW1lfXNlYXJjaC8ke3F1ZXJ5fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5kYXJrQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17YFNlYXJjaCAke3F1ZXJ5fWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7YmFzZW5hbWV9c2VhcmNoLyR7cXVlcnl9YCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBkZWZpbml0aW9uPXtmYVNlYXJjaH0vPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHNpdGVzID0gW1xyXG4gICAge25hbWU6ICdIb21lcGFnZScsIHVybDogJ2h0dHBzOi8vYXZhbnRnYXJkZTk1LmdpdGh1Yi5pby8nfSxcclxuICAgIHtuYW1lOiAnQ29kZScsIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BdmFudGdhcmRlOTUvYmxvZyd9XHJcbl07XHJcblxyXG5jb25zdCBTaXRlTGlua3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7c2l0ZXMubWFwKCh7bmFtZSwgdXJsfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmRhcmtDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmxpZ2h0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD17J19ibGFuayd9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPXsnbm9vcGVuZXIgbm9yZWZlcnJlcid9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICBjb25zdCBvbldpZGVTY3JlZW4gPSAnQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNzcz17e1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBbb25XaWRlU2NyZWVuXToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBbb25XaWRlU2NyZWVuXToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxcmVtJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxTaXRlTGlua3MvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5cclxuaW1wb3J0IHtqc3h9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQge2ljb24sIEljb25EZWZpbml0aW9ufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb24gPSAoXHJcbiAgICB7XHJcbiAgICAgICAgZGVmaW5pdGlvbiA9IHt9IGFzIEljb25EZWZpbml0aW9uLFxyXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnXHJcbiAgICB9XHJcbikgPT4ge1xyXG4gICAgY29uc3QgYWJzdHJhY3QgPSBpY29uKGRlZmluaXRpb24pLmFic3RyYWN0WzBdO1xyXG4gICAgY29uc3Qgc3ZnQXR0cmlidXRlcyA9IGFic3RyYWN0LmF0dHJpYnV0ZXM7XHJcbiAgICBjb25zdCBwYXRoQXR0cmlidXRlcyA9IGFic3RyYWN0LmNoaWxkcmVuISFbMF0uYXR0cmlidXRlcztcclxuXHJcbiAgICBzdmdBdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzTmFtZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgey4uLnN2Z0F0dHJpYnV0ZXN9PlxyXG4gICAgICAgICAgICA8cGF0aCB7Li4ucGF0aEF0dHJpYnV0ZXN9Lz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5cclxuaW1wb3J0ICcuL1BvbHlmaWxsJztcclxuXHJcbmltcG9ydCB7anN4fSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IHtDb21wb25lbnQsIEVycm9ySW5mbywgUmVhY3ROb2RlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIHVzZVJvdXRlc30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCB7UG9zdFBhZ2V9IGZyb20gJy4vUG9zdFBhZ2UnO1xyXG5pbXBvcnQge1RoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlcn0gZnJvbSAnLi9UaGVtZSc7XHJcbmltcG9ydCB7YWxsUG9zdHMsIFBvc3R9IGZyb20gJy4vUG9zdCc7XHJcbmltcG9ydCB7YWxsQ2F0ZWdvcmllcywgQ2F0ZWdvcnl9IGZyb20gJy4vQ2F0ZWdvcnknO1xyXG5pbXBvcnQge1ByZXZpZXdQYWdlfSBmcm9tICcuL1ByZXZpZXdQYWdlJztcclxuaW1wb3J0IHtDYXRlZ29yeVdpZGdldH0gZnJvbSAnLi9DYXRlZ29yeVdpZGdldCc7XHJcbmltcG9ydCB7U2VhcmNoUGFnZX0gZnJvbSAnLi9TZWFyY2hQYWdlJztcclxuaW1wb3J0IHtQYXRoQ29udGV4dCwgUGF0aFByb3ZpZGVyfSBmcm9tICcuL1BhdGgnO1xyXG5pbXBvcnQge1JlY2VudFBvc3RzV2lkZ2V0fSBmcm9tICcuL1JlY2VudFBvc3RzV2lkZ2V0JztcclxuXHJcbmltcG9ydCAnLi9MdW1pbm91cyc7XHJcbmltcG9ydCAnLi9IaWdobGlnaHQnO1xyXG5cclxuY29uc3QgTm90Rm91bmRQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICByZXR1cm4gPGRpdiBjc3M9e3tjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yfX0+V3JvbmcgVVJMITwvZGl2PjtcclxufTtcclxuXHJcbmNsYXNzIEVycm9ySGFuZGxlciBleHRlbmRzIENvbXBvbmVudDx7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSwgeyBoYXNFcnJvcjogYm9vbGVhbiB9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7Y2hpbGRyZW4gPSB7fX0pIHtcclxuICAgICAgICBzdXBlcih7Y2hpbGRyZW59KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge2hhc0Vycm9yOiBmYWxzZX07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IEVycm9ySW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3I/LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JJbmZvPy5jb21wb25lbnRTdGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBTYWZlUm91dGVzID0gKFxyXG4gICAge2Jhc2VuYW1lID0gJy8nLCByb3V0ZXMgPSBbXSBhcyB7IHBhdGg6IHN0cmluZywgZWxlbWVudDogUmVhY3ROb2RlIH1bXX1cclxuKSA9PiB1c2VSb3V0ZXMocm91dGVzLm1hcCgoe3BhdGgsIGVsZW1lbnR9LCBpbmRleCkgPT4gKFxyXG4gICAge3BhdGg6IHBhdGgsIGVsZW1lbnQ6IDxFcnJvckhhbmRsZXIga2V5PXtpbmRleH0+e2VsZW1lbnR9PC9FcnJvckhhbmRsZXI+fVxyXG4pKSwgYmFzZW5hbWUpO1xyXG5cclxuY29uc3QgQXBwUm91dGVzID0gKHtwb3N0cyA9IFtdIGFzIFBvc3RbXSwgY2F0ZWdvcmllcyA9IFtdIGFzIHJlYWRvbmx5IENhdGVnb3J5W119KSA9PiB7XHJcbiAgICBjb25zdCB7YmFzZW5hbWV9ID0gdXNlQ29udGV4dChQYXRoQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIDxTYWZlUm91dGVzXHJcbiAgICAgICAgYmFzZW5hbWU9e2Jhc2VuYW1lfVxyXG4gICAgICAgIHJvdXRlcz17W1xyXG4gICAgICAgICAgICB7cGF0aDogJy8nLCBlbGVtZW50OiA8UHJldmlld1BhZ2UgcG9zdHM9e3Bvc3RzfS8+fSxcclxuICAgICAgICAgICAgLi4ucG9zdHMubWFwKHBvc3QgPT4gKHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IGBwb3N0LyR7cG9zdC5wYXRofWAsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiA8UG9zdFBhZ2UgcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIC4uLmNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+ICh7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBgY2F0ZWdvcnkvJHtjYXRlZ29yeS50b0xvd2VyQ2FzZSgpfWAsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiA8UHJldmlld1BhZ2UgcG9zdHM9e3Bvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuY2F0ZWdvcnkgPT09IGNhdGVnb3J5KX0vPlxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHtwYXRoOiAnc2VhcmNoLzpxdWVyeScsIGVsZW1lbnQ6IDxTZWFyY2hQYWdlIHBvc3RzPXtwb3N0c30vPn0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnKicsIGVsZW1lbnQ6IDxOb3RGb3VuZFBhZ2UvPn1cclxuICAgICAgICBdfVxyXG4gICAgLz47XHJcbn1cclxuXHJcbmNvbnN0IEFwcEFyZWEgPSAoe2NoaWxkcmVuID0ge30gYXMgUmVhY3ROb2RlfSkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICBjb25zdCBvbldpZGVTY3JlZW4gPSAnQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNzcz17e1xyXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcclxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBbb25XaWRlU2NyZWVuXToge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzEuNXJlbSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17e1xyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzc2OXB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMS41cmVtJyxcclxuICAgICAgICAgICAgICAgIFtvbldpZGVTY3JlZW5dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFya0NvbG9yfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IChcclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgIDxQYXRoUHJvdmlkZXIgYmFzZW5hbWU9e2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uZ2V0QXR0cmlidXRlKCdocmVmJykhfT5cclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xvcj17JyNmZmZmZmYnfVxyXG4gICAgICAgICAgICAgICAgbGlnaHRDb2xvcj17JyMwMGY2ZmYnfVxyXG4gICAgICAgICAgICAgICAgZGFya0NvbG9yPXsnIzAwZDNkYyd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBcHBBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeVdpZGdldCBjYXRlZ29yaWVzPXthbGxDYXRlZ29yaWVzfSBwb3N0cz17YWxsUG9zdHN9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8UmVjZW50UG9zdHNXaWRnZXQgcG9zdHM9e2FsbFBvc3RzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFJvdXRlcyBwb3N0cz17YWxsUG9zdHN9IGNhdGVnb3JpZXM9e2FsbENhdGVnb3JpZXN9Lz5cclxuICAgICAgICAgICAgICAgIDwvQXBwQXJlYT5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvUGF0aFByb3ZpZGVyPlxyXG4gICAgPC9Ccm93c2VyUm91dGVyPlxyXG4pO1xyXG5cclxuY29uc3QgdGVtcG9yYXJ5RWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdUZW1wb3JhcnknKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgdGVtcG9yYXJ5RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRlbXBvcmFyeUVsZW1lbnRzW2ldPy5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlFbGVtZW50c1tpXSk7XHJcbn1cclxuXHJcbnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmJvZHkpO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuXHJcbmltcG9ydCB7anN4fSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IHtjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQYXRoU2V0dGluZ3Mge1xyXG4gICAgYmFzZW5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQYXRoU2V0dGluZ3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhQcm92aWRlciA9ICh7YmFzZW5hbWUgPSAnLycsIGNoaWxkcmVuID0ge30gYXMgUmVhY3ROb2RlfSkgPT4gKFxyXG4gICAgPFBhdGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgYmFzZW5hbWU6IGJhc2VuYW1lXHJcbiAgICB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BhdGhDb250ZXh0LlByb3ZpZGVyPlxyXG4pO1xyXG4iLCJpbXBvcnQge0NhdGVnb3J5fSBmcm9tICcuL0NhdGVnb3J5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9zdCB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGNhdGVnb3J5OiBDYXRlZ29yeTtcclxuICAgIGxvYWQ6ICgpID0+IFByb21pc2U8eyBodG1sOiBzdHJpbmcgfT47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhbGxQb3N0czogUG9zdFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdjaHJpc3RtYXMyMDIwJyxcclxuICAgICAgICB0aXRsZTogJ01lcnJ5IENocmlzdG1hcyEnLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCcyMDIwLTEyLTI5JyksXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdDb21wdXRlcicsXHJcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KCcuL3Bvc3QvQ2hyaXN0bWFzMjAyMC5tZCcpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdjdXN0b21tYXJrZWRyZW5kZXJlcicsXHJcbiAgICAgICAgdGl0bGU6ICdDdXN0b21pemUgbWFya2VkLmpzIHJlbmRlcmVyJyxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgnMjAyMC0xMC0xMScpLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnQ29tcHV0ZXInLFxyXG4gICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgnLi9wb3N0L0N1c3RvbU1hcmtlZFJlbmRlcmVyLm1kJylcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ215Z3VpdGFycycsXHJcbiAgICAgICAgdGl0bGU6ICdNeSBndWl0YXJzJyxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgnMjAyMC0xMC0xMScpLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnTXVzaWMnLFxyXG4gICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgnLi9wb3N0L015R3VpdGFycy5tZCcpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXJrZG93bnRlc3QnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFya2Rvd24gdGVzdCcsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoJzIwMjAtMTAtMDMnKSxcclxuICAgICAgICBjYXRlZ29yeTogJ0NvbXB1dGVyJyxcclxuICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoJy4vcG9zdC9NYXJrZG93blRlc3QubWQnKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnd2VsY29tZScsXHJcbiAgICAgICAgdGl0bGU6ICdXZWxjb21lJyxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgnMjAyMC0wOS0yMScpLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnTWlzYycsXHJcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KCcuL3Bvc3QvV2VsY29tZS5tZCcpXHJcbiAgICB9XHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5cclxuaW1wb3J0IHtqc3gsIGtleWZyYW1lc30gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBjcmVhdGVSZWYsIEVycm9ySW5mbywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZU5hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtEaXNjdXNzaW9uRW1iZWR9IGZyb20gJ2Rpc3F1cy1yZWFjdCc7XHJcbmltcG9ydCB7ZmFDbG9ja30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2xvY2snO1xyXG5pbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSAnLi9UaGVtZSc7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSAnLi9JY29uJztcclxuaW1wb3J0IHtQb3N0fSBmcm9tICcuL1Bvc3QnO1xyXG5pbXBvcnQge1BhdGhDb250ZXh0fSBmcm9tICcuL1BhdGgnO1xyXG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tICcuL0NhdGVnb3J5JztcclxuXHJcbmNvbnN0IEx1bWlub3VzID0gcmVxdWlyZSgnbHVtaW5vdXMtbGlnaHRib3gnKS5MdW1pbm91cztcclxuXHJcbmNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSBrZXlmcmFtZXMoe1xyXG4gICAgJzAlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sXHJcbiAgICAnNTAlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0sXHJcbiAgICAnMTAwJSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3tcclxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzFyZW0nLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFya0NvbG9yfWAsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMS4zcmVtJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIExvYWRpbmcuLi4mbmJzcDtcclxuICAgICAgICAgICAgPEljb24gY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGAke2xvYWRpbmdBbmltYXRpb259IDAuNXMgaW5maW5pdGVgXHJcbiAgICAgICAgICAgIH19IGRlZmluaXRpb249e2ZhQ2xvY2t9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBUaXRsZSA9ICh7dGl0bGUgPSAnJ30pID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY3NzPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICB3b3JkQnJlYWs6ICdicmVhay1hbGwnLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzAuNXJlbScsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5kZWZhdWx0Q29sb3IsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMS44cmVtJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBQb3N0RGF0ZSA9ICh7ZGF0ZSA9IHt9IGFzIERhdGV9KSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5wYWRTdGFydCg0LCAnMCcpO1xyXG4gICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY3NzPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHt5ZWFyfS57bW9udGh9LntkYXl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoe2h0bWwgPSAnJ30pID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gICAgY29uc3QgcmVmID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHJlZi5jdXJyZW50O1xyXG5cclxuICAgICAgICBpZiAocm9vdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZXMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Qb3N0SW1hZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgTHVtaW5vdXMoaW1hZ2VzW2ldLCB7c291cmNlQXR0cmlidXRlOiAnc3JjJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMC41cmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLmRhcmtDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmRlZmF1bHRDb2xvcixcclxuICAgICAgICAgICAgICAgICcmIGgxJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS41cmVtJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICcmIGgyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4zcmVtJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICcmIGgzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnJiBhJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5kYXJrQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnJiB0YWJsZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5kYXJrQ29sb3J9YCxcclxuICAgICAgICAgICAgICAgICAgICAnJiB0aCwgJiB0ZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAuNXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmRhcmtDb2xvcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICcmIHByZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxLjVyZW0gMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnJiAuUG9zdEltYWdlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3pvb20taW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFya0NvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5saWdodENvbG9yfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJyYgLlBvc3RZb3VUdWJlT3V0ZXJDb250YWluZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzU2MHB4J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICcmIC5Qb3N0WW91VHViZUlubmVyQ29udGFpbmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnNTYuMjUlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICcmIC5Qb3N0WW91VHViZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmRhcmtDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICcmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1cyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUubGlnaHRDb2xvcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICcmIC5obGpzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmRhcmtDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWx9fVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlCdXR0b24gPSAoe2NhdGVnb3J5ID0gJycgYXMgQ2F0ZWdvcnl9KSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGNvbnN0IHtiYXNlbmFtZX0gPSB1c2VDb250ZXh0KFBhdGhDb250ZXh0KTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY3NzPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIENhdGVnb3J5OiZuYnNwO1xyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmRhcmtDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgICAgICAgICAgICAgICAnJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5saWdodENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShgJHtiYXNlbmFtZX1jYXRlZ29yeS8ke2NhdGVnb3J5LnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNsYXNzIENvbW1lbnRzIGV4dGVuZHMgQ29tcG9uZW50PHsgcG9zdDogUG9zdCB9PiB7XHJcbiAgICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogRXJyb3JJbmZvKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcj8udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvckluZm8/LmNvbXBvbmVudFN0YWNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPERpc2N1c3Npb25FbWJlZCBzaG9ydG5hbWU9eydBdmFudGdhcmRlOTUnfSBjb25maWc9e3tcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vYXZhbnRnYXJkZTk1LmdpdGh1Yi5pby9ibG9nLyR7dGhpcy5wcm9wcy5wb3N0LnBhdGh9YCxcclxuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IHRoaXMucHJvcHMucG9zdC50aXRsZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnBvc3QudGl0bGVcclxuICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0UGFnZSA9ICh7cG9zdCA9IHt9IGFzIFBvc3R9KSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGNvbnN0IFtodG1sLCBzZXRIVE1MXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcG9zdC5sb2FkKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBzZXRIVE1MKHJlc3VsdC5odG1sKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEhUTUwoJ0ZhaWxlZCB0byBsb2FkIHRoZSBwb3N0IScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2h0bWwsIHBvc3RdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnMC41cmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLmRhcmtDb2xvcn1gLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSB0aXRsZT17cG9zdC50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgPFBvc3REYXRlIGRhdGU9e3Bvc3QuZGF0ZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyhodG1sID09PSBudWxsKSA/IDxMb2FkaW5nLz4gOiA8Q29udGVudCBodG1sPXtodG1sfS8+fVxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gY2F0ZWdvcnk9e3Bvc3QuY2F0ZWdvcnl9Lz5cclxuICAgICAgICAgICAgPENvbW1lbnRzIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5cclxuaW1wb3J0IHtqc3gsIGtleWZyYW1lc30gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZU5hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtmYUNsb2NrfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDbG9jayc7XHJcbmltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tICcuL1RoZW1lJztcclxuaW1wb3J0IHtQb3N0fSBmcm9tICcuL1Bvc3QnO1xyXG5pbXBvcnQge0ljb259IGZyb20gJy4vSWNvbic7XHJcbmltcG9ydCB7UGF0aENvbnRleHR9IGZyb20gJy4vUGF0aCc7XHJcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gJy4vQ2F0ZWdvcnknO1xyXG5cclxuY29uc3QgVGl0bGVCdXR0b24gPSAoe3Bvc3QgPSB7fSBhcyBQb3N0fSkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICBjb25zdCB7YmFzZW5hbWV9ID0gdXNlQ29udGV4dChQYXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3b3JkQnJlYWs6ICdicmVhay1hbGwnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjhyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUuZGFya0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICAnJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmxpZ2h0Q29sb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAke2Jhc2VuYW1lfXBvc3QvJHtwb3N0LnBhdGh9YCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBQb3N0RGF0ZSA9ICh7ZGF0ZSA9IHt9IGFzIERhdGV9KSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5wYWRTdGFydCg0LCAnMCcpO1xyXG4gICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY3NzPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHt5ZWFyfS57bW9udGh9LntkYXl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSBrZXlmcmFtZXMoe1xyXG4gICAgJzAlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sXHJcbiAgICAnNTAlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0sXHJcbiAgICAnMTAwJSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIExvYWRpbmcuLi4mbmJzcDtcclxuICAgICAgICAgICAgPEljb24gY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGAke2xvYWRpbmdBbmltYXRpb259IDAuNXMgaW5maW5pdGVgXHJcbiAgICAgICAgICAgIH19IGRlZmluaXRpb249e2ZhQ2xvY2t9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRUZXh0RnJvbUhUTUwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICByZXR1cm4gZWxlbWVudC5pbm5lclRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFiYnJldmlhdGlvbih2YWx1ZTogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHIoMCwgbWF4TGVuZ3RoKSArICcuLi4nO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBQcmV2aWV3ID0gKHtwb3N0ID0ge30gYXMgUG9zdH0pID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gICAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwb3N0LmxvYWQoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHNldFByZXZpZXcoZ2V0QWJicmV2aWF0aW9uKGdldFRleHRGcm9tSFRNTChyZXN1bHQuaHRtbCksIDEwMCkpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJldmlldygnRmFpbGVkIHRvIGxvYWQgdGhlIHBvc3QhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcHJldmlld10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3tcclxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmRlZmF1bHRDb2xvclxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7KHByZXZpZXcgPT09IG51bGwpID8gPExvYWRpbmcvPiA6IHByZXZpZXd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlCdXR0b24gPSAoe2NhdGVnb3J5ID0gJycgYXMgQ2F0ZWdvcnl9KSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGNvbnN0IHtiYXNlbmFtZX0gPSB1c2VDb250ZXh0KFBhdGhDb250ZXh0KTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY3NzPXt7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzAuNXJlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIENhdGVnb3J5OiZuYnNwO1xyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5kYXJrQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7YmFzZW5hbWV9Y2F0ZWdvcnkvJHtjYXRlZ29yeS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJldmlld1BhZ2UgPSAoe3Bvc3RzID0gW10gYXMgUG9zdFtdfSkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAocG9zdHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgID8gPHNwYW4gY3NzPXt7Y29sb3I6IHRoZW1lLmRlZmF1bHRDb2xvcn19Pk5vIHBvc3RzITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA6IHBvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcwLjVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMS41cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLmRhcmtDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZUJ1dHRvbiBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdERhdGUgZGF0ZT17cG9zdC5kYXRlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJldmlldyBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gY2F0ZWdvcnk9e3Bvc3QuY2F0ZWdvcnl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcblxyXG5pbXBvcnQge2pzeH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZU5hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtQb3N0fSBmcm9tICcuL1Bvc3QnO1xyXG5pbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSAnLi9UaGVtZSc7XHJcbmltcG9ydCB7UGF0aENvbnRleHR9IGZyb20gJy4vUGF0aCc7XHJcblxyXG5jb25zdCBSZWNlbnRQb3N0ID0gKHtwb3N0ID0ge30gYXMgUG9zdH0pID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gICAgY29uc3Qge2Jhc2VuYW1lfSA9IHVzZUNvbnRleHQoUGF0aENvbnRleHQpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgLSZuYnNwO1xyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjc3M9e3tcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmRhcmtDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgICAgICAgICAgICAgICAnJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5saWdodENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAke2Jhc2VuYW1lfXBvc3QvJHtwb3N0LnBhdGh9YCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlY2VudFBvc3RzV2lkZ2V0ID0gKHtwb3N0cyA9IFtdIGFzIFBvc3RbXX0pID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gICAgY29uc3Qgc29ydGVkUG9zdHMgPSBwb3N0cy5zbGljZSgwKTtcclxuXHJcbiAgICBzb3J0ZWRQb3N0cy5zb3J0KChwb3N0MSwgcG9zdDIpID0+ICgtcG9zdDEuZGF0ZS5nZXRUaW1lKCkgKyBwb3N0Mi5kYXRlLmdldFRpbWUoKSkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMXJlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBSZWNlbnQgcG9zdHNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzb3J0ZWRQb3N0cy5zbGljZSgwLCAzKS5tYXAocG9zdCA9PiA8UmVjZW50UG9zdCBwb3N0PXtwb3N0fS8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5cclxuaW1wb3J0IHtqc3gsIGtleWZyYW1lc30gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7ZmFDbG9ja30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2xvY2snO1xyXG5pbXBvcnQge1Bvc3R9IGZyb20gJy4vUG9zdCc7XHJcbmltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tICcuL1RoZW1lJztcclxuaW1wb3J0IHtJY29ufSBmcm9tICcuL0ljb24nO1xyXG5pbXBvcnQge1ByZXZpZXdQYWdlfSBmcm9tICcuL1ByZXZpZXdQYWdlJztcclxuXHJcbmNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSBrZXlmcmFtZXMoe1xyXG4gICAgJzAlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sXHJcbiAgICAnNTAlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0sXHJcbiAgICAnMTAwJSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgU2VhcmNoaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNzcz17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzEuM3JlbScsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmRlZmF1bHRDb2xvclxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICBTZWFyY2hpbmcuLi4mbmJzcDtcclxuICAgICAgICAgICAgPEljb24gY3NzPXt7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGAke2xvYWRpbmdBbmltYXRpb259IDAuNXMgaW5maW5pdGVgXHJcbiAgICAgICAgICAgIH19IGRlZmluaXRpb249e2ZhQ2xvY2t9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzU3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaFBhZ2UgPSAoe3Bvc3RzID0gW10gYXMgUG9zdFtdfSkgPT4ge1xyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW3Bvc3RzVG9QcmV2aWV3LCBzZXRQb3N0c1RvUHJldmlld10gPSB1c2VTdGF0ZTxQb3N0W10gfCBudWxsPihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFByb21pc2UuYWxsKHBvc3RzLm1hcChwb3N0ID0+IHBvc3QubG9hZCgpKSkudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdQb3N0cyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRRdWVyeSA9IHByb2Nlc3NTdHJpbmcocXVlcnkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1N0cmluZyhwb3N0c1tpXS50aXRsZSkuaW5jbHVkZXMocHJvY2Vzc2VkUXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgcHJvY2Vzc1N0cmluZyhyZXN1bHRzW2ldLmh0bWwpLmluY2x1ZGVzKHByb2Nlc3NlZFF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdQb3N0cy5wdXNoKHBvc3RzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0UG9zdHNUb1ByZXZpZXcobWF0Y2hpbmdQb3N0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbcG9zdHNUb1ByZXZpZXddKTtcclxuXHJcbiAgICByZXR1cm4gKHBvc3RzVG9QcmV2aWV3ID09PSBudWxsKSA/IDxTZWFyY2hpbmcvPiA6IDxQcmV2aWV3UGFnZSBwb3N0cz17cG9zdHNUb1ByZXZpZXd9Lz47XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5cclxuaW1wb3J0IHtqc3h9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQge2NyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVtZSB7XHJcbiAgICBkZWZhdWx0Q29sb3I6IHN0cmluZztcclxuICAgIGxpZ2h0Q29sb3I6IHN0cmluZztcclxuICAgIGRhcmtDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBUaGVtZSk7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9IChcclxuICAgIHtcclxuICAgICAgICBkZWZhdWx0Q29sb3IgPSAnI2ZmZmZmZicsXHJcbiAgICAgICAgbGlnaHRDb2xvciA9ICcjZmZmZmZmJyxcclxuICAgICAgICBkYXJrQ29sb3IgPSAnI2ZmZmZmZicsXHJcbiAgICAgICAgY2hpbGRyZW4gPSB7fSBhcyBSZWFjdE5vZGVcclxuICAgIH1cclxuKSA9PiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgZGVmYXVsdENvbG9yOiBkZWZhdWx0Q29sb3IsXHJcbiAgICAgICAgbGlnaHRDb2xvcjogbGlnaHRDb2xvcixcclxuICAgICAgICBkYXJrQ29sb3I6IGRhcmtDb2xvclxyXG4gICAgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbik7XHJcbiIsInJlcXVpcmUoJ3Byb21pc2UtcG9seWZpbGwvc3JjL3BvbHlmaWxsJyk7XHJcblxyXG4vLyBGcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9zdGFydHNXaXRoLlxyXG5cclxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcclxuICAgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzZWFyY2gsIHJhd1Bvcykge1xyXG4gICAgICAgIHZhciBwb3MgPSByYXdQb3MgPiAwID8gcmF3UG9zIHwgMCA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vic3RyaW5nKHBvcywgcG9zICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIEZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2VuZHNXaXRoLlxyXG5cclxuaWYgKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSB7XHJcbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24gKHNlYXJjaCwgdGhpc19sZW4pIHtcclxuICAgICAgICBpZiAodGhpc19sZW4gPT09IHVuZGVmaW5lZCB8fCB0aGlzX2xlbiA+IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXNfbGVuID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN1YnN0cmluZyh0aGlzX2xlbiAtIHNlYXJjaC5sZW5ndGgsIHRoaXNfbGVuKSA9PT0gc2VhcmNoO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vYmVobmFtbW9kaS9wb2x5ZmlsbC5cclxuXHJcbmlmICghU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCkge1xyXG4gICAgU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCA9IGZ1bmN0aW9uIHBhZFN0YXJ0KHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKSB7XHJcbiAgICAgICAgdGFyZ2V0TGVuZ3RoID0gdGFyZ2V0TGVuZ3RoID4+IDA7IC8vZmxvb3IgaWYgbnVtYmVyIG9yIGNvbnZlcnQgbm9uLW51bWJlciB0byAwO1xyXG4gICAgICAgIHBhZFN0cmluZyA9IFN0cmluZyh0eXBlb2YgcGFkU3RyaW5nICE9PSAndW5kZWZpbmVkJyA/IHBhZFN0cmluZyA6ICcgJyk7XHJcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gdGFyZ2V0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVuZ3RoID0gdGFyZ2V0TGVuZ3RoIC0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRMZW5ndGggPiBwYWRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRTdHJpbmcgKz0gcGFkU3RyaW5nLnJlcGVhdCh0YXJnZXRMZW5ndGggLyBwYWRTdHJpbmcubGVuZ3RoKTsgLy9hcHBlbmQgdG8gb3JpZ2luYWwgdG8gZW5zdXJlIHdlIGFyZSBsb25nZXIgdGhhbiBuZWVkZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFkU3RyaW5nLnNsaWNlKDAsIHRhcmdldExlbmd0aCkgKyBTdHJpbmcodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gRnJvbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvaW5jbHVkZXMuXHJcblxyXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMpIHtcclxuICAgIFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiAoc2VhcmNoLCBzdGFydCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgUmVnRXhwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzZWFyY2gsIHN0YXJ0KSAhPT0gLTE7XHJcbiAgICB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gZnVuY3Rpb24oKSB7fVxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7IH0gOiBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iai5fX3Byb3RvX187IH07XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkgeyBkZWZba2V5XSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdmFsdWVba2V5XTsgfTsgfSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoZnVuY3Rpb24ocHJvbWlzZXMsIGtleSkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfcG9zdF9DaHJpc3RtYXMyMDIwX21kXCI6XCI0Y2M5MzBhN2ZmZDNlOTNkZTI0Y1wiLFwic3JjX3Bvc3RfQ3VzdG9tTWFya2VkUmVuZGVyZXJfbWRcIjpcIjkyOGZmMjdjZTIzNjk5NDZlNTE1XCIsXCJzcmNfcG9zdF9NeUd1aXRhcnNfbWRcIjpcIjQ0ZjIzYWIxNzVjNDAwZGM4OWUzXCIsXCJzcmNfcG9zdF9NYXJrZG93blRlc3RfbWRcIjpcImYyMDM4YjFlYzI2ZjI3ODNkZTc3XCIsXCJzcmNfcG9zdF9XZWxjb21lX21kXCI6XCIwMDk4ZTljYzhkMDM3YTI3NjViNFwifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSBmdW5jdGlvbihjaHVua0lkKSB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5jc3NcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbi8vIGRhdGEtd2VicGFjayBpcyBub3QgdXNlZCBhcyBidWlsZCBoYXMgbm8gdW5pcXVlTmFtZVxuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSBmdW5jdGlvbih1cmwsIGRvbmUsIGtleSkge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbihwcmV2LCBldmVudCkge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goZnVuY3Rpb24oZm4pIHsgcmV0dXJuIGZuKGV2ZW50KTsgfSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL01haW4udHN4XCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19lbW90aW9uX2NvcmVfZGlzdF9jb3JlX2Jyb3dzZXJfZXNtX2pzLW5vZGVfbW9kdWxlc19mb3J0YXdlc29tZV9mb250YXdlc28tZTM0MmJlXCJdXG5dO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSBmdW5jdGlvbihjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbM107XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpO1xuXG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gZnVuY3Rpb24oKSB7fTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxudmFyIHN0YXJ0dXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBmdW5jdGlvbigpIHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoZnVuY3Rpb24oKSB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9