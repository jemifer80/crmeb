require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_vip/index"],{"0bc6":function(e,t,n){},"11aa":function(e,t,n){"use strict";var o=n("0bc6"),a=n.n(o);a.a},"3d4f":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.VipList,(function(t,n){var o=e.__get_orig(t),a=parseFloat(t.discount),i=t.grade===e.levelInfo.grade?Math.floor(e.levelInfo.exp/t.next_exp_num>1?100:e.levelInfo.exp/t.next_exp_num*100):null,l=!e.levelInfo.grade||t.grade>e.levelInfo.grade?Math.floor(e.levelInfo.exp/t.exp_num*100):null;return{$orig:o,m0:a,g0:i,g1:l}}))),o=e.hostProduct.length;e.$mp.data=Object.assign({},{$root:{l0:n,g2:o}})},a=[]},"5f4b":function(e,t,n){"use strict";n.r(t);var o=n("3d4f"),a=n("f51c");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("11aa");var l=n("f0c5"),r=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"1ea3c878",null,!1,o["a"],void 0);t["default"]=r.exports},"765a":function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("8824");o(n("66fd"));var a=o(n("5f4b"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},eefa:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("99c8"),a=n("78a2"),i=(n("d5f7"),n("26cb")),l=n("5f9b"),r={components:{recommend:function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("6019"))}.bind(null,n)).catch(n.oe)}},data:function(){return{imgHost:l.HTTP_REQUEST_URL,reach_count:0,VipList:[],swiperIndex:0,growthValue:!0,task:[],illustrate:"",level_id:0,hostProduct:[],grade:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,level_title:"",level_discount:"",levelInfo:{},task_list:[{real_name:"积分数",number:0},{real_name:"消费金额",number:0},{real_name:"优惠券",number:0}],userInfo:{},taskInfo:{},is_open_member:!1}},computed:(0,i.mapGetters)(["isLogin"]),watch:{VipList:function(){var e=this;e.VipList.length>0&&e.VipList.forEach((function(t,n){!1===t.is_clear&&(e.activeIndex=n,e.grade=t.grade)}))},isLogin:{handler:function(e,t){},deep:!0}},onLoad:function(){this.get_host_product(),this.isLogin?(this.setLeveLComplete(),this.getlevelInfo(),this.getUserInfo()):this.isShowAuth=!0;var e=this;setTimeout((function(){e.loading=!0}),500)},onShow:function(){e.removeStorageSync("form_type_cart")},methods:{getUserInfo:function(){var e=this;(0,o.getUserInfo)().then((function(t){e.is_open_member=t.data.is_open_member,e.task_list=[{real_name:"积分数",number:t.data.integral},{real_name:"消费金额",number:t.data.orderStatusSum},{real_name:"优惠券",number:t.data.couponCount}]}))},getlevelInfo:function(){var e=this;(0,o.getlevelInfo)().then((function(t){var n=t.data,o=n.level_info,a=n.level_list,i=n.task,l=n.user;e.levelInfo=o,e.VipList=a,e.userInfo=l,e.taskInfo=i,e.levelInfo.exp=parseFloat(e.levelInfo.exp),e.levelInfo.rate=Math.floor(e.levelInfo.exp/e.levelInfo.exp_num*100),e.levelInfo.rate>100&&(e.levelInfo.rate=100);var r=a.findIndex((function(e){var t=e.grade;return t===o.grade}));-1!==r&&(e.swiperIndex=r)}))},onLoadFun:function(){this.setLeveLComplete(),this.getlevelInfo(),this.getUserInfo(),this.isShowAuth=!1},authColse:function(e){this.isShowAuth=e},get_host_product:function(){var e=this;e.hotScroll||(0,a.getProductHot)(e.hotPage,e.hotLimit).then((function(t){e.hotPage++,e.hotScroll=t.data.length<e.hotLimit,e.hostProduct=e.hostProduct.concat(t.data)}))},swiperChange:function(e){var t=e.detail.current;this.swiperIndex=t,this.level_id=this.VipList[t].id||0,this.level_title=this.VipList[t].name||"",this.level_discount=this.VipList[t].discount||""},growthValueClose:function(){this.growthValue=!0},opHelp:function(e){this.growthValue=!1,this.illustrate=this.task[e].illustrate},setLeveLComplete:function(){(0,o.userLevelDetection)().then((function(e){}))},getVipList:function(){var e=this;(0,o.userLevelGrade)().then((function(t){e.$set(e,"VipList",t.data.list),e.task=t.data.task.task,e.reach_count=t.data.task.reach_count,e.level_id=t.data.list[0]?t.data.list[0].id:0,e.level_title=t.data.list[0]?t.data.list[0].name:"",e.level_discount=t.data.list[0]?t.data.list[0].discount:""}))},getTask:function(){var e=this;(0,o.userLevelTask)(e.level_id).then((function(t){e.task=t.data.task,e.reach_count=t.data.reach_count}))}},onReachBottom:function(){this.get_host_product()}};t.default=r}).call(this,n("543d")["default"])},f51c:function(e,t,n){"use strict";n.r(t);var o=n("eefa"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a}},[["765a","common/runtime","common/vendor"]]]);