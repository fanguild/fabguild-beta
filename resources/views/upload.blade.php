@extends('layouts.header')
@section('content')

<div class="main">
    <div class="content">
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
</body>
<style>
    label>input {
        display: none;
        /* アップロードボタンのスタイルを無効にする */
    }

    .listparent1 {
        display: flex;
        margin: 0px 12px;
        padding: 6px 0px;
        border-bottom: 1px solid;
        border-color: #c9c9c9;
        text-decoration: none;
        color: #333333;
    }
</style>
<script>
    $(function() {
        $(".arrow").on("click", function() {
            $('#toggle').slideDown('300');
        })

        $(".listparent").on("click", function() {
            console.log(this);
            // var a = $(this).find(".chara_name").contents()[0];
            var a = $(this).find(".chara_name").text();
            console.log(a)
            $('#toggle').slideUp('300');
            $("#upload_chara_select").text(a)
            $("#upload_chara_select").css("color", "#333333")
        })

        $("#img_input").on('change', function(e) {
            // 1枚だけ表示する
            var file = e.target.files[0];
            console.log(file);

            // ファイルのブラウザ上でのURLを取得する
            var blobUrl = window.URL.createObjectURL(file);

            // img要素に表示
            $('#img_show').attr('src', blobUrl);
        });
    })

    function storeData() {
        //
        // 送信先の指定
        var url = '/api/upload';
        // 入力情報の取得
        var data = {
            chara: 1,
            img: $('#img_show').attr('src'),
            comment: $('#comment').val()
        };
        console.log(data);
        // データ送信
        $.ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                },
                dataType: 'json',
                url: url,
                type: 'POST',
                data: JSON.stringify(data),
                processData: false,
                contentType: false
            })
            .done(function(data) {
                console.log(data);
                console.log('done');

            })
            .fail(function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
                console.log('fail');
            })
            .always(function() {
                console.log('post:complete');
            });
    }
    $('#submit').on('click', function() {

        storeData();
        // $('#task').val(''),
        //     $('#deadline').val(''),
        //     $('#comment').val('')

    });
</script>

@endsection