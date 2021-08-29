<?php

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class FavPlaylist extends Model {
    public $fillable = ['id', 'id_p'];

    public function user() {
        return $this->belongsTo('User');
    }
}

?>