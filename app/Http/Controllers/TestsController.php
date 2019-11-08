<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestsController extends Controller
{
    //api画面表示用関数
    public function test_user()
    {
        return view('test_user');
    }
}
