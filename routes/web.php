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

use App\Chara;
use App\Mychara;

Route::get('/', function () {
    return view('top');
});


Route::get('/tasks', function () {
    return view('tasks');
});

Auth::routes();
// SNS認証へのページ遷移
Route::get('/login/{provider}', 'Auth\LoginController@redirectToProvider');

// ログイン中のみ処理を実行する
Route::group(['middleware' => ['auth']], function () {
    Route::get('/home', 'HomeController@index')->name('home');

    Route::get('/tasks_api_ajax', 'TasksController@tasks_api_ajax');

    // APIテストページ
    Route::get('/test_user', 'TestsController@test_user');

    // 画像アップロードテストページ
    Route::get('/uploadtest', 'UploadsController@upload');

    //キャラのトップページ
    Route::get('/chara/{chara}', function (Chara $chara) {
        $sum = Mychara::where('charaid', $chara->id)->count();
        $s3url = Mychara::where('userid', Auth::user()->id)
            ->where('charaid', $chara->id)
            ->select('s3url')->first();
        return view('chara_top_olt', [
        "chara" => $chara,
        "sum" => $sum,
        "s3url" => $s3url
    ]);
    });
    //ランキングページ
    Route::get('/rank/{chara}', function (Chara $chara) {
        $sum = Mychara::where('charaid', $chara->id)->count();
        $s3url = Mychara::where('userid', Auth::user()->id)
            ->where('charaid', $chara->id)
            ->select('s3url')->first();
        return view('ranking', [
        "chara" => $chara,
        "sum" => $sum,
        "s3url" => $s3url
    ]);
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
        return view('search_upload');
    });
    Route::get('/search', function () {
        return view('search_mychara');
    });

    //セリフ投稿
    Route::get('/serif', function () {
        return view('serif');
    });
    //home画面
    Route::get('/home', function () {
        return view('home');
    });
    //マイキャラ編集画面
    Route::get('/mychara/{id}', function ($id) {
        return view('mychara', ['id'=>$id]);
    });
    //ユーザートップ
    Route::get('user', 'UsersController@index')->name('user');

    //他ユーザーのページを見れるようにしたい
    Route::get('user/{id}', 'UsersController@other');

    //キャラインポート用
    Route::get('/import', 'ImportController@index');

    //作品トップ
    Route::get('work/{work}', 'WorksController@index');
    //作品内キャラ一覧
    Route::get('work/all/{work}', 'WorksController@index_all');
});

//他ユーザーのページを見れるようにしたい
Route::get('user/{id}', 'UsersController@other_logout');


//twitter API表示用（仮）
Route::get('twitter', 'TwitterController@index');

//Twitter認証テスト用
Route::get('auth/twitter', 'Auth\SocialAuthController@getTwitterRedirect');
Route::get('auth/twitter/callback', 'Auth\SocialAuthController@getTwitterCallback');
Route::get('auth/twitter/logout', 'Auth\SocialAuthController@logout');
