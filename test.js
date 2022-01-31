const fs = require('fs')
try {
  if (fs.existsSync("GITHUB_ENV")) {
    console.log("file exists");
    //file exists
  }
} catch(err) {
  console.log("file does not");
  console.error(err)
}
