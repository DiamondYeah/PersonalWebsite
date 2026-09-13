// Add an event listener when loading up the webpage
document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementsByClassName("email")[0] ?? null; /// Email
    const tooltip = email?.parentElement?.querySelector(".tooltip_text") ?? null; // Email tool tip
    const darkModeToggle = document.getElementsByClassName("toggle_dark_mode")[0] ?? null; // Dark Mode Toggle
    // If email or tooltip is null, go to error page
    if (!email || (!tooltip || !tooltip == undefined) || !darkModeToggle) {
        window.location.href = `/html/error.html`;
        return;
    }
    // Add event listener to toggleDisplayMode function
    darkModeToggle.addEventListener("click", toggleDisplayMode);
    // If light mode is true in session storage, allow page to load light mode without transition
    if (sessionStorage.getItem("isLightMode") != null && sessionStorage.getItem("isLightMode") === "true") {
        document.body.classList.add("no_transition");
        toggleDisplayMode(); // Toggle light mode change
        document.body.offsetHeight; // Force background change
        document.body.classList.remove("no_transition");
    }
    // Call copyToClipboard function to copy email to user's clipboard
    email.addEventListener("click", () => { copyToClipboard(tooltip); });
    // Add a delay when hovering out of the email to give time for the tooltip to change text
    email.addEventListener("mouseout", () => { setTimeout(() => { tooltip.textContent = "Copy to clipboard"; }, 250); });
    // ---------- FUNCTIONS ---------- //
    // Function toggles light or dark display mode for the website
    function toggleDisplayMode() {
        const bodyElement = document.body ?? null; // Body
        const icons = document.querySelectorAll(".toggle_icon, .link_icon"); // Icons
        const startContainer = document.getElementsByClassName("main_title_container")[0] ?? null; // Start Container
        const bodyContainer = document.getElementsByClassName("main_body")[0] ?? null; // Content Container
        const paragraphs = document.querySelectorAll(".toggle_white, .toggle_lightblue"); // Paragraphs
        const toggleIcon = document.querySelector(".fa-sun , .fa-moon");
        // If any elements are null, go to error page
        if (!startContainer || !bodyContainer || !toggleIcon || (!icons || icons.length <= 0) || (!paragraphs || paragraphs.length <= 0) || !bodyElement) {
            window.location.href = `/html/error.html`;
            return;
        }
        // Light mode containers
        bodyElement.classList.toggle("body_light_mode");
        startContainer.classList.toggle("header_light_mode");
        bodyContainer.classList.toggle("container_light_mode");
        // Light mode border
        startContainer.classList.toggle("border_light_mode");
        bodyContainer.classList.toggle("border_light_mode");
        // Light mode icons
        for (let i = 0; i < icons.length; i++)
            icons[i]?.classList.toggle("icon_light_mode");
        // Light mode paragraphs
        for (let i = 0; i < paragraphs.length; i++)
            if (paragraphs[i]?.classList.contains("toggle_white"))
                paragraphs[i]?.classList.toggle("font_toggle_white_light_mode");
            else if (paragraphs[i]?.classList.contains("toggle_lightblue"))
                paragraphs[i]?.classList.toggle("font_toggle_lightblue_light_mode");
        // Change icon to switch its status from either sun or moon
        if (toggleIcon.classList.contains("fa-sun")) {
            toggleIcon.classList.remove("fa-sun");
            toggleIcon.classList.add("fa-moon");
            sessionStorage.setItem("isLightMode", "false"); // Add to session storage light mode is false
        }
        else if (toggleIcon.classList.contains("fa-moon")) {
            toggleIcon.classList.remove("fa-moon");
            toggleIcon.classList.add("fa-sun");
            sessionStorage.setItem("isLightMode", "true"); // Add to session storage light mode is true
        }
    }
    // Function copies email to clipboard of user
    function copyToClipboard(tooltip) {
        const emailText = email?.childNodes[0]?.textContent;
        // Check if email textContent exists. If not, show error page.
        if (emailText) {
            navigator.clipboard.writeText(emailText);
            tooltip.textContent = "Copied to clipboard!";
        }
        else
            window.location.href = `/html/error.html`;
    }
});
export {};
//# sourceMappingURL=main.js.map