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

// QUIZ
const quizData = [
  { q: 'Enchentes são causadas principalmente por?', a: 'Chuvas intensas e má drenagem', o: ['Ventos fortes', 'Calor excessivo', 'Chuvas intensas e má drenagem'] },
  { q: 'Qual tecnologia usada para detectar enchentes?', a: 'Sensores IoT', o: ['Satélites', 'Sensores IoT', 'GPS'] },
  // ... (adicione até 10 perguntas)
];

let quizIndex = 0, score = 0;

function startQuiz() {
  const q = quizData[quizIndex];
  const quizBox = document.getElementById('quiz');
  quizBox.innerHTML = `<p>${q.q}</p>` +
    q.o.map((op, i) => `<button onclick="checkAnswer('${op}')">${op}</button>`).join('');
}

function checkAnswer(op) {
  if (op === quizData[quizIndex].a) score++;
  quizIndex++;
  if (quizIndex < quizData.length) {
    startQuiz();
  } else {
    document.getElementById('quiz').innerHTML = `<p>Você acertou ${score} de ${quizData.length} perguntas.</p>`;
  }
}

// VALIDAÇÃO FORMULÁRIO
function validarFormulario() {
  const campos = document.querySelectorAll('form [required]');
  for (const campo of campos) {
    if (!campo.value.trim()) {
      alert(`O campo "${campo.name}" é obrigatório.`);
      campo.focus();
      return false;
    }
  }
  return true;
}
