// 1 Вывести строку данных от 1 до 50 с помощью цикла

// while
let i = 1;
while (i <= 50) {
  console.log(i);
  i++;
}

// for
for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// 2 Вывести числа от 50 до 25 с помощью цикла

// while
let i = 50;
while (i >= 25) {
  console.log(i);
  i--;
}

// for
for (let i = 50; i >= 25; i--) {
  console.log(i);
}

// 3 Вывести все нечетные числа от 2500 до 3000 с помощью цикла
//while
let i = 2500;
while (i < 3000) {
  // if (i % 2 == 0) {
  //   continue;             <----- почему-то эта часть намертво завешивает браузер
  // }
  console.log(i);
  i++;
}

// for
for (let i = 2500; i < 3000; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}


// 4 Числа от 1 до 100, кратные 7
for (let i = 1; i < 100; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
  continue;
}

// 5 Вывести числа от 1 до 100, которые делятся на 7 без остатка.
// то же, что и задание 4 (кратность и деление без остатка - суть одно и то же)

// 6 Найти сумму четных чисел от 1 до 50.
let b = 0;
for (let i = 1; i < 50; i++) {
  if (i % 2 == 0) {
    b += i
  }
  continue;
}
console.log(b);

// 7 Вывести числа от 1 до n
let n = 12;
for (let i = 1; i <= n; i++) {
  console.log(i);
}