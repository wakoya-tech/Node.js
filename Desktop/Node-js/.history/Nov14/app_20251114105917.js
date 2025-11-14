//import abebe from './abebe.txt'
const os = require('os');
//console.log('os');
const freeMemory = os.freemem();
console.log(freeMemory);
const platForm=os.platform();
console.log(platForm);


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
let pathObj = path.parse(__filename);
console.log(__filename);
console.log(__dirname);