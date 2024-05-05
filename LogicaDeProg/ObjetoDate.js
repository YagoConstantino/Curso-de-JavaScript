//Operações ternárias  ? : //

//operador ternário servem para resumir ifs elses

let pontuacao = 999;
//const nivel = pontuacao >= 1000 ? 'VIP' : 'Comum';

console.log(pontuacao >=1000? 'VIP':'Comum');

pontuacao = 1000;

console.log(pontuacao >=1000? 'VIP':'Comum');

//----------Objeto Date-----------//

//const tresHoras = 60*60*3*1000; tres horas em milissegundo
//const umDia = 60*60*24*1000; 1 dia em milissigundo


//                    ano,mes,dia,hora,min,sec
const data = new Date(2024,4, 4,  10,  34, 25);
console.log(data.toString());

//mes começa em 0 como em um vetor,logo é sempre um numero anterior,4 = Maio.

const data2 = new Date("2024-5-04 10:38:24");
//usando o formato aa/mm/dd TIME;
console.log(data2.toString()); 

//get():
console.log("Dia",data.getDate());
console.log("Mes",data.getMonth()+1);//retorna 1 a menos
console.log("Ano",data.getFullYear());
console.log("Hora",data.getHours());
console.log("Min",data.getMinutes());
console.log("Seg",data.getSeconds());
console.log("ms",data.getMilliseconds());
console.log("Dia Semana",data.getDay()); // começa no 0 : Domingo

// Voce pode conseguir os milésimos de segundos Apartir do marco zero 01/01/1970 Até hoje Usando:

console.log(Date.now());

//------------------------------//

function zero(num)
{
    return num >=10 ?num : `0${num}`; // função para colocar um zero antes de numeros menores que 10;
} 

function formataData(data)
{
    // função para formatar uma data;
    const dia = zero(data.getDate());  
    const mes = zero(data.getMonth()+1);
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const min = zero(data.getMinutes());
    const sec = zero(data.getSeconds());

    return`${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const novaData = new Date();

const dataBrasil = formataData(novaData);
console.log(dataBrasil);
