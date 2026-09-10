import "./styles.css";
import { loadHome } from "./modules/home.js";
import { loadMenu } from "./modules/menu.js";
import { loadContact } from "./modules/contact.js";


const content = document.querySelector("#content");

function clearContent() {
    content.textContent = "";
}

function switchTab(loadPage) {
    clearContent();
    loadPage();
}

document.querySelector("#home-button").addEventListener("click", () => {
    switchTab(loadHome);
});

document.querySelector("#menu-button").addEventListener("click", () => {
    switchTab(loadMenu);
});

document.querySelector("#contact-button").addEventListener("click", () => {
    switchTab(loadContact);
});

loadHome();
