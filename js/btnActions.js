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

    essencial.esconder(variaveis.btnExplore)
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
    essencial.xpAdd("")
    essencial.removeClass(variaveis.containeractions,"MonsterOn")

    essencial.esconder(variaveis.btnAttack);
    essencial.esconder(variaveis.btnRun);
    essencial.esconder(variaveis.btnDodge);
    essencial.esconder(variaveis.btnDragon);
    essencial.esconder(variaveis.btnCave);
    essencial.esconder(variaveis.btnStore);
    essencial.esconder(variaveis.containerMonster);

    essencial.nEsconder(variaveis.btnExplore)
    essencial.nEsconder(variaveis.btnSlime);
    essencial.nEsconder(variaveis.btnCano);
    essencial.nEsconder(variaveis.btnVillage);
    
    variaveis.text.innerHTML = textArmazem(9);
}

export function exploreCave(){

    variaveis.btnExplore.disabled = true
    variaveis.btnCano.disabled = true
    variaveis.btnSlime.disabled = true
    variaveis.btnVillage.disabled = true

    

    essencial.loading(textArmazem(18),0,0,variaveis.hpCharacter.innerHTML)

}

export function slimeBtn(){
    
    essencial.addClass(variaveis.containeractions,"MonsterOn");

    essencial.esconder(variaveis.btnExplore)
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

    essencial.esconder(variaveis.btnExplore)
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
    essencial.esconder(variaveis.btnCave)
    essencial.esconder(variaveis.btnStore);
    essencial.esconder(variaveis.btnDragon)

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

    if(valHp == 0){
        variaveis.text.innerHTML = textArmazem(15,false,false,monsterAtivoName)
        essencial.pagamento(variaveis.monsterName.innerHTML.toString(),parseInt(variaveis.goldCharacter.innerHTML));

            variaveis.btnAttack.disabled = true;
            variaveis.btnDodge.disabled = true;
            variaveis.btnRun.disabled = true; 

            variaveis.btnAll.map((el)=>{
                essencial.addClass(el,"teste")
            })

        setTimeout(()=>{

            variaveis.btnAttack.disabled = false; 
            variaveis.btnDodge.disabled = false;
            variaveis.btnRun.disabled = false; 

            variaveis.btnAll.map((el)=>{
                essencial.removeClass(el,"teste")
            })
            
            CaveBtn() //arrumar esse sistema referente ao design do sistema XD 

        },3000)
    }

    if(valHp >0){
        setTimeout(()=>{
            essencial.xpAdd("attack");
            variaveis.text.innerHTML = textArmazem(13,false,false,monsterAtivoName,monsterDemag)
        
            monsterAttack(0,monsterDemag,monsterAtivoName); 
        },200)
    }
    
}


//Monster Attack

function monsterAttack(type,demage,name){
    let hpReturnPlayer = essencial.perderHp(variaveis.hpCharacter.innerHTML,type,demage,name);
    if(hpReturnPlayer<=0){
            variaveis.btnAttack.disabled = true;
            variaveis.btnDodge.disabled = true;
            variaveis.btnRun.disabled = true;

            variaveis.btnAll.map((el)=>{
                essencial.addClass(el,"teste")
            })

            setTimeout(()=>{
                variaveis.text.innerHTML = textArmazem(24)  
            },2000)
                
             
            setTimeout ((evt)=>{
                variaveis.btnAttack.disabled = false;
                variaveis.btnDodge.disabled = false;
                variaveis.btnRun.disabled = false;

                variaveis.btnAll.map((el)=>{
                    essencial.removeClass(el,"teste")
                })

                script.statusETextoInicial();

                essencial.removeClass(variaveis.containeractions,"MonsterOn");
                essencial.addClass(variaveis.containerMonster,"esconder");
                essencial.esconder(variaveis.btnAttack);
                essencial.esconder(variaveis.btnRun);
                essencial.esconder(variaveis.btnDodge);

                essencial.nEsconder(variaveis.btnVillage);
            },6000);
    }
}

export function btnDodge(monsterDemage,monsterAtivoName){
    let val  = Math.floor(Math.random() * 11);
    console.log(`valor: ${val}`)
    if(val%2 == 0){
        essencial.xpAdd("dodge")
         variaveis.text.innerHTML = textArmazem(22,false,false, monsterAtivoName);
    }else{
        setTimeout(() => {
            monsterAttack(0,monsterDemage,monsterAtivoName); 
            variaveis.text.innerHTML = textArmazem(23,false,false,monsterAtivoName,monsterDemage);
        }, 400);
    }
}



export function runBtn(monsterName){
    essencial.removeClass(variaveis.containeractions,"MonsterOn");
    essencial.addClass(variaveis.containerMonster,"esconder");

    variaveis.btnAttack.disabled = true;
    variaveis.btnDodge.disabled = true;
    variaveis.btnRun.disabled = true;

    variaveis.text.innerHTML = textArmazem(17,false,false,monsterName)
    setTimeout((evt)=>{

        variaveis.btnAttack.disabled = false;
        variaveis.btnDodge.disabled = false;
        variaveis.btnRun.disabled =false;
    

        essencial.esconder(variaveis.btnAttack);
        essencial.esconder(variaveis.btnDodge);
        essencial.esconder(variaveis.btnRun);
    
        essencial.nEsconder(variaveis.btnExplore)
        essencial.nEsconder(variaveis.btnSlime);
        essencial.nEsconder(variaveis.btnCano);
        essencial.nEsconder(variaveis.btnVillage);

        variaveis.text.innerHTML = textArmazem(9);

    },2000)
    


 
}



