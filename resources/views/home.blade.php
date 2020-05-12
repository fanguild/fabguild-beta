@extends('layouts.header')
@section('content')

<script src="{{ asset('js/home_api_ajax.js') }}" defer></script>

<div class="main" data-id="">

    <div class=slider>
        <div class="content">
            <div id="search" class="listparent">
                <div class="list">
                    <div><img class="thumbnail_img" src="/storage/icon/mychara.svg"></div>
                    <div class="search_bx">
                        <div>好きなキャラクターを探す</div>
                        <div class="sub" style="color:#969696">マイキャラを登録しよう</div>
                    </div>
                </div>
                <div class="arrow"><img src="/storage/icon/arrow_follow.svg" style="height:36px;margin:15px 0px"></div>
            </div>
            <div id=echo>
            </div>
        </div>
        <div class="content1">
            <div style="background-color: #FFFFFF;display:flex;border-bottom: 1px solid;border-color: #c9c9c9;">
                <div id=back_><img src="/storage/icon/arrow_back.svg"></div>
                <div class=searchbox>
                    <input type="text" value="" placeholder="キャラ名で検索" class=search style="margin:0 12px;">
                    <img id=search src="/storage/icon/虫眼鏡.svg" style="height:36px;margin:0 6px 0 0" class="search1">
                </div>
            </div>
            
            <div class="searchGenretab">
                <ul class="searchGenretabin">
                <li class=current><a href="javascript:void(0);">アニメ</a></li>
                <li><a href="javascript:void(0);"></a></li>
                <li><a href="javascript:void(0);"></a></li>
                </ul>
            </div>
            <div class="searchtab">
                <ul class="searchtabin">
                <li class="current" style="width: 40%;" data-id=2019><a href="javascript:void(0);">2019</a></li>
                <li style="width: 40%;" data-id=2020><a href="javascript:void(0);">2020</a></li>
                </ul>
            </div>
            <div class="searchSubtab">
                <ul class="searchSubtabin">
                <li class="current" data-id=0><a href="javascript:void(0);">春</a></li>
                <li data-id=1><a href="javascript:void(0);">夏</a></li>
                <li data-id=2><a href="javascript:void(0);">秋</a></li>
                <li data-id=3><a href="javascript:void(0);">冬</a></li>
                </ul>
            </div>
            <hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
            <div id=title style="height:709px">
            </div>
            
        </div>
    </div>  
</div>

</body>

@endsection
