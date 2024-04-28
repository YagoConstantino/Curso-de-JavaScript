//Valor Primitivo e Valor por referencia

/*
Primitivos - string , number, boolean, undefined, Null

Cada um desses representa valores imutáveis.

*/

let nome = "yago";
nome[0] = "J";
//não funciona porque a string não é mutavel
console.log(nome[0]);

let a = "A";
let b = a; // aqui eu estou copiando o valor de a para a variael b, apos isso o valor b se torna independente. // valores Primitivos são passados por cópia em Javascript.

console.log(a, b);

a = "Outra coisa";
//b permanece como A pois são independentes
console.log(a, b);

//Valor passado por refencia(Mutáveis) - Arrays , Objects e Functions

let arrayA = [1, 2, 3, 4];
let arrayB = arrayA;
// aqui linkamos o arrayB no mesmo local de memoria que o arrayA,assim sendo se alterarmos um o outro sera mudado tambem.O arrayB funciona como um ponteiro para o endereço de memoria do arrayA.

console.log(arrayA, arrayB);

arrayA.push(5);

console.log(arrayA, arrayB);
//Aqui vemos que a mudança em um afeta o outro.

arrayB.pop();

console.log(arrayA, arrayB);

//Há uma forma de copiarmos valores ao inves de passar por referencia(...);

let teste1 = [5, 6, 7, 8];
let teste2 = [...teste1];

teste1.push(9);

console.log(teste1, teste2);
//Assim os valores se tornam independentes entre si.

//O mesmo vale para objetos
const X = {
  nome: "Nome X",
  sobrenome: "Sobrenome X",
};

const Y = X;

console.log(Y.nome, Y.sobrenome);

X.nome = "Mudei o nome";

console.log(Y.nome);

const Z = { ...X };

Z.nome = "Nome Z";

console.log(Z.nome, Z.sobrenome);

//--------Exercicios----------//
let cont = 0; // Agora é uma variável global, não uma constante

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;

    function criaPessoa(nome, sobrenome, peso, altura) {
      return {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,
      };
    }
    pessoas.push(criaPessoa(nome, sobrenome, peso, altura));

    resultado.innerHTML += `${pessoas[cont].nome} ${pessoas[cont].sobrenome}
    ${pessoas[cont].peso}
    ${pessoas[cont].altura}<br>`;
    cont++;
  }
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
