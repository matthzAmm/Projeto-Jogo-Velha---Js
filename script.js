let x = document.querySelector(".x");
let o = document.querySelector(".o");

let symbols = document.querySelectorAll(".symbol");
let buttons = document.querySelectorAll("#buttons-container button");

let messageContainer = document.querySelector("#message-over");
let messageText = document.querySelector("#message-over p");

let secondPlayer;

// counter
// 2.0

// test
// test2

let player1 = 0;
let player2 = 0;

for(let i = 0; i < symbols.length; i++){
    // symbol click event

    symbols[i].addEventListener("click", function(){


        let playerNow = clickEvent(player1, player2);
        // register

        if(symbols[i].childNodes.length == 0){
            
            let clPlayerNow = playerNow.cloneNode(true);
            this.appendChild(clPlayerNow);

            if(player1 == player2){
                player1++;

                if(secondPlayer == "vsAi"){
                    aiPlay();
                    player2++;
                }
            }else{
                player2++;
            }

            winCheck();
        }



    });
}

// event button

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = "none";
        }

        setTimeout(function(){

            let container = document.querySelector("#hashtag-container");
            container.classList.remove("hide");
        }, 500);
    })
}

function clickEvent(player1, player2){

    if(player1 == player2){
        playerNow = x;    

    }else{
        playerNow = o;

    }
    return playerNow;
}

function winCheck(){

    let b1 = document.getElementById("area-1");
    let b2 = document.getElementById("area-2");
    let b3 = document.getElementById("area-3");
    let b4 = document.getElementById("area-4");
    let b5 = document.getElementById("area-5");
    let b6 = document.getElementById("area-6");
    let b7 = document.getElementById("area-7");
    let b8 = document.getElementById("area-8");
    let b9 = document.getElementById("area-9");

    let endGame = false;

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        
        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        
        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        
        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        
        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        
        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            restartGame("x");
            endGame = true;
        }else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            restartGame("o");
            endGame = true;
        }
    }

    let counter = 0;
    for(let i = 0; i < symbols.length; i++){
        if(symbols[i].childNodes[0] != undefined){
            counter++;
        }

        if(counter == 9 && !endGame){
            restartGame("");

        }

    }

}

// clear and reset

function restartGame(winner){

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = "";
    console.log(winner);
    

    if(winner == "x"){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador X venceu!";
    }else if(winner == "o"){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador O venceu!";
    }else{
        msg = "Deu velha!";
    }

    //msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    setTimeout(() => {
        messageContainer.classList.add("hide");
    }, 3000);

    player1 = 0;
    player2 = 0;

    let symbolRemove = document.querySelectorAll(".symbol div");

    for(let i = 0; i< symbolRemove.length; i++){
        symbolRemove[i].parentNode.removeChild(symbolRemove[i]);
    }
}

function aiPlay(){

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0;i< symbols.length; i++){
        let randomNum = Math.floor(Math.random() * 5);

        if(symbols[i].childNodes[0] == undefined){

            symbols[i].appendChild(cloneO);
            counter++;
            break;
        }else{
            filled++;
        }
    }

    if(counter == 0 && filled < 9){
        aiPlay();

    }

}