/*
Estruturas Condicionais

IF => Se ,testa se uma condição é verdadeira, retornando uma ação descrita dentro das chaves

ELSE => caso o IF anterior não seja atendido,ou seja a condição testada é falsa, faz outra ação descrita dentro das chaves

ELSE IF => É um teste posterior que so pode ser chamado depois de um IF, primeiro se testa o IF e em seguida testao ELSE IF , tambem retornando uma ação descrita entre chaves
*/

let hora = 10;
const teste = true;

if (hora > 0 && hora < 12) {
  console.log("Bom dia");
}

hora = 13;

if (hora >= 12 && hora <= 18) 
{
  console.log("Boa Tarde");
}

else 
{
  console.log("Boa Noite");
}

if(teste)
{
    console.log("Teste deve ser verdadeiro para que o if seja feito");
}

//-----------------------------//

const numero = 10;

if(numero>=0 && numero <=5)
{
  console.log("esse numero esta entre 0 e 5 ")
}
else if (numero >5 && numero<=10)
{
  console.log("Esse numero esta entre 6 e 10")
}
else if (numero<0)
{
  console.log("Esse numero é negativo");
}
else{
  console.log("esse numero é maior que 10");
}
