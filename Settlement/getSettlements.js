const fs = require("fs");
const client = require("../config");
const {Models, InvoiceStatus, Currency} = require("bitpay-sdk");

let retrievedSettlements;
// let retrievedSettlement;
// let firstSettlement;
// let date = new Date();
let dateEnd = "2023-03-08";
let dateStart = "2023-03-06";
let status = "completed";
let limit = 30;
let offset = 0;

async function getSettlements(Currency, dateStart, dateEnd, status, limit, offset){
    retrievedSettlements = await client.GetSettlements(Currency, dateStart, dateEnd, status, limit, offset).then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.log(e,"error");
    });
}

getSettlements(Currency.USD, dateStart, dateEnd, status, limit, offset);
