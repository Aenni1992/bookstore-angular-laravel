<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthorBookTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('author_book', function (Blueprint $table) {
          $table->integer('author_id')->unsigned()->index(); //verweist direkt auf der Tabelle und sucht perfomanter
          $table->foreign('author_id')->references('id')
              ->on('authors')->onDelete('cascade');
            $table->integer('book_id')->unsigned()->index(); //verweist direkt auf der Tabelle und sucht perfomanter
            $table->foreign('book_id')->references('id')
                ->on('books')->onDelete('cascade');
            $table->primary(['author_id','book_id']); //zusammengesetzer PK


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
        Schema::dropIfExists('author_book');
    }
}
