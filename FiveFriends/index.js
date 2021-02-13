/*
    Functions declared with the async keyword allow us to write asynchronous code in a synchronous manner.
    And together with the Fetch API, we can make asynchronous API requests.

    In this challenge, you're building a new component for your space, a brand new social media application that allows you to find friends.
    This component space user's top five friends. Given some JSON data returned from the random user API, you should dynamically generate image
    thumbnails for the top five friends.

    You should use the Fetch API to call the random user API. You can use the URL, https//randomuser.me/api/?result=5.
    To get data for five users. Your solution should also use async/await.
*/

//Solution 1
const GET_USER_URL = "https://randomuser.me/api/?results=5";

getUserList()

async function getUserList() {
    const users = await getUsers(GET_USER_URL)
    displayUsers(users);
}

function displayUsers(users) {
    const userList = document.querySelector("#userList");
    users.forEach(user => {
        let image = document.createElement("img");
        image.src = user.picture.medium;
        userList.appendChild(image);
    })
}


async function getUsers(url) {
    let data = await fetch(url);
    let usersData = await data.json();
    return usersData.results
}

//Solution 2
// async function getUsers() {
//     let people = await fetch("https://randomuser.me/api/?results=5");
//     let data = await people.json();
//     const userList = document.querySelector("#userList");
//     data.results.forEach(person => {
//         let image = document.createElement("img");
//         image.src = person.picture.medium;
//         userList.appendChild(image);
//     })
// }

// getUsers()