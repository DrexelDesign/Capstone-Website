import { Fancybox} from "@fancyapps/ui";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let scrollMarkers = ["#hero", "#believe","#gallery","#callout"];
let navButtons = document.querySelectorAll(".nav-button");

for (const marker of navButtons) {
    marker.addEventListener("click", function(e){
        // this will tell you which button was clicked on
        const indexValue = [].indexOf.call(navButtons, e.target);
        // this will use that information of which button was clicked on and scroll to that id
        gsap.to(window, {duration: 1, scrollTo:scrollMarkers[indexValue]});
    });
}

