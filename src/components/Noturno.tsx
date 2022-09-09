import { useState } from "react";
import "./noturno.css"

const Noturno = () =>{
    const [color, setColor] = useState('white');
    
    if (color === 'white'){

    return <div style={{background: color}} className={"container"}>
            <button onClick={() =>  setColor('black')}>Ativar modo noturno</button>
        </div>
    }
    else
    {
        return <div style={{background: color}} className={"container"}>
        <button onClick={() =>  setColor('white')}>Desativar modo noturno</button>   
    </div>
    }

}

export default Noturno;