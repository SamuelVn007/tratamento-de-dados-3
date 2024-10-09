import { pegarCSS } from"./comum.js"

async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/SamuelVn007/2024-3-D.S-tratamento-de-dados/refs/heads/main/listaEscola.json'
    const res = await fetch(url)
    const dados = await res.json()
    const salgadosConsumidos = Object.keys(dados)
    const quantidadeSalgado = Object.values(dados)

    const data = [
        {
            values: quantidadeSalgado,
            labels: salgadosConsumidos,
            type: 'pie',
            textinfo: 'label + percent'
        }
    ]
    const layout = {
            height: 400,
            width: 600,
            plot_bgcolor: pegarCSS('--preto'),
            paper_bgcolor: pegarCSS('--branco')
        }

        const consumidosTitulo = document.createElement('h3')
        consumidosTitulo.classList.add('caixa-grafico_texto')
        consumidosTitulo.innerHTML = `Os <span>salgados</span> mais consumidos da escola`

        const grafico = document.createElement('div')
        grafico.className = 'grafico-disco'
        document.getElementById('caixa-grafico').appendChild(consumidosTitulo)
        document.getElementById('caixa-grafico').appendChild(grafico)
        Plotly.newPlot(grafico, data, layout)

}

criarGraficoPizza()