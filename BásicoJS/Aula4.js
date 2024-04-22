//Operadores Aritméticos//
/*

+ soma ou concatenação caso uma das variaveis seja diferente de number

- subtração

* multiplicação, **Potenciação(n1 **n2) = n1 elevado a n2 ,n1=base n2 =expoente

/ divisão ,% resto da divisão

() se pode usar parenteses para dar precedencia em alguma operação
*/

const n1 = 10;
const n2 = 15;
let nome = "yago";
let sobrenome = "Constantino";

console.log(n1 + n2);

console.log(nome + n1); // transforma n1 em caracter e imprime como uma string

console.log(nome + " " + sobrenome);

/*Operadores de Comparação 
Todo operador de comparação retorna em boolean,ou True ou False

== verifica se é igual 
!= verifica se é diferente
> verifica se é maior
< verifica se é menor
>= verifica se é maior ou igual
<= verifica se é menor ou igual

*/

/*Operadores de incremento 

++ incrementa de 1 em 1
-- decrementa de 1 em 1

+= var = var + x
-= var = var - x
*= var = var * x
/= var = var / x

*/

let contador = 1;

for (let contador = 1; contador <= 10; contador++) {
  console.log(contador);
}
