import { gsap } from "gsap";
import SplitType from "split-type";

export function heroAnimation() {
    const elements = document.querySelectorAll(".split-text");
    if (!elements.length) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    elements.forEach((el, index) => {
        const split = new SplitType(el, {
            types: "chars",
        });

        tl.from(
            split.chars,
            {
                yPercent: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.04,
            },
            index * 0.15,
        );
    });

    tl.from(
        "#hero-sub",
        {
            y: 20,
            opacity: 0,
            duration: 0.6,
        },
        "-=0.4",
    ).from(
        "#hero-link",
        {
            y: 20,
            opacity: 0,
            duration: 0.5,
        },
        "-=0.3",
    );
}
