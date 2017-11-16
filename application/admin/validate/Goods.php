<?php
namespace app\admin\validate;

use think\Validate;

class Goods extends Validate
{
    protected $rule = [
        'gname' => 'require',
    ];
    protected $message = [
        'cname' => '请输入名称'
    ];

}