$(function () {
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
                        <button type="button" id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal_body" id='mychara'>
                        <form id=api_form>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.name}</div>
                                    <input type="hidden" name="charaid" value="${data.id}">
                                    <input type="hidden" name="charaname" value="${data.name}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.title}</div>
                                    <input type="hidden" name="title" value="${data.title}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">ラベル</div>

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
                            <div class="thumnail listparent" style="border-bottom:#efefef solid 1px;background-color:#efefef">
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
                        <button type="button" id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                    <div class=slider>
                        <div class=formbox>
                        <form id=api_form>
                            <div id=mycharaselect class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:50%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:16px;margin:3px 6px 3px 6px;">マイキャラ選択</div>
                                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 6px"></div>
                                    <input type="hidden" name="charaid" value="">
                                    <input type="hidden" name="charaname" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;"></div>
                                    <input type="hidden" name="title" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">ラベル</div>

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
                            <div class="thumnail listparent" style="border-bottom:#efefef solid 1px;background-color:#efefef">
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
    function make_dom_madal_postlike(data) {
        if (data) {
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">好きなセリフ</h6>
                        <button type="button" id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                        <form id=api_form>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.name}</div>
                                    <input type="hidden" name="charaid" value="${data.id}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.title}</div>
                                    <input type="hidden" name="title" value="${data.title}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">言葉・シーン</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input id="summary" name=summary type="text" value="" placeholder="セリフを入力">
                                    </div>
                                </div>
                            </div>
                            <div class="listparent" style="border:none;margin-bottom:2px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">好きな理由</div>
                                </div>
                            </div>
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;">
                                    <textarea id="comment" style="color:#969696;margin:6px;height:120px;width:100%" name="comment" placeholder="理由を記入（必須）"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=post_scene>
                            投稿
                        </button>
                    </div>
                    </div><div class="disclaimer center_obj">※画像を投稿すると自動的にマイキャラに登録されます</div>`
        } else {//ユーザートップでのモーダルの動き
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">好きなセリフ</h6>
                        <button type="button" id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                    <div class=slider>
                        <div class=formbox>
                        <form id=api_form>
                            <div id=mycharaselect class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:50%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:16px;margin:3px 6px 0px 6px;">マイキャラ選択</div>
                                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 6px"></div>
                                    <input type="hidden" name="charaid" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;"></div>
                                    <input type="hidden" name="title" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">言葉・シーン</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input id=label name=label type="text" value="" placeholder="セリフを入力">
                                    </div>
                                </div>
                            </div>
                            <div class="listparent" style="border:none;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">好きな理由</div>
                                </div>
                            </div>
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;">
                                    <textarea id="comment" style="color:#969696;margin:6px;height:120px;width:100%" name="comment" placeholder="理由を記入（必須）"></textarea>
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
                        <button class="button" data-dismiss="modal" aria-label="Close" id=post_scene>
                            投稿
                        </button>
                    
                    </div>`
        }
        return str;
    }
    function make_dom_madal_postpic(data) {
        if (data) {
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">好きな画像保存・画像投稿</h6>
                        <button type="button" id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                        <form id=api_form>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">マイピクチャ</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input type="file" name="file1" id="file" class="form-control"> 
                                    </div>
                                </div>
                            </div>
                            <div class="thumnail listparent" style="border-bottom:#efefef solid 1px;">
                            <img class=post_img id=post_img_modal>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.name}</div>
                                    <input type="hidden" name="charaid" value="${data.id}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">${data.title}</div>
                                    <input type="hidden" name="title" value="${data.title}">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">アップロード先</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <select name=posttype>
                                            <option value="0">--</option>
                                            <option value="1">マイアルバム</option>
                                            <option value="2">ギルド</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="disclaimer">※ギルドへの投稿の際は著作権・肖像権に十分配慮してください</div>
                            <div class="disclaimer">※マイアルバムにアップロードした場合もご自身のキャラギルドで画像が表示されますが他のユーザーには公開されません</div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;margin:12px 0px 0px 0px">
                                <div class="list" style="">
                                    <div style="color:#969696">コメント</div>
                                </div>
                            </div>
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;">
                                    <input id="comment" type="text" style="color:#969696;margin:6px;height:120px;width:100%" name="comment" value="コメントを記入してみよう">
                                </div>
                            </div>
                            <input type="hidden" name="post_eria_flg" value="1">
                        </form>
                    </div>
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=upload_pic>
                            投稿
                        </button>
                    </div>
                    </div>
                    <div class="disclaimer center_obj">※画像を投稿すると自動的にマイキャラに登録されます</div>`
        } else {
            var str = `<div class="modal-header">
                        <h6 class="modal-title" id="label1">好きな画像保存・画像投稿</h6>
                        <button type="button" id="modal__close" class="js-modal__btn--close--fix" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal_body" id='mychara'>
                    <div class=slider>
                        <div class=formbox>
                        <form id=api_form>
                            
                            <div id=mycharaselect class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:50%;color:#969696;margin:6px;">キャラ名</div>
                                    <div style="font-size:16px;margin:3px 6px 0px 6px;">マイキャラ選択</div>
                                    <div class=arrow><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:0px 6px"></div>
                                    <input type="hidden" name="charaid" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">作品名</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;"></div>
                                    <input type="hidden" name="title" value="">
                                </div>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">マイピクチャ</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <input type="file" name="file1" id="file" class="form-control"> 
                                    </div>
                                </div>
                            </div>
                            <div class="thumnail listparent" style="border-bottom:#efefef solid 1px;">
                            <img class=post_img id=post_img_modal>
                            </div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;">
                                <div class="list">
                                    <div style="width:60%;color:#969696;margin:6px;">アップロード先</div>
                                    <div style="font-size:18px;margin:3px 6px 0px 6px;">
                                        <select name=posttype>
                                            <option value="0">--</option>
                                            <option value="1">マイアルバム</option>
                                            <option value="2">ギルド</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="disclaimer">※ギルドへの投稿の際は著作権・肖像権に十分配慮してください</div>
                            <div class="disclaimer">※マイアルバムにアップロードした場合もご自身のキャラギルドで画像が表示されますが他のユーザーには公開されません</div>
                            <div class="listparent" style="border-bottom:#efefef solid 1px;margin:12px 0px 0px 0px">
                                <div class="list" style="">
                                    <div style="color:#969696">コメント</div>
                                </div>
                            </div>
                            <div class="listparent" style="border:none">
                                <div class="list" style="width:100%;">
                                    <input id="comment" type="text" style="color:#969696;margin:6px;height:120px;width:100%" name="comment" value="コメントを記入してみよう">
                                </div>
                            </div>
                            <input type="hidden" name="post_eria_flg" value="0">
                        </form>
                        </div>
                        <div id="mycharalist">
                        </div>
                    </div>
                    </div>
                    <div class="modal-footer">
                    <div class="listparent center_obj" style="border:none;">
                        <button class="button" data-dismiss="modal" aria-label="Close" id=upload_pic>
                            投稿
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
                                <div style="color:#969696">あああ</div>
                            </div>
                            <div class="label_bx" style="margin:12px">
                                <div class=label_btn>${data[i].labelname}</div>
                            </div>
                        </div>
                    </div>`;
        }
        return str;

    }

    // 表示する関数(マイキャラ)
    function indexData_mychara() {
        //
        const url = `/api/mychara`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                console.log(data);
                $("#mycharalist").html(make_dom_mychara(data))
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
        const url = `/api/postready/${charaid}`;
        $.ajax(url)
            .done(function (data, textStatus, jqXHR) {
                if (id == 0) {
                    modalBg.fadeIn();
                    modalBg.next(modalMain).removeClass("_slideDown");
                    modalBg.next(modalMain).addClass("_slideUp");
                    modalMain.html(make_dom_modal_addmychara(data))
                } else if (id == 1) {
                    modalMain.html(make_dom_madal_postlike(data));
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
                if (id == 0) {
                    modalBg.fadeIn();
                    modalBg.next(modalMain).removeClass("_slideDown");
                    modalBg.next(modalMain).addClass("_slideUp");
                    modalMain.html(make_dom_modal_addmychara())
                } else if (id == 1) {
                    modalMain.html(make_dom_madal_postlike());
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
            .always(function () {
                console.log('get:complete');
            });
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
    function storeData() {
        // 送信先の指定
        var url = '/api/uploadsstore';
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
                $(".sum").text(data_return.sum)
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
    // 登録する関数(好きなセリフ)
    function storeData_serif() {
        // 送信先の指定
        var url = '/api/upload_serif';
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
                // $('#echo').html(make_dom_storage(data_return));
                // //画像・マイアルバムへ移動
                // removeseleted();
                // $(".middle_bar").animate({ scrollLeft: 488 });
                // $(".middle_bar_3").addClass("middle_bar_add");
            })
            .fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
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

    $("#footer").on("click", function () {
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
            storeData();
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
    $(document).on('click', '#post_scene', function () {
        if (
            $('#summary').val() == '' || $('#comment').val() == ''
        ) {
            alert('言葉・シーンと好きな理由は入力必須です！')
        } else {
            storeData_serif();
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
        $(".modal_body").children(".slider").animate({ left: -375 })
        indexData_mychara()
    })
    $(document).on("click", "#mycharalist>.listparent", function () {
        $(".modal_body").children(".slider").animate({ left: 0 })
        var src = $(this).find(".thumbnail_img").attr('src')
        var name = $(this).find(".name_bx>div:first").text()
        var title = $(this).find(".name_bx>div:nth-child(2)").text()
        var label = $(this).find(".label_bx>div").text()
        console.log(src)
        $("#api_form>div:nth-child(1)").children('div').children('div:nth-child(2)').text(name)
        $("#api_form>div:nth-child(2)").children('div').children('div:nth-child(2)').text(title)

    })
});
