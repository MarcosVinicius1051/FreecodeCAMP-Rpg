import {textosArmazenados as textArmazem,weaponsDamege} from "./textos.js"
import * as variaveis from "./variaveisPrincipais.js"
import * as btnAction from "./btnActions.js"
import * as monster from  "./monsters.js"
import * as danos from "./danos.js"

export let demageCharacter; 
let monsterAtivo; 
function statusETextoIniciais(){
    variaveis.hpCharacter.innerHTML = '100'
    variaveis.xpCharacter.innerHTML = '0'
    variaveis.goldCharacter.innerHTML = '100'
    demageCharacter = 20; 

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
    demageCharacter = btnAction.buyWeapon();
    console.log(demageCharacter);
}))


// cave 


variaveis.btnCave.addEventListener("click",((evt)=>{
    btnAction.CaveBtn();
}))

variaveis.btnSlime.addEventListener("click",((evt)=>{
    btnAction.slimeBtn();
    monsterAtivo = monster.statusMonster("slime");
}));
variaveis.btnAttack.addEventListener("click",((evt)=>{
    btnAction.characterAttack(1,danos.demageCalculator(demageCharacter),danos.demageCalculator(monsterAtivo));
}))


variaveis.btnRun.addEventListener("click",((evt)=>{
    btnAction.runBtn();
}));


