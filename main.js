let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let slides = document.querySelectorAll(".item");
let nav = document.querySelectorAll("switch")
let count = 0;
let dots = document.querySelectorAll(".dot");

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
    slides[count].classList.add("active")
};

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('actived');
    }
    dots[n].classList.add('actived')
}

showSlide();

nextButton.addEventListener("click", () => {
    count++;
    removeSlide();
    showSlide();
    activeDot(count);
});


prevButton.addEventListener("click", () => {
    count--;
    removeSlide();
    showSlide();
    activeDot(count);
});



