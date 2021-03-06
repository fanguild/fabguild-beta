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
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
    <script src="{{ asset('js/main.js')}}" defer></script>
    <script src="{{ asset('js/jquery-3.3.1.min.js')}}" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js"></script>

    <script src="{{ asset('js/menu.js') }}" defer></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151902477-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-151902477-1');
    </script>

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
        <div id="header">
            @if( Auth::check() )
            <div class=navbar style="padding:0px">
                <div id="wrapper">
                    <p class="btn-gnavi" style='margin:-6px 0 12px 0;'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                    <nav id="global-navi">
                        <ul class="menu" style='list-style: none;'>
                            <li><a href="{{url('home')}}">ホーム</a></li>
                            <li><a href="{{url('user')}}">マイページ</a></li>
                            <li id=opinion><a href="{{url('https://twitter.com/fanguild1')}}">ご意見・問い合わせ</a></li>
                            <li><a href="">プライバシーポリシー</a></li>
                            <li>
                                <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    ログアウト
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style="text-align:center;width:100%"><img src="{{asset('storage/icon/fanguild_logo.svg')}}" style="height:68px;padding-top:8px;"></div>
                <div id=footer class="footer closed"><img src="{{asset('storage/icon/footer.svg')}}" style="height:64px"></div>
                <!-- <div id=footer_add class="footer_add hide"><a style="font-size: large;">マイキャラ追加</a><a style="color:#FFF">あああ</a></div> -->
                <div class=js-modal__btn data-id=1>
                    <div id="footer_menu_name_1" class=footer_first>
                        <img src="{{asset('storage/icon/mychara_add.svg')}}" style=" height:36px">
                    </div>
                    <div id=footer_menu_1 class="footer_menu_mychara footer_first">
                        <img src="{{asset('storage/icon/mycharalist.svg')}}" style="height:24px">
                    </div>
                </div>
                <div class="js-modal__btn" data-id=2>
                    <div id="footer_menu_name_2" class=footer_second>
                        <img src="{{asset('storage/icon/share.svg')}}" style="height:36px">
                    </div>
                    <div id=footer_menu_2 class=footer_second>
                        <img src="{{asset('storage/icon/TwitterIcon.svg')}}" style="height:24px">
                    </div>
                </div>
                <div class="js-modal__btn" data-id=3>                
                    <div id="footer_menu_name_3" class=footer_third>
                        <img src="{{asset('storage/icon/画像投稿.svg')}}" style="height:36px">
                    </div>
                    <div id=footer_menu_3 class=footer_third>
                        <img src="{{asset('storage/icon/upload.svg')}}" style="height:24px">
                    </div>
                </div>                
                <div class="js-modal__bg"></div>
                <div class="js-modal__main"></div>
                
                <div id=footer_back></div>
                <div id=header_back></div>
            </div>
            
            @else
            <div class=navbar style="padding:0px">
                <div id="wrapper">
                    <p class="btn-gnavi" style='margin:-6px 0 12px 0;'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                    <nav id="global-navi">
                        <ul class="menu" style='list-style: none;'>
                            
                            <li id=opinion><a href="{{url('https://twitter.com/fanguild1')}}">ご意見・問い合わせ</a></li>
                            <li><a href="">プライバシーポリシー</a></li>
                            <li>
                                <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    ログイン
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style="text-align:center;width:100%"><img src="{{asset('storage/icon/fanguild_logo.svg')}}" style="height:50px"></div>
            
                <div id=header_back></div>
            </div>
            @endif
        </div>

        @yield('content')
    </body>