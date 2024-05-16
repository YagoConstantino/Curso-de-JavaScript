// Parâmetros em Funções
/* A função declarada com a palavra function tem uma 
variavel especial que se chama arguments que sustenta
 todos os argumentos enviados*/
function funcao()
{
    let total = 0;
    for(argumento of arguments)
        {
            total+=argumento;
        }
        return total;
}

function funcao2(a,b,c)
{
    let total = 0;
    for(argumento of arguments)
        {
            total+=argumento;
        }
        return total;
}

console.log(funcao(1,2,3,4,5,6,7,8,9));
console.log(funcao2(1,2,3,4,5,6,7,8,9,10,11,12,13));

//------------------------------------------//
/* Funções que tem mais parametros do que argumentos dados cria variaveis com valor undefined por padrão */

function teste(a,b,c,d,e)
{
    console.log(a,b,c,d,e);
}

teste(1,2,3);

//Podemos declarar valores padrão dentro da função

function teste2(a=0,b=0,c=0,d=0)
{
    console.log(a,b,c,d);
}
teste2(1,2);

//Pular parametros

teste2(1,undefined,3); // Então ele assume o valor padrão

//Atribuição via desestruturação 

function objeto({nome,sobrenome,idade})
{
    console.log(nome,sobrenome,idade);
}

objeto({nome:'yago',sobrenome:'Constantino',idade:22});

const individuo={
    nome:'joao',
    sobrenome:'pedro',
    idade: 22
}
objeto(individuo);

// O mesmo para um Array

function array([valor1,valor2,valor3])
    {
        console.log(valor1+valor2+valor3);
    }

array([1,2,3]);

const lista=[5,6,7];

array(lista);
//////////--------------/////////
function conta(operador,acumulador,...numeros)//Todos os argumentos apos o operador e acumulador vao ficar dentro de numeros //...Rest operator //Sempre deve ser o ultimo parametro
{
    for(let numero of numeros)
        {
            if(operador === '+') acumulador+=numero;
            if(operador === '-') acumulador-=numero;
            if(operador === '*') acumulador*=numero;
            if(operador === '/') acumulador/=numero;
        }
        console.log(acumulador);
}

conta('+',0,20,30,40,50);

//---------------------//
/* FIM */