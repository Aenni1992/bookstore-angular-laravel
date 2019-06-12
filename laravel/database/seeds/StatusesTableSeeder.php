<?php

use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status1 = new \App\Status;
        $status1->description = 'Bestellung ist eingegangen';
        $status1->type = 'offen';
        $status1->date = new DateTime();

        $order = \App\Order::all()->first();
        $status1->order()->associate($order);

        $status1->save();

        $status2 = new \App\Status;
        $status2->description = 'Bestellung ist storniert';
        $status2->type = 'storniert';
        $status2->date = new DateTime();

        $order = \App\Order::all()->first();
        $status2->order()->associate($order);

        $status2->save();

        $status3 = new \App\Status;
        $status3->description = 'Bestellung ist versendet';
        $status3->type = 'versendet';
        $status3->date = new DateTime();

        $order = \App\Order::all()->first();
        $status3->order()->associate($order);

        $status3->save();
    }
}
