@extends('layouts.header')
@section('content')
<script src="{{ asset('js/chara_api_ajax.js') }}" defer></script>

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
            <div class=middle>
            <div class="middle_bar_box">
                <div class="middle_bar">
                    <div class=middle_bar_outline>
                        <div class=middle_bar_6 style="padding:6px 0 3px 0 ;">ファンメンバー</div>
                    </div>
                    <!-- <div class=middle_bar_outline>
                        <div class=middle_bar_7 style="padding:6px 0 3px 0 ;">ランキング</div>
                    </div> -->
                    <!-- <div class=middle_bar_outline>
                        <div class=middle_bar_5 style="padding:6px 0 3px 0 ;">ラベル一覧</div>
                    </div> -->
                    <div class=middle_bar_outline>
                        <div class=middle_bar_1 style="padding:6px 0 3px 0 ;">みんなの愛</div>
                    </div>
                    <div class=middle_bar_outline>
                        <div class=middle_bar_7 style="padding:6px 0 3px 0 ;">出演作品/グッズ</div>
                    </div>
                </div>
            </div>
            
            <div id=echo>

            </div>
            
            </div>
            
            <div class=bottom>
            <div class="center bold">同じ作品のキャラ</div>
            <div id=same class=scroll-x>
            </div>
            <div class="center bold">おすすめのキャラ</div>
            <div id=recomend class=scroll-x>
                <div class=nodata>データはありません</div>
            </div>
            </div>
        </div>
    </div>
</div>

</html>

@endsection