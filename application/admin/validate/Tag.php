<?php
namespace app\admin\validate;

use think\Validate;

class Tag extends Validate
{
    protected $rule = [
        'cname' => 'require',
    ];
    protected $message = [
        'cname' => '请输入标签名称'
    ];

}