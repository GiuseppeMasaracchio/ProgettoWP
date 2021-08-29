<?php

use Illuminate\Routing\Controller as BaseController;


class ApiController extends BaseController {

    public function getClient() {
        return ['client_id' => env('SPOTIFY_CLIENTID'), 'client_secret' => env('SPOTIFY_CLIENTSECRET')];
    }

    public function getToken() {
        $token = Http::asForm()->withHeaders([
            'Authorization' => 'Basic '.base64_encode(env('SPOTIFY_CLIENTID').':'.env('SPOTIFY_CLIENTSECRET')),
        ])->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'client_credentials',
        ]);
        return $token['access_token'];
    }

    public function getQuery($titolo, $tipo) {
        $token = $this->getToken();
        $res = Http::withHeaders([
                'Authorization' => 'Bearer '.$token,
        ])->get('https://api.spotify.com/v1/search?q='.$titolo.'&type='.$tipo);
        return $res;
    }

    public function search() {
        $user = User::find(session('user_id'));
        return view('cerca')
            ->with('user', $user);
    }

    public function addToDB($elemid, $type) {
        if ($type == 'track') {
            FavSong::create(array('id' => session('user_id'), 'id_s' => $elemid));
        } else if ($type == 'album') {
            FavAlbum::create(array('id' => session('user_id'), 'id_a' => $elemid));
        } else if ($type == 'artist') {
            FavArtist::create(array('id' => session('user_id'), 'id_art' => $elemid));
        } else if ($type == 'playlist') {
            FavPlaylist::create(array('id' => session('user_id'), 'id_p' => $elemid));
        }
        return ['success' => true];
    }

    public function removeFromDB($elemid, $type) {
        if ($type == 'track') {
            FavSong::where(array('id' => session('user_id'), 'id_s' => $elemid))->delete();
        } else if ($type == 'album') {
            FavAlbum::where(array('id' => session('user_id'), 'id_a' => $elemid))->delete();
        } else if ($type == 'artist') {
            FavArtist::where(array('id' => session('user_id'), 'id_art' => $elemid))->delete();
        } else if ($type == 'playlist') {
            FavPlaylist::where(array('id' => session('user_id'), 'id_p' => $elemid))->delete();
        }
        return ['success' => true];
    }

    public function profile(){
        $user = User::find(session('user_id'));
        return view('profile')
            ->with('user', $user);
    }

    public function cercaImgur($value){
        $ris = Http::withHeaders([
            'Authorization' => 'Client-ID '.env('IMGUR_CLIENTID')
        ])->get("https://api.imgur.com/3/gallery/search?q=".$value."&q_type=jpg");
        return $ris;
    }

    public function cambiaPropic($id){
        $ris = Http::withHeaders([
            'Authorization' => 'Client-ID '.env('IMGUR_CLIENTID')
            ])->get('https://api.imgur.com/3/image/'.$id);
        $i = User::find(session('user_id'));
        $i->propic = $ris['data']['link'];
        $i->save();
    }

    public function checkFavs($elemid, $type) {
        if ($type == 'track') 
            $res = FavSong::where('id', session('user_id'))->where('id_s', $elemid)->exists();
        if ($type == 'album') 
            $res = FavAlbum::where('id', session('user_id'))->where('id_a', $elemid)->exists();
        if ($type == 'artist') 
            $res = FavArtist::where('id', session('user_id'))->where('id_art', $elemid)->exists();
        if ($type == 'playlist') 
            $res = FavPlaylist::where('id', session('user_id'))->where('id_p', $elemid)->exists();
        
        return ['id' => $elemid, 'exists' => $res];
    }

    public function cambiaDati($value, $tipo) {
        $i = User::find(session('user_id'));
        if ($tipo == 'password') {
            $bcrypt = bcrypt($value);
            $i->$tipo = $bcrypt;
            $i->save();
            return true;
        }
        $i->$tipo = $value;
        $i->save();
        return true;
    }
}
