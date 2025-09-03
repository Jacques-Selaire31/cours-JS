//CONSTANTES
const displayLies = document.getElementById("displayLies");
const btn = document.getElementById("button_event");
let count = 0;

function addLie () {
    btn.addEventListener("click", ()=> {
        count++;
        //displayLies.innerText = `Nombre de mensonges : ${count}`;
        localStorage.setItem("Nombre de mensonges", count);
    })
}
addLie();

function displayNumberOfLies(){
    let lies = localStorage.getItem("Nombre de mensonges");
     displayLies.innerText = `Nombre de mensonges : ${lies}`;
}
displayNumberOfLies();