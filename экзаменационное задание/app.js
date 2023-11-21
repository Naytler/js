const container = document.querySelector('.container');

// button input footer
const addItemBtn = document.querySelector('.add__btn');
const newItemInput = document.querySelector('.add__input');
const secondSection = document.querySelector('.second__sections');
const footer = document.querySelector('.footer');

addItemBtn.addEventListener('click', () => {
  const textFromInp = newItemInput.value;
  if (textFromInp !== '') {
    //cоздаем див
    const addDiv = document.createElement('div');
    addDiv.classList.add('add__div');
    // создаем параграф
    const paragraph = document.createElement('p');
    paragraph.textContent = textFromInp;
    // создаем див
    const nestedDiv = document.createElement('div');
    nestedDiv.classList.add('add__div__js');
    // создаем кнопку
    const button = document.createElement('button');

    // создаем картинку
    const buttonImg = document.createElement('img');
    buttonImg.style.height = '30px';
    buttonImg.src = 'pen.svg';
    buttonImg.alt = 'pen';

    // создаем инпут
    const checkbox = document.createElement('input');
    checkbox.id = 'check';
    checkbox.type = 'checkbox';

    //создаем lable
    const label = document.createElement('label');
    label.setAttribute('for', 'check');

    //создаем кнопку
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');

    //картинку в бbutton
    const deleteImg = document.createElement('img');
    deleteImg.classList.add('delete__img');
    deleteImg.src = 'trashcan_106521.svg';
    deleteImg.alt = 'carbage';

    //вставляем див между
    container.insertBefore(addDiv, footer);
    nestedDiv.appendChild(button);
    button.appendChild(buttonImg);

    nestedDiv.appendChild(checkbox);

    nestedDiv.appendChild(label);

    nestedDiv.appendChild(deleteButton);

    addDiv.appendChild(paragraph);
    addDiv.appendChild(nestedDiv);

    deleteButton.appendChild(deleteImg);

    newItemInput.value = '';
    newItemInput.focus();
  }
});
