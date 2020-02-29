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
    // データからhtmlを出力する関数(画像倉庫)
    function make_dom_storage(data) {

        var str = `<div class="item_container">`
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
    function make_dom_modal_addmychara(data) {
        if (data) {//data=キャラデータがあれば
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">マイキャラ追加</h6>
                        <button id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal_body" id='mychara'>
                        <form id=api_form>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.name}</div>
                                    <input type="hidden" name="charaid" value="${data.id}">
                                    <input type="hidden" name="charaname" value="${data.name}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.title}</div>
                                    <input type="hidden" name="title" value="${data.title}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">ラベル</div>

                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input id=label name=label type="text" value="" placeholder="5文字以内で入力">
                                    </div>
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">マイサムネ</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input type="file" name="file1" id="file" class="form-control"> 
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="thumbnail listparent" style="border-bottom:#efefef solid 1px;background-color:#efefef">
                            <img class=chara_img id=chara_img_modal style="background-color:#FFFFFF">
                            </div>
                        </form>
                        <div class="disclaimer">※マイサムネに使用した画像は非公開となりますので著作権侵害等の違法なアップロードには当たりません</div>
                        <div class="disclaimer">※fanguildが用意する著作権フリーの画像を利用の場合はマイサムネは自動で公開となります</div>
                    </div>          
                    <div class="modal-footer">
                        <div class="listparent center_obj" style="border:none;">
                            <button class="button" data-dismiss="modal" aria-label="Close" id=add_mychara>
                                マイキャラに追加
                            </button>
                        </div>
                    </div>`
        } else {//主にユーザートップページではこちら
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">マイキャラ編集</h6>
                        <button id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                    <div class=slider>
                        <div class=formbox>
                        <form id=api_form>
                            <div id=mycharaselect class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:16px;margin:6px 6px 0px 6px;width:50%">マイキャラ選択</div>
                                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 6px"></div>
                                    <input type="hidden" name="charaid" value="">
                                    <input type="hidden" name="charaname" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;"></div>
                                    <input type="hidden" name="title" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">ラベル</div>

                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input id=label name=label type="text" value="" placeholder="5文字以内で入力">
                                    </div>
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">マイサムネ</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input type="file" name="file1" id="file" class="form-control"> 
                                    </div>
                                </div>
                            </div>
                            <div class="thumbnail listparent" style="border-bottom:#efefef solid 1px;background-color:#efefef">
                            <img class=chara_img id=chara_img_modal style="background-color:#FFFFFF">
                            </div>
                        </form>
                        <div class="disclaimer">※マイサムネに使用した画像は非公開となりますので著作権侵害等の違法なアップロードには当たりません</div>
                        <div class="disclaimer">※fanguildが用意する著作権フリーの画像を利用の場合はマイサムネは自動で公開となります</div>
                        </div>
                        <div id="mycharalist">
                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <div class="listparent center_obj" style="border:none;">
                            <button class="button" data-dismiss="modal" aria-label="Close" id=add_mychara>
                                マイキャラを編集
                            </button>
                        </div>
                    </div>`
        }
        return str;
    }
    function getLen(str) {
        var result = 0;
        for (var i = 0; i < str.length; i++) {
            var chr = str.charCodeAt(i);
            if ((chr >= 0x00 && chr < 0x81) ||
                (chr === 0xf8f0) ||
                (chr >= 0xff61 && chr < 0xffa0) ||
                (chr >= 0xf8f1 && chr < 0xf8f4)) {
                //半角文字の場合は1を加算
                result += 1;
            } else {
                //それ以外の文字の場合は2を加算
                result += 2;
            }
        }
        //結果を返す
        return result;
    };

    $(document).on('keyup', '#tweet_mychara', function () {
        var str = $(this).val()
        var count = Math.floor(getLen(str) / 2)
        $("#text_count").text(count + '/140文字')
        if (140 - count < 0) {
            $(".text_alert").show();
        } else {
            $(".text_alert").hide();
        }
    });
    function make_dom_madal_share(data) {
        var mychara = '#自分の推しキャラを晒す\n';
        for (var i = 0; i < data[0].length; i++) {
            mychara += `${data[0][i].charaname}\n`;
        }
        mychara += `http://fanguild-6281.lolipop.io/user/${data[1]}`
        var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">マイキャラ一覧をシェア</h6>
                        <button id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara' style="height:400px">
                        <form id=api_form>
                           
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;">
                                    <textarea id="tweet_mychara" style="color:#969696;margin:6px;height:240px;width:100%" name="comment" placeholder="">${mychara}</textarea>
                                </div>
                            </div>
                            
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;justify-content: flex-end;">
                                <div class=text_alert style="display:none;color:red;width:75%;">文字数が140文字を超えています</div>
                                <div id=text_count></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=post_tweet>
                            シェア
                        </button>
                    </div>
                    `

        return str;
    }
    function make_dom_madal_postlike(data) {
        if (data) {
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">マイキャラ一覧をシェア</h6>
                        <button id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara' style="height:400px">
                        <form id=api_form>
                        
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;">
                                    <textarea id="comment" style="color:#969696;margin:6px;height:240px;width:100%" name="comment" placeholder=""></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=post_tweet>
                            シェア
                        </button>
                    </div>
                    </div><div class="disclaimer center_obj">※画像を投稿すると自動的にマイキャラに登録されます</div>`
        } else {//ユーザートップでのモーダルの動き
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">マイキャラ一覧をシェア</h6>
                        <button id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara' style="height:400px">
                    <div class=slider>
                        <div class=formbox>
                        <form id=api_form>
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;">
                                    <textarea id="comment" style="color:#969696;margin:6px;height:240px;width:100%" name="comment" placeholder=""></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="mycharalist">
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=post_tweet>
                            シェア
                        </button>
                    
                    </div>`
        }
        return str;
    }
    function make_dom_madal_postpic(data) {
        if (data) {
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">好きな画像保存</h6>
                        <button id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                        <form id=api_form>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:35%;color:#969696;margin:6px;">マイピクチャ</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input type="file" name="file1" id="file" class="form-control"> 
                                    </div>
                                </div>
                            </div>
                            <div class="thumbnail" style="border-bottom:#efefef solid 1px;">
                            <img class=post_img id=post_img_modal>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.name}</div>
                                    <input type="hidden" name="charaid" value="${data.id}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.title}</div>
                                    <input type="hidden" name="title" value="${data.title}">
                                </div>
                            </div>
                            <input type="hidden" name="posttype" value="1">
                            <div class="disclaimer">※マイアルバムにアップロードした画像は他のユーザーには公開されません</div>
                            <input id="comment" type="hidden" style="color:#969696;margin:6px;height:120px;width:100%" name="comment" value="コメントを記入してみよう">
                            <input type="hidden" name="post_eria_flg" value="1">
                        </form>
                    </div>
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=upload_pic>
                            保存
                        </button>
                    </div>
                    </div>
                    <div class="disclaimer center_obj">※画像を投稿すると自動的にマイキャラに登録されます</div>`
        } else {
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">好きな画像保存</h6>
                        <button id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                    <div class=slider>
                        <div class=formbox>
                        <form id=api_form>
                            
                            <div id=mycharaselect class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:16px;margin:6px 6px 0px 6px;width:50%">マイキャラ選択</div>
                                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 6px"></div>
                                    <input type="hidden" name="charaid" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:30%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;"></div>
                                    <input type="hidden" name="title" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:35%;color:#969696;margin:6px;">マイピクチャ</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input type="file" name="file1" id="file" class="form-control"> 
                                    </div>
                                </div>
                            </div>
                            <div class="thumbnail" style="border-bottom:#efefef solid 1px;">
                            <img class=post_img id=post_img_modal>
                            </div>
                            <input type="hidden" name="posttype" value="1">
                            <div class="disclaimer">※マイアルバムにアップロードした画像は他のユーザーには公開されません</div>
                            <input id="comment" type="hidden" style="color:#969696;margin:6px;height:120px;width:100%" name="comment" value="コメントを記入してみよう">
                            <input type="hidden" name="post_eria_flg" value="1">
                        </form>
                        </div>
                        <div id="mycharalist">
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=upload_pic>
                            保存
                        </button
                    </div>
                    `
        }
        return str;
    }

    function make_dom_mychara(data) {

        var str = ``;
        for (var i = 0; i < data.length; i++) {
            str += `<div class=listparent data-id=${data[i].charaid}>
                        <div class=list>
                            
                            <div><img class=thumbnail_img src="${data[i].s3url}"></div>
                            <div class="name_bx" style="margin:6px;">
                                <div>${data[i].charaname}</div>
                                <div style="color:#969696">${data[i].title}</div>
                            </div>
                            <div class="label_bx" style="margin:12px">
                                <label class=label_btn><div>${data[i].labelname}</div></label>
                            </div>
                        </div>
                    </div>`;
        }
        return str;

    }
    // データからhtmlを出力する関数(fanlist)
    function make_dom_fanlist(data) {

        var str = '';
        str += `<hr style="padding:4px;margin:0px;background-color: #EFEFEF;">`

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
    // 表示する関数(fanlist)
    function indexData_fanlist(id) {
        //
        const url = `/api/fanlist/${id}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $('#echo').html(make_dom_fanlist(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }
    // 表示する関数(マイキャラ)
    function indexData_mychara() {
        //
        const url = `/api/mychara`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                if (data[0] != null) {
                    $("#mycharalist").html(make_dom_mychara(data))
                } else {
                    $("#mycharalist").html(make_dom_nodata())
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
            })
            .always(function () {
                console.log('get:complete');
            });
    }

    // 表示する関数(modal)
    function indexData_modal(id, charaid) {
        //
        if (charaid) {
            const url = `/api/footer/${charaid}`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    if (id == 0) {
                        modalBg.fadeIn();
                        modalBg.next(modalMain).removeClass("_slideDown");
                        modalBg.next(modalMain).addClass("_slideUp");
                        modalMain.html(make_dom_modal_addmychara(data))
                    } else if (id == 1) {
                        modalMain.html(make_dom_madal_share(data));
                        modalBg.fadeIn();
                        modalBg.next(modalMain).removeClass("_slideDown");
                        modalBg.next(modalMain).addClass("_slideUp");
                    } else {
                        modalMain.html(make_dom_madal_postpic(data));
                        modalBg.fadeIn();
                        modalBg.next(modalMain).removeClass("_slideDown");
                        modalBg.next(modalMain).addClass("_slideUp");
                    }
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        } else {
            const url = `/api/footer`;
            $.ajax(url)
                .done(function (data, textStatus, jqXHR) {
                    if (id == 0) {
                        modalBg.fadeIn();
                        modalBg.next(modalMain).removeClass("_slideDown");
                        modalBg.next(modalMain).addClass("_slideUp");
                        modalMain.html(make_dom_modal_addmychara())
                    } else if (id == 1) {
                        modalMain.html(make_dom_madal_share(data));
                        var str = $('#tweet_mychara').val()
                        var count = Math.floor(getLen(str) / 2)
                        $("#text_count").text(count + '/140文字')
                        if (140 - count < 0) {
                            $(".alert").show();
                        }
                        modalBg.fadeIn();
                        modalBg.next(modalMain).removeClass("_slideDown");
                        modalBg.next(modalMain).addClass("_slideUp");
                    } else {
                        modalMain.html(make_dom_madal_postpic());
                        modalBg.fadeIn();
                        modalBg.next(modalMain).removeClass("_slideDown");
                        modalBg.next(modalMain).addClass("_slideUp");
                    }
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.status + textStatus + errorThrown);
                })
                .always(function () {
                    console.log('get:complete');
                });
        }
    }

    //モーダルの部分
    var modalBtn = $('.js-modal__btn');
    var modalBtnClose = $('.js-modal__btn--close');
    var modalBtnCloseFix = $('.js-modal__btn--close--fix');
    var modalBg = $('.js-modal__bg');
    var modalMain = $('.js-modal__main');
    modalMain.hide();
    modalBtn.on('click', function (e) {
        modalMain.show()
        var id = modalBtn.index(this)
        console.log(id)
        var charaid = $(".main").attr('data-id');
        indexData_modal(id, charaid)

    });

    $(document).on("click", ".modal-header", function () {
        modalBg.fadeOut();
        modalMain.removeClass("_slideUp");
        modalMain.addClass("_slideDown");
    })

    // modalBtnCloseFix.on('click', function (e) {
    //     modalBg.fadeOut();
    //     modalMain.removeClass("_slideUp");
    //     modalMain.addClass("_slideDown");
    // });
    modalMain.on('click', function (e) {

        // e.stopPropagation();
    });
    modalBg.on('click', function () {
        $(this).fadeOut();
        $(this).next(modalMain).removeClass("_slideUp");
        $(this).next(modalMain).addClass("_slideDown");
    });

    // 登録する関数
    function storeData(id, callback) {
        // 送信先の指定
        var url = '/api/mychara/register';
        var form = $('#api_form').get()[0];
        // FormData オブジェクトを作成
        var formData = new FormData(form);
        console.log(form)

        // データ送信
        $.ajax({
            headers: {
                //'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            dataType: 'json',
            url: url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data_return) {
                console.log(data_return);
                console.log('done');
                $('#chara_img').attr('src', data_return.mycharas_return.s3url);
                $("#sum").text(data_return.sum)
                $("#mlc").text(data_return.mlc)
                removeseleted();
                $(".middle_bar_6").addClass("middle_bar_add");
                callback(id);
            })
            .fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }
    // 登録する関数(画像)
    function storeData_pic() {
        // 送信先の指定
        var url = '/api/upload_pic';
        var form = $('#api_form').get()[0];
        // FormData オブジェクトを作成
        var formData = new FormData(form);
        console.log(form)

        // データ送信
        $.ajax({
            headers: {
                //'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            dataType: 'json',
            url: url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data_return) {
                console.log(data_return);
                $('#echo').html(make_dom_storage(data_return));
                //画像・マイアルバムへ移動
                removeseleted();
                $(".middle_bar").animate({ scrollLeft: 488 });
                $(".middle_bar_3").addClass("middle_bar_add");
            })
            .fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }
    // 登録する関数(tweet)
    function storeData_tweet() {
        // 送信先の指定
        var url = '/api/tweet';
        var form = $('#api_form').get()[0];
        // FormData オブジェクトを作成
        var formData = new FormData(form);
        console.log(form)

        // データ送信
        $.ajax({
            headers: {
                //'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            },
            dataType: 'json',
            url: url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data_return) {
                console.log(data_return);
                // $('#echo').html(make_dom_serif(data_return));
                // //画像・マイアルバムへ移動
                removeseleted();
                // $(".middle_bar").animate({ scrollLeft: 395 });
                // $(".middle_bar_2").addClass("middle_bar_add");
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status + textStatus + errorThrown);
                console.log('fail');
            })
            .always(function () {
                console.log('post:complete');
            });
    }

    var removeseleted = function () {
        $(".middle_bar_1").removeClass("middle_bar_add");
        $(".middle_bar_2").removeClass("middle_bar_add");
        $(".middle_bar_3").removeClass("middle_bar_add");
        $(".middle_bar_4").removeClass("middle_bar_add");
        $(".middle_bar_5").removeClass("middle_bar_add");
        $(".middle_bar_6").removeClass("middle_bar_add");
        $(".middle_bar_7").removeClass("middle_bar_add");
    }

    $(".middle_bar_1").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        var posx = pos - 456
        if (posx > 0) {
            $(".middle_bar").scrollLeft(posx)
        }
        $(".middle_bar").animate({ scrollLeft: 300 });
        $(".middle_bar_1").addClass("middle_bar_add");
    })
    $(".middle_bar_2").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        // var posx = pos - 567
        // if (posx > 0 & posx < 10) {
        //     $(".middle_bar").scrollLeft(posx)
        // }
        $(".middle_bar").animate({ scrollLeft: 395 });
        $(".middle_bar_2").addClass("middle_bar_add");
    })
    $(".middle_bar_3").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()

        // console.log(pos)
        $(".middle_bar").animate({ scrollLeft: 488 });
        $(".middle_bar_3").addClass("middle_bar_add");
    })
    $(".middle_bar_4").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        var posx = pos - 456
        var posa = pos + 456
        if (posx < 0) {
            $(".middle_bar").scrollLeft(posa)
        }
        // console.log(pos)
        $(".middle_bar").animate({ scrollLeft: 573 });
        $(".middle_bar_4").addClass("middle_bar_add");
    })
    $(".middle_bar_5").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()

        if (pos > 572) {
            $(".middle_bar").scrollLeft(120)
        } else {
            $(".middle_bar").scrollLeft(283)
        }
        // console.log(pos)
        $(".middle_bar").animate({ scrollLeft: 210 });
        $(".middle_bar_5").addClass("middle_bar_add");
    })
    $(".middle_bar_6").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        var posx = pos + 567
        var scroll = 500 - pos
        if (scroll > 0) {
            $(".middle_bar").scrollLeft(posx)
            $(".middle_bar").animate({ scrollLeft: 830 });
        }
        $(".middle_bar").animate({ scrollLeft: 830 });
        $(".middle_bar_6").addClass("middle_bar_add");
    })
    $(".middle_bar_7").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        var posx = pos - 567
        var scroll = pos - 720
        var scroll_back = 400 - pos
        if (scroll > 0) {
            $(".middle_bar").scrollLeft(posx)
            $(".middle_bar").animate({ scrollLeft: 350 });
        } else if (scroll_back < 0) {
            $(".middle_bar").animate({ scrollLeft: 350 });
        }
        $(".middle_bar_7").addClass("middle_bar_add");
    })

    $(document).on("click", ".closed", function () {
        $("#footer_menu_1").removeClass("footer_third");
        $("#footer_menu_3").removeClass("footer_first");
        $("#footer_menu_name_1").removeClass("footer_third");
        $("#footer_menu_name_3").removeClass("footer_first");
        $("#footer_menu_1").addClass("footer_first");
        $("#footer_menu_3").addClass("footer_third");
        $("#footer_menu_name_1").addClass("footer_first");
        $("#footer_menu_name_3").addClass("footer_third");
        $(".footer").css({ transform: "rotate(45deg)" })
        $("#footer_back").addClass("footer_back")
        $("#footer_menu_1").css({ transform: "scale(1)" });
        $("#footer_menu_2").css({ transform: "scale(1)" });
        $("#footer_menu_3").css({ transform: "scale(1)" });
        $("#footer_menu_name_1").css({ transform: "scale(1)" });
        $("#footer_menu_name_2").css({ transform: "scale(1)" });
        $("#footer_menu_name_3").css({ transform: "scale(1)" });
        $("#footer").removeClass("closed")
        $("#footer").addClass("open")
    })
    $("#footer_back").on("click", function () {
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
        $("#footer").removeClass("open")
        $("#footer").addClass("closed")
    })
    // $("#footer").on("click", function () {
    //     console.log("aaa")
    // })

    $(document).on("click", ".open", function () {
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
        $("#footer").removeClass("open")
        $("#footer").addClass("closed")
    })
    //画像アップロードで画面表示する関数
    $(document).on('change', '#file', function (e) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#post_img_modal").attr('src', e.target.result);
            $("#chara_img_modal").attr('src', e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    });

    // マイキャラ追加ボタンクリック時に登録
    $(document).on('click', '#add_mychara', function () {
        if (
            $('#label').val() == ''
        ) {
            alert('ラベル名は入力必須です！')
        } else {
            id = $(".main").attr('data-id')
            storeData(id, indexData_fanlist);
            modalBg.fadeOut();
            modalMain.removeClass("_slideUp");
            modalMain.addClass("_slideDown");
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
    // 好きなシーン投稿ボタンクリック時に登録
    $(document).on('click', '#post_tweet', function () {
        if (
            $('#summary').val() == '' || $('#comment').val() == ''
        ) {
            alert('言葉・シーンと好きな理由は入力必須です！')
        } else {
            storeData_tweet();
            modalBg.fadeOut();
            modalMain.removeClass("_slideUp");
            modalMain.addClass("_slideDown");
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
    $(document).on('click', '#upload_pic', function () {
        if (
            $('#file').val() == ''
        ) {
            alert('画像は入力必須です！')
        } else {
            storeData_pic();
            modalBg.fadeOut();
            modalMain.removeClass("_slideUp");
            modalMain.addClass("_slideDown");

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
    $(document).on("click", "#mycharaselect", function () {
        $(".modal_body").children(".slider").addClass("slideLeft")
        $(".modal_body").children(".slider").removeClass("slideRight")
        indexData_mychara()
    })
    $(document).on("click", "#mycharalist>.listparent", function () {
        $(".modal_body").children(".slider").removeClass("slideLeft")
        $(".modal_body").children(".slider").addClass("slideRight")
        var src = $(this).find(".thumbnail_img").attr('src')
        var name = $(this).find(".name_bx>div:first").text()
        var title = $(this).find(".name_bx>div:nth-child(2)").text()
        var label = $(this).find(".label_bx>div").text()
        var charaid = $(this).attr('data-id')
        console.log(charaid)
        $("#api_form>div:nth-child(1)").children('div').children('div:nth-child(2)').text(name)
        $("#api_form>div:nth-child(1)").children('div').children('input').val(charaid)
        $("#api_form>div:nth-child(2)").children('div').children('div:nth-child(2)').text(title)

    })
    $("#opinion").on("click", function () {
        alert("fanguildのtwitterへダイレクトメールをお願いします")
    })
});
