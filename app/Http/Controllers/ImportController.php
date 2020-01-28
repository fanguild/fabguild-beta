<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImportController extends Controller
{

    //api画面表示用関数
    public function index()
    {
        return view('import');
    }
}
