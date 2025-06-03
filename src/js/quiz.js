const perguntas = [
    {
      pergunta: "O que causa as enchentes nas cidades?",
      opcoes: [
        "Excesso de chuva e falta de drenagem",
        "Sol forte e calor",
        "Falta de energia elétrica",
        "Uso de ventiladores em excesso"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é uma boa prática para evitar entupimento de bueiros?",
      opcoes: [
        "Jogar lixo na rua",
        "Plantar árvores nas calçadas",
        "Descartar lixo corretamente",
        "Lavar a calçada com mangueira"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um sistema de drenagem urbana?",
      opcoes: [
        "Rede de esgotos",
        "Rede de transporte",
        "Rede de captação e escoamento de águas da chuva",
        "Rede de cabos de internet"
      ],
      correta: 2
    },
    {
      pergunta: "Qual atitude ajuda a prevenir enchentes?",
      opcoes: [
        "Construir em áreas de alagamento",
        "Preservar áreas verdes",
        "Cobrir rios com cimento",
        "Tapar bueiros"
      ],
      correta: 1
    },
    {
      pergunta: "As enchentes podem ser agravadas por:",
      opcoes: [
        "Uso de energia renovável",
        "Descarte correto do lixo",
        "Impermeabilização do solo",
        "Reuso da água"
      ],
      correta: 2
    },
    {
      pergunta: "O que são áreas de risco em relação às enchentes?",
      opcoes: [
        "Regiões com muita sombra",
        "Locais altos e secos",
        "Áreas propensas a alagamentos e deslizamentos",
        "Parques urbanos com árvores"
      ],
      correta: 2
    },
    {
      pergunta: "Como as árvores ajudam na prevenção de enchentes?",
      opcoes: [
        "Bloqueando o vento",
        "Reduzindo a poluição do ar",
        "Facilitando a infiltração da água no solo",
        "Aumentando a temperatura local"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma galeria pluvial?",
      opcoes: [
        "Sistema de esgoto doméstico",
        "Canal que transporta água da chuva",
        "Rede elétrica subterrânea",
        "Canal para escoamento de lixo"
      ],
      correta: 1
    },
    {
      pergunta: "O descarte de óleo de cozinha na pia pode:",
      opcoes: [
        "Ajudar a limpar os canos",
        "Causar entupimentos e poluir rios",
        "Melhorar o funcionamento da rede de esgoto",
        "Reduzir enchentes"
      ],
      correta: 1
    },
    {
      pergunta: "Qual ação coletiva pode prevenir enchentes?",
      opcoes: [
        "Ignorar alertas da Defesa Civil",
        "Desmatar encostas",
        "Campanhas de conscientização sobre o lixo",
        "Construir mais ruas asfaltadas"
      ],
      correta: 2
    }
];
  
let indice = 0;
let pontuacao = 0;
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const btnProxima = document.getElementById("proxima");
const resultadoEl = document.getElementById("resultado");
  
function carregarPergunta() {
    const atual = perguntas[indice];
    perguntaEl.textContent = atual.pergunta;
    opcoesEl.innerHTML = "";
    btnProxima.disabled = true;
  
    atual.opcoes.forEach((opcao, i) => {
      const botao = document.createElement("button");
      botao.textContent = opcao;
      botao.addEventListener("click", () => selecionarOpcao(botao, i));
      opcoesEl.appendChild(botao);
    });
}
  
function selecionarOpcao(botao, i) {
    [...opcoesEl.children].forEach(btn => btn.disabled = true);
    botao.classList.add("selecionado");
    btnProxima.disabled = false;
  
    if (i === perguntas[indice].correta) {
      pontuacao++;
    }
}
  
btnProxima.addEventListener("click", () => {
    indice++;
    if (indice < perguntas.length) {
      carregarPergunta();
    } else {
      mostrarResultado();
    }
});
  
function mostrarResultado() {
    perguntaEl.textContent = "Quiz Finalizado!";
    opcoesEl.innerHTML = "";
    btnProxima.style.display = "none";
    resultadoEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}
  
carregarPergunta();
  