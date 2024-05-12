//Escreva uma função que recebe 2 numeros e retorna o maior deles

function maior(numero1,numero2){ // versão 1
    if(numero1>=numero2)
        {
            return numero1;
        }
    else{
            return numero2;
        }
}

const max =(n1,n2) =>{ // versao 2
    if(n1>=n2) return n1;    
    return n2;
}

const numeroMaior = (n1,n2) => n1>n2 ?n1 : n2; // versao 3 com arrow function e operação ternária

console.log(maior(9,8));

console.log(max(10,15));

console.log(numeroMaior(50,60));

//Escreva uma função chamada ePaisagem que recebe dois argumentos,largura e altura de uma imagem,Retorne True se a imagem estiver no modo Paisagem.

function ePaisagem(altura,largura)
{
    if(largura>altura)
        {
            return true;
        }
    else
    {
        return false;
    }    
}

const ehPaisagem = (altura,largura)  => largura>altura;

console.log(ePaisagem(1080,1920));
console.log(ehPaisagem(1980,1080));

/*Escreva uma função quie recebe um numero e retorne o seguinte
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero não é divisivel por 3 e 5 = retorna o numero
*/

function Fizz(numero)
{
    if(Number.isNaN(numero))
        {
            numero = Number(numero);
        }
    if(numero%5===0 && numero%3===0)
        {
            return "BuzzFizz";
        }
    else if (numero%5===0)
        {
            return "Buzz";
        }
    else if (numero%3===0)
        {
            return "Fizz";
        }
    return numero;    
}

console.log(Fizz(60));
console.log(Fizz(55));
console.log(Fizz(3));
console.log(Fizz(2));

for(i=0;i<=100;i++)
    {
        console.log(Fizz(i));
    }

//Refatoração 1

function FizzBuzz(numero)
{
    if(typeof(numero)!=='number') return NaN;
    if(numero%5===0 && numero%3===0) return 'BuzzFizz';
    if(numero%5===0) return 'Buzz';
    if(numero%3===0)return 'Fizz';
    return numero;
}

