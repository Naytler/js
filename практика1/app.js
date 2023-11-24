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

// 10, содержит ли строка одинаковое количество символов «x» и «o»
function XO(str) {
  const lowerCase = str.toLowerCase();
  const countX = (lowerCase.match(/x/g) || []).length;
  const countO = (lowerCase.match(/o/g) || []).length;

  return countX === countO;
}
console.log(XO('ooxXx'));

// 11преобразовать строку так, чтобы каждое слово в ней начиналось с заглавной буквы

function jadenCase(str) {
  const words = str.split(' ');
  const CaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return CaseWords.join(' ');
}

console.log(jadenCase('How can mirrors be real if our eyes aren"t real'));

// 12 учитывая строку слов, верните длину самого короткого слова

function findShort(s) {
  let str = s.split(' ');
  let length = Infinity;
  for (let i = 0; i < str.length; i++) {
    if (length > str[i].length) {
      length = str[i].length;
    }
  }
  return length;
}
console.log(findShort('учитывая строку слов верните длину самого короткого слова'));

// 13 accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

function accum(s) {
  let arr = s.split('');
  let arr2 = arr.map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index));
  return arr2.join('-');
}

console.log(accum('hey'));

// 14 ДНК состоит
function DNAStrand(dna) {
  let complement = '';

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      complement += 'T';
    } else if (dna[i] === 'T') {
      complement += 'A';
    } else if (dna[i] === 'C') {
      complement += 'G';
    } else if (dna[i] === 'G') {
      complement += 'C';
    }
  }

  return complement;
}
console.log(DNAStrand('ATTGC'));

// 15 сумма двух меньших чисел
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  const sum = numbers[0] + numbers[1];

  return sum;
}

// 16сумма чисел
function getSum(a, b) {
  if (a === b) {
    return a;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// 17 окончание совпадает с первым арг
function solution(str, ending) {
  return str.endsWith(ending);
}

//18 скрыть строку больше 4 символов
function maskify(str) {
  if (str.length <= 4) {
    return str;
  }

  const maskedString = '#'.repeat(str.length - 4) + str.slice(-4);

  return maskedString;
}

// 19 если в имени 4 буквы то друг
function friend(names) {
  return names.filter((name) => name.length === 4);
}

//20  в двоичном виде.
function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

// 21; растущее население
function nbYear(p0, percent, aug, p) {
  for (var count = 0; p0 < p; count++) {
    p0 += ((p0 * percent) / 100 + aug) | 0;
  }
  return count;
}

//22 строки убрать повторяющиеся символы и отсортировать
function longest(s1, s2) {
  return Array.from(new Set((s1 + s2).split('')))
    .sort()
    .join('');
}

//23 pin cod
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

//24sum ot add number
function add(n) {
  return n * n * n;
}

//25 следующий идеальны квадрат
function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (!Number.isInteger(sqrt)) return -1;
  return (sqrt + 1) ** 2;
}

//26 квалификация участника
function openOrSenior(data) {
  let result = [];
  data.forEach(function (member) {
    if (member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  });
  return result;
}

// 27 printer errors
function printerError(s) {
  return `${[...s.matchAll(/[n-z]/g)].length}/${s.length}`;
}
// 28Единицы и нули
function one() {
  arr.reverse();
  return arr.reduce((acc, el, index) => acc + el * 2 ** index, 0);
}

// 29 number of people bus
var number = function (busStops) {
  return busStops.reduce((acc, [add, remove]) => acc + add - remove, 0);
};

//30 19?
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
