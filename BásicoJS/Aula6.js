//Strings
let str = "Um texto";

/* String funcionam como arrays de caracteres,podemos acessar os caracteres por meio do indice da string*/

for (i = 0; i < 8; i++) {
  console.log(str[i]);
}

/*\contra barras servem para chamar algumas utilidades por meio de caracteres,logo o caracter seguinte da \contra barra é tratado como comando, nao caracter,portanto,nao é impresso*/
let str2 = "segundo \texto";

console.log(str.indexOf("texto"), 1); // retorna o primeiro indice da palavra escolhida,podemos definir o indice de começo da busca com um numero apos o numero

console.log(str.lastIndexOf("o", 7)); // faz o mesmo porem começa na ultima posição e vai voltando

console.log(str.match(/[a-z]/g));
//expressão regular para achar letras minusculas de a - z, o g é para agrupar, senao retorna o primeiro indice que achar com essa busca

console.log(str.search(/t/));
//retorna a posição do caracter escolhido

console.log(str.replace("Um", "segundo"));
//replace,primeiro a palavra que vai ser substituida,segundo a palavra nova.
str = str.replace("Um", "segundo");

str = str.replace(/t/g, "p");
//o grupo de todos os t vao mudar para p,caso não use o g ou não use expressões regulares teria que mudar um por um
console.log(str);

console.log(str.length); // para saber o tamanho da string.

console.log(str.slice(2, 6)); // para corta uma string,ou seja pegar apenas uma parte. o primeiro parametro é o começo e o segundo é o proximo após o ultimo,logo o sexto caracter não é impresso.

console.log(str);
console.log(str.slice(-5)); // ultimos 5 caracteres
//--------------------------------------------//

Array = str.split(" "); // retorna um array com cada palavra da string dividida por espaços,poderia ser qualquer caracter.

str.toLowerCase(); // transforma as letras em minuscula

str.toUpperCase(); // transforma as letras em maiuscula.
//----------------//
const nome = prompt("Digite o seu Nome Completo");

document.body.innerHTML = `O seu Nome é ${nome} <br />`;

document.body.innerHTML += `Seu nome tem as letras ${nome.match(
  /[a-z]/g
)}<br/>`;

document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br/>`;

document.body.innerHTML += `O primeiro índice da letra a no seu nome é ${nome.indexOf(
  "a"
)}<br/>`;

document.body.innerHTML += `O último índice da letra a em seu nome é ${nome.lastIndexOf(
  "a"
)}<br/>`;

document.body.innerHTML += `As últimas três letras do seu nome são ${nome.slice(
  -3
)}<br/>`;

document.body.innerHTML += `As palavras separadas do seu Nome são : ${nome.split(
  " "
)}<br/> `;

document.body.innerHTML += `${nome.toUpperCase()}<br/>`;

document.body.innerHTML += `${nome.toLowerCase()}<br/>`;
