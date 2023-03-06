const client = require("../config");
const fs = require("node:fs");

let billStatus = "complete";

async function getMultipleBills(billStatus){
    retrievedBill = await client.GetBills(billStatus).then((res)=>{
        // console.log("responsed",res);
        fs.writeFileSync("./savedResponse/getMultipleBills.txt",JSON.stringify(res));
    }).catch((e)=>{console.log("error",e)});
};

getMultipleBills(billStatus);