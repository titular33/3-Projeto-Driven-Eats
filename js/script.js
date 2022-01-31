let selecaoPrato = 0;
let selecaoBebida = 0;
let selecaoSobremesa = 0;
let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
let prato;
let drink;
let doce;
let precoTotal;
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
        selecionado.classList.toggle('selecionado');
    }

    const seletor = "." + classesobremesa + "." + numero;
    const sobremesas = document.querySelector(seletor);
    sobremesas.classList.add('selecionado');

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
    precoComida = (document.querySelector(".primeira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precoBebida = (document.querySelector(".segunda .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precoSobremesa = (document.querySelector(".terceira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precoTotal = parseFloat(precoComida) + parseFloat(precoBebida) + parseFloat(precoSobremesa);

    const total = document.querySelector(".mascara .caixa-confirmacao .descricao .total");
    total.innerHTML = precoTotal.toFixed(2).replace('.', ',').replace('', 'R$ ');

    const telaprecoprato = document.querySelector(".mascara .caixa-confirmacao .descricao .valorp");
    telaprecoprato.innerHTML = precoComida.replace('.', ',').replace('', 'R$');

    const telaprecoBebida = document.querySelector(".mascara .caixa-confirmacao .descricao .valorb");
    telaprecoBebida.innerHTML = precoBebida.replace('.', ',').replace('', 'R$');

    const telaprecoSobremesa = document.querySelector(".mascara .caixa-confirmacao .descricao .valors");
    telaprecoSobremesa.innerHTML = precoSobremesa.replace('.', ',').replace('', 'R$');

    const telanomeprato = document.querySelector(".pratoselecionado");
    telanomeprato.innerHTML = pratoSelecionado;

    const telanomebebida = document.querySelector(".bebidaselecionada");
    telanomebebida.innerHTML = bebidaSelecionada;

    const telanomesobremesa = document.querySelector(".sobremesaselecionada");
    telanomesobremesa.innerHTML = sobremesaSelecionada;
}
function wpp()

{
       let nome = prompt("Qual é o seu nome? ");
        let endereco = prompt("Qual é o seu endereço? ")
        let texto;
    
        texto ="Olá, gostaria de fazer o pedido:\n- Prato:"+" "+pratoSelecionado+"\n- Bebida:" + " "+bebidaSelecionada+"\n- Sobremesa:" + " "+sobremesaSelecionada+ "\nTotal:" + " " + "R$" +" " + precoTotal.toFixed(2)+"\nNome: "+nome+"\nEndereço: "+endereco;     
        window.open("https://wa.me/5532999881997?text="+encodeURI(texto));
        
}

function cancelar() {
    const cancelar = document.querySelector(".mascara");
    cancelar.classList.add('escondido');
}
 