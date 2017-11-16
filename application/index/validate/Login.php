<?php
namespace app\index\validate;

use think\Db;
use think\Validate;

class Login extends Validate
{
    protected $rule = [
        'username' => 'require|checkUsername',
        'password' => 'require|checkPassword',
    ];

    protected $message = [
        'username.require' => '请输入帐号',
        'password.require' => '请输入密码',
    ];

    protected function checkUsername($value,$rule,$data)
    {
        //dd($data);
        $data = Db::table('user_list')->where('username',$value)->find();
        //dd($data);
        return $value == $data['username'] ? true : '用户名不存在';
    }

    protected function checkPassword($value,$rule,$data)
    {
        //var_dump(md5($value));
        $data = Db::table('user_list')->where('password',md5($value))->find();
        //var_dump($data['password']);
        return md5($value) == $data['password'] ? true : '密码不正确';
    }
}