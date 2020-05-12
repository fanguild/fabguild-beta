@extends('layouts.header')
@section('content')

<script src="{{ asset('js/mychara_api_ajax.js') }}" defer></script>

<div class="main" data-mycharaid="{{$id}}">

    <div>
        <div class="middle_bar_box" style="padding-top:50px">
                <div class="middle_bar">
                    <div class=middle_bar_outline>
                        <div class="middle_bar_6 middle_bar_add" style="padding:6px 0 3px 0 ;">マイキャラ編集</div>
                    </div>
                </div>
        </div>
        <div class="formbox" style="padding-top:0px">
            <form id="api_form">
                
            </form>
        </div>
        <div id="update_mychara" class="center" style="margin-bottom:6px;">
            <a style="color: #ffffff;
                    font-weight: 600;
                    background-color: #ff8500;
                    padding: 8px 48px;
                    border-radius: 4px;
                    text-decoration:none">更新</a>
        </div>
    </div>
    
</div>

</body>

@endsection