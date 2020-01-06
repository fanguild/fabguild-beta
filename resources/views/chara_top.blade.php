@extends('layouts.header')
@section('content')
<script src="{{ asset('js/chara_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$chara->id}}">
    <div class=slider>
        <div class="content">
            <div class=chara_top>
                <div class=chara>
                    @if($s3url)
                    <img class=chara_img id=chara_img src="{{$s3url->s3url}}">
                    @else
                    <img class=chara_img id=chara_img src="{{asset('storage/img/Thankyou.png')}}">
                    @endif
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
</div>
<div class="modal fade" style="top:164px;" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="margin:0px;">
        <div class="modal-content" style="height:500px;width:375px;">
            <div class="modal-header">
                <h6 class="modal-title" id="label1">マイキャラに追加</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id='mychara'>
                <form id=api_form>
                    <div class="listparent" style="border-bottom:#efefef solid 1px;">
                        <div class="list">
                            <div style="width:60%;color:#969696;margin:6px;">キャラ名</div>
                            <div style="font-size:18px;margin:3px 6px 0px 6px;">{{$chara->name}}</div>
                        </div>
                    </div>
                    <div class="listparent" style="border-bottom:#efefef solid 1px;">
                        <div class="list">
                            <div style="width:60%;color:#969696;margin:6px;">作品名</div>
                            <div style="font-size:18px;margin:3px 6px 0px 6px;">{{$chara->title}}</div>
                        </div>
                    </div>
                    <div class="listparent" style="border-bottom:#efefef solid 1px;">
                        <div class="list">
                            <div style="width:60%;color:#969696;margin:6px;">ラベル</div>

                            <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                <input id=label name=label type="text" value="" placeholder="ラベルを入力">
                            </div>
                        </div>
                    </div>
                    <div class="listparent" style="border-bottom:#efefef solid 1px;">
                        <div class="list">
                            <div style="width:60%;color:#969696;margin:6px;">マイピクチャ</div>
                            <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                <input type="file" name="file1" id="file" class="form-control">
                            </div>
                        </div>
                    </div>
                    <img class=chara_img id=chara_img_modal>
                </form>
            </div>
            <div class="modal-footer">
                <button class="button" data-dismiss="modal" aria-label="Close" id=submit>
                    追加
                </button>
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