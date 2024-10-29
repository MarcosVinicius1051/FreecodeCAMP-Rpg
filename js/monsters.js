import * as variaveis from "./variaveisPrincipais.js"

export let monsterDemage;

export function statusMonster(monsterName){
    if(monsterName == "slime"){
        variaveis.monsterName.innerHTML = monsterName;
        variaveis.monsterHp.innerHTML = 100; 
        return monsterDemage = 20; 
    }
    if(monsterName == "cano"){
        variaveis.monsterName.innerHTML = monsterName;
        variaveis.monsterHp.innerHTML = 200; 
        return monsterDemage = 30; 
    }
    if(monsterName == "pombo"){
        variaveis.monsterName.innerHTML = monsterName;
        variaveis.monsterHp.innerHTML = 500; 
        return monsterDemage = 50; 
    }
}

