<?php
namespace app\index\controller;

use think\Controller;

class Common extends Controller
{
    public function make($tpl = '' , $data = '')
    {
        $tpl = $tpl ? $tpl : request()->action();
        return view(ROOT_PATH.'template/' . $tpl . '.html' , $data);
    }
    public function getFather($data,$cid)
    {
        static $temp =[];
        foreach ($data as $k=>$v){
            if ($v['cid']==$cid){
                $temp[] = $v;
                $this->getFather($data,$v['pid']);
            }
        }
        return $temp;
    }
}