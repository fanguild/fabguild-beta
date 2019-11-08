<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;

class TasksController extends Controller
{
    //
    //api画面表示用関数
    public function tasks_api_ajax()
    {
        return view('tasks_api_ajax');
    }
}
