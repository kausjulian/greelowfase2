//ejercicio 1
//con while

let numbers = 1
while (numbers <= 17){
    // console.log(numbers);
    numbers++;
}
//con for
for (let i = 0; i <=17; i++) {
    // console.log(i);
    
}
//ejercicio 2

let numbers = 7
while (numbers <= 12){
    console.log(numbers);
    numbers++;
}

//con for
for (let i = 7; i <=12; i++) {
    console.log(i);
    
}
///ejercicio 3
var arr = [4,5,734,43,45];

arr.push(1,2,3)

//ejercicio4
var arr = [4,5,734,43,45];

arr.push(1,2,3,2,33,9,667,23,43,21)
console.log(arr);

//ejercicio5
var myArray =
[232,32,1,4,55,4,3,32,3,24,5,5,5,34,2,3,5,5365743,52,34,3,55,33,435,4,6,54,63,45,4,67,56,47,1,
34,54,32,54,1,78,98,0,9,8,98,76,7,54,2,3,42,456,4,3321,5];

//con for
for (let i = 0; i < myArray.length;i++) {
    console.log(myArray[i]);
}
//con foreach
myArray.forEach(element => console.log(element));

//con while
let i = 0; 
while (i < myArray.length) {
    console.log(myArray[i]);
    i++
}

///ejercicio 6
//ejemplo brindado
var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for(var i = 0; i<mySampleArray.length; i = i + 1)
{
console.log(mySampleArray[i]);
}
//recorrido alrevés:
for(let i = mySampleArray.length; i>=0 ;i--){
     console.log(mySampleArray[i]);
 }

 //no termine de entener porque en este ejercicio cuando le puse i>0 omitió el primer numero del array,pero lo solucioné con el >=

 //ejercicio 7

 var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for(var i = 0; i<mySampleArray.length; i = i + 2)
{
console.log(`${mySampleArray[i]};${mySampleArray[i+1]}`);
}