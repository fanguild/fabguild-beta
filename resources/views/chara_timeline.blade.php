@extends('layouts.header')

@section('content')
<div class="main">
    <div class="content">
        <div class=chara_top>
            <div class=chara>
                <img id=chara_img src="ACE.png"></img>

                <div class="chara_name">エース(ONE PIECE)</div>
            </div>
            <div class=guild_status>
                <div style="text-align:start;">ギルドランク
                </div>
                <img id=guild_icon src="盾.svg" style="height:62px"></img>
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
                <a href="chara_timeline.html" style="text-decoration: none;color:#333333">
                    <div class=middle_bar_2 style="padding:6px 0 3px 0 ;">
                        タイムライン
                    </div>
                </a>
            </div>
            <div class=middle_bar_outline>
                <a href="chara_picture.html" style="text-decoration: none;color:#333333">
                    <div class=middle_bar_3 style="padding:6px 0 3px 0 ;">画像倉庫</div>
                </a>
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
        <hr style="padding:6px;margin:0px;background-color: #EFEFEF;">
        <div style="display:flex;margin:6px 12px 0 12px">
            <div><img src="img/shinobu.png" class=thumbnail_img></div>
            <div style="margin:6px;">
                <div style="display:flex;">
                    <div>erekoba</div>
                    <div style="color:#969696;margin:0 6px;">2019年10月30日</div>
                </div>
                <div style="font-weight:400;">ギルドに参加しました。エースを兄貴に設定しました。</div>
            </div>
        </div>
        <div style="display:flex;align-items: flex-end;justify-content: flex-end;padding:0 0 6px 0;margin:0 12px;border-bottom:solid 1px;border-color: #969696;">
            <div><img src="img/comment.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/like.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/Twitter.png" style="height:24px;margin:6px 12px"></div>
            <div><img src="img/f_logo.png" style="height:24px;margin:6px 12px"></div>
        </div>
        <div style="display:flex;margin:6px 12px 0 12px">
            <div><img src="img/madoka.jpg" class=thumbnail_img></div>
            <div style="margin:6px;">
                <div style="display:flex;">
                    <div>erekashi</div>
                    <div style="color:#969696;margin:0 6px;">2019年10月30日</div>
                </div>
                <div style="font-weight:400;">エースのファンアートをアップロードしました。</div>
                <div class=card>
                    <div><img src="img/ACEfanart.jpg" style="height:240px;"></div>
                    <div style="margin:12px;color:#969696">http://fanguild.org/upload/123</div>
                </div>
            </div>
        </div>
        <div style="display:flex;align-items: flex-end;justify-content: flex-end;padding:0 0 6px 0;margin:0 12px;border-bottom:solid 1px;border-color: #969696;">
            <div><img src="img/comment.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/like.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/Twitter.png" style="height:24px;margin:6px 12px"></div>
            <div><img src="img/f_logo.png" style="height:24px;margin:6px 12px"></div>
        </div>
        <div style="display:flex;margin:6px 12px 0 12px">
            <div><img src="img/syaa.png" class=thumbnail_img></div>
            <div style="margin:6px;">
                <div style="display:flex;">
                    <div style="font-weight: 600;">赤い彗星の坊や</div>
                    <div style="color:#969696;margin:0 6px;">2019年10月30日</div>
                </div>
                <div style="font-weight:400;">エースの好きなセリフを投稿しました。http://fanguild.org/serif/12</div>
            </div>
        </div>
        <div style="display:flex;align-items: flex-end;justify-content: flex-end;padding:0 0 6px 0;margin:0 12px;border-bottom:solid 1px;border-color: #969696;">
            <div><img src="img/comment.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/like.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/Twitter.png" style="height:24px;margin:6px 12px"></div>
            <div><img src="img/f_logo.png" style="height:24px;margin:6px 12px"></div>
        </div>
        <div style="display:flex;margin:6px 12px 0 12px">
            <div><img src="img/ayanami.png" class=thumbnail_img></div>
            <div style="margin:6px;">
                <div style="display:flex;">
                    <div>shamanking</div>
                    <div style="color:#969696;margin:0 6px;">2019年10月30日</div>
                </div>
                <div style="font-weight:400;">エースのコスプレ写真をアップしました。</div>
                <div class=card>
                    <div><img src="img/ACEcosplay.jpg" style="height:240px;"></div>
                    <div style="margin:12px;color:#969696">http://fanguild.org/upload/126</div>
                </div>
            </div>
        </div>
        <div style="display:flex;align-items: flex-end;justify-content: flex-end;padding:0 0 6px 0;margin:0 12px;border-bottom:solid 1px;border-color: #969696;">
            <div><img src="img/comment.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/like.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/Twitter.png" style="height:24px;margin:6px 12px"></div>
            <div><img src="img/f_logo.png" style="height:24px;margin:6px 12px"></div>
        </div>
        <div style="display:flex;margin:6px 12px 0 12px">
            <div><img src="img/6-2.png" class=thumbnail_img></div>
            <div style="margin:6px;">
                <div style="display:flex;">
                    <div>筋肉おばけ</div>
                    <div style="color:#969696;margin:0 6px;">2019年10月30日</div>
                </div>
                <div style="font-weight:400;">エースのグッズをアップしました。</div>
                <div class=card>
                    <div><img src="img/ACEgoods.jpeg" style="height:240px;"></div>
                    <div style="margin:12px;color:#969696">http://fanguild.org/upload/126</div>
                </div>
            </div>
        </div>
        <div style="display:flex;align-items: flex-end;justify-content: flex-end;padding:0 0 6px 0;margin:0 12px;border-bottom:solid 1px;border-color: #969696;">
            <div><img src="img/comment.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/like.svg" style="height:20px;margin:6px 12px"></div>
            <div><img src="img/Twitter.png" style="height:24px;margin:6px 12px"></div>
            <div><img src="img/f_logo.png" style="height:24px;margin:6px 12px"></div>
        </div>
    </div>
</div>


</body>
<script>
    $(".middle_bar").scrollLeft(410);
    $(".middle_bar_2").addClass("middle_bar_add");
    setTimeout(function() {
        $(".middle_bar").animate({
            scrollLeft: 500
        });

    }, 200);
</script>

</html>
@endsection