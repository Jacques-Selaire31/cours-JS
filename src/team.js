const cardList = document.getElementById("card-list");
let tabUsers = [];
async function userFetch() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    const user = data.results;
    console.log(user);
    for (let i = 0; i < 10; i++) {
        const firstname = data.results[i].name.first;
        const picture = data.results[i].picture.medium;
        const email = data.results[i].email;
        let userData = {
            firstname: firstname,
            picture: picture,
            email: email
        }
        tabUsers.push(userData);
        const h2 = document.createElement("h2");
        h2.innerText = tabUsers[i].firstname;
        cardList.append(h2);
        const p = document.createElement("p");
        p.innerText = tabUsers[i].email;
        cardList.append(p);
        const img = document.createElement("img");
        img.src = tabUsers[i].picture;
        cardList.append(img);
    }
    console.log(tabUsers);
    console.log(tabUsers[0].email);
    return tabUsers;
}
userFetch();


