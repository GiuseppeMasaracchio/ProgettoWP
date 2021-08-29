<?php

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class FavArtist extends Model {
    public $fillable = ['id', 'id_art'];

    public function user() {
        return $this->belongsTo('User');
    }
}

?>