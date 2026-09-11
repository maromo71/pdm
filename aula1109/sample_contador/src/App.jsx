import { useState } from "react";

export default function App(){

  //variavel contador para mander o estado de contagem de clique
  const [contador, setContador] = useState(0)

  return(
    <div>
      <h1>Contador</h1>
      <h2>Contagem: {contador}</h2>
      <button onClick={()=> setContador(contador + 1)}>
        Clique para Contagem
      </button>
    </div>
  )
}