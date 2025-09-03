// main.js

const socket = io();

const jogador = document.querySelector('.personagem');
const jogadorAtaque = document.querySelector('.personagem-ataque');
const jogadorPontos = document.querySelector('#jogador-pontos');

const personagem = new Personagem(jogador, jogadorPontos, jogadorAtaque);
personagem.iniciar();

// Escuta os comandos vindos do servidor
socket.on('mover-personagem', (direcao) => {
    personagem.movimentarPersonagem(direcao);
});
