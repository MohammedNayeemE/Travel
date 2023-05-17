const sign = document.getElementById('sign-form');

sign.addEventListener('submit',function(event){
    event.preventDefault();
    const user = document.getElementById("usernames").value;
    const pass = document.getElementById("passwords").value;
    const cpass = document.getElementById("cpassword").value;
    var check = true;
    if(pass != cpass){
        alert("pass and cpass should be equal");
        check = false;

    }
    for(const char of user){
        if(char == '@'){
            alert("invalid username");
            check = false;
        }
    }
    if(check){
    localStorage.setItem('username',user);
    localStorage.setItem('password',pass);
    window.location.href="login.html";
    }
    else{
        alert("enter the details correctly");
    }

    

})