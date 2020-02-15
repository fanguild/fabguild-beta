@extends('layouts.header')
@section('content')
<script src="{{ asset('js/user_top_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$userid}}">

    <div class=slider>
        <div class="content">
            <div class=chara_top>
                <div class=chara id=user_left>
                    <!-- <img id=chara_img src="img/Drstone.png">
                <div class="user_name">Dr.デモ太郎</div> -->
                </div>
                <div class=guild_status>
                    <div style="text-align:start;margin:0 24px;">職業
                    </div>
                    <img id=job_icon src="/storage/icon/evan.png" style="height:62px;width:72px;margin:0 48px;">
                    <div style="color:#FF8500">エバンジェリスト</div>
                    <div class=chara_population>
                        <div class=pop style="color:#969696;"><br></div>

                    </div>
                </div>
            </div>
            
            <div class="middle_bar">
                <div class=middle_bar_outline>
                    <div class=middle_bar_1 style="padding:6px 6px 3px 6px ;">マイキャラ</div>
                </div>
                <div class=middle_bar_outline>
                    <div class=middle_bar_2 style="padding:6px 6px 3px 6px ;">投稿一覧</div>
                </div>
                <!-- <div class=middle_bar_outline>
                    <div class=middle_bar_4 style="padding:6px 6px 3px 6px ;">ギルドメンバー</div>
                </div> -->
            </div>
            
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
</body>

@endsection