$(function () {
    function make_dom_work(data) {

        var str = `<hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
                    <div style="padding:6px 12px;margin:0px;background-color: #EFEFEF;">出演キャラ</div>`
        for (var i = 0; i < data.length; i++) {
            if (data[i].userid) {
                str += `<a href="/chara/${data[i].id}" class=listparent>
                        <div class=list>
                            <div><img class=thumbnail_img src="${data[i].s3url}"></div>
                            <div style="margin:6px;">
                                <div>${data[i].name}</div>
                                <div style="color:#969696">マイキャラ</div>
                            </div>
                        </div>
                        <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                        </a>`;
            } else {
                str += `<a href="/chara/${data[i].id}" class=listparent>
                    <div class=list>
                        <div><img class=thumbnail_img src="/storage/icon/nolicense.svg"></div>
                        <div style="margin:6px;">
                            <div>${data[i].name}</div>
                            <div style="color:#969696"></div>
                        </div>
                    </div>
                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                    </a>`;
            }
        }
        return str;
    }
    // 表示する関数(作品内キャラリスト)
    function indexData_work(id) {
        //
        const url = `/api/work/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom_work(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }
    var id = $(".main").attr('data-id')
    indexData_work(id)
});