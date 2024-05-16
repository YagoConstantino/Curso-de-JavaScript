//As várias maneiras de chamar funções//

falaOi();
//Declaração de função (Function hoisting) A engine do javascript leva a função declarada    para o topo do documento antes de executar

function falaOi()
{
    console.log('Olá');
    return 0;
}

//Funções são objetos de primeira classe logo pode ser amarzenada em variaveis

const nome = function()
{
    console.log("Meu nome é Yago");
    return 0;
}

nome();

//Arrow Function 

const arrow = ()=>
    {
        console.log('Sou uma arrow function');
    }

arrow();

const soma = (x,y)=>
    {
        return x+y;
    }

console.log(soma(5,3)); 

//Arrow function resumida

const multiplica = (x,y) => x*y;

console.log(multiplica(5,35));

//Funções dentro de objetos

const pessoa =
{
    fala:function()  // Completo // Primeiro o nome da função em seguida : e funtion(){}
    {
        console.log("Falei");
    },
    dizer(){       // Resumido // Nome e ()
        console.log('Disse');
    }
}

pessoa.fala;
pessoa.dizer;


    