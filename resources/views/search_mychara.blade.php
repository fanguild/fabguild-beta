@extends('layouts.header')
@section('content')
<div class="main">
    <div class="content">
        <div style="width:100%;background-color: #FFFFFF;display:flex;">
            <img src="arrow_back.svg" style="height:48px;margin:0 12px">
            <div class=searchbox>
                <input type="text" value="" placeholder="名前や作品名で検索" class=search style="margin:0 12px;">
                <a href="search_ace.html"><img id=search src="虫眼鏡.svg" style="height:36px;margin:0 6px 0 0" class=search1"></a>
            </div>

        </div>
        <hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
        <!-- <div class=pace></div> -->
        <div style="padding:4px;margin:0px;font-size:18px;background-color: #EFEFEF;padding:12px 24px">今期アニメキャラ
        </div>
        <div class="listparent" id=1>
            <div class="list">
                <div><img class="thumbnail_img" src=""></div>
                <a href="{{url('chara_top')}}" style="text-decoration: none;">
                    <div style="margin:6px 3px;">
                        <div id="name" style="color:#333333" value="a">車谷空</div>
                        <div style="color:#969696">あひるの空</div>
                    </div>
                </a>
            </div>
            <div id=select class="arrow" style="width:48px;text-align:center;">選択</div>
        </div>




    </div>
</div>

@endsection