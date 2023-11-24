// 1) убрать гласные буквы
function getCount(str) {
  const vowels = /[aeiou]/gi;
  const matche = str.match(vowels);

  if (matche) {
    return matche.length;
  } else {
    return 0;
  }
}
const inputStr = 'This is a sample string';
console.log(getCount(inputStr));

// 2) убрать гласные буквы

function disemvowel(str) {
  const strDel = str.replace(/[aeiouAEIOU]/g, '');
  return strDel;
}
// 3 возвести в квадрат
function squareDigits(num) {
  const numArr = num.toString().split('');
  const square = numArr.map((e) => e ** 2).join('');

  return parseInt(square);
}

console.log(squareDigits(456));
// 4 макимальное и минимальное
function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  let max = -Infinity;
  let min = Infinity;

  nums.forEach((num) => {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });

  return `${max} ${min}`;
}
console.log(highAndLow('1 -9 42 3 4 5'));

// 5 есть ли квадратный делитель

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(26));

// 6 вернуть средние значения
function getMiddle(s) {
  const length = s.length;
  const middleIndex = length / 2;
  if (middleIndex % 1 === 0) {
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else {
    const floor = Math.floor(middleIndex);
    return s.substring(floor, floor + 1);
  }
}
console.log(getMiddle('helloo'));
// 7 развернуть число
function descendingOrder(n) {
  let sorterd = +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return sorterd;
}

console.log(descendingOrder(123));
// 8 отфильтровать цифры от букв в массиве

function filter_list(l) {
  console.log(l.filter((item) => typeof item === 'number' && item >= 0));
}

filter_list([1, 2, 'a', 'b']);

// 9
function isIsogram(str) {
  const lower = str.toLowerCase();
  const charMap = {};

  for (let char of lower) {
    if (charMap[char]) {
      return false;
    }
    charMap[char] = true;
  }
  return true;
}

console.log(isIsogram('Ads'));

// 10
