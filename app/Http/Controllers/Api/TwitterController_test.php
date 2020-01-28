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
            $result = \Twitter::get('search/tweets', ['q' => '鬼滅 炭治郎 exclude:nativeretweets', 'count' => '100'])->statuses;
            return $result;

            //ツイートを5件取得
            $json = array();
            $max_id = 0;
            $count = 100;
            for ($i = 0; $i < 30; $i++) {
                if ($max_id == 0) {
                    $result = \Twitter::get('search/tweets', ['lang' => 'ja', 'q' => '#死んで欲しくなかったキャラ晒す exclude:nativeretweets', 'count' => $count])->statuses;
                    $result_length = count($result);
                    $max_id = $result[$result_length - 1]->id;
                    for ($t = 0; $t < $result_length; $t++) {
                        $json[] = $result[$t];
                        // $a = fopen("test_twitter.json", "a");
                        // fwrite($a, $array . "\n");
                        // fclose($a);
                    }
                    // file_put_contents("test_twitter" . $i . ".json", $array);
                    // sleep(5);
                } else {
                    $result = \Twitter::get('search/tweets', ['lang' => 'ja','q' => '#死んで欲しくなかったキャラ晒す exclude:nativeretweets', 'count' => $count])->statuses;
                    $result_length = count($result);
                    $max_id = $result[$result_length - 1]->id;
                    for ($t = 0; $t < $result_length; $t++) {
                        $json[] = $result[$t];
                        // $array = json_encode($result[$t]);
                        // $a = fopen("test_twitter.json", "a");
                        // fwrite($a, $array . "\n");
                        // fclose($a);
                    }
                    // sleep(5);
                }
            }

            $a = fopen("test_twitter_RT.json", "a");
            fwrite($a, json_encode($json));
            fclose($a);
            $json1 = file_get_contents("test_twitter_RT.json");
            $json_decode = json_decode($json1);
            return $json_decode;
        } elseif ($id == 2) {
            // $result = \Twitter::get('search/tweets', ['result_type'=>'recent','lang' => 'ja', 'q' => '鬼滅 exclude:nativeretweets', 'count' => '100'])->statuses;
            // $array = json_encode($result);
            // file_put_contents("test_twitter_test.json", $array);
            // $json = file_get_contents("test_twitter_test.json");
            // $json_decode = json_decode($json);
            // return $result;
            $json1 = file_get_contents("test_twitter01.json");
            $json_decode = json_decode($json1);
            
            
            $a = fopen("tweet_data.txt","a");
            flock($a, LOCK_EX);
            for($i = 0; $i < count($json_decode); $i++){
                $txt= $json_decode[$i]->text;
                $json_txt = $txt;
                fwrite($a,$json_txt."\n");
            }
            flock($a, LOCK_UN);
            fclose($a);
            return $json_txt;
        };
    }

    public function tweet(Request $request)
    {
        $config = config('twitter');
        $twitter = new TwitterOAuth($config['api_key'], $config['secret_key'], $config['access_token'], $config['access_token_secret']);
        $tweet = $request->tweet;
        $twitter->post("statuses/update", array("status" => "$tweet"));
    }
};
