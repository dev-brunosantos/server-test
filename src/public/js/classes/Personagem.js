class Personagem extends Validacoes {
    constructor(personagem, pontos, ataque) {

        const px = 10;
        const py = 10;

        super(px, py);
        this.personagem = personagem;
        this.pontos = pontos;
        this.personagemAtaque = ataque;

        this.vida = 100;
        this.atacando = false;
        this.movimentoAtaque = null;
    }

    iniciar() {
        this.mostrarPontos()
        this.posicionarPersonagem()
    }

    mostrarPontos() {
        this.pontos.textContent = `Pontos: ${this.pontuacao}`
    }

    posicionarPersonagem() {
        this.personagem.style.left = this.posicaoX + "px"
        this.personagem.style.bottom = this.posicaoY + "px"
    }

    movimentarPersonagem(tecla) {
        this.verificaPosicao()

        switch (tecla) {
            case 37:
                this.posicaoX -= 10;
                break;
            case 38:
                this.posicaoY += 10;
                break;
            case 39:
                this.posicaoX += 10;
                break;
            case 40:
                this.posicaoY -= 10;
                break;
            default:
                break;
        }

        this.posicionarPersonagem()
    }
}