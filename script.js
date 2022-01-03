let timer = document.querySelector('.timer');
let segundos = document.querySelector('.segundos');
let segundosNum = Number(segundos.innerText);
let minutos = document.querySelector('.minutos');
let minutosNum = Number(segundos.innerText);
let hora = document.querySelector('.hora');
let horaNum = Number(hora.innerText);
let iniciaTimer;



function iniciar(){
    timer.style.color = 'black';
    iniciaTimer = setInterval(function(){
        segundosNum = segundosNum + 1;
        segundos.innerText = segundosNum;
        if(segundosNum === 60){
            segundosNum = 0;
            minutosNum = minutosNum + 1;
            minutos.innerText = minutosNum;
        } else if(minutosNum === 59){
            horaNum = horaNum + 1;
            hora.innerText = horaNum;
        }
    }, 1000);
};

function pausar(){
    clearInterval(iniciaTimer);
    timer.style.color = 'red';
};

function zerar(){
    pausar();
    timer.style.color = 'black';
    segundosNum = 0;
    segundos.innerText = segundosNum;
    minutosNum = 0;
    minutos.innerText = minutosNum;
    horaNum = 0;
    hora.innerText = horaNum;
};