// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2021 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
const log = {};

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | error | text ]
 */
function typeColor (type = 'default') {
    let color = '';
    switch (type) {
    case 'default': color = '#515a6e'; break;
    case 'primary': color = '#2d8cf0'; break;
    case 'success': color = '#19be6b'; break;
    case 'warning': color = '#ff9900'; break;
    case 'error': color = '#ed4014'; break;
    default:; break
    }
    return color;
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {String} title title text
 * @param {String} info info text
 * @param {String} type style
 */
log.capsule = function (title, info, type = 'primary') {

};

/**
 * @description 打印彩色文字
 */
log.colorful = function (textArr) {
 
};

/**
 * @description 打印 default 样式的文字
 */
log.default = function (text) {
    log.colorful([{ text }]);
};

/**
 * @description 打印 primary 样式的文字
 */
log.primary = function (text) {
    log.colorful([{ text, type: 'primary' }]);
};

/**
 * @description 打印 success 样式的文字
 */
log.success = function (text) {
    log.colorful([{ text, type: 'success' }]);
};

/**
 * @description 打印 warning 样式的文字
 */
log.warning = function (text) {
    log.colorful([{ text, type: 'warning' }]);
};

/**
 * @description 打印 error 样式的文字
 */
log.error = function (text) {
    log.colorful([{ text, type: 'error' }]);
};

export default log;
