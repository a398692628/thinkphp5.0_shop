<?php

namespace app\index\model;

use think\Model;

class Login extends Model
{
    protected $table = 'user_list';
    protected $pk = 'uid';

    public function store($data)
    {
        $data['password'] = md5($data['password']);
        $data['password_confirm'] = md5($data['password_confirm']);
        $res = $this->validate('Register')->allowField(true)->save($data);
        if (false === $res){
            return ['code'=>0,'msg'=>$this->getError()];
        }else{
            return ['code'=>1,'msg'=>'操作成功'];
        }
    }
}
