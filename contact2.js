// ================================
// EmailJS initialization
// ================================
(function () {
    emailjs.init("jSFNh-pNUNj9IDtHz"); 
})();

// ================================
// Contact form handling
// ================================
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    if (!form) {
        console.error("Contact form not found");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        status.innerText = "Envoi de message...";

        // 1. Send email to YOU
        emailjs.sendForm(
            "service_p852kvh",
            "template_5nsdgja",
            form
        )
        .then(function () {

            // 2. Send auto-reply to the sender
            return emailjs.sendForm(
                "service_p852kvh",
                "template_bq0i3gp",
                form
            );
        })
        .then(function () {
            status.innerText =
                "Message envoyé avec succès. Vous recevrez un e-mail de confirmation sous peu.";
            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS error:", error);
            status.innerText =
                "An error occurred while sending the message. Please try again later.";
        });
    });

});
