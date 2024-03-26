function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        imagem.src = 'fotos/fotomanha.jpg'
        document.body.style.background = '#CADEE5' 
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        imagem.src = 'fotos/fototarde.jpg'
        document.body.style.background = '#E9C998'
    } else {
        //BOA NOITE!
        imagem.src = 'fotos/fotonoite.jpg'
        document.body.style.background = '#4F3B5E'
    }
}