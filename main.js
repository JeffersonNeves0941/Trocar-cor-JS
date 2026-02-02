'use strict'

const botaoTrocaCor = document.getElementById("botao-trocar-cor")

function trocaCor() {
    const corUsuario = document.getElementById("cor-usuario").value
    document.documentElement.style.setProperty("--color-bg", corUsuario)
}

botaoTrocaCor.addEventListener('click' , trocaCor)