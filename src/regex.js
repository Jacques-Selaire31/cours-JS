const login = document.getElementById("exampleInputEmail1");
const emailHelp = document.getElementById("emailHelp");
const password = document.getElementById("exampleInputPassword1");
const passHelpDeci = document.getElementById("passHelpDeci");
const passHelpSpec = document.getElementById("passHelpSpec");
console.log(login);
console.log(emailHelp);
console.log(password);

const regexLogin = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

function testLogin() {
    login.addEventListener("keyup", () => {
        let contentLogin = login.value;
        console.log(contentLogin);
        let test = regexLogin.test(contentLogin);
        if (test !== true) {
            login.style.backgroundColor = "red";
            emailHelp.innerText = "l'email est incorrect";
        } else if (test === true) {
            login.style.backgroundColor = "green";
            emailHelp.innerText = "L'email est correct";
        }
    })
}
testLogin();

function testPassword() {
    password.addEventListener("keyup", () => {
        let contentPassword = password.value;
        console.log(contentPassword);
        let testDecimal = charDecimal.test(contentPassword);
        let testSpecial = charSpecial.test(contentPassword);
        if (testDecimal !== true) {
            password.style.backgroundColor = "red";
            passHelpDeci.innerText = "Il manque un chiffre";
        } else passHelpDeci.innerText = "";
        if (testSpecial !== true) {
            password.style.backgroundColor = "red";
            passHelpSpec.innerText = "Il manque un charactère spécial";
        } else passHelpSpec.innerText = "";
        if (testDecimal === true && testSpecial === true) {
            password.style.backgroundColor = "green";
        }
    })
}
testPassword();
