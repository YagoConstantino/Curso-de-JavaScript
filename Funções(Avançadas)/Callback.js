//---------------Closure----------------//

//Escopo Global
function retornaFuncao(nome)
{
    //Escopo pai
    
    return function()
    {//Escopo local
        return nome;
    }
}

const funcaoNova = retornaFuncao("Yago");
const funcao2 = retornaFuncao("Joao");
console.dir(funcaoNova);
console.dir(funcao2);

//////----------CallBack----------///////

function rand(min=1000,max = 3000)
{
    const valor = Math.random()*(max-min)+min;
    return Math.floor(valor);
}


function f1()
{
    setTimeout(function()
{console.log('f1');},rand(200,500));
    
}

function f2()
{
    setTimeout(function()
    {
        console.log('f2');
    },rand(200,500));
}

function f3()
{
    setTimeout(function()
{
    console.log("f3");
},rand(200,500));
}
//Como não sabemos quanto tempo cada função leva para fazer seu papel(seja pegar dados em banco de dados,enviar,mostrar ou tratar dados,seja guardar o login de algo etc)
//Não temos como saber qual a ordem de execução,possivelmente causando erros.
f1();
f2();
f3();
console.log("Olá mundo");

//--------------------//-------------//---------

function enviaDados1(callback)
{
    setTimeout(function()
{
    console.log('Enviar os Dados para o banco')
    if(callback)
    {
        callback();
    };
},rand());
  
    
}

function trataDados2(callback)
{
    setTimeout(function()
    {
        console.log('Tratar os dados para o Banco');
        if(callback)
            {
                callback();
            }
    },rand());
  
}

function recuperaDados3(callback)
{
    setTimeout(function()
{
    console.log("Recuperar os dados");
    if(callback)
        {
            callback();
        }
},rand());

}

/*Colocando como parametro da função um callback,podemos organizar a ordem das funçoes sem controlar o tempo
Aqui a primeira função é chamada independente do tempo que ela leva,após ela terminar de fazer oque deve é chamada a função seguinte e assim por diante até finalizar
Usamos um parametro que é testado dentro de cada função para ao terminar a execução da atual chamar a próxima */
enviaDados1(function()
{
    trataDados2(function()
    {
        recuperaDados3(function()
        {
            console.log('Finalizar');
        })
    });
});

//Outra forma de fazer 
//------//Cria os callbacks//-------//
function callbackEnviaDados()
{
    trataDados2(callbackTrataDados);
}

function callbackTrataDados()
{
    recuperaDados3(callbackRecuperaDados);
}

function callbackRecuperaDados()
{
    console.log("Finalizando.....");
}
//----------//Chama a primeira função//-------//
enviaDados1(callbackEnviaDados);

