var registerButton = document.getElementById("register-btn");
registerButton.addEventListener("click", validate, false);

var loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", check, false);

var registerName = document.getElementById("register-login");
var pw = document.getElementById("register-pw");

function userInfo(login, password) {
var yourLogin = login;
var yourPassword = password;
window.open("success.html");
localStorage.setItem("actualLogin", yourLogin);
localStorage.setItem("actualPassword", yourPassword);
};

function validate() {
var storedLogin = JSON.parse(localStorage.getItem("allEntries"));
if (storedLogin !== null) {
  for (i=0; i < storedLogin.length; i++){
    if (registerName.value == storedLogin[i].login){
      alert("Istnieje już użytkownik z takim loginem");
      return;
    }
  }
}

  if (registerName.value.length >= 6 && pw.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
    alert("Konto pomyślnielnie utworzono");
    store();
  }

  else {
    alert("Podany login lub hasło nie spełnia wymagań");
  }

};

function store() {
var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
if(existingEntries == null) existingEntries = [];
var name = registerName.value;
var pass = pw.value;

var entry = {
  login: name,
  password: pass
};

localStorage.setItem("entry", JSON.stringify(entry));
existingEntries.push(entry);
localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};

function check() {
var storedLogin = JSON.parse(localStorage.getItem("allEntries"));
var userName = document.getElementById("login").value;
var userPw = document.getElementById("password").value;
for (i=0; i < storedLogin.length; i++) {
  if (userName == storedLogin[i].login && userPw == storedLogin[i].password) {
    alert("Poprawnie zalogowano");
    userInfo(storedLogin[i].login, storedLogin[i].password);
    return;
  }
}
alert("Wprowadzony login lub hasło jest nieprawidłowe");
};

/*
if (userName.value == storedLogin && userPw.value == storedPw)
{
  alert("Poprawnie zalogowano");
  window.open("success.html");
}

else
{
  alert ("Wpisany login lub hasło jest nieprawidłowe");
}
*/
