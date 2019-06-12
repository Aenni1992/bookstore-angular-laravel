<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('books', 'BookController@index');
Route::get('book/{isbn}', 'BookController@findByISBN');
Route::get('book/{id}', 'BookController@ ');
Route::get('book/checkisbn/{isbn}', 'BookController@checkISBN');
Route::get('book/search/{searchTerm}', 'BookController@findBySearchTerm');



Route::group(['middleware' =>['api','cors','jwt.auth']], function () {

//Route suchen
    Route::post('book', 'BookController@save');  //neue Ressourcen anlegen
    Route::put('book/{isbn}', 'BookController@update');  //Ressourcen bearbeiten
    Route::delete('book/{isbn}', 'BookController@delete'); //Ressourcen ändern
    Route::post('auth/logout', 'Auth\ApiAuthController@logout');

    Route::get('orders', 'OrderController@index');
    Route::post('order', 'OrderController@save');  //neue Ressourcen anlegen
    Route::get('orderuser/{uid}', 'OrderController@getOrdersOfUser');
    Route::get('order/{id}', 'OrderController@findByID'); // einzelne order holen
    Route::put('order/{id}', 'OrderController@update');  //Ressourcen bearbeiten
    Route::post('orderstatus/{id}', 'OrderController@saveStatus'); //speichert mir die Stati
    Route::delete('order/{id}', 'OrderController@delete'); //löscht den Status


    Route::get('bookauthors', 'BookController@allAuthors');
    });

Route::group(['middleware' =>['api','cors']], function (){
    Route::post('auth/login', 'Auth\ApiAuthController@login');
});


