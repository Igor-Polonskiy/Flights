import React, { useState } from "react";

const Counter = function () {
    const [count, setCounter] = useState(0)

    
  function incremrnt(){
    setCounter(count+1)
  }
  function decremrnt(){
    setCounter(count-1)
  }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incremrnt}>Incremrnt</button>
            <button onClick={decremrnt}>Decremrnt</button>
        </div>
    )

}
export default Counter;