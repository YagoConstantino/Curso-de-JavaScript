//------Arrays-Basico----------//
//Arrays são estruturas de dados que servem para guardar conjuntos de dados organizadamente,podendo muda-los,consultar um por um por meio do indice.
//                  0      1       2
const alunos = ["Yago", "Ana", "Joao", "Amanda", "Gabriel"];

console.log(alunos);
console.log(alunos[1]);

for (i = 0; i < 5; i++) {
  console.log(alunos[i]);
}

alunos[5] = "Etiene";

console.log(alunos[5]); // adicionamos um novo elemento na posição 5 do array alunos

console.log(alunos.length); // metodo para saber o tamanho do array

//para adicionar um novo valor por ultimo no array basta fazer um length que vai resultar no proximo indice

alunos[alunos.length] = "Erica";

// ou ainda usar o metodo push que adiciona diretamente no final

alunos.push("Edmilson");

console.log(alunos);

//para adicionar um novo elemento no começo do array se usa o metodo unshift

alunos.unshift("Augusto");

console.log(alunos);

//para remover o ULTIMO elemento pode se usar o metodo pop

const removido = alunos.pop();

console.log(alunos);
console.log(removido);

//para remover do COMEÇO do array se usa o metodo shift

const removido2 = alunos.shift();

console.log(alunos);
console.log(removido2);
// existe o metodo delete porem ele deixa o espaço do elemento removido vazio

//delete alunos[3];

console.log(alunos);

//podemos fatiar um array como um string(que afinal é um array de caracteres)

console.log(alunos.slice(2, 5));
