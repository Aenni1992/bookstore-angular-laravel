<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{

    protected $fillable = ['isbn', 'title', 'subtitle', 'published', 'rating', 'description', 'user_id', 'price'];

    //QueryScopes, damit ich mit anderen Tabellen verknüpfen kann
    public function scopeFavourite($query){

        return $query->where('rating','>=',8);
    }


    public function images() : HasMany{
        return $this->hasMany(Image::class);
    }

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function authors(): BelongsToMany
    {
        return $this->belongsToMany(Author::class);
    }

    public function orders() : BelongsToMany
    {
        return $this->belongsToMany(Order::class);
    }
}


//Tabellennamen ändern, konfigurieren
//protected $table = 'name_der_tabelle';

//protected $primaryKey = 'name_der_tabelle';

//wenn ich gleiche Properties gleichzeitig aufsetze, muss ich erst erlauben
// guarded --> die nicht Aufrufen
// filiable --> die Tabelle darfst über HTTP-Request geändert werden