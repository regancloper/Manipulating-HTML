// objective 1 - alert after button click
let div1 = document.getElementById("1");
let btn1 = document.createElement('button');
btn1.textContent = "Click Here";
div1.appendChild(btn1);
btn1.addEventListener("click", function () {
    alert("Thanks for clicking me!");
});

// objective 2 - sends alert with text in form
let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener("click", function () {
    let text = document.getElementById('text-input').value;
    alert(text);
});

// objective 3 - adds div and changes color when hovered over
let box = document.getElementById("color-box");
box.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "mediumseagreen";
});
box.addEventListener("mouseout", function (e) {
    e.target.style.backgroundColor = "";
});

// objective 4 - create paragraph and add listener to change color
let div4 = document.getElementById("4");
let p1 = document.createElement('p');
let ptxt = document.createTextNode("Hello my name is Jonas.");
p1.appendChild(ptxt);
div4.appendChild(p1);
p1.addEventListener("click", function (e) {
    e.target.style.color = assignRandomColor();
});

// objective 5 - button that generates my name in a span
let div5 = document.getElementById("5");
let btn5 = document.createElement('button');
btn5.textContent = "Click Here";
div5.appendChild(btn5);
let subdiv = document.createElement('div');
div5.appendChild(subdiv);
btn5.addEventListener("click", function () {
    let span = document.createElement('span');
    span.textContent = "Regan Loper";
    subdiv.appendChild(span);
});

// objective 6 - adds friends' names to list
let list = ["John", "Jack", "Irving", "Steve", "Bradford", "Dustin", "Jason", "Todd", "Jeremy", "Don"];
let ul = document.querySelector('ul');
let btn6 = document.querySelector('#btn-6');
let numclicks = 0;
btn6.addEventListener("click", function() {
    if (numclicks >= list.length) {
        alert("There are no more friends to add!");
    } else {
        let li = document.createElement('li');
        li.textContent = list[numclicks];
        ul.appendChild(li);
        numclicks++;
    }
});



// returns a randomly-selected color
function assignRandomColor() {
    let r = generateRandomNumber();
    let g = generateRandomNumber();
    let b = generateRandomNumber();
    color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

// generates a random number from 0 - 255
function generateRandomNumber() {
    return (Math.floor(Math.random() * 256));
}

// adds a friend to the list
function addFriend() {
    for (let i = 0; i < list.length; i++) {
        let item = list[i];

    }
}
