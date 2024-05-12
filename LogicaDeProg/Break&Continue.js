// Break e Continue

const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros)
    {
        if(numero %2 === 0)
            {
                continue; // Caso seja um numero par vamos pular o resto do ciclo e vamos pra proxima iteração do laço
            }
        console.log(numero);

        if(numero === 9)
            {
                console.log('Cheguei a 9, encerrando o laço de repetição');
                break;
            }
    }

