import cafeImage from "../img/kirby.png"



function loadContact() {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");
    menuContent.innerHTML = `
    <h1>Contact</h1>
    <p>Visit the cafe</p>
    <img src="${cafeImage}" alt="Waddle Dee Cafe">
    `;

    content.appendChild(menuContent);
}


export { loadContact };
