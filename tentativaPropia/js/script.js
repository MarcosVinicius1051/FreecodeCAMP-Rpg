import {textosArmazenados as textArmazem} from "./textos.js"
import * as variaveis from "./variaveisPrincipais.js"

variaveis.btnVillage.addEventListener("click",((evt)=>{
    nEsconder(variaveis.btnStore);
    nEsconder(variaveis.btnCave);
    nEsconder(variaveis.btnDragon);
    
    esconder(variaveis.btnVillage); 
    variaveis.text.innerHTML = textArmazem(1);
}));

variaveis.btnStore.addEventListener("click",((evt)=>{
    esconder(variaveis.btnDragon);
    esconder(variaveis.btnCave);
    esconder(variaveis.btnStore);

    nEsconder(variaveis.btnStoreWeapon);
    nEsconder(variaveis.btnHpStore);
    nEsconder(variaveis.btnVillage);

    variaveis.text.innerHTML = textArmazem(2);
}))

let enemiesStatus = {
    hp: variaveis.monsterName.innerHTML, 
    name: variaveis.monsterHp.innerHTML
}

let gameStatus ={
    xp: variaveis.xpCharacter.innerHTML="0",
    hp: variaveis.hpCharacter.innerHTML="100",
    gold: variaveis.goldCharacter.innerHTML = "50"
}

variaveis.text.innerHTML = textArmazem(0,variaveis.weapons,gameStatus.gold);

function esconder(el){
    return el.classList.add("esconder"); // class com um s xdddddd
}
function nEsconder(el){
    
    return el.classList.remove("esconder");
}




