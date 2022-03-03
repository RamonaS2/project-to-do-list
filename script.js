let botao = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

botao.addEventListener('click', function () {
  let inputValue = document.querySelector('#texto-tarefa').value;
  let itemList = document.createElement('li');

  itemList.innerText = inputValue;

  list.appendChild(itemList);

  let input = document.querySelector('#texto-tarefa');
  input.value = '';
});

function backgroundLine(event) {
  event.target.style.backgroundColor = 'gray';
}
list.addEventListener('click', backgroundLine);


function classLineColor(event) {
  event.target.classList.toggle('completed');
}

list.addEventListener('dblclick', classLineColor);

