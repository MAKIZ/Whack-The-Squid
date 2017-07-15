console.log('You are in!')

let squids = document.querySelectorAll('section')[Math.floor(Math.random() * 6)];
let timer = document.getElementById('timer');
squidPosition = 180;
let score = 0;
let secs = 60;

//start game when click button
function start() {
    squidUpDown();
    countdown();
}

//set random corals
function getRandom() {
    newRandom = Math.floor(Math.random() * 6);
    squids = document.querySelectorAll('section')[newRandom];
    console.log('random ' + newRandom);
}

//squid up and down

function squidUpDown() {
    if(squidPosition === 180) {
        squidPosition = 0;
        squids.style.top = squidPosition + 'px';
        console.log('Up')
    } else {
        squidPosition = 180;
        squids.style.top = squidPosition + 'px';
        console.log('Down')
    }
}

//score counter
function hit() {
    console.log('Hit');
    score++;
    document.getElementById('score').innerHTML = score;
}

//counter 
function countdown() {
    let randomSquidOff  = setInterval(function(){ getRandom() }, 2000);
    let squidOff  = setInterval(function(){ squidUpDown() }, 1000);
    
    function timerStart() {
        if (secs === 0) {
            clearInterval(timerStart);
            timer.innerHTML = secs;
            clearInterval(squidOff);
            clearInterval(randomSquidOff);
        } else {
            secs--;
            timer.innerHTML = secs;
            console.log(secs);
        }  
            
    }
    setInterval(timerStart, 1000)
}

window.onload = function(){
    document.getElementById("squid1").addEventListener("click",hit);
    document.getElementById("squid2").addEventListener("click",hit); 
    document.getElementById("squid3").addEventListener("click",hit); 
    document.getElementById("squid4").addEventListener("click",hit); 
    document.getElementById("squid5").addEventListener("click",hit); 
    document.getElementById("squid6").addEventListener("click",hit);
}   