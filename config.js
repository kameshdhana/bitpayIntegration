// Initialize with separate variables.

const {Client, Env, Currency, Models, Tokens} = require('bitpay-sdk');

let tokens = Tokens;
tokens.merchant = '9mxPkBt7r3W1ncpzi329dkCD78KkcRr4cUC1VrpTXaJ4';
let keyFilePath = __dirname+'/../secure/private_key_test.key';
let keyPlainText = '0d7728d7f0cf9d5301d17277a6a9f86ceaaaa099c84778e1d0a9e939a6e319a7';
let configFilePath = __dirname+'/../secure/BitPay.config.json';

let client = new Client(
    null,
    Env.Test,
    keyPlainText,
    tokens
);

// console.log("clientData",client);

module.exports = client;