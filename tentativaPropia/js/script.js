import {textosArmazenados as textArmazem,weaponsDamege} from "./textos.js"
import * as variaveis from "./variaveisPrincipais.js"
import * as btnAction from "./btnActions.js"
import * as monsterStatus from  "./monsterStatus.js"

function statusETextoIniciais(){
    variaveis.hpCharacter.innerHTML = '100'
    variaveis.xpCharacter.innerHTML = '0'
    variaveis.goldCharacter.innerHTML = '100'

    variaveis.text.innerHTML = textArmazem(0,variaveis.weapons.innerHTML,variaveis.goldCharacter.innerHTML);
}

statusETextoIniciais();

// store

variaveis.btnVillage.addEventListener("click",((evt)=>{
    btnAction.villageBtn();     
}));

variaveis.btnStore.addEventListener("click",((evt)=>{
    btnAction.storeBtn();
}));

variaveis.btnHpStore.addEventListener("click",((evt)=>{
    btnAction.buyHp();
      
}))

variaveis.btnStoreWeapon.addEventListener("click",((evt)=>{
    btnAction.buyWeapon();
}))


// cave 

if(variaveis.containerMonster.classList == "esconder"){
    
}

variaveis.btnCave.addEventListener("click",((evt)=>{
    btnAction.CaveBtn();
}))


