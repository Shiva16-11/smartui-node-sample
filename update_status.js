const core = require('@actions/core');
const github = require('@actions/github');
const {Octokit} = require('@octokit/rest')
const fs = require('fs');

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });
async function run() {

 
    async function update(){
        console.log("read from env variabale from update id part", process.env.CHECK_RUN_ID)
        console.log("read from env variabale from update repo part", process.env.LT_REPO)
        console.log("read from env variabale from update owner part", process.env.LT_OWNER)
        const res = await octokit.rest.checks.update({
            owner : process.env.LT_OWNER,
            repo : process.env.LT_REPO,
            check_run_id: process.env.CHECK_RUN_ID,
            status: "completed",
            conclusion: "action_required",
            completed_at: new Date(),
            output: {
            title: "Lambdatest smart UI",
            summary: "The visual testing checks",
        },
        })
    }

    setTimeout(update, 3000)
        
}

try{run();
} catch (err){
    console.log(err);
    core.setFailed(error.message);
}
