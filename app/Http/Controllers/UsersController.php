<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{

    //api画面表示用関数
    public function index()
    {
        return view('user_top');
    }
    public function other($id)
    {
        $otherid = $id;
        return view('user_top', ['otherid'=>$otherid]);
    }
}
