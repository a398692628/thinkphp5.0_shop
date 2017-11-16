<?php
namespace app\common\validate;
use think\Db;
use think\Validate;

class entry extends Validate
{
    protected $rule= [
        'original_password'=>'require|checkPassword',
        'password'=>'require|confirm',
        'password_confirm'=>'require',
    ];
    protected $message = [
        'original_password.require' => '请输入原始密码',
        'password.require' => '请输入新密码',
        'password.confirm' => '两次输入密码不一样',
        'password_confirm.require' => '请输入确认密码',
    ];

    protected function checkPassword($value,$rule,$data)
    {
        //var_dump(md5($value));
        $data = Db::table('admin')->where('password',md5($value))->find();
        //var_dump($data['password']);
        return md5($value) == $data['password'] ? true : '原始密码不正确';
    }
}