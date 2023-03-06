const client = require("../config");
const fs = require("fs");

let retrievedLedger;

async function getLedgers(){
    retrievedLedger = await client.GetLedgers().then((res)=>{
        // console.log(res,"response");
        fs.writeFileSync("./savedResponse/getLedgerBalance.txt",JSON.stringify(res));
    }).catch((e)=>{console.log(e,"error")});
}

getLedgers();