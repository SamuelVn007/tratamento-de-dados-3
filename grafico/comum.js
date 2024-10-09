function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = {
    color: pegarCSS('--vermelho'),
    size: 9,
    family: pegarCSS('--fonte-texto')
}

export{ pegarCSS, configuraEixo }