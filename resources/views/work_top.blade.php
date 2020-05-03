@extends('layouts.header')
@section('content')
<!-- <script src="{{ asset('js/chara_api_ajax.js') }}" defer></script> -->
<script src="{{ asset('js/work_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$work->id}}">
    <div class=slider>
        <div class="content">
            <div class=work_top>
                <div class=work>
                    <img class=thumbnail_work style="" id=chara_img src="{{$work->ogp}}">
                    
                </div>
            <div class="center bold" style="padding-bottom:12px;">{{$work->titlename}}</div>
                
            </div>
            <div class="center" style="margin-bottom:6px;">
                    <a style="color: #ffffff;
                            font-weight: 600;
                            background-color: #ff8500;
                            padding: 8px 48px;
                            border-radius: 4px;
                            text-decoration:none" href="{{$work->url}}">アニメ公式サイトへ</a>
            </div>
            <div class=middle>
                <div class=middle_bar_box>
                    <div class="middle_bar">
                        <div class=middle_bar_outline>
                            <div class=middle_bar_1 style="padding:6px 6px 3px 6px ;">出演キャラ</div>
                        </div>
                        <div class=middle_bar_outline>
                            <div class=middle_bar_2 style="padding:6px 6px 3px 6px ;" data-id=1>作品詳細</div>
                        </div>
                    <!-- <div class=middle_bar_outline>
                        <div class=middle_bar_3 style="padding:6px 6px 3px 6px ;" data-id=2>マイアルバム</div>
                    </div> -->
                    </div>
                </div>
                <div id=echo>
                </div>
                
            </div>
            
            
            <div class=bottom>
                <div class="center bold">同じ原作者の作品</div>
                <div id=outher class=scroll-x>
                    
                </div>
                <div class="center bold">同じ制作会社の作品</div>
                <div id=maker class=scroll-x>
                </div>
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

</html>

@endsection