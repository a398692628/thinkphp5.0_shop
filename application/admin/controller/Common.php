<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;
use think\Session;

class Common extends Controller{
    public function __construct(Request $request = null)
    {
        if (Session::get('username')==null){
            return $this->redirect('admin/admin/login');
        }
    }
}