(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/HotNewGoods/index"],{1025:function(t,n,e){"use strict";e.r(n);var o=e("5afa"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"27b5":function(t,n,e){"use strict";e.r(n);var o=e("7952"),i=e("1025");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("c116");var c=e("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=s.exports},5076:function(t,n,e){"use strict";(function(t,n){var o=e("4ea4");e("8824");o(e("66fd"));var i=o(e("27b5"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"51ab":function(t,n,e){},"5afa":function(t,n,e){"use strict";(function(t){var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("78a2"),a=e("7a16"),c=o(e("a29e")),s={name:"HotNewGoods",components:{GoodList:function(){Promise.all([e.e("common/vendor"),e.e("components/goodList/index")]).then(function(){return resolve(e("5081"))}.bind(null,e)).catch(e.oe)},emptyPage:function(){e.e("components/emptyPage").then(function(){return resolve(e("781a"))}.bind(null,e)).catch(e.oe)},home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("d878"))}.bind(null,e)).catch(e.oe)},pageFooter:function(){Promise.all([e.e("common/vendor"),e.e("components/pageFooter/index")]).then(function(){return resolve(e("9f8d"))}.bind(null,e)).catch(e.oe)}},props:{},mixins:[c.default],data:function(){return{imgUrls:[],goodsList:[],name:"",icon:"",type:0,autoplay:!0,circular:!0,interval:3e3,duration:500,page:1,limit:8,isScroll:!0,footerStatus:!1}},onLoad:function(n){t.getStorageSync("FOOTER_BAR")&&(this.footerStatus=!0,t.hideTabBar()),this.type=n.type,this.titleInfo(),this.name=n.name,t.setNavigationBarTitle({title:n.name}),this.getIndexGroomList()},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{titleInfo:function(){"1"===this.type?this.icon="icon-jingpintuijian":"2"===this.type?this.icon="icon-remen":("3"===this.type||"4"===this.type)&&(this.icon="icon-xinpin")},goPages:function(t){var n=this,e=t.link||"";(0,a.goPage)().then((function(t){n.$util.JumpPath(e)}))},getIndexGroomList:function(){if(this.isScroll){var t=this,n=this.type;(0,i.getGroomList)(n,{page:this.page,limit:this.limit}).then((function(n){t.imgUrls=n.data.banner,t.goodsList=t.goodsList.concat(n.data.list),t.isScroll=n.data.list.length>=t.limit,t.page++})).catch((function(n){t.$util.Tips({title:n})}))}},onReachBottom:function(){this.getIndexGroomList()}}};n.default=s}).call(this,e("543d")["default"])},7952:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement,n=(this._self._c,this.goodsList.length>0&&!this.isScroll),e=0==this.goodsList.length&&!this.isScroll;this.$mp.data=Object.assign({},{$root:{g0:n,g1:e}})},i=[]},c116:function(t,n,e){"use strict";var o=e("51ab"),i=e.n(o);i.a}},[["5076","common/runtime","common/vendor"]]]);