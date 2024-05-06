//Mais Difetenças entre Var e Let/Const//

const verdade = true;

let nome = 'yago';

var nome2 = 'augusto';
//Var só tem escopo de função

var nome2 = 'Constantino' // Var pode ser redeclarado

if (verdade)
{
    let nome = 'joao'; // Let tem escopo de bloco,logo pode haver outra variavel com o mesmo nome em outro bloco.{....bloco esta entre chaves}


    console.log(nome,nome2);


    if(verdade) // Bloco aninhado
    {
        let nome = 'Outro nome em outro bloco,todas são diferentes';

        var nome2 = 'Ribeiro' // Var sendo redeclarada
        console.log(nome,nome2)
    }
}    
