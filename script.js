var timer = 60;
var score = 0;
var timerelem = document.querySelector('#Timerelem');
var scoreelem = document.querySelector('#scoreelem');
var hit = document.querySelector('#Hit');
var bpnl = document.querySelector('#bpnl');
var gussenumber;

//   ----Timer Part----

setInterval((function () {
    if (timer > 0) {
        --timer;
        timerelem.textContent = timer;
    }
    else {
        bpnl.innerHTML = '<h1 id="center">Game Over</h1>'
    }
}), 1000);

//   ----Hit Part----
function getNumber() {
    gussenumber = Math.floor(Math.random() * 10);
    hit.textContent = gussenumber;
}

getNumber();



function makeBubble() {
    for (var i = 0; i < 80; i++) {
        var randemnumber = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${randemnumber}</div>`
        bpnl.innerHTML += template;
    }
}

makeBubble();


bpnl.addEventListener('click', function (details) {
    var clickbbl = details.target.textContent;
    if (clickbbl == gussenumber) {
        score = score + 10;
        scoreelem.textContent = score;
        getNumber()
        bpnl.innerHTML = '';
        makeBubble();
    }
    else {
        console.log('wrong')
    }
})