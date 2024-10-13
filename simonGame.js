let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"]; // to choose random color

let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
};



function levelUp(){
    userSeq = [];
    level ++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()* 3) ;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
};


function checkAns(idx){
    // console.log(`curr level: ${level}`);

    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("Same Value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        
    }
    else{
        h3.innerHTML = `Game Over!Your score was <b>${level} </b> <br> Press any Key to Start`;
        document.querySelector('body').style.background = 'red';
        setTimeout(function(){
            document.querySelector('body').style.background = 'white'; 
        } , 150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}