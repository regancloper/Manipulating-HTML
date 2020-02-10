// objective 1 - alert after button click
let $btn1 = $("<button>Click Here</button>").addClass("btn-1");
$('#1').append($btn1);
$('.btn-1').click(function() {
    alert("Thanks for clicking me!");
});

// objective 2 - sends alert with text in form
$('#btnSubmit').click(function (e) {
    e.preventDefault();
    let $val = $('input[type="text"]').val();
    alert($val);
});

// objective 3 - changes color of div when hovered over
$('#color-box').hover(
    function() {
        $(this).css("background-color", "mediumseagreen");
    }, function() {
        $(this).css("background-color", "");
    }
);


// objective 4 - create paragraph and add listener to change color
let ptxt = "Hello my name is Jonas.";
$('#4').append("<p>" + ptxt + "</p>");
$('p').click(function() {
    $(this).css("color", assignRandomColor());
})

// objective 5 - button that generates my name in a span
let $btn5 = $("<button>Click Here</button>").addClass("btn-5");
$('#5').append($btn5);
$('#5').append('<div></div>');
$('.btn-5').click(function() {
    $('#5 > div').append('<span>Regan Loper</span>');
})

// objective 6 - adds friends' names to list
let list = ["John", "Jack", "Irving", "Steve", "Bradford", "Dustin", "Jason", "Todd", "Jeremy", "Don"];
let numclicks = 0;
$('#btn-6').click(function() {
    if (numclicks >= list.length) {
        alert("There are no more friends to add!");
    } else {
        $('ul').append('<li>' + list[numclicks] + '</li>');
        numclicks++;
    }
})


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