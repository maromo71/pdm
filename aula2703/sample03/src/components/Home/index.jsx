import './style.css'
import { useState } from 'react'

function Home(){
    const [numeroAleatorio, setNumeroAleatorio] = useState(0)

    function gerarNumero(){
        const num = Math.floor(Math.random() * (100 -1) + 1)
        setNumeroAleatorio(num)
    }

    return(
        <div className="conteudo-centralizado">
            <h3>Numero Aleatorio: </h3>
            <h1>{numeroAleatorio}</h1>
            <div className="area-botao">
                <label>
                    Clique no botão abaixo para gerar o número:
                </label>
                <button onClick={gerarNumero}>
                    Gerar Número
                </button>
            </div>
        </div>
    )
}
export default Home