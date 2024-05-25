//Funções recursivas

function potencia(numero,potencia)
{   
    numeroOriginal = numero;
     for(i=1;i<potencia;i++)
        {
            numero*=numeroOriginal;
        }
        return numero;
}
console.log(potencia(2,3));

//Funções recursivas são funções que chama a si propria dentro dela:
function potenciaRecursiva(numero,potencia)
{
    if(potencia===0)
        {
            return 1;
        }
    if(potencia===1)
        {
            return numero;
        }

    return numero*potenciaRecursiva(numero,potencia-1);
}

console.log(potenciaRecursiva(2,6));

//-------------//----------//-----/-

function recursiva(max)
{
    console.log(max); // mostro a contagem progressiva

    if(max>=10) return //caso haja muita recursividade o javascript da erro,logo limitamos essa função;

    max ++; // incremento o numero
     
    return recursiva(max); // chamo a função novamente até chegar a 10
}
recursiva(1); // mostrar de 1 até 10;