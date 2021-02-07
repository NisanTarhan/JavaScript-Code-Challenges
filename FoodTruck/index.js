/*
    Sets are a primitive JavaScript type that allow us to create a unique set of items.
    We can use sets when we have a dataset that contains repeating values, and we want to remove duplicate instances.

    You're in charge of building a website for a food truck festival.
    Each vendor has a menu. And some vendors might be serving the same item.
    Given an array of food truck menus, where each menu is an array.
    Return one master menu which contains all food items that will be served at
    the festival without duplicates.

    VENDOR 1: ["pizza", "pasta"]
    VENDOR 2: ["pizza", "calzones"]
    VENDOR 3: ["lobster"]
    VENDOR 4: ["calzones"]

    We'll take this unique menu and use DOM manipulation to create an unordered list containing these unique menu items.
    You should have an unordered list with an ID of "combined-menu" in your HTML that you can use to append list node children to.
*/

// Solution 1
const vendor1 = ["pizza", "pasta"];
const vendor2 = ["pizza", "calzones"];
const vendor3 = ["lobster"];
const vendor4 = ["calzones"];

const menu = getMenu(vendor1, vendor2, vendor3, vendor4);
renderMenu(menu);

function getMenu() {
    const allItem = [...arguments].flat();
    return new Set([...allItem])
}

function renderMenu(menu) {
    const menuList = document.querySelector("#combined-menu");
    menu.forEach(food => {
        const foodNode = document.createElement("li");
        foodNode.textContent = food;
        menuList.appendChild(foodNode);
    })
}


// Solution 2

function foodTruckFestival(menus) {
    let flatMenus = menus.flat();

    let combineMenu = new Set();
    flatMenus.forEach(item => combineMenu.add(item));

    const menuNode = document.querySelector("#combined-menu");
    for (let item of combineMenu) {
        let foodNode = document.createElement('li');
        foodNode.innerText = item;
        menuNode.appendChild(foodNode);
    }
}

foodTruckFestival([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);

