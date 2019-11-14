@extends('layouts.header')

@section('content')
<div class="main">
    <div class="content">
        <div class=chara_top>
            <div class=chara>
                <img id=chara_img src="img/Drstone.png"></img>

                <div class=" user_name">Dr.デモ太郎</div>
            </div>
            <div class=guild_status>
                <div style="text-align:start;margin:0 24px;">職業
                </div>
                <img id=job_icon src="evangerist.png" style="height:62px;width:72px;margin:0 48px;"></img>
                <div style="color:#FF8500">エバンジェリスト</div>
                <div class=chara_population>
                    <div class=pop style="color:#969696;"><br></div>

                </div>
            </div>
        </div>
        <div class="join_btn">
            <div>プロフィール変更</div>
        </div>
        <div class="middle_bar">

            <div class=middle_bar_outline>
                <div class=middle_bar_1 style="padding:6px 6px 3px 6px ;">マイキャラ</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_2 style="padding:6px 6px 3px 6px ;">投稿一覧</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_3 style="padding:6px 6px 3px 6px ;">職業</div>
            </div>
            <div class=middle_bar_outline>
                <div class=middle_bar_4 style="padding:6px 6px 3px 6px ;">フレンド</div>
            </div>
        </div>
        <hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
        <a href="{{url('/mychara/search')}}" class=listparent style="border:none;">
            <div class=list>
                <div><img class=thumbnail_img src="mychara.svg"></div>
                <div style="margin:6px 3px">
                    <div>キャラ追加</div>
                    <div style="color:#969696">マイキャラを追加してみよう</div>
                </div>

            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </a>
        <hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
        <div style="padding:4px;margin:0px;background-color: #EFEFEF;">登録済みマイキャラ</div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/ワンピースナミ画像.jpeg"></div>
                <div style="margin:6px;">
                    <div>ナミ</div>
                    <div style="color:#969696">ONE PIECE</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>嫁</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/shinobu.png"></div>
                <div style="margin:6px;">
                    <div>胡蝶しのぶ</div>
                    <div style="color:#969696">鬼滅の刃</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>推し</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/mituri.jpg"></div>
                <div style="margin:6px;">
                    <div>甘露寺みつり</div>
                    <div style="color:#969696">鬼滅の刃</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>恋人</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/evafirst.jpg"></div>
                <div style="margin:6px 3px">
                    <div>エヴァ初号機</div>
                    <div style="color:#969696">新世紀エヴァンゲリオン</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>ロボ</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/syaa.png""></div>
                    <div style=" margin:6px 3px">
                    <div>シャア・アズナブル</div>
                    <div style="color:#969696">機動戦士ガンダム</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>ヒーロー</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/ouki.jpeg"></div>
                <div style="margin:6px 3px">
                    <div>王騎</div>
                    <div style="color:#969696">キングダム</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>父</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/god.jpg""></div>
                    <div style=" margin:6px 3px">
                    <div>ヘスティア</div>
                    <div style="color:#969696">ダンジョンに愛を求め…</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>神様</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/rem.jpg"></div>
                <div style="margin:6px 3px">
                    <div>レム</div>
                    <div style="color:#969696">Re:ゼロから始める異世…</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>妹</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/hagaren.jpg""></div>
                    <div style=" margin:6px 3px">
                    <div>アルフォンス</div>
                    <div style="color:#969696">鋼の錬金術師</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>弟</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div><img class=thumbnail_img src="img/marutina.jpg"></div>
                <div style="margin:6px 3px">
                    <div>マルティナ</div>
                    <div style="color:#969696">ドラゴンクエスト11</div>
                </div>
                <div style="margin:12px">
                    <div class=label_btn>戦姫</div>
                </div>
            </div>
            <div class=arrow><img src="arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
        </div>
    </div>
</div>


</body>

@endsection