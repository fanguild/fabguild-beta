@extends('layouts.header')
@section('content')
<!-- <script src="{{ asset('js/chara_api_ajax.js') }}" defer></script> -->
<script src="{{ asset('js/allchara_api_ajax.js') }}" defer></script>

<div class="main" data-id="{{$id}}">
    <div class=slider>
        <div class="content">
            <div class=middle>
                <div class=middle_bar_box>
                    <div class="middle_bar">
                        <div class=middle_bar_outline>
                            <div class=middle_bar_1 style="padding:6px 6px 3px 6px ;">BACK</div>
                        </div>
                    </div>
                </div>
                <div id=echo>
                </div>
                
            </div>
            <div class=bottom>
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