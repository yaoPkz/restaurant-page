import cafeImage from "../img/WaddleDeeCafe.png"
import happy from "../img/happy.png"


function loadHome() {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");
    const chefImg = document.querySelector(".chef");

    chefImg.classList.remove("invisible");

    menuContent.innerHTML = `
    <h1>Waddle Dee Cafe</h1>
    <div>
        <img src="${cafeImage}" alt="Waddle Dee Cafe">
        <img class="happy" src="${happy}" alt="kirby y waddle dee">
    </div>
    <p>Step into a cheerful Kirby-themed café where cozy outdoor seating, colorful treats, and friendly Waddle Dees make every meal feel like a little adventure. 🍰⭐ With its playful decorations and sunny Dream Land atmosphere, it’s the perfect spot to relax, grab a bite, and enjoy some Kirby magic. 💗</p>

    

    `;

    content.appendChild(menuContent);
}


export { loadHome };



