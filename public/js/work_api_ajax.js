$(function () {
    function make_dom_work(data) {

        var str = `<hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
                    <div style="padding:6px 12px;margin:0px;background-color: #EFEFEF;">出演キャラ</div>`
        var mycharas = data[0]
        var charas = data[1]
        var s3url = "/storage/icon/nolicense.svg"
        var mychara = "";
        for (var i = 0; i < charas.length; i++) {
            for (var t = 0; t < mycharas.length; t++) {
                if (mycharas[t].charaid == charas[i].id) {
                    s3url = mycharas[t].s3url
                    mychara = "<div>マイキャラ</div>"
                }
            }
            str += `<a href="/chara/${charas[i].id}" class=listparent>
                    <div class=list><div><img class=thumbnail_img src="${s3url}"></div><div style="margin:6px;">
                            <div>${charas[i].name}</div>
                            ${mychara}
                        </div>
                    </div>
                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
                    </a>`;
            s3url = "/storage/icon/nolicense.svg"
            mychara = "";
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