function r_fav(event){
    let i = event.currentTarget.parentNode.parentNode;
    console.log(i);
    i.classList.add('hidden');
    let tipo = i.getAttribute('name');
    let value = i.querySelector('#elemid').getAttribute('value');
    console.log(value);
    console.log(tipo);
    fetch('removefromdb/' + value + '/' + tipo).then(onPromise);
}


function onPromise(promise){
    return promise.json();
}

const fav_buttons = document.querySelectorAll('#favbutton');
for(button of fav_buttons){
    button.addEventListener('click', r_fav);
}