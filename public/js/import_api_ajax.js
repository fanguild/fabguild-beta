$(function () {


    // 表示する関数
    function importData1() {
        // 送信先の指定
        var url = '/api/import1';
        var form = $('#api_form').get()[0];
        // FormData オブジェクトを作成
        var formData = new FormData(form);
        console.log(formData);
        // データ送信
        $.ajax({
            headers: {
                // 'Content-Type': 'application/json',
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
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    };
    // 登録する関数
    function importData2() {
        // 送信先の指定
        var url = '/api/import2';
        var form = $('#api_form').get()[0];
        // FormData オブジェクトを作成
        var formData = new FormData(form);
        console.log(formData);
        // データ送信
        $.ajax({
            headers: {
                // 'Content-Type': 'application/json',
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
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }

    // 読み込み時に実行
    $('#import1').on('click', function () {
        importData1();
    });
    $('#import2').on('click', function () {
        importData2();
    });

});