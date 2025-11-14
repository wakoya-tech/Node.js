//import abebe from './abebe.txt'
const os = require('os');
let totalMemo= os.totalmem();
let memo=os.freemem();
console.log("total Memory",totalMemo);
console.log("free Memory",memo);
console.log("used memory in GB",((totalMemo-memo)/(1024*1024*1024)));

//console.log('os');
/*const freeMemory = os.freemem();
console.log(freeMemory);
const platForm=os.platform();
console.log(platForm);
*/
/*
const fs = require('fs');
fs.readFile('./abebe.txt','utf8',(err,data)=>
{
    if(err){
        console.error(err)
        return
    }
    console.log(data);
})
const path = require("path");
console.log(path);
let pathObj = path.parse(__filename);
console.log(pathObj);
console.log(__filename);
console.log(__dirname);
*/