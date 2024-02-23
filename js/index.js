const inputDestino = document.getElementsByName('destino')[0];

const handleWindowResize = () => {
    window.innerWidth < 576 ? inputDestino.placeholder = 'Introduzca destino' : inputDestino.placeholder = 'Introduzca destino o nombre del hotel';
}

handleWindowResize();

window.addEventListener('resize', handleWindowResize);

//Custom date picker
flatpickr("#checkIn", {});
flatpickr("#checkOut", {});

//Manejo de ocupación de habitación/es
const handleOccupancy = (actionElement, numberElement, numCounterElement, elementToMakeClicable) => {
    const numberElementToInt = parseInt(numberElement.innerHTML);
    const minAllowedNumber = numCounterElement.id === 'numNinyosCounter' ? 0 : 1;
    
    if (actionElement.innerHTML === '-' && numberElementToInt > minAllowedNumber) {
        numberElement.innerHTML = numberElementToInt - 1;

        if (parseInt(numberElement.innerHTML) === minAllowedNumber) {
            actionElement.style.cursor = 'not-allowed';
            actionElement.style.color = '#bdbdbd';
        }
    }

    if (actionElement.innerHTML === '+' && numberElementToInt < 100) {
        numberElement.innerHTML = numberElementToInt + 1;

        if (numberElement.innerHTML === '100') {
            actionElement.style.cursor = 'not-allowed';
            actionElement.style.color = '#bdbdbd';
        }
    }

    if (elementToMakeClicable.style.cursor === 'not-allowed') {
        elementToMakeClicable.style.cursor = 'pointer';
        elementToMakeClicable.style.color = 'black';
    }

    numCounterElement.innerHTML = numberElement.innerHTML;
    
}

const numAdultos = document.getElementById('numAdultos');
const substract_numAdultosCounter = document.getElementById('substract-numAdultosCounter');
const numAdultosCounter = document.getElementById('numAdultosCounter');
const plus_numAdultosCounter = document.getElementById('plus-numAdultosCounter');

substract_numAdultosCounter.addEventListener('click', function () {
    handleOccupancy(substract_numAdultosCounter, numAdultos, numAdultosCounter, plus_numAdultosCounter);
});

plus_numAdultosCounter.addEventListener('click', function () {
    handleOccupancy(plus_numAdultosCounter, numAdultos, numAdultosCounter, substract_numAdultosCounter);
});

const numNinyos = document.getElementById('numNinyos');
const substract_numNinyosCounter = document.getElementById('substract-numNinyosCounter');
const numNinyosCounter = document.getElementById('numNinyosCounter');
const plus_numNinyosCounter = document.getElementById('plus-numNinyosCounter');

substract_numNinyosCounter.addEventListener('click', function () {
    handleOccupancy(substract_numNinyosCounter, numNinyos, numNinyosCounter, plus_numNinyosCounter);
});

plus_numNinyosCounter.addEventListener('click', function () {
    handleOccupancy(plus_numNinyosCounter, numNinyos, numNinyosCounter, substract_numNinyosCounter);
});

const numHabitaciones = document.getElementById('numHabitaciones');
const substract_numHabitacionesCounter = document.getElementById('substract-numHabitacionesCounter');
const numHabitacionesCounter = document.getElementById('numHabitacionesCounter');
const plus_numHabitacionesCounter = document.getElementById('plus-numHabitacionesCounter');

substract_numHabitacionesCounter.addEventListener('click', function () {
    handleOccupancy(substract_numHabitacionesCounter, numHabitaciones, numHabitacionesCounter, plus_numHabitacionesCounter);
});

plus_numHabitacionesCounter.addEventListener('click', function () {
    handleOccupancy(plus_numHabitacionesCounter, numHabitaciones, numHabitacionesCounter, substract_numHabitacionesCounter);
});

function handleItemClick(event) {
    // Evitar que el dropdown se cierre al clicar en un elemento
    event.stopPropagation();
}
