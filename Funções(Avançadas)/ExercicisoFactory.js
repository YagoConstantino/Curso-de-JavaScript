//Exercicio Calculadora

function criaCalculadora()
{

    return {

        display:document.querySelector(".display"),
        btnClear:document.querySelector('.btn-clear'),


        clearDisplay()
        {
            this.display.value="";
        },

        inicia(){
            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter()
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
        },

        deleteOne()
        {
            this.display.value = this.display.value.slice(0,-1);
        },

        btnParaDisplay(valor)
        {
            this.display.value+=valor;
        },

        equal()
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

        },

        clickBotoes()
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
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();