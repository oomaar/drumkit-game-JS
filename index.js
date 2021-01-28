var numberOfDrums = $(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInner = this.innerHTML;
        makeSound(buttonInner);
        makeAnimation(buttonInner);
    });
}

$(document).on("keypress", function(event) {
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(keyPressedByUser) {
    switch (keyPressedByUser) {
        case "w":
            var audioW = new Audio("sounds/tom-1.mp3");
            audioW.play();
            break;

        case "W":
            var audioW = new Audio("sounds/tom-1.mp3");
            audioW.play();
            break;

        case "a":
            var audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();
            break;

        case "A":
            var audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();
            break;

        case "s":
            var audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();
            break;

        case "S":
            var audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();
            break;

        case "d":
            var audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
            break;

        case "D":
            var audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
            break;

        case "j":
            var audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();
            break;

        case "J":
            var audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();
            break;

        case "k":
            var audioK = new Audio("sounds/crash.mp3");
            audioK.play();
            break;

        case "k":
            var audioK = new Audio("sounds/crash.mp3");
            audioK.play();
            break;

        case "l":
            var audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();
            break;

        case "L":
            var audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();
            break;
    }
}

function makeAnimation(currentKey) {
    var activeBtn = $("." + currentKey);

    activeBtn.addClass("pressed");

    setTimeout(function() {
        activeBtn.removeClass("pressed");
    }, 100);
}

$(document).on("keypress", function(event) {
    if (event.key === "x") {
        $("h1").html("You Pressed X");
    }
});