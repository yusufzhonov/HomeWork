let name = 'Alex'
let money = 10000;
let account = 7777;

let str = prompt('Как вас зовут?');

if (str === name) {
    let number = prompt('Номер счета?');

    if (number >= account) {
        let cash = prompt('Сколько обналичить?');

        if (money >= cash) {
            money -= cash;
            alert(`Вы сняли ${cash}. На счету осталось ${money}`);
        } else {
            alert('Недостаточно средств');
        }
    } else {
        alert('Счет не найден. Досвидос');
    }
} else {
    alert('Пользователь не найден. Досвидули');
}