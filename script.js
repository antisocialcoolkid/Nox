/* =========================================
   NØX — INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------
       ELEMENT REVEAL
    ----------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".feature-card, .preview-text, .large-profile, .discord-inner"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* -----------------------------------------
       MOUSE PARALLAX
    ----------------------------------------- */

    const profile = document.querySelector(".profile-card");

    if (profile && window.innerWidth > 850) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 2;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 2;

            const rotateX = y * -4;
            const rotateY = x * 4;

            profile.style.transform =
                `translateY(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(2deg)`;

        });

    }


    /* -----------------------------------------
       BUTTON MAGNETIC EFFECT
    ----------------------------------------- */

    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .discord-big, .outline-btn"
    );

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            if (window.innerWidth <= 850) return;

            const rect = button.getBoundingClientRect();

            const x =
                event.clientX - rect.left - rect.width / 2;

            const y =
                event.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });


    /* -----------------------------------------
       SMOOTH ANCHOR SCROLL
    ----------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* -----------------------------------------
       CONSOLE BRANDING
    ----------------------------------------- */

    console.log(
        "%c NØX ",
        "background:#fff;color:#000;font-size:24px;font-weight:800;padding:8px 16px;border-radius:8px;"
    );

    console.log(
        "%c Your identity. Your void. ",
        "color:#777;font-size:12px;"
    );

});
