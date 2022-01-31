
const github = require('@actions/github');
console.log("data from client payload", github.event);
console.log("------------..");
console.log("created check run context", github.context);
