<?php
namespace app\index\controller;

use app\index\model\Address;
use think\Session;

class My extends Common
{
    public function __construct()
    {
        //dd(Session::get('userId'));
        if (!Session::get('userId')){
            $this->redirect('index/login/login');
        }
    }

    public function index()
    {
        $data = db('shop_order')->where('uid',Session::get('userId'))->select();
        return $this->make('my',compact('data'));
    }

    public function address(Address $address)
    {
        $id = input('param.id');
        if ($id){
            $oldData = db('address')->find($id);
            //dd($oldData['id']);
        }else{
            $oldData = [
                'name'=>'',
                'area'=>'  ',
                'address'=>'',
                'zipcode'=>'',
                'phone'=>'',
                'email'=>'',
                'id'=>'',
            ];
        }
        if (request()->post()){
            $id=input('post.id');
            $data = input('post.');
            $data['uid']=Session::get('userId');
            $data['area']=implode(' ',$data['area']);
            $res = $address->store($data,$id);
            if ($res['code']==1){
                return ['code'=>1,'msg'=>$res['msg'],'url'=>url('index/my/address')];
            }else{
                return ['code'=>0,'msg'=>$res['msg']];
            }
        }
        $addressData = db('address')->where('uid',Session::get('userId'))->select();
        //dd($addressData);
        return $this->make('myAddress',compact('addressData','oldData'));
    }

    public function del()
    {
        $id = input('post.id');
        db('address')->delete($id);
        return ['code'=>1,'msg'=>'删除成功'];
    }

}