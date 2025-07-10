import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import Typed from "typed.js";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(SplitText);
export default {
  install(app) {
    app.config.globalProperties.$gsap = gsap;
    app.config.globalProperties.$Typed = Typed;
    app.config.globalProperties.$ScrollSmoother = ScrollSmoother;
    app.config.globalProperties.$SplitText = SplitText;
    app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
  },
};
