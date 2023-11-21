// Создайте текстовый инпут (<input>)
const input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);

// Создайте кнопку “log input“
const button = document.createElement('button');
button.textContent = 'log input';
document.body.appendChild(button);

// Добавьте обработчик на кнопку, который по клику выведет на консоль текст введенный в инпуте.
button.addEventListener('click', () => {
  let inputValue = document.querySelector('input').value;
  console.log(inputValue);
});
// Добавьте кнопку “clear input“
const buttonClear = document.createElement('button');
buttonClear.textContent = 'Clear';
document.body.appendChild(buttonClear);
// Добавьте обработчик на кнопку, который по клику очистит поле ввода.
buttonClear.addEventListener('click', () => {
  document.querySelector('input').value = '';
});
// Добавьте кнопку “block input“, нажатие на которую заблокирует input (разблокирует при повторно нажатии)
const buttonBlock = document.createElement('button');
buttonBlock.textContent = 'block';
document.body.appendChild(buttonBlock);

let inputBlock = false;

buttonBlock.addEventListener('click', () => {
  inputBlock = !inputBlock;
  if (inputBlock) {
    input.setAttribute('disabled', 'true');
  } else {
    input.removeAttribute('disabled', false);
  }
});
// Добавьте кнопку “hide input“ которая спрячет input при нажатии (покажет при повторном)
const buttonHide = document.createElement('button');
buttonHide.textContent = 'hide input';
document.body.appendChild(buttonHide);

let inputHidden = false;

buttonHide.addEventListener('click', () => {
  if (!inputHidden) {
    input.style.display = 'none';
    inputHidden = true;
  } else {
    input.style.display = 'inline';
    inputHidden = false;
  }
});

// Добавьте кнопку (random color), которая изменит цвет цвет инпута на 1 из 4 возвожных (черный, красный, зеленый, синий) случайным образом
const buttonRandom = document.querySelector('button');
button.textContent = 'Random';
document.body.appendChild(buttonRandom);

const colors = ['black', 'red', 'green', 'blue'];
buttonRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  input.style.background = randomColor;
});
// Добавьте кнопку “create block“ которая создаст <div >с текстом, введенным в инпут (после чего очистит его)
const buttonCreate = document.createElement('button');
buttonCreate.textContent = 'create button';
document.body.appendChild(buttonCreate);

buttonCreate.addEventListener('click', () => {
  const div = document.createElement('div');
  div.textContent = input.value;
  document.body.appendChild(div);
  input.value = '';
});

// Добавьте кнопку “remove last block“ которая удалит последний созданный блок

const buttonDelete = document.createElement('button');
buttonDelete.textContent = 'delet div';
document.body.appendChild(buttonDelete);

buttonDelete.addEventListener('click', () => {
  const div = document.querySelectorAll('div');
  const lastBlock = div[div.length - 1];
  lastBlock.remove();
  console.log(lastBlock);
});

// Добавьте еще один инпут который принимает на вход только числа

const inputNumber = document.createElement('input');
inputNumber.setAttribute('type', 'number');
document.body.appendChild(inputNumber);

// Добавьте кнопку “remove Nth block“ которая удалит n-й созданный блок, в зависимости от того какое число введенно

const buttonNth = document.createElement('button');
buttonNth.textContent = 'remove Nth block';
document.body.appendChild(buttonNth);

buttonNth.addEventListener('click', () => {
  const div = document.querySelectorAll('div');
  const numberIn = inputNumber.value - 1;
  let removeDiv = div[numberIn];
  removeDiv.remove();
  console.log(removeDiv);
});
