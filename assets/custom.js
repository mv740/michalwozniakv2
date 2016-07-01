/**
 * Created by Michal Wozniak on 7/1/2016.
 */
//removing intro
function hideIntro() {
    var element = document.getElementById("IntroBody");
    element.classList.add("fadeOutUp");
}
setTimeout(hideIntro,4000);
