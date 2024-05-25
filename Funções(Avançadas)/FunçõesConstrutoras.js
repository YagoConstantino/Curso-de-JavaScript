//--------Funções Construtoras-------//
// Uso de (new) // e letra maiuscula (Pessoa)

function Pessoa(nome,sobrenome)
{
    //diferente da factory,não preciso criar um objeto e retorna-lo, a palavra new tem essa função,apenas declaro a relação entre os parametros e variaveis.

    this.nome = nome;
    this.sobrenome = sobrenome;

    //Sempre necessário o uso de this.
    this.metodo = () =>
        {
            console.log(this.nome+' '+'Meu metodo');
        }
    //Atributos privados,que so existem dentro do objeto
    const ID = 123456987;
    
    //Metodos privados
    const metodoInterno=()=>{console.log('Não sai daqui')};
}

const yago = new Pessoa('Yago','Constantino');
console.log(yago,yago.nome,yago.sobrenome);

const joao = new Pessoa('Joao','Constantino');
console.log(joao,joao.nome,joao.sobrenome);

yago.metodo()
//Não funciona:
//yago.metodoInterno()



//Exercicio Calculadora com função construtora

function CriaCalculadora()
{
        this.display=document.querySelector(".display");
        this.btnClear=document.querySelector('.btn-clear');


        this.clearDisplay=()=>
        {
            this.display.value="";
        };

        this.inicia=()=>{
            this.clickBotoes();
            this.pressionaEnter();
        };

       this.pressionaEnter=()=>
        {
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode===13)
                    {
                        this.equal();
                    }
                if(e.keyCode===46)
                    {
                        this.deleteOne();
                    }
            });
        };

        this.deleteOne=()=>
        {
            this.display.value = this.display.value.slice(0,-1);
        };

        this.btnParaDisplay=(valor)=>
        {
            this.display.value+=valor;
        };

        this.equal=()=>
        {
            let conta = this.display.value;
            try
            {
                conta = eval(conta);

                if(!conta)
                    {
                        alert('Conta Invalida');
                        return;
                    }
                this.display.value = String(conta);        
            }catch(e){
                alert("Conta Inválida");
            }

        };

        this.clickBotoes=()=>
        {
            document.addEventListener('click',function(e){
                const el = e.target;
                if(el.classList.contains('btn-num'))
                    {
                        this.btnParaDisplay(el.innerText)
                    }

                if(el.classList.contains('btn-clear'))
                    {
                        this.clearDisplay();
                    }
                    
                if(el.classList.contains('btn-del'))
                    {
                        this.deleteOne();
                    }

                if(el.classList.contains('btn-eq'))
                    {
                        this.equal();
                    }    

            }.bind(this));
        };
    };


const calculadora = new criaCalculadora();
calculadora.inicia();