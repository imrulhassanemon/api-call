function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => userPost(data))
}

function userPost(users){
    const postContainer = document.getElementById("post-container");
    for(const user of users){
        console.log(user)
        const create = document.createElement("div");
        create.classList.add("post")
        create.innerHTML = 
        `
        <h4> ${user.id} </h4>
        <h5> ${user.title} </h5>
        <p> ${user.body} </p>
        `
        postContainer.appendChild(create)
    }
}

function deletPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      
}


loadPost()