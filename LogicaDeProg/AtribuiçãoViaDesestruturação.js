//Atribuição via desestruturação de Arrays

let a ='A';
let b ='B';
let c = 'C';

const array = [1,2,3]; 
//[a,b,c] = array; // atribuição
//estou reatribuindo variaveis a partir de uma array

const inverte = [b,c,a] ; // agora posso reatribuir variaveis a partir do conteudo de outras variaveis

[a,b,c] = inverte; 
//a recebe o valor de b
//b recebe o valor de c
//c recebe o valor de a

console.log(a,b,c);
//indice         0  1  2  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const primeiroNumero = numeros[0];

console.log(primeiroNumero);

// posso usar a atribuição para criar variaveis ou mudar os valores de variaves todas de uma vez

//      0        1       2
const[numero1,numero2,numero3] = numeros; // pego os valores na ordem dos indices

console.log(numero1,numero2,numero3);


//usando ... podemos pegar todos os itens restantes do array e colocar em uma variavel,com excessao daquilo que veio antes,ou das variaves que receberam os valores anteriores

let[indice0, ...resto] = numeros;
console.log(indice0);
console.log(resto);

//Podemos pular valores usando variaveis vazias:
let[um, , tres, ,cinco, , sete, , nove] = numeros;
console.log(um,tres,cinco,sete,nove);

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// acessando arrays dentro de arrays
let[tresPrimeiros,tresDoMeio,tresUltimos] = matriz;

console.log(tresPrimeiros,tresDoMeio,tresUltimos);
 // Tambem podemos pegar variaveis dentro de arrays dentro de arrays
let [n1,n2,n3] = matriz[0];

console.log(n1,n2,n3);


const [,[,,seis]] = matriz;
/*A primeira virgula ignora matriz[0]
as chaves acessam matriz[1];
as duas virgulas ignoram os dois primeiros valores desse array dentro de matriz[1];
seis declara a variavel e pega o valor nessa posição*/

console.log(seis);