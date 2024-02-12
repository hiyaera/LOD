function signup(){

    var email1 = document.getElementById('email').value;
    var password1 = document.getElementById('password').value;

    localStorage.setItem('useremail', email1);
    localStorage.setItem('userpassword', password1);

    alert("SignUp success!", window.location.href="index.html");


}

