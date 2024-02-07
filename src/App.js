import React, { useState } from "react";
import "./index.css"

const App = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <h1 className="text-3xl text-yellow-600 font-bold underline">Hello</h1>
            This was made from Scratch!
            <button onClick={increment}>Increment</button>
            {counter}
        </div>
    );
};

export default App;