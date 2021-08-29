<?php

use Illuminate\Routing\Controller as BaseController;
include ('ApiController.php');

class MainController extends BaseController {
    
    public function home() {
        $songs = $this->caricaBrani();
        $albums = $this->caricaAlbum();
        $artists = $this->caricaArtisti();
        $playlists = $this->caricaPlaylist();
        $user = User::find(session('user_id'));
        return view('home')
            ->with('artists', $artists)
            ->with('albums', $albums)
            ->with('playlists', $playlists)
            ->with('songs', $songs)
            ->with('user', $user);
    }

    public function profile(){
        $user = User::find(session('user_id'));
        return view('profile')
            ->with('user', $user);
    }
    
    public function caricaBrani(){
        $controller = new ApiController();
        $token = $controller->getToken();
        $tracks = FavSong::where('id', session('user_id'))->get()->toArray();
        foreach ($tracks as $id) {
            $res[] = http::withHeaders([
                'Authorization' => 'Bearer '.$token,
            ])->get('https://api.spotify.com/v1/tracks/'.$id['id_s']);
        }
        if(!isset($res)) return '';
        return $res;
    }

    public function caricaAlbum(){
        $controller = new ApiController();
        $token = $controller->getToken();
        //if(!FavAlbum::where('id', session('user_id'))->exists()) return null;
        $array = FavAlbum::where('id', session('user_id'))->get()->toArray();
        foreach($array as $id){
            $res[] = http::withHeaders([
                'Authorization' => 'Bearer '.$token,
            ])->get('https://api.spotify.com/v1/albums/'.$id['id_a']);
        }
        if(!isset($res)) return '';
        return $res;
    }

    public function caricaArtisti(){
        $controller = new ApiController();
        $token = $controller->getToken();
        //if(!FavArtist::where('id', session('user_id'))->exists()) return null;
        $array = FavArtist::where('id', session('user_id'))->get()->toArray();
        foreach($array as $id){
            $res[] = http::withHeaders([
                'Authorization' => 'Bearer '.$token,
            ])->get('https://api.spotify.com/v1/artists/'.$id['id_art']);
        }
        if(!isset($res)) return '';
        return $res;
    }

    public function caricaPlaylist(){
        $controller = new ApiController();
        $token = $controller->getToken();
        //if(!FavPlaylist::where('id', session('user_id'))->exists()) return null;
        $array = FavPlaylist::where('id', session('user_id'))->get()->toArray();
        foreach($array as $id){
            $res[] = http::withHeaders([
                'Authorization' => 'Bearer '.$token,
            ])->get('https://api.spotify.com/v1/playlists/'.$id['id_p']);
        }
        if(!isset($res)) return '';
        return $res;
    }
}
