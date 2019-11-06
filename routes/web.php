<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tasks', function () {
    return view('tasks');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// SNS認証へのページ遷移
Route::get('/login/{provider}', 'Auth\LoginController@redirectToProvider');

Route::get('/tasks_api_ajax', 'TasksController@tasks_api_ajax');
