class House{
    constructor(year, name, windows){
        this.year=year;
        this.name=name;
        this.windows=windows;
    }
    getAge(){
        console.log(`${this.name}는 건축한지  ${this.year}년입니다.`)
    }
    getWindow(){
        console.log(`창문의 갯수는 ${this.windows} 입니다.`)
    }
    // over ride, 오버라이드 (덮어쓰기)
} 

const house1 = new House(2010,'마이홈',5)
house1.getAge();
console.log(house1.name)

/**
 * 상속
 * extends 사용
 * 부모로부터
 * 
 */

class Apartment extends House{
    constructor(year,name,windows,floor){
        super(year,name,windows);

        this.floor = floor;
    }
    getFloor(){
        return `${this.year} 년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}입니다.`
    }
    getAge(){
        super.getAge();
        console.log(`새로운 ${2024-this.year} 년된 아파트는 총 ${this.floor} 층입니다.`)
    }
}


const apt1 = new Apartment(2010,'마이홈', 100, 13)
console.log(apt1)
apt1.getFloor();
apt1.getAge();



//-----------------------
/**가로,세로
 * 면적 구하는 메서드
 */
class Shape{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
    move(){
        console.log('move')
    }
}

/**
 * 자식 Circle 클래스 생성
 * move()메서드 출력시 "move > circle"
 */


const rec1 = new Shape(3,4);
rec1.getArea();

//
class Circle extends Shape{
    move() {
      console.log('move > circle');
    }
  }
  const rec2 = new Circle(1, 2);
  rec2.move()