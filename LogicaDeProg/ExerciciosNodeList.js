//Node List

const paragrafos = document.querySelector('#paragrafo')

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColor = estilosBody.backgroundColor;

console.log(backgroundColor);

for(let p of ps)
    {
        p.style.backgroundColor = backgroundColor;
        p.style.color = 'white';

    }