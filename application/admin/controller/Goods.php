<?php

namespace app\admin\controller;

use app\admin\model\Spec;
use houdunwang\arr\Arr;
use think\Controller;
use think\Db;
use think\Request;
use app\admin\model\Goods as GoodsModel;

class Goods extends Controller
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        $data = Db::table('goods')->select();
        return view('',compact('data'));
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        $cateData = Db::table('class_list')->select();
        $cateData = Arr::tree($cateData , 'cname' , $fieldPri = 'cid' , $fieldPid = 'pid');
        return view('',compact('cateData'));
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request,GoodsModel $goodsModel)
    {
//        dd($_POST);
        if (request()->post()){
//            dump($_POST);
//            dd(in_array('gname',$_POST));
//            if (false==in_array('pics',$_POST)){
//                $this->error('请上传商品图册');
//            }
            $res = $goodsModel->store ( input ( 'post.' ) );
            if ($res['code']==1){
                $this->success($res['msg'],'/admin/goods/index');
                die;
            }else{
                $this->error($res['msg']);
            }
        }
    }

    /**
     * 显示指定的资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function read($id)
    {
        //
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function edit($id)
    {
        $data = Db::table('goods')->find($id);
        $cateData = Db::table('class_list')->select();
        $cateData = Arr::tree($cateData , 'cname' , $fieldPri = 'cid' , $fieldPid = 'pid');
        //dd($data);
        $specs = Db::table('spec')->where('gid',$data['gid'])->select();
        $specs = json_encode($specs,JSON_UNESCAPED_UNICODE);
        $pics = explode(',',$data['big_img']);
        //dd($pics);
        //dd($data);
        return view('',compact('data','cateData','specs','pics'));
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id,GoodsModel $goodsModel)
    {
        //dd($_POST);
        if (request()->post()){
            $res = $goodsModel->store ( input ( 'post.' ) , $id );
            if ($res['code']==1){
                $this->success($res['msg'],'/admin/goods/index');
                die;
            }else{
                $this->error($res['msg']);
            }
        }
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        GoodsModel::destroy($id);
        Spec::where('gid',$id)->delete();
        return ['valid'=>1,'msg'=>'操作成功'];
    }
}
