// 구조분해 - 배열
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];

const [one, two, three, four, five] = arr1;
console.log(one);
console.log(two)

const [a1,a2,a3,a4,a5] = arr2;
console.log(a1,a2,a3,a4,a5)

const list =['orange', 'apple'];
const [x,y,alpha="banana"] = list;
console.log(x);
console.log(alpha);

let num1 = 10;
let num2 = 20;
//  두개의 변수의 값을 교환, 제3의 변수가 사용되었다.

[num1, num2] = [num2,num1];
console.log("num1", num1)
console.log("num2", num2)

// 오브젝트
/**
 * 오브젝트 { }
 * 키와 값 (key, value)쌍
 * 접근해서 2가지 방법 . ['']
 */

const obj ={
    title: "3body problem",
    star: 5,
    content : '흥미롭다'
}
console.log(obj.star);
console.log(obj.content);
console.log(obj['title'])

const {c,s,t} = obj;   // 키의 이름이 다르므로 출력안됨
// console.log(content);
const {content : c1, star : c2 , title : c3} = obj;  //오브젝트의 키이름을 다르게 지정
console.log(c3,c2,c1)

//----------------------------
const info ={
    name:'full-stack',
    time:'09~14:00',
    content:"즐겁다"
}
function getinfo(lecture){
    const {name,time,content}=lecture;
    const output = `${name}강의는 ${time}이고 ${content} !`;
    return output;
}

const result = getinfo(info);
console.log(result)
//---------&&는 and 의미이고 양쪽 모두 참일때만 참-------------------
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


//---------||는 or 의미이고 양쪽 중 하나라도 참이라면 참-------------------
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


//spread로 비교
const a = [1,2,3];
const b = [4,5,6];
const result1 = [...a,...b];
console.log("result1" , result1)
const str="HELLO";
console.log(str);
console.log(...str);
console.log(str.split(''));     // 배열로 한글자씩
console.log (str.split(' '));

const chip = {
    base:'chip',
    company:'samsung'
}
const spreatics = {
    ...chip,
    adress:'마포구'
}
console.log(spreatics)

