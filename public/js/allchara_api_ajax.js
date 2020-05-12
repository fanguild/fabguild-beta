$(function () {

    function make_dom_work(data) {

        var str = ``;
        var mycharas = data.mycharas
        var charas = data.charas
        var s3url = "/storage/icon/nolicense.svg"
        var mychara = "";
        for (var i = 0; i < charas.length; i++) {
            for (var t = 0; t < mycharas.length; t++) {
                if (mycharas[t].charaid == charas[i].id) {
                    s3url = mycharas[t].s3url
                    mychara = "<div>マイキャラ</div>"
                }
            }
            str += `<a href="/chara/${charas[i].id}" class=listparent>
                    <div class=list><div><img class=thumbnail_img src="${s3url}"></div><div style="margin:6px;">
                            <div>${charas[i].name}</div>
                            ${mychara}
                        </div>
                    </div>
                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                    </a>
                    `;
            s3url = "/storage/icon/nolicense.svg"
            mychara = "";
        }
        return str;
    }
    // 表示する関数(作品内キャラリスト)
    function indexData_work(id) {
        // 送信先の指定
        var url = '/api/standard';
        var request = {
            chara: 0,
            work: id,
            number: 1000,
        }
        // データ送信
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            dataType: 'json',
            url: url,
            type: 'POST',
            data: JSON.stringify(request),
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data_return) {
                console.log(data_return);
                $('#echo').html(make_dom_work(data_return))
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }


    //読み込み時に実行
    $(".middle_bar_1").addClass("middle_bar_add");
    var id = $(".main").attr('data-id')
    indexData_work(id)

    $(".middle_bar_1").on("click", function () {
        indexData_work(id)
    })
    $(".middle_bar_2").on("click", function () {
        $('#echo').html(make_dom_detail());
    })
});