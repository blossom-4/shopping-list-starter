let shoppingListItems = ["milk", "eggs", "bread"];

let listElement = document.getElementById("shopping-list-items");



const addItem = () => {
    let input = document.getElementById("new-item-text");
    let item = input.value;
    shoppingListItems = [...shoppingListItems, item];
    input.value = "";
    updateItems();
};

const updateItems = () => {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

const clearList = () => {
    shoppingListItems = [];
    updateItems();
};

updateItems();