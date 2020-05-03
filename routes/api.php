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
Route::group(['middleware' => ['api']], function () {
    // 他ユーザーの表示
    Route::get('/user/{id}', 'Api\UsersController@other');
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

        //twitter表示のテスト
        Route::get('/twitter', 'Api\TwitterController@index_u');

        // Fileのアップロードテスト
        // 表示（）
        Route::get('/uploads', 'Api\UploadsController@index');
        // 登録（マイキャラ）
        Route::post('/mychara/register', 'Api\MycharasController@store');
        // 表示
        Route::get('/mychara', 'Api\MycharasController@index');
        //キャラページのファンリスト
        Route::get('/fanlist/{id}', 'Api\MycharasController@fanlist');
        //キャラページのラベルリスト
        Route::get('/labellist/{id}', 'Api\MycharasController@labellist');
        // ランキングの表示
        Route::get('/ranking/{id}', 'Api\MycharasController@ranking');
        Route::get('/ranking/mlc/{id}', 'Api\MycharasController@ranking_mlc');
        Route::get('/ranking/title/{id}', 'Api\MycharasController@ranking_title');

        // 表示(画像倉庫)
        Route::get('/upload_pic/{id}', 'Api\UploadController@index');
        // 表示(マイアルバム)
        Route::get('/upload/user', 'Api\UploadController@index_u');
        // 表示(マイアルバム)フィルタ用
        Route::get('/upload/user/{id}', 'Api\UploadController@index_f');


        // 登録(画像)
        Route::post('/upload_pic', 'Api\UploadController@store');
        // 登録(好きなセリフ)
        Route::post('/upload_serif', 'Api\UploadserifController@store');
        // 表示(好きなセリフ)
        Route::get('/serif/{id}', 'Api\UploadserifController@index');
        // 表示(好きなセリフ/ユーザーhome)
        Route::get('/serif_u', 'Api\UploadserifController@index_u');

        // 削除
        Route::post('/uploadsdelete/{task}', 'Api\UploadsController@destroy');

        // Twitterへ投稿する。
        Route::post('/tweet', 'Api\TwitterController@tweet');
        // 表示
        Route::get('/guild/{chara}', 'Api\CharasController@index');
        // キャラステータスの表示
        Route::get('/chara/{id}', 'Api\CharasController@index');
        
        // キャラ情報取得APIテスト
        Route::post('/standard', 'Api\CharasController@index_');

        //similarData
        Route::post('/similar/{category}', 'Api\CharasController@index_similar');
        //recomendData
        Route::post('/recommend/{category}', 'Api\CharasController@index_recomend');

        //footerデータ取得(個別キャラ)
        Route::get('/footer/{id}', 'Api\CharasController@footer_ind_index');
        //footerデータ取得（マイキャラ）
        Route::get('/footer', 'Api\CharasController@footer_index');


        //キャラインポート用
        Route::post('/import1', 'Api\ImportController@import_chara');
        //作品インポート用
        Route::post('/import2', 'Api\ImportController@import_work');

        //タイトル別検索結果
        Route::get('/title/year/{year}/season/{season}', 'Api\TitlesController@index');
    });
});

// ログイン中のみ処理を実行する
Route::group(['middleware' => ['auth']], function () {
    // api関連の処理をまとめる（urlに自動的に/apiが加わる）
    Route::group(['middleware' => ['api']], function () {
        // 表示
        Route::get('/user', 'Api\UsersController@index');
        // // 他ユーザーの表示
        // Route::get('/user/{id}', 'Api\UsersController@other');
        // 登録
        Route::post('/userstore', 'Api\UsersController@store');
        // 削除
        Route::post('/userdelete/{task}', 'Api\UsersController@destroy');
    });
});
