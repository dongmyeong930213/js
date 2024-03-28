function callPromise(){
    let name="Kim";
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(name)
        }, 1000);
    })
}

function backPromise(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('back')
        }, 1000);
    })
}

function hellPromise(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('callback hell')
        }, 1000);
    })
}


async function exec(){
    const name = await callPromise('kim')
    console.log(`${name} 반가워`)
    const txt = await backPromise();
    console.log(`${txt}을 실행했구나`)
    const msg = await hellPromise();
    console.log(`여기는 ${msg}`)
 }
 exec();