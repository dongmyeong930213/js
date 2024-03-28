// console.log("Before")
// async function displayCommits(){
//    const user =await getUser(1);
//    const repos =await getRepo(user.gitHubUsername); // ['repo1','repo2','repo3']
//    const commit =await getCommits(repos[0]);
//    console.log(commit)
// }
// displayCommits();
// console.log("After")

console.log("Before")
async function displayCommits(){
try{
    const user =await getUser(1);
    const repos =await getRepo(user.gitHubUsername); // ['repo1','repo2','repo3']
    const commit =await getCommits(repos[0]);
    console.log(commit)
} catch(err){
console.log('에러 발생', err.message)
}
}
displayCommits();
console.log("After")


function getUser(id){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            console.log("reading a user from a DATABASE")
            res({id:id, gitHubUsername:'hong'})
        }, 1000);

    })
}

function getRepo(username){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            console.log("gitHub API...")
            res(['repo1','repo2','repo3'])
        }, 1000);
    })
}

function getCommits(repo){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            console.log("commits")
            res(['commit'])
        }, 1000);
    })
}