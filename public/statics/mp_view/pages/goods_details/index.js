(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_details/index"],{"02d0":function(t,e,i){"use strict";(function(t,e){var o=i("4ea4");i("8824");o(i("66fd"));var s=o(i("abe2"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(s.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"04c9":function(t,e,i){"use strict";(function(t,o){var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("448a")),r=i("78a2"),c=i("99c8"),a=i("53c2"),u=i("79c7"),l=(i("d5f7"),i("26cb")),d=i("ace8"),h=(i("2f2d"),s(i("e338")),i("5f9b")),p=i("9357"),f=s(i("a29e")),g=t.getSystemInfoSync().statusBarHeight,m=getApp(),v={components:{zbCode:function(){Promise.all([i.e("common/vendor"),i.e("components/zb-code/zb-code")]).then(function(){return resolve(i("0657"))}.bind(null,i)).catch(i.oe)},productConSwiper:function(){i.e("components/productConSwiper/index").then(function(){return resolve(i("4550"))}.bind(null,i)).catch(i.oe)},couponListWindow:function(){Promise.all([i.e("common/vendor"),i.e("components/couponListWindow/index")]).then(function(){return resolve(i("717c"))}.bind(null,i)).catch(i.oe)},productWindow:function(){i.e("components/productWindow/index").then(function(){return resolve(i("82c0"))}.bind(null,i)).catch(i.oe)},userEvaluation:function(){i.e("components/userEvaluation/index").then(function(){return resolve(i("56cf"))}.bind(null,i)).catch(i.oe)},shareRedPackets:function(){i.e("pages/goods_details/components/shareRedPackets/index").then(function(){return resolve(i("1637"))}.bind(null,i)).catch(i.oe)},kefuIcon:function(){i.e("components/kefuIcon/index").then(function(){return resolve(i("2004"))}.bind(null,i)).catch(i.oe)},discountsList:function(){i.e("pages/goods_details/components/discountsList/index").then(function(){return resolve(i("524d"))}.bind(null,i)).catch(i.oe)},cusPreviewImg:function(){i.e("components/cusPreviewImg/index").then(function(){return resolve(i("17d4"))}.bind(null,i)).catch(i.oe)},ensure:function(){i.e("pages/goods_details/components/ensure/index").then(function(){return resolve(i("6d6b"))}.bind(null,i)).catch(i.oe)},specs:function(){i.e("pages/goods_details/components/specs/index").then(function(){return resolve(i("1e47"))}.bind(null,i)).catch(i.oe)},discount:function(){i.e("pages/goods_details/components/discount/index").then(function(){return resolve(i("20a1"))}.bind(null,i)).catch(i.oe)},countDown:function(){i.e("components/countDown/index").then(function(){return resolve(i("00a7"))}.bind(null,i)).catch(i.oe)},homeList:function(){i.e("components/homeList/index").then(function(){return resolve(i("8164"))}.bind(null,i)).catch(i.oe)}},directives:{trigger:{inserted:function(t,e){t.click()}}},mixins:[f.default],data:function(){return{showSkeleton:!0,isNodes:0,coupon:{coupon:!1,type:-1,list:[],count:[]},attrTxt:"请选择",attrValue:"",animated:!1,id:0,replyCount:0,reply:[],storeInfo:{brand_name:""},productValue:[],couponList:[],cart_num:1,isAuto:!1,isShowAuth:!1,isOpen:!1,actionSheetHidden:!0,posterImageStatus:!1,storeImage:"",PromotionCode:"",canvasStatus:!1,posterImage:"",posterbackgd:"/static/images/posterbackgd.png",sharePacket:{isState:!0},uid:0,circular:!1,autoplay:!1,interval:3e3,duration:500,clientHeight:"",good_list:[],replyChance:0,CartCount:0,isDown:!0,storeSelfMention:!0,posters:!1,weixinStatus:!1,ensureInfo:{show:!1,ensure:[],ensureTitle:""},specsInfo:{show:!1,specs:[]},discountInfo:{show:!1,discount:[]},attr:{cartAttr:!1,productAttr:[],productSelect:{}},limitInfo:{discount_price:0,price:0,discount:1,datatime:0},promotions_type:0,description:"",navActive:0,H5ShareBox:!1,activity:[],navH:"",navList:[],opacity:0,scrollY:0,topArr:[],height:0,heightArr:[],lock:!1,scrollTop:0,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},returnShow:!0,diff:"",is_money_level:1,is_vip:0,navbarRight:0,homeTop:20,routineContact:0,discountsData:[],siteName:"",themeColor:"",fontColor:"",showAnimate:!0,skuArr:[],codeShow:!1,cid:"1",codeVal:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#000",codeIcon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,base64Show:0,shareQrcode:0,followCode:"",selectSku:{},currentPage:!1,sysHeight:g,isShow:0,imgHost:h.HTTP_REQUEST_URL,fromType:0,cartNum:0,fromPage:"",diyProduct:{price_type:[]},activityBg:"",posterTitle:""}},computed:(0,l.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){1==t&&(this.getCouponList(),this.getCartCount())},deep:!0},storeInfo:{handler:function(){this.$nextTick((function(){}))},immediate:!0}},onLoad:function(e){var i=this,o=null;try{o=JSON.parse(t.getStorageSync("diyProduct"))}catch(a){}o?this.diyProduct=o:this.getdiyProduct();var s=this,n=getCurrentPages();if(s.returnShow=1!==n.length,s.navH=m.globalData.navHeight,s.id=e.id,s.isShow=e.isShow,s.promotions_type=e.promotions_type||0,s.fromType=e.fromType,s.fromPage=e.fromPage,t.getSystemInfo({success:function(e){s.height=e.windowHeight,s.navbarRight=e.windowWidth-t.getMenuButtonBoundingClientRect().left}}),e.scene){var r=s.$util.getUrlParams(decodeURIComponent(e.scene));r.id&&(e.id=r.id),r.spid&&(m.globalData.spid=r.spid)}if(!e.id)return this.showSkeleton=!1,s.$util.Tips({title:"缺少参数无法查看商品"},{tab:3,url:1});s.id=e.id,s.isLogin&&e.id&&s.downloadFilePromotionCode(),e.spid&&(m.globalData.spid=e.spid),s.getGoodsDetails(),this.colorData();var c=[{themeColor:"#1DB0FC",fontColor:"#FD502F"},{themeColor:"#42CA4D",fontColor:"#FF7600"},{themeColor:"#e93323",fontColor:"#e93323"},{themeColor:"#FF448F",fontColor:"#FF448F"},{themeColor:"#FE5C2D",fontColor:"#FE5C2D"},{themeColor:"#E0A558",fontColor:"#DA8C18"}];setTimeout((function(){switch(i.colorNum){case 1:i.themeColor=c[0].themeColor,i.fontColor=c[0].fontColor;break;case 2:i.themeColor=c[1].themeColor,i.fontColor=c[1].fontColor;break;case 3:i.themeColor=c[2].themeColor,i.fontColor=c[2].fontColor;break;case 4:i.themeColor=c[3].themeColor,i.fontColor=c[3].fontColor;break;case 5:i.themeColor=c[4].themeColor,i.fontColor=c[4].fontColor;break;case 6:i.themeColor=c[5].themeColor,i.fontColor=c[5].fontColor;break;default:i.themeColor=c[2].themeColor,i.fontColor=c[2].fontColor;break}}),1)},onReady:function(){this.isNodes++,this.$nextTick((function(){var e=this,i=t.getMenuButtonBoundingClientRect(),o=t.createSelectorQuery().in(this);o.select("#home").boundingClientRect((function(t){e.homeTop=2*i.top+i.height-t.height})).exec()}))},onShow:function(){t.removeStorageSync("form_type_cart")},onShareAppMessage:function(){return this.$set(this,"actionSheetHidden",!this.actionSheetHidden),(0,c.userShare)(),{title:this.storeInfo.store_name||"",imageUrl:this.storeInfo.image||"",path:"/pages/goods_details/index?id="+this.id+"&spid="+this.uid}},onShareTimeline:function(){return this.$set(this,"actionSheetHidden",!this.actionSheetHidden),(0,c.userShare)(),{title:this.storeInfo.store_name||"",imageUrl:this.storeInfo.image||"",path:"/pages/goods_details/index?id="+this.id+"&spid="+this.uid}},methods:{changeLogin:function(){this.getIsLogin()},getIsLogin:function(){this.isShowAuth=!0},getdiyProduct:function(){var e=this;(0,r.diyProduct)().then((function(i){e.diyProduct=i.data.product_detail,t.setStorageSync("diyProduct",JSON.stringify(i.data.product_detail))}))},seeEnsure:function(){this.ensureInfo.show=!0},seeSpecs:function(){this.specsInfo.show=!0},seeDiscount:function(){this.discountInfo.show=!0},moreNav:function(){this.currentPage=!this.currentPage},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this,i=this.skuArr[t];this.$set(this,"selectSku",i);var o=i.suk.split(",");o.forEach((function(t,i){e.$set(e.attr.productAttr[i],"index",o[i])})),i&&(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this,"attrValue",i.suk),this.$set(this,"attrTxt","已选择"))},qrR:function(t){},boxStatus:function(t){this.showAnimate=t},followWX:function(){var t=this;(0,r.getProductCode)(this.id).then((function(e){t.followCode=e.data.code,t.getImageBase64(1)})).catch((function(e){t.$util.Tips({title:e})}))},getpreviewImage:function(){if(this.posterImage){var e=[];e.push(this.posterImage),t.previewImage({urls:e,current:this.posterImage})}else this.$util.Tips({title:"您的海报尚未生成"})},videoPause:function(){this.$nextTick((function(){that.infoScroll()}))},closeChange:function(){this.$set(this.sharePacket,"isState",!0)},goActivity:function(e){var i=e;"1"===i.type?t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(i.id,"&time=").concat(i.time,"&status=1")}):"2"===i.type?t.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(i.id,"&spid=").concat(this.uid)}):t.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(i.id)})},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},returns:function(){if(!this.isShow){if(this.fromType){var e={id:this.id,cartNum:this.cartNum},i=getCurrentPages(),o=i[i.length-2];return o.$vm.otherFun(e),t.navigateBack()}return t.navigateBack({delta:1})}t.reLaunch({url:"/pages/index/index"})},tap:function(t){this.$set(this,"navActive",t),this.$set(this,"lock",!0),this.$set(this,"scrollTop",t>0?this.topArr[t]-m.globalData.navHeight/2:this.topArr[t])},scroll:function(t){var e=t.detail.scrollTop,i=e/200;i=i>1?1:i;var o=!(e>0);if(this.$set(this,"opacity",i),this.$set(this,"scrollY",e),this.$set(this,"showAnimate",o),this.$set(this,"currentPage",!1),this.lock)this.$set(this,"lock",!1);else for(var s=0;s<this.topArr.length;s++)if(e<this.topArr[s]-m.globalData.navHeight/2+this.heightArr[s]){this.$set(this,"navActive",s);break}},goDetail:function(e){0!=e.activity.length?e.activity&&2==e.activity.type?t.redirectTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(e.activity.id,"&spid=").concat(this.uid)}):e.activity&&3==e.activity.type?t.redirectTo({url:"/pages/activity/goods_combination_details/index?id=".concat(e.activity.id)}):e.activity&&1==e.activity.type&&t.redirectTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(e.activity.id,"&time=").concat(e.activity.time,"&status=1")}):t.redirectTo({url:"/pages/goods_details/index?id="+e.id})},onLoadFun:function(t){this.downloadFilePromotionCode(),this.getUserInfo(),this.getCartCount(),this.isShowAuth=!1},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},getUserInfo:function(){var t=this;(0,c.getUserInfo)().then((function(e){t.$set(t.sharePacket,"isState",0==t.sharePacket.priceName),t.$set(t,"uid",e.data.uid),t.$set(t,"is_money_level",e.data.is_money_level)}))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,o=this.attr.productSelect;t?(o.cart_num++,o.cart_num>i&&(this.$set(this.attr.productSelect,"cart_num",i||1),this.$set(this,"cart_num",i||1))):(o.cart_num--,o.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeAttr:function(t){var e=this.productValue[t];this.$set(this,"selectSku",e),e&&e.stock>=0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",e.vip_price),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangCoupons:function(t){var e=t,i=this.$util.ArrayRemove(this.couponList,"id",e.id);this.$set(this,"couponList",i),this.getCouponList()},setClientHeight:function(){var e=this;if(e.good_list.length){var i=t.createSelectorQuery().in(this).select("#list0");i.fields({size:!0},(function(t){e.$set(e,"clientHeight",t.height+20),e.$nextTick((function(){e.infoScroll()}))})).exec()}},getGoodsList:function(){var t=this,e=this;(0,r.getProductRecommend)(e.id).then((function(i){for(var o=i.data||[],s=Math.ceil(o.length/6),n=new Array,r=0;r<s;r++){var c=o.slice(6*r,6*r+6);c.length&&n.push({list:c})}e.$set(e,"good_list",n),n.length&&t.diyProduct.is_recommend&&e.navList.splice(-1,0,"推荐"),e.$nextTick((function(){o.length&&e.setClientHeight()}))})).catch((function(e){return t.$util.Tips({title:e})}))},getGoodsCtivity:function(){var t=this,e=this;(0,r.getProductCtivity)(e.id,{promotions_type:this.promotions_type}).then((function(i){e.$set(e,"activityBg",i.data.activity_background.image||""),e.$set(e,"activity",i.data.activity?i.data.activity:[]),e.$set(e,"couponList",i.data.coupons),e.$set(e,"discountsData",i.data.discounts_products?i.data.discounts_products:[]);var o=i.data.promotions[0];if(e.$set(e,"promotions_type",i.data.promotions.length?o.promotions_type:0),i.data.promotions.length&&1==o.promotions_type){var s=e.$util.$h.Div(o.discount,100),n=e.$util.$h.Mul(s,t.storeInfo.price);e.$set(e.limitInfo,"price",t.storeInfo.price||0),e.$set(e.limitInfo,"datatime",o.stop_time||0),e.$set(e.limitInfo,"discount",s),e.$set(e.limitInfo,"discount_price",n)}e.$set(e.discountInfo,"discount",i.data.promotions),e.$nextTick((function(){e.infoScroll()}))})).catch((function(e){return t.$util.Tips({title:e})}))},getGoodsDetails:function(){var e=this,i=this,o="";o=i.fromPage?r.newcomerDetail:r.getProductDetail,o(i.id,{promotions_type:this.promotions_type}).then((function(o){var s=o.data.storeInfo;i.$set(i,"storeInfo",s),i.$set(i.ensureInfo,"ensure",s.ensure);var n=[];for(var r in s.ensure.forEach((function(t){n.push(t.name)})),i.$set(i.ensureInfo,"ensureTitle",n.join(" · ")),i.$set(i.specsInfo,"specs",s.specs),i.$set(i,"description",s.description),i.$set(i,"posterTitle",o.data.product_poster_title),e.description=e.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),i.$set(i,"reply",o.data.reply),i.$set(i,"replyCount",o.data.replyCount),i.$set(i,"replyChance",o.data.replyChance),i.$set(i.attr,"productAttr",o.data.productAttr),i.$set(i,"productValue",o.data.productValue),o.data.productValue){var c=o.data.productValue[r];i.skuArr.push(c)}i.skuArr.length||(i.skuArr=[{image:e.storeInfo.image,suk:e.storeInfo.store_name,price:e.storeInfo.price}]),e.$set(e,"selectSku",i.skuArr[0]),i.$set(i,"is_vip",o.data.storeInfo.is_vip),i.$set(i.sharePacket,"priceName",o.data.priceName),i.$set(i,"storeSelfMention",o.data.store_self_mention),i.$set(i,"shareQrcode",o.data.share_qrcode),i.$set(i,"routineContact",Number(o.data.routine_contact_type)),t.setNavigationBarTitle({title:s.store_name.substring(0,13)+"..."}),i.$set(i,"diff",i.$util.$h.Sub(s.price,s.vip_price)),i.siteName=o.data.site_name;var a=["商品","详情"];o.data.replyCount&&i.diyProduct.is_reply&&a.splice(1,0,"评价"),i.$set(i,"navList",a),i.isLogin&&i.getUserInfo(),setTimeout((function(){i.infoScroll()}),500),i.downloadFilestoreImage(),i.DefaultSelect(),i.getCartCount(),setTimeout((function(){e.showSkeleton=!1}),200),i.fromPage||(i.getGoodsList(),i.getGoodsCtivity())})).catch((function(t){return i.$util.Tips({title:t.toString()},{tab:3,url:1})}))},infoScroll:function(){for(var e=this,i=[],o=[],s=0;s<e.navList.length;s++){var n=t.createSelectorQuery().in(this),r="#past"+s;(this.replyCount&&this.diyProduct.is_reply||e.good_list.length&&e.diyProduct.is_recommend||1!=s)&&(!this.replyCount||!this.diyProduct.is_reply||e.good_list.length&&e.diyProduct.is_recommend||2!=s)&&(this.replyCount&&this.diyProduct.is_reply||!e.good_list.length||!e.diyProduct.is_recommend||2!=s)||(r="#past3"),this.replyCount&&this.diyProduct.is_reply||!e.good_list.length||!e.diyProduct.is_recommend||1!=s||(r="#past2"),n.select(r).boundingClientRect(),n.exec((function(t){var s=t[0].top,n=t[0].height;i.push(s),o.push(n),e.$set(e,"topArr",i),e.$set(e,"heightArr",o)}))}},DefaultSelect:function(){var t=this.attr.productAttr,e=[],i=[];for(var o in this.productValue)if(this.productValue[o].stock>0){e=this.attr.productAttr.length?o.split(","):[];break}i=!e.length&&this.attr.productAttr.length?Object.keys(this.productValue)[0].split(","):e;for(var s=0;s<t.length;s++)this.$set(t[s],"index",i[s]);var n=this.productValue[i.join(",")];n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",n.image),this.$set(this.attr.productSelect,"price",n.price),this.$set(this.attr.productSelect,"stock",n.stock),this.$set(this.attr.productSelect,"unique",n.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",i.join(",")),this.$set(this.attr.productSelect,"vip_price",n.vip_price),this.$set(this,"attrTxt","已选择")):!n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):n||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},getCouponList:function(t){var e=this,i={page:1,limit:20,product_id:e.id};void 0===t&&null===t||(i.type=t),(0,a.getCoupons)(i).then((function(i){if(e.$set(e.coupon,"count",i.data.count),void 0===t||null===t){var o=(0,n.default)(e.coupon.count),s="",r=o.findIndex((function(t){return t})),c=e.coupon.count,a=[],u=0;c.forEach((function(t,e){0===t?u=e:a.push(t)})),s=3==a.length?2:2==a.length?2===u?1:2:c.findIndex((function(t){return t===o[r]})),e.$set(e.coupon,"type",s),e.getCouponList(s)}else e.$set(e.coupon,"list",i.data.list)}))},ChangCouponsUseState:function(t){this.coupon.list[t].is_use=!0,this.$set(this.coupon,"list",this.coupon.list),this.$set(this.coupon,"coupon",!1)},setCollect:(0,p.Debounce)((function(){if(!1===this.isLogin)this.getIsLogin();else{var t=this;this.storeInfo.userCollect?(0,r.collectDel)(this.storeInfo.id).then((function(e){return t.$set(t.storeInfo,"userCollect",!t.storeInfo.userCollect),t.$util.Tips({title:e.msg})})):(0,r.collectAdd)(this.storeInfo.id).then((function(e){return t.$set(t.storeInfo,"userCollect",!t.storeInfo.userCollect),t.$util.Tips({title:e.msg})}))}})),selecAttr:(0,p.Debounce)((function(){this.currentPage=!1,this.$set(this.attr,"cartAttr",!0),this.$set(this,"isOpen",!0)})),couponTap:function(){this.currentPage=!1,!1===this.isLogin?this.getIsLogin():(this.getCouponList(),this.$set(this.coupon,"coupon",!0))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},myEnsure:function(){this.$set(this.ensureInfo,"show",!1)},mySpecs:function(){this.$set(this.specsInfo,"show",!1)},myDiscount:function(){this.$set(this.discountInfo,"show",!1)},joinCart:function(t){this.currentPage=!1,!1===this.isLogin?this.getIsLogin():this.goCat()},goCat:function(e){var i=this,o=i.productValue[this.attrValue];if(i.attrValue?i.attr.cartAttr=!i.isOpen:i.isOpen?i.attr.cartAttr=!0:i.attr.cartAttr=!i.attr.cartAttr,!0===i.attr.cartAttr&&!1===i.isOpen)return i.isOpen=!0;if(i.attr.productAttr.length&&void 0===o&&!0===i.isOpen)return i.$util.Tips({title:"产品库存不足，请选择其它属性"});if(i.attr.productSelect.cart_num<=0)return i.attr.productSelect.cart_num=1,i.isOpen=!1,i.$util.Tips({title:"请先选择属性"});var s={cartNum:i.attr.productSelect.cart_num,new:void 0===e?0:1,uniqueId:void 0!==i.attr.productSelect?i.attr.productSelect.unique:""};i.fromPage?(s.productId=i.storeInfo.product_id,s.newcomerId=i.id):s.productId=i.id,(0,r.postCartAdd)(s).then((function(o){i.isOpen=!1,i.attr.cartAttr=!1,e?t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+o.data.cartId}):i.$util.Tips({title:"添加购物车成功",success:function(){i.cartNum=o.data.cartNum,i.getCartCount(!0)}})})).catch((function(t){return i.isOpen=!1,i.$util.Tips({title:t})}))},getCartCount:function(t){var e=this,i=this,o=i.isLogin;o&&(0,u.getCartCounts)().then((function(o){i.CartCount=o.data.count,e.$store.commit("indexData/setCartNum",i.CartCount>99?"...":i.CartCount+""),t&&(i.animated=!0,setTimeout((function(){i.animated=!1}),500))}))},goBuy:function(t){this.currentPage=!1,!1===this.isLogin?this.getIsLogin():this.goCat(!0)},authColse:function(t){this.isShowAuth=t},listenerActionSheet:function(){this.currentPage=!1,!1===this.isLogin?this.getIsLogin():(this.posters=!0,this.goPoster())},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1,this.posters=!1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},downloadFilestoreImage:function(){var e=this;t.downloadFile({url:e.setDomain(e.storeInfo.image),success:function(t){e.storeImage=t.tempFilePath,e.base64Show=1},fail:function(){return e.$util.Tips({title:""})}})},downloadFilePromotionCode:function(e){var i=this;(0,r.getProductCode)(i.id).then((function(o){t.downloadFile({url:i.setDomain(o.data.code),success:function(t){i.$set(i,"isDown",!1),"function"==typeof e?e&&e(t.tempFilePath):i.$set(i,"PromotionCode",t.tempFilePath)},fail:function(){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}})})).catch((function(t){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}))},getImageBase64:function(t){var e=this;(0,d.imageBase64)(e.storeImage,e.followCode).then((function(i){e.storeImage=i.data.image,t&&(e.PromotionCode=i.data.code),e.base64Show=1})).catch((function(){}))},goPoster:function(){var e=this;e.$set(e,"canvasStatus",!0);var i=[e.posterbackgd,e.storeImage,e.PromotionCode];return""!=e.PromotionCode||e.isDown?e.isDown?e.$util.Tips({title:"正在下载海报,请稍后再试！"},(function(){e.posters=!1})):void t.getImageInfo({src:e.PromotionCode,fail:function(t){return e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"})},success:function(){""==i[2]?e.downloadFilePromotionCode((function(t){if(i[2]=t,""==i[2])return e.$util.Tips({title:"海报二维码生成失败！"});e.$nextTick((function(){e.$util.PosterCanvas(e.fontColor,e.themeColor,e.siteName,i,e.storeInfo.store_name,e.storeInfo.price,e.storeInfo.ot_price,e.posterTitle,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}))})):e.$nextTick((function(){e.$util.PosterCanvas(e.fontColor,e.themeColor,e.siteName,i,e.storeInfo.store_name,e.storeInfo.price,e.storeInfo.ot_price,e.posterTitle,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}))}}):e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"},(function(){e.posters=!1}))},copyCommand:function(){o.navigateToMiniProgram&&o.navigateToMiniProgram({appId:"wxb036cafe2994d7d0",path:"/publish/ugc-publish/ugc-publish",extraData:{productInfo:{title:this.storeInfo.store_name,path:"/pages/goods_details/index?id="+this.storeInfo.id,thumbUrl:this.storeInfo.image}}})},savePosterPath:function(){var e=this;t.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},tabCouponType:function(t){this.$set(this.coupon,"type",t),this.getCouponList(t)},goDiscounts:function(){t.navigateTo({url:"/pages/goods_details/discountsGoodsList?id="+this.id})}}};e.default=v}).call(this,i("543d")["default"],i("bc2e")["default"])},a00f:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={jyfParser:function(){return Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(i.bind(null,"217b"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,1==t.promotions_type?t.limitInfo.discount_price.toString().split("."):null),o=1==t.promotions_type?t.limitInfo.discount_price.toString().split(".").length:null,s=1==t.promotions_type&&o>1?t.limitInfo.discount_price.toString().split("."):null,n=1!=t.promotions_type&&t.activityBg?t.storeInfo.vip_price&&parseFloat(t.storeInfo.vip_price)>0&&(1==t.storeInfo.is_vip&&"member"==t.storeInfo.price_type||"level"==t.storeInfo.price_type):null,r=1!=t.promotions_type&&t.activityBg?t.storeInfo.vip_price&&parseFloat(t.storeInfo.vip_price)>0&&1==t.storeInfo.is_vip&&"member"==t.storeInfo.price_type&&-1!=t.diyProduct.price_type.indexOf("1"):null,c=1!=t.promotions_type&&t.activityBg?t.storeInfo.vip_price&&parseFloat(t.storeInfo.vip_price)>0&&"level"==t.storeInfo.price_type&&-1!=t.diyProduct.price_type.indexOf("2"):null,a=1==t.promotions_type||t.activityBg?null:t.storeInfo.vip_price&&parseFloat(t.storeInfo.vip_price)>0&&(1==t.storeInfo.is_vip&&"member"==t.storeInfo.price_type||"level"==t.storeInfo.price_type),u=1==t.promotions_type||t.activityBg?null:t.storeInfo.vip_price&&parseFloat(t.storeInfo.vip_price)>0&&1==t.storeInfo.is_vip&&"member"==t.storeInfo.price_type&&-1!=t.diyProduct.price_type.indexOf("1"),l=1==t.promotions_type||t.activityBg?null:t.storeInfo.vip_price&&parseFloat(t.storeInfo.vip_price)>0&&"level"==t.storeInfo.price_type&&-1!=t.diyProduct.price_type.indexOf("2"),d=t.diyProduct.is_name?t.storeInfo.brand_name&&t.storeInfo.brand_name.trim()&&t.diyProduct.is_brand:null,h=t.couponList.length&&t.diyProduct.is_coupon,p=h?t.__map(t.couponList,(function(e,i){var o=t.__get_orig(e),s=i<2&&2==e.coupon_type?parseFloat(e.coupon_price):null;return{$orig:o,m6:s}})):null,f=t.activity.length&&t.diyProduct.is_activity,g=t.discountInfo.discount.length&&t.diyProduct.is_promotions,m=t.attr.productAttr.length&&t.diyProduct.is_sku,v=m?t.skuArr.length>1&&2==t.diyProduct.sku_style:null,_=m&&v?t.skuArr.slice(0,4):null,$=m&&v?t.skuArr.length:null,y=t.storeInfo.specs&&t.storeInfo.specs.length&&t.diyProduct.is_specs,I=y?t.storeInfo.specs.length:null,C=t.storeInfo.ensure&&t.storeInfo.ensure.length&&t.diyProduct.is_ensure,S=t.discountsData.length&&t.diyProduct.is_discounts,P=t.good_list.length&&t.diyProduct.is_recommend,b=P?t.good_list.length:null,w=P?t.good_list.length:null,k=parseFloat(t.CartCount),T=parseInt(t.id);t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{g0:i,g1:o,g2:s,m0:n,m1:r,m2:c,m3:a,m4:u,m5:l,g3:d,g4:h,l0:p,g5:f,g6:g,g7:m,g8:v,l1:_,g9:$,g10:y,g11:I,g12:C,g13:S,g14:P,g15:b,g16:w,m7:k,m8:T}})},n=[]},ab03:function(t,e,i){},abe2:function(t,e,i){"use strict";i.r(e);var o=i("a00f"),s=i("e669");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("d1c5");var r=i("f0c5"),c=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=c.exports},d1c5:function(t,e,i){"use strict";var o=i("ab03"),s=i.n(o);s.a},e669:function(t,e,i){"use strict";i.r(e);var o=i("04c9"),s=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a}},[["02d0","common/runtime","common/vendor"]]]);