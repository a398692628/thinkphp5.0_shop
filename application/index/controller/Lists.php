<?php
namespace app\index\controller;

use houdunwang\arr\Arr;

class Lists extends Common
{
    public function index()
    {
        $cid = input('param.cid');
        $data = db('class_list')->select();

        $cids = $this->getSon($data,$cid);
        $cids[] = $cid;
        $field = db('goods')->whereIn('cid',$cids)->select();
        $fatherData = $this->getFather($data,$cid);
        $fatherData = array_reverse($fatherData);

        $data = db('class_list')->select();
        $cateDate = Arr::channelLevel($data, $pid = 0, $html = "&nbsp;", $fieldPri = 'cid', $fieldPid = 'pid') ;

        return $this->make('lists',compact('fatherData','field','cateDate'));
    }

    public function getSon ( $data , $cid )
    {
        static $temp = [];
        foreach ($data as $k=>$v){
            if ($cid == $v['pid']){
                $temp[] = $v['cid'];
                $this->getSon($data,$v['cid']);
            }
        }
        return $temp;
    }
}