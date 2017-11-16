<?php

namespace app\component\controller;

use think\Controller;
use think\Request;

class Uploader extends Controller
{
    public function uploader(Request $request)
    {
        $file = request()->file('file');
        if ($file){

            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');

            echo json_encode(['valid'=>1 , 'message'=>$request->domain() . '/uploads/' . $info->getSaveName()]);
        }
    }
}
