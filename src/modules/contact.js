import cafeImage from "../img/serve.png";
import waiter from "../img/chef.png";


function loadContact() {
    const content = document.querySelector("#content");
    const menuContent = document.createElement("div");
    const chefImg = document.querySelector(".chef");

    chefImg.classList.add("invisible");

    menuContent.innerHTML = `
    <h1>Tell us what you think</h1>
    <p>At Waddle Dee Café, our customers are at the heart of everything we do. 💕 We want every guest to feel welcome, comfortable, and cared for, whether you're stopping by for a quick coffee or enjoying a sweet treat with friends. Your happiness means the world to us! ⭐</p>

    <div class= "contact">
        <img src="${cafeImage}" alt="Waddle Dee Cafe">
        <form>
            <label for="subject">Subject</label>
            <input id="subject" type="text" placeholder="How can we help?">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Ok, tell us a little more..."></textarea>

            <button>Send</button>
        </form>
        <img class="waiter" src="${waiter}" alt="kirby waiter">

    </div>
    
    

    `;

    content.appendChild(menuContent);
}


export { loadContact };
