import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'


export default function CreatePasswordLayout() {
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    // const [error, setError] = useState('')

    const navigate = useNavigate();

    // function navigateToSeedPhrasePage() {
    //     if (password.length !== 0 || password2.length !== 0) {
    //         if (password === password2) {
    //             const path = `seed-phrase`;
    //             navigate(path);
    //             console.log('hi')
    //         } else {
    //             throw Error('Password not match').then(setError('Password not match'));
    //         }
    //     } else throw Error('Password cannot be empty').then(setError('Password cannot be empty'));
    // }

    function handlePassword() {
        if (!password || !password2) {
            alert("Cannot have empty password")
            return
        }
        if (password !== password2) {
            alert("Please enter same password")
            return
        }

        navigate(`seed-phrase`);

    }
    return (
        <div>
            <input placeholder="New password" onChange={e => setPassword(e.target.value)} />
            <input placeholder="Again" onChange={e => setPassword2(e.target.value)} />
            <button onClick={handlePassword}>Create a wallet</button>
            {/* {error && <h3>Error: {error}</h3>} */}

        </div>
    )
}