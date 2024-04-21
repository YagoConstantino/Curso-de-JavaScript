// Variáveis
//Let:
let nome; // declara a variavel

nome = "joao"; // inicializa a variavel com um valor

var nome2 = "yago";
console.log(nome + " " + nome2);

nome = "joao mudado";
/* Let permite mudanças apos a declaração e nao necessita de Let antes do nome da variavel*/

console.log(nome);

/*Não podemos criar variaveis com palavras reservadas no javascript,como nome de funções. let let é impossivel */

//==========================//

//Const:

const endereco = "Maria vitoria";

console.log(endereco);

//endereco = "yago"; é impossivel mudar o valor de uma Const, ela tambem exige que se inicialize a variavel quando ela é declarada,

console.log(endereco);
/*
apos uma inicialização de variavel podemos usar o conteudo como referencia para uma nova variavel, assim como usar operações aritmeticas para tipos numericos.
*/
const primeiro_num = 5;
const segundo_num = 10;

const soma = primeiro_num + segundo_num;

const multiplicacao = primeiro_num * segundo_num;

console.log(primeiro_num, segundo_num, soma);
console.log(multiplicacao);

console.log(multiplicacao * 2);
//------------------//
/*
let permite mudanças com operadores e em relação a si mesma podendo atualizar com laços de repetição ou usada como contador etc.
*/
let num = 10;
let letra = "1";

console.log(num, "original");

num = num * 2;
console.log(num, "alterado");

console.log(typeof num);
console.log(typeof endereco);
console.log(typeof letra);

//----------------------//
//Exercicios

const meuNome = "Yago Augusto";
const sobreNome = "Constantino Ribeiro";
const idade = 22;
const altura = 1.74;
const peso = 60;
let imc = peso / (altura * altura);
const nascimento = 2024 - idade;

console.log(
  "Me chamo",
  meuNome,
  sobreNome,
  "Tenho",
  idade,
  "anos de idade,peso",
  peso,
  "kg e tenho ",
  altura,
  "M e meu IMC é :",
  imc
);
console.log(meuNome, "Nasceu em :", nascimento);

/*Posso usar crase e um cifrão antes de chaves para para formatar a impressão */

console.log(`meu nome é ${meuNome}  ${sobreNome} tenho altura de ${altura}M e peso de ${peso}KG e meu IMC é ${imc},nascido em ${nascimento} portanto tenho ${idade} anos
`);
