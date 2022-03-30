import React, {useState} from 'react';


const FuncState = () => {
    const [counter,setCounter] = useState(0);

    return (
        <div>
            <p>Counter is {counter}</p>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={ () => setCounter (counter-1)}>-</button>
            <button onClick={ () => setCounter(1) }>Reset</button>
        </div>
    )
}


export default FuncState;