function cercaPropic(cerca){
    cerca.preventDefault();
    let nome = document.querySelector('#barra').value;
    fetch('profile/' + nome).then(onResponse).then(onJson);
}

function onResponse(promise){
    console.log(promise);
    return promise.json();
}

function onJson(json){
    console.log(json);
    let ris = document.querySelector('#resultsbox');
    ris.innerHTML = "";

    for(elem of json.data){
        if(elem.images[0].type !== 'video/mp4'){
            
            let block = document.createElement('div');
            block.id = 'elembox';
            let img = document.createElement('img');
            img.id = 'cover';
            img.src = elem.images[0].link;
            img.addEventListener('click', cambiaPic);
            let img_id = document.createElement('a');
            img_id.classList.add('hidden');
            img_id.value = elem.images[0].id;
            block.appendChild(img);
            block.appendChild(img_id);
            ris.appendChild(block);
        }
    }
}

function cambiaPic(event){
    console.log(event.currentTarget.src);
    fetch('profile/cambia/'+event.currentTarget.parentNode.querySelector('a').value);
    document.querySelector('#propic').src = event.currentTarget.src;
}


const cerca = document.querySelector('#submit').addEventListener('click', cercaPropic);

function showChangePic(selpic) {
    selpic.preventDefault();
    const selector = document.querySelector('#selector');
    selector.classList.add('hidden');
    const changepic = document.querySelector('#changepic');
    changepic.classList.remove('hidden');
}

const selpic = document.querySelector('#selpic');
selpic.addEventListener('click', showChangePic);

function showChangeUser(selusr) {
    selusr.preventDefault();
    const selector = document.querySelector('#selector');
    selector.classList.add('hidden');
    const changeuser = document.querySelector('#changeuser');
    changeuser.classList.remove('hidden');
}

const selusr = document.querySelector('#selusr');
selusr.addEventListener('click', showChangeUser);

function showChangePass(selpass) {
    selpass.preventDefault();
    const selector = document.querySelector('#selector');
    selector.classList.add('hidden');
    const changepass = document.querySelector('#changepass');
    changepass.classList.remove('hidden');
}

const selpass = document.querySelector('#selpass');
selpass.addEventListener('click', showChangePass);

function showChangeEmail(selemail) {
    selemail.preventDefault();
    const selector = document.querySelector('#selector');
    selector.classList.add('hidden');
    const changemail = document.querySelector('#changemail');
    changemail.classList.remove('hidden');
}

const selemail = document.querySelector('#selemail');
selemail.addEventListener('click', showChangeEmail);

function cambiaUsername(submit_usr) {
    //submit_usr.preventDefault();
    const userbar = document.querySelector('#userbar');
    fetch('cambiadati/' + userbar.value + '/username').then(onResponse);
}

function cambiaPassword(submit_pass) {
    //submit_pass.preventDefault();
    const passbar = document.querySelector('#passbar');
    fetch('cambiadati/' + passbar.value + '/password').then(onResponse);
}

function cambiaEmail(submit_mail) {
    //submit_mail.preventDefault();
    const emailbar = document.querySelector('#emailbar');
    fetch('cambiadati/' + emailbar.value + '/email').then(onResponse);
}

const submit_usr = document.querySelector('#submit_usr');
submit_usr.addEventListener('click', cambiaUsername);

const submit_pass = document.querySelector('#submit_pass');
submit_pass.addEventListener('click', cambiaPassword);

const submit_mail = document.querySelector('#submit_mail');
submit_mail.addEventListener('click', cambiaEmail);