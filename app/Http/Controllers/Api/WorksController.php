<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara_title;
use App\Chara;
use App\Mychara;
use Auth;
use App\Http\Controllers\Controller;

class WorksController extends Controller
{

    //api画面表示用関数
    public function index($id)
    {
        $work = Chara_title::where('id', $id)
                ->first();
        // $charas = \DB::table('charas')
        //         ->leftJoin("mycharas", "charas.id", "=", "mycharas.charaid")
        //         ->where('title', $work->name)
        //         ->get();
        // $charas = \DB::table('charas')
        //         ->join("mycharas", "charas.id", "=", "mycharas.charaid")
        //         ->where('title', $work->name)
        //         ->get();
        $charas = \DB::table('charas')
                ->select("charas.id", "mycharas.s3url", "charas.name", 'userid')
                ->leftJoin("mycharas", "charas.id", "=", "mycharas.charaid")
                ->where('title', $work->name)
                ->where(function ($q) {
                    $q->where('userid', Auth::user()->id)
                        ->orWhere('userid', null);
                })
                ->orderBy('id', 'asc')
                ->get();


        return $charas;
    }
}
