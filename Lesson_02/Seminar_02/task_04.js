/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
введенное значение должно содержать от 3 до 10 символов.

Создайте HTML-структуру:

```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```

Необходимо обрабатывать событие добавления элемента в список. Функция,
обрабатывающая событие, должна выбрасывать исключение, если длина введенного
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const inputElem = document.querySelector(".user-input");
const buttonElem = document.querySelector(".add-button");
const ulElem = document.querySelector(".item-list");
const messageElem = document.querySelector(".error-message");

buttonElem.addEventListener('click', () => {
    const message = inputElem.value;
    try {
        if (!(message.length >= 3 && message.length <= 10)) {
            throw new Error("неправильное сообщение");
        }
        ulElem.textContent = message;
        console.log("Попытка добавления элемента завершена");
    } catch (error) {
        ulElem.textContent = error.message;
    } finally {
        console.log("Попытка добавления элемента завершена");
    }
})
