<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara;
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
        return [$charas,$sum,$mlc];
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
