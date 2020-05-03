$(function () {

    //データなし
    function make_dom_nodata() {
        var str = `<div class=nodata>データはありません</div>`
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
        if (data.length != 0) {
            for (var i = 0; i < data.length; i++) {
                str += `<a href="/work/${data[i].id}" class="listparent" id=${i + 1}>
                    <div class="list" style="width:100%">`
                if (data[i].ogp != "null") {
                    str += `<div><img class="thumbnail_title" src="${data[i].ogp}"></div>`
                } else {
                    str += `<div><img class="thumbnail_title" src="storage/icon/nolicense.svg"></div>`
                }
                str += `<div style="margin:6px 0px 6px 8px;display: flex;flex-direction: column;justify-content: center;">
                        <h6 style="color:#333333;font-weight:600;margin:0" value="${i + 1}">${data[i].titlename}</h6>
                        <div style="display: flex;height: 24px;align-items: center;">
                        </div>
                        <div class=sub style="color:#333333;font-weight:600">主要キャラ</div>
                        <div style="display: flex;height: 24px;align-items: center;">
                        <span class=sub>${data[i].mainchara1}/${data[i].mainchara2}/${data[i].mainchara3}</span>
                        </div>
                    </div>
                    </div>
                    </a>`;
            }
        } else {
            str += make_dom_nodata()
        }
        return str;
    }

    // データからhtmlを出力する関数(tweet)
    function make_dom_tweet(data) {
        var mycharas = data[1]
        var tweet = data[0]
        var str = '<div class="item_container">';
        if (tweet.length != 0) {
            for (var i = 0; i < tweet.length; i++) {
                if (tweet[i].entities.media != null) {
                    str += `<div class="item_box">
                            <div class="item_img">
                            <img src="${tweet[i].entities.media[0].media_url}" alt="">
                            </div>
                            </div>`
                }
            } str += `</div>`;
        } else {
            str += make_dom_nodata()
        }

        return str;
    }


    // 表示する関数(tweet)
    function indexData_tweet(id) {
        //選択したキャラのみのタイムライン
        if (id) {
            const url = `/api/twitter/${id}`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#echo').html(make_dom_tweet(data));
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        } else {//マイキャラ全員分のタイムライン表示
            const url = `/api/twitter`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#echo').html(make_dom_tweet(data));
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        }
    }
    // ユーザー情報を表示する関数
    function indexDataFilter() {
        //
        const url = `/api/mychara`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#filter').html(make_dom_filter(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }


    //作品リストを表示する関数
    function indexDataWork(year, season) {
        //
        const url = `/api/title/year/${year}/season/${season}`;
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



    // 削除ボタンクリック時に削除
    $('#echo').on('click', '.destroy', function () {
        // 削除するタスクのidを取得
        var id = $(this).attr('id');
        deleteData(id);
    });

    var userid = $(".main").attr('other-id');
    // 読み込み時に実行
    indexData_tweet();

    //マイキャラ検索を押したら実行
    $(document).on("click", "#search", function () {
        $(".slider").removeClass("slideRight")
        $(".slider").addClass("slideLeft")
        $(".searchGenretabin li").removeClass("current");
        $(".searchtabin li").removeClass("current")
        $(".searchSubtabin li").removeClass("current")
        $(".searchGenretabin li:eq(0)").addClass("current");
        $(".searchtabin li:eq(0)").addClass("current")
        $(".searchSubtabin li:eq(0)").addClass("current")
        indexDataWork(2020, 0)
    })
    //戻るボタンを押したら消える
    $(document).on("click", "#back_", function () {
        $(".slider").removeClass("slideLeft")
        $(".slider").addClass("slideRight")
        $('#title').empty()
        $(".slider").animate({ left: 0 })
        console.log("a")
    })

    $(".searchGenretabin li").on("click", function () {
        // var index = $(".searchGenretabin li").index(this);
        // if (index == 0) {
        //     $(".searchGenretabin li").removeClass();
        //     $(this).addClass("current")
        //     $(".searchtabin li:eq(0)").addClass("current")
        //     $(".searchSubtabin li:eq(0)").addClass("current")
        //     indexDataWork(0)
        // } else {
        //     $(".searchGenretabin li").removeClass();
        //     $(this).addClass("current")
        //     $('#title').html(make_dom_nodata());
        // }
    })

    $(".searchtabin li").on("click", function () {
        $(".searchtabin li").removeClass();
        $(this).addClass("current")
        // var index = $('.searchtabin li').index(this);

        // gojuon = [["あ", "い", "う", "え", "お"],
        // ["か", "き", "く", "け", "こ"],
        // ["さ", "し", "す", "せ", "そ"],
        // ["た", "ち", "つ", "て", "と"],
        // ["な", "に", "ぬ", "ね", "の"],
        // ["は", "ひ", "ふ", "へ", "ほ"],
        // ["ま", "み", "む", "め", "も"],
        // ["や", "ゆ", "よ"],
        // ["ら", "り", "る", "れ", "ろ"],
        // ["わ", "を", "ん"]
        // ]
        // str = "";

        // str += `<li class="current" data-id=0><a href="javascript:void(0);">${gojuon[index][0]}</a></li>`
        // for (var i = 1; i < gojuon[index].length; i++) {
        //     str += `<li data-id=${i}><a href="javascript:void(0);">${gojuon[index][i]}</a></li>`
        // }

        // $(".searchSubtabin").html(str);
        // var a = $(".searchtabin .current").data("id");
        // var b = $(".searchSubtabin .current").data("id");

        // indexDataWork(5 * (a - 1) + b)
    })

    $(document).on("click", ".searchSubtabin li", function () {
        $(".searchSubtabin li").removeClass();
        $(this).addClass("current");
        var a = $(".searchtabin .current").data("id");
        var b = $(".searchSubtabin .current").data("id");
        console.log(a, b)
        indexDataWork(a, b)
    })


})
