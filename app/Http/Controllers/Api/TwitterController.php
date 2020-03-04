<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara;
use App\Mychara;
use Auth;
use App\Http\Controllers\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;
use Carbon\Carbon;
use Socialite;

class TwitterController extends Controller
{
    public function index($id)
    {
        $chara = Mychara::where('charaid', $id)
                ->select('charaname')
                ->first();
        $result = \Twitter::get('search/tweets', [
            'q' => "$chara->charaname exclude:retweets filter:media", 'count' => '100','tweet_mode'=>'extended'
            //tweet_mode=文字サイズオーバーtweetも表示する
            ])->statuses;

        $mycharas = Mychara::where('userid', Auth::user()->id)
                ->select('charaid', 'charaname')
                ->get();
        
        $time = Carbon::now();
        $dt=$time->hour;
        return [$result,$mycharas,$dt];
    }

    public function index_u()
    {
        $charas = Mychara::where('userid', Auth::user()->id)
                ->select('charaid', 'charaname')
                ->get();
        $str = "";
        $length = count($charas);
        $no = 0;
    
        foreach ($charas as $chara) {
            $no++;
            if ($no!==$length) {
                $str .= $chara->charaname." OR ";
            } else {
                $str .= $chara->charaname;
            }
        }
        $result = \Twitter::get('search/tweets', ['q' => "$str exclude:retweets filter:media", 'count' => '100','tweet_mode'=>'extended'])->statuses;
        return [$result,$str];
    }

    public function tweet(Request $request)
    {
        $config = config('twitter');
        
        //セッションからアクセストークン取得
        $accessToken = session()->all();

        $twitter = new TwitterOAuth(
            $config['api_key'],
            $config['secret_key'],
            session()->get('token'),
            session()->get('tokenSecret')
        );
        $tweet = $request->input("comment");
        $twitter->post("statuses/update", array("status" => "$tweet"));
        return [$accessToken,$tweet];
    }
};
