"use strict"




window.onload = function () {

const formContainer = document.getElementById('loginForm');
const contentContainer = document.getElementById('container');
const errorMsg = document.getElementById('errorMsg');
const registerButton = document.getElementById('registerButton');
const registerForm = document.getElementById('registerForm');
const submitRegisterButton = document.getElementById('submitRegister');
const registerErrorMsg = document.getElementById('registerErrorMsg');
const pass = "admin";
const user = "admin";
let registeredUsers = [[pass,user]];
let isLogged = false;



formContainer.onsubmit = function(event) {

    event.preventDefault();

    const formUsername = document.getElementById('username');
    const formPassword = document.getElementById('password');
    let userNameExists = false;
    let passCounter = 0 ;

        
        debugger;

        for (let i = 0; i < registeredUsers.length; i++) {

            if (formUsername.value == registeredUsers[i][0]) {
                
                userNameExists = true;
                passCounter = i;
                break;
            } 
            
        }


        if ((formUsername.value.length > 3) && (userNameExists) && (formPassword.value == registeredUsers[passCounter][1])) {
            isLogged = true;
            formContainer.style.display = 'none';
            contentContainer.style.display = 'flex';
            errorMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'block';
            formUsername.value = '';
            formPassword.value = '';
        }
   

    

    // if (isLogged == true) {
    //     formContainer.style.display = 'none';
    //     contentContainer.style.display = 'block';
    // }



}

registerButton.onclick = function(event) {

    event.preventDefault();

    formContainer.style.display = 'none';
    registerForm.style.display = 'flex';
    
}

submitRegisterButton.onclick = function(event) {

    event.preventDefault();

    

    const newUser = document.getElementById('newUser');
    const newPassword = document.getElementById('newPassword');

    let userExist = false;

    for (let i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i][0] === newUser.value) {
            userExist = true;
            break;
        }
        
    }

  

    if ( !userExist && newUser.value.length > 3) {
        registeredUsers.push([newUser.value,newPassword.value]);
        registerForm.style.display = 'none';
        formContainer.style.display = 'flex';
        newUser.value = '';
        newPassword.value = '';

    } else {
        newUser.value = '';
        newPassword.value = '';
        registerErrorMsg.style.display = 'block';
    }

}

}