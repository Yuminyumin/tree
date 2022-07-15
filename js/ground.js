const cb_login = document.getElementById("span-login");
const cb_register = document.getElementById("span-register");

const loginput = document.getElementById("loginput");
const joinpuit = document.getElementById("joinput");

    function change_login() {
        cb_login.style.backgroundColor = "lightpink";
        cb_register.style.backgroundColor = "white";
        loginput.style.display = "flex";
        joinpuit.style.display = "none";
    }
    function change_register() {
        cb_login.style.backgroundColor = "white";
        cb_register.style.backgroundColor = "lightpink";
        loginput.style.display = "none";
        joinpuit.style.display = "flex";
    }