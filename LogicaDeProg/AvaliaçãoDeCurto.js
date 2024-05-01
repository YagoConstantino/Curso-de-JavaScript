// Avalição de Curto Circuito//

console.log("Yago" && 0 && "Joao"); // caso seja falso ele retorna o valor falso

console.log("Yago" && 1 && "Joao"); // caso seja verdadeiro o console retorna a ultima expressão

/*Valores que retornam falso:

false // 0 // undefined // Nan // " "// ' ' // ` `// null

O restante é avaliado como true
*/

const falaOi = () => "Oi";

const invoca = true;

console.log(invoca && falaOi()); // dado que é verdadeiro os dois itens, ele retorna o ultimo, ou seja chama a função

const naoInvoca = false;

console.log(naoInvoca && falaOi()); // retorna false

console.log(naoInvoca || falaOi()); //é considerado verdadeiro logo retorna o primeiro item verdadeiro da expressão
