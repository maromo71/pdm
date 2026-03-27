import { Link } from "react-router-dom"
import './style.css'

const BackButton = () => (
    <div className="area-botao">
        <Link className="botao-voltar" to="/">Voltar</Link>
    </div>
)
export default BackButton