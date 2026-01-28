import { gsap } from "gsap";
import SplitType from "split-type";

export function heroAnimation() {
    const words = document.querySelectorAll(".split-text");

    // Split chars
    words.forEach((el) => {
        new SplitType(el, { types: "chars" });
    });

    // Initial state
    gsap.set(".char", { yPercent: 120 });
    gsap.set(".hero-sub, .hero-link", { y: 30, opacity: 0 });

    const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
    });

    /* TEXT IN */
    tl.to(".char", {
        yPercent: 0,
        duration: 1.1,
        stagger: 0.04,
        ease: "power4.out",
    });

    /* SPLIT TEXT */
    tl.to(
        ".word",
        {
            x: (i, el) => `${el.dataset.x}vw`,
            duration: 1.4,
        },
        "-=0.4",
    );

    tl.to(
        ".hero-sub",
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
        },
        "-=0.3",
    );

    tl.to(
        ".hero-link",
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
        },
        "-=0.4",
    );

    gsap.to(".sphere", {
        rotationY: 360,
        rotationX: 180,
        duration: 24,
        ease: "none",
        repeat: -1,
    });
}
