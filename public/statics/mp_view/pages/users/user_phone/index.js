require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_phone/index"],{"004f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},u=[]},"10f1":function(t,e,i){"use strict";i.r(e);var n=i("004f"),u=i("dd86");for(var o in u)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return u[t]}))}(o);i("4321");var s=i("f0c5"),c=Object(s["a"])(u["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=c.exports},4321:function(t,e,i){"use strict";var n=i("4d30"),u=i.n(n);u.a},"4d30":function(t,e,i){},"52f3":function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("8824");n(i("66fd"));var u=n(i("10f1"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(u.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"7e5d":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(i("523a")),o=i("53c2"),s=(i("d5f7"),i("26cb")),c=n(i("a29e")),r={mixins:[u.default,c.default],components:{Verify:function(){i.e("components/verify/verify").then(function(){return resolve(i("3f6b"))}.bind(null,i)).catch(i.oe)}},data:function(){return{phone:"",captcha:"",isAuto:!1,isShowAuth:!1,key:"",authKey:"",type:0,show:!1}},computed:(0,s.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin?this.getVerifyCode():this.isShowAuth=!0,this.authKey=t.key||"",this.url=t.url||"",this.type=t.type||0},onShow:function(){t.removeStorageSync("form_type_cart")},methods:{onLoadFun:function(){this.getVerifyCode(),this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},getVerifyCode:function(){var t=this;(0,o.verifyCode)().then((function(e){t.$set(t,"key",e.data.key)}))},editPwd:function(){var e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?e.captcha?void(0==this.type?(0,o.bindingUserPhone)({phone:e.phone,captcha:e.captcha}).then((function(i){if(void 0===i.data||!i.data.is_bind)return e.$util.Tips({title:"绑定成功！",icon:"success"},{tab:5,url:"/pages/users/user_info/index"});t.showModal({title:"是否绑定账号",content:i.msg,confirmText:"绑定",success:function(t){if(t.confirm)(0,o.bindingUserPhone)({phone:e.phone,captcha:e.captcha,step:1}).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(t){return e.$util.Tips({title:t})}));else if(t.cancel)return e.$util.Tips({title:"您已取消绑定！"},{tab:5,url:"/pages/users/user_info/index"})}})})).catch((function(t){return e.$util.Tips({title:t})})):(0,o.updatePhone)({phone:e.phone,captcha:e.captcha}).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(t){return e.$util.Tips({title:t})}))):e.$util.Tips({title:"请填写验证码"}):e.$util.Tips({title:"请输入正确的手机号码！"}):e.$util.Tips({title:"请填写手机号码！"})},success:function(t){this.$refs.verify.hide();var e=this;(0,o.verifyCode)().then((function(i){(0,o.registerVerify)({phone:e.phone,type:"reset",key:i.data.key,captchaType:"blockPuzzle",captchaVerification:t.captchaVerification}).then((function(t){e.$util.Tips({title:t.msg}),e.sendCode()})).catch((function(t){return e.$util.Tips({title:t})}))}))},code:function(){return this.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?void this.$refs.verify.show():this.$util.Tips({title:"请输入正确的手机号码！"}):this.$util.Tips({title:"请填写手机号码！"})}}};e.default=r}).call(this,i("543d")["default"])},dd86:function(t,e,i){"use strict";i.r(e);var n=i("7e5d"),u=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=u.a}},[["52f3","common/runtime","common/vendor"]]]);