let currMoleTile;
let curPlantTile;
let score =0;
let gameover = false;
window.onload = function(){
    setGame();
}
function setGame(){
    for(let i =0; i<9;i++){
        let tile =document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    
    
 setInterval(setMole,1300);
 setInterval(setPlant,1300);
 

 
}
function getRandomTile(){
    let num = Math.floor(Math.random() *9);
    return num.toString();
}
function setMole(){ 
    if (gameover)
        return;
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
   
    let mole= document.createElement("img");
    mole.src="monty-mole.png";
   

    let num = getRandomTile();
    if(curPlantTile && curPlantTile.id== num)
        return;
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function setPlant(){ 
    if (gameover)
        return;
    if(curPlantTile){
        curPlantTile.innerHTML = "";
    }


    let plant= document.createElement("img");
    plant.src="piranha-plant.png";
   
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num)
        return;
    curPlantTile = document.getElementById(num);
    curPlantTile.appendChild(plant);
}

function selectTile(){
    if (gameover)
        return;
    if (this == currMoleTile){
        score +=10;
        document.getElementById("score").innerText = score.toString();

    }
    else if(this == curPlantTile){
        document.getElementById("score").innerText = "GAME OVER : " + score.toString();
        gameover = true;
    }
}

