<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*DB::table('books')->insert([

            'title' => 'Herr der Ringe',
            'isbn' => '1234567890',
            'subtitle' => 'Rückkehr des Königs',
            'rating' => 10,
            'description' => 'Letzter Teil der Triologie',
            'published' => new DateTime()
        ]);*/

        $book1 = new \App\Book();
        $book1->title = "Herr der Ringe";
        $book1->isbn = '1234567890';
        $book1->subtitle = 'Rückkehr des Königs';
        $book1->rating = 10;
        $book1->description = 'Letzter Teil der Triologie';
        $book1->published = new DateTime();
        $book1->price = 40.00;

        //get the first user
        $user = \App\User::all()->first();
        $book1->user()->associate($user);

        //Speichern in der DB
        $book1->save();

        $authors = \App\Author::all()->pluck("id"); //Sammelt alle Werte einer Spalte --> somit alle id-Werte
        $book1->authors()->sync($authors); //muss ich angeben, damit ich später auch noch book verwenden kann

        //add images to book
        $image1 = new \App\Image;
        $image1->title ="Cover1";
        $image1->url ="https://images-na.ssl-images-amazon.com/images/I/A1+POlYbo-L._RI_SX300_.jpg";
        $image1->book()->associate($book1);  //hinzufügen

        $image1->save();

        $image2 = new \App\Image;
        $image2->title ="Cover2";
        $image2->url ="https://images-na.ssl-images-amazon.com/images/I/51-7LJZvEYL.jpg";
        $image2->book()->associate($book1);

        //Speichern in der DB
        $image2->save();



        $book2 = new \App\Book();
        $book2->title = "Laravel: Up and Running";
        $book2->isbn = '0987654321';
        $book2->subtitle = 'A Framework for Building Modern PHP Apps';
        $book2->rating = 9;
        $book2->description = 'Speed and simplicity, for starters.';
        $book2->published = new DateTime();
        $book2->price = 28.88;

        //get the first user
        $user = \App\User::all()->first();
        $book2->user()->associate($user);

        //Speichern in der DB
        $book2->save();

        $authors = \App\Author::all()->pluck("id"); //Sammelt alle Werte einer Spalte --> somit alle id-Werte
        $book2->authors()->sync($authors); //muss ich angeben, damit ich später auch noch noch book verwenden kann

        //add images to book
        $image1 = new \App\Image;
        $image1->title ="Cover1";
        $image1->url ="https://images-na.ssl-images-amazon.com/images/I/71kEog-B9uL.jpg";
        $image1->book()->associate($book2);  //hinzufügen

        $image1->save();

        $image2 = new \App\Image;
        $image2->title ="Cover2";
        $image2->url ="https://images-na.ssl-images-amazon.com/images/I/81HOpBSO-UL.jpg";
        $image2->book()->associate($book2);

        //Speichern in der DB
        $image2->save();


        $book3 = new \App\Book();
        $book3->title = "Homo Deus";
        $book3->isbn = '1234509876';
        $book3->subtitle = 'Eine Geschichte von Morgen';
        $book3->rating = 10;
        $book3->description = 'Ein Blick in die Zukunft';
        $book3->published = new DateTime();
        $book3->price = 24.95;

        //get the first user
        $user = \App\User::all()->first();
        $book3->user()->associate($user);

        //Speichern in der DB
        $book3->save();

        $authors = \App\Author::all()->pluck("id"); //Sammelt alle Werte einer Spalte --> somit alle id-Werte
        $book3->authors()->sync($authors); //muss ich angeben, damit ich später auch noch noch book verwenden kann

        //add images to book
        $image1 = new \App\Image;
        $image1->title ="Cover1";
        $image1->url ="https://images-na.ssl-images-amazon.com/images/I/41Pa949S8lL.jpg";
        $image1->book()->associate($book3);  //hinzufügen

        $image1->save();

        $image2 = new \App\Image;
        $image2->title ="Cover2";
        $image2->url ="https://images-na.ssl-images-amazon.com/images/I/51%2BaZNXAvAL.jpg";
        $image2->book()->associate($book3);

        //Speichern in der DB
        $image2->save();

        //update
        //$book = App\Book::find(1);
        //$book->title = "Neuer Title";
        //$book->save();

        //delete ein Objekt oder eine Tabelle
        //$book->delete();

        //findOrCreate updateOrCreate
        //wenn es schon gibt, legt es mir die Instanz zurück, ansonsten sollte es neu kreiert werden

        //$book = App\Book::findOrCreate(['title'=>"Buchtitel"]);

        //$book = App\Book::updateOrCreate(['title'=>"Buchtitel"],['description'=>"Neue Beschreibung"]);

        /*//Element in Beziehung einfügen
        //$book->images()->save($image);
        $book->images()->saveMany([$image1, $image2]);

        //User wird zum Buch hinzufügt
        $book->user()->associate($user1);
        $book->save();

        //User wird vom Buch weggenommen
        $book->user()->dissociate($user1);
        $book->save();

        //m:n Beziehungen
        $book->authors()->attach($authorId);
        $book->authors()-->dettach($authorId);

        //hier werden alle Authoren herausgenommen, weil ich nicht mitgebe
        $book->authors()-->dettach();

        //schaut, dass nur diese Authoren im Buch enthalten sind bzw. fügt sie hinzu, wenn 4 enthalten ist, wird dieser weggenommen
        $book->authors()->sync([1,2,3]);

        //Bei Laravel nachschauen, bei weiteren Befehle
        */


    }
}
