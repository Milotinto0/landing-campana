
function btn(){
        const imgs = [
        "./img/uribe.png",
        "./img/uribe2.png",
        "./img/uribe3.png"
    ];
    
    let img = document.getElementById("img");

        let aleatoria = Math.floor(Math.random()*3);
        img.src = imgs[aleatoria];


}

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('carruselSlider');
  const slides = slider.querySelectorAll('.carrusel-slide');
  const totalSlides = slides.length;
  let currentIndex = 0;
  let intervalId = null;

  // Crear indicadores (puntos)
  const indicadoresContainer = document.getElementById('indicadores');
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dot.addEventListener('click', function () {
      goToSlide(parseInt(this.dataset.index));
    });
    indicadoresContainer.appendChild(dot);
  }

  const dots = indicadoresContainer.querySelectorAll('.dot');

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Eventos para los botones
  document.getElementById('nextBtn').addEventListener('click', function () {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });

  document.getElementById('prevBtn').addEventListener('click', function () {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
  });

  // Iniciar auto‑play
  startAutoPlay();

  // Pausar al pasar el mouse
  const container = document.querySelector('.carrusel-container');
  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);
});