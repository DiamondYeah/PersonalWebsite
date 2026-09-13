// Add an event listener when loading up the webpage
document.addEventListener("DOMContentLoaded", function(){


    const email: Element | null = document.getElementsByClassName("email")[0] ?? null; /// Email
    const tooltip: HTMLElement | null | undefined = email?.parentElement?.querySelector(".tooltip_text") ?? null; // Email tool tip

    // If email or tooltip is null, go to error page
    if(!email || (!tooltip || !tooltip == undefined)) {

        window.location.href = `/html/error.html`;
        return;
    
    }


    // Call copyToClipboard function to copy email to user's clipboard
    email.addEventListener("click", () => { copyToClipboard(tooltip) });

    // Add a delay when hovering out of the email to give time for the tooltip to change text
    email.addEventListener("mouseout", () => { setTimeout(() => {tooltip.textContent = "Copy to clipboard"}, 250); });



    // ---------- FUNCTIONS ---------- //

    // Function copies email to clipboard of user
    function copyToClipboard(tooltip: HTMLElement){

        const emailText: string | null | undefined = email?.childNodes[0]?.textContent;


        // Check if email textContent exists. If not, show error page.
        if(emailText){

            navigator.clipboard.writeText(emailText);

            tooltip.textContent = "Copied to clipboard!";

        }
        else
            window.location.href = `/html/error.html`;            
    

    }

})
