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
        $chara = Chara::where('id', $id)
                ->select('name', 'title')
                ->first();
        $result = \Twitter::get('search/tweets', ['q' => "{$chara->title} exclude:retweets", 'count' => '100'])->statuses;
        return $result;
    }

    public function tweet(Request $request)
    {
        $config = config('twitter');
        $twitter = new TwitterOAuth($config['api_key'], $config['secret_key'], $config['access_token'], $config['access_token_secret']);
        $tweet = $request->tweet;
        $twitter->post("statuses/update", array("status" => "$tweet"));
    }
};
