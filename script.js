var numeroTentativas = 3;
var numeroSecreto;
var verdadesDoMundo = 0;

function sortear() {
  numeroSecreto = parseInt(Math.random() * 10) + 1;
  numeroTentativas = 3;
}
sortear();
function verdadesMundo() {
  verdadesDoMundo = verdadesDoMundo + 1;
  switch (verdadesDoMundo) {
    case 1:
      segredo.innerHTML = "Nem todas as verdades são para todos os ouvidos.";
      break;
    case 2:
      segredo.innerHTML =
        "Tente mover o mundo – o primeiro passo será mover a si mesmo.";
      break;
    case 3:
      segredo.innerHTML =
        "Não ganhe o mundo e perca sua alma; sabedoria é melhor que prata e ouro.";
      break;
    case 4:
      segredo.innerHTML =
        "Todo mundo é capaz de dominar uma dor, exceto quem a sente.";
      break;
    case 5:
      segredo.innerHTML =
        "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.";
      break;
    case 6:
      segredo.innerHTML =
        "Tente mover o mundo – o primeiro passo será mover a si mesmo.";
      break;
    case 7:
      segredo.innerHTML =
        "Compreendemos mal o mundo e depois dizemos que ele nos decepciona.";
      break;
    case 8:
      segredo.innerHTML =
        "Achar que o mundo não tem um criador é o mesmo que afirmar que um dicionário é o resultado de uma explosão numa tipografia.";
      break;
    case 9:
      segredo.innerHTML =
        "As três coisas mais difíceis do mundo são: guardar um segredo, perdoar uma ofensa e aproveitar o tempo.";
      break;
    case 10:
      segredo.innerHTML =
        "Jogador, você está em um simulador de realidade. É hora de acordar. Parabéns,voce venceu o jogo!";
      break;
  }
}
function Jogar() {
  var campoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var segredo = document.getElementById("segredo");

  console.log(numeroSecreto);
  --numeroTentativas;

  if (numeroTentativas < 0) {
    sortear();
  }
  if (chute == numeroSecreto) {
    campoResultado.innerHTML =
      "Parabéns,você ACERTOU!! <br> (E desbloqueou uma das verdades do Mundo) ";
    verdadesMundo();
    sortear();
  } else if (chute > 11 || chute < 1) {
    campoResultado.innerHTML =
      "Você deve digitar um número entre 1 e 11! Um novo número será sorteado,comece novamente";
    sortear();
  } else if (chute > numeroSecreto) {
    campoResultado.innerHTML =
      "Você errou, imagine um numero MENOR e tente novamente. O número de tentativas diminuiu para (" +
      numeroTentativas +
      ")";
  } else if (numeroTentativas <= 0) {
    campoResultado.innerHTML =
      "Infelizmente sua intuição esta FRACA!<br> Mas você pode tentar novamente, um novo número foi sorteado.";
    sortear();
  } else
    campoResultado.innerHTML =
      "Você errou, imagine um numero MAIOR e tente novamente. O número de tentativas diminuiu para (" +
      numeroTentativas +
      ")";
}