<?php
namespace app\common\validate;

use think\Validate;

class Slide extends Validate
{
    protected $rule = [
        'title' => 'require',
        'path' => 'require',
        'url' => 'require|url',
        'sort' => 'require|number',
    ];
    protected $message = [
        'title.require' => '请输入标题',
        'path.require' => '请上传图片',
        'url.require' => '请输入链接地址',
        'url.url' => '请输入正确的链接地址',
        'sort.require' => '请输入排序',
        'sort.number' => '排序必须为数字',
    ];
    protected $scene = [
        'add' => ['title','path','url','sort'],
        'edit' => ['title','path','url','sort'],
    ];
}