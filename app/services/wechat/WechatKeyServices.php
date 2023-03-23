<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\services\wechat;


use app\dao\wechat\WechatKeyDao;
use app\services\BaseServices;

/**
 * 微信菜单
 * Class WechatMenuServices
 * @package app\services\wechat
 * @mixin WechatKeyDao
 */
class WechatKeyServices extends BaseServices
{
    /**
     * 构造方法
     * WechatMenuServices constructor.
     * @param WechatKeyDao $dao
     */
    public function __construct(WechatKeyDao $dao)
    {
        $this->dao = $dao;
    }

}