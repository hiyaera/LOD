

function signup(){

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

localStorage.setItem("User-name",name)
localStorage.setItem("User-email",email)
localStorage.setItem("User-password",password)


}


function login() {
    alert("want to login?");
  }

