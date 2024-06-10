// 1 Создайте сет и добавьте в него элементы 'e' 'r' 'i' 'k' 't' 'h' 'e' 'b' 'e' 's' 't' через add и вывод в консоль
// 2 Создать кнопку и поле для ввода и написать функцию которая будет добавлять в этот набор, которые пользователи будут вводить в поля ввода, инпут
// 3 Создать кнопку и функцию, которая будет делать проверку, если введенный пользователем элемент есть, то выводим под кнопку запись true, если нет - false
// 4 Создать функцию, при нажатии на кнопку она перебирает массив с помощью for of и возвращает нам новый массив, куда входят все элементы больше 5 (массив произвольный)

let checkInput = document.querySelector(".inpt");
let addButton = document.querySelector(".btnAdd");
let checkButton = document.querySelector(".btnCheck");
let enumButton = document.querySelector(".btnEnum");
let checkLabel = document.querySelector(".labl");

const a = new Set();

a.add('e');
a.add('r');
a.add('i');
a.add('k');
a.add('t');
a.add('h');
a.add('e');
a.add('b');
a.add('e');
a.add('s');
a.add('t');

console.log(a);

addButton.onclick = function () {
    let b = a.size
    a.add(checkInput.value);
    if (a.size===b){
    console.log("Сет не претерпел изменений", a);
    }
    else{
    console.log("Сет успешно обновлен", a);
    }
};

checkButton.onclick = function () {
    document.getElementById('labl').innerHTML += `<li>${a.has(checkInput.value)}</li>`
};


//   enumButton.onclick = function () {
//     const array = Array.from(a);
//     const m = [];
//     for (i of array) {
//         if (i>5){
//             m.push = i
//         }
//     }
//     console.log(m);
//   };
  