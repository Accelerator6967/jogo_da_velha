//contador de jogadas
let playerone = 0;
let playertwo = 0;

let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxers = document.querySelectorAll('.boxer');
let buttron = document.querySelectorAll('#button-contains button');
let messagetest = document.querySelector('#messenger');
let messagemnotification = document.querySelector('#messenger p');
let secodPlayer;

//adicionar o evento de click em todas as caixas
for (let i = 0; i < boxers.length; i++) {
  //quando há click na caixa
  boxers[i].addEventListener('click', function () {
    //saber quem vai jogar
    let me = checkme(playerone, playertwo);

    //verificR se já tem elemento na caixa
    if (this.childNodes.length == 0) {
      //adicionar o elemento dentro da caixa
      //vamos clonar o elemento
      let cloneMe = me.cloneNode(true);

      //usar função para inserir o elemento na lista
      this.appendChild(cloneMe);

      //Verificar a troca dos elementos
      if (playerone == playertwo) {
        playerone++;
      } else {
        playertwo++;
      }
      checkCondition();
    }
  });
}

//definir quem começa
function checkme(playerone, playertwo) {
  if (playerone == playertwo) {
    me = x;
  } else {
    me = o;
  }
  return me;
}

//definir quem vençeu
function checkCondition() {
  let bt1 = document.getElementById('blocker-1');
  let bt2 = document.getElementById('blocker-2');
  let bt3 = document.getElementById('blocker-3');
  let bt4 = document.getElementById('blocker-4');
  let bt5 = document.getElementById('blocker-5');
  let bt6 = document.getElementById('blocker-6');
  let bt7 = document.getElementById('blocker-7');
  let bt8 = document.getElementById('blocker-8');
  let bt9 = document.getElementById('blocker-9');

  //horizontal 1 linha
  if (
    bt1.childNodes.length > 0 &&
    bt2.childNodes.length > 0 &&
    bt3.childNodes.length > 0
  ) {
    let bt1Children = bt1.childNodes[0].className;
    let bt2Children = bt2.childNodes[0].className;
    let bt3Children = bt3.childNodes[0].className;

    //verificar a primeira linha
    if (bt1Children == 'x' && bt2Children == 'x' && bt3Children == 'x') {
      pointWinner('x');
    } else if (bt1Children == 'o' && bt2Children == 'o' && bt3Children == 'o') {
      pointWinner('o');
    }
  }

  if (
    bt4.childNodes.length > 0 &&
    bt5.childNodes.length > 0 &&
    bt6.childNodes.length > 0
  ) {
    let bt4Children = bt4.childNodes[0].className;
    let bt5Children = bt5.childNodes[0].className;
    let bt6Children = bt6.childNodes[0].className;

    //verificar a primeira linha
    if (bt4Children == 'x' && bt5Children == 'x' && bt6Children == 'x') {
      pointWinner('x');
    } else if (bt4Children == 'o' && bt5Children == 'o' && bt6Children == 'o') {
      pointWinner('o');
    }
  }

  if (
    bt7.childNodes.length > 0 &&
    bt8.childNodes.length > 0 &&
    bt9.childNodes.length > 0
  ) {
    let bt7Children = bt7.childNodes[0].className;
    let bt8Children = bt8.childNodes[0].className;
    let bt9Children = bt9.childNodes[0].className;

    //verificar a primeira linha
    if (bt7Children == 'x' && bt8Children == 'x' && bt9Children == 'x') {
      pointWinner('x');
    } else if (bt7Children == 'o' && bt8Children == 'o' && bt9Children == 'o') {
      pointWinner('o');
    }
  }

  //vertical - 1 coluna

  if (
    bt1.childNodes.length > 0 &&
    bt4.childNodes.length > 0 &&
    bt7.childNodes.length > 0
  ) {
    let bt1Children = bt1.childNodes[0].className;
    let bt4Children = bt4.childNodes[0].className;
    let bt7Children = bt7.childNodes[0].className;

    //verificar a primeira linha
    if (bt1Children == 'x' && bt4Children == 'x' && bt7Children == 'x') {
      pointWinner('x');
    } else if (bt1Children == 'o' && bt4Children == 'o' && bt7Children == 'o') {
      pointWinner('o');
    }
  }

  if (
    bt2.childNodes.length > 0 &&
    bt5.childNodes.length > 0 &&
    bt8.childNodes.length > 0
  ) {
    let bt2Children = bt2.childNodes[0].className;
    let bt5Children = bt5.childNodes[0].className;
    let bt8Children = bt8.childNodes[0].className;

    //verificar a primeira linha
    if (bt2Children == 'x' && bt5Children == 'x' && bt8Children == 'x') {
      pointWinner('x');
    } else if (bt2Children == 'o' && bt5Children == 'o' && bt8Children == 'o') {
      pointWinner('o');
    }
  }

  if (
    bt3.childNodes.length > 0 &&
    bt6.childNodes.length > 0 &&
    bt9.childNodes.length > 0
  ) {
    let bt3Children = bt3.childNodes[0].className;
    let bt6Children = bt6.childNodes[0].className;
    let bt9Children = bt9.childNodes[0].className;

    //verificar a primeira linha
    if (bt3Children == 'x' && bt6Children == 'x' && bt9Children == 'x') {
      pointWinner('x');
    } else if (bt3Children == 'o' && bt6Children == 'o' && bt9Children == 'o') {
      pointWinner('o');
    }
  }

  //diagonal 1 coluna

  if (
    bt1.childNodes.length > 0 &&
    bt5.childNodes.length > 0 &&
    bt9.childNodes.length > 0
  ) {
    let bt1Children = bt1.childNodes[0].className;
    let bt5Children = bt5.childNodes[0].className;
    let bt9Children = bt9.childNodes[0].className;

    //verificar a primeira linha
    if (bt1Children == 'x' && bt5Children == 'x' && bt9Children == 'x') {
      pointWinner('x');
    } else if (bt1Children == 'o' && bt5Children == 'o' && bt9Children == 'o') {
      pointWinner('o');
    }
  }

  if (
    bt3.childNodes.length > 0 &&
    bt5.childNodes.length > 0 &&
    bt7.childNodes.length > 0
  ) {
    let bt3Children = bt3.childNodes[0].className;
    let bt5Children = bt5.childNodes[0].className;
    let bt7Children = bt7.childNodes[0].className;

    //verificar a primeira linha
    if (bt3Children == 'x' && bt5Children == 'x' && bt7Children == 'x') {
      pointWinner('x');
    } else if (bt3Children == 'o' && bt5Children == 'o' && bt7Children == 'o') {
      pointWinner('o');
    }
  }

  //deu velha
  let counter = 0;

  for (let i = 0; i < boxers.length; i++) {
    if (boxers[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  //testar quantidade
  if (counter == 9) {
    pointWinner('Deu velha');
  }
}

//zerar placar do jogo que declarar o vencedor
function pointWinner(winner) {
  let scorecontX = document.querySelector('#scorepoint-1');
  let scorecontY = document.querySelector('#scorepoint-2');
  let mesenger = '';

  if (winner == 'x') {
    scorecontX.textContent = parseInt(scorecontX.textContent) + 1;
    mesenger = 'X ganhou(jogador 1)';
  } else if (winner == 'o') {
    scorecontY.textContent = parseInt(scorecontY.textContent) + 1;
    mesenger = 'Bolinha ganhou(jogador 2)';
  } else {
    mesenger = 'Deu velha!';
  }

  //exibir a mensagem na tela
  messagemnotification.innerHTML = mesenger;
  messagetest.classList.remove('hider');

  // esconder mesenger
  setTimeout(function () {
    messagetest.classList.add('hider');
  }, 3000);

  playerone = 0;
  playertwo = 0;

  //zerar o tabuleiro
  let boxersRemove = document.querySelectorAll('.boxer div');

  for (let i = 0; i < boxersRemove.length; i++) {
    boxersRemove[i].parentNode.removeChild(boxersRemove[i]);
  }
}
