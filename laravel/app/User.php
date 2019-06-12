<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','firstname', 'lastname', 'email', 'password', 'city', 'zip', 'street'. 'street_nr', 'country', 'admin'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function books() : HasMany{
        return $this->hasMany(Book::class);
    }

    public function orders() : HasMany{
        return $this->hasMany(Order::class);
    }

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){    //Zusatzinformation mit User welcher User?
        return ['user' =>['id'=>$this->id], 'admin' =>$this->admin];
    }


}
