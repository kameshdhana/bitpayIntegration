const client = require("../config");

let billId = "Rbmi3H9MGpS85UUmaiErqj";

async function getBill(billId){
    retrievedBill = await client.GetBill(billId).then((res)=>{console.log("responsed",res)}).catch((e)=>{console.log("error",e)});
};

getBill(billId);