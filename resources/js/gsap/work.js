import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function workAnimation() {

    gsap.from(".work-item", {
        scrollTrigger: {
            trigger: ".work-grid",
            start: "top 80%",
        },
        y: 40,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out"
    });
}
