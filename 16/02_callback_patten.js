console.log("before");

getUser(1, function(user){
    console.log('User', user)
})

console.log("after");


//여기서 abc는 콜백함수 , 가장 기초적인 콜백의 형태

function getUser (id, abc){
    setTimeout(() => {
        console.log('Reading data...');
        abc({id:id, gitHubUsername : 'Hong'})
    }, 2000);
}
