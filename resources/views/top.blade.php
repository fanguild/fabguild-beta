@extends('layouts.header')
@section('content')
<div class="main">
    <div class="content">
        {{-- ログインページへ遷移 --}}
        <div>
            <a href="{{url('login')}}">Log in</a>
        </div>
        <div>
            <a href="{{url('register')}}">Sign up</a>
        </div>
    </div>
</div>
</html>

@endsection