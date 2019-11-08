<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharaTitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chara_titles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('charaid');
            $table->string('name');
            $table->string('kana');
            $table->string('alphabet');
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
        Schema::dropIfExists('chara_titles');
    }
}
