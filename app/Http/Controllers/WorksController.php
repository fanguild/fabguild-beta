<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Chara_title;
use App\Chara;
use App\Mychara;
use App\Title;
use Auth;

class WorksController extends Controller
{

    //api画面表示用関数
    public function index($id)
    {
        $work = Title::where('id', $id)
                ->first();
        $charas = \DB::table('charas')
                ->select("charas.id", "mycharas.s3url", "charas.name", "charas.title")
                ->leftJoin("mycharas", "charas.id", "=", "mycharas.charaid")
                ->where('title', $work->name)
                ->orderBy('id', 'asc')
                ->get();

        return view('work_top', [
            'work'=>$work,
            'charas'=>$charas]);
    }
    public function index_all($id)
    {
        return view(
            'allchara',
            ['id'=>$id]
        );
    }
}
