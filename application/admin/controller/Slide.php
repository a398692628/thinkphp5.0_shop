<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;
use app\admin\model\Slide as Slides;

class Slide extends Common
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        $data = Slides::select();
        return view('',compact('data'));
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        return view();
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        $validate = new \app\common\validate\Slide();
        $data = $request->post();
        $res = $validate->scene('add')->check($data);
        if (!$res){
            $this->error($validate->getError());
        }
        $slide = new Slides($data);
        $slide->save();
        $this->success('操作成功','admin/slide/index');
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
        $data = Slides::get($id);
        return view('',compact('data'));
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        $validate = new \app\common\validate\Slide();
        $data = $request->post();
        $res = $validate->scene('edit')->check($data);
        if (!$res){
            $this->error($validate->getError());
        }
        $sldies = new Slides;
        $sldies -> save($data,['sid'=>$id]);
        $this->success('操作成功','/admin/slide/index');
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        Slides::destroy($id);
        return ['valid'=>1,'msg'=>'操作成功'];
    }
    public function upload ()
    {
        // 获取表单上传文件 例如上传了001.jpg
        $file = request ()->file ( 'Filedata' );

        // 移动到框架应用根目录/public/uploads/ 目录下
        if ( $file ) {
            $info = $file->move ( ROOT_PATH . 'public' . DS . 'uploads' );
            if ( $info ) {
                // 成功上传后 获取上传信息
                echo 'uploads' . DS . $info->getSaveName ();
            } else {
                // 上传失败获取错误信息
                echo $file->getError ();
            }
        }
    }
}
