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
    return view('top');
});

Route::get('/tasks', function () {
    return view('tasks');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// SNS認証へのページ遷移
Route::get('/login/{provider}', 'Auth\LoginController@redirectToProvider');

Route::get('/tasks_api_ajax', 'TasksController@tasks_api_ajax');

// APIテストページ
Route::get('/test_user', 'TestsController@test_user');

// 画像アップロードテストページ
Route::get('/uploadtest', 'UploadsController@upload');

//キャラのトップページ
Route::get('/chara_top', function () {
    return view('chara_top');
});

//タイムラインページ
Route::get('/timeline', function () {
    return view('chara_timeline');
});

//画像投稿ページ
Route::get('/upload', function () {
    return view('upload');
});

//検索ページ
Route::get('/upload/search', function () {
    return view('search_for_upload');
});
Route::get('/chara_search', function () {
    return view('search_for_mychara');
});

//セリフ投稿
Route::get('/serif', function () {
    return view('serif');
});

//ユーザートップ
Route::get('/user', function () {
    return view('user_top');
});

//twitter API表示用（仮）
Route::get('twitter', 'TwitterController@index');

//Twitter認証テスト用
Route::get('auth/twitter', 'Auth\SocialAuthController@getTwitterRedirect');
Route::get('auth/twitter/callback', 'Auth\SocialAuthController@getTwitterCallback');
Route::get('auth/twitter/logout', 'Auth\SocialAuthController@logout');
