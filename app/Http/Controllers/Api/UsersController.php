<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use App\Mychara;
use Validator;
use Auth;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //登録処理関数
    public function store(Request $request)
    {
        // // Eloquentモデル
        // $task = new Task;
        // $task->user_id = Auth::user()->id;
        // $task->task = $request->task;
        // $task->deadline = $request->deadline;
        // $task->comment = $request->comment;
        // $task->save();
        // // 最新のDB情報を取得して返す
        // $tasks = Task::where('user_id', Auth::user()->id)
        //     ->orderBy('deadline', 'asc')
        //     ->get();
        // return $tasks;
    }

    //表示処理関数
    public function index()
    {
        $users = User::where('id', Auth::user()->id)
            ->get();
        $mychara = Mychara::where('userid', Auth::user()->id)
            ->join('charas', 'mycharas.charaid', 'charas.id')
            ->get();
        return [$users, $mychara];
    }
    //表示処理関数
    public function other($id)
    {
        $users = User::where('id', $id)
            ->get();
        $mychara = Mychara::where('userid', $id)
            ->join('charas', 'mycharas.charaid', 'charas.id')
            ->select('charaid', 'name', 'labelname', 'title')
            ->get();
        
        return [$users, $mychara];
    }

    public function destroy($task_id)
    {
        $task = Task::where('user_id', Auth::user()->id)->find($task_id);
        $task->delete();
        // 最新のDB情報を取得して返す
        $tasks = Task::where('user_id', Auth::user()->id)
            ->orderBy('deadline', 'asc')
            ->get();
        return $tasks;
    }
}
