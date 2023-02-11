let botao = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

botao.addEventListener('click', function () {
  let inputValue = document.querySelector('#texto-tarefa').value;
  let itemList = document.createElement('li');
  itemList.className = 'item-list';

  itemList.innerText = inputValue;

  list.appendChild(itemList);

  let input = document.querySelector('#texto-tarefa');
  input.value = '';
});

function backgroundLine(event) {
  let classSelected = document.getElementsByClassName('selected')[0];
  console.log(classSelected);
  if (classSelected) {
    classSelected.classList.remove('selected');
  }
  event.target.classList.toggle('selected');
}
list.addEventListener('click', backgroundLine);

function classLineColor(event) {
  event.target.classList.toggle('completed');
}

list.addEventListener('dblclick', classLineColor);

let botaoApaga = document.querySelector('#apaga-tudo');

botaoApaga.addEventListener('click', function () {
  let line = document.getElementsByTagName('li');

  for (let index = 0; index < line.length; index += 0) {
    list.removeChild(line[index]);
  }
});

let botaoFinalizados = document.querySelector('#remover-finalizados');

botaoFinalizados.addEventListener('click', function () {
  let lineCompleted = document.getElementsByClassName('completed');

  for (let index = 0; index < lineCompleted.length; index += 0) {
    list.removeChild(lineCompleted[index]);
  }
});

let botaoSelectRemove = document.querySelector('#remover-selecionado');

function selectItens(event) {
  event.target.classList.toggle('selecionados');
}

list.addEventListener('click', selectItens);

function removeItens() {
  let lineSelect = document.getElementsByClassName('selecionados');

  for (let i = 0; i < lineSelect.length; i += 0) {
    list.removeChild(lineSelect[i]);
  }
}

botaoSelectRemove.addEventListener('click', removeItens);

// REQUISITO 12 - SALVAR LISTA

let botaoSalva = document.querySelector('#salvar-tarefas');

botaoSalva.addEventListener('click', function () {
  localStorage.setItem('sList', list.innerHTML);
});

function listaSalva() {
  let listS = localStorage.getItem('sList');

  list.innerHTML = listS;
}

window.onload = listaSalva();

//REQUISITO 13
// MOVER PARA CIMA
let botaoMoveUp = document.querySelector('#mover-cima');

function selectItemUp(event) {
  event.target.classList.toggle('paraCima');
}

list.addEventListener('click', selectItemUp);

function moveUp() {
  let itemUp = document.querySelector('.paraCima');
  let itemAnterior = itemUp.previousElementSibling;

  list.insertBefore(itemAnterior, itemUp.nextElementSibling);
}

botaoMoveUp.addEventListener('click', moveUp);

//MOVER PARA BAIXO
let botaoMoveDown = document.querySelector('#mover-baixo');

function selectItemDown(event) {
  event.target.classList.toggle('paraBaixo');
}
list.addEventListener('click', selectItemDown);

function moveDown() {
  let itemDown = document.querySelector('.paraBaixo');
  let proximoItem = itemDown.nextElementSibling;

  list.insertBefore(proximoItem, itemDown.previousElementSibling);
}
botaoMoveDown.addEventListener('click', moveDown);
