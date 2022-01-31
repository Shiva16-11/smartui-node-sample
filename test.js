
const github = require('@actions/github');
console.log("data from client payload", github.event.client_payload);
console.log("------------........");
console.log("created check run context", github.context);
