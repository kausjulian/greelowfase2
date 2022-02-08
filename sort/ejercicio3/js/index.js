// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  
//genero un numero random entre 1 y 13 y lo guardo en una variable
//genero un numero random entre 1 y 4 y lo guardo en una variable
// let numero = window.onload = getRandomNum(1,14)
// let palo = window.onload = getRandomNum(1,5)
let numero = 0
let palo = 0
let RandomNumbers = ()=>{
  numero = getRandomNum(1,14)
  palo  = getRandomNum(1,5)
} 
window.onload = RandomNumbers()


//tomo el div del numero y le asigno un numero random.
  let divnumero = document.querySelector(".numero")

 

  if(numero == 11){
    divnumero.textContent = `J`
  }
  else if(numero == 12){
    divnumero.textContent = `Q`
  }
  else if(numero == 13){
    divnumero.textContent = `K`
  }
  else{
    divnumero.textContent = `${numero}`
  }


/* ♣♠♥♦ */
  let divCarta = document.querySelector(".carta")

  if (palo ==1){
  divCarta.insertAdjacentHTML('afterbegin', `<div class="negras1">
  ♣
</div>`)
  divCarta.insertAdjacentHTML('beforeend', `<div class="negras2">
  ♣
</div>`)
}
else if(palo==2){
    divCarta.insertAdjacentHTML('afterbegin', `<div class="negras1">
    ♠
  </div>`)
    divCarta.insertAdjacentHTML('beforeend', `<div class="negras2">
    ♠
  </div>`)
}
else if(palo==3){
    divCarta.insertAdjacentHTML('afterbegin', `<div class="rojas1">
    ♦
  </div>`)
    divCarta.insertAdjacentHTML('beforeend', `<div class="rojas2">
    ♦
  </div>`)
}
else {
    divCarta.insertAdjacentHTML('afterbegin', `<div class="rojas1">
    ♥
  </div>`)
    divCarta.insertAdjacentHTML('beforeend', `<div class="rojas2">
    ♥
  </div>`)
}

//funcionamiento del boton
// obtencion divs de los palos
 let divRedUp = document.querySelector("rojas1")
 let divRedDown = document.querySelector("rojas2")
 let divBlUp = document.querySelector("negras1")
 let divBlDn = document.querySelector("negras2")
 let count = 0


let butonpress  = () =>{
  count++;
  numero = getRandomNum(1,14);
  palo = getRandomNum(1,5);
  if(numero == 11){
    divnumero.textContent = `J`
  }
  else if(numero == 12){
    divnumero.textContent = `Q`
  }
  else if(numero == 13){
    divnumero.textContent = `K`
  }
  else{
    divnumero.textContent = `${numero}`
  }
  if(count == 0){
    if (palo ==1){
      divCarta.insertAdjacentHTML('afterbegin', `<div class="negras1">
      ♣
    </div>`)
      divCarta.insertAdjacentHTML('beforeend', `<div class="negras2">
      ♣
    </div>`)
    }
    else if(palo==2){
        divCarta.insertAdjacentHTML('afterbegin', `<div class="negras1">
        ♠
      </div>`)
        divCarta.insertAdjacentHTML('beforeend', `<div class="negras2">
        ♠
      </div>`)
    }
    else if(palo==3){
        divCarta.insertAdjacentHTML('afterbegin', `<div class="rojas1">
        ♦
      </div>`)
        divCarta.insertAdjacentHTML('beforeend', `<div class="rojas2">
        ♦
      </div>`)
    }
    else {
        divCarta.insertAdjacentHTML('afterbegin', `<div class="rojas1">
        ♥
      </div>`)
        divCarta.insertAdjacentHTML('beforeend', `<div class="rojas2">
        ♥
      </div>`)
    }
  }
  else{
    if(palo==1){
      divBlUp.textContent = `♣`
      divBlDn.textContent = `♣`
    }
    else if (palo==2){
      divBlUp.textContent = `♠`
      divBlDn.textContent = `♠`
    
    }
    else if(palo==3){
      divRedUp.textContent = `♦`
      divRedDown.textContent = `♦`
    }
    else{
      divRedUp.textContent = `♥`
      divRedDown.textContent = `♥`
    }
  }

}

let boton = document.querySelector(".boton")
boton.addEventListener('click',butonpress)
 
console.log(count);

// if(palo==1){
//   divBlUp.textContent = `♣`
//   divBlDn.textContent = `♣`
// }
// else if (palo==2){
//   divBlUp.textContent = `♠`
//   divBlDn.textContent = `♠`

// }
// else if(palo==3){
//   divRedUp.textContent = `♦`
//   divRedDown.textContent = `♦`
// }
// else{
//   divRedUp.textContent = `♥`
//   divRedDown.textContent = `♥`
// }