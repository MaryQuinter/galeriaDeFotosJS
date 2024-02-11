const contenedor = document.getElementById('contenedor1')     //  ⭐ e: para recibir la informacion del evento

contenedor.addEventListener('click', (e) => {   
    console.log('Hiciste click en el contenedor')
});

const primeraCaja = document.querySelector('.caja')
primeraCaja.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Hiciste click en la caja 1');
});