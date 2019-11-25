@extends('layouts.header')
@section('content')

<div class="contents">
    {{-- ログインページへ遷移 --}}
    <div style="height:48px"></div>
    <div><img src="{{asset('storage/icon/fanguild_logo.svg')}}" style="height:192px"></div>

    <div class=login_board>
        <h4 style="margin:0 0px 24px 0px;border-bottom:solid 1px #333333;padding:0 8px"><strong>LOGIN</strong></h4>
        <form action=" {{url('auth/twitter')}}">
            <button id=btn><strong>Twitterでログイン</strong><img src=""></button>
        </form>
        <button id=btn><strong>TwitterIDをお持ちでない方</strong><img src=""></button>
    </div>
</div>
</div>

</html>

<style>
    @charset "UTF-8";

    :root {
        --top-font-size: calc(3rem + ((1vw - 0.64rem) * 2.1429));
        --main-font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));
        --sub-font-size: calc(2.2rem + ((1vw - 0.64rem) * 2.1429));
        --index-font-size: calc(1.6rem + ((1vw - 0.64rem) * 2.1429));
        --description-font-size: calc(1.8rem + ((1vw - 0.64rem) * 2.1429));
        --img-circle-size: calc(12rem + ((1vw - 0.64rem) * 2.1429));
        --base-padding: 0 3rem 1rem;
        --main-color: #ff8500;
        --sub-color: #ffbb00;
        --third-color: #fff6eb;
        --sp-button-size: calc(6rem + ((1vw - 0.64rem) * 2.1429));
    }

    .contents {
        background: -moz-linear-gradient(bottom, var(--main-color), var(--sub-color));
        background: -webkit-linear-gradient(bottom, var(--main-color), var(--sub-color));
        background: linear-gradient(to top, var(--main-color), var(--sub-color));
        height: 812px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .login_board {
        height: 240px;
        width: 300px;
        background-color: #FFFFFF;
        border-radius: 4px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        appearance: none;
    }

    #btn {
        background: #ff8500 0% 0% no-repeat padding-box;
        border-color: #ff8500;
        width: 240px;
        padding: 8px 24px 8px 24px;
        margin: 4px 20px 4px 20px;
        color: #ffffff;
        font-weight: 500;
    }
</style>
<script>
    $("#header").hide();
    $("#footer").hide();
</script>
@endsection