/*Botão de troca para o modo escuro*/

const toggleButton = document.getElementById('modoEscuro');
const body = document.body;
const imgTema = document.getElementById('imgTema');

// Função para descobrir o caminho correto da imagem
function atualizarImagem(isDark) {
    if (!imgTema) return;

    // Usando caminho absoluto (começando com /)
    // Isso ignora onde o arquivo HTML está e foca na raiz do servidor
    const pathPrefix = '../src/img/'; 
    
    if (isDark) {
        imgTema.src = pathPrefix + 'dark.png';
    } else {
        imgTema.src = pathPrefix + 'light.png';
    }
}

// 1. Ao carregar a página
const isDarkSaved = localStorage.getItem('darkmode') === 'true';
if (isDarkSaved) {
    body.classList.add('darkmode');
}
atualizarImagem(isDarkSaved);

// 2. Evento de clique
toggleButton.addEventListener('click', () => {
    const isDark = body.classList.toggle('darkmode');
    localStorage.setItem('darkmode', isDark);
    atualizarImagem(isDark);
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