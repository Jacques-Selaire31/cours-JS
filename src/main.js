console.log('Hello World from main.js')

import { renderTimeline } from './services/timelineService.js';
import { WelcomeService } from './services/welcoleService.js';

// document.addEventListener('DOMContentLoaded', () => {
//     renderTimeline();
//   });

function TitleToJoke(){
    const titleMain = document.getElementById('title-main');
    let joke = false;
    titleMain.addEventListener("click", async ()=>{
        titleMain.innerText = joke ? await WelcomeService() : "Bienvenue!";
            joke = !joke; 
    });

}
TitleToJoke();
//* On est dans /src/main.js

// ! ⬇ Ancienne version de base (counter) 
// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
