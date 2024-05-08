//Laço de repetição For//
for(i=1;i<=10;i++)
    {
        console.log(`Linha ${i}`);
    }

for(i=10;i>=1;i--)
    {
        console.log(`Linha ${i}`);
    }

 //-----------Exercicios--------//
 
 const elementos=[
    {tag:'p',texto:'Frase dentro do Paragrafo'},
    {tag:'div',texto:'Frase dentro da Div'},
    {tag:'footer',texto:'Frase no footer'},
    {tag:'section',texto:'Frase na section'},
];

const container = document.querySelector('.container');

for(i=0;i<elementos.length;i++)
    {
        let{tag,texto} = elementos[i];
        
       let tagCriada = document.createElement(tag);

       tagCriada.innerHTML = texto
       
       container.appendChild(tagCriada);
    }