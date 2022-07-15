const cb_login = document.getElementById("span-login");
const cb_register = document.getElementById("span-register");

const loginput = document.getElementById("loginput");
const joinput = document.getElementById("joinput");
const loginBtn = document.getElementById("loginBtn")
const joinBtn = document.getElementById("joinBtn")
    function change_login() {
        cb_login.style.backgroundColor = "lightpink";
        cb_register.style.backgroundColor = "white";
        loginput.style.display = "flex"; 
        joinput.style.display = "none";
        joinBtn.style.display="none"
        loginBtn.style.display="block"
    }
    function change_register() {
        cb_login.style.backgroundColor = "white";
        cb_register.style.backgroundColor = "lightpink";
        loginput.style.display = "none";
        loginBtn.style.display="none"
        joinBtn.style.display="block"
        joinput.style.display = "flex";
    }