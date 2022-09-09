/* 1ª forma
 export default function App(){
    
    return <div>Olá!</div>
} */


/* 2ª forma
 const variavel_qualquer = function App(){

    return <div>Olá!</div>
}

export default variavel_qualquer; */


/* 3ª forma Arrow function
const App = () => {
    return <div>Olá!</div>
}

export default App; */

import "./app.css"
import Noturno from "./Noturno"

const App = () => {
    return <div className={"container"}>
                <Noturno/>
            </div>
}

export default App;