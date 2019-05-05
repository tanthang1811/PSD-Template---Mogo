var downArrow = document.getElementsByClassName("what-we-do-down");
var bodyWhatWeDo = document.getElementsByClassName("body-what-we-do");
var mapButton = $("#map .section-heading");
var theMap = $(".map-container iframe");

mapButton.on("click", (e) => {
    if (theMap.attr("height") == "100%") {
        theMap.attr("height", "0%");
        theMap.css("display", "none");
        $(".map-container").css("height", "auto");
        $(".open-map").addClass("active");
        $(".close-map").removeClass("active");
    } else {
        theMap.attr("height", "100%");
        theMap.css("display", "block");
        $(".map-container").css("height", "500px");
        $(".open-map").removeClass("active");
        $(".close-map").addClass("active");
    }
});

const resetBodyWhatWeDo = () => {
    Array.from(bodyWhatWeDo).forEach((e) => {
        e.classList.remove("active");
    });
    Array.from(downArrow).forEach((e) => {
        e.classList.remove("active");
    });
};

for (let index = 0; index < Array.from(downArrow).length; index++) {
    const e = Array.from(downArrow)[index];
    e.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            resetBodyWhatWeDo();
            e.target.classList.remove("active");
        } else {
            resetBodyWhatWeDo();
            e.target.classList.add("active");
            $(`.body-${index}`).toggleClass("active");
        }
    });
}