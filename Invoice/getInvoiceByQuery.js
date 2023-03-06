const fs = require("fs");
const client = require("../config");
const {Models, InvoiceStatus} = require("bitpay-sdk");

// let date = new Date();
let dateEnd = "2023-03-07";
let dateStart = "2023-03-06";
let status = InvoiceStatus.Complete;
let limit = 30;
let offset = 0;
let orderId = null;

async function getInvoiceByQuery(dateStart, dateEnd, status, orderId, limit, offset) {
    let invoice = await client.GetInvoices(dateStart, dateEnd, status, orderId, limit, offset).then(res => {
        // console.log(res, "response");
        fs.writeFileSync("./savedResponse/getInvoiceByQuery.txt", JSON.stringify(res));
    }).catch((e) => {
        console.log("errorData", e)
    });
}
  
getInvoiceByQuery(dateStart,dateEnd,status,orderId,limit,offset);