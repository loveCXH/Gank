webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(8)
	__vue_script__ = __webpack_require__(9)
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// <template>
	//   <div class="start">
	//     <div class="logo">
	//       <img src="../assets/logo_vue.png">
	//       <img src="../assets/logo_gank.png">
	//     </div>
	//     <h1 v-text="msg"></h1>
	//     <p v-text="author"></p>
	//   </div>
	// </template>
	// <script>
	module.exports = {
	  name: 'start',
	  data: function data() {
	    return {
	      msg: 'Welcome to GankApp with Vue.js',
	      author: 'Author:lxz612'
	    };
	  },
	  ready: function ready() {
	    var _self = this;
	    setTimeout(function () {
	      _self.$route.router.go({ name: 'index' });
	    }, 2000);
	  }
	};
	// </script>
	// <style>
	//   body,img{
	//     padding:0;
	//     margin:0;
	//   }
	//   body{
	//     font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
	//   }
	//
	//   .start {
	//     position: absolute;
	//     top: 50%;
	//     left: 50%;
	//     -webkit-transform:translate(-50%,-50%);
	//     width: 100%;
	//     color: #2c3e50;
	//     text-align: center;  
	//     padding: 10px;
	//   }
	//
	//   .start .logo img{
	//     width:100px;
	//     height: 100px;
	//     margin: 10px;
	//     border-radius: 5px;
	//   }
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <div class=\"start\">\n    <div class=\"logo\">\n      <img src=\"" + __webpack_require__(11) + "\">\n      <img src=\"" + __webpack_require__(12) + "\">\n    </div>\n    <h1 v-text=\"msg\"></h1>\n    <p v-text=\"author\"></p>\n  </div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "82b9c7a5a3f405032b1db71a25f67021.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cddfdecc4b5a9410c60da69c382c4de2.png";

/***/ }
]);
//# sourceMappingURL=1.build.js.map?247579a79a9e17b305d9