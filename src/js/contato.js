document.getElementById("contato-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const status = document.getElementById("mensagem-status");
  
    status.style.color = "red";
  
    if (!nome || !email || !assunto || !mensagem) {
      status.textContent = "Preencha todos os campos.";
      return;
    }
  
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      status.textContent = "Informe um email válido.";
      return;
    }
  
    if (assunto.length < 5) {
      status.textContent = "O assunto deve ter pelo menos 5 caracteres.";
      return;
    }
  
    if (mensagem.length < 10) {
      status.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
      return;
    }
  
    status.style.color = "lightgreen";
    status.textContent = "Mensagem enviada com sucesso!";
    this.reset(); // limpa o formulário
  });
  