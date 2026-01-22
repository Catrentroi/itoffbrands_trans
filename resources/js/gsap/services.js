import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function servicesAnimation() {

    // Title
    gsap.from(".services-title .line span", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 75%",
        },
        yPercent: 120,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out"
    });

    // Items
    gsap.from(".service-item", {
        scrollTrigger: {
            trigger: ".services-list",
            start: "top 80%",
        },
        y: 30,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
    });
}
