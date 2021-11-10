//Поле в котором все выводится
let input = document.querySelector('.input');
//Сохраненная часть выражения для возведения в степень
let power = "";
//Вставить символ
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//Очистить все поле
function clean() {
    input.textContent = "0";
    power = "";
}
//Удалить символ
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
//Посчитать выражение
function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}
//Вычислить проценты
function percent() {
    input.textContent = eval(input.textContent) / 100;
}