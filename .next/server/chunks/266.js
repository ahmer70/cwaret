exports.id = 266;
exports.ids = [266];
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
	"servicelink": "Menu_servicelink__Py_lq",
	"dtservices": "Menu_dtservices__pe_gy",
	"mbservices": "Menu_mbservices__XyPI5"
};


/***/ }),

/***/ 7266:
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
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(4934);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
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
            image: "/image/servicesicons/layers.svg",
            hImage: "/image/servicesicons/layers-1.svg"
        },
        {
            id: "/software_development/sd2",
            title: "UI/UX Design",
            image: "/image/servicesicons/ux-design-1.svg",
            hImage: "/image/servicesicons/ux-design.svg"
        },
        {
            id: "/software_development/sd3",
            title: "Product Visualization and Strategy",
            image: "/image/servicesicons/product-1.svg",
            hImage: "/image/servicesicons/product.svg"
        },
        {
            id: "/software_development/sd4",
            title: "QA & Testing",
            image: "/image/servicesicons/Group 6068.svg",
            hImage: "/image/servicesicons/Group -1.svg"
        },
        {
            id: "/software_development/sd5",
            title: "Embedded Development",
            image: "/image/servicesicons/rise-1.svg",
            hImage: "/image/servicesicons/rise.svg"
        },
        {
            id: "/software_development/sd6",
            title: "Dev Ops Practice",
            image: "/image/servicesicons/web-development-1.svg",
            hImage: "/image/servicesicons/web-development.svg"
        }
    ];
    const ES_DATA = [
        {
            id: "/enterprise_solutions/es1",
            title: "Oracle Cloud Infrastructure",
            image: "/image/servicesicons/network-1.svg",
            hImage: "/image/servicesicons/network.svg"
        },
        {
            id: "/enterprise_solutions/es2",
            title: "Siebel CRM",
            image: "/image/servicesicons/CRM.svg",
            hImage: "/image/servicesicons/CRM-1.svg"
        },
        {
            id: "/enterprise_solutions/es3",
            title: "MySQL",
            image: "/image/servicesicons/mysql-1.svg",
            hImage: "/image/servicesicons/mysql.svg"
        },
        {
            id: "/enterprise_solutions/es4",
            title: "Oracle Data Integrator",
            image: "/image/servicesicons/computer.svg",
            hImage: "/image/servicesicons/computer-1.svg"
        },
        {
            id: "/enterprise_solutions/es5",
            title: "Business Process Outsourcing",
            image: "/image/servicesicons/engineering-1.svg",
            hImage: "/image/servicesicons/engineering.svg"
        }
    ];
    const ET_DATA = [
        {
            id: "/emerging_technologies/et1",
            title: "Big Data",
            image: "/image/servicesicons/big-data.svg",
            hImage: "/image/servicesicons/big-data-1.svg"
        },
        {
            id: "/emerging_technologies/et2",
            title: "Internet of Things (IoT)",
            image: "/image/servicesicons/iot-1.svg",
            hImage: "/image/servicesicons/iot.svg"
        },
        {
            id: "/emerging_technologies/et3",
            title: "Machine Learning",
            image: "/image/servicesicons/neural-1.svg",
            hImage: "/image/servicesicons/neural.svg"
        },
        {
            id: "/emerging_technologies/et4",
            title: "Healthcare",
            image: "/image/servicesicons/cardiogram.svg",
            hImage: "/image/servicesicons/cardiogram-1.svg"
        }
    ];
    const CON_DATA = [
        {
            id: "/consultancy/con1",
            title: "Product Visualization & Strategy",
            image: "/image/servicesicons/supply-chain-1.svg",
            hImage: "/image/servicesicons/supply-chain.svg"
        },
        {
            id: "/consultancy/con2",
            title: "Digital Transformation",
            image: "/image/servicesicons/network-connection-1.svg",
            hImage: "/image/servicesicons/network-connection.svg"
        },
        {
            id: "/consultancy/con3",
            title: "Digital Discovery Workshop ",
            image: "/image/servicesicons/ddw-1.svg",
            hImage: "/image/servicesicons/ddw.svg"
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
                                className: "col-md-3 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    href: e.id,
                                    className: `rounded  ${(Menu_module_default()).servicelink}`,
                                    onMouseEnter: ()=>setItems({
                                            [index]: true
                                        }),
                                    onMouseLeave: ()=>setItems(null),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`,
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
                                className: "col-md-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `rounded  ${(Menu_module_default()).servicelink}`,
                                    onMouseEnter: ()=>setES({
                                            [index]: true
                                        }),
                                    onMouseLeave: ()=>setES(null),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`,
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
                                className: "col-md-3",
                                onMouseEnter: ()=>setET({
                                        [index]: true
                                    }),
                                onMouseLeave: ()=>setET(null),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `rounded  ${(Menu_module_default()).servicelink}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`,
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
                                className: "col-md-3 ",
                                onMouseEnter: ()=>setCS({
                                        [index]: true
                                    }),
                                onMouseLeave: ()=>setCS(null),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `rounded  ${(Menu_module_default()).servicelink}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: `/services${e.id}`,
                                        className: `text-decoration-none p-2 d-flex align-items-center justify-content-between flex-column`,
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

// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(2423);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
;// CONCATENATED MODULE: ./components/Menu/ServiesListMb.js







const ServiesListMb = ()=>{
    const [Items, setItems] = (0,external_react_.useState)(null);
    const [ES, setES] = (0,external_react_.useState)(null);
    const [ET, setET] = (0,external_react_.useState)(null);
    const [CS, setCS] = (0,external_react_.useState)(null);
    const SD_DATA = [
        {
            id: "/software_development/sd1",
            title: "Custom Software Solutions",
            image: "/image/servicesicons/layers.svg",
            hImage: "/image/servicesicons/layers-1.svg"
        },
        {
            id: "/software_development/sd2",
            title: "UI/UX Design",
            image: "/image/servicesicons/ux-design-1.svg",
            hImage: "/image/servicesicons/ux-design.svg"
        },
        {
            id: "/software_development/sd3",
            title: "Product Visualization and Strategy",
            image: "/image/servicesicons/product-1.svg",
            hImage: "/image/servicesicons/product.svg"
        },
        {
            id: "/software_development/sd4",
            title: "QA & Testing",
            image: "/image/servicesicons/Group 6068.svg",
            hImage: "/image/servicesicons/Group -1.svg"
        },
        {
            id: "/software_development/sd5",
            title: "Embedded Development",
            image: "/image/servicesicons/rise-1.svg",
            hImage: "/image/servicesicons/rise.svg"
        },
        {
            id: "/software_development/sd6",
            title: "Dev Ops Practice",
            image: "/image/servicesicons/web-development-1.svg",
            hImage: "/image/servicesicons/web-development.svg"
        }
    ];
    const ES_DATA = [
        {
            id: "/enterprise_solutions/es1",
            title: "Oracle Cloud Infrastructure",
            image: "/image/servicesicons/network-1.svg",
            hImage: "/image/servicesicons/network.svg"
        },
        {
            id: "/enterprise_solutions/es2",
            title: "Siebel CRM",
            image: "/image/servicesicons/CRM.svg",
            hImage: "/image/servicesicons/CRM-1.svg"
        },
        {
            id: "/enterprise_solutions/es3",
            title: "MySQL",
            image: "/image/servicesicons/mysql-1.svg",
            hImage: "/image/servicesicons/mysql.svg"
        },
        {
            id: "/enterprise_solutions/es4",
            title: "Oracle Data Integrator",
            image: "/image/servicesicons/computer.svg",
            hImage: "/image/servicesicons/computer-1.svg"
        },
        {
            id: "/enterprise_solutions/es5",
            title: "Business Process Outsourcing",
            image: "/image/servicesicons/engineering-1.svg",
            hImage: "/image/servicesicons/engineering.svg"
        },
        {
            id: "/enterprise_solutions/es6",
            title: "Support 24/7",
            image: "/image/servicesicons/call-center.svg",
            hImage: "/image/servicesicons/call-center-1.svg"
        }
    ];
    const ET_DATA = [
        {
            id: "/emerging_technologies/et1",
            title: "Big Data",
            image: "/image/servicesicons/big-data.svg",
            hImage: "/image/servicesicons/big-data-1.svg"
        },
        {
            id: "/emerging_technologies/et2",
            title: "Internet of Things (IoT)",
            image: "/image/servicesicons/iot-1.svg",
            hImage: "/image/servicesicons/iot.svg"
        },
        {
            id: "/emerging_technologies/et3",
            title: "Machine Learning",
            image: "/image/servicesicons/neural-1.svg",
            hImage: "/image/servicesicons/neural.svg"
        },
        {
            id: "/emerging_technologies/et4",
            title: "Healthcare",
            image: "/image/servicesicons/cardiogram.svg",
            hImage: "/image/servicesicons/cardiogram-1.svg"
        }
    ];
    const CON_DATA = [
        {
            id: "/consultancy/con1",
            title: "Product Visualization & Strategy",
            image: "/image/servicesicons/supply-chain-1.svg",
            hImage: "/image/servicesicons/supply-chain.svg"
        },
        {
            id: "/consultancy/con2",
            title: "Digital Transformation",
            image: "/image/servicesicons/network-connection-1.svg",
            hImage: "/image/servicesicons/network-connection.svg"
        },
        {
            id: "/consultancy/con3",
            title: "Digital Discovery Workshop ",
            image: "/image/servicesicons/ddw-1.svg",
            hImage: "/image/servicesicons/ddw.svg"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()), {
            className: "border-0 p-0 m-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                eventKey: "0",
                className: "border-0 p-0 m-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                        className: "border-0 p-0 m-0 accohead",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                href: "/services",
                                className: `${(Menu_module_default()).contactusbtn} ${(Menu_module_default()).servicebtn} `,
                                children: "SERVICES"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                        /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: SD_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                                    onMouseEnter: ()=>setItems({
                                                            [index]: true
                                                        }),
                                                    onMouseLeave: ()=>setItems(null),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `/services${e.id}`,
                                                        className: `text-decoration-none `,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row m-0",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-2",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        src: Items && Items[index] ? e.hImage : e.image,
                                                                        width: 35,
                                                                        height: 35,
                                                                        alt: e.title,
                                                                        className: "mb-2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-10",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        style: {
                                                                            fontSize: "12px"
                                                                        },
                                                                        className: Items && Items[index] ? "text-white" : "text-secondary",
                                                                        children: e.title
                                                                    })
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
                                        /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: ES_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                                    onMouseEnter: ()=>setES({
                                                            [index]: true
                                                        }),
                                                    onMouseLeave: ()=>setES(null),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `/services${e.id}`,
                                                        className: `text-decoration-none `,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row m-0",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-2",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        src: ES && ES[index] ? e.hImage : e.image,
                                                                        width: 35,
                                                                        height: 35,
                                                                        alt: e.title,
                                                                        className: "mb-2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "col-10",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        style: {
                                                                            fontSize: "12px"
                                                                        },
                                                                        className: ES && ES[index] ? "text-white" : "text-secondary",
                                                                        children: e.title
                                                                    })
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
                                        /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: ET_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    onMouseEnter: ()=>setET({
                                                            [index]: true
                                                        }),
                                                    onMouseLeave: ()=>setET(null),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/services${e.id}`,
                                                            className: `text-decoration-none `,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row m-0",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-2",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                            src: ET && ET[index] ? e.hImage : e.image,
                                                                            width: 35,
                                                                            height: 35,
                                                                            alt: e.title,
                                                                            className: "mb-2"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-10",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            style: {
                                                                                fontSize: "12px"
                                                                            },
                                                                            className: ET && ET[index] ? "text-white" : "text-secondary",
                                                                            children: e.title
                                                                        })
                                                                    })
                                                                ]
                                                            })
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
                                        /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: CON_DATA.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    onMouseEnter: ()=>setCS({
                                                            [index]: true
                                                        }),
                                                    onMouseLeave: ()=>setCS(null),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `rounded p-2 ${(Menu_module_default()).servicelink}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/services${e.id}`,
                                                            className: `text-decoration-none `,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row m-0",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-2",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                            src: CS && CS[index] ? e.hImage : e.image,
                                                                            width: 35,
                                                                            height: 35,
                                                                            alt: e.title,
                                                                            className: "mb-2"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-10",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            style: {
                                                                                fontSize: "12px"
                                                                            },
                                                                            className: CS && CS[index] ? "text-white" : "text-secondary",
                                                                            children: e.title
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }, index))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Menu_ServiesListMb = (ServiesListMb);

