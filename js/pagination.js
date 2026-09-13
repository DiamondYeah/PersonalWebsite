import { projectsArray } from "./projectlist.js"; // Import projectsArray 
// Add an event listener when loading up the skills webpage
document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const chevronLeft = document.getElementsByClassName("fa-chevron-left")[0] ?? null;
    const chevronRight = document.getElementsByClassName("fa-chevron-right")[0] ?? null;
    let currentProject = 0; // Stores the index of the current displayed project
    if ((!dots || dots?.length <= 0) || !chevronLeft || !chevronRight) {
        window.location.href = `/html/error.html`;
        return;
    }
    // Load current project displayed
    const currentProjectDisplayed = sessionStorage.getItem("currentProject");
    // Load current project if not null without any transition
    if (currentProjectDisplayed) {
        document.body.classList.add("no_transition");
        // Change project display and active dot
        changeProject(parseInt(currentProjectDisplayed));
        changeActiveDot(parseInt(currentProjectDisplayed));
        document.body.offsetHeight; // Force background change
        document.body.classList.remove("no_transition");
    }
    // For each dot, add an event listener to change the project and active dot when clicked ,
    for (const dot of dots)
        dot.addEventListener("click", () => {
            const index = Array.from(dots).indexOf(dot);
            changeProject(index);
            changeActiveDot(index);
        });
    chevronLeft.addEventListener("click", () => {
        cyclePagination("back");
    });
    chevronRight.addEventListener("click", () => {
        cyclePagination("forward");
    });
    // ---------- FUNCTIONS ---------- //
    // Function changes project details when clicking arrow or the dot
    function changeProject(index) {
        // Obtain project description elements
        const title = document.getElementsByClassName("project_title")[0] ?? null;
        const img = document.getElementsByClassName("project_pic")[0] ?? null;
        const description = document.getElementsByClassName("description")[0] ?? null;
        const link = document.getElementsByClassName("github_link")[0] ?? null;
        const technologyContainer = document.getElementsByClassName("technologies_container")[0] ?? null; // Technologies container
        const buttonLink = document.getElementsByClassName("button_link")[0] ?? null; // Button link
        const currentTechnologies = document.getElementsByClassName("technology_element"); // Reset the current technologies of the project
        // If any elements are null, go to error page
        if ((!projectsArray || projectsArray?.length <= 0 || !projectsArray[index]) || !title || !img
            || !description || !link || !technologyContainer || !buttonLink || !currentTechnologies) {
            window.location.href = `/html/error.html`;
            return;
        }
        // Check if link is in github, if not, change display of button to link
        if (projectsArray[index]?.projectLocation == "GitHub")
            buttonLink.innerHTML = `<i class = "fa-solid fa-link fa-lg"></i> Link`;
        else
            buttonLink.innerHTML = `<i class="fa-brands fa-github fa-lg"></i> Github Link`;
        // Change projects display via the projectsArray and the given index.
        title.textContent = projectsArray[index].name;
        img.src = projectsArray[index].img;
        description.innerHTML = projectsArray[index].description;
        link.href = projectsArray[index].link;
        currentProject = index;
        while (currentTechnologies.length != 0) // While loop continues to remove technology elements
            currentTechnologies[0].remove();
        // Add the technolgies of selected project via insertAdjacentHTML
        for (let i = projectsArray[index].technologies.length - 1; i >= 0; i--)
            technologyContainer.insertAdjacentHTML("afterbegin", `<p class = "content technology_element toggle_lightblue"> ${projectsArray[index].technologies[i]} </p>`);
        // Add current project display to sessionStorage
        sessionStorage.setItem("currentProject", String(index));
    }
    // Function cycles through the projects when pressing left or right arrows
    function cyclePagination(action) {
        // Remove active class on current dot
        dots[currentProject].classList.toggle("active");
        // Left arrow cycles back
        if (action === "back") {
            if (currentProject === 0) // Cycle to the last project
                currentProject = projectsArray.length - 1;
            else
                currentProject--;
        }
        else if (action === "forward") { // Right arrow cycles forward
            if (currentProject === projectsArray.length - 1) // Cycle to the first project
                currentProject = 0;
            else
                currentProject++;
        }
        // Add active class on next dot
        dots[currentProject].classList.toggle("active");
        changeProject(currentProject); // Call function to change project detailss
    }
    // Function changes active dot by changing active classes
    function changeActiveDot(index) {
        for (let i = 0; i < dots.length; i++)
            if (dots[i].classList.contains("active"))
                dots[i].classList.toggle("active");
        dots[index].classList.toggle("active");
    }
});
//# sourceMappingURL=pagination.js.map