import React , { useState } from "react";

function Counter (){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const drcrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }
 
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={drcrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+1</button>
            
        </div>
    )
 
}

export default Counter;