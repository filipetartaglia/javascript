function somarNumeros() {
   let nsoma1 = parseFloat(document.getElementById('num1').value)
   let nsoma2 = parseFloat(document.getElementById('num2').value)
   let ressoma = nsoma1 + nsoma2
   document.getElementById('resultado').innerText = `A soma dos números ${nsoma1} + ${nsoma2} é igual a: ${ressoma}`
}

function subtrairNumeros() {
    let nsub1 = parseFloat(document.getElementById('num1').value)
    let nsub2 = parseFloat(document.getElementById('num2').value)
    let ressub = nsub1 - nsub2
    document.getElementById('resultado').innerText = `A subtração dos números ${nsub1} - ${nsub2} é igual a: ${ressub}`
}

function multiplicarNumeros() {
    let nmult1 = parseFloat(document.getElementById('num1').value)
    let nmult2 = parseFloat(document.getElementById('num2').value)
    let resmult = nmult1 * nmult2
    document.getElementById('resultado').innerText = `A multiplicação dos números ${nmult1} x ${nmult2} é igual a: ${resmult}`
}

function dividirNumeros() {
    let ndiv1 = parseFloat(document.getElementById('num1').value)
    let ndiv2 = parseFloat(document.getElementById('num2').value)
    let resdiv = ndiv1 / ndiv2
    document.getElementById('resultado').innerText = `A divisão dos números ${ndiv1} / ${ndiv2} é igual a: ${resdiv}`
}

function zerarValores() {
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('resultado').innerText = ''
}