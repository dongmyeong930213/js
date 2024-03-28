// 동기화 방식 (Sync)
// console.log('Before');
// console.log('1');
// console.log('After');


// 비동기화 방식 (Async)
console.log('Before');
setTimeout(() => {
    console.log("1");
}, 3000);
console.log('After');