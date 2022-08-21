let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let slides = document.querySelectorAll(".item");
let nav = document.querySelectorAll("switch")
let dots = document.querySelectorAll(".dot");
let numberSlider = document.getElementById("number-of-slide");
let allSlideNumber = document.getElementById("number-of-all-slide")
let count = 0;

allSlideNumber.innerHTML = slides.length;


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
    if (count > slides.length - 1) {
        count = 0;
    }
    if (count < 0) {
        count = slides.length - 1;
    }
    numberSlider.innerHTML = count + 1;

    removeSlide();
    slides[count].classList.add("active");
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

for (i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", (e) => {
        count = e.target.dataset.count - 1;
        showSlide();
    });
};