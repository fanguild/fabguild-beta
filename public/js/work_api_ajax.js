$(function () {
    //データなし
    function make_dom_nodata() {
        var str = `<div class=nodata>データはありません</div>`
        return str;
    }
    function make_dom_simwork(data) {

        var str = `<div class=scroll-x>`;
        for (var i = 0; i < data.titles.length; i++) {
            str += `<div class=recomend_box>`
            if (data.titles[i].ogp != "null") {
                str += `<img class="thumbnail_title" src="${data.titles[i].ogp}"></img>`
            } else {
                str += `<img class="thumbnail_title" src="/storage/icon/nolicense.svg"></img>`
            }
            str += `<div class=center>${data.titles[i].titlename}</div>
                    </div>`;
        }
        str += `</div>`;
        return str;
    }

    function make_dom_detail(data) {
        var work = data.titles[0];
        var str = ``;
        str += `<div style="padding:18px 12px;border-bottom: 1px solid #c9c9c9">
                    <div style="padding-bottom:12px;">
                    <h5 class=bold>内容紹介</h5>
                    <h6 style="color:#707070">${work.summary}</h6>
                    </div>
                    <div style="padding-bottom:12px;">
                    <h5 class=bold>原作者</h5>
                    <h6 style="color:#707070">${work.outher}</h6></div>
                    <div style="padding-bottom:12px;">
                    <h5 class=bold>制作会社</h5>
                    <h6 style="color:#707070">${work.maker}</h6></div>
                    <div style="padding-bottom:12px;">
                    <h5 class=bold>著作権者</h5>
                    <h6 style="color:#707070">${work.holder}</h6></div>`;
        return str;
    }

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
        str += `<div class="center">
                    <a class="button" style="color:#ffffff;text-decoration:none" href="/work/all/${data.titles.id}">全キャラ一覧へ</a>
                    </div>`
        return str;
    }
    // 表示する関数(作品内キャラリスト)
    function indexData_work(id) {
        // 送信先の指定
        var url = '/api/standard';
        var request = {
            chara: 0,
            work: id,
            number: 10,
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

    // 表示する関数(作品情報詳細)
    function indexData_work_detail(id) {
        // 送信先の指定
        var url = '/api/standard';
        var request = {
            work: id,
            number: 10,
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
                // console.log(data_return);
                $('#echo').html(make_dom_detail(data_return))
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }
    //表示する関数（同じ作者の作品）
    function indexData_work_sim(id) {
        // 送信先の指定
        var url = '/api/similar/outher';
        var request = {
            work: id,
            number: 10,
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
                if (data_return.titles.length != 0) {
                    $('#outher').html(make_dom_simwork(data_return))
                } else {
                    $('#outher').html(make_dom_nodata());
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }
    //表示する関数（同じ制作会社の作品）
    function indexData_work_sim_(id) {
        // 送信先の指定
        var url = '/api/similar/maker';
        var request = {
            work: id,
            number: 10,
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
                if (data_return.titles.length != 0) {
                    $('#maker').html(make_dom_simwork(data_return))
                } else {
                    $('#maker').html(make_dom_nodata());
                }
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
    indexData_work_sim(id)
    indexData_work_sim_(id)

    $(".middle_bar_1").on("click", function () {
        indexData_work(id)
    })
    $(".middle_bar_2").on("click", function () {
        indexData_work_detail(id)
    })
});