;// CONCATENATED MODULE: ./components/Menu/index.js











const NavbarMenu = ({ bggray , contact  })=>{
    const [IsServices, setIsServices] = (0,external_react_.useState)(false);
    const [width, setWidth] = (0,external_react_.useState)(null);
    const [height, setHeight] = (0,external_react_.useState)(null);
    const updateDimensions = ()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    (0,external_react_.useEffect)(()=>{
        setWidth(window.innerWidth);
        window.addEventListener("resize", updateDimensions);
        return ()=>window.removeEventListener("resize", updateDimensions);
    }, []);
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
                        children: !contact && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/image/cware-logo.png",
                            width: 120,
                            height: 90,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                        "aria-controls": `offcanvasNavbar-expand-md`,
                        style: {
                            outline: "none",
                            boxShadow: "none",
                            border: "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMenu, {
                            className: " text-white",
                            style: {
                                fontSize: "50px"
                            }
                        })
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
                                    children: "Menu"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                                    className: "justify-content-md-center align-items-md-center flex-grow-1 pe-3 ",
                                    children: [
                                        contact && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv} `,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/",
                                                className: `${(Menu_module_default()).contactusbtn} text-md-center    text-start`,
                                                children: "HOME"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv} `,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/about",
                                                className: `${(Menu_module_default()).contactusbtn} text-md-center  text-start `,
                                                children: "ABOUT"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv} ms-md-2 `,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/products",
                                                className: `${(Menu_module_default()).contactusbtn} text-md-center  text-start  `,
                                                children: "PRODUCTS"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Menu_module_default()).mbservices,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu_ServiesListMb, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${(Menu_module_default()).contactusdiv} ${(Menu_module_default()).dtservices}  ms-md-2 position-relative`,
                                                onMouseEnter: ()=>setIsServices(true),
                                                onMouseLeave: ()=>setIsServices(false),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                        href: "/services",
                                                        className: `${(Menu_module_default()).contactusbtn} ${(Menu_module_default()).servicebtn} `,
                                                        children: "SERVICES"
                                                    }),
                                                    IsServices && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "shadow rounded d-flex align-items-center flex-column position-absolute start-50 end-50 ",
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
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv}  ms-md-2`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/podcast",
                                                className: `${(Menu_module_default()).contactusbtn} text-md-center  text-start`,
                                                children: "PODCAST"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(Menu_module_default()).contactusdiv} ms-md-2`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                href: "/contact",
                                                className: `${(Menu_module_default()).contactusbtn} text-md-center text-start`,
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