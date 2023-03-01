/* const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

async function connect() {
    if (global.connectionn && global.connection, state !== 'disconnected')
        return glocal.connection;
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/cadastrofuncionario');
    console.log('conectou no mysql');
    global.connection = connection;
    return connection;
}


app.post('/funcionario', (req, res) => {
    const { nome, sobrenome, email, telefone } = req.body;
    const sql = 'INSERT INTO funcionarios (nome, sobrenome, email, telefone) VALUES (?, ?, ?, ?)';
    connection.query(sql, [nome, sobrenome, email, telefone], (err, result) => {
        if (err) throw err;
        console.log('Funcionário adicionado com sucesso!');
        res.send('Funcionário adicionado com sucesso!');
    });
});

app.listen(3306, () => {
    console.log('Server conectado na porta 3000');
}); */