const form = document.querySelector('.form-login');

function goToCreateAccountPage(){
    window.location.href = 'registerPage/index.html';
}

function checkData(){

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = form.querySelector('#iemail').value;
        const password = form.querySelector('#ipassword').value;

        const validation = verification(email, password);

        if (validation.error === true){
            alert(validation.message);
        } else{
            window.location.href = 'pageLogged/index.html';
        }

    })
}

checkData();

function verification(email, password){

    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    let email_test = false;
    let password_test = false;

    for (let i = 0; i < registrationData.length; i++){

        if (registrationData[i].email === email){
            email_test = true;
        }

        if (registrationData[i].password === password){
            password_test = true;
        }
    }

    if (email_test === true){

        if (password_test === true){
            return {error: false}
        }else{
            return {error: true, message: 'Senha inválida!'}
        }

    }else{
        return {error: true, message: 'Email inválido!'}
    }

}