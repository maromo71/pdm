import { useState } from "react"
import './style.css'

export default function Home(){
    const [aleatorio, setAleatorio] = useState(0)

    function gerarAleatorio(){
        const valor = Math.floor(Math.random() * 100) + 1
        setAleatorio(valor)
    }

    return(
        <div className="App">
            <div className="conteudo-centralizado">
                <h3>Número Aleatório</h3>
                <h1>{aleatorio}</h1>
                <div className="area-botao">
                    <label>
                        Clique no botão para gerar um valor aleatório
                    </label>
                    <button onClick={gerarAleatorio}>
                        Gerar
                    </button>
                </div>
            </div>
        </div>
    )
}