//SLIDESHOW
let slideIndex = 0;
mostrarSlide(slideIndex);

function mudarSlide(n) {
  mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

//MENU HAMBÚRGUER 
const botaoMenu = document.getElementById('botaoMenu');
const navUl = document.querySelector('nav ul');

if (botaoMenu) {
  botaoMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });
}

//TROCA DE CORES
const temas = [
  { bg: '#eaf6ff', text: '#333' },
  { bg: '#121212', text: '#121212' },
  { bg: '#fff0f5', text: '#000' }
];

function mudarTema(index) {
  document.body.style.background = temas[index].bg;
  document.body.style.color = temas[index].text;
}
