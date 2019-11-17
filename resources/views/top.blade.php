@extends('layouts.header')
@section('content')
<div class="main">
    <div class="content">
        {{-- ログインページへ遷移 --}}
        <div>
            <a href="{{url('auth/twitter')}}">Twitter Log in</a>
        </div>
    </div>
</div>
</html>

@endsection