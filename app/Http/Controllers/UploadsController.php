<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadsController extends Controller
{
    //
    //api画面表示用関数
    public function upload()
    {
        return view('upload');
    }
}
