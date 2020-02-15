<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UsersController extends Controller
{

    //表示用関数
    public function index()
    {
        $chara = "";
        return view('user_top', ['chara'=>$chara]);
    }
    public function other($id)
    {
        $chara = "";
        $authid = Auth::user()->id;
        if ($authid==$id) {
            return view('user_top', ['chara'=>$chara]);
        } else {
            $userid = $id;
            return view('other_top', ['userid'=>$userid,'chara'=>$chara]);
        }
    }
}
