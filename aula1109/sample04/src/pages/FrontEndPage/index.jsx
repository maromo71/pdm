import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";


export default function FrontEndPage(){
    return(
        <div>
            <h1>React.js</h1>
            <p>
                O React js é ....
            </p>
            <Link to="https://react.dev/">React Js</Link>
            <BackButton />
        </div>
    )
}