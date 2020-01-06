<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('kana')->nullable();
            $table->string('alphabet')->nullable();
            $table->string('title');
            $table->biginteger('register_id')->nullable();
            $table->date('birthday')->nullable();
            $table->integer('guild_rank')->nullable();
            $table->integer('guild_level')->nullable();
            $table->boolean('deleteflg')->nullable();
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
        Schema::dropIfExists('charas');
    }
}
