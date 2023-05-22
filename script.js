

//capturando elementos que serão utilizados 

let botao = document.querySelectorAll('[data-botao]');

let areaTexto = document.querySelector('[data-texto]');

let displays = document.querySelectorAll('[data-display]');

let btnCopiar = document.querySelector('#btnCopiar');

let mensagemFinal = document.querySelector('#mensagemCripto');

let tituloMensagen = document.querySelector('#title-cod');

// modo de encriptação

botao.forEach(btn => {
    btn.addEventListener("click", () => {

        //validando campo de texta para saber se esta vazio
        if (validarTexto(areaTexto.value)) {

            //Validaçoes para saber qual botão foi clicado e açoes de encriptar , decriptar , copiar

            if (btn.id == 'btnCriptar') {
                //Encriptar               
                mostraDisplay('mostrarMsg');
                imprimeTexto(criptografar(areaTexto.value));

            } else if (btn.id == 'btnDescriptar') {
                //Descriptar
                mostraDisplay('mostrarMsg')
                imprimeTexto(descriptografar(areaTexto.value))
                

            } else if (btn.id == 'btnCopiar') {

                let copiandoTexto = mensagemFinal.textContent
                textoCopiado(copiandoTexto)
                mostraDisplay('copiarMsg')
            }

        } else {
            alert(' Mensgem Inválida. Digite apenas letras minusculas e sem acentos. Tente novamente.')
            areaTexto.value = ''
        }
    })
})

function mostraDisplay(acao) {
    if (acao == 'mostrarMsg') {
        // mostrar display de texto e botão copiar
        btnCopiar.style.display = "block"
        mensagemFinal.style.display = "block"

        displays.forEach(display => {
            display.style.display = "none"
        })
    } else {
        if (acao == 'copiarMsg') {
            btnCopiar.style.display = "none"
            mensagemFinal.style.display = "none"
            displays.forEach(display => {
                display.style.display = 'block'
            })
            tituloMensagen.style.color = '#0A3871'

            tituloMensagen.innerHTML = "Texto copiado com sucesso."
        } else {
            btnCopiar.style.display = "none"
            mensagemFinal.style.display = "none"
            displays.forEach(display => {
                display.style.display = 'block'
            })
        }
    }
}

function imprimeTexto(texto) {

    mensagemFinal.innerHTML = texto

}

//validando se o  texto está em letras minusculas

function validarTexto(texto) {
    let regex = /([A-Zà-úÀ-Ú])/g;
    if (texto.match(regex) || areaTexto.value == 0) {
        return false
    } else {
        return true
    }

}

// encriptando mensagem

const criptografar = (mensagem) => {

    let texto = mensagem.split('')

    let codigo = ''

    texto.forEach(letra => {
        switch (letra) {
            case "a":
                codigo += `ai`
                break;
            case "e":
                codigo += `enter`
                break;
            case "i":
                codigo += `imes`
                break;
            case "o":
                codigo += `ober`
                break;
            case "u":
                codigo += `ufat`
                break;
            case " ":
                codigo += ` `
                break;
            default:
                codigo += letra
                break;
        }

    })
    return codigo
}

// decifrando mensagem 

const descriptografar = (mensagem) => {

    let textoDecifrado = mensagem
    
    textoDecifrado = textoDecifrado.replace(/ai/g,'a')
    
    textoDecifrado = textoDecifrado.replace(/enter/g,'e')
    
    textoDecifrado = textoDecifrado.replace(/imes/g,'i')

    textoDecifrado = textoDecifrado.replace(/ober/g,'o')

    textoDecifrado = textoDecifrado.replace(/ufat/g,'u')
      
    return textoDecifrado
}

//copiar texto para area de transferencia

const textoCopiado = async (texto) => {
    const copiaTexto = await navigator.clipboard.writeText(texto);
}