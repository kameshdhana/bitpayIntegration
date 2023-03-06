const client = require("../config");
const {Env, Currency, Models, Tokens} = require('bitpay-sdk');

let buyer = new Object();
buyer.email = "kdhanasekaran1999@gmail.com";
buyer.name = "Kamesh Dhanasekar";
buyer.address1 = "168 General Grove";
buyer.address2 = "";
buyer.locality = "Port Horizon";
buyer.region = "New Port";
buyer.postalCode = "601204";
buyer.country = "IN";
buyer.phone = "+917871982741";
buyer.notify = true;

let invoiceData = new Models.Invoice(1,Currency.USD);
invoiceData.buyer = buyer;
invoiceData.orderId = '7K87198274L1';
invoiceData.fullNotifications = true;
invoiceData.extendedNotifications = true;
// invoiceData.notificationURL = "https://hookb.in/1gw8aQxYQDHj002yk79K";
invoiceData.closeURL = "https://www.jaam.co/";
invoiceData.redirectURL = "https://www.jaam.co/";
invoiceData.itemDesc = 'Testing Invoice';
invoiceData.notificationEmail = 'kamesh@finplex.in';

async function createInvoice(invoiceData){
  let invoice = await client.CreateInvoice(invoiceData).then(res =>{console.log(res,"response")}).catch((e)=>{console.log("errorData",e)});
}

createInvoice(invoiceData);