<?php

namespace app\admin\model;

use think\Model;
use app\admin\validate\admin as adminValidate;

class Admin extends Model
{
    public function check()
    {
        $validate = new adminValidate;
        $result = $validate->validate(true);
        if(false === $result){
            // 验证失败 输出错误信息
            dump($validate->getError());
        }
    }
}
