const url = 'https://raw.githubusercontent.com/SamuelVn007/2024-3-D.S-tratamento-de-dados/refs/heads/main/salgados.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados.salgados[0].nome)

    const nomeDoSalgado = dados.salgados[0].nome
    const quantidadeSalgado = dados.salgados[0].quantidade
    const comentarios = dados.salgados[0].comentario
    

    

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = `Em busca de descobrir os salgados mais consumidos no Brasil em 2024, foram feito pesquisas para cerca de 10000 pessoas sobre os salgados que eles mais consomem. Com o auxílio da inteligência artificial do google, foi possivel estimar que o salgado mais consumido foi <span>${nomeDoSalgado}</span> com um total de aproximadamente <span>${quantidadeSalgado}</span> e os comentarios: <span>${comentarios}</span>`

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}

vizualizarInformacoes()