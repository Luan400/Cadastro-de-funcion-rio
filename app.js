/* const index = require('./index') */
/* console.log('comecou') */
const form = document.querySelector('form');
const button = document.getElementById('btn')

function salvar() {

    /*Salvar*/

    localStorage.setItem('nome', document.getElementById('nome').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('telefone', document.getElementById('telefone').value);
    localStorage.setItem('cargo', document.getElementById('cargo').value);

    /*Preencher*/
    console.log('salvo')


}
/*Exibir funcionario*/

/* window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.info_nome').textContent = localStorage.getItem('nome');
    document.querySelector('.info_email').textContent = localStorage.getItem('email');
    document.querySelector('.info_tel').textContent = localStorage.getItem('telefone');
    document.querySelector('.info_cargo').textContent = localStorage.getItem('cargo');
});
 */

/* 
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const telefone = document.querySelector('#telefone').value.trim();
    const cargo = document.querySelector('#cargo').value.trim();

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('cargo', cargo);

    form.reset();

    document.querySelector('.info_nome').textContent = nome;
    document.querySelector('.info_email').textContent = email;
    document.querySelector('.info_tel').textContent = telefone;
    document.querySelector('.info_cargo').textContent = cargo;

}) */









/*const data = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    telefone: telefone
};
*/

/* fetch('http://localhost:3306/funcionario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    }); */