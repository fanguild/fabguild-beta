@extends('layouts.header')
@section('content')
<script src="{{ asset('js/chara_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$chara->id}}">
    <div class=slider>
        <div class="content">
            <div class=chara_top>
                <div class=chara>
                    <!-- mychara登録済みであれば登録済みの画像を表示 -->
                    @if($s3url)
                    <img class=chara_img id=chara_img src="{{$s3url->s3url}}">
                    @else
                    <img class=chara_img id=chara_img src="{{asset('storage/icon/nolicense.svg')}}">
                    @endif
                    
                </div>
                <div class=guild_status>
                    <div style="text-align:start;">ギルドランク
                    </div>
                    <img id=guild_icon src="{{asset('storage/icon/盾.svg')}}" style="height:62px">
                    <div style="color:#FF8500">オレンジ</div>
                    <div class=chara_population>
                        <div class=pop style="color:#969696;">総ファン数</div>
                        <div class="pop sum" style="font-size:16px;font-weight: 700;">{{$sum}}</div>
                        <div class=pop style="color:#969696;">人</div>
                    </div>
                </div>
            </div>
            <div class="chara_name">{{$chara->name}}</div>

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


<div class="modal fade" style="top:164px;" id="modal3" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="margin:0px;">
        <div class="modal-content" style="height:800px;width:375px;">
            <div class="modal-header">
                <h6 class="modal-title" id="label1">画像保管</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id='mychara'>
                <div class="content" style="width:100%">
                    <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">投稿するキャラ
                    </div>
                    <form>
                        <div class="listparent1" style="">
                            <div class=list>
                                <div id=upload_chara_select style="width:60%;color:#969696;margin:6px;">マイキャラから選ぶ</div>
                            </div>
                            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px;transform: rotate( 90deg );"></div>
                        </div>
                        <input type=radio name=gzo_flg value=1>
                        <input type=radio name=gzo_flg value=2>
                        <div id="toggle" style="display:none;">
                            <div class="listparent" id=1>
                                <div class="list">
                                    <div><img class="thumbnail_img" src=""></div>
                                    <div style="margin:6px 3px;">
                                        <div class="chara_name" style="color:#333333" value="1">車谷空</div>
                                        <div style="color:#969696">あひるの空</div>
                                    </div>
                                </div>
                                <div id=selectid1 class="arrow" style="width:48px;text-align:center;line-height:62px">選択</div>
                            </div>
                            <div class="listparent" id=1>
                                <div class="list">
                                    <div><img class="thumbnail_img" src=""></div>

                                    <div style="margin:6px 3px;">
                                        <div class="chara_name" style="color:#333333" value="a">車谷</div>
                                        <div style="color:#969696">あひるの空</div>
                                    </div>
                                </div>
                                <div id=selectid2 class="arrow" style="width:48px;text-align:center;line-height:62px">選択</div>
                            </div>
                        </div>
                        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px 6px 24px">画像
                        </div>
                        <div class="item_container">
                            <div class="item_box">
                                <div class="" style="height:163px;width:175px;margin:6px;background-color:#ffffff">
                                    <img id=img_show src="" width=100%>
                                    <label for="img_input">投稿
                                        <input id=img_input type="file" name="img01" accept="image/*" capture="camera"></label>
                                </div>
                            </div>
                            <div class="item_box">
                                <div class="" style="height:163px;width:100%;margin:6px;background-color:#ffffff">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <div class="item_box">
                                <div class="" style="height:163px;width:100%;margin:6px;background-color:#ffffff">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <div class="item_box">
                                <div class="" style="height:163px;width:100%;margin:6px;background-color:#ffffff">
                                    <img src="" alt="">
                                </div>
                            </div>
                        </div>


                        <div style=" padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">コメント
                        </div>
                        <div class=listparent style="border:none">
                            <div class=list style="width:100%;">
                                <input id=comment type=text style="color:#969696;margin:6px;height:120px;width:100%" name="comment" value="コメントを記入してみよう">
                            </div>
                        </div>

                        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">
                        </div>
                        <div class=listparent style="border:none">
                            <div id="submit" class=list style="justify-content: center;">
                                <div style="text-align: center;margin:6px">投稿</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button" data-dismiss="modal" aria-label="Close" id=submit>
                    追加
                </button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" style="top:164px;" id="modal2" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="margin:0px;">
        <div class="modal-content" style="height:800px;width:375px;">
            <div class="modal-header">
                <h6 class="modal-title" id="label1">好きなところ</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id='mychara'>
                <div class="content" style="width:100%">
                    <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">投稿するキャラ
                    </div>
                    <form>
                        <div class="listparent1" style="">
                            <div class=list>
                                <div id=upload_chara_select style="width:60%;color:#969696;margin:6px;">マイキャラから選ぶ</div>
                            </div>
                            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px;transform: rotate( 90deg );"></div>
                        </div>
                        <div id="toggle" style="display:none;">
                            <div class="listparent" id=1>
                                <div class="list">
                                    <div><img class="thumbnail_img" src=""></div>
                                    <div style="margin:6px 3px;">
                                        <div class="chara_name" style="color:#333333" value="1">車谷空</div>
                                        <div style="color:#969696">あひるの空</div>
                                    </div>
                                </div>
                                <div id=selectid1 class="arrow" style="width:48px;text-align:center;line-height:62px">選択</div>
                            </div>
                            <div class="listparent" id=1>
                                <div class="list">
                                    <div><img class="thumbnail_img" src=""></div>

                                    <div style="margin:6px 3px;">
                                        <div class="chara_name" style="color:#333333" value="a">車谷</div>
                                        <div style="color:#969696">あひるの空</div>
                                    </div>
                                </div>
                                <div id=selectid2 class="arrow" style="width:48px;text-align:center;line-height:62px">選択</div>
                            </div>
                        </div>
                        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px 6px 24px">画像
                        </div>
                        <div class="item_container">
                            <div class="item_box">
                                <div class="" style="height:163px;width:175px;margin:6px;background-color:#ffffff">
                                    <img id=img_show src="" width=100%>
                                    <label for="img_input">投稿
                                        <input id=img_input type="file" name="img01" accept="image/*" capture="camera"></label>
                                </div>
                            </div>
                            <div class="item_box">
                                <div class="" style="height:163px;width:100%;margin:6px;background-color:#ffffff">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <div class="item_box">
                                <div class="" style="height:163px;width:100%;margin:6px;background-color:#ffffff">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <div class="item_box">
                                <div class="" style="height:163px;width:100%;margin:6px;background-color:#ffffff">
                                    <img src="" alt="">
                                </div>
                            </div>
                        </div>


                        <div style=" padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">コメント
                        </div>
                        <div class=listparent style="border:none">
                            <div class=list style="width:100%;">
                                <input id=comment type=text style="color:#969696;margin:6px;height:120px;width:100%" name="comment" value="コメントを記入してみよう">
                            </div>
                        </div>

                        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">
                        </div>
                        <div class=listparent style="border:none">
                            <div id="submit" class=list style="justify-content: center;">
                                <div style="text-align: center;margin:6px">投稿</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button class="button" data-dismiss="modal" aria-label="Close" id=submit>
                    追加
                </button>
            </div>
        </div>
    </div>
</div>


</html>

@endsection