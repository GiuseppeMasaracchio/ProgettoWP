create database spotihelper;
use spotihelper;
create table users(id int auto_increment primary key, username varchar(20), password varchar(255), email varchar(63), propic varchar(1023) default "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png", created_at timestamp default current_timestamp, updated_at timestamp DEFAULT current_timestamp);
create table fav_songs(id int, id_s varchar(255), created_at timestamp default current_timestamp, updated_at timestamp DEFAULT current_timestamp);
create table fav_albums(id int, id_a varchar(255), created_at timestamp default current_timestamp, updated_at timestamp DEFAULT current_timestamp);
create table fav_artists(id int, id_art varchar(255), created_at timestamp default current_timestamp, updated_at timestamp DEFAULT current_timestamp);
create table fav_playlists(id int, id_p varchar(255), created_at timestamp default current_timestamp, updated_at timestamp DEFAULT current_timestamp);

show tables from spotihelper;

select * from users;
select * from fav_songs;
select * from fav_albums;
select * from fav_artists;
select * from fav_playlists;
