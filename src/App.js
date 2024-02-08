import React, { useState } from "react";
import "./index.css"
import { Analytics } from '@vercel/analytics/react';

const App = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [reqs, setReqs] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [win, setWin] = useState(false);

    const checkInput = value => {
        let shouldError = false;
        let updatedReqs = [];

        if (value.length < 5) {
            shouldError = true;
            setErrorMessage("Your password must be at least 5 characters long");
        } else {
            updatedReqs.push("Your password contains at least 5 characters");
            setErrorMessage("");
            if (!/\d/.test(value)) {
                shouldError = true;
                setErrorMessage("Your password must contain a number");
            } else {
                updatedReqs.push("Your password contains a number");
                setErrorMessage("");
                if (!/[a-z]/.test(value) || !/[A-Z]/.test(value)) {
                    shouldError = true;
                    setErrorMessage("Your password must contain upper and lowercase letters");
                } else {
                    updatedReqs.push("Your passwordh as upper and lowercase letters");
                    setErrorMessage("");
                }
            }
        }

        setError(shouldError);
        setReqs(updatedReqs);

        if (!shouldError && updatedReqs.length === 3) {
            setWin(true);
        } else {
            setWin(false);
        }
    }

    return (
        <div className="bg-teal-100 h-full p-20">
            <Analytics />
            <div className="flex justify-center items-center">
                <h1 className="text-5xl font-bold pb-10">The Password Game</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="my-5">Please choose a password:</p>
                <input
                    className={`border border-gray-400 rounded p-2 text-gray-900 w-full text-center`}
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        checkInput(e.target.value);
                    }}

                />
                {error && <div className="bg-red-200 p-5 shadow-2xl my-10 rounded-lg w-full flex items-center">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <p className="ml-3">{errorMessage}</p>
                </div>}

                {win && <div className="bg-green-200 p-5 shadow-2xl my-10 rounded-lg w-full flex items-center">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="ml-3">You win! So safe!</p>
                </div>}

                {reqs.map(req => (
                    <div className="w-full flex items-center bg-white mt-2 p-5 shadow-2xl my-7 rounded-lg ring-offset-4 ring-green-600" key={req}>{req}: check!</div>
                ))}

            </div>
        </div >
    );
};

export default App;