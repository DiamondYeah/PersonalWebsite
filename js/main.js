document.addEventListener("DOMContentLoaded", function(){

    const email = document.getElementsByClassName("email")[0]; /// Email

    // If light mode is true in session storage, allow page to load light mode without transition
    if(sessionStorage.getItem("isLightMode") != null && sessionStorage.getItem("isLightMode") === "true"){

        document.body.classList.add("no_transition");

        toggleDisplayMode(); // Toggle light mode change

        document.body.offsetHeight; // Force background change

        document.body.classList.remove("no_transition"); 

    }

    document.getElementsByClassName("toggle_dark_mode")[0].addEventListener("click", toggleDisplayMode);

    if(document.getElementsByClassName("email").length != 0){

        document.getElementsByClassName("email")[0].addEventListener("click", copyToClipboard);

        // Add a delay when hovering out of the email to give time for the tooltip to change text
        document.getElementsByClassName("email")[0].addEventListener("mouseout", () => {

            const tooltip = email.parentElement.querySelector(".tooltip_text"); // Email tool tip

            setTimeout(() => {tooltip.textContent = "Copy to clipboard"}, 250);

        });

    }



    function toggleDisplayMode(){

        const bodyElement = document.body; // Body
        const icons = document.querySelectorAll(".toggle_icon, .link_icon"); // Icons
        const startContainer = document.getElementsByClassName("main_title_container")[0]; // Start Container
        const bodyContainer = document.getElementsByClassName("main_body")[0]; // Content Container
        const paragraphs = document.querySelectorAll(".toggle_white, .toggle_lightblue"); // Paragraphs

        const toggleIcon = document.querySelector(".fa-sun , .fa-moon");

        // Light mode containers
        bodyElement.classList.toggle("body_light_mode");
        startContainer.classList.toggle("header_light_mode");
        bodyContainer.classList.toggle("container_light_mode");

        // Light mode border
        startContainer.classList.toggle("border_light_mode");
        bodyContainer.classList.toggle("border_light_mode");

        // Light mode icons
        for(let i = 0; i < icons.length; i++)
            icons[i].classList.toggle("icon_light_mode");


        // Light mode paragraphs
        for(let i = 0; i < paragraphs.length; i++)
            if(paragraphs[i].classList.contains("toggle_white"))
                paragraphs[i].classList.toggle("font_toggle_white_light_mode");
            else if(paragraphs[i].classList.contains("toggle_lightblue"))
                paragraphs[i].classList.toggle("font_toggle_lightblue_light_mode");


        // Change icon to switch its status from either sun or moon
        if(toggleIcon.classList.contains("fa-sun")){

            toggleIcon.classList.remove("fa-sun");
            toggleIcon.classList.add("fa-moon");
            
            sessionStorage.setItem("isLightMode", false); // Add to session storage light mode is false

        }
        else if(toggleIcon.classList.contains("fa-moon")){

            toggleIcon.classList.remove("fa-moon");
            toggleIcon.classList.add("fa-sun"); 
            
            sessionStorage.setItem("isLightMode", true); // Add to session storage light mode is true

        }



    }

    // Function copies email to clipboard
    function copyToClipboard(){

        const tooltip = email.parentElement.querySelector(".tooltip_text"); // Email tool tip
        
        navigator.clipboard.writeText(email.childNodes[0].textContent);

        tooltip.textContent = "Copied to clipboard!";

    }

})
