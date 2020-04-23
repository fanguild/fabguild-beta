<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara_title;
use App\Title;
use App\Chara;
use App\Mychara;
use Auth;
use App\Http\Controllers\Controller;

class WorksController extends Controller
{

    //api画面表示用関数
    public function index($id)
    {
        $work = Title::where('id', $id)
                ->first();
        
        $mycharas = \DB::table('mycharas')
                ->where('userid', Auth::user()->id)
                ->select("charaid", "s3url", "charaname", 'userid')
                ->get();

        $charas = \DB::table('charas')
                ->where('title', $work->titlename)
                ->select("id", "charas.name")
                ->orderBy('id', 'asc')
                ->take(10)
                ->get();
        
        return [$mycharas,$charas,$work];
    }
    //api画面表示用関数
    public function index_all($id)
    {
        $work = Title::where('id', $id)
                ->first();
        
        $mycharas = \DB::table('mycharas')
                ->where('userid', Auth::user()->id)
                ->select("charaid", "s3url", "charaname", 'userid')
                ->get();

        $charas = \DB::table('charas')
                ->where('title', $work->titlename)
                ->select("id", "charas.name")
                ->orderBy('id', 'asc')
                ->paginate(25);
        
        return [$mycharas,$charas,$work];
    }
}
