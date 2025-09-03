//CONSTANTES
const displayLies = document.getElementById("displayLies");
const btn = document.getElementById("button_event");
let count = localStorage.getItem("Nombre de mensonges");

if(count == null){
    displayLies.innerText = `Nombre de mensonges : 0`
}

function addLie () {
    btn.addEventListener("click", ()=> {
        count++;
        localStorage.setItem("Nombre de mensonges", count);
        displayNumberOfLies();
    })
}
addLie();

function displayNumberOfLies(){
     displayLies.innerText = `Nombre de mensonges : ${count}`;
}
displayNumberOfLies();