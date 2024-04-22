/* Tipos primitivos de Variáveis */

/* String , conjunto de caracteres
  Podem ser declaradas com ""e '', 
  podemos usar a crase para podermos formatar`${variavel}` em console.log*/
const nome = "Yago Constantino";

console.log(`ola ${nome} tudo bem?`);

/*Number
dividido em duas classes
Inteiro, Int, com numeros sem virgula
Real, Float, com numeros com virgula
Ambos consideram os numeros negativos */
const inteiro = 10;
const real = 1.56;

/* Undefined
Nao aponta para nenhum local da memoria  e nao pode ser mudado*/

const vazio = undefined;
const nulo = null; //Nulo -> Nao aponta para nenhum lugar da memoria,mas em geral pode ser utilizado para desconfigurar uma variavel,imagine a seleção de um plano de fundo e que caso essa variavel nao seja mudada ou seja nula,uma cor padrao ocorre

/*Boolean
Valores que mude entre True e False(lógico)*/

let aprovado;
let nota = 6;

if (nota >= 6) {
  aprovado = true;
} else {
  aprovado = false;
}

console.log(
  typeof aprovado,
  typeof nota,
  typeof real,
  typeof nulo,
  typeof vazio,
  typeof nome
);

/* Dado passado por referencia
Aqui o b serve como uma referencia do endereço da array,assim sendo a mudança em b afeta diretamente o conteudo da array
funcionando como um ponteiro em C,porém isso so funciona em objects nao em variaveis primitivas*/
let array = [1, 2, 3];
let b = array;

console.log(array, b);

b.push(4, 5);

console.log(array, b, typeof array, typeof b);
