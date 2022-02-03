 //Ejercicios Sort
 //Ejercicio 1
 
 var arr = [9,2,6,1,4,3,8,7]

let sort = () =>{
    for (let j = 0; j<arr.length;j++){
     for(let i = 0; i<arr.length;i++){
         if(arr[i]>arr[i+1]){
             let temp = arr[i]
             arr[i] = arr[i+1]
             arr[i+1] = temp;
         }
     }
    }
    return arr
}
console.log(sort(arr));

//Ejercicio 2

let arr = ['uno','cuatro','tres','dos','cinco']

arr.sort()
console.log(arr);