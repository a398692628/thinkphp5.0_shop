<?php
namespace app\index\validate;

use think\Db;
use think\Validate;

class Address extends Validate
{
    protected $rule = [
        'name' => 'require',
    ];

    protected $message = [
        'name.require' => '请输入收货人姓名',
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