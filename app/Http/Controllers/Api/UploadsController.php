<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Upload;
use Validator;
use Auth;
use App\Http\Controllers\Controller;
use Storage;

class UploadsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //登録処理関数
    public function store(Request $request)
    {
        $path = Storage::disk('s3')->putFile('/', $request->file('file'), 'public');
        $url = Storage::disk('s3')->url($path);
        // Eloquentモデル
        $uploads = new Upload;
        $uploads->userid = Auth::user()->id;
        $uploads->s3url = $url;
        $uploads->save();

        // 最新のDB情報を取得して返す
        $uploads_return = Upload::where('userid', Auth::user()->id)
            ->get();
        return $uploads_return;
    }

    //表示処理関数
    public function index()
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
