// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 9
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    let pswd = password.value;
    let letters = /[A-Za-z]/g; //minim una lletra
    let numbers = /[0-9]/g; //minim un número

    if(!(pswd.match(letters)&&pswd.match(numbers))){
        errorPassword.style.display = "block";
    }
}