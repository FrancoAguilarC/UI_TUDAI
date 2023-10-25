const cardsContainer = document.querySelector('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cardsContainer.children.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cardsContainer.children.length) % cardsContainer.children.length;
  updateCarousel();
});

function updateCarousel() {
  const translateValue = -currentIndex * 100 + '%';
  cardsContainer.style.transform = `translateX(${translateValue})`;
}