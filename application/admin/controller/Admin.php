<?php

namespace app\admin\controller;

use think\Controller;
use think\Db;
use think\Loader;
use think\Session;

class Admin extends Controller
{
    public function login()
    {
        //dd(Session::get());
        if (request()->isPost()){
            $data = $_POST;
            $validate = Loader::validate('Admin');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }else{
                Session::set('username',$_POST['username']);
                $this->success('登录成功','admin/entry/index');
                die;
            }
        }
        return view();
    }
    public function loginOut()
    {
        Session::clear();
        $this->success('操作成功','admin/admin/login');
    }
}
