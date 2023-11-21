const img = document.querySelector('.card__img');
const next = document.querySelector('.next');
const before = document.querySelector('.before');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const name = document.querySelector('.name_pocemon');
let counter = 100;

async function fetchHandler(counter) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const data = await response.json();
    img.src = await data.sprites.back_default;
    name.textContent = data.name;
  } catch (error) {
    console.log(error);
  }
}

before.addEventListener('click', () => {
  counter--;
  fetchHandler(counter);
});

next.addEventListener('click', () => {
  counter++;
  fetchHandler(counter);
});

search.addEventListener('click', () => {
  inputVal = input.value;
  fetchHandler(inputVal);
});
