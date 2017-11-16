<?php

namespace app\index\model;

use think\Model;

class OrderList extends Model
{
    protected $table = 'order_list';

    public function store($postData)
    {
        //dd($postData['goods']);
        $data = [];
        foreach ($postData['goods'] as $k=>$v){
            $data[$k]['name'] = $v['name'];
            $data[$k]['price'] = $v['price'];
            $data[$k]['num'] = $v['num'];
            $data[$k]['spec'] = $v['options']['spec'];
            $data[$k]['total'] = $v['total'];
            $data[$k]['oid'] = $postData['oid'];
        }
        //dd($data);
        $this->saveAll($data);
    }
}
