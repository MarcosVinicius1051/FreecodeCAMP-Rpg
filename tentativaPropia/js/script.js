import {textosArmazenados as textArmazem} from "./textos.js"
import * as variaveis from "./variaveisPrincipais.js"


statusIniciais();



variaveis.btnVillage.addEventListener("click",((evt)=>{
    nEsconder(variaveis.btnStore);
    nEsconder(variaveis.btnCave);
    nEsconder(variaveis.btnDragon);
    
    esconder(variaveis.btnStoreWeapon);
    esconder(variaveis.btnHpStore);
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


variaveis.btnHpStore.addEventListener("click",((evt)=>{
    buyItems(parseInt(variaveis.goldCharacter.innerHTML),"hp");
      
}))






variaveis.text.innerHTML = textArmazem(0,variaveis.weapons,variaveis.goldCharacter.innerHTML);

function statusIniciais(){
variaveis.hpCharacter.innerHTML = '100'
variaveis.xpCharacter.innerHTML = '0'
variaveis.goldCharacter.innerHTML = '50'
}

function esconder(el){
    return el.classList.add("esconder"); // class com um s xdddddd
}

function nEsconder(el){
    
    return el.classList.remove("esconder");
}


function buyItems (gold,type){

    if(type == "hp"){
        if(gold >=10){
            variaveis.text.innerHTML = textArmazem(3);
            gold = gold -10;
            // adicionar +10 de hp.
            return variaveis.goldCharacter.innerHTML = gold.toString(); 
        }else{
            variaveis.text.innerHTML = textArmazem(4); 
        }
    }
}




