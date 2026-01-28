import { gsap } from "gsap";
import SplitType from "split-type";

export function heroAnimation() {
    const titles = document.querySelectorAll(".split-text");

    titles.forEach((el) => {
        new SplitType(el, { types: "chars" });
    });

    const chars = document.querySelectorAll(".char");

    gsap.from(chars, {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.04,
        ease: "power3.out",
    });

    gsap.from("#hero-sub", {
        y: 20,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1.0,
    });

    gsap.from("#hero-link", {
        y: 20,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1.2,
    });
}
