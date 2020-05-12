$(function () {
    //データなし
    function make_dom_nodata() {
        var str = `<div class=nodata>データはありません</div>`
        return str;
    }
    function make_dom_mychara(data) {
        var str = '';
        str += `<div id="mycharaselect" class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">キャラ名</div>
                        <div style="font-size:16px;margin:6px 6px 0px 6px;width:50%">${data.mychara.charaname}</div>
                        <input type="hidden" name="charaid" value="${data.mychara.charaid}">
                    </div>
                </div>
                <div class="center" style="margin-bottom:6px;">
                    <a style="color: #ffffff;
                            font-weight: 600;
                            background-color: #ff8500;
                            padding: 8px 48px;
                            border-radius: 4px;
                            text-decoration:none" href="/chara/${data.mychara.charaid}">キャラページへ</a>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:30%;color:#969696;margin:6px;">ラベル</div>
                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input id="label" name="label" type="text" value="${data.mychara.labelname}" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="listparent" style="border-bottom:#efefef solid 1px;">
                    <div class="list">
                        <div style="width:60%;color:#969696;margin:6px;">マイサムネ</div>
                        <div style="font-size:18px;margin:3px 6px 0px 6px;">
                            <input type="file" name="file1" id="file" class="form-control" value=""> 
                        </div>
                    </div>
                </div>
                <div class="thumbnail listparent" style="border-bottom:#efefef solid 1px;background-color:#efefef">
                <img class="chara_img" id="chara_img_modal" style="background-color:#FFFFFF" src="${data.mychara.s3url}">
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
                </div>`;
        return str;

    }

    //表示する関数（マイキャラ）
    function indexDataMychara(id) {
        const url = `/api/mychara/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#api_form').html(make_dom_mychara(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }

    // 登録する関数
    function storeData(id) {
        // 送信先の指定
        var url = `/api/mychara/update/${id}`;
        var form = $('#api_form').get()[0];
        // FormData オブジェクトを作成
        var formData = new FormData(form);
        console.log(form)

        // データ送信
        $.ajax({
            headers: {
                //'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            dataType: 'json',
            url: url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data_return) {
                console.log(data_return);
                console.log('done');
            })
            .fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }

    // 削除する関数
    function deleteData(id) {
        //
        // 送信先の指定
        var url = `/api/user/${id}`;
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            url: url,
            type: 'POST',
            processData: false,
            contentType: false
        })
            .done(function (data) {
                console.log(data);
                console.log('done');
                $('#echo').html(make_dom(data));
            })
            .fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }
    //読み込み時に実行
    id = $(".main").attr('data-mycharaid')
    indexDataMychara(id)

    // 削除ボタンクリック時に削除
    $('#echo').on('click', '.destroy', function () {
        // 削除するタスクのidを取得
        var id = $(this).attr('id');
        deleteData(id);
    });
    // マイキャラ追加ボタンクリック時に登録
    $(document).on('click', '#update_mychara', function () {
        id = $(".main").attr('data-id')
        storeData(id);
    });

})
