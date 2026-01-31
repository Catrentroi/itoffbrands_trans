import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function statementAnimation() {
    gsap.from(".statement-text", {
        scrollTrigger: {
            trigger: ".statement",
            start: "top 75%",
        },
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
    });
}
