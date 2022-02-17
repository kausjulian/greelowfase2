//ejercicio 1
let date = new Date()
console.log(date)
//ejercicio 2
class Persona{

}
//ejercicio3
// class ClassName{ constructor(){ this.foo = 'bar' } }

class Persona{
    constructor(){
        Name = "Bob"
        LastName = "Dylan"
        BirthDate = "May 24, 1941"
    }
}
// console.log(Persona)
//ejercicio 4
class Persona{constructor(Name,LastName,BirthDate){
    this.Name= Name
    this.LastName = LastName
    this.BirthDate = BirthDate
}}
// console.log(Persona)
// con EC6 esta nomenclatura cambió y se puede tambien armar la clase de la siguiente manera:

function Persona(Name,LastName,BirthDate){
    this.Name= Name
    this.LastName = LastName
    this.BirthDate = BirthDate
}
//ejercicio 5
class Printer{
    constructor(name){
        this.name = name
    }
   printerTest(){
        return 'Hello world'
    }
}

let myPrinter = new Printer('Epson')
////para poder acceder al metodo de la funcion encontre dos formas. 1) agregar prototype como hice
///2) agregar static antes del metodo (adentro de la funcion) y llamarlo normalmente sin el prototype.ambas funcionan y nose el motivo den inguna

let testResult = Printer.prototype.printerTest
console.log(testResult)

//ejercicio 6
class Printer{
    constructor(name){
        this.name = name
    }
   printerTest(){
        return 'Hello world'
    }
   getModel(){
       return 'The model of the printer is: TX-200'
   }
}
//ejercicio 7
class Counter{
    constructor(count){
        this.count = count
    }
    increaseOne(){
        this.count+1
    }
    decreaseOne(){
        this.count-1
    }
    getValue(){
        return `${count}`
    }
}
//la segunda parte del ejercicio 7 no la entendi, ya que con la funcion anterior que es la que nos 
//pidieron, nunca puede dar esos resultados. no entnedi si hay que hacer otra o que.

//ejercicio 8
    function calcularEdad(birthday) { 

        birthday=new Date(birthday.split('/').reverse().join('-'));
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    // console.log(calcularEdad('24/01/1990'));
 
    function canDrinkAlcohol(birthday){
        let age = calcularEdad(birthday)
        if(age>=21){
            return true
        }
        else {
            return false
        }
    }
    console.log(canDrinkAlcohol('23/1/2012'))
//ejercicio 9
class Calc{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    sumar(){
        return this.x + this.y
    }
    restar(){
       return this.x - this.y
    }
    multiplicar(){
       return this.x * this.y
    }
    dividir(){
       return this.x / this.y
    }
}
//inicializo un calculo con 2 numeros
let newCalc = new Calc(3,4)
console.log(newCalc)
let division = newCalc.dividir()
console.log(division)

