<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\FavSong;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('login', 'AccessController@mainPage');

Route::post('login', 'AccessController@accessMode');

Route::get('home', 'MainController@home');

Route::get('logout', 'AccessController@logout');

Route::get('checkUser/{user}', 'AccessController@checkUser');

Route::get('checkEmail/{email}', 'AccessController@checkemail');

Route::get('getclient', 'ApiController@getClient');

Route::get('gettoken', 'ApiController@getToken');

Route::get('getquery/{title}/{type}', 'ApiController@getQuery');

Route::get('cerca', 'ApiController@search');

Route::get('addtodb/{elemid}/{type}', 'ApiController@addToDB');

Route::get('removefromdb/{elemid}/{type}', 'ApiController@removeFromDB');

Route::get('checkfavs/{elemid}/{type}', 'ApiController@checkFavs');

Route::get('profile', 'ApiController@profile');

Route::get('profile/{value}', 'ApiController@cercaImgur');

Route::get('profile/cambia/{value}', 'ApiController@cambiaPropic');

Route::get('cambiadati/{value}/{tipo}', 'ApiController@cambiaDati');