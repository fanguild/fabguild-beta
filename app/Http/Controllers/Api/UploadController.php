<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Upload;
use Validator;
use Auth;
use App\Http\Controllers\Controller;
use Storage;

class UploadController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //登録処理関数
    public function store(Request $request)
    {
        $path = Storage::disk('s3')->putFile('/', $request->file('file1'), 'public');
        $url = Storage::disk('s3')->url($path);
        // Eloquentモデル
        $uploads = new Upload;
        $uploads->userid = Auth::user()->id;
        $uploads->charaid = $request->charaid;
        $uploads->uploadflg = $request->posttype;
        $uploads->s3url=$url;
        $uploads->comment=$request->comment;
        $uploads->save();

        // 最新のDB情報を取得して返す
        //ユーザーページからアップロードした場合には0
        //キャラページからアップロードした場合には１
        
        $uploads_return = Upload::where('userid', Auth::user()->id)
                ->where('charaid', $request->charaid)
                ->get();
        //自分で投稿したデータ＋他ユーザーがギルドに公開して投稿したデータ
        $uploadf = Upload::where('charaid', $request->charaid)
                ->where(function ($q) {
                    $q->where('userid', Auth::user()->id)
                        ->orWhere(function ($q1) {
                            $q1->where('userid', '!=', Auth::user()->id)
                            ->where('uploadflg', 2);
                        });
                })
                ->get();
        if ($request->post_eria_flg==0) {
            return $uploads_return;
        } else {
            return $uploadf;
        }
    }

    //表示処理関数
    public function index($id)
    {
        $uploads = Upload::where('charaid', $id)
            ->where('userid', Auth::user()->id)
            ->get();
        $uploadother = Upload::where('charaid', $id)
            ->where('userid', '!=', Auth::user()->id)
            ->where('uploadflg', 2)
            ->get();
        //自分で投稿したデータ＋他ユーザーがギルドに公開して投稿したデータ
        $uploadf = Upload::where('charaid', $id)
            ->where(function ($q) {
                $q->where('userid', Auth::user()->id)
                    ->orWhere(function ($q1) {
                        $q1->where('userid', '!=', Auth::user()->id)
                           ->where('uploadflg', 2);
                    });
            })
            ->get();

        return $uploadf;
    }
    //表示処理関数(マイアルバム)
    public function index_u()
    {
        $uploads = Upload::where('userid', Auth::user()->id)
            ->get();
        return $uploads;
    }

    public function destroy($upload_id)
    {
        $upload = Upload::where('userid', Auth::user()->id)->find($upload_id);
        //データ取得後 S3のデータを消去
        $disk = Storage::disk('s3');
        $disk->delete($upload->s3url);

        $upload->delete();
        // 最新のDB情報を取得して返す
        $uploads = Upload::where('userid', Auth::user()->id)
            ->get();
        return $uploads;
    }
}
