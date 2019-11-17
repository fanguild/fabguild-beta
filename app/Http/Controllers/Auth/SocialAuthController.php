<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Auth;
use Socialite;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class SocialAuthController extends Controller
{
    use AuthenticatesUsers;
    protected $redirectTo = '/user';

    /**
     * ユーザーをTwitterの認証ページにリダイレクトする
     *
     * @return Response
     */
    public function getTwitterRedirect()
    {
        return Socialite::driver('twitter')->redirect();
    }

    /**
     * Twitterからユーザー情報を取得する
     *
     * @return Response
     */
    public function getTwitterCallback()
    {
        try {
            $user = Socialite::driver('twitter')->user();
        } catch (Exception $e) {
            return redirect('auth/twitter');
        }

        $authUser = $this->findOrCreateUser("TW", $user);

        Auth::login($authUser, true);

        return redirect()->route('user');
    }

    private function findOrCreateUser($login_type, $user_info)
    {
        $user = User::where('login_type', $login_type)->where('login_id', "$login_type{$user_info->id}")->first();

        if (!$user) {
            // 存在しなければ新規登録
            $user = new User();
            $user->name       = $user_info->name;
            $user->status     = 1;
            $user->login_type = $login_type;
            $user->login_id   = "$login_type{$user_info->id}";
            $user->avatar     = $user_info->avatar_original;
            $user->save();
        } else {
            // ユーザー情報更新
            $user->name   = $user_info->name;
            $user->avatar = $user_info->avatar_original;
            $user->save();
        }

        return $user;
    }
    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
