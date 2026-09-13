export type projectLocation = "GitHub" | "Itch.io" | "Website";

interface projectFormat{

    name: string,
    description: string
    projectLocation: projectLocation,
    link: string,
    img: string,
    technologies: string[],

}


// Object array that stores contents of each project
export const projectsArray: projectFormat[] = [

    {

        name: "Warrior",
        description: `A Java Project me and my friend worked on for our course. 
                    It is a <b> turn-based game displayed via Java Swing </b> with weapon, armor, enemy, potion, and environment selection.
                    <b> All of the art is made by me </b>and is inspired from various franchises such as FromSoftware games.`,
        projectLocation: "GitHub",
        link: "https://github.com/Shoofy32/MCO-Warrior.git",
        img: "../resources/mco_warrior.png",
        technologies: ["Java"],


    },
    {

        name: "Blevvit",
        description: `Blevvit is a <b>web application</b> made by me and 2 other friends for our course. 
                It is a forum web application where <b>users can post, comment, and reply, and challenge other users for likes</b> in a variety of topics. 
                Most of the frontend including design was made by me via <b>HTML, CSS, and Javascript</b>, with my other friends programming the backend via <b>Express.js and MongoDB</b>.`,
        projectLocation: "GitHub",
        link: "https://github.com/Shoofy32/APDEV",
        img: "../resources/blevvit_pic.jpg",
        technologies: ["HTML", "CSS", "Javascript", "Express.js", "MongoDB"]


    },
    {
        name: "Cybersecurity Awareness",
        description: `A Website me and my friend made as part of a <b> CCICOMP cybersecurity seminar</b>. 
                The website was <b>made via Wix.com</b> and includes information and resources on cybersecurity awareness and quotes from the actual seminar.`,
        projectLocation: "Website",
        link: "https://ccicomps11.wixsite.com/ccicomp-s11",
        img: "../resources/wix_cybersecurity_awareness.png",
        technologies: ["Wix"]


    },
    {
        name: "Hidden Gems APP",
        description: `Hidden Gems is a database application made via <b>Java and SQL</b> via a <b>MySQL Connector Java</b> for a group project in databases and management. 
                The database application is travel-themed with <b> basic login and CRUD elements for user, travel, feedback, and booking</b>. 
                The feedback <b>CRUD and login and button layout were all developed and designed by me</b>.`,
        projectLocation: "Website",
        link: "https://github.com/DiamondYeah/CCINFOM-Group-1-DBAPP",
        img: "../resources/database_app.png",
        technologies: ["Java", "SQL"]


    },
    {

        name: "Convex Hull Program",
        description: `A simple <b>C</b> program made by me and my friend for a project in a data structures course. 
                The program returns the convex hull of a given set of points via <b>Graham's Scan Algorithm</b>.
                <b>Implemented a fast (Heap Sort) and slow version (Insertion Sort) for each scan</b> to test time with larger inputs with additional helper functions such as finding polar angles.`,
        projectLocation: "GitHub",
        link: "https://github.com/Shoofy32/CCDSALG-MCO1",
        img: "../resources/convexhull_pic.png",
        technologies: ["C"]

    },
    {

        name: "Roll to Haul!",
        description: `A simple <b> Unity game made with C# </b> where the player rolls a ball and collects items and avoid the enemy to win. 
                Built by following a Unity Help tutorial with <b> added features such as restart system, main menu, and smooth camera following</b>.`,
        projectLocation: "Itch.io",
        link: "https://diamondyeah.itch.io/roll-to-haul/download/1dcZHyPG7GBC9cDdn2h_M7m6SXZwGcYW4trGn5hL",
        img: "../resources/rolltohaul_pic.png",
        technologies: ["Unity", "C#"]

    },
    {

        name: "AgilaPost",
        description: `A <b> web application via React </b> made for our a client in our course where users can <b> upload videos/pictures in different social media sites at the same time </b>
                by connecting platforms such as TikTok, Meta, and LinkedIn. <b> Implemented the TikTok API </b> and a majority of the website functions such as calendar scheduling </b>.`,
        projectLocation: "GitHub",
        link: "https://github.com/DiamondYeah/CSSWENG-Application",
        img: "../resources/agilapost_pic.jpg",
        technologies: ["HTML", "CSS", "Typescript", "React", "Express.js", "MongoDB"]

    },
    {

        name: "1v1 LAN MTG",
        description: `<b>A group CLI Project made in Python </b> for a network course. Allows you to <b>play a limited Magic the Gathering setup with another person to duel</b> (Requires to be in the same device).
                <b>Developed main game flow, win conditionss and some cards with their corresponding effects</b>.`,
        projectLocation: "GitHub",
        link: "https://github.com/Welsonnot/mp-csnetwk",
        img: "../resources/networkmtg_pic.jpg",
        technologies: ["Python"]

    },

]