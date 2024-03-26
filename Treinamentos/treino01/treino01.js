function exibirNome() {
    let nome = document.getElementById('tnome').value
    let qntLetras = nome.length
    alert(`O nome completo é: ${nome}`)
    document.getElementById('resultado').innerText = `O seu nome contém ${qntLetras} letras!`
}

