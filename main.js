let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let slides = document.querySelectorAll(".item");
let nav = document.querySelectorAll("switch")
let count = 0;
let dots = document.querySelectorAll(".dot");

function showDot() {
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("actived")
    }
    dots[count].classList.add("actived")
}

function removeSlide() {
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active")
    }
};

function showSlide() {
    removeSlide();
    if (count > slides.length - 1) {
        count = 0;
    }
    if (count < 0) {
        count = slides.length - 1;
    }
    slides[count].classList.add("active")
    showDot();
};
showSlide();

nextButton.addEventListener("click", () => {
    count++;
    showSlide();
});


prevButton.addEventListener("click", () => {
    count--;
    showSlide();

});



