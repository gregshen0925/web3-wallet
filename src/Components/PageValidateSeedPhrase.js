import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function PageValidateSeedPhrase() {
    const navigate = useNavigate()
    const mnemonic = localStorage.getItem('mnemonic').split(" ")
    // shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    //shuffle mnemonic
    const shuffled = shuffle(mnemonic)
    console.log(typeof shuffled)

    const [words, setWords] = useState('')


    const handleMnemonic = () => {
        if (words.length !== 12) {
            alert("You need twelve words")
            return
        }
        if (words !== mnemonic) {
            alert("Wrong answer")
            return
        }
        navigate('../wallet')
    }
    return (
        <>
            <div>PageValidateSeedPhrase</div>
            <button onClick={() => setWords(words.push(shuffled[0]))}>{shuffled[0]}</button>
            <button onClick={() => setWords(words.push(shuffled[1]))}>{shuffled[1]}</button>
            <button onClick={() => setWords(words.push(shuffled[2]))}>{shuffled[2]}</button>
            <button onClick={() => setWords(words.push(shuffled[3]))}>{shuffled[3]}</button>
            <button onClick={() => setWords(words.push(shuffled[4]))}>{shuffled[4]}</button>
            <button onClick={() => setWords(words.push(shuffled[5]))}>{shuffled[5]}</button>
            <button onClick={() => setWords(words.push(shuffled[6]))}>{shuffled[6]}</button>
            <button onClick={() => setWords(words.push(shuffled[7]))}>{shuffled[7]}</button>
            <button onClick={() => setWords(words.push(shuffled[8]))}>{shuffled[8]}</button>
            <button onClick={() => setWords(words.push(shuffled[9]))}>{shuffled[9]}</button>
            <button onClick={() => setWords(words.push(shuffled[10]))}>{shuffled[10]}</button>
            <button onClick={() => setWords(words.push(shuffled[11]))}>{shuffled[11]}</button>

            {words && <h3>Your mnemonic: {words}</h3>}

            <button onClick={handleMnemonic}>Next</button>
        </>
    )
}
