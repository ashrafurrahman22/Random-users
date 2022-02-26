const section = document.getElementById('display-section');
const div = document.createElement('div');

const loadUsers = () => {
    const url = `https://randomuser.me/api/`;
    fetch(url)
    .then(res=> res.json())
    .then(data => displayUsers(data))
}

const displayUsers = (users) => {
        div.innerHTML = `
        <img src="${users.results[0].picture.large}">
        <h1>Name: ${users.results[0].name.first}</h1>
        <h1>Name: ${users.results[0].Phone}</h1>
        <h1>Name: ${users.results[0].name.email}</h1>

        `;
        section.appendChild(div);
};