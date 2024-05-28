// 1 Напишите функцию именную, которая при нажатии кнопки выводит в блок див
// на странице значения из переменной A.

let buttonGetVar = document.querySelector('.btn1');
let checkInput = document.querySelector('.inpt1');

function one() {
    let a = checkInput.value;
    document.getElementById('one').innerHTML += `<li>${a}</li>`
};

buttonGetVar.onclick = one;


// 2 Напишите простой калькулятор из 4 выражений + - * / для этого сделайте 4 кнопки и поле ввода,
// затем при вводе каждого числа и после при нажатии на кнопку должна выполнится одна из функций,
// в зависимости от того какую кнопку мы нажали

let num1 = document.querySelector('.inpt2');
let num2 = document.querySelector('.inpt3');

let buttonPlus = document.querySelector('.btn_plus');
let buttonMinus = document.querySelector('.btn_minus');
let buttonUmn = document.querySelector('.btn_umn');
let buttonDel = document.querySelector('.btn_del');

function slozhenie() {
    let x = +num1.value;
    let y = +num2.value;
    let i = x + y;
    document.getElementById('two').innerHTML += `<li>${i}</li>`
};

function vichetanie() {
    let x = +num1.value;
    let y = +num2.value;
    let i = x - y;
    document.getElementById('two').innerHTML += `<li>${i}</li>`
};

function umnozhenie() {
    let x = +num1.value;
    let y = +num2.value;
    let i = x * y;
    document.getElementById('two').innerHTML += `<li>${i}</li>`
};

function delenie() {
    let x = +num1.value;
    let y = +num2.value;
    let i = x / y;
    document.getElementById('two').innerHTML += `<li>${i}</li>`
};

buttonPlus.onclick = slozhenie;
buttonMinus.onclick = vichetanie;
buttonUmn.onclick = umnozhenie;
buttonDel.onclick = delenie;
