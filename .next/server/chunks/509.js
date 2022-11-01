exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 1806:
/***/ ((module) => {

// Exports
module.exports = {
	"OpenBtn": "Menu_OpenBtn__bf6vJ",
	"menubg": "Menu_menubg__9uzx0",
	"contactusdiv": "Menu_contactusdiv__9A2WH",
	"contactusbtn": "Menu_contactusbtn__LnhNv",
	"menulist": "Menu_menulist__nj5Yi",
	"servicesArrow": "Menu_servicesArrow__83cuT",
	"servicelink": "Menu_servicelink__Py_lq"
};


/***/ }),

/***/ 6869:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





const TopBar = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/image/cware-logo.png",
                            width: 120,
                            height: 90,
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: `${style.contactusdiv} `,
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "/contact",
                        className: `${style.contactusbtn} text-decoration-none`,
                        children: "GET IN TOUCH"
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TopBar)));


/***/ }),

/***/ 7509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
// EXTERNAL MODULE: external "react-bootstrap/Offcanvas"
var Offcanvas_ = __webpack_require__(6865);
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./components/Menu/Menu.module.css
var Menu_module = __webpack_require__(1806);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Menu/TopBar.js
var TopBar = __webpack_require__(6869);
// EXTERNAL MODULE: external "react-bootstrap/ListGroup"
var ListGroup_ = __webpack_require__(4692);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(4934);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: external "react-bootstrap/NavDropdown"
var NavDropdown_ = __webpack_require__(9070);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: ./components/Menu/ServicesList.js





