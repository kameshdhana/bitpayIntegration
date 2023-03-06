const client = require("../config");

let billId = "8xEDXpicwz8z6rPZDvLsUG";
let billToken = "223pSquCBtLuv8LrEkhouKoi26xgexG8t4rdrNJT4vmr9VsPtneB2byHpdUvXGBCkK";

async function deliverBill(billId){
    retrievedBill = await client.DeliverBill(billId,billToken).then((res)=>{console.log("responsed",res)}).catch((e)=>{console.log("error",e)});
};

deliverBill(billId,billToken);