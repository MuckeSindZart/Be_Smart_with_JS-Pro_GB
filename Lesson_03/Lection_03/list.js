const inputField = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');

let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

const updateShoppingList = () => {
    itemList.innerHTML = '';

    shoppingList.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.append(listItem);
    })

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

addButton.addEventListener('click', () => {
    const newItem = inputField.value.trim();

    if (newItem !== '') {
        shoppingList.push(newItem);
        inputField.value = '';
        updateShoppingList();
    }
})

updateShoppingList();