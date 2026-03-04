document.addEventListener("DOMContentLoaded", function(){

    const dots = document.getElementsByClassName("dot");

    let currentProject = 0; // Stores the index of the current displayed project


    // Obtain project description elements
    const title = document.getElementsByClassName("project_title")[0];
    const img = document.getElementsByClassName("project_pic")[0];
    const description = document.getElementsByClassName("description")[0];
    const link = document.getElementsByClassName("github_link")[0];


    // Load current project displayed

    // Load current project if not null without any transition
    if(sessionStorage.getItem("currentProject") != null){

        document.body.classList.add("no_transition");

        // Change project display and active dot
        changeProject(parseInt(sessionStorage.getItem("currentProject")));
        changeActiveDot(parseInt(sessionStorage.getItem("currentProject")))

        document.body.offsetHeight; // Force background change

        document.body.classList.remove("no_transition"); 

    }


    for(let i = 0; i < dots.length; i++)
        dots[i].addEventListener("click", () => {

            changeProject(i);
            changeActiveDot(i);

    });

    document.getElementsByClassName("fa-chevron-left")[0].addEventListener("click", () => {

        cyclePagination("back");

    });

    document.getElementsByClassName("fa-chevron-right")[0].addEventListener("click", () => {

        cyclePagination("forward");

    });





    // Function changes project details when clicking arrow or the dot
    function changeProject(index){

        // Obtain technologies container
        const technologyContainer = document.getElementsByClassName("technologies_container")[0];


        const button_link = document.getElementsByClassName("button_link")[0]; // Button link

        // Check if link is in github, if not, change display of button to link
        if(projectsArray[index].isInGithub != true)
            button_link.innerHTML = `<i class = "fa-solid fa-link fa-lg"></i> Link`;
        else
            button_link.innerHTML = `<i class="fa-brands fa-github fa-lg"></i> Github Link`;



        // Change projectsn display via the projectsArray and the given index.
        title.textContent = projectsArray[index].name;
        img.src = projectsArray[index].img;
        description.innerHTML = projectsArray[index].description;
        link.href = projectsArray[index].link;
        currentProject = index;


        // Reset the current technologies of the project
        let currentTechnologies = document.getElementsByClassName("technology_element");

        while(currentTechnologies.length != 0) // While loop continues to remove technology elements
            currentTechnologies[0].remove();

        // Add the technolgies of selected project via insertAdjacentHTML
        for(let i = projectsArray[index].technologies.length - 1; i >= 0; i--)
            technologyContainer.insertAdjacentHTML("afterbegin", 
            `<p class = "content technology_element toggle_lightblue"> ${projectsArray[index].technologies[i]} </p>`);


        // Add current project display to sessionStorage
        sessionStorage.setItem("currentProject", index);
        
    }

    // Function cycles through the projects when pressing left or right arrows
    function cyclePagination(action){

        // Remove active class on current dot
        dots[currentProject].classList.toggle("active")

        // Left arrow cycles back
        if(action === "back"){

            if(currentProject === 0) // Cycle to the last project
                currentProject = projectsArray.length - 1;
            else
                currentProject--;

        }
        else if(action === "forward"){ // Right arrow cycles forward

            if(currentProject === projectsArray.length - 1) // Cycle to the first project
                currentProject = 0;
            else
                currentProject++

        }

        // Add active class on next dot
        dots[currentProject].classList.toggle("active")

        changeProject(currentProject); // Call function to change project detailss
        
    }


    function changeActiveDot(index){

        for(let i = 0; i < dots.length; i++)
            if(dots[i].classList.contains("active"))
                dots[i].classList.toggle("active");

        dots[index].classList.toggle("active");

    }

});


// Object array that stores contents of each project
const projectsArray = [

    {

        name: "Warrior",
        description: `A Java Project me and my friend worked on for our course. 
                    It is a <b> turn-based game displayed via Java Swing </b> with weapon, armor, enemy, potion, and environment selection.
                    <b> All of the art is made by me </b>and is inspired from various franchises such as FromSoftware games.`,
        link: "https://github.com/Shoofy32/MCO-Warrior.git",
        isInGithub: true,
        img: "../resources/mco_warrior.png",
        technologies: ["Java"]


    },
    {

        name: "Blevvit (WIP)",
        description: `Blevvit is a <b>work in progress web application (front-end available)</b> made by me and 2 other friends for our course. 
                It is a forum web application where <b>users can post, comment, and reply, and challenge other users for likes</b> in a variety of topics. 
                Most of the frontend including design was made by me via <b>HTML, CSS, and Javascript</b>.`,

        link: "https://github.com/Shoofy32/APDEV",
        isInGithub: true,
        img: "../resources/blevvit_pic.png",
        technologies: ["HTML", "CSS", "Javascript"]


    },
    {
        name: "Cybersecurity Awareness",
        description: `A Website me and my friend made as part of a <b> CCICOMP cybersecurity seminar</b>. 
                The website was <b>made via Wix.com</b> and includes information and resources on cybersecurity awareness and quotes from the actual seminar.`,
        link: "https://ccicomps11.wixsite.com/ccicomp-s11",
        isInGithub: false,
        img: "../resources/wix_cybersecurity_awareness.png",
        technologies: ["Wix"]


    },
    {
        name: "Hidden Gems APP",
        description: `Hidden Gems is a database application made via <b>Java and SQL</b> via a <b>MySQL Connector Java</b> for a group project in databases and management. 
                The database application is travel-themed with <b> basic login and CRUD elements for user, travel, feedback, and booking</b>. 
                The feedback <b>CRUD and login and button layout were all developed and designed by me</b>.`,
        link: "https://github.com/DiamondYeah/CCINFOM-Group-1-DBAPP",
        isInGithub: true,
        img: "../resources/database_app.png",
        technologies: ["Java", "SQL"]


    },
    {

        name: "Convex Hull Program",
        description: `A simple <b>C</b> program made by me and my friend for a project in a data structures course. 
                The program returns the convex hull of a given set of points via <b>Graham's Scan Algorithm</b>.
                <b>Implemented a fast (Heap Sort) and slow version (Insertion Sort) for each scan</b> to test time with larger inputs with additional helper functions such as finding polar angles.`,
        link: "https://github.com/Shoofy32/CCDSALG-MCO1",
        isInGithub: true,
        img: "../resources/convexhull_pic.png",
        technologies: ["C"]

    },
    {

        name: "Roll to Haul!",
        description: `A simple <b> Unity game made with C# </b> where the player rolls a ball and collects items and avoid the enemy to win. 
                Built by following a Unity Help tutorial with <b> added features such as restart system, main menu, and smooth camera following</b>.`,
        link: "https://diamondyeah.itch.io/roll-to-haul/download/1dcZHyPG7GBC9cDdn2h_M7m6SXZwGcYW4trGn5hL",
        isInGithub: false,
        img: "../resources/rolltohaul_pic.png",
        technologies: ["Unity", "C#"]

    }


]