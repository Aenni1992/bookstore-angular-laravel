<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    protected $fillable = ['user_id', 'date', 'total_amount', 'taxes'];


    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function statuses() : HasMany
    {
        return $this->hasMany(Status::class);
    }

    public function books() : BelongsToMany
    {
        return $this->belongsToMany(Book::class)->withPivot('net_price', 'amount');
    }
}
