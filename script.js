/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "×";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* Close mobile menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.getElementById("navbar");

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

        backTop.classList.add("show");

    } else {

        navbar.classList.remove("scrolled");

        backTop.classList.remove("show");

    }

});


/* =========================================================
   BACK TO TOP
========================================================= */

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");


if (
    window.matchMedia("(pointer:fine)").matches
) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX;

            mouseY = event.clientY;

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * 0.15;

        ringY +=
            (mouseY - ringY) * 0.15;


        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    document
        .querySelectorAll(
            "a, button, .project, .cap-card, .live-demo-btn, .resume-btn"
        )
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    document.body.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    document.body.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        });

}


/* =========================================================
   BACKGROUND MOUSE PARALLAX
========================================================= */

const backgroundGlow =
    document.querySelector(
        ".background-glow"
    );


if (
    window.matchMedia("(pointer:fine)").matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 60;

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 60;


            backgroundGlow.style.transform =
                `translate(
                    calc(-50% + ${x}px),
                    calc(-50% + ${y}px)
                )`;

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;


            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navigationLinks.forEach(link => {

            link.style.color =
                "var(--muted)";


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.style.color =
                    "var(--accent)";

            }

        });

    }
);


/* =========================================================
   PROJECT CARD 3D TILT
========================================================= */

if (
    window.matchMedia("(pointer:fine)").matches
) {

    document
        .querySelectorAll(".project")
        .forEach(card => {


            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        ((x / rect.width) -
                            0.5) * 2;


                    const rotateX =
                        ((y / rect.height) -
                            0.5) * -2;


                    card.style.transform =
                        `translateY(-6px)
                         perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });

}


/* =========================================================
   HERO IMAGE PARALLAX
========================================================= */

const heroImage =
    document.querySelector(".hero-image");


if (
    heroImage &&
    window.matchMedia("(pointer:fine)").matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 6;


            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * -4;


            heroImage.style.transform =
                `perspective(1200px)
                 rotateY(${x - 4}deg)
                 rotateX(${y}deg)`;

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const copyright =
    document.getElementById("copyright");


copyright.textContent =
    `© ${new Date().getFullYear()} Subash V`;