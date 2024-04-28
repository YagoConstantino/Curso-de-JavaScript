//---Funçoes Basico-----//

function soma(x = 0, y = 0) {
  return x + y;
}

console.log(soma(2, 5));

function saudacao(nome) {
  console.log(`Ola ${nome} seja Bem vindo ao curso de JS`);
}

saudacao("yago");

//podemos declarar funçoes dentro de variaveis,funcionando exatamente igual,basicamente declaramos o nome antes apenas
const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));

//Arrow Function//
//Resume ainda mais trocando a function por uma seta feita de um sinal de igual e um de mais =>
const divide = (n1, n2) => {
  return n1 / n2;
};

//de forma ainda mais resumida podemos ignorar o return e as chas e passar apos a flecha diretamente o que sera retornado

const multiplica = (n1, n2) => n1 * n2;

console.log(divide(15, 3));
console.log(multiplica(2, 9));
