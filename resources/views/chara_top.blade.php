@extends('layouts.header')
@section('content')
<script src="{{ asset('js/chara_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$chara->id}}">
    <div class="content">
        <div class=chara_top>
            <div class=chara>
                <img id=chara_img src="{{asset('storage/chara_picture/ACE.png')}}">
                <div class="chara_name">{{$chara->name}}</div>
            </div>
            <div class=guild_status>
                <div style="text-align:start;">ギルドランク
                </div>
                <img id=guild_icon src="{{asset('storage/icon/盾.svg')}}" style="height:62px">
                <div style="color:#FF8500">オレンジ</div>
                <div class=chara_population>
                    <div class=pop style="color:#969696;">総ファン数</div>
                    <div class=pop style="font-size:16px;font-weight: 700;">{{$sum}}</div>
                    <div class=pop style="color:#969696;">人</div>
                </div>
            </div>
        </div>
        <div class="join_btn">

        </div>
        <div class="middle_bar">
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
        </div>
        <hr style="padding:0px;margin:0px;background-color: #EFEFEF;">
        <div id=echo>

        </div>
    </div>
</div>
<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="label1">参加登録完了しました！</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id='mychara'>
                <img src="img/Thankyou.png" style="width:330px">


            </div>

        </div>

    </div>
</div>



<script>
    // $('.middle_bar').scroll(function() {
    //     console.log($(this).scrollLeft());
    // });
    $(".middle_bar").scrollLeft(300);
    $(".middle_bar_1").addClass("middle_bar_add");
</script>

</html>

@endsection