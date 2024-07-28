const accountsAPI = "https://huannh1.github.io/test/accounts.json";
const register = document.getElementById("registerButton");
const login = document.getElementById("loginButton");

register.onclick = function(){
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    if(username.lenght<3||password.length<3){
        alert("Username or Password must have more than 3 characters!")
        return;
    }
    let content = JSON.stringify({
        "username": username,
        "password": password
    });
    fetch(accountsAPI,{
        method: "POST",
        body: content,
    })
}

login.onclick = function(){
    var isLogged = false;
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    fetch(accountsAPI)
    .then((response)=>response.json())
    .then((accounts)=>{
        let correct = accounts.some((account)=>{
            if(account.username==username&&account.password==password){
                return true;
            }
            return false;
        });
        if(correct){
            isLogged = true;
            document.location.href = "logged.html";
        }
    })

}
