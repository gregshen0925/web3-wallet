import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { shuffle } from '../functions/shuffle'


export default function PageValidateSeedPhrase() {
    const navigate = useNavigate()
    const [mnemonic, setMnemonic] = useState([])
    const [shuffleIndex, setShuffleIndex] = useState([])
    const [userPick, setUserPick] = useState(new Array(12))

    //shuffle mnemonic
    useEffect(() => {
        const _mnemonic = localStorage.getItem('mnemonic').split(" ")
        const _shuffleIndex = shuffle([...Array(12).keys()])
        setMnemonic(_mnemonic)
        setShuffleIndex(_shuffleIndex)
    }, [])

    const handleMnemonic = () => {
        if (userPick.length !== 12) {
            alert("You need twelve words")
            return
        }
        const userPickString = userPick.join(' ')
        const mnemonicString = mnemonic.join(" ")
        console.log(userPickString)
        console.log(mnemonicString)
        if (userPickString !== mnemonicString) {

            alert("Wrong answer")
            return
        }
        navigate('../wallet')
    }

    const handleClick = (e, index) => {

        const _userPick = userPick
        _userPick[index] = e.target.value
        setUserPick([..._userPick])

    }

    return (
        <>
            <div>PageValidateSeedPhrase</div>
            {
                shuffleIndex.map((index) => (
                    <button key={index} onClick={event => handleClick(event, index)} value={mnemonic[index]}>{mnemonic[index]}</button>
                ))
            }

            {userPick && <h3>Your mnemonic: {userPick}</h3>}

            <button onClick={handleMnemonic}>Next</button>
        </>
    )
}
