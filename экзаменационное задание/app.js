const container = document.querySelector('.container');
const addItemBtn = document.querySelector('.add__btn');
const newItemInput = document.querySelector('.add__input');
const secondSection = document.querySelector('.second__sections');
const footer = document.querySelector('.footer');
const update = document.querySelector('.update');
const data = document.querySelector('.data');
const today = new Date().toISOString().split('T')[0];
const optionDef = document.querySelector('.default');
const options = document.querySelector('#taskFilter');
let tasks = [];
data.value = today;

addItemBtn.addEventListener('click', addTask);
container.addEventListener('click', doneTask);
container.addEventListener('click', deleteTask);
container.addEventListener('click', writebel);
update.addEventListener('click', removeFromLocalStorage);
data.addEventListener('change', dateCheck);
document.addEventListener('DOMContentLoaded', dateCheck);
options.addEventListener('change', optionsChange);
data.addEventListener('change', function () {
  optionDef.setAttribute('selected', 'selected');
});

function updateLocalStorage(tasksArray) {
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}
function hangleEnter(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    addItemBtn.click();
  }
}
(function () {
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => {
      const addDiv = document.createElement('div');
      addDiv.classList.add('add__div');
      addDiv.id = task.id;

      const paragraph = document.createElement('p');
      paragraph.setAttribute('contenteditable', 'false');
      paragraph.textContent = task.text;
      if (task.completed) {
        paragraph.classList.add('title');
      }

      const nestedDiv = document.createElement('div');
      nestedDiv.classList.add('add__div__js');

      const button = document.createElement('button');
      button.setAttribute('data-action', 'write');

      const buttonImg = document.createElement('img');
      buttonImg.style.height = '30px';
      buttonImg.src = 'pen.svg';
      buttonImg.alt = 'pen';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute('data-action', 'done');
      checkbox.checked = task.completed;

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete');
      deleteButton.setAttribute('data-action', 'delete');

      const deleteImg = document.createElement('img');
      deleteImg.classList.add('delete__img');
      deleteImg.src = 'trashcan_106521.svg';
      deleteImg.alt = 'carbage';

      container.insertBefore(addDiv, footer);
      nestedDiv.appendChild(button);
      button.appendChild(buttonImg);
      nestedDiv.appendChild(checkbox);
      nestedDiv.appendChild(deleteButton);
      addDiv.appendChild(paragraph);
      addDiv.appendChild(nestedDiv);
      deleteButton.appendChild(deleteImg);
    });
  }
})();

