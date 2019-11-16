 @extends('layouts.header')
 @section('content')

 @php
 var_dump($result)
 @endphp

 <div class="container">
     <!-- コントローラーで取得した$resultをforeachで回す -->
     @foreach ($result as $tweet)
     <div class="card mb-2">
         <div class="card-body">
             <div class="media">
                 <img src="https://placehold.jp/70x70.png" class="rounded-circle mr-4">
                 <div class="media-body">
                     <h5 class="d-inline mr-3"><strong></strong></h5>
                     <h6 class="d-inline text-secondary"></h6>
                     <p class="mt-3 mb-0"></p>
                 </div>
             </div>
         </div>
         <div class="card-footer bg-white border-top-0">
             <div class="d-flex flex-row justify-content-end">
                 <div class="mr-5"><i class="far fa-comment text-secondary"></i></div>
                 <div class="mr-5"><i class="fas fa-retweet text-secondary"></i></div>
                 <div class="mr-5"><i class="far fa-heart text-secondary"></i></div>
             </div>
         </div>
     </div>
     @endforeach
 </div>
 @endsection