const ServicesList = ()=>{
    const [Items, setItems] = (0,external_react_.useState)(null);
    const [ES, setES] = (0,external_react_.useState)(null);
    const [ET, setET] = (0,external_react_.useState)(null);
    const [CS, setCS] = (0,external_react_.useState)(null);
    const SD_DATA = [
        {
            id: "/software_development/sd1",
            title: "Custom Software Solutions",
            image: "/image/layers.svg",
            hImage: "/image/layers-white.svg"
        },
        {
            id: "/software_development/sd2",
            title: "UI/UX Design",
            image: "/image/ux-design.svg",
            hImage: "/image/servieshovericon/sd/uiux.svg"
        },
        {
            id: "/software_development/sd3",
            title: "Product Visualization and Strategy",
            image: "/image/product.svg",
            hImage: "/image/servieshovericon/sd/pvds.svg"
        },
        {
            id: "/software_development/sd4",
            title: "QA & Testing",
            image: "/image/Group 6068.svg",
            hImage: "/image/servieshovericon/sd/qa.svg"
        },
        {
            id: "/software_development/sd5",
            title: "Embedded Development",
            image: "/image/rise.svg",
            hImage: "/image/servieshovericon/sd/embd.svg"
        },
        {
            id: "/software_development/sd6",
            title: "Dev Ops Practice",
            image: "/image/web-development.svg",
            hImage: "/image/servieshovericon/sd/devops.png"
        }
    ];
    const ES_DATA = [
        {
            id: "/enterprise_solutions/es1",
            title: "Oracle Cloud Infrastructure",
            image: "/image/network.svg",
            hImage: "/image/network-white.svg"
        },
        {
            id: "/enterprise_solutions/es2",
            title: "Siebel CRM",
            image: "/image/CRM.svg",
            hImage: "/image/crm-white.svg"
        },
        {
            id: "/enterprise_solutions/es3",
            title: "MySQL",
            image: "/image/mysql.svg",
            hImage: "/image/servieshovericon/es/mysql.svg"
        },
        {
            id: "/enterprise_solutions/es4",
            title: "Oracle Data Integrator",
            image: "/image/computer.svg",
            hImage: "/image/servieshovericon/es/odn.svg"
        },
        {
            id: "/enterprise_solutions/es5",
            title: "Business Process Outsourcing",
            image: "/image/engineering.svg",
            hImage: "/image/engineering-white.svg"
        },
        {
            id: "/enterprise_solutions/es6",
            title: "Support 24/7",
            image: "/image/call-center.svg",
            hImage: "/image/servieshovericon/es/sp.png"
        }
    ];
    const ET_DATA = [
        {
            id: "/emerging_technologies/et1",
            title: "Big Data",
            image: "/image/big-data.svg",
            hImage: "/image/servieshovericon/et/bd.svg"
        },
        {
            id: "/emerging_technologies/et2",
            title: "Internet of Things (IoT)",
            image: "/image/noun_internet of things_1228694.svg",
            hImage: "/image/servieshovericon/et/iot.svg"
        },
        {
            id: "/emerging_technologies/et3",
            title: "Machine Learning",
            image: "/image/neural.svg",
            hImage: "/image/servieshovericon/et/rmc.svg"
        },
        {
            id: "/emerging_technologies/et4",
            title: "Healthcare",
            image: "/image/cardiogram.svg",
            hImage: "/image/servieshovericon/et/hc.svg"
        }
    ];
    const CON_DATA = [
        {
            id: "/consultancy/con1",
            title: "Product Visualization & Strategy",
            image: "/image/supply-chain.svg",
            hImage: "/image/servieshovericon/co/pvs.svg"
        },
        {
            id: "/consultancy/con2",
            title: "Digital Transformation",
            image: "/image/network-connection.svg",
            hImage: "/image/network-connection-white.svg"
        },
        {
            id: "/consultancy/con3",
            title: "Digital Discovery Workshop ",
            image: "/image/business_factory_location_manufactory_plant_icon.svg",
            hImage: "/image/1530084_business_factory_location_manufactory_plant_icon-white.svg"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(Menu_module_default()).ServicesList} p-4 `,
        style: {
            overflow: "auto"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        style: {
                            color: "#000460"
                        },
                        className: "text-start",
                        children: "Software Development"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row m-0",
                        children: SD_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-2 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    href: e.id,
                                    className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                    onMouseEnter: ()=>setItems({
                                            [index]: true
                                        }),
                                    onMouseLeave: ()=>setItems(null),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none `,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: Items && Items[index] ? e.hImage : e.image,
                                                width: 35,
                                                height: 35,
                                                alt: e.title,
                                                className: "mb-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "12px"
                                                },
                                                className: Items && Items[index] ? "text-white" : "text-secondary",
                                                children: e.title
                                            })
                                        ]
                                    })
                                })
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        style: {
                            color: "#000460"
                        },
                        className: "text-start",
                        children: "Enterprise Solutions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row m-0",
                        children: ES_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                    onMouseEnter: ()=>setES({
                                            [index]: true
                                        }),
                                    onMouseLeave: ()=>setES(null),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none `,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: ES && ES[index] ? e.hImage : e.image,
                                                width: 35,
                                                height: 35,
                                                alt: e.title,
                                                className: "mb-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "12px"
                                                },
                                                className: ES && ES[index] ? "text-white" : "text-secondary",
                                                children: e.title
                                            })
                                        ]
                                    })
                                })
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        style: {
                            color: "#000460"
                        },
                        className: "text-start",
                        children: "Emerging Technologies"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row m-0",
                        children: ET_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-2",
                                onMouseEnter: ()=>setET({
                                        [index]: true
                                    }),
                                onMouseLeave: ()=>setET(null),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none `,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: ET && ET[index] ? e.hImage : e.image,
                                                width: 35,
                                                height: 35,
                                                alt: e.title,
                                                className: "mb-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "12px"
                                                },
                                                className: ET && ET[index] ? "text-white" : "text-secondary",
                                                children: e.title
                                            })
                                        ]
                                    })
                                })
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        style: {
                            color: "#000460"
                        },
                        className: "text-start",
                        children: "Consultancy"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row m-0",
                        children: CON_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-2 ",
                                onMouseEnter: ()=>setCS({
                                        [index]: true
                                    }),
                                onMouseLeave: ()=>setCS(null),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none `,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: CS && CS[index] ? e.hImage : e.image,
                                                width: 35,
                                                height: 35,
                                                alt: e.title,
                                                className: "mb-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "12px"
                                                },
                                                className: CS && CS[index] ? "text-white" : "text-secondary",
                                                children: e.title
                                            })
                                        ]
                                    })
                                })
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Menu_ServicesList = (ServicesList);

;// CONCATENATED MODULE: ./components/Menu/index.js















const NavbarMenu = ({ bggray  })=>{
    const [IsServices, setIsServices] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
            bg: "transparent",
            expand: "md",
            className: "",
            sticky: "top",
            style: {
                backgroundImage: " linear-gradient(to  right, black, #000460)"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/image/cware-logo.png",
                            width: 120,
                            height: 90,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                        "aria-controls": `offcanvasNavbar-expand-md`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                        id: `offcanvasNavbar-expand-md`,
                        "aria-labelledby": `offcanvasNavbarLabel-expand-md`,
                        placement: "end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                                closeButton: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Title, {
                                    id: `offcanvasNavbarLabel-expand-md`,
                                    children: "Offcanvas"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                                    className: "justify-content-center align-items-center flex-grow-1 pe-3 ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv} `,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/about",
                                                className: `${(Menu_module_default()).contactusbtn}  `,
                                                children: "ABOUT"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv} ms-2 `,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/products",
                                                className: `${(Menu_module_default()).contactusbtn} `,
                                                children: "PRODUCTS"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(Menu_module_default()).contactusdiv}  ms-2 position-relative`,
                                            onMouseEnter: ()=>setIsServices(true),
                                            onMouseLeave: ()=>setIsServices(false),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                    href: "/services",
                                                    className: `${(Menu_module_default()).contactusbtn} ${(Menu_module_default()).servicebtn}  text-white`,
                                                    children: "SERVICES"
                                                }),
                                                IsServices && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "shadow rounded d-flex align-items-center justify-content-center flex-column position-absolute start-50 end-50 ",
                                                    style: {
                                                        zIndex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/image/dd-arrow.png",
                                                            width: 40,
                                                            height: 20,
                                                            alt: "dd-arrow"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: ` ${(Menu_module_default()).servicesArrow} bg-white text-dark `,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu_ServicesList, {})
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv}  ms-2`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/podcast",
                                                className: `${(Menu_module_default()).contactusbtn} `,
                                                children: "PODCAST"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv}  ms-2`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/contact",
                                                className: `${(Menu_module_default()).contactusbtn} `,
                                                children: "GET IN TOUCH"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        }, "md")
    });
};
/* harmony default export */ const Menu = (NavbarMenu);


/***/ })

};
;