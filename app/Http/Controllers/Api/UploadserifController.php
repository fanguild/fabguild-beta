<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use App\Upload;
use App\Uploadserif;
use Validator;
use Auth;
use App\Http\Controllers\Controller;
use Storage;

class UploadserifController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    //登録処理関数
    public function store(Request $request)
    {
        // Eloquentモデル
        $uploadserif = new Uploadserif;
        $uploadserif->userid = Auth::user()->id;
        $uploadserif->charaid = $request->charaid;
        $uploadserif->serif = $request->summary;
        $uploadserif->reason=$request->comment;
        $uploadserif->save();

        // 最新のDB情報を取得して返す
        $uploadserif_return = Uploadserif::where('userid', Auth::user()->id)
                ->where('charaid', $request->charaid)
                ->get();
        
        return $uploadserif_return;
    }

    //表示処理関数
    public function index($id)
    {
        $users = User::select('id', 'avatar')->get();
        $uploadserif = User::join('uploadserifs', 'users.id', '=', 'userid')
            //Uploadserif::join('users', 'users.id', '=', 'userid')
            ->where('charaid', $id)
            ->select('uploadserifs.id', 'userid', 'name', 'serif', 'reason', 'charaid', 'avatar')
            ->get();

        return $uploadserif;
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
