<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //test Shop-user
        $user1 = new \App\User;
        $user1->name='testuser';
        $user1->firstname='testVN';
        $user1->lastname='testNM';
        $user1->street='teststreet';
        $user1->street_nr='123';
        $user1->zip='1234';
        $user1->city='teststcity';
        $user1->country='testcountry';
        $user1->email = 'test@gmail.com';
        $user1->password = bcrypt('secret'); //verschlüsselt mir das Passwort
        $user1->admin = 0;
        $user1->save();


       //new Shop-user
        $user2 = new \App\User;
        $user2->name='aenni';
        $user2->firstname='Anna';
        $user2->lastname='Kirchgasser';
        $user2->street='churchline';
        $user2->street_nr='456';
        $user2->zip='4567';
        $user2->city='annastadt';
        $user2->country='churchcountry';
        $user2->email = 'anna@gmail.com';
        $user2->password = bcrypt('aenni'); //verschlüsselt mir das Passwort
        $user2->admin = 0;
        $user2->save();

        //new Admin-user
        $user3 = new \App\User;
        $user3->name='admin';
        $user3->firstname='Admin';
        $user3->lastname='Istrator';
        $user3->street='adminstreet';
        $user3->street_nr='123';
        $user3->zip='1234';
        $user3->city='admincity';
        $user3->country='admincountry';
        $user3->email = 'admin@gmail.com';
        $user3->password = bcrypt('admin'); //verschlüsselt mir das Passwort
        $user3->admin = 1;
        $user3->save();
    }
}
