let isValidUsername = false;
let isValidMobile = false;
let isValidEmail = false;
let isValidSchoolname = false;
let isValidPassword = false;

function validateusername(){
  let username=document.getElementById('username').value;

  var check = /^([A-Za-z]+(?: [A-Za-z]+)*)$/;
  if(check.test(username)){
    document.getElementById('resulta').innerHTML='USERNAME VALID';
    document.getElementById('resulta').style.color = 'green';
    isValidUsername = true;
  }
  else{
    document.getElementById('resulta').innerHTML='ONLY A-Z a-z ALLOWED';
    document.getElementById('resulta').style.color = 'red';
    isValidUsername = false;
  }
}
function validatemobile(){
  let mobile=document.getElementById('mobile').value;

  var check =/^91\d{10}$/;
  if(check.test(mobile)){
    document.getElementById('resultb').innerHTML='MOBILE NUMBER IS VALID';
    document.getElementById('resultb').style.color = 'green';
    isValidMobile = true;
  }
  else{
    document.getElementById('resultb').innerHTML='MOBILE NUMBER SHOULD START WITH 91 AND HAVE 10 DIGITS ONLY';
    document.getElementById('resultb').style.color = 'red';
    isValidMobile = false;
  }
}
function validateemail(){
  let email=document.getElementById('email').value;

  //var check =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+.[-a-zA-Z0-9]+$/;
  if(check.test(email)){
    document.getElementById('resultc').innerHTML='EMAIL IS VALID';
    document.getElementById('resultc').style.color = 'green';
    isValidEmail = true;
  }
  else{
    document.getElementById('resultc').innerHTML='INVALID EMAIL';
    document.getElementById('resultc').style.color = 'red';
    isValidEmail = false;
  }
}
function validateschoolname() {
let schoolname = document.getElementById('school').value;
//var check = /^([A-Za-z]+(?: [A-Za-z]+)*)$/;
var check = /^\s*([A-Za-z]+(?: [A-Za-z]+)*)\s*$/;
    if (check.test(schoolname)) {
document.getElementById('resultd').innerHTML = 'SCHOOL NAME IS VALID';
document.getElementById('resultd').style.color = 'green';
isValidSchoolname = true;
} else {
document.getElementById('resultd').innerHTML = 'INVALID SCHOOL NAME';
document.getElementById('resultd').style.color = 'red';
isValidSchoolname = false;
}
}
function validatepassword() {
let password = document.getElementById('password').value;

var check = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?])[^\s]{8,25}$/;
if (check.test(password)) {
document.getElementById('resulte').innerHTML = 'PASSWORD IS VALID';
document.getElementById('resulte').style.color = 'green';
isValidPassword = true;
} else {
document.getElementById('resulte').innerHTML = 'PASSWORD MUST INCLUDE A-Z,a-z,0-9,CHARACTER AND LENGTH BETWEEN 8-25';
document.getElementById('resulte').style.color = 'red';
isValidPassword = false;
}
}
function validateForm() {
    validateusername();
    validatemobile();
    validateemail();
    validateschoolname();
    validatepassword();
  
    if (isValidUsername && isValidMobile && isValidEmail && isValidSchoolname && isValidPassword) {
      success();
    } else {
      alert("Form is not valid!");
      return false;
    }
  }
  function success(){
    alert( "Form is Valid. You will now be redirected to Next Page");
  }
  window.onload = function() {
    document.getElementById('username').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('email').value = '';
    document.getElementById('school').value = '';
    document.getElementById('password').value = '';
  };
