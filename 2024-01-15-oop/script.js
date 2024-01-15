// UŽDUOTIS
// 0. Sukurti 3 objektus: keturkampis1, keturkampis2 ir keturkampis3.
 
// 1. Visiems keturkampių objektams pridėti plotį ir aukštį.
// 2. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja plotą.
// 3. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja perimetrą.
// 4. Į konsolę išvesti visų keturkampių plotą ir perimetrą.
 
let keturkampis1 = {
    width: 10,
    height: 20,
    area: function() {
        return this.width * this.height;
    },
    perimeter: function() {
        return 2 * (this.width + this.height);
    },
    fullInformation: function() {
        return console.log(`Keturkampio plotis: ${this.width}, keturkampio ilgis: ${this.height}, keturkampio perimetras: ${this.perimeter()}, keturkampio plotas: ${this.area()}.`)
    }

}



let keturkampis2 = {
    width: 15,
    height: 25,
    color: 'blue',
    area: function() {
        return this.width * this.height;
    },
    perimeter: function() {
        return 2 * (this.width + this.height);
    },
    halfPerimeter: function() {
        return (this.perimeter() / 2)
    },
    fullInformation: function() {
        return console.log(`Keturkampio plotis: ${this.width}, keturkampio ilgis: ${this.height}, keturkampio perimetras: ${this.perimeter()}, keturkampio plotas: ${this.area()}.`)
    }
}



let keturkampis3 = {
    width: 20,
    height: 30,
    area: function() {
        return this.width * this.height;
    },
    perimeter: function() {
        return 2 * (this.width + this.height);
    },
    text: function() {
        return console.log(`Keturkampio plotis: ${this.width}, keturkampio aukštis: ${this.height}`)
    },
    fullInformation: function() {
        return console.log(`Keturkampio plotis: ${this.width}, keturkampio ilgis: ${this.height}, keturkampio perimetras: ${this.perimeter()}, keturkampio plotas: ${this.area()}.`)
    }
}


keturkampis1.fullInformation()
keturkampis2.fullInformation()
keturkampis3.fullInformation()



// 5.1. Antram keturkampiui pridėti spalvą.

// 5.2. Antram keturkampiui pridėti metodą, kuris leis paskaičiuoti pusės keturkampio plotą.
 
// 5.3 Trečiam keturkampiui pridėti metodą, kuris grąžins tekstą „Keturkampio plotis: x, keturkampio aukštis: y"
 
// 5.4 Į konsolę išvesti šiuos naujus duomenis.
 
// 6.1. Visų keturkampių objektuose sukurti funkciją, kuri grąžina pilną keturkampių informacijos teksta: „Keturkampio plotis: x, keturkampio ilgis: y, keturkampio perimetras: z, keturkampio plotas: y."
// 6.2. Į konsolę išvesti šiuos naujus duomenis.


// After ES6
// OOP - klasės
// super class - Rectancle kalsė yra super klasė HalfRectangle klasės atžvilgiu
class Rectangle {
    constructor(rectHeight, rectWidth) {
      this.height = rectHeight
      this.width = rectWidth
    }
  
    getPerimeter() {
      const perimeter = (this.height + this.width) * 2
      return perimeter
    }
  
    getArea() {
      const area = this.height * this.width
      return area
    }
  
    getInfo() {
      const width = this.width
      const height = this.height
      const perimeter = this.getPerimeter()
      const area = this.getArea()
  
      const infoText = `Keturkampio plotis: ${width}, keturkampio ilgis: ${height}, keturkampio perimetras: ${perimeter}, keturkampio plotas: ${area}.`
      return infoText
    }
  }
  
  // subclass
  // HalfRectangle yra sub-klasė Rectangle klasės atžvilgiu 
  class HalfRectangle extends Rectangle {
    constructor(rectHeight, rectWidth, rectColor) {
      super()
      this.height = rectHeight
      this.width = rectWidth
      this.color = rectColor
    }
  
    getHalfArea() {
      const area = this.getArea() / 2
      return area
    }
  }
  
  class InfoRectangle extends Rectangle {
    getInfo() {
      const height = this.height
      const width = this.width
  
      const infoText = `Keturkampio plotis: ${height}, keturkampio aukštis: ${width}`
  
      return infoText
    }
  }
  
  const rectangle1 = new Rectangle(100, 25)
  const rectangle2 = new HalfRectangle(156, 46, 'red')
  const rectangle3 = new InfoRectangle(14, 34)
  
  console.log(rectangle1)
  console.log(rectangle1.getPerimeter())
  console.log(rectangle1.getArea())
  console.log(rectangle1.getInfo())
  
  console.log(rectangle2)
  console.log(rectangle2.getPerimeter())
  console.log(rectangle2.getArea())
  console.log(rectangle2.getInfo())
  console.log(rectangle2.getHalfArea())
  
  console.log(rectangle3)
  console.log(rectangle3.getPerimeter())
  console.log(rectangle3.getArea())
  console.log(rectangle3.getInfo())