require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/lottery/grids/index"],{"6c37":function(t,e,o){},"72be":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.lotteryShow&&t.loading?t.userList.data.length:null),n=t.lotteryShow&&t.loading?t.userList.data.length&&t.is_all_record:null,a=t.lotteryShow&&t.loading?t.myList.data.length&&t.is_personal_record:null;t._isMounted||(t.e0=function(){t.addressModel=!1}),t.$mp.data=Object.assign({},{$root:{g0:o,g1:n,g2:a}})},a=[]},"8cf6":function(t,e,o){"use strict";(function(t,e){var n=o("4ea4");o("8824");n(o("66fd"));var a=n(o("c5d9"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(a.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},"8fd6":function(t,e,o){"use strict";(function(t){var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("4b75"),i=(o("99c8"),n(o("a29e"))),r=(o("d5f7"),o("26cb")),d=o("5f9b"),s=(getApp(),{components:{gridsLottery:function(){Promise.all([o.e("pages/goods/common/vendor"),o.e("pages/goods/components/lottery/index")]).then(function(){return resolve(o("6afb"))}.bind(null,o)).catch(o.oe)},showBox:function(){o.e("pages/goods/lottery/components/showbox").then(function(){return resolve(o("806e"))}.bind(null,o)).catch(o.oe)},noticeBar:function(){o.e("pages/goods/lottery/components/noticeBar").then(function(){return resolve(o("4e0d"))}.bind(null,o)).catch(o.oe)},lotteryAleart:function(){o.e("pages/goods/components/lotteryAleart/index").then(function(){return resolve(o("9003"))}.bind(null,o)).catch(o.oe)},userAddress:function(){Promise.all([o.e("common/vendor"),o.e("pages/goods/components/userAddress/index")]).then(function(){return resolve(o("02f1"))}.bind(null,o)).catch(o.oe)},zbCode:function(){Promise.all([o.e("common/vendor"),o.e("components/zb-code/zb-code")]).then(function(){return resolve(o("0657"))}.bind(null,o)).catch(o.oe)},home:function(){Promise.all([o.e("common/vendor"),o.e("components/home/index")]).then(function(){return resolve(o("d878"))}.bind(null,o)).catch(o.oe)}},mixins:[i.default],data:function(){return{lotteryShow:!0,loading:!1,H5ShareBox:!1,addressModel:!1,lottery_num:0,aleartType:0,aleartStatus:!1,lottery_draw_param:{startIndex:3,totalCount:3,winingIndex:1,speed:100},userList:{type:"user",data:[]},myList:{type:"me",data:[]},htmlData:{type:"html",data:""},prize:[],factor_num:0,id:0,alData:{},type:"",followCode:!1,codeShow:!1,cid:"1",ifShow:!0,val:"",lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",image:"",is_content:0,is_all_record:0,is_personal_record:0,factor:0,imgHost:d.HTTP_REQUEST_URL,isShowAuth:!1}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){},deep:!0}},onLoad:function(t){this.type=t.type,this.isLogin&&this.getLotteryData(this.type)},onShow:function(){t.removeStorageSync("form_type_cart"),this.isLogin||(this.isShowAuth=!0)},methods:{onLoadFun:function(){this.getLotteryData(this.type),this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},getLotteryData:function(e){var o=this;t.showLoading({title:"获取抽奖信息"}),(0,a.getLotteryData)(e).then((function(e){o.loading=!0,o.factor_num=e.data.lottery.factor_num,o.id=e.data.lottery.id,o.image=e.data.lottery.image,o.prize=e.data.lottery.prize,o.lottery_num=e.data.lottery_num,o.htmlData.data=e.data.lottery.content,o.is_content=e.data.lottery.is_content,o.is_personal_record=e.data.lottery.is_personal_record,o.is_all_record=e.data.lottery.is_all_record,o.factor=e.data.lottery.factor,o.userList.data=e.data.all_record,o.myList.data=e.data.user_record,o.prize.push({}),t.hideLoading()})).catch((function(e){t.hideLoading(),o.lotteryShow=!1,o.loading=!0,o.$util.Tips({title:e})}))},closeLottery:function(t){this.aleartStatus=!1,this.getLotteryData(this.type),6===this.alData.type&&(this.addressModel=!0)},getAddress:function(t){var e=this,o=t;o.id=this.alData.lottery_record_id,o.address=t.address.province+t.address.city+t.address.district+t.detail,(0,a.receiveLottery)(o).then((function(t){e.$util.Tips({title:"领取成功"}),e.addressModel=!1})).catch((function(t){e.$util.Tips({title:t})}))},getWiningIndex:function(t){var e=this;this.aleartType=0;var o=this;(0,a.startLottery)({id:this.id,type:this.type}).then((function(n){if("subscribe"===n.data.code)return o.$set(o,"followCode",!0),void(e.codeSrc=n.data.url);e.prize.forEach((function(o,a){n.data.id===o.id&&(e.alData=n.data,e.lottery_draw_param.winingIndex=a,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))},luck_draw_finish:function(t){this.aleartType=2,this.aleartStatus=!0},qrR:function(t){this.codeSrc=t}}});e.default=s}).call(this,o("543d")["default"])},c5d9:function(t,e,o){"use strict";o.r(e);var n=o("72be"),a=o("e433");for(var i in a)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("c640");var r=o("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1f2f495d",null,!1,n["a"],void 0);e["default"]=d.exports},c640:function(t,e,o){"use strict";var n=o("6c37"),a=o.n(n);a.a},e433:function(t,e,o){"use strict";o.r(e);var n=o("8fd6"),a=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a}},[["8cf6","common/runtime","common/vendor","pages/goods/common/vendor"]]]);