// EFEITO PARALLAX

const banner = document.querySelector(".banner");

window.addEventListener("scroll", function() {

    const movimento = window.scrollY;

    if (banner && movimento < banner.offsetHeight) {
        banner.style.backgroundPositionY = movimento * 0.4 + "px";
    }

});