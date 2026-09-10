import "./styles.css";
import { menu } from "./menu.js";
import k from "./img/kirby.png";


const a = document.createElement("div");
a.innerHTML =
    `<h1>AAWWWwww</h1>
    <p>🥰🥰 </p> `;

document.body.appendChild(a);

console.log(`${menu}🥰`);


const image = document.createElement("img");
image.src = k;

document.body.appendChild(image);
