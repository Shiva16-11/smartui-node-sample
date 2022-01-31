const fs = require('fs')
console.log("file exists check");
fs.appendFileSync('GITHUB_ENV', "CHECK_RUN_ID=200");
console.log(process.env.CHECK_RUN_ID);
