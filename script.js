const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasUsadas = 0;

const mensagem = document.getElementById('mensagem');
const tentativas = document.getElementById('tentativas');

tentativas.textContent = "Tentativas restantes: " + (maxTentativas - tentativasUsadas);

function fazerPalpite() {
  const input = document.getElementById('palpite');
  let palpite = parseInt(input.value);

  while ( palpite < 1 || palpite > 100) {
    mensagem.textContent = "Por favor, digite um número válido entre 1 e 100.";
    return;
  }

  tentativasUsadas++;

  for (let i = 0; i < 1; i++) {
    if (palpite === numeroSecreto) {
      mensagem.textContent = "Parabens! Você acertou o numero " + numeroSecreto;
      desabilitarJogo();
    } else if (tentativasUsadas >= maxTentativas) {
      mensagem.textContent = "Fim de jogo! O número secreto era " + numeroSecreto + ".";
      desabilitarJogo();
    } else if (palpite < numeroSecreto) {
      mensagem.textContent = "O número secreto é maior.";
    } else {
      mensagem.textContent = "O número secreto é menor.";
    }

    tentativas.textContent = "Tentativas restantes: " + (maxTentativas - tentativasUsadas);
    input.value = '';
    input.focus();
  }
}

function desabilitarJogo() {
  document.getElementById('palpite').disabled = true;
  document.querySelector('button').disabled = true;
}
console.log(numeroSecreto);
