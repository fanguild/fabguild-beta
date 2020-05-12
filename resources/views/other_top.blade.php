@extends('layouts.header')
@section('content')
<script src="{{ asset('js/other_top_api_ajax.js') }}" defer></script>

<div class="main" other-id="{{$userid}}">

    <div class=slider>
        <div class="content">
            <div id=user_left>
                
            </div>
            <div class=middle_bar_box>
            <div class="middle_bar">
                <div class=middle_bar_outline>
                    <div class=middle_bar_1 style="padding:6px 6px 3px 6px ;">マイキャラ</div>
                </div>
                <!-- <div class=middle_bar_outline>
                    <div class=middle_bar_2 style="padding:6px 6px 3px 6px ;">投稿一覧</div>
                </div> -->
                <!-- <div class=middle_bar_outline>
                    <div class=middle_bar_4 style="padding:6px 6px 3px 6px ;">ギルドメンバー</div>
                </div> -->
            </div>
            </div>
            <div id=echo>
            </div>
        </div>
    </div>
</div>
</body>

@endsection