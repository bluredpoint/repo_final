// 1. С помощью оператора if else сделать проверку:
// если число больше 100 – вывод на страницу, если число меньше 100 - вывод числа в консоль.

let checkButton = document.querySelector('.btn');
let checkInput = document.querySelector('.inpt');

checkButton.onclick = function () {
    let a = checkInput.value

    if (a>100) {
        document.getElementById('one').innerHTML += `<li>${a}</li>`
    } else {
        if (a==100) {
            alert("Все сломалось жесть")
        } else {
            console.log(a)
        }
    }
};