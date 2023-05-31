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

const img_X = '<img src="images/gokublack.png">';
const img_O = '<img src="images/majin.png">';


// click botao 1

function clickBtn1() {


    if (btn1 == 0 && !finalJogo) {
        jogadas++;
        if (controle == 0) {
            controle = 1;
            document.getElementById('btn1').innerHTML = img_X;
            btn1 = "X";

        } else {
            controle = 0;
            document.getElementById('btn1').innerHTML = img_O;
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
            document.getElementById('btn2').innerHTML = img_X;
            btn2 = "X";

        } else {
            controle = 0;
            document.getElementById('btn2').innerHTML = img_O;
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
            document.getElementById('btn3').innerHTML = img_X;
            btn3 = "X";

        } else {
            controle = 0;
            document.getElementById('btn3').innerHTML = img_O;
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
            document.getElementById('btn4').innerHTML = img_X;
            btn4 = "X";

        } else {
            controle = 0;
            document.getElementById('btn4').innerHTML = img_O;
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
            document.getElementById('btn5').innerHTML = img_X;
            btn5 = "X";

        } else {
            controle = 0;
            document.getElementById('btn5').innerHTML = img_O;
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
            document.getElementById('btn6').innerHTML = img_X;
            btn6 = "X";

        } else {
            controle = 0;
            document.getElementById('btn6').innerHTML = img_O;
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
            document.getElementById('btn7').innerHTML = img_X;
            btn7 = "X";

        } else {
            controle = 0;
            document.getElementById('btn7').innerHTML = img_O;
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
            document.getElementById('btn8').innerHTML = img_X;
            btn8 = "X";

        } else {
            controle = 0;
            document.getElementById('btn8').innerHTML = img_O;
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
            document.getElementById('btn9').innerHTML = img_X;
            btn9 = "X";

        } else {
            controle = 0;
            document.getElementById('btn9').innerHTML = img_O;
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
        lblJogador.innerText = 'O jogador Goku Black ganhou!';
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
        lblJogador.innerText = 'O jogador Majin Boo ganhou!';
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
        lblJogador.innerText = 'Jogador Goku Black';
    } else {
        lblJogador.innerText = 'Jogador Majin Boo';
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

    lblJogador.innerText = 'Jogador Goku black';
    lblJogadas.innerText = '(1ª Jogada)';

}