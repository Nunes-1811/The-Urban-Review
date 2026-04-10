/*Botão de troca para o modo escuro*/
const toggleButton = document.getElementById('modoEscuro');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('darkmode');
});
document.getElementById("comentarioForm").addEventListener("submit", function(event) {
  event.preventDefault(); // impede recarregar a página

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const erro = document.getElementById("erro");
  const lista = document.getElementById("lista-comentarios");

  // validação
  if (nome === "" || mensagem === "") {
    erro.textContent = "Por favor, preencha todos os campos obrigatórios.";
    return;
  }

  erro.textContent = ""; // limpa erro anterior

  // cria novo comentário
  const novoComentario = document.createElement("div");
  novoComentario.classList.add("comentario");
  novoComentario.innerHTML = `<div class= "usuario"><strong>${nome}</strong><div><p>${mensagem}</p>`;

  // adiciona o comentário no topo da lista
  lista.prepend(novoComentario);

  // limpa campos
  document.getElementById("comentarioForm").reset();
});