const fs = require('fs')
console.log("file exists check");
fs.appendFileSync('GITHUB_ENV', "CHECK_RUN_ID=200");
console.log(process.emv.CHECK_RUN_ID);
