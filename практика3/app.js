const img = document.querySelector('.card__img');
const next = document.querySelector('.next');
const before = document.querySelector('.before');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const name = document.querySelector('.name_pocemon');
let counter = Math.floor(Math.random() * 800) + 1;

(async function load() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const data = await response.json();
    img.src = await data.sprites.back_default;
    name.textContent = data.name;
  } catch (error) {
    console.log(error);
  }
})();

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png

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
  if (counter > 0) {
    counter--;
    fetchHandler(counter);
  }
});

next.addEventListener('click', () => {
  if (counter < 1017) {
    counter++;
    fetchHandler(counter);
  } else {
    counter = 1;
  }
});

search.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') {
    return;
  }
  inputVal = text;
  fetchHandler(inputVal);
});
