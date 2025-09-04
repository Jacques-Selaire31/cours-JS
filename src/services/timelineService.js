import { timelineSteps } from "./timelineData";
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const timeline = document.getElementById("timeline");


export function renderTimeline() {
        timelineSteps.forEach(element => {
        let year = element.year;
        let title = element.title;
        let p = element.text;
        let side = element.side;
        let align ="";
        if (side == "start"){
            align = "end"
        } else align = "start";   
        timeline.innerHTML += DOMPurify.sanitize(createLi(year, title, p, side, align))});
    };

function createLi(year, title, p, side, align){
    return `<li>
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="timeline-${side} mb-10 md:text-${align}">
      <time id="year" class="font-mono italic">${year}</time>
      <div id="title" class="text-lg font-black">${title}</div>
      <p id="p">${p}</p>
    </div>
    <hr />
  </li> `
}
