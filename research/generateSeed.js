const bip39 = require('bip39')
const { hdkey } = require('ethereumjs-wallet')

// create mnemonic code
const mnemonic = bip39.generateMnemonic()
console.log("mnemonic:", mnemonic)

// mnemonic code convert to seed
// password?: string 
// recommend adding password to prevent malicious user getting our keypair with just mnemonic
const seed = bip39.mnemonicToSeedSync(mnemonic, 'password')
console.log("seed:", seed)

// generating HD Wallet with seed。Master Key: m/44'/60'/0'/0/0
const hdWallet = hdkey.fromMasterSeed(seed)
console.log("hdWallet:", hdWallet)

// derive master key with path: m/44'/60'/0'/0/0
// generate the first keypair of the first eth account of the wallet
// m / purpose' / coin_type' / account' / change / address_index
const keyPair1 = hdWallet.derivePath("m/44'/60'/0'/0/0")
console.log("keyPair1:", keyPair1)

// get wallet with keypair1
const wallet1 = keyPair1.getWallet()
console.log("wallet1:", wallet1)

const privBuffer = wallet1.getPrivateKey()
const privateKey = wallet1.getPrivateKeyString()
console.log("private key:", privateKey)

const publicKey = wallet1.getPublicKeyString()
console.log('public key:', publicKey)

// wallet address
const address1 = wallet1.getAddressString()
console.log("address1:", address1)
// Encoding Address
const encAddress1 = wallet1.getChecksumAddressString()
console.log("encAddress1:", encAddress1)