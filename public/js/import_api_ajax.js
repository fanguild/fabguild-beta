$(function () {


    // 表示する関数
    function importData() {
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


    // 読み込み時に実行
    importData();

});