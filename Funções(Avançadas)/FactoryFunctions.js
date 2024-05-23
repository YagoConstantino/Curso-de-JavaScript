//Factory Functions//

/*Construção do objeto */
function criaObjeto(nome,sobrenome,idade)
{
    return{nome,sobrenome,idade, 
        fala:function(assunto)
        {
            return `${nome} está falando sobre ${assunto} e tem ${this.peso} kgs`;
        },
        /*Mesmo que peso esteja fora do escopo da função, o this chama o objeto que esta sendo construido e recebe o valor dele
        Seria o mesmo que fazer pessoa1.peso ja dentro da função*/ 
        peso:60
    };
}

const pessoa1=criaObjeto('Yago','Constantino',22,60);
console.log(pessoa1);
console.log(pessoa1.fala('Matematica'));

function criaPessoa(nome,sobrenome,altura,peso,idade)
{
    return {
        nome,sobrenome,
    fala(assunto){
        return `${this.nome} está falando sobre ${assunto} e tem ${this.altura}M e ${this.peso} KG .`;
    },
    peso,
    altura,
    idade,

    imc(){
        const indice=this.peso/(this.altura*this.altura)
        
        return indice.toFixed(2);
    },
    //Getter
    get nascimento () // get para funcionar como uma variavel
    {
      const ano = new Date()
      return ano.getFullYear() - this.idade
    },
    //Getter
    get nomeCompleto()
    {
        return `${this.nome} ${this.sobrenome}`;
    },
    //Setter
    set nomeCompleto(valor)
    {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }   
    }
    }
   


const pessoa2=criaPessoa('Joao','Pedro',1.73,65,22);
const pessoa3 = criaPessoa('Gabriel','Campos',1.22,34,4);
console.log(pessoa2);
console.log(pessoa2.imc());
console.log(pessoa2.nascimento);

console.log(pessoa3);
console.log(pessoa3.imc());
console.log(pessoa3.nascimento);
console.log(pessoa3.nomeCompleto)
pessoa3.nomeCompleto = 'Yago Augusto';
console.log(pessoa3.nomeCompleto);
//-------------//--------//-------------//------
