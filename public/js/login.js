function signUp(modal) {
    modal.preventDefault();
    const blur = document.querySelector('#blur');
    const container = document.querySelector('#signup.hidden');
    blur.classList.remove('hidden');
    container.classList.replace('hidden', 'container');
}

function logIn(rmodal) {
    rmodal.preventDefault();
    const blur = document.querySelector('#blur');
    const container = document.querySelector('#signup.container');
    blur.classList.add('hidden');
    container.classList.replace('container', 'hidden');
}

const modal = document.querySelector('#signuplink');
modal.addEventListener('click', signUp);

const rmodal = document.querySelector('#loginlink');
rmodal.addEventListener('click', logIn);

function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function checkUserJson(json) {
    console.log(json);
    if(json.exists == true) {
        document.querySelector('#user_error').classList.replace('hidden', 'error');
    } else {
        document.querySelector('#user_error').classList.replace('error', 'hidden');
    }
}

function checkEmailJson(json) {
    console.log(json);
    if(json.exists == true) {
        document.querySelector('#email_error').classList.replace('hidden', 'error');
    } else {
        document.querySelector('#email_error').classList.replace('error', 'hidden');
    }
}

function checkUsername(event) {
    const input = document.querySelector('#s_usr');
    if(!/^[a-zA-Z0-9_]{1,15}$/.test(input.value)) {
        formStatus.username = false;
    } else {
        formStatus.username = true;
    }
    console.log(formStatus.username);
    fetch("checkUser/"+input.value).then(fetchResponse).then(checkUserJson).then(checkData);
}

function checkEmail(event) {
    const emailInput = document.querySelector('#s_mail');
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(emailInput.value).toLowerCase())) {
        formStatus.email = false;
    } else {
        formStatus.email = true;
    }
    console.log(formStatus.email);
    fetch("checkEmail/"+emailInput.value).then(fetchResponse).then(checkEmailJson).then(checkData);
}

function checkPassword(event) {
    const passwordInput = document.querySelector('#s_pwd');
    if (formStatus.password = passwordInput.value.length >= 8) {
        formStatus.password = true;
    } else {
        formStatus.password = false;
    }
    console.log(formStatus.password);
    checkData();
}

function checkConfirmPass(event) {
    const confirmPasswordInput = document.querySelector('#s_cpwd');
    if (formStatus.confirm_pwd = confirmPasswordInput.value === document.querySelector('#s_pwd').value) {
        formStatus.confirm_pwd = true;
    } else {
        formStatus.confirm_pwd = false;
    }
    console.log(formStatus.confirm_pwd);
    checkData();
}

function checkData(event) {
    if (formStatus['username'] && formStatus['email'] && formStatus['password'] && formStatus['confirm_pwd']) {
        document.querySelector('#s_submit').disabled = false;
    } else {
        document.querySelector('#s_submit').disabled = true;
    }
}

const formStatus = {};

document.querySelector('#s_usr').addEventListener('blur', checkUsername);
document.querySelector('#s_mail').addEventListener('blur', checkEmail);
document.querySelector('#s_pwd').addEventListener('blur', checkPassword);
document.querySelector('#s_cpwd').addEventListener('blur', checkConfirmPass);


//const signsub = document.querySelector('#s_submit');
//signsub.addEventListener('click', checkData);

