import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function PageSeedPhrase() {
    const navigate = useNavigate()

    const [mnemonic, setMnemonic] = useState("")
    async function generate() {
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "text/html; charset=UTF-8",
            },

        }
        fetch('http://localhost:8000/create-mnenomic', options).then(result => result.text()).then(data => {
            setMnemonic(data)
            localStorage.setItem('mnemonic', data)

        })
    }
    const handleSubmit = () => {
        if (!mnemonic) {
            alert("You haven't generate seed phrase")
            return
        }
        navigate('../create-password/validate-seed-phrase')
    }
    return (
        <>
            <div>PageSeedPhrase</div>
            <button onClick={generate}> Generate</button>
            <div>{mnemonic}</div>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}


