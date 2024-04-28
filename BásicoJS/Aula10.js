//Objetos Basico//
const array = [1, 2, 3];
array.push(4);
array[0] = 5;
console.log(array);

const nome = "yago";
const sobrenome = "Constantino";
const idade = 22;

//lembra uma struct em C ou um dicionario em Python.

const pessoa = {
  nome: "Joao",
  sobrenome: "Constantino",
  idade: 22,
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

//função para criar esse objetos a partir de parametros ele retorna,poderia ser por meio de prompt tambem.
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const Ana = criaPessoa("Ana Julia", "Constantino", 25);

console.log(Ana.nome, Ana.sobrenome, Ana.idade);

function criaAluno(nome, idade, curso, Ra) {
  return {
    nome: nome,
    idade: idade,
    curso: curso,
    Ra: Ra,
  };
}

const aluno1 = criaAluno("yago Constantino", 22, "BSI", 2680424);

const aluno2 = criaAluno("Joao", 22, "Direito", 2645680);

const aluno3 = criaAluno("Ana Julia", 25, "Odontologia", 2564898);

console.log(aluno1.nome, aluno1.idade, aluno1.curso, aluno1.Ra);

console.log(aluno2.nome, aluno2.idade, aluno2.curso, aluno2.Ra);

console.log(aluno3.nome, aluno3.idade, aluno3.curso, aluno3.Ra);

//Metodos dentro de objetos

function criaPessoa2(nome, sexo, idade) {
  return {
    nome,
    sexo,
    idade,
    fala() {
      console.log(
        `Meu nome é ${this.nome},é um prazer te conhecer,eu tenho ${this.idade} Anos `
      );
    },
    aumentaIdade() {
      this.idade++;
    },
  };
}

const Yago = criaPessoa2("Yago", "M", 22);

Yago.fala();
Yago.aumentaIdade();
Yago.fala();
Yago.aumentaIdade();
Yago.fala();
Yago.aumentaIdade();
Yago.fala();
Yago.aumentaIdade();
Yago.fala();
