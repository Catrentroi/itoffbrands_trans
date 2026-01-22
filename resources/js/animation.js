import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    ScrollTrigger.batch("[data-gsap]", {
        start: "top 85%",
        once: true,
        onEnter: batch => {
            gsap.from(batch, {
                y: 24,
                autoAlpha: 0,
                duration: 0.55,
                ease: "power2.out",
                stagger: 0.12
            });
        }
    });

    gsap.to(progressBar, {
        width: () => (scrollY / docHeight) * 100 + "%",
        ease: "none",
        scrollTrigger: { scrub: 0.3 }
    });


    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
});
