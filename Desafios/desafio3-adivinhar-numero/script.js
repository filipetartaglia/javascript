//Variaveis usados para o código
let numeroCerto = Math.floor(Math.random() * 100) + 1
let mensagem = document.getElementById('resultado')
let tentativas = 0

//Função para verificar se o número esta certo ou errado 
function VerificarNumero() {
    let palpite = (document.getElementById('numeroDigitado')).value
    tentativas++

    if (palpite == numeroCerto) {
        mensagem.innerText = `Parabéns! O número digitado está correto! ${numeroCerto}`
        document.getElementById('botaoVerificar').style.display = 'none'
    } else if (palpite < numeroCerto) { 
        mensagem.innerText = `O número certo é maior que ${palpite}`
    } else if (palpite > numeroCerto) {
        mensagem.innerText = `O número certo é menor que ${palpite}`
    }

    document.getElementById('tentativas').innerText = `Tentativas: ${tentativas}`
}

//Ao clicar na tecla Enter, ele vai acionar a função de VerificarNumero
document.getElementById('numeroDigitado').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        VerificarNumero()
    }
})

//Função que vai reiniciar os dados do jogo e iniciar um novo
function ReiniciarJogo() {
    numeroCerto = Math.floor(Math.random() * 100) + 1
    tentativas = 0
    document.getElementById('tentativas').innerText = ''
    mensagem.innerText = ''
    document.getElementById('numeroDigitado').value = ''
    document.getElementById('botaoVerificar').style.display = 'inline'
}