import { Link } from "react-router-dom";


export default function BackButton(){
    return(
        <div className="area-botao">
            <Link className="botao-voltar" to="/">Voltar</Link>
        </div>
    )
}