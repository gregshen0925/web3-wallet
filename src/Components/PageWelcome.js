import React from 'react'
import { useNavigate } from "react-router-dom";


export default function WelcomeLayout() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `select-action`;
        navigate(path);
    }
    return (
        <div>
            <button onClick={routeChange}>Let's Start</button>
        </div>
    )

}
