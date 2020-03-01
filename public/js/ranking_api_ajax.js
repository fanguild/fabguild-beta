$(function () {

    // データからhtmlを出力する関数(fanlist)
    function make_dom_rankinglist(data) {

        var str = '';
        str += `<hr style="padding:4px;margin:0px;background-color: #EFEFEF;">`

        for (var i = 0; i < data.length; i++) {
            str += `<a href="/chara/${data[i].charaid}" class=listparent>
                <div class=list>
                    <div class=numbering>${i + 1}</div>
                    <div style="margin:6px;">
                        <div>${data[i].charaname}</div>
                        <div style="color:#969696">${data[i].title}</div>
                    </div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
            </a>`;
        }

        return str;

    }
    //キャラトップのhtmlを出力
    function make_dom_charatop(data) {
        var str = ``
        str += `<div class=s_bx_c>
                        <div class=chara_status>
                            <div class=quantity>${data[3]}</div>
                            <div class=sub style="color:#FF8500">総合ランキング</div>
                        </div>
                    </div>
                    <div class=s_bx_c>
                        <div class=chara_status>
                            <div class=quantity id=sum>${data[1]}</div>
                            <div class=sub>総ファン数</div>
                        </div>
                        <div class=chara_status>
                            <div class=quantity id=mlc>${data[2]}</div>
                            <div class=sub>推しファン数</div>
                        </div>
                    </div>`;
        return str;
    }
    //表示する関数（top）
    function indexDataCharaTop(id) {
        const url = `/api/chara/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('.status_bx').html(make_dom_charatop(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }


    // 表示する関数(fanlist)
    function indexData_rankinglist(id, flg) {
        //
        if (flg == 0) {
            const url = `/api/ranking/${id}`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#echo').html(make_dom_rankinglist(data));
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        } else if (flg == 1) {
            const url = `/api/ranking/mlc/${id}`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#echo').html(make_dom_rankinglist(data));
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        } else {
            const url = `/api/ranking/title/${id}`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#echo').html(make_dom_rankinglist(data));
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        }
    }

    // 削除する関数
    function deleteData(id) {
        //
        // 送信先の指定
        var url = `/api/task/${id}`;
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




    // 読み込み時に実行
    $(".middle_bar").scrollLeft(300);
    $(".middle_bar_1").addClass("middle_bar_add");
    // var id = $(".main").attr('data-id')
    // indexData_guild(id);
    id = $(".main").attr('data-id')
    console.log(id)
    indexData_rankinglist(id, 0);
    indexDataCharaTop(id);

    $(".middle_bar_1").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_rankinglist(id, 0);
    })
    $(".middle_bar_2").on("click", function () {
        id = $(".main").attr('data-id')
        var flg = 1
        indexData_rankinglist(id, flg);
    })
    $(".middle_bar_3").on("click", function () {
        id = $(".main").attr('data-id')
        var flg = 2
        indexData_rankinglist(id, flg);
    })
});