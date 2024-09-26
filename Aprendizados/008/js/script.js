// onclick - Disparado quando recebe um click

function eventoClick() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

// ondblclick - Disparado quando clique dublo

function eventoDblClick() {
    alert('Evento de clique dublo!');
}

// onmouseover - Quando o mouse está sobre.

function mudaCor() {
    let caixaDeCor = document.getElementById("teste");
    caixaDeCor.style.backgroundColor = "red";
}

// onmouseout - Quando o mouse é movido para fora do elemento

function voltaCor() {
    let caixaDeCor = document.getElementById("teste");
    caixaDeCor.style.backgroundColor = "blue";
}

// onmousemove - Quando o mouse é movido no elemento

function adicionaTexto() {
    let paragrafo = document.getElementById("texto");
    paragrafo.append('O mouse moveu');
}

// onmousedown - Quando o clique do botão for pressionado

function clicouTela() {
    alert("Clicou na tela!")
}

// onmouseup - Quando o clique do botão é liberado 

// onfocus - Quando o elemento recebe foco. Válido para input...

function campoFocado() {
    console.log("Campo Focado!")
}

// onchange - Quando existe mudança no conteúdo

// onblur - Qundo o elemento perde o foco

// onkeydown - Quando uma tecla é pressionada

// onkeypress - Quando uma tecla é pressionada e solta

// onkeyup - Quando uma tecla é solta sobre um elemento

// onload - Quando a página terminou de ser carregada. Body

// onresize - Quando há um redimencionamento da janela