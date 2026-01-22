import './bootstrap';
import './animation';

import { heroAnimation } from "./gsap/hero";
import { servicesAnimation } from "./gsap/services";
import { statementAnimation } from "./gsap/statement";
import { workAnimation } from "./gsap/work";

document.addEventListener("DOMContentLoaded", () => {
    heroAnimation();
    servicesAnimation();
    statementAnimation();
    workAnimation();
});
