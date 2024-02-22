const inputDestino = document.getElementsByName('destino')[0];

const handleWindowResize = () => {
    window.innerWidth < 576 ? inputDestino.placeholder = 'Introduzca destino' : inputDestino.placeholder = 'Introduzca destino o nombre del hotel';
}

handleWindowResize();

window.addEventListener('resize', handleWindowResize);

//Custom date picker
flatpickr("#checkIn", {});
flatpickr("#checkOut", {});