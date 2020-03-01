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
        $mlc = Mychara::where('charaid', $request->charaid)
            ->where('labelname', '推し')->count();

        return ['mycharas_return'=>$mycharas_return,'sum'=>$sum,'mlc'=>$mlc];
    }

    //表示処理関数
    public function index()
    {
        $mycharas = Mychara::where('userid', Auth::user()->id)
            ->join('charas', 'mycharas.charaid', 'charas.id')
            ->get();
        return $mycharas;
    }
    //ファンリスト表示関数
    public function fanlist($id)
    {
        $fanlist = Mychara::where('charaid', $id)
                ->join('users', 'mycharas.userid', '=', 'users.id')
                ->select('mycharas.id', 'userid', 'name', 'avatar')
                ->orderBy('id', 'desc')
                ->get();
        return $fanlist;
    }
    //ラベルリスト表示関数
    public function labellist($id)
    {
        $labellist = Mychara::where('charaid', $id)
                ->select(
                    'labelname',
                    \DB::raw('COUNT(labelname) AS count')
                )->groupBy('labelname')
                ->orderBy('count', 'desc')
                ->get();
        
        return $labellist;
    }
    //ランキングリスト表示関数
    public function ranking($id)
    {
        $rankinglists = Mychara::join('charas', 'mycharas.charaid', '=', 'charas.id')
            ->select(
                'charaid',
                'charaname',
                'title',
                \DB::raw('COUNT(charaid) AS count'),
            )->groupBy('charaid', 'charaname')
                ->orderBy('count', 'desc')
            ->get();
        
        return $rankinglists;
    }
    //ランキングリスト表示関数(mlc)
    public function ranking_mlc($id)
    {
        $rankinglists = Mychara::join('charas', 'mycharas.charaid', '=', 'charas.id')
            ->where('labelname', '推し')
            ->select(
                'charaid',
                'charaname',
                'labelname',
                'title',
                \DB::raw('COUNT(labelname) AS count'),
            )->groupBy('labelname', 'charaid', 'charaname', 'title')
                ->orderBy('count', 'desc')
                ->get();
        
        return $rankinglists;
    }
    //ランキングリスト表示関数(title)
    public function ranking_title($id)
    {
        $title = Chara::where('id', $id)
            ->select('title')
            ->first();

        $rankinglists = Mychara::join('charas', 'mycharas.charaid', '=', 'charas.id')
            ->where('title', $title->title)
            ->select(
                'charaid',
                'charaname',
                'title',
                \DB::raw('COUNT(charaid) AS count'),
            )->groupBy('charaid', 'charaname')
                ->orderBy('count', 'desc')
            ->get();
        
        return $rankinglists;
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
