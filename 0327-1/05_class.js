class Circle2{
    constructor(radius){
     this.radius = radius   
    }
    draw(){
        console.log('😊')
    }
}
// 클래스 선언 , 틀

const a = new Circle2(1)
console.log(a)
a.draw(); // 클래스 Circle2의 메서드를 사용


class Circle3{
    constructor(radius){
     this.radius = radius
     this.move = function(){
        console.log('😒');

     }   
    }
    draw(){
        console.log('😁')
    }
}

const b = new Circle3(1)
console.log(b)
b.draw();