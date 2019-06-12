<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id'); //PK
            $table->string('isbn')->unique();
            $table->string('title');
            $table->string('subtitle')->nullable(); //optional Null-Wert ist möglich
            $table->date('published')->nullable(); //optional
            $table->integer('rating')->default(1); //wenn ich keinen Wert habe dann wird 1 angegeben
            $table->string('description')->nullable(); //optional
            $table->integer('user_id')->unsigned();
            $table->float('price')->nullable();


            //create constraint in DB
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade'); //das aus der ursprünglichen Tabelle auch gelöscht wird


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
        Schema::dropIfExists('books');
    }
}
