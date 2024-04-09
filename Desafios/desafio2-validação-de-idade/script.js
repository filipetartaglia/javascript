function VerificarIdade() {
    let idade = document.getElementById('idadeUsuario').value
    if (idade >= 18) {
        document.getElementById('resultado').innerText = `Você tem ${idade} e já pode tirar carteira de motorista!`
    } else {
        document.getElementById('resultado').innerText = `Você tem ${idade}, e não pode tirar carteira de motorista!`
    }
}