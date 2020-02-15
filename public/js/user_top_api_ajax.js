$(function () {
    //好きなセリフデータからhtmlを出力
    function make_dom_serif(data) {
        var str = `<hr style="padding:4px;margin:0px;background-color: #EFEFEF;">`
        for (var i = 0; i < 3; i++) {
            str += `<div class=serif_bx>
                        <div class=listparent style="width:95%">
                                <div class=list>
                                    <div><img class=thumbnail_img src=""></div>
                                    <div style="margin:6px;">
                                        <div style="color:#969696">twitterID</div>
                                        <div class=serif>あああああああああああああああああああああああああああ</div>
                                        <div style="font-size: small;color:#969696;text-allign:right;text-align: right;width: 60%;">22話〜〜のシーン</div>
                                    </div>
                                </div>
                            </div>
                            <div class=listparent_s style="width:95%">
                                <div class=thisserif>
                                    <div style="margin:6px;">
                                        <div></div>
                                        <div style="color:#969696;width: 25%;border-bottom: 1px solid #c9c9c9;text-align: center;padding: 4px 0px;">好きな理由</div>
                                    </div>
                                </div>
                                <div class=reason>ああああああああああああああああああああああああああああああああああああああ</div>
                            </div>
                    </div>`;
        }
        return str;
    }

    //検索結果を表示する関数
    function make_dom_result(data) {

    }
    //作品名で探す
    function make_dom_title() {
        var gojuon = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"];
        var str = '<div class=slider1><div style = "padding:6px 12px;margin:0px;background-color: #EFEFEF;">作品名で探す</div>';
        for (var i = 0; i < gojuon.length - 1; i++) {
            str += `<li id="titlelist" class="listparent titlelist" style="">
                    <div class="list">
                        <div id="upload_chara_select" style="width:60%;color:#969696;margin:6px;">${gojuon[i]}行</div>
                    </div>
                    <div class="arrow">
                        <img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px;">
                    </div>
                </li><div id="toggle" style="display:none;width:360px"></div>`;
        }
        str += `<div class="listparent" style="border-bottom:0px">
                    <div class="list">
                        <div id="upload_chara_select" style="width:60%;color:#969696;margin:6px;">${gojuon[i]}行</div>
                    </div>
                    <div class="arrow">
                        <img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px;">
                    </div>
                </div></div>`;
        return str;
    }
    function make_dom_titlelist(data) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += `<a href="/work/${data[i].id}" class="listparent" id=${i + 1}>
                    <div class="list">
                        <div style="margin:6px 3px;">
                            <div class="chara_name" style="color:#333333" value="${i + 1}">${data[i].name}</div>
                        </div>
                        </div>
                    </a>`;
        }
        return str;
    }

    // データからhtmlを出力する関数(ユーザー情報)
    function make_dom(data) {

        var str = `<img class=user_img src="${data[0][0].avatar}">
                <div class="user_name">${data[0][0].name}</div>`;
        return str;
    }
    // データからhtmlを出力する関数（マイキャラ情報）
    function make_dom_mychara(data) {

        var str = `<div id="search" class="listparent" style="border:none;">
                <div class="list">
                    <div><img class="thumbnail_img" src="/storage/icon/mychara.svg"></div>
                    <div style="margin:6px 3px">
                        <div>ファンギルドに参加</div>
                        <div style="color:#969696">マイキャラを追加してみよう</div>
                    </div>
                </div>
                <div class="arrow"><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
            </div>
            <hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
                <div style="padding:6px 12px;margin:0px;background-color: #EFEFEF;">登録済みマイキャラ</div>`
        var mychara = data[1];
        if (mychara != null) {
            for (var i = 0; i < mychara.length; i++) {
                if (mychara[i].s3url) {
                    str += `<a href="/chara/${mychara[i].charaid}" class=listparent>
                            <div class=list>
                                <div><img class=thumbnail_img src="${mychara[i].s3url}"></div>
                                <div class="name_bx" style="margin:6px;">
                                    <div>${mychara[i].name}</div>
                                    <div style="color:#969696">${mychara[i].title}</div>
                                </div>
                                <div class="label_bx" style="margin:12px">
                                    <div class=label_btn>${mychara[i].labelname}</div>
                                </div>
                            </div>
                            <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                            </a>`;
                } else {
                    str += `<a href="/chara/${mychara[i].charaid}" class=listparent>
                            <div class=list>
                                <div><img class=thumbnail_img src="/storage/icon/nolicense.svg"></div>
                                <div class="name_bx" style="margin:6px;">
                                    <div>${mychara[i].name}</div>
                                    <div style="color:#969696">${mychara[i].title}</div>
                                </div>
                                <div class="label_bx" style="margin:12px">
                                    <div class=label_btn>${mychara[i].labelname}</div>
                                </div>
                            </div>
                            <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                            </a>`;
                }
            }
            return str;
        }
    }

    // 登録する関数
    function storeData() {
        //
        // 送信先の指定
        var url = '/api/tasks';
        // 入力情報の取得
        var data = {
            task: $('#task').val(),
            deadline: $('#deadline').val(),
            comment: $('#comment').val()
        };
        // データ送信
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            dataType: 'json',
            url: url,
            type: 'POST',
            data: JSON.stringify(data),
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

    //作品リストを表示する関数
    function indexDataWork(id) {
        //
        const url = `/api/title/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#title').html(make_dom_titlelist(data))
                // $('#user_left').html(make_dom(data));
                // $('#echo').html(make_dom_mychara(data));
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

    // 送信ボタンクリック時に登録
    $('#submit').on('click', function () {
        if (
            $('#task').val() == '' ||
            $('#deadline').val() == ''
        ) {
            alert('taskとdeadlineは入力必須です！')
        } else {
            storeData();
            $('#task').val(''),
                $('#deadline').val(''),
                $('#comment').val('')
        }
    });

    // 削除ボタンクリック時に削除
    $('#echo').on('click', '.destroy', function () {
        // 削除するタスクのidを取得
        var id = $(this).attr('id');
        deleteData(id);
    });

    var userid = $(".main").attr('data-id');
    // 読み込み時に実行
    indexDataUser(userid);
    $(".middle_bar_1").addClass("middle_bar_add");
    // $("#title").html(make_dom_title());

    //マイキャラ検索を押したら実行
    $(document).on("click", "#search", function () {
        $(".slider").animate({ left: -375 })
        indexDataWork(0)
    })
    //戻るボタンを押したら消える
    $("#back").on("click", function () {
        $('#title').empty()
        $(".slider").animate({ left: 0 })
    })

    $(".searchGenretabin li").on("click", function () {
        $(".searchGenretabin li").removeClass();
        $(this).addClass("current")
        $(".searchSubtabin li").removeClass();
        // $(this).addClass("current")
        $(".searchtabin li").removeClass();
        // $(this).addClass("current")
    })

    $(".searchtabin li").on("click", function () {
        $(".searchtabin li").removeClass();
        $(this).addClass("current")
        var index = $('.searchtabin li').index(this);

        gojuon = [["あ", "い", "う", "え", "お"],
        ["か", "き", "く", "け", "こ"],
        ["さ", "し", "す", "せ", "そ"],
        ["た", "ち", "つ", "て", "と"],
        ["な", "に", "ぬ", "ね", "の"],
        ["は", "ひ", "ふ", "へ", "ほ"],
        ["ま", "み", "む", "め", "も"],
        ["や", "ゆ", "よ"],
        ["ら", "り", "る", "れ", "ろ"],
        ["わ", "を", "ん"]
        ]
        str = "";

        str += `<li class="current" data-id=0><a href="javascript:void(0);">${gojuon[index][0]}</a></li>`
        for (var i = 1; i < gojuon[index].length; i++) {
            str += `<li data-id=${i}><a href="javascript:void(0);">${gojuon[index][i]}</a></li>`
        }

        $(".searchSubtabin").html(str);
        var a = $(".searchtabin .current").data("id");
        var b = $(".searchSubtabin .current").data("id");

        indexDataWork(5 * (a - 1) + b)
    })

    $(document).on("click", ".searchSubtabin li", function () {
        $(".searchSubtabin li").removeClass();
        $(this).addClass("current");
        var a = $(".searchtabin .current").data("id");
        var b = $(".searchSubtabin .current").data("id");
        console.log(5 * (a - 1) + b)
        indexDataWork(5 * (a - 1) + b)
    })
    // データからhtmlを出力する関数(アルバム)
    function make_dom_storage(data) {

        var str = `<a href="" class="listparent" style="border: none;">
                    <div class="list">
                        <div><img class="thumbnail_img" src="/storage/icon/album.svg"></div>
                        <div style="margin:6px 3px">
                            <div>ポスターやアルバムを発注する</div>
                            <div style="color:#969696">発注画面に飛びます</div>
                        </div>
                    </div>
                </a>
                <div class="item_container">`
        for (var i = 0; i < data.length; i++) {
            str += `<div class="item_box">
                        <div class="item_img">
                            <img src="${data[i].s3url}" alt="">
                        </div>
                    </div>`
        }
        str += `</div>`;
        return str;
    }
    // 表示する関数(アルバム）
    function indexData_storage() {
        //
        const url = `/api/upload_u`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $("#search").hide()
                $('#echo').html(make_dom_storage(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }
    $(".middle_bar_1").on("click", function () {
        indexDataUser(userid);
    })
    $(".middle_bar_2").on("click", function () {
        $('#echo').html(make_dom_serif())
    })
    $(".middle_bar_3").on("click", function () {
        indexData_storage()
    })

})