const form = document.getElementById('login-form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = localStorage.getItem('username');

    const pass = localStorage.getItem('password');



    if(username === user && password === pass){
        window.location.href = 'file:///C:/Users/mnaye/Desktop/PROJECT/home.html';
    }
    else{
        alert('incorrect username');
    }
});