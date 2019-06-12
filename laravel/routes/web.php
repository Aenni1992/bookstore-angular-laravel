<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use \Illuminate\Support\Facades;
use App\Book;

Route::get('/', 'BookController@index');

    //function () {
    //$name = "Anna";


    //Facade --> Klasse die gesammelt die Daten von der DB holt
    //DB:table kann ich immer auf die Tabelle zugreifen
    //Facaden erstellt mir dir statischen Daten zu Verfügung
    //Hardware naheste ist DB:select('select * from books')
    //DB::table('books') ->where ('title', 'Herr der Ringe ')->get()
    //get holt mir die Daten von der DB
    //Modelvariante -> Eloquent Active Record, Implementierung von Laravel
    //


   // $books = DB::table('books')->get();
   // return $books;

  //  $books = [
    //    'Herr der Ringe',
      //  'Harry Potter',
        //'Laravel Einführung'
    //];

    //return view('welcome', [
      //  'name' => $name
    //]);


  //  return view('welcome', compact('books'));
//});

Route::get('/books', 'BookController@index');

    //function (){
   // $books = DB::table('books')->get();



//});


//function geändert in BookController
Route::get('books/{id}', 'BookController@show');

    //function($id) {
  // $book = DB::table('books')->find($id);

//Route::get('/home', 'LoginController@index') ->name('home');


//});