import MyLogo from "./logo.png";
import "./style.css";

function initPage() {
    const body = document.querySelector("#content");

    // create basic elements
    const h1 = document.createElement("h1");
    const logo = document.createElement("img");
    const p = document.createElement("p");

    h1.textContent = "My Restaurant";
    logo.src = MyLogo;
    p.textContent = "My Restaurant is super amazing! Come and try our food!";

    // Setting Styles
    h1.classList.add("main-title");
    logo.classList.add("logo");

    body.appendChild(h1);
    body.appendChild(logo);
    body.appendChild(p);
}

export default initPage;
