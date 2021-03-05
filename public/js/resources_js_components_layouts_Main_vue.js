(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layouts_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/Main.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/Main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  methods: {
    logout: function logout() {
      if (localStorage.getItem("accessToken")) {
        localStorage.removeItem("accessToken");
        this.$store.dispatch("updateUserInfo", {});
        localStorage.removeItem("userInfo");
        this.$router.push("/login")["catch"](function () {});
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/layouts/Main.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/layouts/Main.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_17dc542c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=17dc542c& */ "./resources/js/components/layouts/Main.vue?vue&type=template&id=17dc542c&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Main_vue_vue_type_template_id_17dc542c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_17dc542c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Main.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/layouts/Main.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layouts/Main.vue?vue&type=template&id=17dc542c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/Main.vue?vue&type=template&id=17dc542c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_17dc542c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_17dc542c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_17dc542c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=17dc542c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/Main.vue?vue&type=template&id=17dc542c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/Main.vue?vue&type=template&id=17dc542c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/Main.vue?vue&type=template&id=17dc542c& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg navbar-dark bg-dark" },
        [
          _c("div", { staticClass: "container" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse",
                attrs: { id: "navbarNavDropdown" }
              },
              [
                _c("ul", { staticClass: "navbar-nav mr-auto" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item active" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/" } },
                        [_vm._v("Home")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3)
                ]),
                _vm._v(" "),
                !_vm.isUserLoggedIn()
                  ? _c("ul", { staticClass: "navbar-nav my-2 my-lg-0" }, [
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/login" }
                            },
                            [_vm._v("Login")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: "/signup" }
                            },
                            [_vm._v("Signup")]
                          )
                        ],
                        1
                      )
                    ])
                  : _c("ul", { staticClass: "navbar-nav my-2 my-lg-0" }, [
                      _c("li", { staticClass: "nav-item" }, [
                        _c(
                          "a",
                          { staticClass: "text-light", attrs: { href: "#" } },
                          [_vm._v(_vm._s(_vm.activeUserInfo.name))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "nav-item ml-3" }, [
                        _c(
                          "a",
                          {
                            staticClass: "text-light",
                            attrs: { href: "#" },
                            on: { click: _vm.logout }
                          },
                          [_c("i", { staticClass: "bi-box-arrow-right" })]
                        )
                      ])
                    ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "main-body" }, [
      _c("div", { staticClass: "container" }, [_c("router-view")], 1)
    ]),
    _vm._v(" "),
    _vm._m(4)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
      _c("img", {
        staticClass: "d-inline-block align-top",
        attrs: { src: "/images/logo.png", width: "100", alt: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "logo-text" }, [_vm._v("World News")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarNavDropdown",
          "aria-controls": "navbarNavDropdown",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v("Features")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v("Pricing")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "text-light navbar-dark bg-dark p-3" }, [
      _c("div", { staticClass: "container" }, [
        _c("p", [
          _vm._v(
            "Album example is © Bootstrap, but please download and customize it for yourself!"
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);