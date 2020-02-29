<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use App\Mychara;
use App\Upload;
use Validator;
use Auth;
use App\Http\Controllers\Controller;
use Socialite;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Abraham\TwitterOAuth\TwitterOAuth;
use Illuminate\Support\Facades\Input;

class UsersController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

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
        $album = Upload::where('userid', Auth::user()->id)
            ->select('userid')
            ->get();
        $count = count($album);
        $session =session()->all();


        return [$users, $mychara,$count,$session];
    }
    //表示処理関数
    public function other($id)
    {
        $users = User::where('id', $id)
            ->get();
        $mychara = Mychara::where('userid', $id)
            ->join('charas', 'mycharas.charaid', 'charas.id')
            // ->select('charaid', 'name', 'labelname', 'title')
            ->get();
        $album = Upload::where('userid', $id)
            ->select('userid')
            ->get();
        $count = count($album);
        return [$users, $mychara,$count];
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
