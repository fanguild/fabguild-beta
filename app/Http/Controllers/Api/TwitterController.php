<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara;
use App\Mychara;
use App\Keyword;
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
        $keywordsall =[];
        foreach ($charas as $chara) {
            $keywords = Keyword::where('charaid', $chara->charaid)
                ->select('word')
                ->get();
            foreach ($keywords as $keyword) {
                array_push($keywordsall, $keyword);
            }
        }

        $str = "";
        $length = count($keywordsall);
        $no = 0;
    
        foreach ($keywordsall as $keyword) {
            $no++;
            if ($no!==$length) {
                $str .= $keyword->word." OR ";
            } else {
                $str .= $keyword->word;
            }
        }
        $result = \Twitter::get('search/tweets', ['q' => "$str exclude:retweets filter:media", 'count' => '100','tweet_mode'=>'extended'])->statuses;
        return [$result,$str,$keywordsall];
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
