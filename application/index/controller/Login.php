<?php
namespace app\index\controller;

use app\index\model\Login as LoginModel;
use think\Session;

class Login extends Common
{
    public function login()
    {
        if (request()->post()){
            $data = input('post.');
            $res = $this->validate($data,'Login');
            if (true !== $res){
                $this->error($res);
            }else{
                Session::set('name',$_POST['username']);
                $userId = db('user_list')->where('username',$_POST['username'])->value('uid');
                Session::set('userId',$userId);
                $this->success('登录成功',url('index/index/index'));
            }
        }

        return $this->make('login');
    }

    public function register(LoginModel $loginModel)
    {
        if (request()->post()){
            $data = input('post.');
            $res = $loginModel->store($data);
            if ($res['code']==1){
                $this->success($res['msg'],url('index/login/login'));
            }else{
                $this->error($res['msg']);
            }
        }
        return $this->make('register');
    }

    public function out()
    {
        Session::delete('name');
        Session::delete('userId');
        return ['code'=>1,'msg'=>'退出成功',url('index/index/index')];
    }
}