/*O Console no navegador e algumas funções dele*/

alert(
  "Este é um alerta,uma mensagem que aparece de imediato quando abre a pagina "
);

const confirma = confirm(
  "Esta mensagem surge para alguma confirmação,seja de exclusão ou alguma mudança feita pelo usuario,diferente do alert esse tem a opção de cancelar e retorna um valor booleano,True ou false,Logo pode ser usado para ativar alguma função do site"
);

nome = prompt(
  "Esta mensagem surge com uma barra de input que serve como entrada de dados,e retorna o dado recolhido"
);

if (confirma == true) {
  alert("A sua exclusão foi bem sucedida");
}

if (nome == "yago") {
  alert("é vc yago ?");
}
