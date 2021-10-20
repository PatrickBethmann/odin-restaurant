function showMenu() {
    console.log("Showing Menu");
    const parent = document.querySelector("#content");

    // creating elements
    const mainHeading = document.createElement("div");
    mainHeading.id = "main-heading";
    mainHeading.classList.add("section", "main-heading");
    mainHeading.textContent = "Menu";

    // appending everything
    parent.append(mainHeading);
}

export default showMenu;
