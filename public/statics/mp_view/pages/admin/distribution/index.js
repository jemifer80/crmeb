require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/distribution/index"],{3566:function(t,i,e){},"3c57":function(t,i,e){"use strict";(function(t,i){var n=e("4ea4");e("8824");n(e("66fd"));var s=n(e("509b"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(s.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"464e":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=(t._self._c,"list"==t.footer?t.__map(t.orderlist,(function(i,e){var n=t.__get_orig(i),s=t.orderlist.length;return{$orig:n,g0:s}})):null),n="list"==t.footer?!t.orderlist.length&&!t.loading:null;t.$mp.data=Object.assign({},{$root:{l0:e,g1:n}})},s=[]},"509b":function(t,i,e){"use strict";e.r(i);var n=e("464e"),s=e("d4de");for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("bf8d");var o=e("f0c5"),d=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"7cc3fe41",null,!1,n["a"],void 0);i["default"]=d.exports},"88cd":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("5a52"),s=e("5f9b"),a={name:"adminOrder",components:{Loading:function(){e.e("components/Loading/index").then(function(){return resolve(e("ba9d"))}.bind(null,e)).catch(e.oe)}},data:function(){return{hidden:!0,index:0,detailtabs:"today",footer:"list",type:"1",arrays:[],array:[],storeInfoid:0,census:{},list:[],orderlist:[],count:{},page:1,limit:15,loaded:!1,loading:!1,user:{},ids:"",verify_code:"",imgHost:s.HTTP_REQUEST_URL}},onLoad:function(){this.userInfo(),this.footerTab("list")},methods:{userInfo:function(){var t=this;(0,n.deliveryInfo)().then((function(i){t.user=i.data,t.array=i.data.store_info.map((function(t){return t})),t.arrays=i.data.store_info.map((function(t){return t.name}));var e={id:0,name:"全部"};t.array.unshift(e),t.arrays.unshift(e.name)}))},getStatistics:function(){var t=this,i={store_id:this.storeInfoid,data:this.detailtabs};(0,n.deliveryStatistics)(i).then((function(i){t.census=i.data}))},deliveryLists:function(){var t=this,i={page:this.page,limit:this.limit,store_id:this.storeInfoid,data:this.detailtabs};this.loading||this.loaded||(this.loading=!0,(0,n.deliveryList)(i).then((function(i){t.loading=!1,t.loaded=i.data.length<t.limit,t.page+=1,t.list.push.apply(t.list,i.data)})))},getOrderList:function(){var t=this;this.loading||this.loaded||(this.loading=!0,(0,n.deliveryOrderList)({type:this.type,page:this.page,limit:this.limit}).then((function(i){t.loading=!1,t.count=i.data.data,t.loaded=i.data.list.length<t.limit,t.page+=1,t.orderlist.push.apply(t.orderlist,i.data.list)})))},init:function(){this.orderlist=[],this.list=[],this.page=1,this.loaded=!1,this.loading=!1},to:function(){var i=this;t.scanCode({scanType:["qrCode","barCode"],success:function(t){i.verify_code=t.result,i.codeChange()},fail:function(t){}})},codeChange:function(){var i=this;return this.verify_code?/^[0-9]*$/.test(this.verify_code)?(i.$util.Tips({title:"查询中"}),void setTimeout((function(){(0,n.orderWriteoffInfo)(2,{verify_code:i.verify_code,code_type:2}).then((function(e){200==e.status?t.navigateTo({url:"./scanning/index?code="+i.verify_code}):i.$util.Tips({title:e.msg})})).catch((function(t){i.$util.Tips({title:t})}))}),800)):i.$util.Tips({title:"请输入正确的核销码"}):i.$util.Tips({title:"请输入核销码"})},footerTab:function(t){this.footer=t,this.init(),"tongji"==t&&(this.deliveryLists(),this.getStatistics()),"list"==t&&this.getOrderList()},tab:function(t){this.type=t,this.init(),this.getOrderList()},hiddened:function(t){this.hidden=!this.hidden},cancel:function(){this.hidden=!this.hidden},bindPickerChange:function(t){this.hidden=!this.hidden,this.index=t.target.value,this.storeInfoid=this.array[this.index].id,this.init(),this.getStatistics(),this.deliveryLists()},detailtab:function(t){this.detailtabs=t,this.init(),this.deliveryLists(),this.getStatistics()},jump:function(i){t.navigateTo({url:"orderDetail/index?id="+i})}},onReachBottom:function(){"tongji"==this.footer&&this.deliveryList(),"list"==this.footer&&this.getOrderList()}};i.default=a}).call(this,e("543d")["default"])},bf8d:function(t,i,e){"use strict";var n=e("3566"),s=e.n(n);s.a},d4de:function(t,i,e){"use strict";e.r(i);var n=e("88cd"),s=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a}},[["3c57","common/runtime","common/vendor"]]]);