<?php
namespace app\index\controller;

use houdunwang\arr\Arr;
use think\Db;

class Goods extends Common
{
    public function index()
    {
        $gid = input('param.gid');
        $field = db('goods')->where('gid',$gid)->find();
        $field['mid_img'] = explode (',',$field['mid_img']);
        $spec = db('spec')->where('gid',$gid)->select ();

        $data = db('class_list')->select();
        $cateDate = Arr::channelLevel($data, $pid = 0, $html = "&nbsp;", $fieldPri = 'cid', $fieldPid = 'pid') ;

        $aData = Db::query('select * from goods order by rand() limit 5');

        //dd($aData);
        return $this->make('goods',compact ('field','spec','cateDate','aData'));
    }

    public function ajaxAddCart()
    {
        $post = input('post.');
        $goodsData = db('goods')->find($post['gid']);
        $data = [
            'id' =>$post['gid'],
            'name'=>$goodsData['gname'],
            'num'=>$post['num'],
            'price'=>$goodsData['price'],
            'options'=>[
                'spec'=>$post['spec'],
            ]
        ];
        (new \cart\Cart())->add($data);
    }
}