
let round = 0;
let comp;
let userChoice;
let playStatus = "Let's Play";
let scoreComp = 0;
let scoreUser = 0;
function randomVal(){
    comp = Math.floor(Math.random() * (4 - 1)) + 1;

    if(comp == 1){
        document.getElementById("compImg").innerHTML = "<img class='compImg' src='leftrock.png' />"
    }else if(comp == 2){
        document.getElementById("compImg").innerHTML = "<img class='compImg' src='leftpaper.png' />"
    }else if(comp == 3){
        document.getElementById("compImg").innerHTML = "<img class='compImg' src='leftscissor.png' />"
    }

    return comp;
}

function playRound(a, b){
    let final = "It's a tie"
    round++;
    document.getElementById('round').innerText = `${round}`;
    if(round>5){
        if(scoreUser>scoreComp) final = "You Win";
        else if(scoreUser<scoreComp) final = "You Lose";
        document.getElementById('after').innerHTML=`<div class="resultScreen">
                                                        <div class="resultTitle">${final}</div>
                                                        <button class= "playButton" onclick="reload()">PLAY AGAIN</button>
                                                    </div>`
                                                     
    }else{

        if (a === 1 && userChoice == 1) {
            playStatus = "It's a tie";
        } else if (a === 1 && userChoice === 2) {
            playStatus = "You win";
            scoreUser += 10;
        } else if (a === 1 && userChoice === 3) {
            playStatus = "You lose";
            scoreComp += 10;
        } else if (a === 2 && userChoice === 1) {
            playStatus = "You lose";
            scoreComp += 10;
        } else if (a === 2 && userChoice === 2) {
            playStatus = "It's a tie";
        } else if (a === 2 && userChoice === 3) {
            playStatus = "You win";
            scoreUser += 10;
        } else if (a === 3 && userChoice === 1) {
            playStatus = "You win";
            scoreUser += 10;
        } else if (a === 3 && userChoice === 2) {
            playStatus = "You lose";
            scoreComp += 10;
        } else if (a === 3 && userChoice === 3) {
            playStatus = "It's a tie";
        }


        if(playStatus === "You win"){
            document.getElementById('statusDiv').innerHTML = "<div class='status win' id='status'>You Win</div>";
        }else if(playStatus === "You lose"){
            document.getElementById('statusDiv').innerHTML = "<div class='status lose' id='status'>You Lose</div>";
        }else{
            document.getElementById("statusDiv").innerHTML = "<div class='status neutral' id='status'>It's a Tie</div>"
        }
        document.getElementById('compScore').innerText = `${scoreComp}`;
        document.getElementById('userScore').innerText = `${scoreUser}`;
        document.getElementById('btn').disabled = true;
        
    }
}

function selRock(){
    userChoice = 1;
    
    document.getElementById("userImg").innerHTML = "<img class='userImg' src='rightrock.png' />"
    let c = randomVal();
    playRound(c, userChoice);

    setTimeout(function() {
        document.getElementById('btn').disabled = false;
        document.getElementById("compImg").innerHTML = "<img  class='compImg intiCompImg' src='leftrock.png' />"
        document.getElementById("userImg").innerHTML = "<img  class='userImg intiUserImg' src='rightrock.png' />"
        document.getElementById("statusDiv").innerHTML = "<div class='status neutral' id='status'>Let's Play</div>"
    }, 1000);
}

function selPaper(){
    userChoice = 2;
    
    document.getElementById("userImg").innerHTML = "<img class='userImg' src='rightpaper.png' />"
    let c = randomVal();
    playRound(c, userChoice);

    setTimeout(function() {
        document.getElementById('btn').disabled = false;
        document.getElementById("compImg").innerHTML = "<img class='compImg intiCompImg' src='leftrock.png' />"
        document.getElementById("userImg").innerHTML = "<img class='userImg intiUserImg' src='rightrock.png' />"
        document.getElementById("statusDiv").innerHTML = "<div class='status neutral' id='status'>Let's Play</div>"
    }, 1000);
}

function selScissors(){
    userChoice = 3;
    
    document.getElementById("userImg").innerHTML = "<img class='userImg' src='rightscissor.png' />"
    let c = randomVal();
    playRound(c, userChoice);

    setTimeout(function() {
        document.getElementById('btn').disabled = false;
        document.getElementById("compImg").innerHTML = "<img class='compImg intiCompImg' src='leftrock.png' />"
        document.getElementById("userImg").innerHTML = "<img class='userImg intiUserImg' src='rightrock.png' />"
        document.getElementById("statusDiv").innerHTML = "<div class='status neutral' id='status'>Let's Play</div>"
    }, 1000);
}

function reload(){
    console.log("Click")
    window.location.reload();
}
