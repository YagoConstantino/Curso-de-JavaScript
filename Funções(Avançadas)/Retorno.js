//Retornar valores de funções
//O retorno nos permite armazenar o retorno em variaveis, como parametro para outras funções ou ainda em laços de repetição etc.

function soma(x,y) 
{
    return x+y;
}

let somado = soma(5,8);
console.log(somado);

somado = 0;

let cont = 0;
for(i=0;somado<10;i++)
    {
        cont++;
        somado = soma(i,i);
    }

console.log(cont-1,somado);

//Há ocasiões em que não precisamos de retono
/*document.addEventListener('click',function(){

    console.log('Função Sem retorno');

});*/

//Exemplo de retorno em Variáveis
function criaObjeto(nome,sobrenome,idade)
{
    return{nome,sobrenome,idade};
}

const pessoa1=criaObjeto('Yago','Constantino',22);

const pessoa2=criaObjeto('Joao','Constantino',22);

console.log(pessoa1,pessoa2);
console.log(pessoa1.nome,pessoa2.nome)
//--------------------------//
//Funções dentro de funções

function falaFrase(comeco){
    function falaResto(resto)
    {
        return comeco+' '+resto;
    }
    return falaResto;
}

const olaMundo=falaFrase('Olá');

console.log(olaMundo); //Isso vai retornar a função interna sem chamar ela

console.log(olaMundo('Mundo'));
//É como se a variavel olaMundo fosse a função falaResto com o parametro 'Olá',mas sem chamar ela e sem dar o parametro DELA.
//Ou seja armazenou a função falaResto sem chama-la e com o paramentro da função mae 'Olá'

const fala=falaFrase('Oi Yago');
const falaCompleta = fala('Constantino');

console.log(fala);
console.log(falaCompleta);
//------------Exemplo----------//

//Ao inves de criar diversas funções para fazer praticamente o mesmo
function duplica(n)
{
    return n*2
}

function triplica(n)
{
    return n*3
}

function quadriplica(n)
{
    return n*4
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//Criamos uma função que praticamente cria funções com  os parametros podendo variar
function criaMultiplicador(multiplicador)
{
    function multiplica(n)
    {
        return n* multiplicador;
    }
    return multiplica;
}

//Depois armazenamos essa função interna em variaveis 
const triplo = criaMultiplicador(3);
const quadruplo = criaMultiplicador(4);
const quintuplo = criaMultiplicador(5);
const sextuplo = criaMultiplicador(6);

//e chamamos a função interna com o nome da variavel e o novo parametro multiplicado
console.log(triplo(2));
console.log(quadruplo(2));
console.log(quintuplo(2));
console.log(sextuplo(2));
//OBS: poderiamos simplesmente cria uma função com dois parametros (n e multiplo) e retornar a multiplicação deles
//Entretanto imagino que funções mais complexas levaria-nos a ter muitos parametros, logo sera mais organizado e limpo usar esta técnica.
//----------------------------//
//Escopo Léxico//

//Escopo Global
const nome = 'Ana';

function falaNome()
{
    console.log(nome);//A função pode acessar o que existe no escopo global
}
falaNome();

function falaIdade()
{
    //Escopo interno da função
    let idade = 10;
    console.log(idade);
}

console.log(idade);//Idade não existe no escopo global, e não temos acesso ao escopo interno da função ,comente esse console.log para proseeguir
//-----------------//------------//

function usaFalaNome()
{
    falaNome();
}

usaFalaNome() // A função chama a falaNome,que lembra da variavel global que ela se referia,portanto pode usa-la mesmo que esteja dentro do escopo da nova função.

