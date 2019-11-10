$(function () {

    // データからhtmlを出力する関数
    function make_dom(data) {
        console.log(data);
        var str = '';
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                str += `<tr>
                       <td>
                            <img src="${data[i].s3url}">
                       </td>
                       <td>
                           <button type="button" class="btn btn-danger destroy" id="${data[i].id}">削除</button>
                       </td>
                   </tr>`;
            }
        }
        return str;
    }

    // 登録する関数
    function storeData() {

        // 送信先の指定
        var url = '/api/uploadsstore';

        var form = $('#api_form').get()[0];
        // FormData オブジェクトを作成
        var formData = new FormData(form);

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
                $('#echo').html(make_dom(data_return));
            })
            .fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }

    // 表示する関数
    function indexData() {
        //
        const url = '/api/uploads';
        $.getJSON(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }

    // 削除する関数
    function deleteData(id) {
        //
        // 送信先の指定
        var url = `/api/uploadsdelete/${id}`;
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

    // 送信ボタンクリック時に登録
    $('#submit').on('click', function () {
        if (
            $('#file').val() == ''
        ) {
            alert('ファイル名は入力必須です！')
        } else {
            storeData();
            $('#file').val('')
        }
    });

    // 削除ボタンクリック時に削除
    $('#echo').on('click', '.destroy', function () {
        // 削除するタスクのidを取得
        var id = $(this).attr('id');
        deleteData(id);
    });

    // 読み込み時に実行
    indexData();

});