<?php

use Illuminate\Database\Seeder;

class OrderItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order_item1 = new \App\Order_Item;
        $order_item1->net_price = 40.00;
        $order_item1->amount = 1;

        $order = \App\Order::all()->first();
        $order_item1->order()->associate($order);

        $book= \App\Order::all()->first();
        $order_item1->book()->associate($book);

        $order_item1->save();


        $order_item2 = new \App\Order_Item;
        $order_item2->net_price = 28.88;
        $order_item2->amount = 2;

        $order = \App\Order::all()->first();
        $order_item2->order()->associate($order);

        $book = \App\Order::all()->first();
        $order_item2->book()->associate($book);

        $order_item2->save();


        $order_item3 = new \App\Order_Item;
        $order_item3->net_price = 24.95;
        $order_item3->amount = 1;

        $order = \App\Order::all()->first();
        $order_item3->order()->associate($order);

        $book = \App\Order::all()->first();
        $order_item3->book()->associate($book);

        $order_item3->save();
    }
}
