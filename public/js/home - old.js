function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function test(json) {
    console.log(json);
    //document.querySelector('.data').innerHTML =+ json['client_id'] + json['client_secret']; 
}

//fetch("getsongs").then(fetchResponse).then(test);