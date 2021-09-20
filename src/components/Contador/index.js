import React, {useState, useEffect} from "react";
import "./style.css";

const Contador = () => {
    const [number, setNumero] = useState(0)

    // useEffect(() => {
    //     alert(`O número agora é ${number}`)
    // }, [number])
    return (
        <div className="contador">
            <button onClick={() => setNumero((previousNumber) => previousNumber-1)}>
                -
            </button>
            <div>{number}</div>
            <button onClick={() => setNumero((previousNumber) => previousNumber+1)}>
                +
            </button>
        </div>
    )
}

export default Contador;