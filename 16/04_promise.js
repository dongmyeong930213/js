function callPromise(){
    let name="홍길동";
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(name)
        }, 1000);
    })
}

function backPromise(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('backPromise is back')
        }, 2000);
    })
}

function hellPromise(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('what the hell')
        }, 3000);
    })
}

// callPromise('kim').then(function(name){
//     console.log(`${name} 반가워`)
//     return backPromise()
// }).then(function(txt){
//     console.log(`${txt}을 실행하셨군요.`)
//     return hellPromise()
// }).then(function(msg){
//     console.log(msg)
// })

// async ~ await 사용
async function exec(){
   const name = await callPromise('kim')
   console.log(`${name} 반가워`)
   const txt = await backPromise();
   console.log(`${txt}을 실행하셨군요.`)
   const message = await hellPromise();
   console.log(msg);
}
exec();