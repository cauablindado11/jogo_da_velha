
const intro = document.querySelector('.intro');
const introMusic = new Audio ('./audio/theme.mp3')



// Variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;

var visibilidade = true;

let jogador1 = null;
let jogador2 = null;

const img_1 = '<img src="images/gokublack.png">';
const img_2 = '<img src="images/majin.png">';
const img_3 = '<img src="images/frezza.png">';
const img_4 = '<img src="images/jiren.png">';
const img_5 = '<img src="images/cell.png">';
const img_6 = '<img src="images/goku.png">';

let dgb1 = document.getElementById('dgb1');
let dgb2 = document.getElementById('dgb2');
let dgb3 = document.getElementById('dgb3');
let dgb4 = document.getElementById('dgb4');
let dgb5 = document.getElementById('dgb5');
let dgb6 = document.getElementById('dgb6');

let sectionPersonagens = document.getElementById('containerPersonagens');
let sectionTabuleiro = document.getElementById('containerTabuleiro');

sectionTabuleiro.style.display = 'none';


intro.addEventListener('click',IniciarPartida)

function IniciarPartida (){
    introMusic.play()
}


// click botao 1

function clickBtn1() {

    let btn = document.getElementById('btn1');


    if (btn1 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn1').innerHTML = jogador1;
            btn1 = "X";
        } else {
            controle = 0;
            document.getElementById('btn1').innerHTML = jogador2;
            btn1 = "O";
        }
    }
    verificaGanhador();
}



// click botao 2

function clickBtn2() {

    if (btn2 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn2').innerHTML = jogador1;
            btn2 = "X";

        } else {
            controle = 0;
            document.getElementById('btn2').innerHTML = jogador2;
            btn2 = "O";
        }
    }

    verificaGanhador();
}



// click botao 3 

function clickBtn3() {

    if (btn3 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn3').innerHTML = jogador1;
            btn3 = "X";

        } else {
            controle = 0;
            document.getElementById('btn3').innerHTML = jogador2;
            btn3 = "O";
        }
    }

    verificaGanhador();
}



// click botao 4

function clickBtn4() {

    if (btn4 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn4').innerHTML = jogador1;
            btn4 = "X";

        } else {
            controle = 0;
            document.getElementById('btn4').innerHTML = jogador2;
            btn4 = "O";
        }
    }

    verificaGanhador();
}



// click botao 5 

function clickBtn5() {

    if (btn5 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn5').innerHTML = jogador1;
            btn5 = "X";

        } else {
            controle = 0;
            document.getElementById('btn5').innerHTML = jogador2;
            btn5 = "O";
        }
    }

    verificaGanhador();
}



// click botao 6 

function clickBtn6() {

    if (btn6 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn6').innerHTML = jogador1;
            btn6 = "X";

        } else {
            controle = 0;
            document.getElementById('btn6').innerHTML = jogador2;
            btn6 = "O";
        }
    }

    verificaGanhador();
}



// click botao 7

function clickBtn7() {

    if (btn7 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn7').innerHTML = jogador1;
            btn7 = "X";

        } else {
            controle = 0;
            document.getElementById('btn7').innerHTML = jogador2;
            btn7 = "O";
        }
    }

    verificaGanhador();
}



// click botao 8

function clickBtn8() {

    if (btn8 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn8').innerHTML = jogador1;
            btn8 = "X";

        } else {
            controle = 0;
            document.getElementById('btn8').innerHTML = jogador2;
            btn8 = "O";
        }
    }

    verificaGanhador();
}



// click botao 9

function clickBtn9() {

    if (btn9 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn9').innerHTML = jogador1;
            btn9 = "X";

        } else {
            controle = 0;
            document.getElementById('btn9').innerHTML = jogador2;
            btn9 = "O";
        }
    }

    verificaGanhador();
}



//Verifica ganhador

function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");


    //verifica se o jogador ganhou

    if (
        (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') ||
        (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') ||
        (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') ||
        (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') ||
        (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') ||
        (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') ||
        (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') ||
        (btn3 == 'X' && btn6 == 'X' && btn9 == 'X')) {
        finalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou!';
        lblJogadas.innerText = '';
        return;

        // alert('O jogador X ganhou!')
    }



    if (
        (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') ||
        (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') ||
        (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') ||
        (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') ||
        (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') ||
        (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') ||
        (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') ||
        (btn3 == 'O' && btn6 == 'O' && btn9 == 'O')) {
        finalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou!';
        lblJogadas.innerText = '';
        return;

        // alert('O jogador O ganhou!')
    }

    //verifica se deu empate
    if (jogadas == 9) {
        finalJogo = true;
        lblJogador.innerText = 'Empate';
        lblJogadas.innerText = ' ';
        return;
    }

    if (controle == 0) {
        lblJogador.innerText = 'Jogador 1';
    } else {
        lblJogador.innerText = 'Jogador 2';
    }

    lblJogadas.innerText = '(' + (jogadas + 1) + 'ª  Jogada)'


}

//Click do botao Reiniciar
function clickReiniciar() {

    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogadas = 0;
    finalJogo = false;

    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.innerHTML = ' ';
    b2.innerHTML = ' ';
    b3.innerHTML = ' ';
    b4.innerHTML = ' ';
    b5.innerHTML = ' ';
    b6.innerHTML = ' ';
    b7.innerHTML = ' ';
    b8.innerHTML = ' ';
    b9.innerHTML = ' ';

    //Reiniciar label
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');

    lblJogador.innerText = 'Jogador 1';
    lblJogadas.innerText = '(1ª Jogada)';

}


function clickDgb(selecionado) {
    let jogadorSelecionado = null;

    if (selecionado == 'gokublack') {
        jogadorSelecionado = img_1;
    } else if (selecionado == 'majin') {
        jogadorSelecionado = img_2;
    } else if (selecionado == 'frezza') {
        jogadorSelecionado = img_3;
    } else if (selecionado == 'jiren') {
        jogadorSelecionado = img_4;
    } else if (selecionado == 'cell') {
        jogadorSelecionado = img_5;
    } else if (selecionado =='goku') {
        jogadorSelecionado = img_6;
    }

    if (jogadorSelecionado == null) {
        alert('Erro ao selecionar o personagem');
        return;
    }

    let lblOrdemPersonagem = document.getElementById('ordemPersonagem');
    if (jogador1 == null) {
        jogador1 = jogadorSelecionado;
        lblOrdemPersonagem.innerText = '2º'
    } else {
        if(jogadorSelecionado == jogador1){
            alert("O mesmo personagem não pode ser selecionado.");
            return;
        }
        jogador2 = jogadorSelecionado;
        sectionPersonagens.style.display = 'none'
        sectionTabuleiro.style.display = 'block';
        document.getElementById("reiniciar").removeAttribute("hidden");
    }

    

}