<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api']], function () {
    //twitter表示のテスト
    Route::get('/twitter/{chara}', 'Api\TwitterController@index');
});


// ログイン中のみ処理を実行する
Route::group(['middleware' => ['auth']], function () {
    // api関連の処理をまとめる（urlに自動的に/apiが加わる）
    Route::group(['middleware' => ['api']], function () {
        // 表示
        Route::get('/', 'Api\TasksController@index');
        // 登録
        Route::post('/tasks', 'Api\TasksController@store');
        // 削除
        Route::post('/task/{task}', 'Api\TasksController@destroy');

        // Fileのアップロードテスト
        // 表示
        Route::get('/uploads', 'Api\UploadsController@index');
        // 登録
        Route::post('/uploadsstore', 'Api\UploadsController@store');
        // 削除
        Route::post('/uploadsdelete/{task}', 'Api\UploadsController@destroy');

        // Twitterへ投稿する。
        Route::post('/tweet', 'Api\TwitterController@tweet');
        // 表示
        Route::get('/guild/{chara}', 'Api\CharasController@index');
    });
});

// ログイン中のみ処理を実行する
Route::group(['middleware' => ['auth']], function () {
    // api関連の処理をまとめる（urlに自動的に/apiが加わる）
    Route::group(['middleware' => ['api']], function () {
        // 表示
        Route::get('/user', 'Api\UsersController@index');
        // 登録
        Route::post('/userstore', 'Api\UsersController@store');
        // 削除
        Route::post('/userdelete/{task}', 'Api\UsersController@destroy');
    });
});
