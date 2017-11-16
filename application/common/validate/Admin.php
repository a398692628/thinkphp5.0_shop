<?php
namespace app\common\validate;
use think\Db;
use think\Validate;

class admin extends Validate
{
    protected $rule = [
        'username' => 'require|checkUsername',
        'password' => 'require|checkPassword',
    ];

    protected $message = [
        'username' => '用户名不能为空',
        'password' => '密码不能为空',
    ];

    protected function checkUsername($value,$rule,$data)
    {
        //dd($data);
        $data = Db::table('admin')->where('username',$value)->find();
        //dd($data);
        return $value == $data['username'] ? true : '用户名不存在';
    }
    protected function checkPassword($value,$rule,$data)
    {
        //var_dump(md5($value));
        $data = Db::table('admin')->where('password',md5($value))->find();
        //var_dump($data['password']);
        return md5($value) == $data['password'] ? true : '密码不正确';
    }
}