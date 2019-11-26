@extends('layouts.header')
@section('content')


<div class="main">
    <div class="content">
        <div class=chara_top>
            <div class=chara>
                <img id=chara_img src="/storage/chara_picture/ACE.png">

                <div class="chara_name">エース(ONE PIECE)</div>
            </div>
            <div class=guild_status>
                <div style="text-align:start;">ギルドランク
                </div>
                <img id=guild_icon src="storage/icon/盾.svg" style="height:62px">
                <div style="color:#FF8500">オレンジ</div>
                <div class=chara_population>
                    <div class=pop style="color:#969696;">総ファン数</div>
                    <div class=pop style="font-size:16px;font-weight: 700;">3,767</div>
                    <div class=pop style="color:#969696;">人</div>
                </div>
            </div>
        </div>
        <div class="join_btn">
            <div>ギルドに参加する</div>
        </div>
        <div class="middle_bar">
            <div class=middle_bar_outline>
                <div class=middle_bar_1 style="padding:6px 0 3px 0 ;">ギルド</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_2 style="padding:6px 0 3px 0 ;">タイムライン</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">画像倉庫</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_4 style="padding:6px 0 3px 0 ;">募集</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_5 style="padding:6px 0 3px 0 ;">クエスト</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_6 style="padding:6px 0 3px 0 ;">好きなセリフ</div>
            </div>
            <div class=middle_bar_outline>
                <div class=forborder>
                    <div class=middle_bar_7 style="padding:6px 0 3px 0 ;">告知</div>
                </div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_1 style="padding:6px 0 3px 0 ;">ギルド</div>
            </div>
            <div class=middle_bar_outline>
                <a href="{{url('timeline')}}" style="text-decoration: none;color:#333333">
                    <div class=middle_bar_2 style="padding:6px 0 3px 0 ;">
                        タイムライン
                    </div>
                </a>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">画像倉庫</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_4 style="padding:6px 0 3px 0 ;">募集</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_5 style="padding:6px 0 3px 0 ;">クエスト</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_6 style="padding:6px 0 3px 0 ;">好きなセリフ</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_7 style="padding:6px 0 3px 0 ;">告知</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_1 style="padding:6px 0 3px 0 ;">ギルド</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_2 style="padding:6px 0 3px 0 ;">タイムライン</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">画像倉庫</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_4 style="padding:6px 0 3px 0 ;">募集</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_5 style="padding:6px 0 3px 0 ;">クエスト</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_6 style="padding:6px 0 3px 0 ;">好きなセリフ</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_7 style="padding:6px 0 3px 0 ;">告知</div>
            </div>
        </div>
        <hr style="padding:0px;margin:0px;background-color: #EFEFEF;">
        <div class="container" id=echo>
            <!-- コントローラーで取得した$resultをforeachで回す -->

        </div>
    </div>
</div>


<script>
    $(".middle_bar").scrollLeft(410);
    $(".middle_bar_2").addClass("middle_bar_add");
    setTimeout(function() {
        $(".middle_bar").animate({
            scrollLeft: 500
        });

    }, 200);
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

    function indexData() {
        //
        const url = '/api/twitter';
        $.ajax(url)
            .done(function(data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom(data));
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            })
            .always(function() {
                console.log('get:complete');
            });
    }

    // 読み込み時に実行
    indexData();
</script>

@endsection