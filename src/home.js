function showHome() {
    console.log("Showing home");
    const parent = document.querySelector("#content");

    // creating elements
    const title = document.createElement("div");
    title.id = "title";
    title.classList.add("section");
    const description = document.createElement("div");
    description.id = "description";
    description.classList.add("section");
    const schedule = document.createElement("div");
    schedule.id = "schedule";
    schedule.classList.add("section");
    const location = document.createElement("div");
    location.id = "location";
    location.classList.add("section");

    // appending everything
    parent.append(title, description, schedule, location);
}

export default showHome;
