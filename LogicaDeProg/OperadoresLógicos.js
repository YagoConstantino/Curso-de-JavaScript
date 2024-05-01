/*Operadores de Comparação

> Maior que 

>= Maior que ou igual a

< Menor que 

>= Menor que ou igual

== Igualdade (checa se os valores são iguais)

=== Igualdade estrita (checa se o valor e o tipo são iguais)

!= Diferente (checa o valor)

!== Diferente estrito (checa o valor e o tipo)

*/

console.log(10 > 5); // retorna um boolean

const comparacao = 10 <= 10;

console.log(comparacao);

const teste = 10 == 5;

const teste2 = 15 != "10";

const teste3 = 10 == "10"; // retorna true pois so testa o valor 10

const teste4 = 10 === "10"; // retorna false pois são de tipos diferentes

console.log(teste);
console.log(teste2);
console.log(teste3);
console.log(teste4);
console.log("Fim do teste de comparação");

/*
Operadores Lógicos

&& => AND = E

|| => OR = OU

! => NOT = NÃO 
*/

const logico1 = true && false; //retorna falso pois os dois tem que ser verdadeiro para que a expressão && retorne true

const logico2 = true || false; // retorna verdadeiro pois a expressão OR precisa apenas de um verdadeiro para ser verdadeiro

const logico3 = !true; // Retorna False pois NOT inverte o valor da expressão, se for FALSE o transforma em TRUE

console.log(logico1);
console.log(logico2);
console.log(logico3);
console.log("Fim do teste de operadores lógicos");

const usuario = "yago";
const senha = 1234;

const login = usuario === "yago" && senha === 1234;

console.log(login); // caso o usuario e a senha seja correta retorna true,podemos colocar em uma função para permitir o login.
