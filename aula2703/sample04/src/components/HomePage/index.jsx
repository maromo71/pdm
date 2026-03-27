import { Link } from 'react-router-dom'
import './style.css'

const HomePage = () => (
    <div>
        <h1>
            Escolha o seu caminho:
        </h1>
        <div className="conteudo-opcoes">
            <Link className="opcao-front-end" to="/front-end">Front-End</Link>
            <Link className="opcao-back-end" to="/back-end">Back-End</Link>
        </div>
    </div>
)
export default HomePage