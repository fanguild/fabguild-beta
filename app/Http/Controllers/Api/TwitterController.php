<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Chara;
use App\Mychara;
use Auth;
use App\Http\Controllers\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;

class TwitterController extends Controller
{
    public function index($id)
    {
        $chara = Chara::where('id', $id)
                ->select('name', 'title')
                ->first();
        $result = \Twitter::get('search/tweets', ['q' => "{$chara->name} exclude:retweets filter:media", 'count' => '100'])->statuses;

        $mycharas = Mychara::where('userid', Auth::user()->id)
                ->select('charaid', 'charaname')
                ->get();
        return [$result,$mycharas];
    }

    public function index_u()
    {
        $charas = Mychara::where('userid', Auth::user()->id)
                ->select('charaname', 'charaid')
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
        $result = \Twitter::get('search/tweets', ['q' => "{$str} exclude:retweets filter:media", 'count' => '100'])->statuses;
        return [$result,$charas];
    }

    public function tweet(Request $request)
    {
        $config = config('twitter');
        $twitter = new TwitterOAuth($config['api_key'], $config['secret_key'], $config['access_token'], $config['access_token_secret']);
        $tweet = $request->tweet;
        $twitter->post("statuses/update", array("status" => "$tweet"));
    }
};
