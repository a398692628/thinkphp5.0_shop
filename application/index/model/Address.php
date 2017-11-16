<?php

namespace app\index\model;

use think\Model;

class Address extends Model
{
    protected $table = 'address';

    public function store($data,$id = null)
    {
        if ($id){
            $res = $this->validate('Address')->allowField(true)->save($data,['id'=>$id]);
            //dd($res);
        }else{
            $res = $this->validate('Address')->allowField(true)->save($data);
        }
        if (false === $res){
            return ['code'=>0,'msg'=>$this->getError()];
        }else{
            return ['code'=>1,'msg'=>'操作成功'];
        }
    }
}
