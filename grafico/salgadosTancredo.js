import { pegarCSS } from "./comum.js"

async function graficoTancredo(){
    const url = 'https://raw.githubusercontent.com/SamuelVn007/tratamento-de-dados-2/refs/heads/main/tancredoSalgados.json'
    const res = await fetch(url)
    const dados = await res.json()
    const salgadosVotados = dados.slice(1).map( salgados => salgados[1])
    const contagemSalgados = salgadosVotados.reduce((acc, salgadosVotados) => {
        acc[salgadosVotados] = (acc[salgadosVotados] || 0) + 1
        return acc
    }, {})

    console.table(dados)

    const valores = Object.values(contagemSalgados)
    const etiqueta = Object.keys(contagemSalgados)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout = 
    {
        plot_bgcolor: pegarCSS('--laranja'),
        paper_bgcolor: pegarCSS('--verde-escuro'),
        font:{
            color: pegarCSS('--laranja'),
            family: pegarCSS('--fonte-titulo'),
            size: 16,
        }
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titulo')
    pesquisaTitulo.innerHTML = `Os consoles mais votados no <span>Colégio Tancredo</span>`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false
    }
    Plotly.newPlot(grafico, data, layout)

    const caixa = document.getElementById('caixa-grafico')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = 'Segundo pesquisas feitas pelo colégio <span>Tancredo Neves</span> foi notado que empatados com <span>25%</span>, tanto a  <span>bolinha de queijo</span> e a <span>coxinha</span> foram os preferidos do <span>Colégio Tancredo</span>'
    caixa.appendChild(paragrafo)
}
graficoTancredo()