const client = require("../config");
// const {Env, Currency, Models, Tokens} = require('bitpay-sdk');

let invoiceId = "JBPadA61D9EhSAnghEG6Jq";

async function getInvoice(invoiceId){
  let invoice = await client.GetInvoice(invoiceId).then(res =>{console.log(res,"response")}).catch((e)=>{console.log("errorData",e)});
}

getInvoice(invoiceId);