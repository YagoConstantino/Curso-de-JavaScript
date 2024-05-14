function getTimeFromSeconds(segundos)
{
    const data = new Date(segundos*1000);
    
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'GMT'
    })
}

function iniciaRelogio()
{
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000);
}

function zerarRelogio()
{
    setTimeout(timer,1000);
    segundos=0;
    relogio.innerHTML = getTimeFromSeconds(segundos);
}
//---------Fim das Funções-------------------

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");

let segundos = 0;
let timer;

iniciar.addEventListener("click",function(evento){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener("click",function(evento){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener("click",function(evento){
    relogio.classList.add('pausado');
    pausarRelogio();
    zerarRelogio();
});

//Segunda solução-------------------------------

document.addEventListener('click',function(evento){
    const elemento = evento.target;

    if(elemento.classList.contains('zerar'))
        {
            relogio.classList.add('pausado');
            pausarRelogio();
            zerarRelogio();
        }
    
    
    else if(elemento.classList.contains('pausar'))
        {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
    
    else if(elemento.classList.contains('iniciar'))
        {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        
})