const fs = require("fs");
const client = require("../config");
const {Currency} = require("bitpay-sdk");

async function getSpecificCurrencyDetails(Currency) {
    let currencies = await client.GetCurrencyInfo(Currency).then((res)=>{console.log(res)}).catch((e)=>{console.log("error",e)});
}

getSpecificCurrencyDetails(Currency.USD);