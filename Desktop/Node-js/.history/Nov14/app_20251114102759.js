const os = require('os');
//console.log('os');
const freeMemory = os.freemem();
console.log(freeMemory);
const platForm=os.platform();
console.log(platForm);