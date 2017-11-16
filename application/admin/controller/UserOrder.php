<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;

class UserOrder extends Controller
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        $data = db('shop_order')->order('create_time','desc')->select();
        foreach ($data as $k=>$v){
            $data[$k]['username'] = db('user_list')->where('uid',$data[$k]['uid'])->value('username');
            $data[$k]['address'] = db('address')->where('id',$data[$k]['addressId'])->value('area');
            switch ($data[$k]['state']){
                case 0 :
                    $data[$k]['state'] = "已下单";
                    break;
                case 1 :
                    $data[$k]['state'] = "已付款";
                    break;
                case 2 :
                    $data[$k]['state'] = "已发货";
                    break;
                case 3 :
                    $data[$k]['state'] = "已完成";
                    break;
                case 4 :
                    $data[$k]['state'] = "已取消";
                    break;
            }
        }
        //dd($data);
        return view('',compact('data'));
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        //
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        //
    }

    /**
     * 显示指定的资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function read($id)
    {
        //
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        //
    }


    public function pay()
    {
        $oid = input('post.oid');
        db('shop_order')->where('oid',$oid)->setField('state',1);
        return ['code'=>1,'msg'=>'已付款'];
    }

    public function send($oid)
    {
        db('shop_order')->where('oid',$oid)->setField('state',2);
        return ['code'=>1,'msg'=>'已发货'];
    }

    public function sure($oid)
    {
        db('shop_order')->where('oid',$oid)->setField('state',3);
        return ['code'=>1,'msg'=>'已发货'];
    }

    public function del()
    {
        $oid = input('post.oid');
        //dd($oid);
        db('shop_order')->where('oid',$oid)->setField('state',4);
        return ['code'=>1,'msg'=>'已付款'];
    }
}
