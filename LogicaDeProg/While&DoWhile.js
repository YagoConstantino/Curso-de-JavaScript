//Laço While e Do While

let controle = 0;

while(controle !== 10)
    {

        console.log(controle);
        controle++;
        
    }
controle = 0;
const string= "Uma sequencia de caracteres qualquer"

while(controle<string.length)
    {
        console.log(string[controle]);
        controle++;
    }

function random(min,max)
{
    const numeroAleatorio = Math.random() *(max-min) + min;
    return parseInt(numeroAleatorio);
}

console.log(random(20,50));

let numeroQualquer = random(1,50);

while(numeroQualquer !== 10)
    {
        console.log(numeroQualquer);
        numeroQualquer = random(1,50);
    }
console.log('O numero chegou a',numeroQualquer);   

// A unica diferença do While para o Do while é que o do while primeiro executa e depois testa a condição de parada,garantindo ao menos uma execução

let teste = 10;

do
{
    console.log(teste); // sera impresso mesmo que a condição de parada seja satisfeita no primeiro ciclo
}
while(teste!==10);