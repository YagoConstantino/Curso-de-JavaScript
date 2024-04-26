//Numbers e Math
let num1 = 1;
let num2 = 2.5456;

console.log(num1.toString(), "", +num2); // conversão para string

console.log(typeof num1); //o metodo de conversão é temporario.

//alterar o valor da variavel.

num1 = String(num1);

console.log(num2.toString(2)); // para mostrar o valor binario colocar o parametro 2 em toString,tambem temporario.

console.log(num2.toFixed(2)); //toFixed serve para formatar quantas casas decimais aparecerão depois da virgula em numeros float,tambem temporario,apenas no console.log

console.log(Number.isInteger(num2)); //retorna um valor boleano que testou se o num2 é inteiro

let temp = num2 * "ola";

console.log(temp);
console.log(Number.isNaN(temp)); // retorna um valor booleano dizendo se essa variavel testada não é um numero

//imprecisão em javascript

let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4); //0.8

num3 += num4;

console.log(num3 + num4); //0.9

num3 += num4;

console.log(num3 + num4); //1.0

num3 = Number(num3.toFixed(2));
console.log(num3 + num4); //1.0

console.log(Number.isInteger(num3));
//---------------------------------//
//Math

let numero1 = 9.5456;

let numeroBaixo = Math.floor(num1); // arredondando para baixo

console.log(numeroBaixo);

let numeroAlto = Math.ceil(numero1); // arredondando para cima

console.log(numeroAlto);

let numeroArredondado = Math.round(numero1); // arredonda automaticamente,baseado em se é maior ou igual que 0.5 arredonda pra cima se for 0.49 para baixo ele arredonda para baixo

console.log(numeroArredondado);

let maior = Math.max(1, 2, 3, 4, 5, 6); // metodo para achar o maior numero em um conjunto de numeros

console.log(maior);

let menor = Math.min(1, 2, 3, 4, 5, 6); // metodo para achar o menor numero em um conjunto de numeros

console.log(menor);

let aleatorio = Math.random(); // gera um numero aleatorio entre 0 e 1 e nunca chega a 1

console.log(aleatorio);

let aleatorio2 = Math.random() * 5 + 5; // agora gera um numero entre 5 e 10(5+5);

console.log(aleatorio2);

let aleatorio3 = Math.round(Math.random() * 5 + 5); // agora arredondando para tirar a virgula

console.log(aleatorio3);

/*Math.PI -> numero pi
Math.sqrt()->  raiz quadrada
Math.pow(base,expoente)
há o operador ** tambem em Javascript para potencia */
//------Exercicios-----------//

let numero = 0;

numero = Number(prompt("Digite um numero"));

document.body.innerHTML += `<strong> Seu Numero é ${numero} <strong/> <br/>`;

document.body.innerHTML += `A Raiz quadrada desse numero é ${Math.sqrt(
  numero
)}<br/>`;

document.body.innerHTML += `${numero} é inteiro ; ${Number.isInteger(
  numero
)}<br/>`;

document.body.innerHTML += `É Nan:${isNaN(numero)}<br/>`;

document.body.innerHTML += `Arredondando para baixo : ${Math.floor(
  numero
)}<br/>`;

document.body.innerHTML += `Arredondando para cima ${Math.ceil(numero)}<br/>`;

document.body.innerHTML += `Com Duas casas decimais:${numero.toFixed(2)}<br/>`;
//--------------------//

let numero2 = 0;

numero2 = Number(prompt("Digite o Segundo Numero"));

/*
document.getElementById("numero2").innerHTML = numero2;
*/
const numeroTitulo = document.getElementById("numero2").innerHTML;

numeroTitulo.innerHTML = numero2;

const texto = document.getElementById("texto");

texto.innerHTML = `<p><strong> Seu Numero é ${numero2} <strong/> <p/>`;

texto.innerHTML += `<p>Raiz quadrada : ${Math.sqrt(numero2)}<p/>`;

texto.innerHTML += `<p>${numero2} é inteiro : ${Number.isInteger(numero2)}<p/>`;

texto.innerHTML += `<p>${numero2} é NaN: ${Number.isNaN(numero2)}<p/>`;

texto.innerHTML += `<p>Arredondando para baixo :${Math.floor(numero2)}<p/>`;

texto.innerHTML += `<p>Arredondando para cima :${Math.ceil(numero2)}<p/>`;

texto.innerHTML += `<p>Com duas casas decimais ${numero2.toFixed(2)}<p/>`;
