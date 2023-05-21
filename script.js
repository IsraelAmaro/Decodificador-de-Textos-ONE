

//capturando botao clicado e add funcionalidades
let botao = document.querySelectorAll('[data-botao]')

// modo de encriptação
botao.forEach(btn => {
    btn.addEventListener("click", () => {
        let areaTexto = document.querySelector('[data-texto]')
        
        let displays = document.querySelectorAll('[data-display]')
        let btnCopiar = document.querySelector('#btnCopiar')
        let mensagemFinal = document.querySelector('#mensagemCripto')
        btnCopiar.style.display ="block"
        mensagemFinal.style.display = "block" 

        displays.forEach(display=>{
            display.style.display = "none"
        })

        if (btn.id == 'btnCriptar') {   
            let a = areaTexto.value.split('')
            let mensagem = ''
            a.forEach(letra=> {
                switch (letra) {
                    case "a":
                        mensagem +=`ai`
                        break;
                        case "e":
                         mensagem +=`enter`
                        break;
                        case "i":
                            mensagem +=`imes`
                        break;
                        case "o":
                            mensagem +=`ober`
                        break;
                        case "u":
                            mensagem +=`ufat`
                        break;
                        case " ":
                            mensagem +=` `
                        break;                
                    default:
                        mensagem += letra
                        break;
                }    
            })      
            mensagemFinal.innerHTML = mensagem
        } else if (btn.id == 'btnDescriptar') {
            console.log(btn.id)
        } else {
            console.log(btn.textContent)
        }
    })
})


