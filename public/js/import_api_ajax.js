$(function () {


    // 表示する関数
    function importData1() {
        //
        const url = `/api/import1`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }
    function importData2() {
        //
        const url = `/api/import2`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }


    // 読み込み時に実行
    $('#import1').on('click', function () {
        importData1();
    })
    $('#import2').on('click', function () {
        importData2();
    })

});