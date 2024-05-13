//Tratamento de erros
try{ // Aqui fazemos o teste 
    console.log(naoExisto);
}
catch(erro)//caso ache um erro faz a ação dentro das chaves
{
    console.log('Variavel não definida'); // ação relacionada ao erro
}

function soma(x,y)
{
    if(typeof x !=='number' || typeof y!== 'number')
        {
            throw new Error("Valores da função não são numeros"); // Aqui eu gero um tipo de erro e encerro a função usando throw
            //New serve para dar o tipo de erro,Error é generico
            //ReferenceError,TypeError etc poderiam substituir
            //Não é necessário dar tipo
        }
}
try
{
    console.log(soma("1",2));
}
catch(error)
{
    console.log(error);
}
///-----------------------------///
try{
//Executada para testar erros
console.log("Abri um arquivo");
console.log("Manipulei um arquivo e gerou erro");
}
catch(erro){
//Executado quando achar erros
console.log("Tratei o erro");
}
finally{ 
//Executado sempre
console.log("Fechei o arquivo Finalmente");   
}

function mostraHora(data)
{
    if(data && !(data instanceof Date)) // tratando para caso não seja uma data proveniente da função construtura Date
        {
            throw new TypeError("Esperando uma instancia de Date");
        }
    if(!data)
        {
            data = new Date();
        }
    return data.toLocaleTimeString('pt-br',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    });        
}
try
{
    const data = new Date('01-01-1980 12:58:25');
    console.log(mostraHora(data));
}
catch(erro)
{
    //tratar o erro
}
finally
{
    console.log('Tenha um bom dia');
}