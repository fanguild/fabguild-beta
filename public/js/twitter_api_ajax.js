$(function () {

    // データからhtmlを出力する関数
    function make_dom(data) {

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

    // 登録する関数
    function storeData() {
        //
        // 送信先の指定
        var url = '/api/tweet';
        // 入力情報の取得
        var data = {
            tweet: $('#tweet').val()
        };
        // データ送信
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            // dataType: 'json',
            url: url,
            type: 'POST',
            // data: JSON.stringify(data),
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

    // 表示する関数
    function indexData() {
        //
        const url = '/api/twitter';
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
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
            $('#tweet').val() == ''
        ) {
            alert('Tweet内容は入力必須です！')
        } else {
            storeData();
            $('#tweet').val('')
        }
    });

    // 削除ボタンクリック時に削除
    $('#echo').on('click', '.destroy', function () {
        // 削除するタスクのidを取得
        var id = $(this).attr('id');
        deleteData(id);
    });

    // 読み込み時に実行
    indexData();

});