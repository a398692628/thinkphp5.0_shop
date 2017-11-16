<?php
namespace app\index\controller;

use think\Request;
use think\Session;

class Cart extends Common
{
    public function login()
    {
        if(Session::get('name') == false ){
            return ['code'=>0,'msg'=>'请先登录'];
        }else{
            return ['code'=>1,'url'=>url('index/cart/index')];
        }
    }

    public function index()
    {
        $data = session('cart');
        return $this->make('car',compact('data'));
    }

    public function ajaxUpdateCart()
    {
        $post = input ('post.');
        $data=array(
            'sid'=>$post['sid'],
            'num'=>$post['num'],
        );
        (new \cart\Cart())->update($data);
    }

    public function ajaxDelCart()
    {
        $post = input ('post.');
        $data=array(
            'sid'=>$post['sid'],
            'num'=>$post['num'],
        );
        (new \cart\Cart())->update($data);
    }
}