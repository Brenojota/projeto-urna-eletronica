let digito = document.querySelectorAll('.botao').innerHTML;
let numero = '';
let limpar = '';
let teste = true;

// let votos = 0;
let votos10 = 0;
let votos11 = 0;
let votos12 = 0;
let votos13 = 0;
let votosbranco = 0;
let votosnulo = 0;
let result = [];
let resultado = 0

function clicou(digito) {
    numero = numero + digito
    adicionar();
}

function adicionar() {
    document.querySelector('.display').innerHTML = numero
}
function corrige(limpar) {
    document.querySelector('.display').innerHTML = limpar;
    numero = limpar;
}
function branco() {
    document.querySelector('.display').innerHTML = ("SEU VOTO SERÁ EM BRANCO. DESEJA CONFIRMAR?");
    voto = document.getElementById('display');

}
function nulo() {
    document.querySelector('.display').innerHTML = ("SEU VOTO SERÁ NULO");
    voto = document.getElementById('display');

}

function criaImagem(url) {

    const div = document.getElementById("display");

    const image = document.createElement("img");
    image.src = url;
    image.width = 190;
    image.height = 140;
    div.appendChild(image);

}
function tocaSom(som) {

    div = document.querySelector(".confirma")
    var audio = new Audio('audio.mp3');
    audio.src = url;
    div.appendChild(som);
}

function sessao() {
    div = document.getElementById("display");
    corrige();
    document.getElementById("display").innerHTML = result = (`O resultado da sessão foi : Bob Esponja obteve: ${votos10} votos || Patrick obteve: ${votos11} votos  || Seu Sirigueijo obteve : ${votos12} votos || Lulinha obteve: ${votos13} votos  || votos Nulo : ${votosnulo} votos || votos em Branco teve: ${votosbranco} votos `);
    div.appendChild(result);

}

    /* BOTÃO CONFIRMA*/
    function confirma() {
        var audio1 = new Audio();
        audio1.src = "/sounds/confirma.mp3";
        audio1.play();
        let voto = document.querySelector('.display').innerHTML;

        /* BOB ESPONJA */
        if (voto == '10') {
            document.querySelector('.display').innerHTML = limpar;
            document.querySelector('.display').innerHTML = ("SEU VOTO FOI NO BOB ESPONJA! ");
            criaImagem("./image/bob-esponja.jpg");
            votos10 += 1;
        }
        /* PATRICK TRICK */
        else if (voto == '11') {
            document.querySelector('.display').innerHTML = limpar;
            document.querySelector('.display').innerHTML = ("SEU VOTO FOI NO PATRICK TRICK! ");
            criaImagem("./image/patrick.jpg");
            votos11 += 1;

        }
        /* SEU SIRIGUEIJO */
        else if (voto == '12') {
            document.querySelector('.display').innerHTML = limpar;
            document.querySelector('.display').innerHTML = ("SEU VOTO FOI NO SEU SIRIGUEIJO! ");
            criaImagem("./image/seu-sirigueijo.jpg");
            votos12 += 1;

        }
        /* LULA MOLUSCO */
        else if (voto == '13') {
            document.querySelector('.display').innerHTML = limpar;
            document.querySelector('.display').innerHTML = ("SEU VOTO FOI NO LULA MOLUSCO! ");
            criaImagem("./image/lula-molusco.jpg");
            votos13 += 1;

        }

        /*VOTO EM BRANCO*/
        else if (voto == 'SEU VOTO SERÁ EM BRANCO. DESEJA CONFIRMAR?') {
            document.querySelector('.display').innerHTML = ("SEU VOTO FOI EM BRANCO!");
            votosbranco += 1;
        }
        else {
            document.querySelector('.display').innerHTML = ("SEU VOTO FOI NULO!");
            votosnulo += 1;
        }

        numero = '';

    }
