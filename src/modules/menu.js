import cafeImage from "../img/cafe.jpg";
import cakeImage from "../img/cake.jpg";
import flanImage from "../img/flan.jpg";
import icecreamImage from "../img/icecream.jpg";

const food = [
    {
        name: "Coffee",
        price: 2,
        description: "A warm, comforting cup of coffee to start your adventure.",
        img: cafeImage
    },
    {
        name: "Cake",
        price: 5,
        description: "A soft, fluffy slice of cake topped with sweet frosting.",
        img: cakeImage
    },
    {
        name: "Flan",
        price: 4,
        description: "A smooth and creamy caramel flan that's sweet and delicious.",
        img: flanImage
    },
    {
        name: "Ice Cream",
        price: 3,
        description: "Cool, creamy ice cream perfect for a sweet little break.",
        img: icecreamImage
    }
];




function loadMenu() {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");

    menuContent.innerHTML = `
        <h1>Waddle Dee Cafe</h1>

        <div class="food-container">
            ${food.map(item => `
                <div class="food-card">
                    <img src="${item.img}" alt="${item.name}">
                    <div>
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                        <h3>$${item.price}</h3>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    content.appendChild(menuContent);
}



export { loadMenu };



