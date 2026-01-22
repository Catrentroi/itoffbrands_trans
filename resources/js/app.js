import './bootstrap';
import './animation';
import { heroAnimation } from "./gsap.js";
import { servicesAnimation } from "./gsap/services";
import { statementAnimation } from "./gsap/statement";

document.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
    heroAnimation();
    servicesAnimation();
    statementAnimation();
    workAnimation();
});