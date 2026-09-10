import cafeImage from "../img/kirby.png"



function loadHome() {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");
    menuContent.innerHTML = `
    <h1>Waddle Dee Cafe home</h1>
    <p>Visit the cafe</p>
    <img src="${cafeImage}" alt="Waddle Dee Cafe">
    `;

    content.appendChild(menuContent);
}


export { loadHome };
