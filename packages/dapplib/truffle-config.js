require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stomach deny spike prosper gown light army gesture'; 
let testAccounts = [
"0xa9b3ca29565dff00816b90a17327b3368c6d61a133d6e7a27794803ecefc0fb4",
"0x5faf24e53de8b9f80a85a7218ae7c7cc1a0bb164cd4eebe5cd356fba2ed10ccd",
"0x42c73057bcb837f5ee91c00d07acbd1d7cd81770e674e07d6ec2b2924eecf9c5",
"0xb45d1296592fae9f9564ad15bee7979b6f134ea13f280b90f4c31aeba2eff166",
"0xfc1cad65b8b79a9ad6d93d5c40208160671e25b9968870ae74e6becfe97857c7",
"0x6fa774a358f8d0770e6baf5ae07a4121c5bbbf73fb13c3a60545a95290f49669",
"0xda6a7097108bcc30854456a3d384fc7779b9edeae3f5109a325e6662d3753fbc",
"0x432ad1f6fd0efa4a80130d827f9f62a2928e933bbabd5600646ef14979861846",
"0xf44cf53a7c1a760f166f80baaa3de61aff772b4b06dea0d8b7005bceb1d75ae9",
"0x3533e5ea691b475c5e103ccf45b2456d7337167e39c3cf8bbc87e96fd59e9a76"
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
            version: '^0.8.0'
        }
    }
};

