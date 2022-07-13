const bip39 = require('bip39')


async function generate() {
    const mnemonic = await bip39.generateMnemonic()
}
