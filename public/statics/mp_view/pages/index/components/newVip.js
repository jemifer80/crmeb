(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/newVip"],{"06e6":function(t,n,e){"use strict";e.r(n);var i=e("6c0c"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"6c0c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("53c2"),o=e("26cb"),a={computed:(0,o.mapGetters)(["isLogin"]),name:"userInfor",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{bgColor:this.dataConfig.bgColor.color,mbCongfig:2*this.dataConfig.mbCongfig.val,prConfig:2*this.dataConfig.prConfig.val,itemStyle:this.dataConfig.itemStyle.type,checkType:this.dataConfig.checkboxInfo.type,textColor:this.dataConfig.textColor.color[0].item,priceColor:this.dataConfig.priceColor.color[0].item,numConfig:this.dataConfig.numConfig.val,list:[]}},created:function(){this.getList()},watch:{isLogin:{handler:function(t,n){t&&this.getList()},deep:!0}},mounted:function(){},methods:{goDetail:function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id,"&fromPage='newVip'")})},goNewList:function(){t.navigateTo({url:"/pages/store/newcomers/index"})},getList:function(){var t=this,n=this.$config.LIMIT,e=this.dataConfig.itemSort.type;(0,i.newcomerList)({page:1,limit:this.numConfig>=n?n:this.numConfig,priceOrder:2==e?"desc":"",salesOrder:1==e?"desc":""}).then((function(n){t.list=n.data})).catch((function(n){return t.$util.Tips({title:n.msg})}))}}};n.default=a}).call(this,e("543d")["default"])},"74ddb":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.list.length),i=e?t.__map(t.list,(function(n,e){var i=t.__get_orig(n),o=t.checkType.indexOf(0),a=t.checkType.indexOf(1);return{$orig:i,g1:o,g2:a}})):null;t.$mp.data=Object.assign({},{$root:{g0:e,l0:i}})},o=[]},"7c8a":function(t,n,e){"use strict";e.r(n);var i=e("74ddb"),o=e("06e6");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("c817");var c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=r.exports},c817:function(t,n,e){"use strict";var i=e("d5e8"),o=e.n(i);o.a},d5e8:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/newVip-create-component',
    {
        'pages/index/components/newVip-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7c8a"))
        })
    },
    [['pages/index/components/newVip-create-component']]
]);