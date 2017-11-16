<?php

namespace app\admin\controller;

use think\Controller;
use think\Db;
use think\Loader;
use think\Request;
use think\Session;

class Entry extends Common
{
    public function index()
    {
        return view();
    }
    public function change(Request $request)
    {
        if (request()->isPost()){
            $data = $_POST;
            $validate = Loader::validate('Entry');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }else{
                Db::table('admin')->where('username',Session::get('username'))->update(['password'=>md5($data['password'])]);
                Session::clear();
                $this->success('操作成功','admin/entry/index');
                die;
            }
        }
        return view();
    }
}
