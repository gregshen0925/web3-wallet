const express = require('express')
const app = express()
const port = 8000
const bip39 = require('bip39')
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/create-mnenomic', async (req, res) => {

    const mnemonic = await bip39.generateMnemonic()
    console.log('create mnenomic')
    res.send(mnemonic)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})