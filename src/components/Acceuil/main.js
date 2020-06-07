//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitform);

const submitform =(e)=>{
  e.preventDefault();
}
//Get values
var firstName = getInputVal('firstname');
var lastName = getInputVal('lastname');
var email = getInputVal('email');
var password = getInputVal('password');

// function to get form values
const getInputVal =(id)=>{
  return document.getElementById(id).value;
}
