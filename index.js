document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
class Figure {
    // абстрактный класс
  
    constructor() {
        this.position = 0;
        this.position2 = 0;
        this.moveLeft = false;
        this.muveUp = false;
        
       
        
        
    }
    static distance(a, b) {
       const dx = a.position - b.position;
       const dy = a.position2 - b.position2;
       return  Math.hypot(dx, dy);
        
        }
       
        draw() {} // виртуальный метод
    
    move() {
        
        
        
        switch(this.position){
            case 450:
                this.moveLeft = true;
                break;
                case 0:
                    this.moveLeft = false;
                    break;    
                }
                switch(this.position2){
                    case 250:
                this.moveUp = true;
                break;
                case 0:
                    this.moveUp = false;
                    break;  
                    
                }
                this.moveLeft ? 
                this.position -=3 : this.position +=3;
                this.moveUp ?
                this.position2 -=1 : this.position2 +=1;
                
                
                
                
            }
        }
        
        class Rect extends Figure { // наследование
            draw() {
                // полиморфизм
                document.getElementById("app").innerHTML += `
                <div style="
                background: red;
                width: 50px;
                height: 50px;
                position: absolute;
                top: ${this.position2}px;
                left: ${this.position}px"></div>
                `;
            }
        }
        
        class Circle extends Figure { // наследование
            draw() {
                // полиморфизм
                document.getElementById("app").innerHTML += `
                <div style="
                background: green;
                width: 50px;
                height: 50px;
                border-radius: 25px;
                position: absolute;
                top: 10px;
                left: ${this.position}px"></div>
                `;
            }
        }
        
        class Square extends Figure {
            constructor() {
                super(); // вызов родительского конструктора
                this.rotation = 0;
            }
            
            draw() {
                document.getElementById("app").innerHTML += `
                <div style="
                background: blue;
                width: 50px;
                height: 50px;
                position: absolute;
                transform: rotate(${this.rotation}turn);
                top: ${this.position2}px;
                left: ${this.position2}px"></div>
                `;
    }

    move() { // переопределение метода
        super.move(); // вызов родительского метода
        this.rotation += 0.1;
    }
}
class Umic extends Figure {
    constructor() {
        super(); // вызов родительского конструктора
        this.rotation = 0;
    }
    draw() {
        document.getElementById("app").innerHTML += `
        <div style="
        
        background: yellow;
        width: 30px;
        height: 40px;
        position: absolute;
        top: ${this.position2}px;
        bottom: ${this.position}px"></div>
        `;
    }
    
    move() {
        // переопределение метода
        super.move(); // вызов родительского метода
        this.rotation += 0.1;
    }
    
    }

      
     

const figures = [ new Rect(), new Circle(), new Square(),new Umic() ];
setInterval(() => {
    document.getElementById("app").innerHTML = "";
    for (let figure of figures) {
        figure.move();
        figure.draw();
    }
    
    
}, 20);

const p1 = new Figure(5, 9);
const p2 = new Figure(4, 5);
console.log(Figure.distance(p1, p2))