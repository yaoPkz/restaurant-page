import "./styles.css";
import { loadHome } from "./modules/home.js";
import { loadMenu } from "./modules/menu.js";
import { loadContact } from "./modules/contact.js";


const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const contactBtn = document.querySelector("#contact-button");

function clearContent() {
    content.textContent = "";
}

function switchTab(loadPage) {
    clearContent();
    loadPage();
}

function setActive(button) {
    homeBtn.classList.remove("active");
    homeBtn.textContent = `Home`;
    menuBtn.classList.remove("active");
    menuBtn.textContent = `Menu`;
    contactBtn.classList.remove("active");
    contactBtn.textContent = `About`;

    button.classList.add("active");
    button.textContent = `⭐️${button.textContent}`;
}



homeBtn.addEventListener("click", () => {
    setActive(homeBtn);
    switchTab(loadHome);

});



menuBtn.addEventListener("click", () => {
    setActive(menuBtn);
    switchTab(loadMenu);

});



contactBtn.addEventListener("click", () => {
    setActive(contactBtn);
    switchTab(loadContact);

});




loadHome();

