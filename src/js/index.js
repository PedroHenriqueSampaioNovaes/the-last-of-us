const botoesCarrossel = document.querySelectorAll('.botao');
const imagesCarrossel = document.querySelectorAll('.imagem');
let carrosselActive = 0;
let timeout;

function desactiveCarrosselActive() {
  botoesCarrossel.forEach((button) => button.classList.remove('selecionado'));
  imagesCarrossel.forEach((button) => button.classList.remove('ativa'));
}

function activeCarrossel() {
  botoesCarrossel[carrosselActive].classList.add('selecionado');
  imagesCarrossel[carrosselActive].classList.add('ativa');
}

function changeCarrosselActive(index) {
  carrosselActive = index;
  desactiveCarrosselActive();
  activeCarrossel();
  autoCarrossel();
}
botoesCarrossel.forEach((button, i) =>
  button.addEventListener('click', () => changeCarrosselActive(i)),
);

function autoCarrossel() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (carrosselActive < botoesCarrossel.length - 1) {
      changeCarrosselActive(carrosselActive + 1);
    } else if (carrosselActive === botoesCarrossel.length - 1) {
      changeCarrosselActive(0);
    }
  }, 10000);
}
autoCarrossel();
