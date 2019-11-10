@extends('layouts.header')
@section('content')

<div class="main">
    <div class="content">
        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">投稿するキャラ
        </div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="width:60%;color:#969696;margin:6px;">未選択</div>
            </div>
            <div class=arrow><img src="storage/icon/arrow_follow.svg" style="height:36px;margin:0px 0px"></div>
        </div>
        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">好きなセリフ
        </div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="color:#969696;margin:6px;height:120px">好きなセリフを記入してみよう</div>
            </div>
        </div>
        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">好きな理由
        </div>
        <div class=listparent style="border:none">
            <div class=list>
                <div style="color:#969696;margin:6px;height:120px">理由を記入しよう</div>
            </div>
        </div>
        <div style="padding:4px;margin:0px;font-size:16px;background-color: #EFEFEF;padding:12px 24px">
        </div>
        <div class=listparent style="border:none">
            <div class=list style="justify-content: center;">
                <div style="text-align: center;margin:6px">投稿</div>
            </div>
        </div>
    </div>
</div>


</body>

@endsection