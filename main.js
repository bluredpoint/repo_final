// 1. Написать программу, которая будет выводить в консоль сообщение ДА, если сумма
// переменной а + б будет больше 15, и выводить сообщение НЕТ,
// если сумма этих чисел будет меньше или равно 15

// 2. Написать программу, которая должна выполнить проверку значений 2 переменных и, если они
// равны, то выводить сообщение в консоль о том, что они равны или получать результат true,
// в противном случае false, при этом в обе переменные можно вписать разные типы данных,
// это нужно учесть и задействовать оператор строгого равенства при сравнении

let checkButton = document.querySelector(".btn");
let checkInputA = document.querySelector(".inpt1");
let checkInputB = document.querySelector(".inpt2");

checkButton.onclick = function () {
  let a = checkInputA.value;
  let b = checkInputB.value;
  c = Number(a) + Number(b);

  console.log(c);
  if (c > 15) {
    console.log("ДА");
  } else {
    console.log("НЕТ");
  }

  if (a == b) {
    console.log("кстати, эти переменные равны");
  } else {
    console.log("эти переменные не равны");
  }
};
