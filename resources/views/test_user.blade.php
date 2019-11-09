@extends('layouts.app')
@section('content')
    <script src="{{ asset('js/test_user.js') }}" defer></script>
    <div class="panel-body">
        <form class="form-horizontal" id="api_form">
            {{ csrf_field() }}
            <div class="form-group">
                <!-- name -->
                <div class="col-sm-6">
                    <label for="name" class="col-sm-3 control-label">name</label>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <!-- profile -->
                <div class="col-sm-6">
                    <label for="profile" class="col-sm-3 control-label">profile</label>
                    <input type="text" name="profile" id="profile" class="form-control">
                </div>
                <!-- position -->
                <div class="col-sm-6">
                    <label for="position" class="col-sm-3 control-label">position</label>
                    <input type="text" name="position" id="position" class="form-control">
                </div>
                <!-- website -->
                <div class="col-sm-6">
                    <label for="website" class="col-sm-3 control-label">website</label>
                    <input type="text" name="website" id="website" class="form-control">
                </div>
                <!-- birthday -->
                <div class="col-sm-6">
                    <label for="birthday" class="col-sm-3 control-label">birthday</label>
                    <input type="date" name="birthday" id="birthday" class="form-control">
                </div>
                <!-- img -->
                <div class="col-sm-6">
                    <label for="img" class="col-sm-3 control-label">birthday</label>
                    <input type="text" name="img" id="img" class="form-control">
                </div>
            </div>
            <!-- プロフィール登録ボタン -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="button" class="btn btn-default" id="save">Save</button>
                </div>
            </div>
        </form>
        <div class="panel panel-default">
            <div class="panel-heading">タスクリスト</div>
            <div class="panel-body">
                <table class="table table-striped task-table">
                    <!-- テーブルヘッダ -->
                    <thead>
                        <th>タスク</th>
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