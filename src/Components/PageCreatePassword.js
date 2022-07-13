import React from 'react'
import { useNavigate } from "react-router-dom";



export default function CreatePasswordLayout() {
    const navigate = useNavigate();

    function navigateToSeedPhrasePage() {
        console.log('hi')

        let path = `seed-phrase`;
        navigate(path);
        console.log('hi')
    }
    return (
        <div>
            input password
            type again
            <button onClick={navigateToSeedPhrasePage}>Create a wallet</button>
        </div>
    )
}