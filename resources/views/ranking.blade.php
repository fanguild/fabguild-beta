@extends('layouts.header')
@section('content')
<script src="{{ asset('js/ranking_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$chara->id}}">
    <div class=slider>
        <div class="content">
            <div class=chara_top_olt>
                <div class=chara_olt>
                    <!-- mychara登録済みであれば登録済みの画像を表示 -->
                    @if($s3url)
                    <img class=chara_img id=chara_img src="{{$s3url->s3url}}">
                    @else
                    <img class=chara_img id=chara_img src="{{asset('storage/icon/nolicense.svg')}}">
                    @endif
                    
                </div>
                <div class=status_bx>
                    
                </div>
            </div>
            <div class=chara_name_olt>{{$chara->name}}</div>
            <div class="middle_bar">
                <div class=middle_bar_outline>
                    <div class=middle_bar_1 style="padding:6px 0 3px 0 ;">総合ランキング</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_2 style="padding:6px 0 3px 0 ;">推し数ランキング</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">作品内ランキング</div>
                </div>
                <!-- <div class=middle_bar_outline>
                    <div class=middle_bar_4 style="padding:6px 0 3px 0 ;">名言集</div>
                </div> -->
                <!-- <div class=middle_bar_outline>
                    <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">画像倉庫</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_4 style="padding:6px 0 3px 0 ;">クエスト</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_5 style="padding:6px 0 3px 0 ;">好きなセリフ</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_1 style="padding:6px 0 3px 0 ;">ギルド</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_2 style="padding:6px 0 3px 0 ;">タイムライン</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">画像倉庫</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_4 style="padding:6px 0 3px 0 ;">クエスト</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_5 style="padding:6px 0 3px 0 ;">好きなセリフ</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_1 style="padding:6px 0 3px 0 ;">ファンリスト</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_2 style="padding:6px 0 3px 0 ;">タイムライン</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">画像倉庫</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_4 style="padding:6px 0 3px 0 ;">クエスト</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_5 style="padding:6px 0 3px 0 ;">好きなセリフ</div>
                </div> -->
            </div>
            <hr style="padding:0px;margin:0px;background-color: #EFEFEF;">
            <div id=echo>

            </div>
        </div>
    </div>
</div>

</html>

@endsection