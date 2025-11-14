import abebe from './abebe.txt'
const os = require('os');
//console.log('os');
const freeMemory = os.freemem();
console.log(freeMemory);
const platForm=os.platform();
console.log(platForm);
const fs= require('fs');
fs.readFile('Nov14/abebe.txt',utf8,(err,data)=>
{
    if(err){
        console.error(err)
        return
    }
    console.log(data);
})