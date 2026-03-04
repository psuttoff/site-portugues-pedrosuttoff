const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function getCardWidth() {
    const card = document.querySelector(".card");
    return card.offsetWidth + 20; // card + gap
}

function moveCarousel() {
    carousel.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

nextBtn.addEventListener("click", () => {
    const totalCards = document.querySelectorAll(".card").length;
    const visibleCards = window.innerWidth >= 900 ? 3 :
                         window.innerWidth >= 600 ? 2 : 1;

    if (index < totalCards - visibleCards) {
        index++;
    } else {
        index = 0; // volta para o começo ⭐
    }

    moveCarousel();
});

prevBtn.addEventListener("click", () => {
    const totalCards = document.querySelectorAll(".card").length;

    if (index > 0) {
        index--;
    } else {
        index = totalCards - 1; // volta para o final ⭐
    }

    moveCarousel();
});