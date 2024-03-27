// 클래스의 기본형식
// class Car{
//     constructor (){   //속성

//     }
//     method1(){ }   //기능
//     method2(){ }
//     method3(){ }

// }

// class User{
//     constructor(name){
//         this.name = name;
//     }

//     SayHi(){
//         console.log(` ${this.name}, hello`)
//     }

// }
// let user = new User('Smith');
// user.SayHi();
// let user1 = new User('Peter');
// user.SayHi();

function User(name){
this.name=name;
}
User.prototype.sayHi= function(){
    console.log(this.name)
}
let user2 = new User('John');
user2.sayHi();