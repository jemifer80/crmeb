(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{1158:function(e,t,i){"use strict";i.r(t);var n=i("1d3e"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"1d3e":function(e,t,i){"use strict";(function(e){var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("2eee")),a=n(i("c973")),s=n(i("9523")),r=i("78a2"),u=i("d863"),c=i("53c2"),d=i("99c8"),g=(i("ace8"),i("d5f7"),i("26cb")),f=i("5f9b"),h=n(i("3013")),l=n(i("f0b9")),m=n(i("a29e"));function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var _=e.getSystemInfoSync().statusBarHeight+"px",b=getApp(),v={components:{pageFooter:function(){Promise.all([i.e("common/vendor"),i.e("components/pageFooter/index")]).then(function(){return resolve(i("9f8d"))}.bind(null,i)).catch(i.oe)},ewcomerPop:function(){Promise.all([i.e("common/vendor"),i.e("components/ewcomerPop/index")]).then(function(){return resolve(i("daf5"))}.bind(null,i)).catch(i.oe)},editUserModal:function(){Promise.all([i.e("common/vendor"),i.e("components/eidtUserModal/index")]).then(function(){return resolve(i("e09f"))}.bind(null,i)).catch(i.oe)}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){(0,s.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},(0,g.mapGetters)({cartNum:"cartNum",isLogin:"isLogin"})),filters:{coundTime:function(e){var t=1e3*e,i=new Date,n=t-i.getTime(),o=parseInt(n/864e5);return o+"天"},dateFormat:function(e){return(0,h.default)(1e3*e).format("YYYY-MM-DD")}},mixins:[m.default],data:function(){return{vipStatus:0,stu:!1,storeMenu:[],orderMenu:[{img:"icon-daifukuan",title:"待付款",url:"/pages/goods/order_list/index?status=0"},{img:"icon-daifahuo",title:"待发货",url:"/pages/goods/order_list/index?status=1"},{img:"icon-daishouhuo",title:"待收货",url:"/pages/goods/order_list/index?status=2"},{img:"icon-daipingjia",title:"待评价",url:"/pages/goods/order_list/index?status=3"},{img:"icon-a-shouhoutuikuan",title:"售后/退款",url:"/pages/users/user_return_list/index"}],imgUrls:[],autoplay:!0,circular:!0,interval:3e3,duration:500,isAuto:!1,isShowAuth:!1,orderStatusNum:{},userInfo:{},MyMenus:[],sysHeight:_,mpHeight:0,showStatus:1,pageHeight:"100%",routineContact:0,footerSee:!1,member_style:1,my_banner_status:1,menu_status:1,service_status:1,newcomer_status:1,codeList:[{name:"会员码"},{name:"付款码"}],codeIndex:0,config:{bar:{code:"",color:["#000"],bgColor:"#FFFFFF",width:480,height:110},qrc:{code:"",size:380,level:3,bgColor:"#FFFFFF",border:{color:["#eee","#eee"],lineWidth:3},color:["#333","#333"]}},isCode:!1,isextension:!1,extension:{code:"",size:380,level:3,bgColor:"#FFFFFF",border:{color:["#eee","#eee"],lineWidth:3},color:["#333","#333"]},imgHost:f.HTTP_REQUEST_URL,copyRightText:"",copyRightImg:"",giftPic:"",vip_type:1,newcomer_style:1,newList:[],newBg:"",comerGift:{},isComerGift:!1,memberStatus:0,editModal:!1}},created:function(){this.$store.getters.isLogin,0==this.isLogin&&(this.isShowAuth=!0)},onLoad:function(t){var i=this;return(0,a.default)(o.default.mark((function t(){var n,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.copyRightText=e.getStorageSync("copyNameInfo"),i.copyRightText||i.getCopyRight(),i.isLogin&&i.getNewcomerGift(),i.getNewList(),i.colorData(),n=[i.imgHost+"/statics/images/gift01.png",i.imgHost+"/statics/images/gift02.png",i.imgHost+"/statics/images/gift03.png",i.imgHost+"/statics/images/gift04.png",i.imgHost+"/statics/images/gift05.png",i.imgHost+"/statics/images/gift06.png"],a=[i.imgHost+"/statics/images/blue-bg.png",i.imgHost+"/statics/images/green-bg.png",i.imgHost+"/statics/images/red-bg.png",i.imgHost+"/statics/images/pink-bg.png",i.imgHost+"/statics/images/orange-bg.png",i.imgHost+"/statics/images/gold-bg.png"],setTimeout((function(){switch(i.colorNum){case 1:i.giftPic=n[2],i.newBg=a[0];break;case 2:i.giftPic=n[1],i.newBg=a[1];break;case 3:i.giftPic=n[4],i.newBg=a[2];break;case 4:i.giftPic=n[0],i.newBg=a[3];break;case 5:i.giftPic=n[3],i.newBg=a[4];break;case 6:i.giftPic=n[5],i.newBg=a[5];break;default:i.giftPic=n[4],i.newBg=a[2];break}}),1);case 8:case"end":return t.stop()}}),t)})))()},onReady:function(){var t=this,i=e.createSelectorQuery().select(".sys-head");i.boundingClientRect((function(e){t.mpHeight=e.height})).exec()},onShow:function(){this.cartNum>0?e.setTabBarBadge({index:2,text:this.cartNum+""}):e.hideTabBarRedDot({index:2}),this.copyRightText=e.getStorageSync("copyNameInfo"),this.copyRightImg=e.getStorageSync("copyImageInfo"),e.removeStorageSync("form_type_cart");this.isLogin&&(this.isShowAuth=!1,this.getUserInfo(),this.getMyMenus(),this.setVisit())},methods:{editSuccess:function(){this.editModal=!1,this.getUserInfo()},closeEdit:function(){this.editModal=!1},getCopyRight:function(){var t=this;(0,c.copyRight)().then((function(t){var i=t.data;i.copyrightContext||i.copyrightImage||(i.copyrightImage="/static/images/support.png"),e.setStorageSync("copyNameInfo",i.copyrightContext),e.setStorageSync("copyImageInfo",i.copyrightImage)})).catch((function(e){return t.$util.Tips({title:e.msg})}))},intoPage:function(t){this.isLogin?e.navigateTo({url:t}):this.isShowAuth=!0},goDetail:function(t){e.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id,"&fromPage='newVip'")})},comerPop:function(){this.isComerGift=!1},getNewcomerGift:function(){var t=this;if(e.getStorageSync("newcomerGift"))return this.isComerGift=!1;(0,u.newcomerGift)().then((function(i){t.comerGift=i.data,"[object Object]"==Object.prototype.toString.call(t.comerGift)&&(i.data.coupon_count||i.data.product_count||i.data.register_give_money||i.data.first_order_discount||i.data.register_give_integral)&&(e.setStorageSync("newcomerGift",!0),t.isComerGift=!0)})).catch((function(e){return t.$util.Tips({title:e})}))},getNewList:function(){var e=this;(0,c.newcomerList)({page:1,limit:6,priceOrder:"",salesOrder:""}).then((function(t){e.newList=t.data})).catch((function(t){return e.$util.Tips({title:t})}))},hah:function(){},savePic:function(e){},hello:function(e){},goNewcomers:function(){e.navigateTo({url:"/pages/store/newcomers/index"})},getCode:function(){var e=this;(0,d.getRandCode)().then((function(t){var i=t.data.code;e.config.bar.code=i,e.config.qrc.code=i})).catch((function(t){return e.$util.Tips(t)}))},tapQrCode:function(){this.isCode=!0,this.codeIndex=0,this.$nextTick((function(){var e=this.userInfo.bar_code;this.config.bar.code=e,this.config.qrc.code=e}))},closeCode:function(){this.isCode=!1,this.isextension=!1},tapCode:function(e){if(this.codeIndex=e,1==e)this.getCode();else{var t=this.userInfo.bar_code;this.config.bar.code=t,this.config.qrc.code=t}},getWechatuserinfo:function(){},getRoutineUserInfo:function(e){var t=this;(0,d.updateUserInfo)({userInfo:e.detail.userInfo}).then((function(e){return t.getUserInfo(),t.$util.Tips("更新用户信息成功")})).catch((function(e){return t.$util.Tips(e)}))},setVisit:function(){(0,d.setVisit)({url:"/pages/user/index"}).then((function(e){}))},openAuto:function(){this.isShowAuth=!0},onLoadFun:function(){this.getUserInfo(),this.getMyMenus(),this.setVisit(),this.isShowAuth=!1},Setting:function(){e.openSetting({success:function(e){}})},authColse:function(e){this.isShowAuth=e},bindPhone:function(){e.navigateTo({url:"/pages/users/user_phone/index"})},getUserInfo:function(){var e=this;(0,d.getUserInfo)().then((function(t){e.userInfo=t.data,e.stu=t.data.svip_open,e.memberStatus=parseInt(t.data.member_func_status),e.vipStatus=t.data.vip_status,e.$store.commit("SETUID",t.data.uid),e.$store.commit("UPDATE_USERINFO",t.data),e.orderMenu.forEach((function(e,i){switch(e.title){case"待付款":e.num=t.data.orderStatusNum.unpaid_count;break;case"待发货":e.num=t.data.orderStatusNum.unshipped_count;break;case"待收货":e.num=t.data.orderStatusNum.received_count;break;case"待评价":e.num=t.data.orderStatusNum.evaluated_count;break;case"售后/退款":e.num=t.data.orderStatusNum.refunding_count;break}}))}))},getUserProfile:function(){var t=this;e.showLoading({title:"获取中"});var i=this;l.default.getUserProfile().then((function(n){l.default.getCode().then((function(o){var a=n.userInfo;a.code=o,a.spread_spid=b.globalData.spid,a.spread_code=b.globalData.code,l.default.authUserInfo(a).then((function(n){if(void 0!==n.data.key&&n.data.key)e.hideLoading(),i.authKey=n.data.key,i.isPhoneBox=!0;else{e.hideLoading();var o=n.data.expires_time-i.$Cache.time();i.$store.commit("LOGIN",{token:n.data.token,time:o}),t.getUserInfo()}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))})).catch((function(t){e.hideLoading()}))},switchTab:function(e){this.orderMenu.forEach((function(t,i){switch(t.title){case"待付款":t.img=e.dfk;break;case"待发货":t.img=e.dfh;break;case"待收货":t.img=e.dsh;break;case"待评价":t.img=e.dpj;break;case"售后/退款":t.img=e.sh;break}}))},getMyMenus:function(){var e=this,t=this;(0,d.getMenuList)().then((function(i){var n=[],o=[];i.data.routine_my_menus.forEach((function(e,t,i){"2"==e.type?n.push(e):o.push(e)})),e.member_style=Number(i.data.diy_data.status),e.my_banner_status=i.data.diy_data.my_banner_status,e.menu_status=i.data.diy_data.menu_status,e.service_status=i.data.diy_data.service_status,e.vip_type=i.data.diy_data.vip_type,e.newcomer_style=i.data.diy_data.newcomer_style,e.newcomer_status=i.data.diy_data.newcomer_status;switch(i.data.diy_data.order_status){case 1:e.switchTab({dfk:"icon-daifukuan",dfh:"icon-daifahuo",dsh:"icon-daishouhuo",dpj:"icon-daipingjia",sh:"icon-a-shouhoutuikuan"});break;case 2:e.switchTab({dfk:"icon-daifukuan-lan",dfh:"icon-daifahuo-lan",dsh:"icon-daishouhuo-lan",dpj:"icon-daipingjia-lan",sh:"icon-shouhou-tuikuan-lan"});break;case 3:e.switchTab({dfk:"icon-daifukuan-ju",dfh:"icon-daifahuo-ju",dsh:"icon-daishouhuo-ju",dpj:"icon-daipingjia-ju",sh:"icon-shouhou-tuikuan-ju"});break;case 4:e.switchTab({dfk:"icon-daifukuan-fen",dfh:"icon-daifahuo-fen",dsh:"icon-daishouhuo-fen",dpj:"icon-daipingjia-fen",sh:"icon-a-shouhoutuikuan-fen"});break;case 5:e.switchTab({dfk:"icon-daifukuan-lv",dfh:"icon-daifahuo-lv",dsh:"icon-daishouhuo-lv",dpj:"icon-daipingjia-lv",sh:"icon-shouhou-tuikuan-lv"});break}t.$set(t,"MyMenus",o),t.$set(t,"storeMenu",n),e.imgUrls=i.data.routine_my_banner,e.routineContact=Number(i.data.routine_contact_type)}))},goEdit:function(){if(0!=this.isLogin&&this.userInfo.uid){if(this.userInfo.is_default_avatar)return void(this.editModal=!0);e.navigateTo({url:"/pages/users/user_set/index"})}else this.isShowAuth=!0},goSignIn:function(){e.navigateTo({url:"/pages/users/user_sgin/index"})},goMenuPage:function(t,i){var n=this;if(this.isLogin){var o=t.split("@APPID=");o.length>1?e.navigateToMiniProgram({appId:o[o.length-1],path:o[0],envVersion:"release",success:function(e){},fail:function(e){}}):"/pages/extension/customer_list/chat"==t||"https://chat.crmeb.net/chat/mobile"==t?this.$util.getCustomer(this.userInfo):-1===t.indexOf("http")?("#"!=t&&"/pages/users/user_set/index"==t&&e.openSetting({success:function(e){}}),"/pages/store_spread/index"==t&&(0,r.storeCardApi)().then((function(e){n.isextension=!0,n.$nextTick((function(){this.extension.code=e.data.url}))})).catch((function(t){e.hideLoading(),n.$util.Tips({title:t})})),-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/store_cate/store_cate","/pages/index/index"].indexOf(t)?e.navigateTo({url:t}):e.reLaunch({url:t})):e.navigateTo({url:"/pages/annex/web_view/index?url=".concat(t)})}}}};t.default=v}).call(this,i("543d")["default"])},"202f":function(e,t,i){"use strict";i.r(t);var n=i("73f0"),o=i("1158");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("d521");var s=i("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=r.exports},2142:function(e,t,i){"use strict";(function(e,t){var n=i("4ea4");i("8824");n(i("66fd"));var o=n(i("202f"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(o.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"73f0":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniBadge:function(){return i.e("uni_modules/uni-badge/components/uni-badge/uni-badge").then(i.bind(null,"2440"))},wBarcode:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/wmf-code/components/w-barcode/index")]).then(i.bind(null,"e647"))},wQrcode:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/wmf-code/components/w-qrcode/index")]).then(i.bind(null,"eba6"))}},o=function(){var e=this,t=e.$createElement,i=(e._self._c,e.userInfo.uid?parseInt(e.userInfo.vip_id):null),n=1==e.member_style&&e.stu&&2==e.vip_type&&1!=e.vipStatus&&3==e.vipStatus?e._f("dateFormat")(e.userInfo.overdue_time):null,o=3==e.member_style&&e.stu&&2==e.vip_type&&1!=e.vipStatus&&3==e.vipStatus?e._f("dateFormat")(e.userInfo.overdue_time):null,a=2==e.member_style&&e.stu&&2==e.vip_type&&1!=e.vipStatus&&3==e.vipStatus?e._f("dateFormat")(e.userInfo.overdue_time):null,s=e.newList.length&&1==e.newcomer_status,r=e.imgUrls.length>0&&e.my_banner_status,u=2==e.menu_status&&e.MyMenus.length,c=1==e.menu_status&&e.MyMenus.length,d=1==e.service_status&&e.storeMenu.length,g=2==e.service_status&&e.storeMenu.length;e.$mp.data=Object.assign({},{$root:{m0:i,f0:n,f1:o,f2:a,g0:s,g1:r,g2:u,g3:c,g4:d,g5:g}})},a=[]},"91d9":function(e,t,i){},d521:function(e,t,i){"use strict";var n=i("91d9"),o=i.n(n);o.a}},[["2142","common/runtime","common/vendor"]]]);