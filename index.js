let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let resetHome = document.getElementById("home-reset-btn")
let resetGuest = document.getElementById("guest-reset-btn")

let counterHome = 0
let counterGuest = 0

//--- Home Buttons ---//

// Button +1 Home
function plusOneHome() {
    counterHome += 1
    homeScore.textContent = counterHome
}

// Button +2 Home
function plusTwoHome() {
    counterHome += 2
    homeScore.textContent = counterHome
}

// Button +3 Home
function plusThreeHome() {
    counterHome += 3
    homeScore.textContent = counterHome
}

// Reset +1 Home
resetHome.addEventListener("click", function(){
    counterHome = 0
    homeScore.textContent = 0
});

//--- Guest Buttons ---//

// Button +1 Guest
function plusOneGuest() {
    counterGuest += 1
    guestScore.textContent = counterGuest
}

// Button +2 Guest
function plusTwoGuest() {
    counterGuest += 2
    guestScore.textContent = counterGuest
}

// Button +3 Guest
function plusThreeGuest() {
    counterGuest += 3
    guestScore.textContent = counterGuest
}

// Reset +1 Guest
resetGuest.addEventListener("click", function(){
    counterGuest = 0
    guestScore.textContent = 0
});