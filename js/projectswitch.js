import { projectsArray } from "./projectlist.js"; // Import projectsArray 
// Add an event listener when loading up the skills webpage
document.addEventListener("DOMContentLoaded", async function () {
    const scrollableContainer = document.getElementsByClassName("scrollable_container")[0] ?? null; // Scrollable container
    const projectsHeadersContainer = document.getElementsByClassName("projectslist_container")[0] ?? null; // Projects Header container
    const projectDetailsContainer = document.getElementsByClassName("projects_container")[0] ?? null; // Projects Details container
    const returnToMain = document.getElementsByClassName("return_container")[0] ?? null; // Return to main page element
    const returnToList = document.getElementsByClassName("return_projectlist_container")[0] ?? null; // Return to project list element
    // Create variables for projectHeaders for the list of projects to be filled out later.
    let projectHeaders = [];
    // If any elements are null, go to error page
    if (!scrollableContainer || !projectsHeadersContainer || !projectDetailsContainer || !returnToMain || !returnToList) {
        window.location.href = `/html/error.html`;
        return;
    }
    // load the project name and images from the list to be displayed when first opening the project page
    await loadProjectHeaders();
    // For each project header, get the picture inside of it, and add an event listener to load project details when clicked
    projectHeaders.forEach(async (projectHeader, index) => {
        const projectHeaderPic = projectHeader.getElementsByClassName("projectlist_pic")[0] ?? null;
        projectHeaderPic?.addEventListener("click", async () => {
            await loadProjectDetails(projectsArray[index]);
        });
    });
    // Add a event listener to the return element to show back the project list when clicked
    returnToList.addEventListener("click", async () => {
        await toggleProjectList();
    });
    // ---------- FUNCTIONS ---------- //
    // Function loads the images and name for each project in the project list to be displayed
    async function loadProjectHeaders() {
        // Checks if the current page is in light mode or not
        const isLightMode = sessionStorage.getItem("isLightMode") != null && sessionStorage.getItem("isLightMode") === "true";
        for (const project of projectsArray) {
            // Display lightmode version display or not depending if isLightMode is true
            const projectHeader = (isLightMode)
                ?
                    `
                    <div class = projectheader_container>

                        <img src = ${project.img} class = "projectlist_pic picture_link toggle_lightblue font_toggle_lightblue_light_mode">
                        <p class = "projectheader_title toggle_lightblue font_toggle_lightblue_light_mode">${project.name}</p>
    
                    </div>
                `
                :
                    `
                    <div class = projectheader_container>

                        <img src = ${project.img} class = "projectlist_pic picture_link toggle_lightblue">
                        <p class = "projectheader_title toggle_lightblue">${project.name}</p>

                    </div>
                `;
            // Insert to the end of the div and push the projectHeader in the array by accessing the last children element of the container
            // lastElementChild gets the newly added projectHeader
            projectsHeadersContainer?.insertAdjacentHTML("beforeend", projectHeader);
            projectHeaders.push(projectsHeadersContainer?.lastElementChild ?? null);
        }
    }
    // Function loads a specific project details with its name, image, description, technologies used, and an accessible link
    async function loadProjectDetails(projectInfo) {
        // Obtain project description elements
        const title = document.getElementsByClassName("project_title")[0] ?? null;
        const img = document.getElementsByClassName("project_pic")[0] ?? null;
        const description = document.getElementsByClassName("description")[0] ?? null;
        const link = document.getElementsByClassName("button_link")[0] ?? null;
        const technologyContainer = document.getElementsByClassName("technologies_container")[0] ?? null; // Technologies container
        const currentTechnologies = document.getElementsByClassName("technology_element"); // Reset the current technologies of the project
        // If any elements are null, go to error page
        if ((!projectsArray || projectsArray?.length <= 0 || !projectInfo) || !title || !img
            || !description || !link || !technologyContainer || !currentTechnologies) {
            window.location.href = `/html/error.html`;
            return;
        }
        // Change projects display via the projectsArray
        title.textContent = projectInfo.name;
        img.src = projectInfo.img;
        description.innerHTML = projectInfo.description;
        // Call addLinkIcon function to add the given icon depending on project location
        await addLinkIcon(link, projectInfo.projectLocation);
        // Add event listener to button, to open a new window towards the link of the given project
        link.addEventListener("click", () => {
            window.open(projectInfo.link);
        });
        while (currentTechnologies.length != 0) // While loop continues to remove technology elements
            currentTechnologies[0].remove();
        // Add the technolgies of selected project via insertAdjacentHTML
        for (let i = projectInfo.technologies.length - 1; i >= 0; i--)
            technologyContainer.insertAdjacentHTML("afterbegin", `<p class = "content technology_element toggle_lightblue"> ${projectInfo.technologies[i]} </p>`);
        await toggleProjectList(); // Hide project list page and show project details page
    }
    // Function adds a link icon via FontAwesome depending on Project Location in the project list
    async function addLinkIcon(linkElement, projectLocation) {
        let link = "";
        // Change icon link depending on the project location. (Ex: Show GitHub logo if in GitHub)
        if (projectLocation == "GitHub")
            link = `<i class="fa-brands fa-github fa-lg"></i> Github Link`;
        else if (projectLocation == "Website")
            link = `<i class="fa-solid fa-globe fa-lg"></i> Website Link`;
        else if (projectLocation == "Itch.io")
            link = `<i class="fa-brands fa-itch-io fa-lg"></i> Itch.io Link`;
        linkElement.innerHTML = link;
    }
    // Function toggles the project list to either show or hide it when displaying information on a specific project
    async function toggleProjectList() {
        // Toggle hide for scrollable and list container that holds header and show the list container that holds the project details
        scrollableContainer?.classList.toggle("hide");
        projectsHeadersContainer?.classList.toggle("hide");
        projectDetailsContainer?.classList.toggle("hide");
        // Toggle to hide the return button and show the return button to projectList
        returnToList?.classList.toggle("hide");
        returnToMain?.classList.toggle("hide");
    }
});
//# sourceMappingURL=projectswitch.js.map