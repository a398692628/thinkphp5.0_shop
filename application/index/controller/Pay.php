<?php
namespace app\index\controller;

use app\index\model\OrderList;
use app\index\model\ShopOrder;
use think\Session;
use cart\Cart;

class Pay extends Common
{
    public $data =[];

    public function index()
    {
        if (request()->post()){
            $pdata = $_POST['cartId'];
            $data = (new \cart\Cart())->getGoods();
            $allToatl= 0;
            foreach ($data as $k=>$v){
                if (!in_array($k,$pdata)){
                    unset($data[$k]);
                }
                $allToatl += $v['total'];
            }
            Session::set('goods',$data);
        }
        $addressData = db('address')->where('uid',Session::get('userId'))->select();
        return $this->make('confirmorder',compact('data','allToatl','addressData'));
    }

    public function payFor(ShopOrder $shopOrder,OrderList $orderList)
    {
        //dd(Session::get('cart'));
        $cart = Session::get('cart.goods');
        //dd($cart);
        $data = input('post.');
        $data['order_number'] = (new Cart())->getOrderId();
        $data['goods'] = Session::get('goods');
        $oid = $shopOrder->store($data);
        $data['oid'] = $oid;
        $orderList ->store($data);

        foreach (Session::get('goods') as $k=>$v){
            Session::delete($cart[$k]);
        }

        return $this->make('payfor',compact('data'));
    }
}