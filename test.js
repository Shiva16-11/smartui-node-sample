const fs = require('fs')
try {
  if (fs.existsSync("GITHUB_ENV")) {
    //file exists
  }
} catch(err) {
  console.error(err)
}
