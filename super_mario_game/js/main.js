var player = document.getElementById("mario");
var powerup = {
    audio: new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav"),
    play: function() {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

// function jump() {
//     player.classList.add("jump-animation");
//     setTimeout(function() {
//         player.classList.remove("jump-animation");
//     }, 500);
// }

function updateElement(element, incx, incy) {
    var x = Number(element.getAttribute("data-x")) + incx;
    var y = Number(element.getAttribute("data-y")) + incy;

    element.style.transform = "translate(" + x + "px, " + y + "px)";

    if (element.classList.contains('mirror')) {
        element.style.transform += " scaleX(-1)";
    }

    if (element.classList.contains('big')) {
        element.style.transform += " scale(2)";
    }

    // if (element.classList.contains('jump-animation')) {
    //     element.style.transform += " translateY(-10px)";
    // }

    element.setAttribute("data-x", x);
    element.setAttribute("data-y", y);
}

window.addEventListener("keydown", function(event) {
    var speed = 10;

    if (event.keyCode == 39) {
        player.classList.add("caminar");
        player.classList.remove("mirror");
        updateElement(player, +speed, 0);
    } else if (event.keyCode == 37) {
        player.classList.add("caminar");
        player.classList.add("mirror");
        updateElement(player, -speed, 0);
    }
    // else if (e.keyCode == 38) {
    //     player.classList.add("jump-animation");
    //     updateElement(player, 0, -speed);
    // }

    if (event.keyCode == 85) {
        player.classList.toggle("big");
        powerup.play();
        updateElement(player, 0, 0);
    }
})

window.addEventListener("keyup", function(event) {
    // player.classList.remove("caminar");
})

updateElement(player, 0, 0)