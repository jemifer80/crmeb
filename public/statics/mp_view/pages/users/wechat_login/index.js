require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/wechat_login/index"],{"0faa":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.isUp=!0})},a=[]},"503e":function(e,t,n){"use strict";n.r(t);var o=n("0faa"),a=n("95a9");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("bfd4");var s=n("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=c.exports},"82ae":function(e,t,n){"use strict";(function(e){var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("ace8"),i=(n("0cf1"),n("99c8")),s=o(n("f0b9")),c=(o(n("5d84")),o(n("a29e"))),d=getApp(),r=e.getSystemInfoSync().statusBarHeight+"px",u={mixins:[c.default],data:function(){return{isUp:!1,phone:"",statusBarHeight:r,isHome:!1,isPhoneBox:!1,logoUrl:"",code:"",authKey:"",options:"",userInfo:{},codeNum:0,canUseGetUserProfile:!1,mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1}},components:{mobileLogin:function(){Promise.all([n.e("common/vendor"),n.e("components/loginMobile/index")]).then(function(){return resolve(n("9608"))}.bind(null,n)).catch(n.oe)},routinePhone:function(){n.e("components/loginMobile/routine_phone").then(function(){return resolve(n("f759"))}.bind(null,n)).catch(n.oe)}},onLoad:function(t){var n=this;e.getUserProfile&&(this.canUseGetUserProfile=!0),(0,a.getLogo)().then((function(e){n.logoUrl=e.data.logo_url}));s.default.getCode().then((function(e){n.code=e}));var o=getCurrentPages(),i=o[o.length-2];i&&"pages/order_addcart/order_addcart"==i.route?this.isHome=!0:this.isHome=!1},onShow:function(){e.removeStorageSync("form_type_cart")},methods:{userLogin:function(){var t=this;s.default.getCode().then((function(n){e.showLoading({title:"正在登录中"}),(0,a.authLogin)({code:n,spread_spid:d.globalData.spid,spread_code:d.globalData.code}).then((function(n){if(void 0!==n.data.key&&n.data.key)e.hideLoading(),t.authKey=n.data.key,t.isPhoneBox=!0;else{e.hideLoading();var o=n.data.expires_time-t.$Cache.time();t.$store.commit("LOGIN",{token:n.data.token,time:o}),t.getUserInfo()}}))})).catch((function(e){}))},back:function(){e.navigateBack()},home:function(){e.switchTab({url:"/pages/index/index"})},maskClose:function(){this.isUp=!1},bindPhoneClose:function(e){e.isStatus?(this.isPhoneBox=!1,this.$util.Tips({title:"登录成功",icon:"success"},{tab:3})):this.isPhoneBox=!1},getphonenumber:function(t){var n=this;e.showLoading({title:"正在登录中"}),s.default.getCode().then((function(e){n.getUserPhoneNumber(t.detail.encryptedData,t.detail.iv,e)})).catch((function(t){e.$emit("closePage",!1),e.hideLoading()}))},getUserPhoneNumber:function(t,n,o){var i=this;(0,a.getUserPhone)({encryptedData:t,iv:n,code:o,spread_spid:d.globalData.spid,spread_code:d.globalData.code}).then((function(e){var t=e.data.expires_time-i.$Cache.time();i.$store.commit("LOGIN",{token:e.data.token,time:t}),i.userInfo=e.data.userInfo,i.$store.commit("SETUID",e.data.userInfo.uid),i.$store.commit("UPDATE_USERINFO",e.data.userInfo),i.$Cache.clear("snsapiKey"),i.$util.Tips({title:"登录成功",icon:"success"},{tab:3})})).catch((function(t){e.hideLoading()}))},getUserInfo:function(){var t=this;(0,i.getUserInfo)().then((function(n){e.hideLoading(),t.userInfo=n.data,t.$store.commit("SETUID",n.data.uid),t.$store.commit("UPDATE_USERINFO",n.data),t.$util.Tips({title:"登录成功",icon:"success"},{tab:3})}))},setUserInfo:function(t){var n=this;e.showLoading({title:"正在登录中"}),s.default.getCode().then((function(e){n.getWxUser(e)})).catch((function(t){e.hideLoading()}))},getUserProfile:function(){var t=this;e.showLoading({title:"正在登录中"});var n=this;s.default.getUserProfile().then((function(o){var a=o.userInfo;a.code=t.code,a.spread_spid=d.globalData.spid||t.$Cache.get("spid"),a.spread_code=d.globalData.code,s.default.authUserInfo(a).then((function(o){if(void 0!==o.data.key&&o.data.key)e.hideLoading(),n.authKey=o.data.key,n.isPhoneBox=!0;else{e.hideLoading();var a=o.data.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:o.data.token,time:a}),t.getUserInfo()}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))},getWxUser:function(t){var n=this;s.default.getUserInfo().then((function(o){var a=o.userInfo;a.code=t,a.spread_spid=d.globalData.spid,a.spread_code=d.globalData.code,s.default.authUserInfo(a).then((function(t){if(void 0!==t.data.key&&t.data.key)e.hideLoading(),n.authKey=t.data.key,n.isPhoneBox=!0;else{e.hideLoading();var o=t.data.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:t.data.token,time:o}),n.$util.Tips({title:t.msg,icon:"success"},{tab:3})}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))}}};t.default=u}).call(this,n("543d")["default"])},"95a9":function(e,t,n){"use strict";n.r(t);var o=n("82ae"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},a92c:function(e,t,n){},bfd4:function(e,t,n){"use strict";var o=n("a92c"),a=n.n(o);a.a},f0de:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("8824");o(n("66fd"));var a=o(n("503e"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["f0de","common/runtime","common/vendor"]]]);