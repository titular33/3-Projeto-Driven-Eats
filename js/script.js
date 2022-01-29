let selecaoPrato = 0;
let selecaoBebida = 0;
let selecaoSobremesa = 0;
let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
let prato;
let drink;
let doce;
let precototal;
let endereco;
let nome;
let total;

function selecionarprato(classeprato, numero) {
    const selecionado = document.querySelector(".primeira .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classeprato + "." + numero;
    const pratos = document.querySelector(seletor);
    pratos.classList.add('selecionado');

    const pratoselect = document.querySelector(".primeira .selecionado .titulo");
    pratoSelecionado = pratoselect.innerHTML;

    selecaoPrato = 1;
    verificar()
}

function selecionarbebida(classebebida, numero) {
    const selecionado = document.querySelector(".segunda .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classebebida + "." + numero;
    const bebidas = document.querySelector(seletor);
    bebidas.classList.add('selecionado');

    const bebidaselect = document.querySelector(".segunda .selecionado .titulo");
    bebidaSelecionada = bebidaselect.innerHTML;

    selecaoBebida = 2;
    verificar()
}

function selecionarsobremesa(classesobremesa, numero) {
    const selecionado = document.querySelector(".terceira .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const seletor = "." + classesobremesa + "." + numero;
    const sobremesas = document.querySelector(seletor);
    sobremesas.classList.toggle('selecionado');

    const sobremesaselect = document.querySelector(".terceira .selecionado .titulo");
    sobremesaSelecionada = sobremesaselect.innerHTML;

    selecaoSobremesa = 3;
    verificar()
}

function verificar() {

    if (selecaoPrato !== 0 && selecaoBebida !== 0 && selecaoSobremesa !== 0) {
        const antigo = document.querySelector(".fechamento");
        const final = document.querySelector(".verde");
        antigo.classList.add('escondido');
        final.classList.remove('escondido');
        final.classList.add('mostra');
    }
}

function botaoverde() {
    endereco = prompt("Qual o seu endereço?");
    nome = prompt("Qual o seu nome?");

    const tela = document.querySelector(".mascara");
    tela.classList.remove('escondido');

    prato = document.querySelector(".primeira .selecionado .titulo").innerHTML;
    drink = document.querySelector(".segunda .selecionado .titulo").innerHTML;
    doce = document.querySelector(".terceira .selecionado .titulo").innerHTML;
    precocomida = (document.querySelector(".primeira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precobebida = (document.querySelector(".segunda .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precosobremesa = (document.querySelector(".terceira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precototal = parseFloat(precocomida) + parseFloat(precobebida) + parseFloat(precosobremesa);

    const total = document.querySelector(".mascara .caixa-confirmacao .descricao .total");
    total.innerHTML = precototal.toFixed(2).replace('.', ',').replace('', 'R$ ');

    const telaprecoprato = document.querySelector(".mascara .caixa-confirmacao .descricao .valorp");
    telaprecoprato.innerHTML = precocomida.replace('.', ',').replace('', 'R$');

    const telaprecobebida = document.querySelector(".mascara .caixa-confirmacao .descricao .valorb");
    telaprecobebida.innerHTML = precobebida.replace('.', ',').replace('', 'R$');

    const telaprecosobremesa = document.querySelector(".mascara .caixa-confirmacao .descricao .valors");
    telaprecosobremesa.innerHTML = precosobremesa.replace('.', ',').replace('', 'R$');

    const telanomeprato = document.querySelector(".mascara .caixa-confirmacao .descricao .pratoselecionado");
    telanomeprato.innerHTML = pratoSelecionado;

    const telanomebebida = document.querySelector(".mascara .caixa-confirmacao .descricao .bebidaselecionada");
    telanomebebida.innerHTML = bebidaSelecionada;

    const telanomesobremesa = document.querySelector(".mascara .caixa-confirmacao .descricao .sobremesaselecionada");
    telanomesobremesa.innerHTML = sobremesaSelecionada;
}

function cancelar() {
    const cancelar = document.querySelector(".mascara");
    cancelar.classList.add('escondido');
}