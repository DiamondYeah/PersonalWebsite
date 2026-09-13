// Add an event listener when loading up the webpage
document.addEventListener("DOMContentLoaded", function () {
    const soundModeToggle = document.getElementsByClassName("toggle_sound_mode")[0] ?? null; // Sound Mode Toggle
    // List of sound effects
    const soundToggleOn = new Audio("../resources/audio/sound_toggleon.mp3") ?? null;
    const soundToggleOff = new Audio("../resources/audio/sound_toggleoff.mp3") ?? null;
    const soundLightMode = new Audio("../resources/audio/sound_lightmode.mp3") ?? null;
    const soundDarkMode = new Audio("../resources/audio/sound_darkmode.mp3") ?? null;
    const soundButtonClick = new Audio("../resources/audio/sound_buttonclick.mp3") ?? null;
    const soundButtonReturn = new Audio("../resources/audio/sound_buttonreturn.mp3") ?? null;
    const soundLinkClick = new Audio("../resources/audio/sound_linkclick.mp3") ?? null;
    // If soundModeToggle is null, go to error page
    if (!soundModeToggle) {
        window.location.href = `/html/error.html`;
        return;
    }
    // Add event listener to toggleSoundMode function
    soundModeToggle.addEventListener("click", toggleSoundMode);
    // If volume is false/off, call toggleSoundMode function to display the close status when loading page
    if (sessionStorage.getItem("isVolumeOn") != null && sessionStorage.getItem("isVolumeOn") === "false")
        toggleSoundMode();
    // Add a event listener to the document whenever user clicks at the page to check if what was clicked needs a sound effect
    document.addEventListener("click", function (e) {
        if (e.target instanceof HTMLElement)
            handleSoundEffects(e.target ?? null);
    });
    // ---------- FUNCTIONS ---------- //
    // Function toggles sound on or sound off for the website
    function toggleSoundMode() {
        // Gets the sound icon (either in a on or off state)
        const toggleIcon = document.querySelector(".fa-volume , .fa-volume-xmark");
        // If icon is null, go to error page
        if (!toggleIcon) {
            window.location.href = `/html/error.html`;
            return;
        }
        // Change icon to switch its status from either on or off
        if (toggleIcon.classList.contains("fa-volume")) {
            toggleIcon.classList.remove("fa-volume");
            toggleIcon.classList.add("fa-volume-xmark");
            sessionStorage.setItem("isVolumeOn", "false"); // Add to session storage that volume is off
        }
        else if (toggleIcon.classList.contains("fa-volume-xmark")) {
            toggleIcon.classList.remove("fa-volume-xmark");
            toggleIcon.classList.add("fa-volume");
            sessionStorage.setItem("isVolumeOn", "true"); // Add to session storage that volume is on
        }
    }
    // Fuction handles the sound effects depending on what class the element passed contains
    function handleSoundEffects(element) {
        const elementClassList = element?.classList ?? null;
        // If null, return immediately
        if (!element || !elementClassList)
            return;
        // If statements to check what class the element contains
        if (elementClassList.contains("fa-volume-xmark"))
            playSound(soundToggleOn, true);
        else if (elementClassList.contains("fa-volume"))
            playSound(soundToggleOff, true);
        else if (elementClassList.contains("fa-sun"))
            playSound(soundLightMode, false);
        else if (elementClassList.contains("fa-moon"))
            playSound(soundDarkMode, false);
        else if (elementClassList.contains("contact_link") || elementClassList.contains("project_link"))
            playSound(soundLinkClick, false);
        else if (elementClassList.contains("button_link") || elementClassList.contains("picture_link"))
            playSound(soundButtonClick, false);
        else if (elementClassList.contains("return_link"))
            playSound(soundButtonReturn, false);
    }
    // Function plays the audio found in the parameter depending if the sound option is enabled or has the override option set to true
    function playSound(audio, overrideSoundEnabled) {
        const isSoundEnabled = sessionStorage.getItem("isVolumeOn") != null && sessionStorage.getItem("isVolumeOn") === "true";
        // Play audio if condition is met
        if ((audio && isSoundEnabled) || (audio && overrideSoundEnabled))
            audio.play();
    }
});
export {};
//# sourceMappingURL=soundtoggle.js.map