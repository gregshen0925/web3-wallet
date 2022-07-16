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
    const [shuffled, setShuffled] = useState("")
    async function shuffling() {
        const shuffledArray = shuffle(mnemonic)
        setShuffled(shuffledArray)
    }
    shuffling()


    const words = []
    const [word1, setWord1] = useState("")
    const [word2, setWord2] = useState("")
    const [word3, setWord3] = useState("")
    const [word4, setWord4] = useState("")
    const [word5, setWord5] = useState("")
    const [word6, setWord6] = useState("")
    const [word7, setWord7] = useState("")
    const [word8, setWord8] = useState("")
    const [word9, setWord9] = useState("")
    const [word10, setWord10] = useState("")
    const [word11, setWord11] = useState("")
    const [word12, setWord12] = useState("")


    async function pushWord1() {
        setWord1(shuffled[0])
        words.push(word1)
        console.log(words)
    }
    async function pushWord2() {
        setWord2(shuffled[1])
        words.push(word2)
        console.log(words)
    }
    async function pushWord3() {
        setWord3(shuffled[2])
        words.push(word3)
        console.log(words)
    }
    async function pushWord4() {
        setWord4(shuffled[3])
        words.push(word4)
        console.log(words)
    }
    async function pushWord5() {
        setWord5(shuffled[4])
        words.push(word5)
        console.log(words)
    }
    async function pushWord6() {
        setWord6(shuffled[5])
        words.push(word6)
    }
    async function pushWord7() {
        setWord7(shuffled[6])
        words.push(word7)
        console.log(words)

    }
    async function pushWord8() {
        setWord8(shuffled[7])
        words.push(word8)
        console.log(words)
    }
    async function pushWord9() {
        setWord9(shuffled[8])
        words.push(word9)
        console.log(words)
    }
    async function pushWord10() {
        setWord10(shuffled[9])
        words.push(word10)
        console.log(words)

    }
    async function pushWord11() {
        setWord11(shuffled[10])
        words.push(word11)
        console.log(words)
    }
    async function pushWord12() {
        setWord12(shuffled[11])
        words.push(word12)
        console.log(words)
    }


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
            <button onClick={pushWord1}>{shuffled[0]}</button>
            <button onClick={pushWord2}>{shuffled[1]}</button>
            <button onClick={pushWord3}>{shuffled[2]}</button>
            <button onClick={pushWord4}>{shuffled[3]}</button>
            <button onClick={pushWord5}>{shuffled[4]}</button>
            <button onClick={pushWord6}>{shuffled[5]}</button>
            <button onClick={pushWord7}>{shuffled[6]}</button>
            <button onClick={pushWord8}>{shuffled[7]}</button>
            <button onClick={pushWord9}>{shuffled[8]}</button>
            <button onClick={pushWord10}>{shuffled[9]}</button>
            <button onClick={pushWord11}>{shuffled[10]}</button>
            <button onClick={pushWord12}>{shuffled[11]}</button>

            {words && <h3>Your mnemonic: {words}</h3>}

            <button onClick={handleMnemonic}>Next</button>
        </>
    )
}
