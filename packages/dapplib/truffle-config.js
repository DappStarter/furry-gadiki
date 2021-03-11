require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stool radar museum coin hard light army gate'; 
let testAccounts = [
"0x8291ca69da7c9b5ba7cf978837b9786188cbf72253d6924b3f39a7c2b4dfed4f",
"0x74e2e237e5012b14bfbbb8c2bb7fe19c92cbd09f8833602e87cc3165b73a5928",
"0x75c485a3af4217282f52780090aaebb10277963455864f167e93a1d53e51a73f",
"0x6bb2fbeab3479c2efcb8891df717834653dee26205379e8c0407b2fd5cde8f76",
"0x338f48aa6f5f4379c2949af8e5c64407241698030366470abf64363daf493680",
"0xcc94f727b2af3ed756a35786627ffa0b50db344a66ca8512bf3be28dbdd1e772",
"0x77d3bfaeb7dd31edcc0a70d810fa51f9a66ab5ee44be578ef1dd8ff8fc198fe7",
"0x58a9950ca8f1f1940967efc0b84be3336d12104d680a97fe41c5f85091dac71f",
"0x8c3fc2bdb7c333469d58e7b2e265adbb614b54f2ab4414564ac0de5e9c3e65de",
"0x4fcc0e43aabc16478e402fc7bc2a90b5f34e60e2f00cc284a06787ca1d6a7d04"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
