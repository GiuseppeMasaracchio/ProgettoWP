function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function displayQuery(json) {
    console.log(json);
}

function queryResJson(json) {
    console.log(json);
    let ris = document.querySelector('#resultsbox');
    let type = document.querySelector('#type').value;
    ris.innerHTML = '';
    if (type == "track") {
        fillTracks(json);
    } else if (type == "artist") {
        fillArtists(json);
    } else if (type == "album") {
        fillAlbums(json);
    } else if (type == "playlist") {
        fillPlaylists(json);
    }
    let favbutton = document.querySelectorAll('#favbutton');
    for (fav of favbutton) {
        fav.addEventListener('click', onFav);
    }
    checkFavs();
}

function fillTracks(json) {
    for (track of json.tracks.items) {
        let resultsbox = document.querySelector('#resultsbox');
        let elembox = document.createElement('div');
        elembox.setAttribute('id', 'elembox');
        resultsbox.append(elembox);
        let box_cover = document.createElement('div');
        box_cover.setAttribute('id', 'box_cover');
        let elemid = document.createElement('a');
        elemid.setAttribute('id', 'elemid');
        elemid.setAttribute('value', track.id);
        let cover = document.createElement('img');
        cover.setAttribute('id', 'cover');
        if (track.album.images[0] != null) {
            cover.setAttribute('src', track.album.images[0].url);
        } else {
            cover.setAttribute('src', placeholder);
        }
        let toptext = document.createElement('a');
        toptext.setAttribute('id', 'toptext');
        toptext.href = track.external_urls.spotify;
        let bottext = document.createElement('div');
        bottext.setAttribute('id', 'bottext');
        let spantop = document.createElement('span');
        spantop.classList.add('track-item');
        spantop.setAttribute('id', 'spantop');
        let spanbot = document.createElement('span');
        spanbot.classList.add('track-item');
        spanbot.setAttribute('id', 'spanbot');
        spantop.innerHTML = track.name;
        spanbot.innerHTML = track.artists[0].name;
        let buttonbox = document.createElement('div');
        buttonbox.setAttribute('id', 'buttonbox');
        let img = document.createElement('img');
        img.setAttribute('name', 'add');
        img.classList.add('button');
        img.setAttribute('id', 'favbutton');
        img.setAttribute('src', 'http:/example-app/public/img/add.png');
        elembox.appendChild(buttonbox);
        buttonbox.appendChild(img);
        elembox.appendChild(box_cover);
        elembox.appendChild(toptext);
        elembox.appendChild(bottext);
        box_cover.appendChild(elemid);
        box_cover.appendChild(cover);
        toptext.appendChild(spantop);
        bottext.appendChild(spanbot);
    }
}

function fillArtists(json) {
    for (artist of json.artists.items) {
        let resultsbox = document.querySelector('#resultsbox');
        let elembox = document.createElement('div');
        elembox.setAttribute('id', 'elembox');
        resultsbox.append(elembox);
        let box_cover = document.createElement('div');
        box_cover.setAttribute('id', 'box_cover');
        let elemid = document.createElement('a');
        elemid.setAttribute('id', 'elemid');
        elemid.setAttribute('value', artist.id);
        let cover = document.createElement('img');
        cover.setAttribute('id', 'cover');
        if (artist.images[0] != null) {
            cover.setAttribute('src', artist.images[0].url);
        } else {
            cover.setAttribute('src', placeholder);
        }
        let toptext = document.createElement('a');
        toptext.href = artist.external_urls.spotify;
        toptext.setAttribute('id', 'toptext');
        let bottext = document.createElement('div');
        bottext.setAttribute('id', 'bottext');
        let spantop = document.createElement('span');
        spantop.classList.add('track-item');
        spantop.setAttribute('id', 'spantop');
        let spanbot = document.createElement('span');
        spanbot.classList.add('track-item');
        spanbot.setAttribute('id', 'spanbot');
        spantop.innerHTML = artist.name;
        spanbot.innerHTML = artist.genres[0];
        let buttonbox = document.createElement('div');
        buttonbox.setAttribute('id', 'buttonbox');
        let img = document.createElement('img');
        img.setAttribute('name', 'add');
        img.classList.add('button');
        img.setAttribute('id', 'favbutton');
        img.setAttribute('src', 'http:/example-app/public/img/add.png');
        elembox.appendChild(buttonbox);
        buttonbox.appendChild(img);
        elembox.appendChild(box_cover);
        elembox.appendChild(toptext);
        elembox.appendChild(bottext);
        box_cover.appendChild(elemid);
        box_cover.appendChild(cover);
        toptext.appendChild(spantop);
        bottext.appendChild(spanbot);
    }
}

