// seleccionar contendor puntos p1 y p2
const contenedorPuntosP1 = document.querySelector('.contenedor-puntos-p1');
const contenedorPuntosP2 = document.querySelector('.contenedor-puntos-p2');

// seleccionar botones p1
const sumarP1 = document.getElementById('sumar-p1');
const restarP1 = document.getElementById('restar-p1');

// puntos
let numP1=1
let numP2=1


// funcion para sumar puntos p1
sumarP1.addEventListener('click',()=>{
    contenedorPuntosP1.innerHTML = numP1++;
})

// funcion para restar puntos p1

restarP1.addEventListener('click',()=>{
    contenedorPuntosP1.innerHTML = numP1--;
})


// selecionar botones p2
const sumarP2 = document.getElementById('sumar-p2');
const restarP2 = document.getElementById('restar-p2');

// funcion sumar puntos p2

sumarP2.addEventListener('click',()=>{
    contenedorPuntosP2.innerHTML = numP2++;
})

// funcion restar puntos p2
restarP2.addEventListener('click',()=>{
    contenedorPuntosP2.innerHTML = numP2--;
})



// Seleccionar boton reiniciar
const reiniciar = document.getElementById('btn-reiniciar');

// funcion de reiniciar
reiniciar.addEventListener('click',()=>{
    contenedorPuntosP1.innerHTML = numP1 = 0;
    contenedorPuntosP2.innerHTML = numP2 = 0;
})

