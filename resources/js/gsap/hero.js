import { gsap } from "gsap";
import SplitType from "split-type";

export function heroAnimation() {
    const el = document.querySelector(".split-text");
    if (!el) return;

    const text = new SplitType(el, {
        types: "chars",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(text.chars, {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.04
    })
    .from("#hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")
    .from("#hero-link", {
        y: 20,
        opacity: 0,
        duration: 0.5
    }, "-=0.3");
}
