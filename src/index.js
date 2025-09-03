const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/controle', (req, res) => {
    // res.render('controle.html');
    res.sendFile(path.join(__dirname, 'public', 'controle.html'))
})

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('usuario', (data) => {
        console.log(data);
        if(data.nome == "Bruno Santos") {
            socket.emit('mensagem', { nome: data.nome, mensagem: 'Seja bem vindo ao sistema!' });
        }
    });

    socket.on('direcao', (direcao) => {
        io.emit('mover-personagem', direcao)
        console.log(direcao)
    })
});

server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor rodando em http://localhost:3000");
});

