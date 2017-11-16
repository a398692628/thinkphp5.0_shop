<?php

namespace app\index\model;

use think\Model;
use think\Session;

class ShopOrder extends Model
{
    protected $table = 'shop_order';

    protected $pk = 'oid';

    public function store($postData)
    {
        $data['uid'] = Session::get('userId');
        $data['order_number'] = $postData['order_number'];
        $data['allToatl'] = $postData['allToatl'];
        $data['addressId'] = $postData['addressId'];
        $data['buyer_note'] = $postData['buyer_note'];
        $this->save($data);
        return $this->oid;
    }
}
