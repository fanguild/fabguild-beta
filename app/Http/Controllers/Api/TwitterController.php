<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;

class TwitterController extends Controller
{
    public function index(Request $request)
    {
        //ツイートを5件取得
        // $result = \Twitter::get('statuses/home_timeline',  ['count' => '10']);
        $result = \Twitter::get('search/tweets',  ['q' => '鬼滅 exclude:nativeretweets', 'count' => '100'])->statuses;
        return $result;
    }
}