function fillAlbums(json) {
    for (album of json.albums.items) {
        let resultsbox = document.querySelector('#resultsbox');
        let elembox = document.createElement('div');
        elembox.setAttribute('id', 'elembox');
        resultsbox.append(elembox);
        let box_cover = document.createElement('div');
        box_cover.setAttribute('id', 'box_cover');
        let elemid = document.createElement('a');
        elemid.setAttribute('id', 'elemid');
        elemid.setAttribute('value', album.id);
        let cover = document.createElement('img');
        cover.setAttribute('id', 'cover');
        if (album.images[0] != null) {
            cover.setAttribute('src', album.images[0].url);
        } else {
            cover.setAttribute('src', placeholder);
        }
        let toptext = document.createElement('a');
        toptext.href = album.external_urls.spotify;
        toptext.setAttribute('id', 'toptext');
        let bottext = document.createElement('div');
        bottext.setAttribute('id', 'bottext');
        let spantop = document.createElement('span');
        spantop.classList.add('track-item');
        spantop.setAttribute('id', 'spantop');
        let spanbot = document.createElement('span');
        spanbot.classList.add('track-item');
        spanbot.setAttribute('id', 'spanbot');
        spantop.innerHTML = album.name;
        spanbot.innerHTML = album.artists[0].name;
        let buttonbox = document.createElement('div');
        buttonbox.setAttribute('id', 'buttonbox');
        let img = document.createElement('img');
        img.setAttribute('name', 'add');
        img.classList.add('button');
        img.setAttribute('id', 'favbutton');
        img.setAttribute('src', 'http:/example-app/public/img/add.png');
        elembox.appendChild(buttonbox);
        buttonbox.appendChild(img);
        elembox.appendChild(box_cover);
        elembox.appendChild(toptext);
        elembox.appendChild(bottext);
        box_cover.appendChild(elemid);
        box_cover.appendChild(cover);
        toptext.appendChild(spantop);
        bottext.appendChild(spanbot);
    }
}

function fillPlaylists(json) {
    for (playlist of json.playlists.items) {
        let resultsbox = document.querySelector('#resultsbox');
        let elembox = document.createElement('div');
        elembox.setAttribute('id', 'elembox');
        resultsbox.append(elembox);
        let box_cover = document.createElement('div');
        box_cover.setAttribute('id', 'box_cover');
        let elemid = document.createElement('a');
        elemid.setAttribute('id', 'elemid');
        elemid.setAttribute('value', playlist.id);
        let cover = document.createElement('img');
        cover.setAttribute('id', 'cover');
        if (playlist.images[0] != null) {
            cover.setAttribute('src', playlist.images[0].url);
        } else {
            cover.setAttribute('src', placeholder);
        }
        let toptext = document.createElement('a');
        toptext.href = playlist.external_urls.spotify;
        toptext.setAttribute('id', 'toptext');
        let bottext = document.createElement('div');
        bottext.setAttribute('id', 'bottext');
        let spantop = document.createElement('span');
        spantop.classList.add('track-item');
        spantop.setAttribute('id', 'spantop');
        let spanbot = document.createElement('span');
        spanbot.classList.add('track-item');
        spanbot.setAttribute('id', 'spanbot');
        spantop.innerHTML = playlist.name;
        spanbot.innerHTML = playlist.owner.display_name;
        let buttonbox = document.createElement('div');
        buttonbox.setAttribute('id', 'buttonbox');
        let img = document.createElement('img');
        img.setAttribute('name', 'add');
        img.classList.add('button');
        img.setAttribute('id', 'favbutton');
        img.setAttribute('src', 'http:/example-app/public/img/add.png');
        elembox.appendChild(buttonbox);
        buttonbox.appendChild(img);
        elembox.appendChild(box_cover);
        elembox.appendChild(toptext);
        elembox.appendChild(bottext);
        box_cover.appendChild(elemid);
        box_cover.appendChild(cover);
        toptext.appendChild(spantop);
        bottext.appendChild(spanbot);
    }
}

function fetchData(submit) {
    submit.preventDefault();
    const title = document.querySelector('#search').value;
    const type = document.querySelector('#type').value;
    console.log(title);
    console.log(type);
    fetch('getquery/' + encodeURIComponent(title) + '/' + type).then(fetchResponse).then(queryResJson);
}

function checkFavs() {
    const favs = document.querySelectorAll('#elemid');
    const type = document.querySelector('#type').value;
    for (fav of favs) {
        const elemid = fav.getAttribute('value');
        fetch('checkfavs/' + elemid + '/' + type).then(fetchResponse).then(checkFavs_);
    }
}

function checkFavs_(json) {
    const favs = document.querySelectorAll('#elemid');
    const type = document.querySelector('#type').value;
    for (fav of favs) {
        if (fav.getAttribute('value') == json.id) {
            if (json.exists == true) {
                fav.parentNode.parentNode.querySelector('#favbutton').setAttribute("src", "http:/example-app/public/img/remove.png");
                fav.parentNode.parentNode.querySelector('#favbutton').setAttribute("name", "remove");
            } else {
                fav.parentNode.parentNode.querySelector('#favbutton').setAttribute("src", "http:/example-app/public/img/add.png");
                fav.parentNode.parentNode.querySelector('#favbutton').setAttribute("name", "add");
            }
        }
    }
}

function addToDB(elemid, type) {
    fetch('addtodb/' + elemid + '/' + type).then(fetchResponse);
}

function removeFromDB(elemid, type) {
    fetch('removefromdb/' + elemid + '/' + type).then(fetchResponse);
}


function onFav(event) {
    const type = document.querySelector('#type').value;
    const elembox = event.currentTarget.parentNode.parentNode;
    const favbutton = elembox.querySelector('#favbutton');
    const elemid = elembox.querySelector('#elemid').getAttribute('value');
    if (favbutton.name == 'add') {
        favbutton.setAttribute("src", "http:/example-app/public/img/remove.png");
        favbutton.setAttribute("name", "remove");
        console.log(elemid);
        //fetch add to database
        addToDB(elemid, type);
    } else {
        favbutton.setAttribute("src", "http:/example-app/public/img/add.png");
        favbutton.setAttribute("name", "add");
        console.log(elemid);
        //fetch remove from database
        removeFromDB(elemid, type);
    }
}

const placeholder = 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png';

const submit = document.querySelector('#submit');
submit.addEventListener('click', fetchData);
