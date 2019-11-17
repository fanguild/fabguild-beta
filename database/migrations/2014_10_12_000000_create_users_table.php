<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->increments('id');
            $table->integer('status')->default(0);
            $table->string('avatar');
            $table->string('login_type');
            $table->string('login_id')->unique();
            $table->string('name');
            $table->string('profile')->nullable();
            $table->string('position')->nullable();
            $table->string('website')->nullable();
            $table->date('birthday')->nullable();
            $table->string('img')->nullable();
            $table->integer('img_xposition')->nullable();
            $table->integer('img_yposition')->nullable();
            $table->integer('job')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
