const socket = io();

const botoes = document.querySelectorAll('button')

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.textContent.toLowerCase()) {
            case 'a':
                socket.emit('direcao', 37)
                break;
            case 'b':
                socket.emit('direcao', 39)
                break;
            default:
                break;
        }
    })
})