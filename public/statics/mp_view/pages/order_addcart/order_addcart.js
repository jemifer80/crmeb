(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_addcart/order_addcart"],{"28ab":function(t,i,e){"use strict";(function(t,i){var o=e("4ea4");e("8824");o(e("66fd"));var n=o(e("7f6c"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(n.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"2a8a":function(t,i,e){"use strict";(function(t,o){var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var c=n(e("448a")),a=e("79c7"),s=e("53c2"),r=e("78a2"),u=(e("d5f7"),e("26cb")),l=n(e("a29e")),d=e("5f9b"),h=e("9357"),f=t.getSystemInfoSync().statusBarHeight,p={components:{couponListWindow:function(){Promise.all([e.e("common/vendor"),e.e("components/couponListWindow/index")]).then(function(){return resolve(e("717c"))}.bind(null,e)).catch(e.oe)},pageFooter:function(){Promise.all([e.e("common/vendor"),e.e("components/pageFooter/index")]).then(function(){return resolve(e("9f8d"))}.bind(null,e)).catch(e.oe)},recommend:function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("6019"))}.bind(null,e)).catch(e.oe)},productWindow:function(){e.e("components/productWindow/index").then(function(){return resolve(e("82c0"))}.bind(null,e)).catch(e.oe)},cartDiscount:function(){e.e("components/cartDiscount/index").then(function(){return resolve(e("db13"))}.bind(null,e)).catch(e.oe)}},mixins:[l.default],data:function(){return{isFooter:!1,isTips:!1,coupon:{coupon:!1,type:-1,list:[],count:[],goFrom:1},discountInfo:{discount:!1,deduction:{},coupon:{}},goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!1,selectValue:[],selectCountPrice:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,loading:!1,loadend:!1,loadTitle:"没有更多内容啦~",page:1,limit:20,loadingInvalid:!1,loadendInvalid:!1,loadTitleInvalid:"加载更多",pageInvalid:1,limitInvalid:20,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],storeInfo:{},attrValue:"",attrTxt:"请选择",cartId:0,product_id:0,sysHeight:f,footerSee:!1,isCart:0,imgHost:d.HTTP_REQUEST_URL,is_vip:0}},computed:(0,u.mapGetters)(["isLogin","cartNum"]),onLoad:function(t){this.hotPage=1,this.hostProduct=[],this.hotScroll=!1,this.getHostProduct()},onShow:function(){t.setStorageSync("form_type_cart",1),t.pageScrollTo({duration:0,scrollTop:0}),1==this.isLogin?this.resetData():this.isShowAuth=!0},methods:{onLoadFun:function(){this.resetData()},resetData:function(){this.loadend=!1,this.page=1,this.cartList.valid=[],this.getCartList(),this.loadendInvalid=!1,this.pageInvalid=1,this.cartList.invalid=[],this.goodsHidden=!0,this.footerswitch=!0,this.hotLimit=10,this.isAllSelect=!1,this.selectValue=[],this.selectCountPrice=0,this.isShowAuth=!1},newDataStatus:function(t){this.isFooter=t},tabCouponType:function(t){this.$set(this.coupon,"type",t),this.getCouponList(t)},ChangCouponsUseState:function(t){this.coupon.list[t].is_use=!0,this.$set(this.coupon,"list",this.coupon.list),this.$set(this.coupon,"coupon",!1)},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},getCouponList:function(t){var i=this,e={page:1,limit:20,product_id:i.id};void 0===t&&null===t||(e.type=t),(0,s.getCoupons)(e).then((function(e){if(i.$set(i.coupon,"count",e.data.count),void 0===t||null===t){var o=(0,c.default)(i.coupon.count),n="",a=o.findIndex((function(t){return t})),s=i.coupon.count,r=[],u=0;s.forEach((function(t,i){0===t?u=i:r.push(t)})),n=3==r.length?2:2==r.length?2===u?1:2:s.findIndex((function(t){return t===o[a]})),i.$set(i.coupon,"type",n),i.getCouponList(n)}else i.$set(i.coupon,"list",e.data.list)}))},couponTap:function(){this.getCouponList(),this.$set(this.coupon,"coupon",!0)},goCollect:function(i){t.navigateTo({url:"/pages/goods/goods_list/index?sid=0&title=默认&promotions_type=".concat(i.promotions_type,"&promotions_id=").concat(i.id)})},myDiscount:function(){this.discountInfo.discount=!1},discountTap:function(){this.coupon.coupon=!1,this.discountInfo.discount=!this.discountInfo.discount},authColse:function(t){this.isShowAuth=t},reGoCat:function(){var t=this,i=t.productValue[this.attrValue];if(t.attr.productAttr.length&&void 0===i)return t.$util.Tips({title:"产品库存不足，请选择其它"});var e={id:t.cartId,product_id:t.product_id,num:t.attr.productSelect.cart_num,unique:void 0!==t.attr.productSelect?t.attr.productSelect.unique:""};(0,a.getResetCart)(e).then((function(i){t.attr.cartAttr=!1,t.$util.Tips({title:"添加购物车成功",success:function(){t.loadend=!1,t.page=1,t.cartList.valid=[],t.getCartList(),t.getCartNum()}})})).catch((function(i){return t.$util.Tips({title:i.msg})}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},cartAttr:function(t){this.isCart=1,this.getGoodsDetails(t)},reElection:function(t){this.getGoodsDetails(t)},getGoodsDetails:function(i){t.showLoading({title:"加载中",mask:!0});var e=this;e.cartId=i.id,e.product_id=i.product_id,(0,r.getProductDetail)(i.product_id).then((function(i){t.hideLoading(),e.attr.cartAttr=!0;var o=i.data.storeInfo;e.$set(e,"storeInfo",o),e.$set(e,"is_vip",i.data.storeInfo.is_vip),e.$set(e.attr,"productAttr",i.data.productAttr),e.$set(e,"productValue",i.data.productValue),e.DefaultSelect()})).catch((function(i){t.hideLoading()}))},ChangeAttr:function(t){var i=this.productValue[t];i&&i.stock>0?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},DefaultSelect:function(){var t=this,i=this.attr.productAttr,e=[],o=0,n=[];for(var c in this.productValue)if(this.productValue[c].stock>0){e=this.attr.productAttr.length?c.split(","):[];break}if(this.isCart){this.cartList.valid.forEach((function(i){i.valid.forEach((function(i){i.id==t.cartId&&(n=i.productInfo.attrInfo.suk.split(","))}))}));var a=n.join(",");o=this.productValue[a].stock;for(var s=0;s<i.length;s++)this.$set(i[s],"index",o?n[s]:e[s])}else for(var r=0;r<i.length;r++)this.$set(i[r],"index",e[r]);var u=this.productValue[this.isCart&&o?n.join(","):e.join(",")];u&&i.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",u.image),this.$set(this.attr.productSelect,"price",u.price),this.$set(this.attr.productSelect,"stock",u.stock),this.$set(this.attr.productSelect,"unique",u.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",e.join(",")),this.$set(this.attr.productSelect,"vip_price",u.vip_price),this.$set(this,"attrTxt","已选择")):!u&&i.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):u||i.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeCartNum:function(t){var i=this.productValue[this.attrValue];if(void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){var e=i.stock||0,o=this.attr.productSelect;t?(o.cart_num++,o.cart_num>e&&(this.$set(this.attr.productSelect,"cart_num",e||1),this.$set(this,"cart_num",e||1))):(o.cart_num--,o.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},subDel:function(t){var i=this,e=i.selectValue;if(!(e.length>0))return i.$util.Tips({title:"请选择产品"});(0,a.cartDel)(e).then((function(t){i.loadend=!1,i.page=1,i.cartList.valid=[],i.getCartList(),i.getCartNum()}))},getSelectValueProductId:function(){var t=this.cartList.valid,i=this.selectValue,e=[];if(i.length>0)for(var o in t)for(var n in t[o].valid)this.inArray(t[o].valid[n].id,i)&&e.push(t[o].valid[n].product_id);return e},subCollect:function(t){var i=this,e=i.selectValue;if(!(e.length>0))return i.$util.Tips({title:"请选择产品"});i.getSelectValueProductId();(0,r.collectAll)(i.getSelectValueProductId().join(",")).then((function(t){return i.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},subOrder:function(i){var e=this,o=e.selectValue;if(!(o.length>0))return e.$util.Tips({title:"请选择产品"});var n=this.discountInfo.coupon;if("[object Object]"!==Object.prototype.toString.call(n)||n.used){var c="";c="[object Array]"===Object.prototype.toString.call(n)?"/pages/goods/order_confirm/index?cartId="+o.join(","):"/pages/goods/order_confirm/index?cartId="+o.join(",")+"&couponId="+n.used.id+"&couponTitle="+n.coupon_title,t.navigateTo({url:c})}else(0,s.setCouponReceive)(this.discountInfo.coupon.id).then((function(i){t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+o.join(",")+"&couponId="+i.data.id+"&couponTitle="+n.coupon_title})})).catch((function(t){return e.$util.Tips({title:t})}))},checkboxAllChange:function(t){var i=t.detail.value;i.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var i=this,e=[],o=i.cartList.valid;o.length>0&&(o.forEach((function(o){o.valid.forEach((function(o){t?(i.footerswitch?o.attrStatus&&!o.is_gift?(o.checked=!0,e.push(o.id)):o.checked=!1:(o.checked=!0,e.push(o.id)),i.isAllSelect=!0):(o.checked=!1,i.isAllSelect=!1)}))})),i.$set(i.cartList,"valid",o),i.selectValue=e,i.switchSelect())},checkboxChange:function(t){var i=this,e=t.detail.value,o=i.cartList.valid,n=[],c=[],a=[],s=0;o.forEach((function(t){t.valid.forEach((function(t){s+=1,i.inArray(t.id,e)?i.footerswitch?t.attrStatus&&!t.is_gift?(t.checked=!0,n.push(t)):t.checked=!1:(t.checked=!0,n.push(t)):(t.checked=!1,c.push(t))}))})),i.footerswitch&&(a=c.filter((function(t){return!t.attrStatus||t.is_gift}))),i.$set(i.cartList,"valid",o),i.isAllSelect=s===n.length+a.length,i.selectValue=e,i.switchSelect()},inArray:function(t,i){for(var e in i)if(i[e]==t)return!0;return!1},switchSelect:function(){var t=this.cartList.valid,i=this.selectValue,e=0,o=[];if(i.length<1)this.selectCountPrice=e;else{for(var n in t)for(var c in t[n].valid)this.inArray(t[n].valid[c].id,i)&&(o.push(t[n].valid[c].id),e=this.$util.$h.Add(e,this.$util.$h.Mul(t[n].valid[c].cart_num,t[n].valid[c].truePrice)));this.selectCountPrice=e}var a={cartId:o.join(",")};o.length&&this.getCartCompute(a)},subCart:(0,h.Debounce)((function(t,i){var e=this,o=!1,n=e.cartList.valid[t].valid[i];n.cart_num=Number(n.cart_num)-1,n.cart_num<1&&(o=!0),n.cart_num<=1?(n.cart_num=1,n.numSub=!0):(n.numSub=!1,n.numAdd=!1),0==o&&e.setCartNum(n.id,n.cart_num,(function(o){e.cartList.valid[t].valid[i]=n,e.getCartNum(),e.loadend=!1,e.page=1,e.getCartList("subCart")}))})),addCart:(0,h.Debounce)((function(t,i,e){if(e.numAdd||e.productInfo.limit_num>0&&e.cart_num>=e.productInfo.limit_num)return!1;var o=this,n=o.cartList.valid[t].valid[i];n.cart_num=Number(n.cart_num)+1;var c=n.productInfo;c.hasOwnProperty("attrInfo")&&n.cart_num>=n.productInfo.attrInfo.stock?(n.cart_num=n.productInfo.attrInfo.stock,n.numAdd=!0,n.numSub=!1):(n.numAdd=!1,n.numSub=!1),o.setCartNum(n.id,n.cart_num,(function(e){o.cartList.valid[t].valid[i]=n,o.getCartNum(),o.loadend=!1,o.page=1,o.getCartList("addCart")}))})),setCartNum:function(t,i,e){(0,a.changeCartNum)(t,i).then((function(t){e&&e(t.data)}))},getCartNum:function(){var t=this;(0,a.getCartCounts)(0).then((function(i){t.$store.commit("indexData/setCartNum",i.data.count>99?"..":i.data.count),i.data.count>0?o.setTabBarBadge({index:2,text:i.data.count+""}):o.hideTabBarRedDot({index:2})}))},getCartCompute:function(t){var i=this;(0,a.cartCompute)(t).then((function(t){i.discountInfo.coupon=t.data.coupon,i.discountInfo.deduction=t.data.deduction})).catch((function(t){i.$util.Tips({title:t})}))},getCartList:function(t){var i=this,e=this;if(this.loadend)return!1;if(this.loading)return!1;var o={page:e.page,limit:e.limit,status:1};(0,a.getCartList)(o).then((function(o){i.getInvalidList(),i.isTips=!1;var n=o.data.valid,c=n.map((function(t){return{valid:t.cart,promotions:t.promotions}})),a=c.length<e.limit,s=c,r=[];if(s.length>0)for(var u in s)for(var l in s[u].promotions.length>1&&(e.isTips=!0),s[u].valid){1==s[u].valid[l].cart_num?s[u].valid[l].numSub=!0:s[u].valid[l].numSub=!1;var d=s[u].valid[l].productInfo;if(d.hasOwnProperty("attrInfo")&&s[u].valid[l].cart_num==s[u].valid[l].productInfo.attrInfo.stock||s[u].valid[l].cart_num==s[u].valid[l].productInfo.stock?s[u].valid[l].numAdd=!0:s[u].valid[l].numAdd=!1,s[u].valid[l].attrStatus&&!s[u].valid[l].is_gift)if(["addCart","subCart"].includes(t)){s[u].valid[l].checked=!1;for(var h=0;h<e.selectValue.length;h++)if(e.selectValue[h]==s[u].valid[l].id){s[u].valid[l].checked=!0;break}s[u].valid[l].checked&&r.push(s[u].valid[l].id)}else s[u].valid[l].checked=!0,r.push(s[u].valid[l].id);else i.footerswitch?s[u].valid[l].checked=!1:s[u].valid[l].checked=!0}e.$set(e.cartList,"valid",o.data.valid.length?s:[]),e.loadend=!0,e.loadTitle=a?"没有更多内容啦~":"加载更多",e.page=e.page+1,e.loading=!1,e.selectValue=r;var f=[];s.forEach((function(t){t.valid.forEach((function(t){t.attrStatus&&!t.is_gift&&f.push(t)}))})),e.isAllSelect=f.length==r.length&&f.length,e.switchSelect()})).catch((function(t){e.loading=!1,e.loadTitle="加载失败",e.$util.Tips({title:t})}))},getInvalidList:function(){var t=this;if(this.loadendInvalid)return!1;if(this.loadingInvalid)return!1;var i={page:t.pageInvalid,limit:t.limitInvalid,status:0};(0,a.getCartList)(i).then((function(i){var e=i.data,o=e.invalid,n=o.length<t.limitInvalid,c=o;t.$set(t.cartList,"invalid",c),t.loadendInvalid=n,t.loadTitleInvalid=n?"没有更多内容啦~":"加载更多",t.pageInvalid=t.pageInvalid+1,t.loadingInvalid=!1})).catch((function(i){t.loadingInvalid=!1,t.loadTitleInvalid="加载更多"}))},getHostProduct:function(){var t=this;t.hotScroll||(0,r.getProductHot)(t.hotPage,t.hotLimit).then((function(i){t.hotPage++,t.hotScroll=i.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(i.data)}))},goodsOpen:function(){this.goodsHidden=!this.goodsHidden},manage:function(){var t=this;t.footerswitch=!t.footerswitch;var i=[],e=[],o=0;t.cartList.valid.forEach((function(n){n.valid.forEach((function(n){o+=1,t.footerswitch?n.attrStatus&&!n.is_gift?n.checked&&i.push(n.id):(n.checked=!1,e.push(n)):n.checked&&i.push(n.id)}))})),t.footerswitch?t.isAllSelect=o===i.length+e.length:t.isAllSelect=o===i.length,t.selectValue=i,t.footerswitch&&t.switchSelect()},unsetCart:function(){for(var t=this,i=[],e=0,o=t.cartList.invalid.length;e<o;e++)i.push(t.cartList.invalid[e].id);(0,a.cartDel)(i).then((function(i){t.$util.Tips({title:"清除成功"}),t.$set(t.cartList,"invalid",[]),t.getCartNum()})).catch((function(t){}))}},onReachBottom:function(){this.cartList.invalid.length&&this.getInvalidList(),0==this.cartList.valid.length&&0==this.cartList.invalid.length&&this.getHostProduct()}};i.default=p}).call(this,e("543d")["default"],e("bc2e")["default"])},"7f6c":function(t,i,e){"use strict";e.r(i);var o=e("a768"),n=e("c2fc");for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(c);e("b556");var a=e("f0c5"),s=Object(a["a"])(n["default"],o["b"],o["c"],!1,null,"02b26047",null,!1,o["a"],void 0);i["default"]=s.exports},a768:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var o=function(){var t=this,i=t.$createElement,e=(t._self._c,t.cartList.valid.length>0||t.cartList.invalid.length>0),o=t.cartList.valid.length>0||t.cartList.invalid.length>0,n=o?t.cartList.valid.length&&"[object Object]"===Object.prototype.toString.call(t.discountInfo.coupon):null,c=o?t.cartList.invalid.length:null,a=0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.loadend,s=0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.loadend,r=t.cartList.valid.length,u=r>0&&1==t.footerswitch&&t.discountInfo.deduction?t.selectValue.length:null,l=r>0&&1==t.footerswitch&&t.discountInfo.deduction?("[object Object]"===Object.prototype.toString.call(t.discountInfo.coupon)||t.discountInfo.deduction.first_order_price||t.discountInfo.deduction.promotions_price)&&t.selectValue.length:null,d=r>0&&1==t.footerswitch&&t.discountInfo.deduction?t.selectValue.length:null,h=r>0&&1==t.footerswitch&&t.discountInfo.deduction&&d?"[object Array]"===Object.prototype.toString.call(t.discountInfo.coupon)||t.discountInfo.coupon.used:null,f=r>0&&1==t.footerswitch&&t.discountInfo.deduction&&d?t.selectValue.length:null,p=r>0&&1==t.footerswitch&&t.discountInfo.deduction&&!d?"[object Array]"===Object.prototype.toString.call(t.discountInfo.coupon)||t.discountInfo.coupon.used:null,v=r>0&&1==t.footerswitch&&t.discountInfo.deduction&&!d?t.selectValue.length:null;t.$mp.data=Object.assign({},{$root:{g0:e,g1:o,g2:n,g3:c,g4:a,g5:s,g6:r,g7:u,g8:l,g9:d,g10:h,g11:f,g12:p,g13:v}})},n=[]},b556:function(t,i,e){"use strict";var o=e("f421"),n=e.n(o);n.a},c2fc:function(t,i,e){"use strict";e.r(i);var o=e("2a8a"),n=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(c);i["default"]=n.a},f421:function(t,i,e){}},[["28ab","common/runtime","common/vendor"]]]);