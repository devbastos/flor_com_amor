'use strict';
//API cep

//toda vez que for pesquisar um novo cep limpe os campos
const limparFormmulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';
}

//ao preencher o cep e estiver correto preenche os campos automaticamente
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;
}


const pesquisaCep = async() => {
    limparFormmulario(); //toda vez que for pesquisar um novo cep limpe os campos

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')) {
        alert('CEP não Encontrado!')
    } else {
        preencherFormulario(endereco);
    }
}

document.getElementById('cep')
    .addEventListener('focusout', pesquisaCep);

// API end