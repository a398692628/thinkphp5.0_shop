<?php
namespace app\index\validate;

use think\Db;
use think\Validate;

class Register extends Validate
{
    protected $rule = [
        'username' => 'require|checkUsername',
        'password' => 'require|confirm',
        'password_confirm' => 'require',
    ];

    protected $message = [
        'username.require' => '请输入帐号',
        'password.require' => '请输入密码',
        'password.confirm' => '两次输入的密码不一致',
        'password_confirm.require' => '请再次输入密码',
    ];

    protected function checkUsername($value,$rule,$data)
    {
        $data = Db::table('user_list')->where('username',$value)->find();
        return $value == $data['username'] ? '用户名已经存在' : true;
    }
}