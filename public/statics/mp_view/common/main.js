(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5acb":function(e,t,o){},"62fd":function(e,t,o){"use strict";o.r(t);var a=o("b4f3"),n=o.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"6cf3":function(e,t,o){"use strict";var a=o("5acb"),n=o.n(a);n.a},"84d2":function(e,t,o){"use strict";(function(e,t){var a=o("4ea4"),n=a(o("9523"));o("8824");var r=a(o("66fd")),i=a(o("cce8")),c=a(o("315e")),s=a(o("8241")),u=a(o("e522")),l=a(o("5f9b")),d=a(o("483e"));function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){(0,n.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}e.__webpack_require_UNI_MP_PLUGIN__=o,r.default.prototype.$util=u.default,r.default.prototype.$config=l.default,r.default.prototype.$Cache=s.default,r.default.prototype.$eventHub=new r.default,r.default.prototype.$socket=new d.default,r.default.config.productionTip=!1;r.default.component("skeleton",(function(){o.e("components/skeleton/index").then(function(){return resolve(o("4562"))}.bind(null,o)).catch(o.oe)}));r.default.component("authorize",(function(){Promise.all([o.e("common/vendor"),o.e("components/authorize/index")]).then(function(){return resolve(o("fb46"))}.bind(null,o)).catch(o.oe)})),i.default.mpType="app";var b=new r.default(p(p({},i.default),{},{store:c.default,Cache:s.default}));t(b).$mount()}).call(this,o("bc2e")["default"],o("543d")["createApp"])},b4f3:function(e,t,o){"use strict";(function(e,a){var n=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("2eee")),i=n(o("c973")),c=(o("d5f7"),o("5f9b")),s=o("ace8"),u=(n(o("5d84")),n(o("f0b9"))),l=o("53c2"),d=o("26cb"),f=requirePlugin("live-player-plugin"),p="--view-theme: #42CA4D;--view-priceColor:#FF7600;--view-minorColor:rgba(108, 198, 94, 0.5);--view-minorColorT:rgba(66, 202, 77, 0.1);--view-bntColor:#FE960F;",b="--view-theme: #e93323;--view-priceColor:#e93323;--view-minorColor:rgba(233, 51, 35, 0.5);--view-minorColorT:rgba(233, 51, 35, 0.1);--view-bntColor:#FE960F;",m="--view-theme: #1DB0FC;--view-priceColor:#FD502F;--view-minorColor:rgba(58, 139, 236, 0.5);--view-minorColorT:rgba(9, 139, 243, 0.1);--view-bntColor:#22CAFD;",v="--view-theme: #FF448F;--view-priceColor:#FF448F;--view-minorColor:rgba(255, 68, 143, 0.5);--view-minorColorT:rgba(255, 68, 143, 0.1);--view-bntColor:#282828;",g="--view-theme: #FE5C2D;--view-priceColor:#FE5C2D;--view-minorColor:rgba(254, 92, 45, 0.5);--view-minorColorT:rgba(254, 92, 45, 0.1);--view-bntColor:#FDB000;",h="--view-theme: #E0A558;--view-priceColor:#DA8C18;--view-minorColor:rgba(224, 165, 88, 0.5);--view-minorColorT:rgba(224, 165, 88, 0.1);--view-bntColor:#1A1A1A;",w={globalData:{spid:0,code:0,isLogin:!1,userInfo:{},MyMenus:[],globalData:!1,isIframe:!1,tabbarShow:!0,windowHeight:0},computed:(0,d.mapGetters)(["isLogin","cartNum"]),watch:{isLogin:{deep:!0,handler:function(e,t){e||this.$store.commit("indexData/setCartNum","")}},cartNum:function(t,o){this.$store.commit("indexData/setCartNum",t+""),t>0?e.setTabBarBadge({index:2,text:t+""}):e.hideTabBarRedDot({index:2})}},onLaunch:function(){var t=(0,i.default)(r.default.mark((function t(o){var a,n,i,s,d=this;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this,(0,l.colorChange)("color_change").then((function(t){var o=t.data.navigation,a=t.data.status;switch(e.setStorageSync("navigation",o),e.$emit("navOk",o),e.setStorageSync("statusColor",a),e.$emit("colorOk",a),t.data.status){case 1:e.setStorageSync("viewColor",m),e.$emit("ok",m);break;case 2:e.setStorageSync("viewColor",p),e.$emit("ok",p);break;case 3:e.setStorageSync("viewColor",b),e.$emit("ok",b);break;case 4:e.setStorageSync("viewColor",v),e.$emit("ok",v);break;case 5:e.setStorageSync("viewColor",g),e.$emit("ok",g);break;case 6:e.setStorageSync("viewColor",h),e.$emit("ok",h);break;default:e.setStorageSync("viewColor",b),e.$emit("ok",b);break}})),o.query.spid&&(a.$Cache.set("spid",o.query.spid),a.globalData.spid=o.query.spid),""!=c.HTTP_REQUEST_URL){t.next=6;break}return t.abrupt("return",!1);case 6:if(!o.query.hasOwnProperty("scene")){t.next=19;break}t.t0=o.scene,t.next=1047===t.t0?10:1048===t.t0?13:1049===t.t0?15:1001===t.t0?17:19;break;case 10:return n=a.$util.getUrlParams(decodeURIComponent(o.query.scene)),a.globalData.code=void 0===n.spid?n:n.spid,t.abrupt("break",19);case 13:return a.globalData.code=o.query.scene,t.abrupt("break",19);case 15:return a.globalData.code=o.query.scene,t.abrupt("break",19);case 17:return a.globalData.spid=o.query.scene,t.abrupt("break",19);case 19:this.checkUpdateVersion(),e.getSystemInfo({success:function(e){a.globalData.navHeight=e.statusBarHeight*(750/e.windowWidth)+91}}),i=e.getMenuButtonBoundingClientRect(),a.globalData.navH=2*i.top+i.height/2,s=e.getSystemInfoSync().SDKVersion,u.default.compareVersion(s,"2.21.2")>=0?a.$Cache.set("MP_VERSION_ISNEW",!0):a.$Cache.set("MP_VERSION_ISNEW",!1),this.$store.getters.isLogin||u.default.getCode().then((function(e){d.silenceAuth(e)})).catch((function(t){e.hideLoading()}));case 26:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),onShow:function(e){var t=this;[1007,1008,1014,1044,1045,1046,1047,1048,1049,1073,1154,1155].includes(e.scene)&&f.getShareParams().then((function(e){e.custom_params.pid&&(t.$Cache.set("spid",e.custom_params.pid),t.globalData.spid=e.custom_params.pid)})).catch((function(e){}))},mounted:function(){},methods:{silenceAuth:function(t){var o=this,a=this,n=a.globalData.spid?a.globalData.spid:"";(0,s.silenceAuth)({code:t,spread_spid:n,spread_code:a.globalData.code}).then((function(t){if(void 0!==t.data.token&&t.data.token){e.hideLoading();var n=t.data.expires_time-o.$Cache.time();a.$store.commit("LOGIN",{token:t.data.token,time:n}),a.$store.commit("SETUID",t.data.userInfo.uid),a.$store.commit("UPDATE_USERINFO",t.data.userInfo)}})).catch((function(e){}))},isWork:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("wxwork")&&-1!==navigator.userAgent.toLowerCase().indexOf("micromessenger")},checkUpdateVersion:function(){if(a.canIUse("getUpdateManager")){var e=a.getUpdateManager();e.onCheckForUpdate((function(t){t.hasUpdate&&(e.onUpdateReady((function(){a.showModal({title:"温馨提示",content:"检测到新版本，是否重启小程序？",showCancel:!1,success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){a.showModal({title:"已有新版本",content:"请您删除小程序，重新搜索进入"})})))}))}else a.showModal({title:"溫馨提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})}},onHide:function(){}};t.default=w}).call(this,o("543d")["default"],o("bc2e")["default"])},cce8:function(e,t,o){"use strict";o.r(t);var a=o("62fd");for(var n in a)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(n);o("6cf3");var r=o("f0c5"),i=Object(r["a"])(a["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=i.exports}},[["84d2","common/runtime","common/vendor"]]]);