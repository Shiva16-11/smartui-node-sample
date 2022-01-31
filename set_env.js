const core = require('@actions/core');
const github = require('@actions/github');
const {Octokit} = require('@octokit/rest')



const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });
async function run() {

    
    const owner = github.context.repo.owner
    const repo = github.context.repo.repo
    
    const id = await octokit.rest.checks.create({
        owner : owner,
        repo : repo,
        name: "Lambdatest",
        head_sha: github.context.payload.pull_request ? github.context.payload.pull_request.head.sha : github.context.sha,
    });
    console.log("created check run ID", id);
    process.env['CHECK_RUN_ID'] = `${id.data.id}`;

    console.log("read from env variabale", process.env.CHECK_RUN_ID)
    
    process.env['BUILD_NAME']=`${id.data.id}||${owner}||${repo}||{process.env.INSTALL_ID}`
        
}

try{run();
} catch (err){
    console.log(err);
    core.setFailed(error.message);
}
