<!doctype html>
<html lang="ja">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/storage/icon/favicon.png">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>FAN-GUILD</title>
    <meta name="keywords" content="マンガ,キャラ,ファン,キャラクター,応援,コミュニティー">
    <meta name="description" content="FAN-GUILDはファンが好きなキャラを応援できるファンコミュニティです。">
    <!-- ogp -->
    <meta property="og:title" content="FAN-GUILDはファンが好きなキャラを応援できるファンコミュニティです。">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{url('/')}}">
    <meta property="og:image" content="{{ asset('storage/img/ogp.png') }}">
    <meta property="og:site_name" content="site_name:FAN-GUILDはファンが好きなキャラを応援できるファンコミュニティです。">
    <meta property="og:description" content="">
    <meta name="twitter:card" content="summary_large_image">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!-- <script src="{{ asset('js/main.js')}}" defer></script> -->
    <script src="{{ asset('js/jquery-3.3.1.min.js')}}" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js"></script>

    <script src="{{ asset('js/menu.js') }}" defer></script>
    <script src="{{ asset('js/import_api_ajax.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <!-- <link rel="icon" type="image/png" href="favicon.png"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/menu.css') }}">

</head>

<body>

    <body>
        

<div class="main" data-id="">
    <div class="content">
        <div class=chara_top style="width:375px"></div>
        <form id=api_form>
            <div class="join_btn" style="width:375px">
                <div id=import1 style="border:1px solid #333333">import_chara</div>
                <div id=import2 style="border:1px solid #333333">import_works</div>
                <div id=import3 style="border:1px solid #333333">import_ads</div> 
            </div>
            <div style="display:flex;flex-direction:column">
            <span>ID<input id=text type="text" name="spreadsheetid" value=""></input></span>
            <span>Start<input type="text" name="start" value=""></input></span>
            <span>End<input type="text" name="end" value=""></input></span>
            </div>
        </form>
        
        <hr style="padding:0px;margin:0px;background-color: #EFEFEF;">
        <div id=echo>
            
        </div>
    </div>
</div>

</body>

<script>
    // $('.middle_bar').scroll(function() {
    //     console.log($(this).scrollLeft());
    // });
    $(".middle_bar").scrollLeft(300);
    $(".middle_bar_1").addClass("middle_bar_add");
</script>

</html>

