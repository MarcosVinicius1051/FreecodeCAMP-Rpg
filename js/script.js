import {textosArmazenados as textArmazem,weaponsDamege} from "./textos.js"
import * as variaveis from "./variaveisPrincipais.js"
import * as btnAction from "./btnActions.js"
import * as monster from  "./monsters.js"
import * as danos from "./danos.js"


export let demageCharacter; 
let monsterAtivoDemage; 
let monsterAtivoName;

export function statusETextoInicial(){
    variaveis.hpCharacter.innerHTML = '100'
    variaveis.xpCharacter.innerHTML = '0'
    variaveis.goldCharacter.innerHTML = '100'
    demageCharacter = 20; 

    variaveis.text.innerHTML = textArmazem(0,variaveis.weapons.innerHTML,variaveis.goldCharacter.innerHTML);
}

statusETextoInicial();

// store

variaveis.btnVillage.addEventListener("click",((evt)=>{
    btnAction.villageBtn();     
}));

variaveis.btnStore.addEventListener("click",((evt)=>{
    btnAction.storeBtn();
}));

variaveis.btnHpStore.addEventListener("click",((evt)=>{
    btnAction.buyHp("caveExplorate");
      
}))

variaveis.btnStoreWeapon.addEventListener("click",((evt)=>{
    demageCharacter = btnAction.buyWeapon();
    console.log(demageCharacter);
}))


// cave 


variaveis.btnCave.addEventListener("click",((evt)=>{
    btnAction.CaveBtn();
}))

variaveis.btnExplore.addEventListener("click",((evt)=>{
    btnAction.exploreCave();
}))

//monsters
variaveis.btnSlime.addEventListener("click",((evt)=>{
    monsterAtivoName=btnAction.slimeBtn();
    monsterAtivoDemage = monster.statusMonster("slime");
}));

variaveis.btnCano.addEventListener("click",((evt)=>{
    monsterAtivoName=btnAction.canoBtn();
    monsterAtivoDemage = monster.statusMonster("cano");
}));

variaveis.btnDragon.addEventListener("click",((evt)=>{
    monsterAtivoName=btnAction.dragonBtn();
    monsterAtivoDemage = monster.statusMonster("pombo");
}));


variaveis.btnAttack.addEventListener("click",((evt)=>{
    
    btnAction.characterAttack(1, danos.demageCalculator(demageCharacter), danos.demageCalculator(monsterAtivoDemage), monsterAtivoName);
}))

variaveis.btnDodge.addEventListener("click",((evt)=>{
    btnAction.btnDodge(danos.demageCalculator(monsterAtivoDemage), monsterAtivoName);
}))

variaveis.btnRun.addEventListener("click",((evt)=>{
    
    btnAction.runBtn(monsterAtivoName);
}));    



