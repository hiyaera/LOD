function login()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var useremail = localStorage.getItem('useremail');
    var userpassword = localStorage.getItem('userpassword');

    if (email == useremail && password == userpassword)
    {
        window.location.href = "index.html";
        alert("Redirecting to LockTheDeal")

    } else
    {
        alert("Email and Password doesn't match")
    }
}