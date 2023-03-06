const fs = require("fs");
const client = require("../config");
const {Models, InvoiceStatus, Currency} = require("bitpay-sdk");

async function getAllRate () {
    let Rates = new Models.Rates(await client.GetRates(), client);
    await Rates.Update();
    let newRates = await Rates.GetRates();
    await fs.writeFileSync("./savedResponse/getRate.txt",JSON.stringify(newRates));
}

getAllRate();