//capturando botao clicado e add funcionalidades
let botao = document.querySelectorAll('[data-botao]')
console.log(botao);
botao.forEach(btn => {
   btn.addEventListener("click",()=>{    
    let areaTexto = document.querySelector('[data-texto]')   
    if (btn.id == 'btnCriptar') {
        let texto= areaTexto.value
        console.log(texto)
    }else if (btn.id == 'btnDescriptar') {
        console.log(btn.id)
    }else {
        console.log(btn.textContent)        
    }    
})
});