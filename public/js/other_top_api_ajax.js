$(function () {
    //データなし
    function make_dom_nodata() {
        var str = `<div class=nodata>データはありません</div>`
        return str;
    }

    // データからhtmlを出力する関数(ユーザー情報)
    function make_dom(data) {

        var str = `<div class=chara_top_olt>
                <div class=chara_olt>
                <img class=user_img src="${data[0][0].avatar}">
                </div>
                
                <div class=user_status>
                        <div class=quantity>${data[1].length}</div>
                        <div class=sub style="color:#FF8500">マイキャラ</div>
                </div>    
                <div class=user_status>
                        <div class=quantity>${data[2]}</div>
                        <div class=sub style="color:#FF8500">マイアルバム</div>
                </div></div>
                <div class="chara_name_olt">${data[0][0].name}</div>`;
        return str;
    }

    // データからhtmlを出力する関数（マイキャラ情報）
    function make_dom_mychara(data) {

        var str = '';
        var mychara = data[1];
        if (mychara != null) {
            for (var i = 0; i < mychara.length; i++) {
                if (mychara[i].s3url) {
                    str += `<a href="/chara/${mychara[i].id}" class=listparent>
                            <div class=list>
                                <div><img class=thumbnail_img src="${mychara[i].s3url}" oncontextmenu="return false;"></div>
                                <div class="name_bx">
                                    <div>${mychara[i].name}</div>
                                    <div class=sub style="color:#969696">${mychara[i].title}</div>
                                </div>
                                <div class="label_bx">
                                    <label class=label_btn><div>${mychara[i].labelname}</div></label>
                                </div>
                            </div>
                            <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                            </a>`;
                } else {
                    str += `<a href="/chara/${mychara[i].id}" class=listparent>
                            <div class=list>
                                <div><img class=thumbnail_img src="/storage/icon/nolicense.svg" oncontextmenu="return false;"></div>
                                <div class="name_bx"">
                                    <div>${mychara[i].name}</div>
                                    <div style="color:#969696">${mychara[i].title}</div>
                                </div>
                                <div class="label_bx">
                                    <label class=label_btn><div>${mychara[i].labelname}</div></label>
                                </div>
                            </div>
                            <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                            </a>`;
                }
            }
            return str;
        }
    }

    // ユーザー情報を表示する関数
    function indexDataUser(id) {
        //
        if (id) {
            const url = `/api/user/${id}`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#user_left').html(make_dom(data));
                    $('#echo').html(make_dom_mychara(data));
                    $("#search").hide();
                    $(".content1").hide();
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        } else {
            const url = `/api/user/`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#user_left').html(make_dom(data));
                    $('#echo').html(make_dom_mychara(data));
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        }
    }
    var userid = $(".main").attr('other-id');
    // 読み込み時に実行
    indexDataUser(userid);
    $(".middle_bar_1").addClass("middle_bar_add");
})
