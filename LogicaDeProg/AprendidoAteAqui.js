/*function meuEscopo() {
    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);
    const resultado = document.querySelector(".texto");

    if (!isNaN(peso) && !isNaN(altura)) {
        const imc = peso / (altura * altura);

        let faixa;
        if (imc < 18.5) {
            faixa = "Abaixo do Peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            faixa = "Peso normal";
        } else if (imc >= 24.9 && imc < 29.9) {
            faixa = "Sobrepeso";
        } else if (imc >= 29.9 && imc < 34.9) {
            faixa = "Obesidade grau 1";
        } else if (imc >= 34.9 && imc <= 40) {
            faixa = "Obesidade grau 2";
        } else if (imc > 40) {
            faixa = "Obesidade grau 3";
        }

        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. ${faixa}.</p>`;
    } else {
        resultado.innerHTML = "<p>Por favor, insira valores válidos para peso e altura.</p>";
    }
}
document.querySelector("#botao").addEventListener("click",meuEscopo);*/

const form = document.querySelector("#form");

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const input_peso = e.target.querySelector("#peso");
    const input_altura = e.target.querySelector("#altura");

    const peso = parseFloat(input_peso.value);
    const altura= parseFloat(input_altura.value);

    if(!peso)
    {
        setResultado("Peso Inválido",false);
        return ;
    }
    if (!altura)
    {
        setResultado("Altura Inválida",false);
        return ;
    }

    const imc = getImc(peso,altura);
    
    const faixa = faixaImc(imc);

    const mensagem = `Seu IMC é ${imc} e esta na faixa ${faixa}`;

   setResultado(mensagem,true);
});

function criaP()
{
    const p = document.createElement('p');
    return p ;
}

function setResultado(msg,isValid)
{
    const resultado = document.querySelector(".texto");
    resultado.innerHTML = '';

    const p = criaP();
    if(isValid)
    {
        p.classList.add('paragrafo-resultado');
    }
    else
    {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}

function getImc(peso,altura)
{
    const imc = peso/altura**2;
    return imc.toFixed(2);
}

function faixaImc(imc)
{
    let faixa;
        if (imc < 18.5) {
            faixa = "Abaixo do Peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            faixa = "Peso normal";
        } else if (imc >= 24.9 && imc < 29.9) {
            faixa = "Sobrepeso";
        } else if (imc >= 29.9 && imc < 34.9) {
            faixa = "Obesidade grau 1";
        } else if (imc >= 34.9 && imc <= 40) {
            faixa = "Obesidade grau 2";
        } else if (imc > 40) {
            faixa = "Obesidade grau 3";
        }
        return faixa;
}

document.querySelector("#botao").addEventListener("click",meuEscopo);