//Atribuição via desestruturação de objetos//

const pessoa = {
    nome:'Yago',
    sobrenome:'Augusto',
    idade : 22,
    endereco:{
        rua:'Maria vitoria Achoa',
        numero :37
    }
};

console.log(pessoa);
const nome1 = pessoa.nome +' '+ pessoa.sobrenome;
console.log(nome1);

//Atribuição via desestruturação
//posso dar o nome da variavel colocando : 
const{ nome:nomeGlobal,sobrenome:sobrenomeGlobal,idade } = pessoa;

console.log(nomeGlobal,sobrenomeGlobal);

//Posso atribuir baseado em objetos dentro de objetos usando : e {}
const {endereco:{rua:ruaGlobal,numero:numeroGlobal}} = pessoa;

console.log(ruaGlobal,numeroGlobal);

//Ou pegar o objeto interno completo
const {endereco} = pessoa;

console.log(endereco);

//Posso pegar tudo o que sobra no objeto por meio do operador ...
const {nome,...resto}=pessoa;

console.log(resto);