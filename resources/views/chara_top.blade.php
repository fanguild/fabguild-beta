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
        <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">ギルドLv</div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">ギルドLv</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">16</div>
            </div>
        </div>
        <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">総ファン数</div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">総ファン数</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">3,767</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">ジョブ別ファン数
        </div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">絵師</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">クラフト職人</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">小説家</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">シャーマン</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">エヴァンジェリスト</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">クエスト情報</div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">開放済みクエスト</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">32</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">達成済みクエスト</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">16</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">
            投稿</div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">画像アップロード</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">好きなセリフ</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent>
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">外部SNSシェア</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">イベント・宣伝</div>
                <div style="font-size:18px;font-weight: 700;margin:3px 6px 0px 6px;">100</div>
                <div style="color:#969696;margin:6px;">人</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="label1">参加登録完了しました！</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id='mychara'>
                <img src="img/Thankyou.png" style="width:330px">


            </div>

        </div>

    </div>
</div>



<script>
    $(".middle_bar").scrollLeft(410);
    $(".middle_bar_1").addClass("middle_bar_add");
</script>

</html>

@endsection