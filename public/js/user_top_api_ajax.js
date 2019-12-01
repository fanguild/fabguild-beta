$(function () {

    // データからhtmlを出力する関数(ユーザー情報)
    function make_dom(data) {
        var str = '';
        str += `<img id=chara_img src="${data[0][0].avatar}">
                <div class="user_name">${data[0][0].name}</div>`;
        return str;
    }
    // データからhtmlを出力する関数（マイキャラ情報）
    function make_dom_mychara(data) {
        var str = '';
        str += `<hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
                <div style="padding:4px;margin:0px;background-color: #EFEFEF;">登録済みマイキャラ</div>`
        var mychara = data[1];
        if (mychara != null) {
            for (var i = 0; i < mychara.length; i++) {
                str += `<a href="/chara/${mychara[i].charaid}" class=listparent>
                <div class=list>
                    <div><img class=thumbnail_img src=""></div>
                    <div style="margin:6px;">
                        <div>${mychara[i].name}</div>
                        <div style="color:#969696">${mychara[i].title}</div>
                    </div>
                    <div style="margin:12px">
                        <div class=label_btn>${mychara[i].labelname}</div>
                    </div>
                </div>
                <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
            </a>`;
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

    // 表示する関数
    function indexDataUser() {
        //
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

    // 読み込み時に実行
    indexDataUser();

});