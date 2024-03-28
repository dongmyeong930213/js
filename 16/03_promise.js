// 1.
// const p = new Promise((res, rej)=>{
//     res(1)
//     // resolve(1)
//     // reject(new Error('message'))
// })

// p.then((result)=>{ console.log("결과는", result)})
// p.then(result=> console.log("결과는 2", result))

// 2.
// const p = new Promise((res, rej)=>{
//   setTimeout(()=>{
//     res(1)
//   }, 2000)  
// })
// p.then(result => console.log("2초후의 결과는 ", result))

// 3.
const p = new Promise((res, rej)=>{
    setTimeout(() => {
        rej(new Error('omg'))
    }, 2000);
})
p
.then(result => console.log("2초후의 결과는 ", result)) //결과값 성공
.catch(err => console.log("에러발생", err.message))  //결과값 실패시

// p.then().catch() //체이닝 방식  
