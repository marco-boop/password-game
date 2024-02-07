import React, { useState } from "react";
import "./index.css"

const App = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [reqs, setReqs] = useState([]);

    const checkInput = value => {

        let shouldError = false;

        let updatedReqs = [];

        if (value.length >= 5) {
            updatedReqs.push("Has 5+ chars");
        }
        if (/\d/.test(value)) {
            updatedReqs.push("Contains a number");
        }
        if (/[a-z]/.test(value) && /[A-Z]/.test(value)) {
            updatedReqs.push("Has upper and lowercase letters");
        }

        setReqs(updatedReqs);

    }



    return (
        <div className="bg-teal-100 h-full p-20">
            <div className="flex justify-center items-center">
                <h1 className="text-5xl font-bold pb-10">The Password Game</h1>
            </div>
            <ul>Requirements:
                <li>- Has 5+ chars</li>
                <li>- Contains a number</li>
                <li>- Has upper and lowercase letters</li>
            </ul>
            <p className="my-5">You typed: {input}</p>
            <div className="flex flex-col justify-center items-center">
                <p className="my-5">Please choose a password:</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        checkInput(e.target.value);
                    }}
                    className={`border border-gray-400 rounded p-2 text-gray-900`}
                />
                {error && <p>Your password must be at least 5 characters long</p>}
                <div className="mt-2">
                    {reqs.map(req => (
                        <p className="text-green-500" key={req}>{req}: check!</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;