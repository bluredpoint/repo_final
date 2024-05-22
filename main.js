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
