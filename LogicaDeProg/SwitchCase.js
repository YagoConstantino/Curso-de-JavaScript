//Switch cas
function zero(num)
{
    return num >=10 ?num : `0${num}`; // função para colocar um zero antes de numeros menores que 10;
}

const data = new Date();
const diaSemana = data.getDay();
let nomeDia ;

switch(diaSemana)
{
    case 0 :
        nomeDia = 'Domingo';
        break;
    
    case 1 :
        nomeDia = 'Segunda';
        break;
        
    case 2:
        nomeDia = 'Terça';
        break;
        
    case 3:
        nomeDia = 'Quarta';
        break;
       
    case 4 :
        nomeDia = 'Quinta';
        break;
        
    case 5 :
        nomeDia = 'Sexta';
        break;
        
    case 6 :
        nomeDia = 'Sabado';
        break
    default :
        nomeDia = 'Dia fora da semana';
        break;            
} 
console.log(diaSemana,nomeDia);      

//----------------------------//

const dataHoje = new Date()
const diaDaSemana = dataHoje.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();
const sec = data.getSeconds();

let nome;
let nomeMes;

switch(diaDaSemana)
{
    case 0 :
        nome = 'Domingo';
        break;
    
    case 1 :
        nome = 'Segunda-Feira';
        break;
        
    case 2:
        nome = 'Terça-Feira';
        break;
        
    case 3:
        nome = 'Quarta-Feira';
        break;
       
    case 4 :
        nome = 'Quinta-Feira';
        break;
        
    case 5 :
        nome = 'Sexta-Feira';
        break;
        
    case 6 :
        nome = 'Sabádo';
        break
    default :
        nome = 'Dia fora da semana';
        break;            
}

switch(mes)
{
    case 0 :
        nomeMes = 'Janeiro';
        break;
    case 1:
        nomeMes = 'Fevereiro';
        break;

    case 2 :
        nomeMes = 'Março';
        break;
        
    case 3 :
        nomeMes = 'Abril';
        break;
        
    case 4 :
        nomeMes = 'Maio';
        break;
    case 5 :
        nomeMes = 'Junho';
        break;
    case 6 :
        nomeMes = 'Julho';
        break;
    case 7 :
        nomeMes = 'Agosto';
        break;
    case 8 :
        nomeMes = 'Setembro';
        break;
    case 9 :
        nomeMes = 'Outubro';
        break;
    case 10 :
        nomeMes = 'Novembro';
        break;
    case 11 :
        nomeMes = 'Dezembro';
        break;                  
    default:
        nomeMes = 'Mes Inválido';
        break;
}

const paragrafo = document.querySelector("#data");

paragrafo.innerHTML = `${nome},${zero(diaMes)} de ${nomeMes} de ${ano} ás${zero(hora)}:${zero(minutos)}:${zero(sec)} <br/>`;