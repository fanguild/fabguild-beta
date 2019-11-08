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
            $table->string('kana');
            $table->string('alphabet');
            $table->biginteger('register_id');
            $table->date('birthday');
            $table->integer('guild_rank');
            $table->integer('guild_level');
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
        Schema::dropIfExists('charas');
    }
}
