//Seleciona os elementos HTML e armazena-los em variáveis
const inputTarefa = document.querySelector(".nova-tarefa");
const botaoTarefa = document.querySelector("#adicionar");
const listaTarefas = document.querySelector(".tarefas");

//Criar um li para a ul no HTML 
function CriaLi() {
    const li = document.createElement('li');
    return li;
}

//Função para limpar o input
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

//Função para criar um botão e excluir uma tarefa
function criaBotaoApagar(li) {
    li.innerText += ' ';

    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'Apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');

    li.appendChild(botaoApagar);
}

//Função para Salvar a tarefa
function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaTexto = [];

    for (tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTexto.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTexto);
    localStorage.setItem('tarefas', tarefasJSON);
}

//Função recupera Tarefas Salvas
function recuperaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    if (tarefas) {
        const tarefasGuardadas = JSON.parse(tarefas);
        for (texto of tarefasGuardadas) {
            criaTarefa(texto);
        }
    }
}

//Função para criar a tarefa na lista de Tarefas
function criaTarefa(textoInput) {
    const li = CriaLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

//Capturar apertar teclas (Enter)
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

//Função que ocorre ao clicar no botaoTarefa
botaoTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//Função que ocorre ao clicar em apagar uma tarefa
document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('Apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

recuperaTarefasSalvas();
