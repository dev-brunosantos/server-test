class Validacoes {
    constructor(px, py) {
        this.posicaoX = px;
        this.posicaoY = py;
        this.pontuacao = 0;
    }

    acrescentarPontos() {
        this.pontuacao += 1;
    }

    verificaPosicao() {
        if(this.posicaoX <= 0) {
            return this.posicaoX = 0
        }
        if(this.posicaoX >= 430) {
            return this.posicaoX = 430
        }
        if(this.posicaoY <= 0) {
            return this.posicaoY = 0
        }
        if(this.posicaoY >= 430) {
            return this.posicaoY = 430
        }
    }
}