<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Validator;
use App\Title;
use App\Chara;
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
    public function import_chara(Request $request)
    {
        $sheets = \App\GoogleSheet::instance();

        $sheet_id = $request->spreadsheetid;
        $start = $request->start;
        $end = $request->end;
        $range = $start.':'.$end;
        $response = $sheets->spreadsheets_values->get($sheet_id, $range);
        $values = $response->getValues();

        foreach ($values as $value) {
            $chara = new Chara;
            $chara->name=$value[0];
            $chara->kana=$value[1];
            $chara->title=$value[2];
            $chara->guild_rank=1;
            $chara->guild_level=1;
            $chara->save();
        };
        // 最新のDB情報を取得して返す
        $charas = Chara::where('title', 'A3! SEASON SPRING ＆ SUMMER')
                ->select('id', 'name', 'title')
                ->get();
        return $charas;
    }
    public function import_work(Request $request)
    {
        $sheets = \App\GoogleSheet::instance();

        // $sheet_id = $request->spreadsheetid;
        // $start = $request->start;
        // $end = $request->end;
        // $range = $start.':'.$end;
        // $response = $sheets->spreadsheets_values->get($sheet_id, $range);
        // $values = $response->getValues();
        // foreach ($values as $value) {
        //     // Eloquentモデル
        //     $title = new Title;
            
        //     $title->categoryname=$value[0];
        //     $title->titlename=$value[3];
        //     $title->year=$value[1];
        //     $title->categoryid=$value[2];
        //     $title->ogp=$value[4];
        //     $title->url=$value[5];
        //     $title->outher=$value[6];
        //     $title->maker=$value[7];
        //     $title->holder=$value[8];
        //     $title->mainchara1=$value[9];
        //     $title->mainchara2=$value[10];
        //     $title->mainchara3=$value[11];
        //     $title->deleteflg=0;
        //     $title->save();
        // };
        // // 最新のDB情報を取得して返す
        $titles = Title::select('id', 'titlename', 'ogp', 'url')->get();
        
        return $titles;
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
