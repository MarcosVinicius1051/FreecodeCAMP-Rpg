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
    essencial.textoMudar(variaveis.text,0)
}

export function storeBtn(){
    essencial.esconder(variaveis.btnDragon);
    essencial.esconder(variaveis.btnCave);
    essencial.esconder(variaveis.btnStore);

    essencial.nEsconder(variaveis.btnStoreWeapon);
    essencial.nEsconder(variaveis.btnHpStore);
    essencial.nEsconder(variaveis.btnVillage);

    variaveis.text.innerHTML = textArmazem(2);
    essencial.textoMudar(variaveis.text,0)
}

export function buyHp(){
    essencial.buyItems(parseInt(variaveis.goldCharacter.innerHTML),"hp");
    setTimeout(()=>{
        variaveis.text.innerHTML = textArmazem(2);
    },3000)
    essencial.textoMudar(variaveis.text,3000)
}

export function buyWeapon(){
    weaponValueIndex = essencial.buyItems(parseInt(variaveis.goldCharacter.innerHTML),"weapon",weaponValueIndex);
 console.log(weaponValueIndex )

    if(weaponValueIndex >= 3){
        weaponValueIndex = 3
        setTimeout(() => {
            variaveis.text.innerHTML = textArmazem(2);
            
        }, 3000);
        essencial.textoMudar(variaveis.text,3000)
    }else{
 
        
        setTimeout(() => {
            variaveis.text.innerHTML = textArmazem(2);
            
        }, 3000)
        essencial.textoMudar(variaveis.text,3000)
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
    essencial.textoMudar(variaveis.text,0)
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
    essencial.textoMudar(variaveis.text,0)

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
    essencial.textoMudar(variaveis.text,0)

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

    variaveis.text.innerHTML = textArmazem(10,false,false,"pombo");
    essencial.textoMudar(variaveis.text,0)

    return "pombo"
}

//arrumar sistema de hp do jogador, para quando morrer o jogo reiniciar.

export function characterAttack(type,demage,monsterDemag,monsterAtivoName){
    
    let valHp = essencial.perderHp(variaveis.monsterHp.innerHTML,type,demage);
    essencial.playAudio(variaveis.playerAudioAtq);

    if(valHp == 0){
        if(monsterAtivoName == "pombo"){
            essencial.morteDoPombo();
        }else{
        let goldResult = essencial.pagamento(variaveis.monsterName.innerHTML.toString(),parseInt(variaveis.goldCharacter.innerHTML));
        variaveis.text.innerHTML = textArmazem(15,false,goldResult,monsterAtivoName)
        essencial.textoMudar(variaveis.text,0)

        essencial.monsterAudioDead(monsterAtivoName)
        

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
            
            CaveBtn() 

        },3000)
    }
    }

    if(valHp >0){

        variaveis.btnAttack.disabled = true;
        variaveis.btnDodge.disabled = true;
        variaveis.btnRun.disabled = true;

        variaveis.btnAll.map((el)=>{
            essencial.addClass(el,"teste")
        })
        
        setTimeout(()=>{
            essencial.xpAdd("attack");
            
            variaveis.btnAttack.disabled = false;
            variaveis.btnDodge.disabled = false;
            variaveis.btnRun.disabled = false; 

            variaveis.btnAll.map((el)=>{
                essencial.removeClass(el,"teste")
            })

        },3000)

        setTimeout(() => {
            monsterAttack(0,monsterDemag,monsterAtivoName);
            variaveis.text.innerHTML = textArmazem(13,false,false,monsterAtivoName,monsterDemag)
        }, 1000);

        essencial.textoMudar(variaveis.text,1000)
        
        

    
    }
    
}


//Monster Attack

function monsterAttack(type,demage,name){
    
    let hpReturnPlayer = essencial.perderHp(variaveis.hpCharacter.innerHTML,type,demage,name);

    essencial.playAudio(variaveis.playerAudioDemage);

    if(hpReturnPlayer<=0){

            essencial.playAudio(variaveis.playerAudioDead)

            variaveis.btnAll.map((el)=>{
                essencial.addClass(el,"teste")
            })

            setTimeout(()=>{
                variaveis.text.innerHTML = textArmazem(24)  
            },2000)
            essencial.textoMudar(variaveis.text,2000)
            
           essencial.nEsconder(variaveis.imgMorte)
           essencial.playAudio(variaveis.vocêMorreuAudio, 8000)

            variaveis.btnAttack.disabled = true;
            variaveis.btnDodge.disabled = true;
            variaveis.btnRun.disabled = true;
       

           setTimeout(()=>{
            essencial.esconder(variaveis.imgMorte);
           },5000)
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
            },8000);
    }
}

export function btnDodge(monsterDemage,monsterAtivoName){
    let val  = Math.floor(Math.random() * 11);
    console.log(`valor: ${val}`)
    if(val%2 == 0){
        essencial.xpAdd("dodge")
         variaveis.text.innerHTML = textArmazem(22,false,false, monsterAtivoName);
         essencial.textoMudar(variaveis.text,0);
    }else{
        setTimeout(() => {
            essencial.playAudio(variaveis.playerAudioDemage)
            monsterAttack(0,monsterDemage,monsterAtivoName); 
            variaveis.text.innerHTML = textArmazem(23,false,false,monsterAtivoName,monsterDemage);
            essencial.textoMudar(variaveis.text,0)
        }, 400);
    }
}



export function runBtn(monsterName){
    essencial.playAudio(variaveis.playerAudioFugir);

    essencial.removeClass(variaveis.containeractions,"MonsterOn");
    essencial.addClass(variaveis.containerMonster,"esconder");

    variaveis.btnAttack.disabled = true;
    variaveis.btnDodge.disabled = true;
    variaveis.btnRun.disabled = true;
    
    variaveis.text.innerHTML = textArmazem(17,false,false,monsterName)
    essencial.textoMudar(variaveis.text,0)

    variaveis.btnAll.map((el)=>{
        essencial.addClass(el,"teste")
    })

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
        essencial.textoMudar(variaveis.text,0);

        variaveis.btnAll.map((el)=>{
            essencial.removeClass(el,"teste")
        })

    },2000)
    


 
}



