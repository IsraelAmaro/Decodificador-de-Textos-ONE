

//capturando botao clicado e add funcionalidades
let botao = document.querySelectorAll('[data-botao]')
console.log(botao)

// modo de encriptação

botao.forEach(btn => {
    btn.addEventListener("click", () => {

        let areaTexto = document.querySelector('[data-texto]')
        let displays = document.querySelectorAll('[data-display]')
        let btnCopiar = document.querySelector('#btnCopiar')
        let mensagemFinal = document.querySelector('#mensagemCripto')
        let tituloMensagen = document.querySelector('#title-cod')

        //validando se o  texto está em letras minusculas

        if (areaTexto.value != areaTexto.value.toLowerCase()) {

            alert('Digite apenas letras minusculas. Tente novamente')
            location.reload()                        
        }

        //validando campo de texta para saber se esta vazio

        if (areaTexto.value != '') {

            // mostrar display de texto e botão copiar
            btnCopiar.style.display = "block"
            mensagemFinal.style.display = "block"

            displays.forEach(display => {
                display.style.display = "none"
            })

            //Validaçoes para saber qual botão foi clicado e açoes de encriptar e decriptar
            if (btn.id == 'btnCriptar') {

                //Encriptar

                let texto = areaTexto.value.split('')
                let mensagem = ''

                texto.forEach(letra => {
                    switch (letra) {
                        case "a":
                            mensagem += `ai`
                            break;
                        case "e":
                            mensagem += `enter`
                            break;
                        case "i":
                            mensagem += `imes`
                            break;
                        case "o":
                            mensagem += `ober`
                            break;
                        case "u":
                            mensagem += `ufat`
                            break;
                        case " ":
                            mensagem += ` `
                            break;
                        default:
                            mensagem += letra
                            break;
                    }
                })
                mensagemFinal.innerHTML = mensagem
            } else if (btn.id == 'btnDescriptar') {

                //Decriptar
                
            } else if (btn.id == 'btnCopiar') {

                const copiandoTexto = mensagemFinal.textContent ===""? "Não existe texto para ser copiado" : mensagemFinal.textContent

                textoCopiado(copiandoTexto)

                btnCopiar.style.display = "none"
                mensagemFinal.style.display = "none"
                displays.forEach(display => {
                    display.style.display = 'block'                    
                })
                tituloMensagen.style.color ='#0A3871'
              
                tituloMensagen.innerHTML = "Texto copiado com sucesso."
            }else {
                alert('Algo de errado aconteceu. Tente novamente')
                
            }
        }else{
            alert('Digite o texto na área indicada.')
        }

    })
})


//função para copiar texto para area de transferencia 

const textoCopiado = async (texto)=>{
    const copiaTexto = await navigator.clipboard.writeText(texto);
}