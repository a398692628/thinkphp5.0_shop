<?php

namespace app\admin\model;

use think\Db;
use think\Model;

class Goods extends Model
{
    protected $table = 'goods';

    protected $pk = 'gid';

    public function store($data,$id = null)
    {
        foreach ($data['pics'] as $k=>$v){
            $combineMiddlePath = '';$combineSmallPath = '';
            foreach($data['pics'] as $k=>$v){
                $image = \think\Image::open($v);
                $middlePath = dirname ($v) . '/middle_' . basename ($v);
                $combineMiddlePath .= $middlePath . ',';
                $image->thumb(400, 400)->save($middlePath);

                $smallPath = dirname ($v) . '/small_' . basename ($v);
                $combineSmallPath .= $smallPath . ',';
                $image->thumb(100, 100)->save($smallPath);
            }
        }

        $data['big_img'] = implode(',',$data['pics']);
        $data['mid_img'] = rtrim($combineMiddlePath,',');
        $data['small_img'] = rtrim($combineSmallPath,',');

        if ($id!==null){
            $res = $this->validate(true)->allowField(true)->save($data,['gid'=>$id]);
            Db::table('spec')->where('gid',$id)->delete();
            $spec = json_decode ($data['spec'],true);
            foreach($spec as $k=>$v){
                $model = new Spec();
                $model->combine = 	$v['combine'];
                $model->total = 	$v['total'];
                $model->gid = $id;
                $model->allowField(true)->save();
            }
        }else{
            $res = $this->validate(true)->allowField(true)->save($data);
            $spec = json_decode ($data['spec'],true);
            foreach($spec as $k=>$v){
                $model = new Spec();
                $model->combine = 	$v['combine'];
                $model->total = 	$v['total'];
                $model->gid = 	$this->gid;
                $model->allowField(true)->save();
            }
        }
        if (false === $res){
            return ['code'=>0,'msg'=>$this->getError()];
        }else{
            return ['code'=>1,'msg'=>'操作成功'];
        }
    }
}
