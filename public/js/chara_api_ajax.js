$(function () {

    // データからhtmlを出力する関数(tweet)
    function make_dom_tweet(data) {

        var str = '';
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].entities.media) {
                    str += ` <div class="card mb-2">
                <div class="card-body">
                    <div class="media">
                        <img src="${data[i].user.profile_image_url}" class="rounded-circle mr-4">
                        <div class="media-body">
                            <h5 class="d-inline mr-3"><strong>${data[i].user.name}</strong></h5>
                            <h6 class="d-inline text-secondary">${data[i].created_at}</h6>
                            <p class="mt-3 mb-0">${data[i].text}</p>`

                    str += `<img src="${data[i].entities.media[0].media_url}" style="width:100%">`

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
                }
            }
        }
        return str;
    }
    // データからhtmlを出力する関数(guild)
    function make_dom_guild(data) {
        console.log(data)
        var str = `<div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">ギルドLv</div>

            <div class=listparent style="border:none">
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">ギルドLv</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">${data[0].guild_level}</div>
                </div>
            </div>
            <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">総ファン数</div>
            <div class=listparent style="border:none">
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">総ファン数</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">3,767</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">ジョブ別ファン数
            </div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">絵師</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">クラフト職人</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">小説家</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">シャーマン</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent style="border:none">
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">エヴァンジェリスト</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">クエスト情報</div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">開放済みクエスト</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">32</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent style="border:none">
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">達成済みクエスト</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">16</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">
                投稿</div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">画像アップロード</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">好きなセリフ</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent>
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">外部SNSシェア</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>
            <div class=listparent style="border:none">
                <div class=list>
                    <div style="width:60%;color:#969696;margin:6px;">イベント・宣伝</div>
                    <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                    <div style="color:#969696;margin:6px;">人</div>
                </div>
                <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
            </div>`;
        return str;
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
    function indexData_tweet(id) {
        //
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
    }
    // 表示する関数(guild)
    function indexData_guild(id) {
        //
        const url = `/api/guild/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom_guild(data));
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

    // 読み込み時に実行

    var id = $(".main").attr('data-id')
    indexData_guild(id);
    $(".middle_bar_1").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_guild(id);
    })
    $(".middle_bar_2").on("click", function () {
        id = $(".main").attr('data-id')
        indexData_tweet(id);
    })
});