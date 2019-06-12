<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Order;
use App\Order_Item;
use App\Status;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(){
        //load all orders and relations

        $orders = Order::with(['user', 'books', 'statuses'])->get();
        return $orders;
    }

    public function getOrdersOfUser($uid) {
        $orders = Order::with(['books', 'statuses'])->where('user_id', $uid)->get();
        return $orders;
    }

    public function findByID(string $id): Order{
        $orders = Order::where('id', $id)->
        with(['user', 'books', 'statuses'])->first();
        return $orders;
    }


    /**
     * create new Order
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
            $order = Order::create($request->all());

            // save books
         /*   if (isset($request['books']) && is_array($request['books'])) {
                foreach ($request['books'] as $book) {
                    $book = Book::firstOrNew([
                        'id' => $book['id'],
                        'isbn' => $book['isbn'],
                        'title' => $book['title'],
                        'subtitle' => $book['subtitle'],
                        'published' => $book['published'],
                        'rating' => $book['rating'],
                        'description' => $book['description'],
                        'user_id' => $book['user_id'],
                        'price' => $book['price']
                    ]);
                    $order->books()->save($book);
                }
            }
*/
            // save status durch array
           $status = Status::firstOrNew(['description'=>'Bestellung ist eingegangen',
               'type'=>'offen', 'date' => new \DateTime()]);

           $order->statuses()->save($status);


         //   if (isset($request['order_items']) && is_array($request['order_items'])) {
          //      foreach ($request['order_items'] as $item) {
          //          $order_item = Order_Item::firstOrNew(['order_id'=>$order['id'],'book_id'=>$item['book_id'],
           //             'net_price'=>$item['net_price'], 'amount'=>$item['amount']]);
             //       $order->order_items()->save($order_item);
           //     }
           // }

            if (isset($request['order_items']) && is_array($request['order_items'])) {
                foreach($request['order_items'] as $book) {
                    $order->books()->attach(
                        $book['book_id'],
                        ['amount' => $book['amount'], 'net_price' => $book['net_price']]
                    );
                }
            }


            DB::commit();
            // return a vaild http response
            return response()->json($order, 201);
        }
        catch (\Exception $e) {
            // rollback all queries
            DB::rollBack();
            return response()->json("saving order failed: " . $e->getMessage(), 420);
        }
    }


    /**
     * modify / convert values if needed
     */
    private function parseRequest(Request $request) : Request {
        // get date and convert it - its in ISO 8601, e.g. "2018-01-01T23:00:00.000Z"
        $date = new \DateTime($request->date);
        $request['date'] = $date;
        return $request;
    }

    public function saveStatus(Request $request, $order_id): JsonResponse{
        $order = Order::where('id', $order_id)->first();
        if ($order != null) {

            $status = Status::create($this->parseRequest($request)->all());

            $order->statuses()->save($status);

            //    $book->delete();
        }
        else
            throw new \Exception("order couldn't be updated");
        return response()->json('order (' . $order_id . ') successfully updated', 200);

    }



    //Muss noch bearbeitet werden
    /*
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
                        array_push($ids, $auth['id']);
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
    }*/

    /**
     * returns 200 if book deleted successfully, throws excpetion if not
     */
    public function delete(string $id) : JsonResponse
    {
        $order = Order::where('id', $id)->first();
        if ($order != null) {

            $status = Status::firstOrNew(['description'=>'Bestellung ist storniert',
                'type'=>'storniert', 'date' => new Date()]);

            $order->statuses()->save($status);

            //    $book->delete();
        }
        else
            throw new \Exception("order couldn't be deleted - it does not exist");
        return response()->json('order (' . $id . ') successfully deleted', 200);

    }
}
