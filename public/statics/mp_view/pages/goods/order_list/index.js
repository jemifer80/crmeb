require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/order_list/index"],{5858:function(t,e,i){"use strict";(function(t,e){var s=i("4ea4");i("8824");s(i("66fd"));var n=s(i("a4f6"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(n.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},6455:function(t,e,i){"use strict";(function(t){var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("79c7"),a=i("99c8"),o=i("aed8"),u=(i("d5f7"),i("26cb")),r=s(i("a29e")),p={components:{Loading:function(){i.e("components/Loading/index").then(function(){return resolve(i("ba9d"))}.bind(null,i)).catch(i.oe)},payment:function(){Promise.all([i.e("common/vendor"),i.e("components/payment/index")]).then(function(){return resolve(i("fb96"))}.bind(null,i)).catch(i.oe)},home:function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("d878"))}.bind(null,i)).catch(i.oe)},emptyPage:function(){i.e("components/emptyPage").then(function(){return resolve(i("781a"))}.bind(null,i)).catch(i.oe)}},mixins:[r.default],data:function(){return{loaded:!1,loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],orderData:{},orderStatus:"",page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"使用线上支付宝支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"当前可用余额：",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,u.mapGetters)(["isLogin"]),onShow:function(){t.removeStorageSync("form_type_cart"),this.page=1,this.loadend=!1,this.orderList=[],this.isLogin?this.getFun():this.isShowAuth=!0},onLoad:function(t){t.status&&(this.orderStatus=void 0==t.status&&0!=t.status?"":parseInt(t.status))},methods:{getFun:function(){this.getOrderData(),this.getOrderList(),this.getUserInfo()},onLoadFun:function(){this.getFun(),this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,s=void 0!=e.value?e.value:null;i&&this[i]&&this[i](s)},getUserInfo:function(){var t=this;(0,a.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},payClose:function(){this.pay_close=!1},getOrderData:function(){var t=this,e=this;(0,n.orderData)().then((function(i){e.$set(e,"orderData",i.data),e.payMode.map((function(t){"weixin"==t.value&&(t.payStatus=!!i.data.pay_weixin_open),"alipay"==t.value&&(t.payStatus=!!i.data.ali_pay_status),"yue"==t.value&&(t.payStatus=1==i.data.yue_pay_status)})),t.payMode[1].payStatus=!1}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少订单号无法取消订单"});(0,n.orderCancel)(e).then((function(e){return i.$util.Tips({title:e.msg,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.$set(this,"pay_order_id",e),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,t.navigateTo({url:"/pages/goods/order_pay_status/index?order_id="+this.pay_order_id+"&msg=支付成功&type=3&totalPrice="+this.totalPrice}),this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(e){if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});t.showLoading({title:"正在加载"}),(0,o.openOrderSubscribe)().then((function(){t.hideLoading(),t.navigateTo({url:"/pages/goods/order_details/index?order_id="+e})})).catch((function(e){t.hideLoading()}))},statusClick:function(t){this.loading||t!==this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加载更多",(0,n.getOrderList)({type:t.orderStatus,page:t.page,limit:t.limit}).then((function(e){var i=e.data||[],s=i.length<t.limit;t.orderList=t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.loadend=s,t.loading=!1,t.loadTitle=s?"没有更多内容啦~":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},delOrder:function(e,i){var s=this;t.showModal({title:"删除订单",content:"确定删除该订单",success:function(t){if(t.confirm)(0,n.orderDel)(e).then((function(t){return s.orderList.splice(i,1),s.$set(s,"orderList",s.orderList),s.$set(s.orderData,"unpaid_count",s.orderData.unpaid_count-1),s.getOrderData(),s.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return s.$util.Tips({title:t})}));else if(t.cancel)return s.$util.Tips({title:"已取消"})}})}},onReachBottom:function(){this.getOrderList()}};e.default=p}).call(this,i("543d")["default"])},"69c3":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.orderList,(function(e,i){var s=t.__get_orig(e),n=9==e._status._type||0==e._status._type||1!=e._status._type||1!=e.shipping_type&&3!=e.shipping_type?null:e.refund.length,a=9==e._status._type||0==e._status._type||1==e._status._type&&(1==e.shipping_type||3==e.shipping_type)||1!=e._status._type||2!=e.shipping_type&&4!=e.shipping_type?null:e.refund.length,o=9!=e._status._type&&0!=e._status._type&&(1!=e._status._type||1!=e.shipping_type&&3!=e.shipping_type)&&(1!=e._status._type||2!=e.shipping_type&&4!=e.shipping_type)&&2==e._status._type?e.refund.length:null,u=9!=e._status._type&&0!=e._status._type&&(1!=e._status._type||1!=e.shipping_type&&3!=e.shipping_type)&&(1!=e._status._type||2!=e.shipping_type&&4!=e.shipping_type)&&2!=e._status._type&&3==e._status._type?e.refund.length:null,r=9!=e._status._type&&0!=e._status._type&&(1!=e._status._type||1!=e.shipping_type&&3!=e.shipping_type)&&(1!=e._status._type||2!=e.shipping_type&&4!=e.shipping_type)&&2!=e._status._type&&3!=e._status._type&&4==e._status._type?e.refund.length:null,p=9!=e._status._type&&0!=e._status._type&&(1!=e._status._type||1!=e.shipping_type&&3!=e.shipping_type)&&(1!=e._status._type||2!=e.shipping_type&&4!=e.shipping_type)&&2!=e._status._type&&3!=e._status._type&&4!=e._status._type&&-2!=e._status._type&&5==e._status._type&&0==e.status?e.refund.length:null,d=9==e._status._type||0==e._status._type||1==e._status._type&&(1==e.shipping_type||3==e.shipping_type)||1==e._status._type&&(2==e.shipping_type||4==e.shipping_type)||2==e._status._type||3==e._status._type||4==e._status._type||-2==e._status._type||5==e._status._type&&0==e.status||5!=e._status._type||5!=e.status?null:e.refund.length;return{$orig:s,g0:n,g1:a,g2:o,g3:u,g4:r,g5:p,g6:d}}))),s=t.orderList.length,n=0==t.orderList.length&&!t.loading;t.$mp.data=Object.assign({},{$root:{l0:i,g7:s,g8:n}})},n=[]},"9ab6":function(t,e,i){"use strict";i.r(e);var s=i("6455"),n=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},"9cc1":function(t,e,i){},a4f6:function(t,e,i){"use strict";i.r(e);var s=i("69c3"),n=i("9ab6");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("e0d9");var o=i("f0c5"),u=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"e81f14a4",null,!1,s["a"],void 0);e["default"]=u.exports},e0d9:function(t,e,i){"use strict";var s=i("9cc1"),n=i.n(s);n.a}},[["5858","common/runtime","common/vendor"]]]);