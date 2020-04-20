@extends('layouts.header')
@section('content')
<!-- <script src="{{ asset('js/chara_api_ajax.js') }}" defer></script> -->
<script src="{{ asset('js/work_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$work->id}}">
    <div class=slider>
        <div class="content">
            <div class=chara_top>
                <div class=chara>
                    <img class=chara_img id=chara_img src="{{$work->ogp}}">
                    
                </div>
                <!-- <div class=guild_status>
                    <div style="text-align:start;">ギルドランク
                    </div>
                    <img id=guild_icon src="{{asset('storage/icon/盾.svg')}}" style="height:62px">
                    <div style="color:#FF8500">オレンジ</div>
                    <div class=chara_population>
                        <div class=pop style="color:#969696;">総ファン数</div>
                        <div class="pop sum" style="font-size:16px;font-weight: 700;"></div>
                        <div class=pop style="color:#969696;">人</div>
                    </div>
                </div> -->
            </div>
            <div class="chara_name">{{$work->titlename}}</div>
            <hr style="padding:0px;margin:0px;background-color: #EFEFEF;">
            <div id=echo>
                

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