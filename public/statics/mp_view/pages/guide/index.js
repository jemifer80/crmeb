(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guide/index"],{"1abcd":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]},"1fd6":function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("8241"));var i=n("53c2"),u={components:{guide:function(){n.e("components/guide/index").then(function(){return resolve(n("7ff4"))}.bind(null,n)).catch(n.oe)}},data:function(){return{guidePages:!1,advData:[]}},onShow:function(){this.loadExecution()},methods:{loadExecution:function(){var t=this,n=e.getStorageSync("guideDate")||"",a=(new Date).toLocaleDateString();n!==a?(0,i.getOpenAdv)().then((function(n){0==n.data.status||0==n.data.value.length?e.switchTab({url:"/pages/index/index"}):n.data.status&&(n.data.value.length||n.data.video_link)&&(t.advData=n.data,e.setStorageSync("guideDate",(new Date).toLocaleDateString()),t.guidePages=!0)})).catch((function(t){e.switchTab({url:"/pages/index/index"})})):e.switchTab({url:"/pages/index/index"})}},onHide:function(){this.guidePages=!1}};t.default=u}).call(this,n("543d")["default"])},"2e1d":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("8824");a(n("66fd"));var i=a(n("fae7"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},9490:function(e,t,n){},a158:function(e,t,n){"use strict";n.r(t);var a=n("1fd6"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},aed0:function(e,t,n){"use strict";var a=n("9490"),i=n.n(a);i.a},fae7:function(e,t,n){"use strict";n.r(t);var a=n("1abcd"),i=n("a158");for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("aed0");var c=n("f0c5"),d=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=d.exports}},[["2e1d","common/runtime","common/vendor"]]]);