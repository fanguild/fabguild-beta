@extends('layouts.header')
@section('content')

<script src="{{ asset('js/mychara_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$id}}">

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
                <div id="mycharaselect" class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">キャラ名</div>
                        <div style="font-size:16px;margin:6px 6px 0px 6px;width:50%">マイキャラ選択</div>
                        <div class="arrow"><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 6px"></div>
                        <input type="hidden" name="charaid" value="">
                        <input type="hidden" name="charaname" value="">
                    </div>
                </div>
                <div class="center" style="margin-bottom:6px;">
                    <a style="color: #ffffff;
                            font-weight: 600;
                            background-color: #ff8500;
                            padding: 8px 48px;
                            border-radius: 4px;
                            text-decoration:none" href="/chara/1">キャラページへ</a>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">ラベル</div>

                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input id="label" name="label" type="text" value="" placeholder="5文字以内で入力">
                        </div>
                    </div>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:60%;color:#969696;margin:6px;">マイサムネ</div>
                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input type="file" name="file1" id="file" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="thumbnail listparent" style="border-bottom:#efefef solid 1px;background-color:#efefef">
                <img class="chara_img" id="chara_img_modal" style="background-color:#FFFFFF">
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">ファンhist.</div>

                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input id="label" name="" type="date" value="">
                        </div>
                    </div>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">ファンAct.</div>

                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input id="label" name="" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">キャラの紹介</div>
                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input id="label" name="" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">キャラの秘密</div>
                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input id="label" name="" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">同じファンメンバーへ一言</div>
                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input id="label" name="" type="text" value="">
                        </div>
                    </div>
                </div>
            </form>
            <div class="disclaimer">※マイサムネに使用した画像は非公開となりますので著作権侵害等の違法なアップロードには当たりません</div>
            <div class="disclaimer">※fanguildが用意する著作権フリーの画像を利用の場合はマイサムネは自動で公開となります</div>
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
<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="label1"></h6>
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
</body>

@endsection