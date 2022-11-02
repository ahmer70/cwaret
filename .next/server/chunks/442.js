exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 2951:
/***/ ((module) => {

// Exports
module.exports = {
	"services": "Card_services__KOSXi",
	"serviceHead": "Card_serviceHead__WVApJ",
	"cardRow": "Card_cardRow__KJr3m",
	"cardRow1": "Card_cardRow1__dS5DR",
	"cardCol": "Card_cardCol__2AJIg"
};


/***/ }),

/***/ 5442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2951);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2395);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__]);
react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// import "./animations.css";
const Clients = ({ about  })=>{
    let arr = [
        {
            name: "Waleed Dental",
            image: "/image/waleed-dental-logo.jpg"
        },
        {
            name: "Kirr",
            image: "/image/kirr-logo.png"
        },
        {
            name: "Rastgar Engineering",
            image: "/image/rastagar-logo.png"
        },
        {
            name: "Rastgar Air Compressor",
            image: "/image/rastagar-ac-logo.png"
        },
        {
            name: "Extra",
            image: "/image/extraa-logo.svg"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().services)} mx-auto mb-5 container-md `,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().serviceHead)} mx-auto text-center`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Our Clients "
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `row m-0 mx-auto text-center  ${about ? "rounded shadow  bg-white py-4  px-2 mt-3 " : "pt-4"}  `,
                style: {},
                children: arr.map((e, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__.Rotate, {
                        cascade: true,
                        damping: 0.1,
                        duration: 2000,
                        className: "col ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded shadow p-3 bg-white setIndex1",
                            style: {
                                height: "130px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: e.image,
                                    width: 100,
                                    height: 50,
                                    alt: e.image
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: e.name
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;