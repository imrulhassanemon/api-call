

// function loadUsers2(){
    
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => makeJson(data) )
// }

// function makeJson(users){
//     const ul = document.getElementById("user")
//         for(const user of users){
//            console.log(user.name) 
//            const create = document.createElement("li");
//            create.innerText = user.name;
//            ul.appendChild(create)
//         }    
// }




function myfun(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => userData(data))
}


function userData(users)
{const ul = document.getElementById("user")
for(const user of users){
    const create = document.createElement("li");
    create.innerText = user.name;
    ul.appendChild(create)
}}