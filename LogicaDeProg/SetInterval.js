//Set interval e set Timeout
function mostraHora()
{
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}

console.log(mostraHora());

function geraIntervalo(){
    console.log(mostraHora());
}

// setInterval gera um ciclo , ela recebe como parametro duas informações,a primeira o nome da função a ser executada e a segunda o intervalo de tempo em MILISEGUNDOS em que sera chamada essa função.

//setInterval(geraIntervalo,1000);

//Posso fazer de forma mais resumida usando uma função anonima e colocar em uma variavel

const time = setInterval(function(){
    console.log(mostraHora())
},2000);

//SetTimeout

//SetTimeout serve como parada,ela recebe uma variavel como parametro e um intervalo de tempo em MILISEGUNDOS,apos esse tempo ela encerra o intervalo
setTimeout(function(){
    clearInterval(time);
},6000);