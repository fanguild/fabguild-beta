$(function () {
    //データなし
    function make_dom_nodata() {
        var str = `<div class=nodata>データはありません</div>`
        return str;
    }

    //好きなセリフデータからhtmlを出力
    function make_dom_serif(data) {
        var str = ``;
        for (var i = 0; i < data.length; i++) {
            str += `<div class=serif_bx>
                        <div class=listparent style="width:95%">
                                <div class=list>
                                    <div><img class=thumbnail_img src="${data[i].s3url}"></div>
                                    <div class="listbox">
                                        <div style="color:#969696">${data[i].charaname}</div>
                                        <div class=serif>${data[i].serif}</div>
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
                                <div class=reason>${data[i].reason}</div>
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
                            <div class="chara_name1" style="color:#333333" value="${i + 1}">${data[i].name}</div>
                        </div>
                        </div>
                    </a>`;
        }
        return str;
    }

    // データからhtmlを出力する関数(tweet)
    function make_dom_tweet(data) {
        var mycharas = data[1]
        var tweet = data[0]
        var str = '';
        if (tweet.length != 0) {
            for (var i = 0; i < tweet.length; i++) {
                if (tweet[i].entities.media != null) {
                    str += ` <div class="card mb-2">
                <div class="card-body">
                    <div class="media">
                        <img src="${tweet[i].user.profile_image_url}" class="rounded-circle mr-4">
                        <div class="media-body">
                            <h5 class="d-inline mr-3"><strong>${tweet[i].user.name}</strong></h5>
                            <h6 class="d-inline text-secondary">${tweet[i].created_at}</h6>
                            <p class="mt-3 mb-0">${tweet[i].full_text}</p>`

                    str += `<img src="${tweet[i].entities.media[0].media_url}" style="width:100%">`

                    str += `</div>
                            </div>
                            </div>
                            <div class="card-footer bg-white border-top-0">
                                <div class="d-flex flex-row justify-content-end">
                                    <div class="mr-5"><i class="far fa-comment text-secondary"></i></div>
                                    <div class="mr-5"><i class="fas fa-retweet text-secondary"></i></div>
                                    <div class="mr-5"><i class="far fa-heart text-secondary"></i></div>
                                </div>
                            </div>
                        </div>`;
                } else {
                    str += ` <div class="card mb-2">
                <div class="card-body">
                    <div class="media">
                        <img src="${tweet[i].user.profile_image_url}" class="rounded-circle mr-4">
                        <div class="media-body">
                            <h5 class="d-inline mr-3"><strong>${tweet[i].user.name}</strong></h5>
                            <h6 class="d-inline text-secondary">${tweet[i].created_at}</h6>
                            <p class="mt-3 mb-0">${tweet[i].text}</p>`

                    str += `</div>
                            </div>
                            </div>
                            <div class="card-footer bg-white border-top-0">
                                <div class="d-flex flex-row justify-content-end">
                                    <div class="mr-5"><i class="far fa-comment text-secondary"></i></div>
                                    <div class="mr-5"><i class="fas fa-retweet text-secondary"></i></div>
                                    <div class="mr-5"><i class="far fa-heart text-secondary"></i></div>
                                </div>
                            </div>
                        </div>`
                }
            }
        } else {
            str += make_dom_nodata()
        }

        return str;
    }
    // データからhtmlを出力する関数(ユーザー情報)
    function make_dom(data) {

        var str = `<div class=chara>
                <img class=user_img src="${data[0][0].avatar}">
                <div class="user_name">${data[0][0].name}</div>
                </div>
                <div class=user_status>
                        <div class=quantity>${data[1].length}</div>
                        <div class=sub style="color:#FF8500">マイキャラ</div>
                </div>    
                <div class=user_status>
                        <div class=quantity>${data[2]}</div>
                        <div class=sub style="color:#FF8500">マイアルバム</div>
                </div> `;
        return str;
    }
    //マイキャラ情報（フィルタ用）
    function make_dom_filter(data) {
        var str = `<input type=radio name=mychara value=0 checked="checked" id=0>
                    <label for=0>全員</label>`
        for (var t = 0; t < data.length; t++) {
            str += `<input type=radio name=mychara value=${data[t].charaid} id=no_${data[t].charaid}>
            <label for=no_${data[t].charaid}>${data[t].charaname}</label>
                    `;
        }
        return str;
    }
    // データからhtmlを出力する関数（マイキャラ情報）
    function make_dom_mychara(data) {

        var str = `<div id="search" class="listparent" style="border:none;">
                <div class="list">
                    <div><img class="thumbnail_img" src="/storage/icon/mychara.svg"></div>
                    <div class="name_bx">
                        <div>好きなキャラクターを探す</div>
                        <div class=sub style="color:#969696">マイキャラを登録しよう</div>
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
                    str += `<a href="/chara/${mychara[i].charaid}" class=listparent>
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
    // 表示する関数(tweet)
    function indexData_tweet(id, callback) {
        //選択したキャラのみのタイムライン
        if (id) {
            const url = `/api/twitter/${id}`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    $('#echo').html(make_dom_tweet(data));
                    callback();
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
                    callback();
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
    // 表示する関数(好きなセリフ)
    function indexData_serifUser() {
        //
        const url = `/api/serif_u`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom_serif(data));
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

    var userid = $(".main").attr('other-id');
    // 読み込み時に実行
    indexDataUser(userid);
    $(".middle_bar_1").addClass("middle_bar_add");
    // $("#title").html(make_dom_title());

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
        indexDataWork(0)
    })
    //戻るボタンを押したら消える
    $("#back").on("click", function () {
        $(".slider").removeClass("slideLeft")
        $(".slider").addClass("slideRight")
        $('#title').empty()
        $(".slider").animate({ left: 0 })
    })

    $(".searchGenretabin li").on("click", function () {
        var index = $(".searchGenretabin li").index(this);
        if (index == 0) {
            $(".searchGenretabin li").removeClass();
            $(this).addClass("current")
            $(".searchtabin li:eq(0)").addClass("current")
            $(".searchSubtabin li:eq(0)").addClass("current")
            indexDataWork(0)
        } else {
            $(".searchGenretabin li").removeClass();
            $(this).addClass("current")
            $('#title').html(make_dom_nodata());
        }
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
        var str = '';
        if (data.length > 0) {
            var album = `<a href="" class="listparent" style="border: none;">
                    <div class="list">
                        <div><img class="thumbnail_img" src="/storage/icon/album.svg"></div>
                        <div style="margin:6px 3px">
                            <div>ポスターやアルバムを発注する</div>
                            <div style="color:#969696">発注画面に飛びます</div>
                        </div>
                    </div>
                </a>`
            var str = `<div class="item_container">`
            for (var i = 0; i < data.length; i++) {
                str += `<div class="item_box">
                        <div class="item_img">
                            <img src="${data[i].s3url}" alt="">
                        </div>
                    </div>`
            }
            str += `</div>`;
        } else {
            str += make_dom_nodata()
        }
        return str;
    }
    // 表示する関数(アルバム）
    function indexData_storage(id) {
        //
        if (id) {
            const url = `/api/upload/user/${id}`;
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
        } else {
            const url = `/api/upload/user`;
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
    }


    $(".middle_bar_1").on("click", function () {
        $("#filter").empty();
        indexDataUser(userid);
    })
    $(".middle_bar_2").on("click", function () {
        indexData_tweet("", indexDataFilter)

    })
    $(".middle_bar_3").on("click", function () {
        $("#filter").empty();
        indexDataFilter()
        indexData_storage()

    })
    $(document).on("change", "input[name='mychara']", function () {

        var current = $(".middle_bar_add").attr("data-id")
        var val = $(this).val();
        console.log(current)
        console.log(val)
        if (current == 1) {
            if (val == 0) {
                indexData_tweet()
            } else {
                indexData_tweet(val)
            }
        } else {
            if (val == 0) {
                indexData_storage()
            } else {
                indexData_storage(val)
            }
        }
    })

})
