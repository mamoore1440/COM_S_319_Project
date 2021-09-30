var users = [
    {
        name: "Polina",
        password: "123!",
        highscore: 9,
        rank: 4
    },
    {
        name: "Jacob",
        password: "122!",
        highscore: 1054325,
        rank: 1
    },
    {
        name: "Kate",
        password: "1234!",
        highscore: 1052,
        rank: 2
    },
    {
        name: "Michael",
        password: "password",
        highscore: 11,
        rank: 3
    }
];

function registerUser(){
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {name: name, password: password, highscore: 0, rank: 0};
    users.push(user);
    window.location.href="characterCreator.html"
}

function validateUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const user = users.find(user => user.name === username && user.password === password);
    if (user) {
        window.location.href="characterCreator.html";
    } else {
        alert("Username does not exist or password is incorrect");
    }
}