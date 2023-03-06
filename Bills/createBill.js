const client = require("../config");
const {Env, Currency, Models, Tokens} = require('bitpay-sdk');

let basicBillUsd;

let BillItem = Models.BillItem;
let items = [];
let item1 = new BillItem();
item1.price = 1;
item1.quantity = 1;
item1.description = "Test Item 1";
items.push(item1);
// let item2 = new BillItem();
// item2.price = 2;
// item2.quantity = 1;
// item2.description = "Test Item 2";
// items.push(item2);

let bill = new Models.Bill("KamsTesting", Currency.USD, "", items);
bill.email = "kdhanasekaran1999@gmail.com";
// console.log("ITems",bill,items);
async function createBill(bill){
    basicBillUsd = await client.CreateBill(bill).then(res =>{console.log(res,"response")}).catch((e)=>{console.log("errorData",e)});
};
createBill(bill);