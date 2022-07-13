const bip39 = require('bip39')

const main = async () => {
    const mnemonic = await bip39.generateMnemonic()
    console.log(mnemonic)
}
main()
