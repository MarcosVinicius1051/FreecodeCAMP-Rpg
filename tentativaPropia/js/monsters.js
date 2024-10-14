import {textosArmazenados as textArmazem,weaponsDamege} from "./textos.js"
import * as variaveis from "./variaveisPrincipais.js"
import * as btnAction from "./btnActions.js"

export let monsterDemage;

export function statusMonster(monsterName){
    if(monsterName == "slime"){
        variaveis.monsterName.innerHTML = monsterName;
        variaveis.monsterHp.innerHTML = 100; 
        return monsterDemage = 20; 
    }
}

