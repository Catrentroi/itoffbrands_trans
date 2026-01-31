import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function servicesAnimation() {

    // Title
    gsap.from(".services-title .line span", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 85%",
            // markers: true, // Uncomment to debug
        },
        yPercent: 120,
        stagger: 0.12,
        duration: 1.4,
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
        stagger: 0.25,
        duration: 1,
        ease: "power2.out"
    });
}
