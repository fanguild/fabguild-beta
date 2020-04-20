<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('titles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('categoryid');
            $table->string('categoryname')->nullable();
            $table->string('titlename');
            $table->string('kana')->nullable();
            $table->string('alphabet')->nullable();
            $table->string('url')->nullable();
            $table->string('ogp')->nullable();
            $table->string('outher')->nullable();
            $table->string('maker')->nullable();
            $table->string('holder')->nullable();
            $table->string('mainchara1')->nullable();
            $table->string('mainchara2')->nullable();
            $table->string('mainchara3')->nullable();
            $table->boolean('deleteflg');
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
        Schema::dropIfExists('titles');
    }
}
