import Thumbnail from "./thumbnail.jpg";

function showHome() {
    console.log("Showing home");
    const parent = document.querySelector("#content");

    // creating elements
    const mainHeading = document.createElement("div");
    mainHeading.id = "main-heading";
    mainHeading.classList.add("section", "main-heading");
    mainHeading.textContent = "My Restaurant";

    // Description
    const description = document.createElement("div");
    description.id = "description";
    description.classList.add("section");
    description.textContent = "Welcome to our Restaurant page";

    // Image
    const thumbnail = document.createElement("img");
    thumbnail.id = "thumbnail";
    thumbnail.classList.add("thumbnail");
    thumbnail.src = Thumbnail;

    // Schedule
    const schedule = document.createElement("div");
    schedule.id = "schedule";
    schedule.classList.add("section");

    // Location
    const location = document.createElement("div");
    location.id = "location";
    location.classList.add("section");

    // appending everything
    parent.append(mainHeading, description, thumbnail, schedule, location);
}

export default showHome;
