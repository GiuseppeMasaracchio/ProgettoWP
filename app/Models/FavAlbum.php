<?php

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class FavAlbum extends Model {
    public $fillable = ['id', 'id_a'];

    public function user() {
        return $this->belongsTo('User');
    }
}

?>