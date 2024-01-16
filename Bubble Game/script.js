let bubbleSpace = document.querySelector('.panel-bottom')
let timerDisplay = document.querySelector("#timer");
let hitDisplay = document.querySelector("#hit");
let scoreDisplay = document.querySelector('#score')

// Adding Bubbles In Panel Bottom Space
function addBubble() {
    var bubbleNo = ''
    for (let i = 1; i < 220; i++) {
        var randomNo = Math.floor(Math.random() * 11)
        bubbleNo += `<div class="bubble">${randomNo}</div>`
    }
    bubbleSpace.innerHTML = bubbleNo
}

// Creating 60s Timer
var timer = 60;
function timerCountdown() {
    var timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerDisplay.innerHTML = timer
        }
        else {
            clearInterval(timerint)
            bubbleSpace.innerHTML =
                `<h1 class="gameEnd">Game Over! Your Score is ${score}</h1>
                `
        }
    }, 1000);


}

// Adding Score By 10 Everytime Player Hits The correct Bubble
var score = 0;
function getScore() {
    score += 10
    scoreDisplay.textContent = score

}

// Getting Different No In Hit Box
let hitVal = 0;
function getHitValue() {
    hitVal = Math.floor(Math.random() * 11)
    hitDisplay.textContent = hitVal
}

// Click Event For The Bubbles
bubbleSpace.addEventListener('click', (e) => {
    let clickedNo = Number(e.target.textContent)
    if (clickedNo === hitVal) {
        getScore()
        addBubble()
        getHitValue()
    }
})

// Creating Loader
let preLoader = document.querySelector('.loader')
function loader() {
    gsap.to(".loader img", {
        duration: 3,
        scale: 1.5,
        rotate: '360deg',
        ease: Power4.easeInOut,
        onComplete: () => {
        //     setTimeout(() => {
        //         preLoader.remove()
        //     }, 100);
        
        preLoader.style.display = 'none'
        }
    })
}

// Adding Animations
var tl = gsap.timeline()
setTimeout(() => {
    tl.to('.panel', {
        y: 0.3,
        duration: 1.2,
        ease: "power4.inOut",
        opacity: 1,
        stagger: 0.2
    
    })
    tl.from(".panel-top .elem", {
        y: -70,
        duration: 0.7,
        opacity: 0,
        stagger: 0.2
    })
    addBubble()
    timerCountdown()
    getHitValue()
}, 3000);

loader()
