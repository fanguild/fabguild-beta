$(function () {
    //データなし
    function make_dom_nodata() {
        var str = `<div class=nodata>データはありません</div>`
        return str;
    }
    // データからhtmlを出力する関数(labellist)
    function make_dom_labellist(data) {

        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += `<a class=listparent>
                <div class=list>
                    <div style="margin:6px;">
                        <div>${data[i].labelname}</div>
                    </div>
                </div>
                <div style="font-size:large">${data[i].count}</div>
            </a>`;
        }

        return str;

    }
    // データからhtmlを出力する関数(fanlist)
    function make_dom_fanlist(data) {

        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += `<a href="/user/${data[i].userid}" class=listparent>
                <div class=list>
                    <div><img class=thumbnail_img src="${data[i].avatar}"></div>
                    <div style="margin:6px;">
                        <div>${data[i].name}</div>
                        <div style="color:#969696">twitterID</div>
                    </div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
            </a>`;
        }

        return str;

    }
    // // データからhtmlを出力する関数(tweet)
    // function make_dom_tweet(data) {

    //     var str = '';
    //     if (data != null) {
    //         for (var i = 0; i < data.length; i++) {
    //             if (data[i].entities.media) {
    //                 str += ` <div class="card mb-2">
    //             <div class="card-body">
    //                 <div class="media">
    //                     <img src="${data[i].user.profile_image_url}" class="rounded-circle mr-4">
    //                     <div class="media-body">
    //                         <h5 class="d-inline mr-3"><strong>${data[i].user.name}</strong></h5>
    //                         <h6 class="d-inline text-secondary">${data[i].created_at}</h6>
    //                         <p class="mt-3 mb-0">${data[i].text}</p>`

    //                 str += `<img src="${data[i].entities.media[0].media_url}" style="width:100%">`

    //                 str += `</div>
    //                         </div>
    //                         </div>
    //                         <div class="card-footer bg-white border-top-0">
    //                             <div class="d-flex flex-row justify-content-end">
    //                                 <div class="mr-5"><i class="far fa-comment text-secondary"></i></div>
    //                                 <div class="mr-5"><i class="fas fa-retweet text-secondary"></i></div>
    //                                 <div class="mr-5"><i class="far fa-heart text-secondary"></i></div>
    //                             </div>
    //                         </div>
    //                     </div>`;
    //             }
    //         }
    //     }
    //     return str;
    // }
    // // データからhtmlを出力する関数(guild)
    // function make_dom_guild(data) {

    //     console.log(data)
    //     var str = `<div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">ギルドLv</div>

    //         <div class=listparent style="border:none">
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">ギルドLv</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">${data.charas[0].guild_level}</div>
    //             </div>
    //         </div>
    //         <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">総ファン数</div>
    //         <div id="fan_gross" class=listparent style="border:none">
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">総ファン数</div>
    //                 <div class=sum style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">${data.sum}</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //             <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
    //         </div>
    //         <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">ジョブ別ファン数
    //         </div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">絵師</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">クラフト職人</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">小説家</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">シャーマン</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div class=listparent style="border:none">
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">エヴァンジェリスト</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">クエスト情報</div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">開放済みクエスト</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //             </div>
    //         </div>
    //         <div class=listparent style="border:none">
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">達成済みクエスト</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //             </div>
    //         </div>
    //         <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">
    //             投稿</div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">画像アップロード</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">好きなセリフ</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div class=listparent>
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">外部SNSシェア</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>
    //         <div class=listparent style="border:none">
    //             <div class=list>
    //                 <div style="width:60%;color:#969696;margin:6px;">イベント・宣伝</div>
    //                 <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">0</div>
    //                 <div style="color:#969696;margin:6px;">人</div>
    //             </div>
    //         </div>`;
    //     return str;
    // }

    // // データからhtmlを出力する関数(画像倉庫)
    // function make_dom_storage(data) {

    //     var str = `<div class="item_container">`
    //     for (var i = 0; i < data.length; i++) {
    //         str += `<div class="item_box">
    //                     <div class="item_img">
    //                         <img src="${data[i].s3url}" alt="">
    //                     </div>
    //                 </div>`
    //     }
    //     str += `</div>`;
    //     return str;
    // }
    // function make_dom_quest(data) {

    //     var str = `<div style="background-color: #efefef;display:flex;">
    //             <div class=quest>
    //                 <div>好きなセリフ<br>投稿を<br>10本以上</div>
    //                 <img class=check src="/storage/img/check.svg" style="height:24px;">
    //             </div>
    //             <div class=quest>
    //                 <div>総ファン数<br>100名以上</div>
    //                 <img class=check src="/storage/img/check.svg" style="height:24px;">
    //             </div>
    //         </div>
    //         <div style="background-color: #efefef;display:flex;">
    //             <div class=quest>
    //                 <img src="/storage/img/lock.svg" style="height:56px">
    //                 <div>ギルドランク<br>ブロンズ以上で<br>開放</div>
    //             </div>
    //             <div class=quest>
    //                 <img src="/storage/img/unlock.svg" style="height:56px">
    //                 <div>イラスト画像<br>投稿を<br>100件以上</div>
    //             </div>
    //         </div>
    //         <div style="background-color: #efefef;display:flex;">
    //             <div class=quest>
    //                 <div>エヴァンジェリスト<br>人数を<br>100人以上</div>
    //                 <img class=check src="/storage/img/check.svg" style="height:24px;">
    //             </div>
    //             <div class=quest>
    //                 <img src="/storage/img/lock.svg" style="height:56px">
    //                 <div>総ファン数<br>5000人以上で<br>開放</div>
    //             </div>
    //         </div>`;
    //     return str;
    // }
    // //好きなセリフデータからhtmlを出力
    // function make_dom_serif(data) {
    //     var str = `<hr style="padding:4px;margin:0px;background-color: #EFEFEF;">`
    //     for (var i = 0; i < data.length; i++) {
    //         str += `<a href="/serif/${data[i].id}" class=serif_bx>
    //                     <div class=listparent style="width:95%">
    //                             <div class=list>
    //                                 <div><img class=thumbnail_img src="${data[i].avatar}"></div>
    //                                 <div class="listbox">
    //                                     <div style="color:#969696">${data[i].name}</div>
    //                                     <div class=serif>${data[i].serif}</div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div class=listparent_s style="width:95%">
    //                             <div class=thisserif>
    //                                 <div style="margin:6px;">
    //                                     <div></div>
    //                                     <div style="color:#969696;width: 25%;border-bottom: 1px solid #c9c9c9;text-align: center;padding: 4px 0px;">好きな理由</div>
    //                                 </div>
    //                             </div>
    //                             <div class=reason>${data[i].reason}</div>
    //                         </div>
    //                 </a>`;
    //     }
    //     return str;
    // }

    //キャラトップのhtmlを出力
    function make_dom_charatop(data) {
        var str = ``
        str += `<div class=s_bx_c>
                        <a href="/rank/${data[0][0].id}" class=chara_status>
                            <div class=quantity>${data[3]}</div>
                            <div class=sub style="color:#FF8500">総合ランキング</div>
                        </a>
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
    //recommnedのhtmlを出力
    function make_dom_recommend(data) {
        var str = ``
        for (var i = 0; i < data.charas.length; i++) {
            str += `<div class=recomend_box>`
            str += `<a href="/chara/${data.charas[i].id}"><img class="thumbnail_img" src="/storage/icon/nolicense.svg" style="height:100px;width:100px"></a>
                    <div class=center>${data.charas[i].name}</div>`
            str += `</div>`;
        }
        return str;
    }
    //adのhtmlを出力
    function make_dom_ad(data) {
        var str = ``
        for (var i = 0; i < data.ads.length; i++) {
            str += `<div style="display: flex;flex-direction: column;width: 45%;margin: 8px;">`
            str += `${data.ads[i].img_link}${data.ads[i].text_link}</div>`;
        }
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
    // 表示する関数(作品内キャラリスト)
    function indexData_charas_same(id) {
        // 送信先の指定
        var url = '/api/recommend/sametitle';
        var request = {
            chara: id,
            work: 0,
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
                $('#same').html(make_dom_recommend(data_return))
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }
    // 表示する関数(ad)
    function indexData_ad(id) {
        //
        const url = `/api/ad/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $("#echo").html(make_dom_ad(data))
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }

    // // 表示する関数(tweet)
    // function indexData_tweet(id) {
    //     //
    //     const url = `/api/twitter/${id}`;
    //     $.ajax(url)
    //         .done(function (data, textStatus, jqXHR) {
    //             console.log(data);
    //             $('#echo').html(make_dom_tweet(data));
    //         })
    //         .fail(function (jqXHR, textStatus, errorThrown) {
    //             console.log(jqXHR.status + textStatus + errorThrown);
    //         })
    //         .always(function () {
    //             console.log('get:complete');
    //         });
    // }
    // // 表示する関数(好きなセリフ)
    // function indexData_serif(id) {
    //     //
    //     const url = `/api/serif/${id}`;
    //     $.ajax(url)
    //         .done(function (data, textStatus, jqXHR) {
    //             console.log(data);
    //             $('#echo').html(make_dom_serif(data));
    //         })
    //         .fail(function (jqXHR, textStatus, errorThrown) {
    //             console.log(jqXHR.status + textStatus + errorThrown);
    //         })
    //         .always(function () {
    //             console.log('get:complete');
    //         });
    // }
    // // 表示する関数(guild)
    // function indexData_guild(id) {
    //     //
    //     const url = `/api/guild/${id}`;
    //     $.ajax(url)
    //         .done(function (data, textStatus, jqXHR) {
    //             console.log(data);
    //             $('#echo').html(make_dom_guild(data));
    //         })
    //         .fail(function (jqXHR, textStatus, errorThrown) {
    //             console.log(jqXHR.status + textStatus + errorThrown);
    //         })
    //         .always(function () {
    //             console.log('get:complete');
    //         });
    // }
    // 表示する関数(fanlist)
    function indexData_fanlist(id) {
        //
        const url = `/api/fanlist/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                if (data[0] != null) {
                    $('#echo').html(make_dom_fanlist(data));
                } else {
                    $('#echo').html(make_dom_nodata());
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }
    // 表示する関数(fanlist)
    function indexData_labellist(id) {
        //
        const url = `/api/labellist/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);

                if (data[0] != null) {
                    $('#echo').html(make_dom_labellist(data));
                } else {
                    $('#echo').html(make_dom_nodata());
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }
    // 表示する関数(画像倉庫）
    function indexData_storage(id) {
        //
        const url = `/api/upload_pic/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom_storage(data));
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

    //画像アップロードで画面表示する関数
    $('#file').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#chara_img_modal").attr('src', e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    });

    // 送信ボタンクリック時に登録
    $('#submit').on('click', function () {
        if (
            $('#label').val() == ''
        ) {
            alert('ラベル名は入力必須です！')
        } else {
            storeData();
            $('#file').val('');
            $("#chara_img_modal").attr('src', "");
            //footerを畳む
            $("#footer_menu_1").removeClass("footer_first");
            $("#footer_menu_3").removeClass("footer_third");
            $("#footer_menu_name_1").removeClass("footer_first");
            $("#footer_menu_name_3").removeClass("footer_third");

            $("#footer_menu_1").addClass("footer_third");
            $("#footer_menu_3").addClass("footer_first");
            $("#footer_menu_name_1").addClass("footer_third");
            $("#footer_menu_name_3").addClass("footer_first");

            $(".footer").css({ transform: "rotate(0deg)" })
            $("#footer_back").removeClass("footer_back")

            $("#footer_menu_1").css({ transform: "scale(0)" });
            $("#footer_menu_2").css({ transform: "scale(0)" });
            $("#footer_menu_3").css({ transform: "scale(0)" });

            $("#footer_menu_name_1").css({ transform: "scale(0)" });
            $("#footer_menu_name_2").css({ transform: "scale(0)" });
            $("#footer_menu_name_3").css({ transform: "scale(0)" });
        }
    });

    // 削除ボタンクリック時に削除
    $('#echo').on('click', '.destroy', function () {
        // 削除するタスクのidを取得
        var id = $(this).attr('id');
        deleteData(id);
    });

    // 読み込み時に実行
    $(".middle_bar").scrollLeft(300);
    $(".middle_bar_6").addClass("middle_bar_add");
    // var id = $(".main").attr('data-id')
    // indexData_guild(id);
    id = $(".main").attr('data-id')
    indexData_fanlist(id);
    indexDataCharaTop(id);
    indexData_charas_same(id);
    indexData_ad(id)

    $(document).on("click", "#fan_gross", function () {
        id = $(".main").attr('data-id')
        indexData_fanlist(id);
    })
    $(".middle_bar_1").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_guild(id);
    })
    $(".middle_bar_2").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_tweet(id);
    })
    $(".middle_bar_3").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_storage(id)
    })
    $(".middle_bar_4").on("click", function () {
        $('#echo').html(make_dom_quest())
    })
    $(".middle_bar_5").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_labellist(id)
    })
    $(".middle_bar_6").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_fanlist(id)
    })
    $(".middle_bar_7").on("click", function () {
        id = $(".main").attr('data-id')
        // indexData_serif(id)
    })
});