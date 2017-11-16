<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;
use app\admin\model\Tag as TagModel;

class Tag extends Controller
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index(TagModel $tag)
    {
        $data = $tag->select();
        $data = \houdunwang\arr\Arr::tree($data , 'cname' , $fieldPri = 'cid' , $fieldPid = 'pid');
        return view('',compact('data'));
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create(TagModel $tag)
    {
        $data = $tag->select();
        $data = \houdunwang\arr\Arr::tree($data , 'cname' , $fieldPri = 'cid' , $fieldPid = 'pid');
        return view('',compact('data'));
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request,TagModel $tagmodel)
    {
        //dd($_POST);
        if (request()->post()){
            $res = $tagmodel->store ( input ( 'post.' ) );
            if ($res['code']==1){
                $this->success($res['msg'],'/admin/tag/index');
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
    public function edit($id,TagModel $tag)
    {
        $allData = $tag->select();
        $allData = \houdunwang\arr\Arr::tree($allData , 'cname' , $fieldPri = 'cid' , $fieldPid = 'pid');
        $data = TagModel::get($id);
        return view('',compact('data','allData'));
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id,TagModel $tagmodel)
    {
        if (request()->post()){
            $res = $tagmodel->store ( input ( 'post.' ) , $id );
            if ($res['code']==1){
                $this->success($res['msg'],'/admin/tag/index');
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
    public function delete($id,TagModel $tag)
    {
        $data = TagModel::get($id);
        $res = TagModel::where('pid',$data['cid'])->find();
        if (!$res){
            TagModel::destroy($id);
            return (['valid'=>1,'msg'=>'操作成功']);
        }else{
            return (['valid'=>2,'msg'=>'操作失败']);
        }
    }
}
