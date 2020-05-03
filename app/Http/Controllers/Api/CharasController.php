<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara;
use App\Title;
use App\Mychara;
use Validator;
use Auth;
use App\Http\Controllers\Controller;

class CharasController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //登録処理関数
    // public function store(Request $request)
    // {
    //     // Eloquentモデル
    //     $task = new Task;
    //     $task->user_id = Auth::user()->id;
    //     $task->task = $request->task;
    //     $task->deadline = $request->deadline;
    //     $task->comment = $request->comment;
    //     $task->save();
    //     // 最新のDB情報を取得して返す
    //     $tasks = Task::where('user_id', Auth::user()->id)
    //         ->orderBy('deadline', 'asc')
    //         ->get();
    //     return $tasks;
    // }

    //表示処理関数
    public function index($id)
    {
        $charas = Chara::where('id', $id)
            ->get();
        $sum = Mychara::where('charaid', $id)->count();
        $mlc = Mychara::where('charaid', $id)
            ->where('labelname', '推し')
            ->count();

        $rankinglists = Mychara::select(
            'charaid',
            'charaname',
            \DB::raw('COUNT(charaid) AS count'),
        )->groupBy('charaid', 'charaname')
                ->orderBy('count', 'desc')
                ->get();
        $no = 0;
        foreach ($rankinglists as $ranking) {
            $no ++;
            if ($ranking->charaid==$id) {
                $rank = $no;
            } else {
                $rank = "∞";
            }
        }
                
        return [$charas,$sum,$mlc,$rank];
    }
    //apiテスト用表示処理関数
    public function index_(Request $request)
    {
        $title = Title::where('id', $request->work)
                ->select('titlename')
                ->first();
        $titles =Title::where('id', $request->work)
                ->get();
        $charas = Chara::where('title', $title->titlename)
                ->orderBy('id', 'asc')
                ->take($request->number)
                ->get();
        
        $mycharas = Mychara::where('userid', Auth::user()->id)
                ->get();

        return ['charas'=>$charas,
                'titles'=>$titles,
                'mycharas'=>$mycharas];
    }
    //apiテスト用表示処理関数
    public function index_similar($category, Request $request)
    {
        $title = Title::where('id', $request->work)
            ->first();
        $charas = Chara::where('title', $title->titlename)
                ->orderBy('id', 'asc')
                ->take($request->number)
                ->get();
        if ($category=='outher') {
            $titles =Title::where('outher', $title->outher)
                ->whereNotIn('id', [$request->work])
                ->take($request->number)
                ->get();
        } elseif ($category=='maker') {
            $titles =Title::where('maker', $title->maker)
                ->whereNotIn('id', [$request->work])
                ->take($request->number)
                ->get();
        }
        $mycharas = Mychara::where('userid', Auth::user()->id)
                ->get();

        return ['charas'=>$charas,
                'titles'=>$titles,
                'mycharas'=>$mycharas];
    }
    //apiテスト用表示処理関数
    public function index_recomend($category, Request $request)
    {
        if ($category=='sametitle') {
            $chara = Chara::where('id', $request->chara)
            ->first();
        
            $charas = Chara::where('title', $chara->title)
                ->whereNotIn('id', [$request->chara])
                ->orderBy('id', 'asc')
                ->take($request->number)
                ->get();
        }
        
        $titles =Title::take($request->number)
                ->get();
        $mycharas = Mychara::where('userid', Auth::user()->id)
                ->get();
        return ['charas'=>$charas,
                'titles'=>$titles,
                'mycharas'=>$mycharas];
    }
    //投稿用キャラデータ関数
    public function footer_ind_index($id)
    {
        $charas = Chara::where('id', $id)
            ->first();
        $mycharas = Mychara::where('userid', Auth::user()->id)
            ->get();
        $userid = Auth::user()->id;
        return [$mycharas,$userid,$charas];
    }

    //footer用キャラデータ関数
    public function footer_index()
    {
        $charas = Mychara::where('userid', Auth::user()->id)
            ->get();
        $userid = Auth::user()->id;
        return [$charas,$userid];
    }

    // public function destroy($task_id)
    // {
    //     $task = Task::where('user_id', Auth::user()->id)->find($task_id);
    //     $task->delete();
    //     // 最新のDB情報を取得して返す
    //     $tasks = Task::where('user_id', Auth::user()->id)
    //         ->orderBy('deadline', 'asc')
    //         ->get();
    //     return $tasks;
    // }
}
