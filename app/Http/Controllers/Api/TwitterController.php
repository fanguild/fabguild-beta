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
        $result = \Twitter::get('statuses/home_timeline',  ['count' => '10']);
        // $result = \Twitter::get('search/tweets',  ['q' => '#ポケモン剣盾', 'count' => '10'])->statuses;
        return $result;
    }
}
