<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Status extends Model
{
    protected $fillable = ['order_id','date','description', 'type'];

    public function order() : BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
