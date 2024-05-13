let valorAtual = ''
let operacao = ''
let primeiroNumero = ''

function atualizarTela() {
    document.getElementById('tela-calculos').innerText = valorAtual
}

function adicionarDigito(digito) {
    valorAtual += digito
    atualizarTela()
}

function calcular() {
    if (primeiroNumero !== '' && operacao !== '' && valorAtual !== '') {
        let resultado

        let num1 = parseFloat(primeiroNumero)
        let num2 = parseFloat(valorAtual)

        switch (operacao) {
            case '+':
                resultado = num1 + num2
                break
            case '-':
                resultado = num1 - num2
                break
            case '*':
                resultado = num1 * num2
                break
            case '/':
                resultado = num1 / num2
                break
            default:
                console.error('Operacao_inválida:', operacao)
                return
        }
        valorAtual = resultado.toString()
        primeiroNumero = ''
        operacao = ''
        atualizarTela()
    }
}

function botaoClear() {
    valorAtual = ''
    operacao = ''
    primeiroNumero = ''
    atualizarTela()
}

function botao0() { adicionarDigito('0'); }
function botao1() { adicionarDigito('1'); }
function botao2() { adicionarDigito('2'); }
function botao3() { adicionarDigito('3'); }
function botao4() { adicionarDigito('4'); }
function botao5() { adicionarDigito('5'); }
function botao6() { adicionarDigito('6'); }
function botao7() { adicionarDigito('7'); }
function botao8() { adicionarDigito('8'); }
function botao9() { adicionarDigito('9'); }
function botaoPonto() { adicionarDigito('.'); }

function botaoSoma() {
    primeiroNumero = valorAtual
    operacao = '+'
    valorAtual = ''
}

function botaoSubtracao() {
    primeiroNumero = valorAtual;
    operacao = '-';
    valorAtual = '';
}

function botaoMultiplicacao() {
    primeiroNumero = valorAtual;
    operacao = '*';
    valorAtual = '';
}

function botaoDivisao() {
    primeiroNumero = valorAtual;
    operacao = '/';
    valorAtual = '';
}

function botaoPorcentagem() { 
    primeiroNumero = valorAtual;
    operacao = '%';
    valorAtual = '';
}

function botaoIgual() {
    calcular();
}