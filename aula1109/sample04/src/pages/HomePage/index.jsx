import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div>
            <h1>Escolha seu caminho</h1>
            <p className="conteudo-opcoes">
                <Link className="opcao-front-end" to="/front-end">Front-End</Link>
                <Link className="opcao-back-end" to="/back-end">Back-End</Link>
            </p>
        </div>
    )
}