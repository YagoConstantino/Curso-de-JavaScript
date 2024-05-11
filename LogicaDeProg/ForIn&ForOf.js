//For In//
const array = [5,7,3,4,5,6];
const frutas = ['Maça','Laranja','Manga'];

//For i funciona como um laço for tradicional,porém Não temos a necessidade de descrever a parada nem o incremento
for(i in array)
    {
        console.log(array[i]);
    }

for(fruta in frutas)
    {
        console.log(frutas[fruta]);
    }    

const pessoa ={

    nome:'Yago',
    sobrenome:'Constantino',
    idade:22

} 

for (i in pessoa){
    console.log(i,':',pessoa[i]);
}

//  For Of

const nome = 'Yago Augusto Constantino Ribeiro';

//O for of pega diretamente o valor do objeto iterado,diferentemente do for in que pega o indice ou seja a posição no array.
for(valor of nome)
    {
        console.log(valor);
    }

for(i in nome)
    {
        console.log(i);
    }

//For of nos permite acessar diretamente esse valores em objetos

const aluno = {
    nome:'Yago',
    sobrenome:'Constantino',
    ID: 2680424,
    curso:'BSI'
}

for(valor in aluno)
    {
        console.log(valor,aluno[valor]);
    }

    

//For each(para cada)
//faz um laço para cada item em um array[Exclusivo de Arrays]
//Para usar esse laço fazemos uma função interna.

frutas.forEach(function(valor,indice){
    console.log(valor,indice);
});
    