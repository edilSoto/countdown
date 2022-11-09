const body = document.body;

const grid = document.querySelector('#principal');



const crearTimer = (dias, horas, minutos, segundos) => {

const html = `
        <h1 class="timer">${dias}</h1> 
        <h1 class="timer">${horas}</h1>
        <h1 class="timer">${minutos}</h1>
        <h1 class="timer">${segundos}</h1>
        <h1>Dias</h1>
        <h1>Horas</h1>
        <h1>Minutos</h1>
        <h1>Segundos</h1>
`;

grid.innerHTML = html;
};


crearTimer(1, 2, 3, 4);