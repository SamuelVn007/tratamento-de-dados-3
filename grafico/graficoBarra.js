import { configuraEixo, pegarCSS } from "./comum.js"

async function criarGraficoBarra(){
    const url= 'https://raw.githubusercontent.com/SamuelVn007/2024-3-D.S-tratamento-de-dados/refs/heads/main/lista.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nome = Object.keys(dados)
    const quantidade = Object.values(dados)

    const data = [
        {
            x: nome,
            y: quantidade,
            type: 'bar',
            marker: {
                color: pegarCSS('--vermelho')
            }
        }
    ]
    const layout = {
        plot_bgcolor: pegarCSS('--branco'),
        paper_bgcolor: pegarCSS('--branco'),
        title:{
            text: 'Os salgados mais consumidos do Mundo',
            font: {
                color: pegarCSS('--vermelho'),
                family: pegarCSS('--fonte-titulo'),
                size: 25
            }
        },
    xaxis:{
        tickfont: configuraEixo,
        tickangle: 45
    },
    yaxis:{
        tickfont: configuraEixo
    }
}

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}

criarGraficoBarra()