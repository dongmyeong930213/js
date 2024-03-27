/**
 * 클래스 : 객체를 생성하기 위한 틀
 * 1.칩이라는 클래스
 * 2.속성 : 연도 , 집의이름 , 창문의 갯수
 * 3.메소드 : 창문의 갯수를 출력 , 집의 이름 출력하는 메소드
 */

// 클래스 정의
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
} 
const apt = new House(2008, '아파트', 10);
console.log(apt.name);
apt.getAge();
apt.getWindow();

//-----------------복습-------------------------------
class City{
    constructor(city1, name , year){
        this.city1=city1;
        this.name=name;
        this.year=year;
    }
    getInfo(){
        console.log(`${this.name}의 중심은 ${this.city1}이고, 현재는 ${this.year}년도 입니다.`)
    }
}
const main = new City('서울', '대한민국', 2024);
main.getInfo();