<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMycharasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mycharas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('userid');
            $table->bigInteger('charaid');
            $table->string('charaname');
            $table->string('title');
            $table->string('labelname')->nullable();
            $table->string('job')->nullable();
            $table->string('s3url')->nullable();
            $table->date('history')->nullable();
            $table->text('memory')->nullable();
            $table->text('reommendation')->nullable();
            $table->text('secret')->nullable();
            $table->text('tomember')->nullable();
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
        Schema::dropIfExists('mycharas');
    }
}
