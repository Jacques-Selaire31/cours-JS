import { marked } from 'marked';
import DOMPurify from 'dompurify';
// Lessons Event Clavier
const inputTextElement = document.getElementById('input-text');
const renderKeyElement = document.getElementById('renderKey');
// console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // console.log(eventDuclavier);
    console.log('eventDuclavier.key', eventDuclavier.key);
    renderKeyElement.innerHTML = marked.parse(inputTextElement.value);
    // renderKeyElement.textContent += eventDuclavier.key;
});

console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.VITE_DB_PASSWORD) // undefined


const monSite = document.getElementById("mon_site");
console.log(monSite);
let jeffText = "Texte dynamique pour Jeff";
monSite.innerText = jeffText;

const footerYear = document.getElementById("copyright-year");
let currentYear = new Date().getFullYear();
console.log(currentYear);
footerYear.innerText = `Copyright © ${currentYear} - Tous droits réservés par ${monSite}`;

const titleClic = document.getElementById("title-clic");
const counter = document.getElementById("counter");
console.log(titleClic);
let oldTitle = "Clique ici 😉";
let newTitle = "---💃😎💃---";

// -------------PREMIERE MANIERE-----------------

// titleClic.addEventListener("click", ()=>{
//     titleClic.innerText = newTitle;
// })
// // titleClic.addEventListener("click", ()=>{
// //     titleClic.innerText = oldTitle;
// // })

// -------------DEUXEME MANIERE-------------------

// function toggleTitle() {
//     let count = 0;
//     titleClic.addEventListener("click", () => {
//         count++;
//         counter.innerText = `Compteur = ${count}`;
//         if (count % 2 == 0) {
//             titleClic.innerText = oldTitle;
//         } else titleClic.innerText = newTitle;
//     })
// }

function toggleTitle() {
    let count = 0;
    titleClic.addEventListener("click", () => {
        count++;
        counter.innerText = `Compteur = ${count}`;
        switch (true) {
            case count % 2 == 0:
                titleClic.innerText = oldTitle;
                break;
            case count % 2 !== 0:
                titleClic.innerText = newTitle;
                break;
        }
    })
}
toggleTitle();

// Lessons Event Clavier
//const inputTextElement = document.getElementById('input-text');
console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (event) => {
    console.log(event);
    console.log('event.key', event.key);
});

const btn = document.getElementById("button_event");
const textArea = document.getElementById("input-text");

// function disabledButtonByKeyUp() {
//     let count = 0;
//     textArea.addEventListener("keyup", () => {
//         count++;
//         console.log(count);
//         if (count > 5) {
//             btn.disabled = true;
//             btn.innerText = "Je suis désactivé 😑";
//         }
//     })
// }

// function disabledButtonByKeyUp() {
//     textArea.addEventListener("keyup", () => {
//             let countKey = textArea.value.length;
//     console.log(countKey);
//         if (countKey > 5) {
//             btn.disabled = true;
//             btn.innerText = "Je suis désactivé 😑";
//         } else {
//             btn.disabled = false;
//             btn.innerText = "Je suis activé 😊";
//         }
//     })
// }

function disabledButtonByKeyUp() {
    textArea.addEventListener("keyup", () => {
        let countKey = textArea.value.length;
        console.log(countKey);
        btn.disabled = countKey > 5;
        btn.innerText = countKey > 5 ? "Je suis désactivé 😑" : "Je suis activé 😊";
    })
}
disabledButtonByKeyUp();

let monLocalStorage = localStorage;
textArea.value = localStorage.getItem("monSuperTexte");

function textAreaToLocalStorage() {
    textArea.addEventListener("keyup", () => {
        let txt = textArea.value;
        localStorage.setItem("monSuperTexte", txt);
    })
}

        // if (savedTxt != null) {
        //     window.addEventListener("load", () => {
        //         textArea.value = savedTxt;
        //     })
        // }
textAreaToLocalStorage();