<?php

use Illuminate\Database\Eloquent\Model;
use App\Models\Playlist;
use App\Models\FavSong;

class User extends Model {
    public $fillable = ['username', 'password', 'email'];

    public function fav_songs() {
        return $this->hasMany("App\Models\FavSong");
    }

    public function playlists() {
        return $this->hasMany("App\Models\Playlist");
    }
}

?>