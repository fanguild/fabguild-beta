$(function () {
    //データなし
    function make_dom_nodata() {
        var str = `<div class=nodata>データはありません</div>`
        return str;
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
