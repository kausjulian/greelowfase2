//ejercicio 10
var arr = [45,67,87,23,5,32,60];
let arrbackwards =[]

for(let i = arr.length-1; i>= 0; i--){
   arrbackwards = arrbackwards+arr[i]
}
console.log(arrbackwards);

//ejercicio11
var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

mix.forEach(element => {
    console.log(typeof(element));
    
});

//ejercicio 12
var myArray =
[3344,34334,454543,342534,4563456,3445,23455,234,262,2335,43323,4356,345,4545,452,345,434,36,345,4334,5454,345,4352,23,365,345,47,63,425,6578759,768,834,754,35,32,445,453456,56,7536867,3884526,4234,35353245,53244523,566785,7547,743,4324,523472634,26665,63432,54645,32,453625,7568,5669576,754,64356,542644,35,243,371,3251,351223,13231243,734,856,56,53,234342,56,545343];


for(let i = 0; i<myArray.length;i++){
    if(myArray[i] % 14 == 0){
        console.log(myArray[i]);
    }
    else{
        console.log("no es divisible por 14");
    }
}
//ejercicio 13

let i = 20
while (i>=0){
    if(i % 5==0){
        console.log(`${i}!`);
    }
    else{console.log(i);}
i--
}
//ejercicio 14
var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

let maximo = 0
myArray.forEach(element => {
    if(element > maximo){
        maximo=element
    }
});
console.log(maximo);