import gsap from "gsap";

export function heroAnimation() {
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 0.9
        }
    });

    tl.from(".hero-title .line span", {
        yPercent: 120,
        stagger: 0.12
    })
    .from(".hero-sub", {
        y: 20,
        autoAlpha: 0
    }, "-=0.3");
}
