import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";


export default function BackEndPage(){
    return(
        <div>
            <h1>Node.js</h1>
            <p>
                O Node.js .......
            </p>
            <Link to="https://nodejs.org/pt-br">Node.js</Link>
            <BackButton />
        </div>
    )
}