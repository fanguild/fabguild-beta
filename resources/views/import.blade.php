@extends('layouts.header')
@section('content')
<script src="{{ asset('js/import_api_ajax.js') }}" defer></script>

<div class="main" data-id="">
    <div class="content">
        <div class=chara_top style="width:375px">
            <div class=chara>
                <img id=chara_img src="{{asset('storage/chara_picture/ACE.png')}}">
                <div class="chara_name"></div>
            </div>
            <div class=guild_status>
                <div style="text-align:start;">ギルドランク
                </div>
                <img id=guild_icon src="{{asset('storage/icon/盾.svg')}}" style="height:62px">
                <div style="color:#FF8500">オレンジ</div>
                <div class=chara_population>
                    <div class=pop style="color:#969696;">総ファン数</div>
                    <div class=pop style="font-size:16px;font-weight: 700;"></div>
                    <div class=pop style="color:#969696;">人</div>
                </div>
            </div>
        </div>
        <div class="join_btn" style="width:375px">
            <div id=import1 style="height:64px;border:1px solid #333333">import_chara</div>
            <div id=import2 style="height:64px;border:1px solid #333333">import_works</div>
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



<script>
    // $('.middle_bar').scroll(function() {
    //     console.log($(this).scrollLeft());
    // });
    $(".middle_bar").scrollLeft(300);
    $(".middle_bar_1").addClass("middle_bar_add");
</script>

</html>

@endsection