<?php

namespace app\admin\model;

use think\Model;

class Tag extends Model
{
    protected $table = 'class_list';

    protected $pk = 'cid';

    public function store($data,$id = null)
    {
        if ($id!==null){
            $res = $this->validate(true)->save($data,['cid'=>$id]);
        }else{
            $res = $this->validate(true)->save($data);
        }
        if (false === $res){
            return ['code'=>0,'msg'=>$this->getError()];
        }else{
            return ['code'=>1,'msg'=>'操作成功'];
        }
    }
}
