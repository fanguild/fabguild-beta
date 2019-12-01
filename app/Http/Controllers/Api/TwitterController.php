<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;


use Illuminate\Http\Request;
use App\Chara;
use App\Http\Controllers\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;

class TwitterController extends Controller
{
    public function index($id)
    {
        if ($id == 1) {
            //ツイートを5件取得
            // $result = \Twitter::get('statuses/home_timeline',  ['count' => '10']);
            $result = \Twitter::get('search/tweets', ['q' => '鬼滅 炭治郎 exclude:nativeretweets', 'count' => '100'])->statuses;
            return $result;
        } elseif ($id == 2) {
            $result = \Twitter::get('search/tweets', ['q' => '禰豆子 exclude:nativeretweets', 'count' => '100'])->statuses;
            return $result;
        }
    }

    public function tweet(Request $request)
    {
        $config = config('twitter');
        $twitter = new TwitterOAuth($config['api_key'], $config['secret_key'], $config['access_token'], $config['access_token_secret']);
        $tweet = $request->tweet;
        $twitter->post("statuses/update", array("status" => "$tweet"));
    }
}
