function showContact() {
    console.log("Showing Contact");
    const parent = document.querySelector("#content");

    // Creating Elements
    const mainHeading = document.createElement("div");
    mainHeading.id = "main-heading";
    mainHeading.classList.add("section", "main-heading");
    mainHeading.textContent = "Contact";

    // Description
    const description = document.createElement("div");
    description.id = "description";
    description.classList.add("section");
    description.textContent = "Welcome to our Restaurant page";

    parent.append(mainHeading, description);
}

export default showContact;
