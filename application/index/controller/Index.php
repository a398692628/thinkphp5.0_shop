<?php
namespace app\index\controller;

use houdunwang\arr\Arr;
use think\Db;
use think\Session;

class Index extends Common
{
    public function index()
    {

        $data = db('class_list')->select();
        $cateDate = Arr::channelLevel($data, $pid = 0, $html = "&nbsp;", $fieldPri = 'cid', $fieldPid = 'pid') ;
        $sData = db('slide')->select();

        $goods = Db::query('select * from goods order by rand() limit 6');
        $rGoods = Db::query('select * from goods order by rand() limit 3');
        $jGoods = Db::query('select * from goods order by rand() limit 5');
        $pGoods = Db::query('select * from goods order by rand() limit 5');

        $aData = Db::query('select * from goods order by rand() limit 6');

        $bData = Db::query('select * from goods order by rand() limit 6');
        $cData = Db::query('select * from goods order by rand() limit 6');
        $dData = Db::query('select * from goods order by rand() limit 6');

        return $this->make('',compact('cateDate','sData','goods','rGoods','jGoods','pGoods','aData','bData','cData','dData'));
    }



    public function search()
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

        $search = input('post.keyword');
        $field = db('goods')->where('gname','like',"%{$search}%")->select();
        return $this->make('lists',compact('field','cateDate','fatherData'));
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
