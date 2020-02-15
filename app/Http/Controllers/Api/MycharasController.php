<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Mychara;
use App\Chara;
use Validator;
use Auth;
use App\Http\Controllers\Controller;
use Storage;

class MycharasController extends Controller
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
        $mycharas = new Mychara;
        $mycharas->userid = Auth::user()->id;
        $mycharas->charaid = $request->charaid;
        $mycharas->charaname = $request->charaname;
        $mycharas->labelname = $request->label;
        $mycharas->s3url=$url;
        $mycharas->deleteflg = 0;
        $mycharas->save();

        // 最新のDB情報を取得して返す
        $mycharas_return = Mychara::where('userid', Auth::user()->id)
            ->where('charaid', $request->charaid)
            ->first();
        $sum = Mychara::where('charaid', $request->charaid)->count();

        return ['mycharas_return'=>$mycharas_return,'sum'=>$sum];
    }

    //表示処理関数
    public function index()
    {
        $mycharas = Mychara::where('userid', Auth::user()->id)
            ->join('charas', 'mycharas.charaid', 'charas.id')
            ->get();
        return $mycharas;
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
