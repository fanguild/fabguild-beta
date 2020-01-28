<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Chara_title;
use App\Chara;

class WorksController extends Controller
{

    //api画面表示用関数
    public function index($id)
    {
        $work = Chara_title::where('id', $id)
                ->first();
        $charas = Chara::where('title', $work->name)
                ->get();
        return view('work_top', [
            'work'=>$work,
            'charas'=>$charas]);
    }
}
