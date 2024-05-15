// 1. Вывод в консоль номера месяца рождения. Изучите чем отличается вывод числа и строки.
// вывод строки
console.log('12');
// вывод числа
console.log(12);

// 2. Вывод в консоль строки: “ 'Добро '+'пожаловать '+' на курс' '+' ' Ваше имя' ”
// неоднозначное задание. если нужно вывести указанную строку с экранированием конкатенации
// то подойдет строковая переменная с обратными кавычками
let junkOriginString = `'Добро '+'пожаловать '+' на курс' '+' ' Ваше имя'`;
console.log(junkOriginString);
// если же требуется из отдельных переменных составить фразу, то
let word1 = "Добро ";
let word2 = "пожаловать ";
let word3 = " на курс";
let word4 = " Алекс";
console.log(word1+word2+word3+word4);
// пробелы в строковых переменных выставлены в соответствии с заданием, наблюдается их избыточность
// я бы убрал один пробел и добавил одну запятую

// 3. Вывод дня, месяца и года с помощью алерта
// let date = new Date();
// let formattedDate = date.toDateString();
// alert(formattedDate);

// 4. Создайте на странице div с id=one.
// С помощью document.getElementById запишите в данный элемент текст 'Hello World'.
document.getElementById('one').innerHTML = "Этот восхитительный div создан с помощью прекрасного JS";

// 5. Вывести все типы данных в консоль
console.log(typeof 1);
console.log(typeof "cat");
console.log(typeof 100n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);