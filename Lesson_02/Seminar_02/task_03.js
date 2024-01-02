/*
Задание 3:
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить,
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:

```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```

Необходимо обрабатывать событие проверки числа пользователем, проверяющая
функция должна использовать try и catch для проверки вводимого значения.
*/


const inputElem = document.querySelector(".number-input")
const buttonElem = document.querySelector(".check-button")
const messageElem = document.querySelector(".message")



buttonElem.addEventListener('click', ()=>{
    const number = Number(inputElem.value)
    try {
        if (!Number.isFinite(number)) {
            throw new Error("NaN");
        }
        messageElem.textContent = "Number";
    } catch (error) {
        messageElem.textContent = "Error " + error.message;
        console.error(error.message)
    }
})