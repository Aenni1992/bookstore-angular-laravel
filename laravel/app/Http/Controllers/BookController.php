<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use App\Image;
use App\Author;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;


class BookController extends Controller
{
    //liefert die ganze Liste bzw. Bücher
    public function index(){
        //$books = Book::all();
        //return view('books.index', compact('books'));
        /*load all books and relations with eager loading --> ich lade genau das, was ich gerade gemacht habe
        wenn ich alles zusammen laden möchte, aber erst zum schluss redet man von lazy loading */

        $books = Book::with(['authors', 'images', 'user'])->get();
        return $books;
    }

    public function findByISBN(string $isbn): Book{
        $book = Book::where('isbn', $isbn)->
            with(['authors', 'images', 'user'])->first();
        return $book;
    }

    public function findByID(int $id): Book{
        $book = Book::where('id', $id)->
        with(['authors', 'images', 'user'])->first();
        return $book;
    }

    public function allAuthors(){
        $authors = Author::get();
        return $authors;
    }

    public function checkISBN(string $isbn){
        //mit where rufe ich alle isbn auf und beginne mit dem ersten
        $book = Book::where('isbn', $isbn) ->first();
        return $book !=null ? response()->json('book with ' .$isbn. ' exists', 200) :
            response()->json('book with ' .$isbn. ' data not exists', 400);
    }

    /**
     * find book by search term
     * SQL injection is prevented by default, because Eloquent
     * uses PDO parameter binding
     */
    public function findBySearchTerm(string $searchTerm) {
        $book = Book::with(['authors', 'images', 'user'])
            ->where('title', 'LIKE', '%' . $searchTerm. '%')
            ->orWhere('subtitle' , 'LIKE', '%' . $searchTerm. '%')
            ->orWhere('description' , 'LIKE', '%' . $searchTerm. '%')

            /* search term in authors name */
            ->orWhereHas('authors', function($query) use ($searchTerm) {
                $query->where('firstName', 'LIKE', '%' . $searchTerm. '%')
                    ->orWhere('lastName', 'LIKE',  '%' . $searchTerm. '%');
            })->get();
        return $book;
    }

    /**
     * create new Book
     */
    public function save(Request $request) : JsonResponse  {
        $request = $this->parseRequest($request);
        /*+
        *  use a transaction for saving model including relations
        * if one query fails, complete SQL statements will be rolled back
        */

        //benötig man, wenn man mehrere Tabellen hat und komplexere Befehle
        DB::beginTransaction();
        try {

            //Json-Objekt wird gleich erstellt
            $book = Book::create($request->all());

            // save images durch array
            if (isset($request['images']) && is_array($request['images'])) {
                foreach ($request['images'] as $img) {
                    $image = Image::firstOrNew(['url'=>$img['url'],'title'=>$img['title']]);
                    $book->images()->save($image);
                }
            }

            // save authors
            $ids = [];
            if (isset($request['authors']) && is_array($request['authors'])) {
                foreach ($request['authors'] as $auth) {
                    array_push($ids, $auth);
                }
            }
            $book->authors()->sync($ids);

            DB::commit();
            // return a vaild http response
            return response()->json($book, 201);
        }
        catch (\Exception $e) {
            // rollback all queries
            DB::rollBack();
            return response()->json("saving book failed: " . $e->getMessage(), 420);
        }
    }


    /**
     * modify / convert values if needed
     */
    private function parseRequest(Request $request) : Request {
        // get date and convert it - its in ISO 8601, e.g. "2018-01-01T23:00:00.000Z"
        $date = new \DateTime($request->published);
        $request['published'] = $date;
        return $request;
    }

    public function update (Request $request, string $isbn): JsonResponse
    {

        DB::beginTransaction();
        try {
            $book = Book::with(['authors', 'images', 'user'])
                ->where('isbn', $isbn)->first();
            if ($book != null) {
                $request = $this->parseRequest($request);
                $book->update($request->all());

                //delete all old images
                $book->images()->delete();
                // save images
                if (isset($request['images']) && is_array($request['images'])) {
                    foreach ($request['images'] as $img) {
                        $image = Image::firstOrNew(['url' => $img['url'], 'title' => $img['title']]);
                        $book->images()->save($image);
                    }
                }
                //update authors
                $ids = [];
                if (isset($request['authors']) && is_array($request['authors'])) {
                    foreach ($request['authors'] as $auth) {
                        array_push($ids, $auth);
                    }
                }
                $book->authors()->sync($ids);
                $book->save();

            }
            DB::commit();
            $book1 = Book::with(['authors', 'images', 'user'])
                ->where('isbn', $isbn)->first();
// return a vaild http response
            return response()->json($book1, 201);
        } catch (\Exception $e) {
            // rollback all queries
            DB::rollBack();
            return response()->json("updating book failed: " . $e->getMessage(), 420);

        }
    }

    /**
     * returns 200 if book deleted successfully, throws excpetion if not
     */
    public function delete(string $isbn) : JsonResponse
    {
        $book = Book::where('isbn', $isbn)->first();
        if ($book != null) {
            $book->delete();
        }
        else
            throw new \Exception("book couldn't be deleted - it does not exist");
        return response()->json('book (' . $isbn . ') successfully deleted', 200);

    }

    //zeigt mir genau ein Buch durch eine Id
    //public function show($book){
       // $book = Book::find($book);
       // return view('books.show', compact('book'));
  //  }
}
