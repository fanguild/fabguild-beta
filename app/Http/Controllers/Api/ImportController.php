<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara;
use App\Chara_title;
use Validator;
use Auth;
use App\Http\Controllers\Controller;

class ImportController extends Controller
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

    //csvをDBに入れる
    public function index()
    {
        $str="";
        $file = fopen("csv/chara_data/anime_chara_0.csv", "r");
        flock($file, LOCK_EX);
        if ($file) {
            while ($line = fgetcsv($file)) {
                $chara = new Chara;
                $chara->name=$line[0];
                $chara->title=$line[1];
                $chara->guild_rank=1;
                $chara->guild_level=1;
                $chara->save();
            };
        }
        flock($file, LOCK_UN);
        fclose($file);
        return $str;
    }
    public function index_()
    {
        $str="";
        $file = fopen("csv/works_data/anime_works_o.csv", "r");
        flock($file, LOCK_EX);
        if ($file) {
            while ($line = fgetcsv($file)) {
                $chara_title = new Chara_title;
                $chara_title->name=$line[0];
                $chara_title->categoryid=1;
                $chara_title->deleteflg=0;
                $chara_title->save();
            };
        }
        flock($file, LOCK_UN);
        fclose($file);
        return $str;
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
