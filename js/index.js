function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}


function displayUser(datas){
    for(const data of datas){
        console.log(data.email)
    }
}