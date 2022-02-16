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
