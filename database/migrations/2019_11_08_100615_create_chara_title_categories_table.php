<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharaTitleCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chara_title_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('charatitleid');
            $table->string('name');
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
        Schema::dropIfExists('chara_title_categories');
    }
}
