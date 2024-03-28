function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('🚗')
    }
}


const c = new Circle(1);
console.log(c)
c.draw();
// 위의 코드를 es6 클래스로 변경하기   (constructor() 에 매개변수가들어감)
class Circle1{
    constructor(radius){
        this.radius = radius
    }
    draw(){
        console.log('🚗')
    }
}
const d = new Circle1(1);
console.log(d)
d.draw();