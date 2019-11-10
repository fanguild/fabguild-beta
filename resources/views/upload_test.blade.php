@extends('layouts.app')
@section('content')
    <script src="{{ asset('js/uploads_api_ajax.js') }}" defer></script>
    <div class="panel-body">
        <form class="form-horizontal" id="api_form" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group">
                <!-- ファイル名 -->
                <div class="col-sm-6">
                    <label for="file" class="col-sm-3 control-label">file</label>
                    <input type="file" name="file" id="file" class="form-control">
                </div>
            </div>
            <!-- ファイル登録ボタン -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="button" class="btn btn-default" id="submit">Save</button>
                </div>
            </div>
        </form>
        <div class="panel panel-default">
            <div class="panel-heading">画像リスト</div>
            <div class="panel-body">
                <table class="table table-striped task-table">
                    <!-- テーブルヘッダ -->
                    <thead>
                        <th>画像</th>
                        <th>&nbsp;</th>
                    </thead>
                    <!-- テーブル本体 -->
                    <tbody id="echo">
                        <!--データ出力部分-->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection