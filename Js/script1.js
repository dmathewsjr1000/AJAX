/* 
HTTP Request Methods 
CRUD - Create Read Update Delete
Create - POST
Read - GET
Update - PUT/PATCH
Delete - DELETE 
*/

// AJAX - Asynchronous JavaScript and XML
// AJAJ - Asynchronous JavaScript and JSON

// Syntax
// fetch(URL) - by default this will run a GET request

// JS Object
// const person = {
//     name: 'Teo',
//     age: 33
// }

// JSON
// {
//     "name": 'Teo'
// }

// console.log(person.name)

// fetch API always returns a Promise
// Response.json() : https://developer.mozilla.org/docs/Web/API/Request/json
// const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
//                     // first .then() cb param represents our Response object
//                     .then(response => response.json())
//                     .then(todo => console.log(todo))

// console.log(response)

// ASYNC/AWAIT

async function getTodo() {
    try {
        const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const jsonData = await response.json();
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}