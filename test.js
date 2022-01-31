const fs = require('fs')
console.log("file exists check");
try {
  if (fs.existsSync("GITHUB_ENV.env")) {
    console.log("file exists");
    //file exists
  }
} catch(err) {
  console.log("file does not");
  console.error(err)
}
