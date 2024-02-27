let round=1;
let comp;
let userval;
let compScore=0;
let userScore=0;

function trigAnim () {
    document.getElementById('compImg').classList.add('triggerAnimation');
    document.getElementById('userImg').classList.add('triggerAnimation');
}
function removeAnim () {
    document.getElementById('compImg').classList.remove('triggerAnimation');
    document.getElementById('userImg').classList.remove('triggerAnimation');
}
function clearInput(round) {
    document.getElementById('compImg').setAttribute("src", "./images/leftrock.png");
    document.getElementById('userImg').setAttribute("src", "./images/rightrock.png");
    document.querySelector('.round').innerHTML = round;
    title(4);
}
function randomVal() {
    comp = Math.floor(Math.random()*3);
    return comp;
}
function title(choice) {
    if (choice == 1 ){
        document.getElementById('status').innerHTML = "You Won !";
        document.getElementById('status').style.color = "green" ;
    }
    else if (choice == 2 ){
        document.getElementById('status').innerHTML = "Computer Won !";
        document.getElementById('status').style.color = "red";
    }
    else if (choice == 3 ){
        document.getElementById('status').innerHTML = "It's a Draw !";
        document.getElementById('status').style = "#003f7d";
    }
    else if (choice == 4 ){
        document.getElementById('status').innerHTML = "Let's Play!";
        document.getElementById('status').style = "#003f7d";
    }
}

function playOn (compChoice,userChoice) {
    if(round <= 5){
        if( compChoice == 0 ){

            if (userChoice == 0 ) {
                title(3);
            }
            else if(userChoice == 1 ) {
                document.getElementById('userImg').setAttribute("src" , "./images/rightpaper.png");
                userScore = userScore+10 ;
                document.getElementById('userScore').innerHTML = userScore ;
                title(1);
            }
            else if(userChoice == 2 ) {
                document.getElementById('userImg').setAttribute("src" , "./images/rightscissor.png");
                compScore = compScore+10;
                document.getElementById('compScore').innerHTML = compScore ;
                title(2);
            }
        }

        else if ( compChoice == 1 ){
            document.getElementById('compImg').setAttribute("src" , "./images/leftpaper.png");

            if ( userChoice == 0 ) {
                compScore = compScore+10;
                document.getElementById('compScore').innerHTML = compScore ;
                title(2);
            }
            else if(userChoice == 1 ) {
                document.getElementById('userImg').setAttribute("src" , "./images/rightpaper.png");
                title(3);
            }
            else if(userChoice == 2 ) {
                document.getElementById('userImg').setAttribute("src" , "./images/rightscissor.png");
                userScore = userScore+10 ;
                document.getElementById('userScore').innerHTML = userScore ;
                title(1);
            }
        }

        if( compChoice == 2 ){
            document.getElementById('compImg').setAttribute("src", "./images/leftscissor.png");

            if (userChoice == 0) {
                userScore = userScore+10 ;
                document.getElementById('userScore').innerHTML = userScore ;
                title(1)
            }
            else if(userChoice == 1 ) {
                document.getElementById('userImg').setAttribute("src" , "./images/rightpaper.png");
                compScore = compScore+10;
                document.getElementById('compScore').innerHTML = compScore ;
                title(2);
            }
            else if(userChoice == 2 ) {
                document.getElementById('userImg').setAttribute("src" , "./images/rightscissor.png");
                title(3);
            }
        }
    }else {
        window.location.reload();
    }
}


function selRock() {
    trigAnim();
    let userChoice = 0;
    let compChoice = randomVal();

    setTimeout(() => {
        clearTimeout();
        removeAnim();
        document.getElementById('userImg').setAttribute("src" , "./images/rightrock.png");
        playOn(compChoice,userChoice);
        console.log("compChoice", compChoice);
    }
    ,1500);

    setTimeout(()=> {
        round++;
        clearInput(round);
    },2500);
    


    
}
function selPaper() {
    trigAnim();
    let userChoice = 1;
    let compChoice = randomVal();
    

    setTimeout(() => {
        clearTimeout();
        removeAnim();
        document.getElementById('userImg').setAttribute("src" , "./images/rightpaper.png");
        playOn(compChoice,userChoice);
        console.log("compChoice", compChoice);
    }
    ,1500);

    setTimeout(()=> {
        round++;
        clearInput(round);
    },2500);

}
function selScissor() {
    trigAnim();
    let userChoice = 2;
    let compChoice = randomVal();

    setTimeout(() => {
        clearTimeout();
        removeAnim();
        document.getElementById('userImg').setAttribute("src" , "./images/rightscissor.png");
        playOn(compChoice,userChoice);
        console.log("compChoice", compChoice);
    }
    ,1500);

    setTimeout(()=> {
        round++;
        clearInput(round);
    },2500);
}