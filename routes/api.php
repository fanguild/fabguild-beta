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
        // 表示（）
        Route::get('/uploads', 'Api\UploadsController@index');
        // 登録（マイキャラ）
        Route::post('/uploadsstore', 'Api\MycharasController@store');
        // 表示
        Route::get('/mychara', 'Api\MycharasController@index');

        // 表示(画像倉庫)
        Route::get('/upload_pic/{id}', 'Api\UploadController@index');
        // 表示(マイアルバム)
        Route::get('/upload_u', 'Api\UploadController@index_u');

        // 登録(画像)
        Route::post('/upload_pic', 'Api\UploadController@store');
        // 登録(好きなセリフ)
        Route::post('/upload_serif', 'Api\UploadserifController@store');
        // 表示(好きなセリフ)
        Route::get('/serif/{id}', 'Api\UploadserifController@index');
        // 削除
        Route::post('/uploadsdelete/{task}', 'Api\UploadsController@destroy');

        // Twitterへ投稿する。
        Route::post('/tweet', 'Api\TwitterController@tweet');
        // 表示
        Route::get('/guild/{chara}', 'Api\CharasController@index');

        //投稿用データ取得
        Route::get('/postready/{id}', 'Api\CharasController@postready_index');

        //キャラインポート用
        Route::get('/import1', 'Api\ImportController@index');
        //作品インポート用
        Route::get('/import2', 'Api\ImportController@index_');

        //タイトル別検索結果
        Route::get('/title/{category}', 'Api\TitlesController@index');

        //キャラページのファンリスト
        Route::get('/fanlist/{id}', 'Api\FanlistController@index');
        //作品別キャラリスト
        Route::get('/work/{id}', 'Api\WorksController@index');
    });
});

// ログイン中のみ処理を実行する
Route::group(['middleware' => ['auth']], function () {
    // api関連の処理をまとめる（urlに自動的に/apiが加わる）
    Route::group(['middleware' => ['api']], function () {
        // 表示
        Route::get('/user', 'Api\UsersController@index');
        // 他ユーザーの表示
        Route::get('/user/{id}', 'Api\UsersController@other');
        // 登録
        Route::post('/userstore', 'Api\UsersController@store');
        // 削除
        Route::post('/userdelete/{task}', 'Api\UsersController@destroy');
    });
});
