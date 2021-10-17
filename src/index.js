import initPage from "./createContent.js";
import showHome from "./home.js";
import showMenu from "./menu";
import showContact from "./contact";

initPage();
clearContent();
showHome();

function clearContent() {
    document.querySelector("#content").innerHTML = "";
}

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", () => {
    clearContent();
    showHome();
});

menu.addEventListener("click", () => {
    clearContent();
    showMenu();
});

contact.addEventListener("click", () => {
    clearContent();
    showContact();
});
