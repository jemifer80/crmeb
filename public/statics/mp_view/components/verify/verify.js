(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/verify/verify"],{2638:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"Vue2Verify",props:{captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object}},data:function(){return{clickShow:!1,verifyType:void 0,componentType:void 0,defaultImg:""}},mounted:function(){this.uuid()},methods:{uuid:function(){for(var t=[],n=0;n<36;n++)t[n]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]="0123456789abcdef".substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var i="slider-"+t.join(""),o="point-"+t.join("");e.getStorageSync("slider")||e.setStorageSync("slider",i),e.getStorageSync("point")||e.setStorageSync("point",o)},success:function(e){this.$emit("success",e)},refresh:function(){this.instance.refresh&&this.instance.refresh()},show:function(){"pop"==this.mode&&(this.clickShow=!0)},hide:function(){"pop"==this.mode&&(this.clickShow=!1)}},computed:{instance:function(){return this.$refs.instance||{}},showBox:function(){return"pop"!=this.mode||this.clickShow}},watch:{captchaType:{immediate:!0,handler:function(e){switch(e.toString()){case"blockPuzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"clickWord":this.verifyType="",this.componentType="VerifyPoints";break}}}},components:{VerifySlide:function(){Promise.all([n.e("common/vendor"),n.e("components/verify/verifySlider/verifySlider")]).then(function(){return resolve(n("97896"))}.bind(null,n)).catch(n.oe)},VerifyPoint:function(){Promise.all([n.e("common/vendor"),n.e("components/verify/verifyPoint/verifyPoint")]).then(function(){return resolve(n("edcd"))}.bind(null,n)).catch(n.oe)}}};t.default=i}).call(this,n("543d")["default"])},3212:function(e,t,n){"use strict";n.r(t);var i=n("2638"),o=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=o.a},"3d71":function(e,t,n){"use strict";var i=n("f4ce"),o=n.n(i);o.a},"3f6b":function(e,t,n){"use strict";n.r(t);var i=n("c14f"),o=n("3212");for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("3d71"),n("6352");var r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=u.exports},5448:function(e,t,n){},6352:function(e,t,n){"use strict";var i=n("5448"),o=n.n(i);o.a},c14f:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,parseInt(e.imgSize.width));e._isMounted||(e.e0=function(t){e.clickShow=!1}),e.$mp.data=Object.assign({},{$root:{m0:n}})},o=[]},f4ce:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/verify/verify-create-component',
    {
        'components/verify/verify-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3f6b"))
        })
    },
    [['components/verify/verify-create-component']]
]);