function removeFromLocalStorage() {
  localStorage.removeItem('tasks');
  tasks = [];
  updateLocalStorage(tasks);
  location.reload();
}
if (localStorage.getItem('taskHtml')) {
  container.innerHTML = localStorage.getItem('taskHtml');
}
window.addEventListener('keydown', hangleEnter);
function addTask() {
  const textFromInp = newItemInput.value.trim();

  if (textFromInp !== '') {
    const newTask = {
      id: Date.now(),
      text: textFromInp,
      completed: false,
      data: data.value,
    };
    const cssClass = newTask.completed ? 'title' : '';

    tasks.push(newTask);

    const addDiv = document.createElement('div');
    addDiv.classList.toggle('add__div');
    addDiv.id = newTask.id;

    const paragraph = document.createElement('p');
    paragraph.setAttribute('contenteditable', 'false');
    paragraph.textContent = newTask.text;
    if (textFromInp.completed) {
      paragraph.classList.add(cssClass);
    }

    const nestedDiv = document.createElement('div');
    nestedDiv.classList.add('add__div__js');

    const button = document.createElement('button');
    button.setAttribute('data-action', 'write');

    const buttonImg = document.createElement('img');
    buttonImg.style.height = '30px';
    buttonImg.src = 'pen.svg';
    buttonImg.alt = 'pen';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('data-action', 'done');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('data-action', 'delete');

    const deleteImg = document.createElement('img');
    deleteImg.classList.add('delete__img');
    deleteImg.src = 'trashcan_106521.svg';
    deleteImg.alt = 'carbage';

    container.insertBefore(addDiv, footer);
    nestedDiv.appendChild(button);
    button.appendChild(buttonImg);
    nestedDiv.appendChild(checkbox);
    nestedDiv.appendChild(deleteButton);
    addDiv.appendChild(paragraph);
    addDiv.appendChild(nestedDiv);
    deleteButton.appendChild(deleteImg);

    newItemInput.value = '';
    newItemInput.focus();

    safeToLocalStorage();
  }
}
function doneTask(e) {
  if (e.target.dataset.action === 'done') {
    const parentDiv = e.target.closest('.add__div');
    const id = parentDiv.id;
    const taskFind = tasks.find((e) => {
      if (e.id == id) {
        return true;
      }
    });

    taskFind.completed = !taskFind.completed;
    const paragraph = parentDiv.querySelector('p');
    paragraph.classList.toggle('title');
    safeToLocalStorage();
  }
}
function deleteTask(e) {
  if (e.target.dataset.action === 'delete') {
    const parentDiv = e.target.closest('.add__div');

    const id = parentDiv.id;

    const index = tasks.findIndex((task) => {
      return task.id == id;
    });

    tasks.splice(index, 1);
    parentDiv.remove();
    safeToLocalStorage();
  }
}
function writebel(e) {
  if (e.target.dataset.action === 'write') {
    const parentDiv = e.target.closest('.add__div');
    const id = parentDiv.id;
    const paragraph = parentDiv.querySelector('p');
    const isEditable = paragraph.getAttribute('contenteditable') === 'true';
    let taskFind = tasks.find((e) => {
      if (e.id == id) {
        return true;
      }
    });
    const index = tasks.findIndex((task) => {
      return task.id == id;
    });
    if (isEditable) {
      paragraph.setAttribute('contenteditable', 'false');
      taskFind.text = paragraph.textContent;
      if (taskFind.text === '') {
        parentDiv.remove();
        tasks.splice(index, 1);
      }
    } else {
      paragraph.setAttribute('contenteditable', 'true');
      paragraph.focus();
    }
    safeToLocalStorage();
  }
}
function safeToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function optionsChange() {
  const selectedValue = options.value;
  if (selectedValue === 'completed') {
    allTaskcomplete();
    changeTaskComplete();
    optionDef.removeAttribute('selected');
  }
  if (selectedValue === 'uncompleted') {
    allTaskcomplete();
    changeTaskUncomplete();
    optionDef.removeAttribute('selected');
  }
  if (selectedValue === 'all') {
    allTaskcomplete();
  }
}
function changeTaskComplete() {
  dateCheck();
  let p = document.querySelectorAll('p');
  p.forEach((e) => {
    if (e.classList == '') {
      const parentDiv = e.closest('.add__div');
      parentDiv.classList.add('none');
    }
  });
}
function changeTaskUncomplete() {
  let p = document.querySelectorAll('p');
  dateCheck();
  p.forEach((e) => {
    if (e.classList == 'title') {
      const parentDiv = e.closest('.add__div');
      parentDiv.classList.add('none');
    }
  });
}
function allTaskcomplete() {
  let p = document.querySelectorAll('p');
  p.forEach((e) => {
    if (true) {
      const parentDiv = e.closest('.add__div');
      parentDiv.classList.remove('none');
    }
  });
  dateCheck();
}
function dateCheck() {
  const getData = JSON.parse(localStorage.getItem('tasks'));
  if (getData && getData.length > 0) {
    getData.forEach((task) => {
      const taskDate = task.data;
      const targetElementId = task.id;
      const targetElement = document.getElementById(targetElementId);
      if (taskDate !== data.value) {
        targetElement.classList.add('none');
      } else if (taskDate == data.value) {
        targetElement.classList.remove('none');
      }
    });
  }
}

// container.removeEventListener('click', doneTask);
// container.removeEventListener('click', deleteTask);
// container.removeEventListener('click', writebel);
// update.removeEventListener('click', removeFromLocalStorage);
// data.removeEventListener('change', dateCheck);
// document.removeEventListener('DOMContentLoaded', dateCheck);
// options.removeEventListener('change', optionsChange);
