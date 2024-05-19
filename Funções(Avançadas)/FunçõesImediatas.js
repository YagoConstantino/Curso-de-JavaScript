//Funções Imediatas // IIFE => Immediately invoked function expression
function qualquerFunção(){
    console.log('ola Mundo');
}

qualquerFunção(); // invocada no escopo global

nome = 'joao';

(function (){
console.log("Função chamada imediatamente sem ser invocada no escopo global");
const nome = 'Yago';
console.log(nome); // Não há conflito com variaveis no escopo global uma vez que essa função não passa por ele.
})()