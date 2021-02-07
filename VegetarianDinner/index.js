/*
 In this challenge you're planning the menu for an Italian dinner.
 Some of your guests are vegetarian and you need to create a list
 of vegetarian menu items for them. Given an array of Italian dishes,
 create an unordered list of all vegetarian dinner options.
 Each menu item is an object containing the dish name and a Boolean
 variable that indicates whether the dish is vegetarian. You should
 dynamically generate the list items in the DOM from the array of
 vegetarian items */

function vegetarianMenu(menu) {
    const menuNode = document.querySelector("#menu");
    const vegetarianOptions = menu.filter(option => option.isVegetarian);
    vegetarianOptions.forEach(option => {
        let dishElement = document.createElement('li');
        dishElement.textContent = option.name;
        menuNode.appendChild(dishElement);
    })
}

const menu = [
    {
        name: "Eggplant Parmesan",
        isVegetarian: true
    },
    {
        name: "Spaghetti & Meatballs",
        isVegetarian: false
    },
    {
        name: "Stuffed shells",
        isVegetarian: true
    }
]

vegetarianMenu(menu);

