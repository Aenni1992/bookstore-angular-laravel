<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order1 = new \App\Order;
        $order1->date = new DateTime();
        $order1->total_amount = 48.00;

        $user = \App\User::all()->first();
        $order1->user()->associate($user);

        $order1->save();

        $order2 = new \App\Order;
        $order2->date = new DateTime();
        $order2->total_amount = 34.66;

        $user = \App\User::all()->first();
        $order2->user()->associate($user);

        $order2->save();

        $order3 = new \App\Order;
        $order3->date = new DateTime();
        $order3->total_amount = 29.94;

        $user = \App\User::all()->first();
        $order3->user()->associate($user);

        $order3->save();
    }
}
