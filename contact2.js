// ==================================================
// EmailJS initialization
// ==================================================
(function () {
    emailjs.init("jSFNh-pNUNj9IDtHz");
})();

// ==================================================
// DOM Ready
// ==================================================
document.addEventListener("DOMContentLoaded", function () {

    // ==================================================
    // Contact form handling (EmailJS)
// ==================================================
    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            status.innerText = "Envoi de message...";

            // 1. Send email to you
            emailjs.sendForm(
                "service_p852kvh",
                "template_5nsdgja",
                form
            )
            .then(() => {
                // 2. Auto-reply to sender
                return emailjs.sendForm(
                    "service_p852kvh",
                    "template_bq0i3gp",
                    form
                );
            })
            .then(() => {
                status.innerText =
                    "Message envoyé avec succès. Vous recevrez un e-mail de confirmation sous peu.";
                form.reset();
            })
            .catch(error => {
                console.error("EmailJS error:", error);
                status.innerText =
                    "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.";
            });
        });
    }

    // ==================================================
    // Section reveal animation on scroll
    // ==================================================
    const sections = document.querySelectorAll("section");

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => sectionObserver.observe(section));

    // ==================================================
    // NAVBAR Scroll Spy (Active menu underline)
// ==================================================
    const navLinks = document.querySelectorAll("nav a");

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");

                    const sectionId = entry.target.getAttribute("id");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, {
        threshold: 0.6
    });

    sections.forEach(section => navObserver.observe(section));
});
