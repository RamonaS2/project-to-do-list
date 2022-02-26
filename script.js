let botao = document.querySelector('#criar-tarefa');


botao.addEventListener('click', function(){

   let inputValue = document.querySelector("#texto-tarefa").value;
   let itemList = document.createElement('li');
   
   itemList.innerText = inputValue;

   let list = document.querySelector("#lista-tarefas");
   
   list.appendChild(itemList); 

   let input = document.querySelector("#texto-tarefa");
   input.value = '';
   
} 
)