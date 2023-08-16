const form = document.querySelector('.form-createAccount');

function saveData(){

    let registrationData = [];

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const name = form.querySelector('#iname');
        const cpf = form.querySelector('#icpf');
        const email = form.querySelector('#iemail');
        const password = form.querySelector('#ipassword');
        const confirmPassword = form.querySelector('#iconfirm-password');


        const verification = validation(cpf.value, password.value, confirmPassword.value)

        if (verification.password.error === true && verification.cpf.error === true){
            alert(`${verification.cpf.message} e ${verification.password.message}`);
        } else if (verification.password.error === true){
            alert(verification.password.message);
        } else if (verification.cpf.error === true){
            alert(verification.cpf.message);
        }else {

            const temporary = {
                name: name.value, 
                cpf: cpf.value,
                email: email.value, 
                password: password.value
            };

            if (localStorage.registrationData){

                registrationData = JSON.parse(localStorage.getItem('registrationData'));
                registrationData.push(temporary);
                localStorage.registrationData = JSON.stringify(registrationData);
                
                
            } else {

                registrationData.push(temporary);
                localStorage.setItem('registrationData', JSON.stringify(registrationData));

            }

            alert('Cadastro realizado com sucesso!');

        }
        
    })

}

saveData();


function validation(cpf, password, confirmPassword){

    const verification_cpf = validation_cpf(cpf);
    const verification_password = validation_password(password, confirmPassword);

    return {cpf: verification_cpf, password: verification_password};

}


function validation_password(password, confirmPassword){

    if (password.length < 8){
        return {error: true, message: 'A senha deve ter no mínimo 8 caracteres!'};
    } else if(password.length !== confirmPassword.length){
        return {error: true, message: 'As senhas não conferem. Tente novamente!'};
    } else{
        for (let i = 0; i<password.length; i++){
            if (password[i] !== confirmPassword[i]){
                return {error: true, message: 'As senhas não conferem. Tente novamente!'};
            }
        };
    }

    return {error: false};
}


function validation_cpf(cpf){

    const tamanho = cpf.length; 

    if (tamanho !== 11){
        return {error: true, message: 'CPF inválido!'};
    } else{
        for(let i=0; i<11; i++){
            
            if (isNaN(parseInt(cpf[i]))){

                return {error: true, message: 'CPF inválido!'};
                
            }

        }
    }

    return {error: false};
    
}

function goToLoginPage(){
    window.location.href = '../loginPage/index.html'
}
