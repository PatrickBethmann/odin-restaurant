function showContact() {
    console.log("Showing Contact");
    const parent = document.querySelector("#content");

    // Creating Elements
    const mainHeading = document.createElement("div");
    mainHeading.id = "main-heading";
    mainHeading.classList.add("section", "main-heading");
    mainHeading.textContent = "Contact";

    parent.append(mainHeading);
}

export default showContact;
