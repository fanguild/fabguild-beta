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
                <li><a href="javascript:void(0);">漫画</a></li>
                <li><a href="javascript:void(0);">ゲーム</a></li>
                </ul>
            </div>
            <div class="searchtab">
                <ul class="searchtabin">
                <li class="current" data-id=1><a href="javascript:void(0);">あ</a></li>
                <li data-id=2><a href="javascript:void(0);">か</a></li>
                <li data-id=3><a href="javascript:void(0);">さ</a></li>
                <li data-id=4><a href="javascript:void(0);">た</a></li>
                <li data-id=5><a href="javascript:void(0);">な</a></li>
                <li data-id=6><a href="javascript:void(0);">は</a></li>
                <li data-id=7><a href="javascript:void(0);">ま</a></li>
                <li data-id=8><a href="javascript:void(0);">や</a></li>
                <li data-id=9><a href="javascript:void(0);">ら</a></li>
                <li data-id=10><a href="javascript:void(0);">わ</a></li>
                </ul>
            </div>
            <div class="searchSubtab">
                <ul class="searchSubtabin">
                <li class="current" data-id=0><a href="javascript:void(0);">あ</a></li>
                <li data-id=1><a href="javascript:void(0);">い</a></li>
                <li data-id=2><a href="javascript:void(0);">う</a></li>
                <li data-id=3><a href="javascript:void(0);">え</a></li>
                <li data-id=4><a href="javascript:void(0);">お</a></li>
                </ul>
            </div>
            <hr style="padding:4px;margin:0px;background-color: #EFEFEF;">
            <div id=title style="height:709px">
            </div>
            
        </div>
    </div>
    
</div>
<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="label1"></h6>
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
</body>

@endsection
