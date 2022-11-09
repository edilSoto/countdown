const body = document.body;

const grid = document.querySelector('.grid-container');



const crearTimer = (dias, horas, minutos, segundos) => {

        const html = `
        <div class="timer">
        <h1>${dias}</h1> 
        </div>
        <div class="timer">
        <h1>${horas}</h1>
        </div>
        <div class="timer">
        <h1>${minutos}</h1>
        </div>
        <div class="timer">
        <h1>${segundos}</h1>
        </div>
        <h1>Dias</h1>
        <h1>Horas</h1>
        <h1>Minutos</h1>
        <h1>Segundos</h1>
`;

        grid.innerHTML = html;
};


crearTimer(1, 2, 3, 4);