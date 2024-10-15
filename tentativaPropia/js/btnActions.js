import * as variaveis from "./variaveisPrincipais.js";
import {textosArmazenados as textArmazem, weaponsArmazem, weaponsDamege} from "./textos.js";
import * as essencial from "./essentialFunctions.js";
import * as script from './script.js';
//essenciais

let weaponValueIndex = 0; 

export function villageBtn(){
    essencial.nEsconder(variaveis.btnStore);
    essencial.nEsconder(variaveis.btnCave);
    essencial.nEsconder(variaveis.btnDragon);
    
    essencial.esconder(variaveis.btnStoreWeapon);
    essencial.esconder(variaveis.btnHpStore);
    essencial.esconder(variaveis.btnVillage); 
    essencial.esconder(variaveis.btnCano);
    essencial.esconder(variaveis.btnSlime);

    variaveis.text.innerHTML = textArmazem(1);
}

export function storeBtn(){
    essencial.esconder(variaveis.btnDragon);
    essencial.esconder(variaveis.btnCave);
    essencial.esconder(variaveis.btnStore);

    essencial.nEsconder(variaveis.btnStoreWeapon);
    essencial.nEsconder(variaveis.btnHpStore);
    essencial.nEsconder(variaveis.btnVillage);

    variaveis.text.innerHTML = textArmazem(2);
}

export function buyHp(){
    essencial.buyItems(parseInt(variaveis.goldCharacter.innerHTML),"hp");
    setTimeout(()=>{
        variaveis.text.innerHTML = textArmazem(2);
    },3000)
}

export function buyWeapon(){
    weaponValueIndex = essencial.buyItems(parseInt(variaveis.goldCharacter.innerHTML),"weapon",weaponValueIndex);
 console.log(weaponValueIndex )

    if(weaponValueIndex >= 3){
        weaponValueIndex = 3
        setTimeout(() => {
            variaveis.text.innerHTML = textArmazem(2);
            
        }, 3000);
    }else{
 
        
        setTimeout(() => {
            variaveis.text.innerHTML = textArmazem(2);
            
        }, 3000)
    }
    return weaponsDamege[weaponValueIndex] 
   
    
}

// cave 



export function CaveBtn(){

    essencial.removeClass(variaveis.containeractions,"MonsterOn")

    essencial.esconder(variaveis.btnAttack);
    essencial.esconder(variaveis.btnRun);
    essencial.esconder(variaveis.btnDodge);
    essencial.esconder(variaveis.btnDragon);
    essencial.esconder(variaveis.btnCave);
    essencial.esconder(variaveis.btnStore);
    essencial.esconder(variaveis.containerMonster);

    essencial.nEsconder(variaveis.btnSlime);
    essencial.nEsconder(variaveis.btnCano);
    essencial.nEsconder(variaveis.btnVillage);
    
    variaveis.text.innerHTML = textArmazem(9);
}


export function slimeBtn(){
    
    essencial.addClass(variaveis.containeractions,"MonsterOn");
    
    essencial.esconder(variaveis.btnCano);
    essencial.esconder(variaveis.btnSlime);
    essencial.esconder(variaveis.btnVillage); 

    essencial.nEsconder(variaveis.containerMonster);
    essencial.nEsconder(variaveis.btnAttack);
    essencial.nEsconder(variaveis.btnDodge);
    essencial.nEsconder(variaveis.btnRun);

    variaveis.text.innerHTML = textArmazem(10,false,false,"slime")

    return "slime"
}
export function canoBtn(){
    
    essencial.addClass(variaveis.containeractions,"MonsterOn");
    
    essencial.esconder(variaveis.btnCano);
    essencial.esconder(variaveis.btnSlime);
    essencial.esconder(variaveis.btnVillage); 

    essencial.nEsconder(variaveis.containerMonster);
    essencial.nEsconder(variaveis.btnAttack);
    essencial.nEsconder(variaveis.btnDodge);
    essencial.nEsconder(variaveis.btnRun);

    variaveis.text.innerHTML = textArmazem(10,false,false,"cano")

    return "cano"
}
export function dragonBtn(){
    
    essencial.addClass(variaveis.containeractions,"MonsterOn");
    
    essencial.esconder(variaveis.btnCano);
    essencial.esconder(variaveis.btnSlime);
    essencial.esconder(variaveis.btnVillage); 

    essencial.nEsconder(variaveis.containerMonster);
    essencial.nEsconder(variaveis.btnAttack);
    essencial.nEsconder(variaveis.btnDodge);
    essencial.nEsconder(variaveis.btnRun);

    variaveis.text.innerHTML = textArmazem(10,false,false,"dragon")

    return "dragon"
}

//arrumar sistema de hp do jogador, para quando morrer o jogo reiniciar.

export function characterAttack(type,demage,monsterDemag,monsterAtivoName){
    console.log(monsterAtivoName)
    let valHp = essencial.perderHp(variaveis.monsterHp.innerHTML,type,demage);

    if(valHp >0){
        setTimeout(()=>{
            variaveis.text.innerHTML = textArmazem(13,false,false,monsterAtivoName,monsterDemag)
        
            monsterAttack(0,monsterDemag,monsterAtivoName); 
        },200)
    }
    if(valHp == 0){
        variaveis.text.innerHTML = textArmazem(15,false,false,monsterAtivoName)
        essencial.pagamento(variaveis.monsterName.innerHTML.toString(),parseInt(variaveis.goldCharacter.innerHTML));

            variaveis.btnAttack.disabled = true;
            variaveis.btnDodge.disabled = true;
            variaveis.btnRun.disabled = true; 

        setTimeout(()=>{

            variaveis.btnAttack.disabled = false; 
            variaveis.btnDodge.disabled = false;
            variaveis.btnRun.disabled = false; 
            
            CaveBtn() //arrumar esse sistema referente ao design do sistema XD 

        },3000)
    }
}


//Monster Attack

function monsterAttack(type,demage,name){
    let hpReturnPlayer = essencial.perderHp(variaveis.hpCharacter.innerHTML,type,demage,name);
    if(hpReturnPlayer<0){
            setTimeout ((evt)=>{
                
                script.statusETextoInicial();

                essencial.removeClass(variaveis.containeractions,"MonsterOn");
                essencial.addClass(variaveis.containerMonster,"esconder");
                essencial.esconder(variaveis.btnAttack);
                essencial.esconder(variaveis.btnRun);
                essencial.esconder(variaveis.btnDodge);

                essencial.nEsconder(variaveis.btnVillage);
            },5000);
    }
}



export function runBtn(){
    essencial.removeClass(variaveis.containeractions,"MonsterOn");
    essencial.addClass(variaveis.containerMonster,"esconder");

    //terminar de fazer sistema de fuga; 
}



