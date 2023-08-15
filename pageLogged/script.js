const list = document.querySelector('#userList');

let registrationData = [];

registrationData = JSON.parse(localStorage.getItem('registrationData'));

for (let i = 0; i < registrationData.length; i++){

    list.innerHTML += `<p>Nome: ${registrationData[i].name}, CPF: ${registrationData[i].cpf}</p>`;

}

