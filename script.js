var bord = document.getElementById("bord");

bord.innerText = "X / O game";

var charPlayer = "X" ;

var plases = [" "," "," "," "," "," "," "," "," "];
function Reload() {
    setInterval(function name() {document.getElementById("bord").innerText += '.';},1000);
    setTimeout(function (){location.reload();},3000);
}

function win(winn,num1,num2,num3){
    bord.innerText = winn + " is WIN" ;
    bord.style.backgroundColor = "gold";
    //------------------------------------
    //------------------------------------
    num1++;
    num2++;
    num3++;
    num1 = "p"+num1;
    num2 = "p"+num2;
    num3 = "p"+num3;
    document.getElementById(num1).style.backgroundColor = "gold";
    document.getElementById(num2).style.backgroundColor = "gold";
    document.getElementById(num3).style.backgroundColor = "gold";
    Reload();
}

function winner() {
    
    
        if ( plases[1] === plases[0] && plases[2] === plases[0] && plases[0] != " " ) {
            win(plases[0],0,1,2);
        }
        else if ( plases[4] === plases[3] && plases[5] === plases[3] && plases[3] != " " ) {
            win(plases[3],3,4,5);
        }
        else if ( plases[7] === plases[6] && plases[8] === plases[6] && plases[6] != " ") {
            win(plases[6],6,7,8);
        }
        else if ( plases[4] === plases[0] && plases[8] === plases[0] && plases[0] != " ") {
            win(plases[0],0,4,8);
        }
        else if ( plases[4] === plases[2] && plases[6] === plases[2] && plases[2] != " ") {
            win(plases[2],2,4,6);
        }
        else if ( plases[3] === plases[0] && plases[6] === plases[0] && plases[0] != " ") {
            win(plases[0],0,3,6);
        }
        else if ( plases[4] === plases[1] && plases[7] === plases[1] && plases[1] != " ") {
            win(plases[1],1,4,7);
        }
        else if ( plases[5] === plases[2] && plases[8] === plases[2] && plases[2] != " ") {
            win(plases[2],2,5,8);
        }
        else{
            let bool = true;
            for (let index = 0; index < plases.length && bool ; index++) {
                if (plases[index] === " ") {
                    bool = false;
                }
            }
            if (bool) {
                document.getElementById("bord").innerText = "drow";
                document.getElementById("bord").style.backgroundColor = "red";
                Reload();
            }
        }
}

function clic(num1){
    if (plases[num1-1] === " " ) {
        plases[num1-1] = charPlayer ;
        document.getElementById("p"+num1).innerText = charPlayer;
        charPlayer = charPlayer==="X" ? "O" : "X" ;
    }
    winner();
}

